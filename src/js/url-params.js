!(function () {
  var w = "framer_variant";

  function u(a, r) {
    let n = r.indexOf("#"),
      t = n === -1 ? r : r.substring(0, n),
      i = n === -1 ? "" : r.substring(n),
      e = t.indexOf("?"),
      h = e === -1 ? t : t.substring(0, e),
      d = e === -1 ? "" : t.substring(e),
      s = new URLSearchParams(d),
      g = new URLSearchParams(a);
    for (let [o, l] of g) s.has(o) || (o !== w && s.append(o, l));
    let c = s.toString();
    return c === "" ? t + i : h + "?" + c + i;
  }

  var p = 'div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',
    f = "div#main a[data-framer-preserve-params]",
    m,
    S =
      (m = document.currentScript) == null
        ? void 0
        : m.hasAttribute("data-preserve-internal-params");

  if (
    window.location.search &&
    !/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
      navigator.userAgent
    )
  ) {
    let a = document.querySelectorAll(S ? `${p},${f}` : f);
    for (let r of a) {
      let n = u(window.location.search, r.href);
      r.setAttribute("href", n);
    }
  }
})();
