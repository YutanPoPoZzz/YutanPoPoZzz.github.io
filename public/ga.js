// GA4 初期化。CSPで script-src 'unsafe-inline' を許可したくないため、
// 定番のインラインスニペットではなく自ドメインの外部JSとして読み込む。
(function () {
  var ID = 'G-25QMLSF6S0';
  // 本番ドメインを列挙する。独自ドメイン移行後も旧ドメインを残すのは、
  // GitHubの転送が効くまでの期間に計測が落ちないようにするため。
  // ★ここを直し忘れると、サイトは正常なのにGA4だけ静かに止まる
  var HOSTS = ['yutanpopozzz.com', 'www.yutanpopozzz.com', 'yutanpopozzz.github.io'];

  // 本番ドメイン以外(ローカルプレビュー等)からは計測を飛ばさない
  if (HOSTS.indexOf(location.hostname) === -1) return;

  // ?ga-optout=1 でこのブラウザを恒久除外、?ga-optout=0 で解除。
  // 自分のアクセスを数字に混ぜないための仕組み(固定IPが無くIP除外が使えないため)。
  try {
    var q = new URLSearchParams(location.search);
    if (q.has('ga-optout')) {
      if (q.get('ga-optout') === '0') localStorage.removeItem('ga-optout');
      else localStorage.setItem('ga-optout', '1');
    }
    if (localStorage.getItem('ga-optout') === '1') return;
  } catch (e) {
    // プライベートモード等でlocalStorageが使えない場合は通常どおり計測する
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  gtag('js', new Date());
  gtag('config', ID);

  // 除外時はGoogleへのリクエスト自体を発生させないため、ここで初めて読み込む
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);
})();
