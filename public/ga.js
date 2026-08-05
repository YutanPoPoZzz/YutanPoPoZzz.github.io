// GA4 初期化。CSPで script-src 'unsafe-inline' を許可したくないため、
// 定番のインラインスニペットではなく自ドメインの外部JSとして読み込む。
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-25QMLSF6S0');
