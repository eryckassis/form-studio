/**
 * Framer Appear Animations
 * Handles appear effect animations with data-framer-appear-id attribute
 */

(() => {
  function c(i, o, m) {
    if (
      window.__framer_disable_appear_effects_optimization__ ||
      typeof animator > "u"
    )
      return;

    let e = { detail: { bg: document.hidden } };

    requestAnimationFrame(() => {
      let a = "framer-appear-start";
      performance.mark(a, e),
        animator.animateAppearEffects(
          JSON.parse(window.__framer__appearAnimationsContent.text),
          (s, p, d) => {
            let t = document.querySelector(s);
            if (t)
              for (let [r, f] of Object.entries(p))
                animator.startOptimizedAppearAnimation(t, r, f, d[r]);
          },
          i,
          o,
          m &&
            window.matchMedia("(prefers-reduced-motion:reduce)").matches === !0,
          animator.getActiveVariantHash(
            JSON.parse(window.__framer__breakpoints.text)
          )
        );
      let n = "framer-appear-end";
      performance.mark(n, e),
        performance.measure("framer-appear", {
          start: a,
          end: n,
          detail: e.detail,
        });
    });
  }

  return c;
})()("data-framer-appear-id", "__Appear_Animation_Transform__", false);
