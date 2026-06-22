/* =========================================================
   設定ファイル（管理者＝あなた専用）
   ---------------------------------------------------------
   Cloudflare Worker のデプロイ後、workerUrl を貼り付けて
   保存 → git push してください。
   APIキーはここには書きません（Worker の Secret に保管）。
   ========================================================= */
window.BLESS_CONFIG = {

  // ▼ Cloudflare Worker のURL（デプロイ後に貼り付け）
  //    例: https://bless-meo.haruto040630.workers.dev
  workerUrl: "",

  geminiModel: "gemini-2.5-flash",

  // Anthropic Claude を使う場合のみ（従量課金）
  anthropicApiKey: "",
  anthropicModel:  "claude-sonnet-4-6"

};
