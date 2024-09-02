const GLITCH_URL = "https://ここにglichのプロジェクト名.glitch.me";

/**
 * Glitchプロジェクトを起こす関数
 */
function wakeGlitch() {
  const payload = {
    type: "wake",
    timestamp: new Date().toISOString(),
  };
  sendGlitch(GLITCH_URL, payload);
}

/**
 * GlitchプロジェクトにHTTPリクエストを送信する関数
 * @param {string} uri - リクエスト先のURI
 * @param {Object} payload - 送信するJSONペイロード
 */
function sendGlitch(uri, payload) {
  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  };

  try {
    const response = UrlFetchApp.fetch(uri, options);
    Logger.log(`リクエスト成功: ${response.getResponseCode()}`);
  } catch (error) {
    Logger.log(`リクエスト失敗: ${error}`);
  }
}
