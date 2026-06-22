/* =========================================================
   設定ファイル（管理者＝あなた専用）
   ---------------------------------------------------------
   Cloudflare Worker のデプロイ後、workerUrl を貼り付けて
   保存 → git push してください。
   APIキーはここには書きません（Worker の Secret に保管）。
   ========================================================= */
window.BLESS_CONFIG = {

  // ▼ Gemini の APIキー（Workerを設定するまではこちらで直接動作）
  geminiApiKey: "AQ.Ab8RN6L7VgwyW4AcdziJxKlqd2TGhBOIQpoqntJMKaD8bbK2mg",
  geminiModel:  "gemini-2.5-flash",

  // ▼ Cloudflare Worker URL（デプロイ後にここへ貼り付け）
  //    例: https://bless-meo.haruto040630.workers.dev
  workerUrl: "",

  // ▼ 履歴の合言葉（Worker の HISTORY_TOKEN と同じ文字列にする）
  //    例: "breath2024"  ← 好きな文字列でOK
  historyToken: "",

  // Anthropic Claude を使う場合のみ（従量課金）
  anthropicApiKey: "",
  anthropicModel:  "claude-sonnet-4-6"

};
