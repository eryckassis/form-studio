(() => {
  function i() {
    for (let e of document.querySelectorAll("[data-framer-original-sizes]")) {
      let t = e.getAttribute("data-framer-original-sizes");
      t === "" ? e.removeAttribute("sizes") : e.setAttribute("sizes", t),
        e.removeAttribute("data-framer-original-sizes");
    }
  }

  function a() {
    window.__framer_onRewriteBreakpoints = i;
  }

  return a;
})()();
