/* =========================================================
   設定ファイル（管理者＝あなた専用）
   ※ お母様はこのファイルを触る必要はありません
   ---------------------------------------------------------
   ここに APIキー を一度だけ貼り付けて保存してください。
   保存後はアプリを開くたびに自動で読み込まれます。
   ========================================================= */
window.BLESS_CONFIG = {

  // 使うサービス： "gemini"（無料枠あり）または "anthropic"
  provider: "gemini",

  // ▼ Gemini の無料APIキーをここに貼り付け（ダブルクォートの中）
  //    取得 → https://aistudio.google.com/app/apikey
  geminiApiKey: "AQ.Ab8RN6L7VgwyW4AcdziJxKlqd2TGhBOIQpoqntJMKaD8bbK2mg",
  geminiModel: "gemini-2.5-flash",

  // ▼ Anthropic（Claude）を使う場合だけ設定（従量課金）
  anthropicApiKey: "",
  anthropicModel: "claude-sonnet-4-6"

};
