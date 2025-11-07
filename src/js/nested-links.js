(() => {
  function u() {
    function n(t, e, i) {
      let r = document.createElement("a");
      (r.href = t),
        (r.target = i),
        (r.rel = e),
        document.body.appendChild(r),
        r.click(),
        r.remove();
    }

    function o(t) {
      if (this.dataset.hydrated) {
        this.removeEventListener("click", o);
        return;
      }
      t.preventDefault(), t.stopPropagation();
      let e = this.getAttribute("href");
      if (!e) return;
      if (
        /Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)
          ? t.metaKey
          : t.ctrlKey
      )
        return n(e, "", "_blank");
      let r = this.getAttribute("rel") ?? "",
        c = this.getAttribute("target") ?? "";
      n(e, r, c);
    }

    function a(t) {
      if (this.dataset.hydrated) {
        this.removeEventListener("auxclick", o);
        return;
      }
      t.preventDefault(), t.stopPropagation();
      let e = this.getAttribute("href");
      e && n(e, "", "_blank");
    }

    function s(t) {
      if (this.dataset.hydrated) {
        this.removeEventListener("keydown", s);
        return;
      }
      if (t.key !== "Enter") return;
      t.preventDefault(), t.stopPropagation();
      let e = this.getAttribute("href");
      if (!e) return;
      let i = this.getAttribute("rel") ?? "",
        r = this.getAttribute("target") ?? "";
      n(e, i, r);
    }

    document.querySelectorAll("[data-nested-link]").forEach((t) => {
      t instanceof HTMLElement &&
        (t.addEventListener("click", o),
        t.addEventListener("auxclick", a),
        t.addEventListener("keydown", s));
    });
  }

  return u;
})()();
