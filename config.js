/* =========================================================
   設定ファイル（管理者＝あなた専用）
   ---------------------------------------------------------
   Cloudflare Worker のデプロイ後、workerUrl を貼り付けて
   保存 → git push してください。
   APIキーはここには書きません（Worker の Secret に保管）。
   ========================================================= */
window.BLESS_CONFIG = {

  // APIキーはWorkerで管理するためここは空でOK
  geminiApiKey: "",
  geminiModel:  "gemini-2.5-flash",

  // ▼ Cloudflare Worker URL
  workerUrl: "https://breath-meo.haruto-haruto-0630.workers.dev",

  // ▼ 履歴の合言葉（CloudflareのHISTORY_TOKENと同じ）
  historyToken: "breath0620",

  // Anthropic Claude を使う場合のみ（従量課金）
  anthropicApiKey: "",
  anthropicModel:  "claude-sonnet-4-6"

};
