/* =========================================================
   設定ファイル（管理者＝あなた専用）
   ---------------------------------------------------------
   Cloudflare Worker のデプロイ後、workerUrl を貼り付けて
   保存 → git push してください。
   APIキーはここには書きません（Worker の Secret に保管）。
   ========================================================= */
window.BLESS_CONFIG = {

  // ▼ Gemini の APIキー（現在はこちらで直接動作）
  //    取得 → https://aistudio.google.com/app/apikey
  geminiApiKey: "AQ.Ab8RN6L7VgwyW4AcdziJxKlqd2TGhBOIQpoqntJMKaD8bbK2mg",
  geminiModel:  "gemini-2.5-flash",

  // ▼ Cloudflare Worker URL（セキュリティ強化の準備ができたら設定）
  //    設定するとWorker経由になりAPIキーがコードから消える
  workerUrl: "",

  // Anthropic Claude を使う場合のみ（従量課金）
  anthropicApiKey: "",
  anthropicModel:  "claude-sonnet-4-6"

};
