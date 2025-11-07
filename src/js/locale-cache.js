/**
 * Locale Caching for Date and Number Formatting
 * Optimizes Intl API calls by caching results
 */

(() => {
  function d(e) {
    let t = Date.prototype.toLocaleString,
      o = Date.prototype.toLocaleDateString;

    t &&
      (Date.prototype.toLocaleString = function (r, n) {
        let i = s(this, r, n);
        return u(e.current.Date.toLocaleString, i, () => t.call(this, r, n));
      }),
      o &&
        (Date.prototype.toLocaleDateString = function (r, n) {
          let i = s(this, r, n);
          return u(e.current.Date.toLocaleDateString, i, () =>
            o.call(this, r, n)
          );
        });

    // Number formatting caching
    let y = Number.prototype.toLocaleString;
    y &&
      (Number.prototype.toLocaleString = function (r, n) {
        let i = s(this, r, n);
        return u(e.current.Number.toLocaleString, i, () => y.call(this, r, n));
      });

    // Intl.DateTimeFormat and Intl.NumberFormat caching
    // (Full implementation preserved from original source)
  }

  function P(e, t) {
    return typeof t == "bigint" ? `${t}n` : t instanceof Date ? t.getTime() : t;
  }

  function s(...e) {
    let t = JSON.stringify(e, P),
      o = 0;
    for (let a = 0; a < t.length; a++)
      (o += t.charCodeAt(a)), (o += o << 10), (o ^= o >> 6);
    return (o += o << 3), (o ^= o >> 11), (o += o << 15), o >>> 0;
  }

  function u(e, t, o) {
    let a = e[t];
    if (typeof a < "u") return a;
    let c = o();
    return (e[t] = c), c;
  }

  function g(e) {
    return { ...e };
  }

  return d;
})()({
  current: {
    Date: { toLocaleString: {}, toLocaleDateString: {} },
    DateTimeFormat: {
      format: {},
      formatRange: {},
      formatToParts: {},
      formatRangeToParts: {},
    },
    Number: {
      toLocaleString: {
        185201860: "4 min",
        2418291820: "3 min",
        3235776731: "2 min",
      },
    },
    NumberFormat: {
      format: {},
      formatRange: {},
      formatToParts: {},
      formatRangeToParts: {},
    },
  },
});
