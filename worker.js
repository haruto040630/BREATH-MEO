/**
 * Cafe de BREATH - Cloudflare Worker
 * 役割①: Gemini API プロキシ（APIキーを隠す）
 * 役割②: 全端末で履歴を共有（KV ストレージ）
 *
 * 必要な環境変数（Secrets）:
 *   GEMINI_API_KEY   - GeminiのAPIキー
 *   ALLOWED_ORIGIN   - https://haruto040630.github.io
 *   HISTORY_TOKEN    - 履歴アクセス用の合言葉（好きな文字列でOK）
 *
 * KV バインディング:
 *   HISTORY_KV       - KV NamespaceをこのWorkerにバインド
 */
export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const primary = env.ALLOWED_ORIGIN || 'https://haruto040630.github.io';

    // localhost（開発環境）も許可する
    const allowedOrigins = [primary, 'http://localhost:8765', 'http://localhost:8766', 'http://localhost:8770'];
    const isAllowed = allowedOrigins.some(o => origin === o || origin.startsWith(o));
    const corsOrigin = isAllowed ? origin : primary;

    const cors = {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'content-type, x-history-token',
    };

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (!isAllowed) return new Response('Forbidden', { status: 403 });

    const url  = new URL(request.url);
    const json = (body, status = 200) =>
      new Response(JSON.stringify(body), { status, headers: { ...cors, 'content-type': 'application/json' } });

    /* ── /history ── 全端末共有の履歴 ── */
    if (url.pathname === '/history') {
      const token = request.headers.get('x-history-token') || '';
      if (!env.HISTORY_TOKEN || token !== env.HISTORY_TOKEN)
        return new Response('Unauthorized', { status: 401 });

      if (request.method === 'GET') {
        const data = await env.HISTORY_KV.get('history', 'json') || [];
        return json(data);
      }
      if (request.method === 'PUT') {
        const body = await request.json();
        await env.HISTORY_KV.put('history', JSON.stringify(body));
        return json({ ok: true });
      }
      return new Response('Method Not Allowed', { status: 405 });
    }

    /* ── POST / ── Gemini プロキシ ── */
    if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

    const model     = url.searchParams.get('model') || 'gemini-2.5-flash';
    const body      = await request.text();
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;

    try {
      const res  = await fetch(geminiUrl, { method: 'POST', headers: { 'content-type': 'application/json' }, body });
      const data = await res.text();
      return new Response(data, { status: res.status, headers: { ...cors, 'content-type': 'application/json' } });
    } catch (e) {
      return json({ error: { message: 'Upstream error: ' + e.message } }, 502);
    }
  },
};
