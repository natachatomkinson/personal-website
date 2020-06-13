var app = (function () {
  "use strict";
  function t() {}
  function e(t) {
    return t();
  }
  function n() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(e);
  }
  function r(t) {
    return "function" == typeof t;
  }
  function s(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function a(t, e) {
    t.appendChild(e);
  }
  function i(t) {
    t.parentNode.removeChild(t);
  }
  function c(t) {
    return document.createElement(t);
  }
  function l(t) {
    return document.createTextNode(t);
  }
  function u() {
    return l(" ");
  }
  function f(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function d(t, e) {
    (e = "" + e), t.data !== e && (t.data = e);
  }
  let m;
  function p(t) {
    m = t;
  }
  const g = [],
    h = [],
    y = [],
    $ = [],
    b = Promise.resolve();
  let v = !1;
  function x(t) {
    y.push(t);
  }
  let w = !1;
  const k = new Set();
  function _() {
    if (!w) {
      w = !0;
      do {
        for (let t = 0; t < g.length; t += 1) {
          const e = g[t];
          p(e), j(e.$$);
        }
        for (g.length = 0; h.length; ) h.pop()();
        for (let t = 0; t < y.length; t += 1) {
          const e = y[t];
          k.has(e) || (k.add(e), e());
        }
        y.length = 0;
      } while (g.length);
      for (; $.length; ) $.pop()();
      (v = !1), (w = !1), k.clear();
    }
  }
  function j(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(x);
    }
  }
  const z = new Set();
  function E(t, e) {
    -1 === t.$$.dirty[0] &&
      (g.push(t), v || ((v = !0), b.then(_)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function C(s, a, c, l, u, f, d = [-1]) {
    const g = m;
    p(s);
    const h = a.props || {},
      y = (s.$$ = {
        fragment: null,
        ctx: null,
        props: f,
        update: t,
        not_equal: u,
        bound: n(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(g ? g.$$.context : []),
        callbacks: n(),
        dirty: d,
      });
    let $ = !1;
    if (
      ((y.ctx = c
        ? c(s, h, (t, e, ...n) => {
            const o = n.length ? n[0] : e;
            return (
              y.ctx &&
                u(y.ctx[t], (y.ctx[t] = o)) &&
                (y.bound[t] && y.bound[t](o), $ && E(s, t)),
              e
            );
          })
        : []),
      y.update(),
      ($ = !0),
      o(y.before_update),
      (y.fragment = !!l && l(y.ctx)),
      a.target)
    ) {
      if (a.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(a.target);
        y.fragment && y.fragment.l(t), t.forEach(i);
      } else y.fragment && y.fragment.c();
      a.intro && (b = s.$$.fragment) && b.i && (z.delete(b), b.i(v)),
        (function (t, n, s) {
          const {
            fragment: a,
            on_mount: i,
            on_destroy: c,
            after_update: l,
          } = t.$$;
          a && a.m(n, s),
            x(() => {
              const n = i.map(e).filter(r);
              c ? c.push(...n) : o(n), (t.$$.on_mount = []);
            }),
            l.forEach(x);
        })(s, a.target, a.anchor),
        _();
    }
    var b, v;
    p(g);
  }
  function N(e) {
    let n,
      o,
      r,
      s,
      m,
      p,
      g,
      h,
      y,
      $,
      b,
      v,
      x,
      w,
      k,
      _,
      j,
      z,
      E,
      C,
      N,
      A,
      R,
      S,
      I,
      O,
      P = e[3].join(", ") + "",
      T = e[1].join(", ") + "",
      q = e[2].join(", ") + "",
      B = e[4].join(", ") + "";
    return {
      c() {
        (n = c("main")),
          (o = c("h1")),
          (r = l("Hello, I am ")),
          (s = l(e[0])),
          (m = l("!")),
          (p = u()),
          (g = c("div")),
          (h = c("p")),
          (h.textContent = "Well, I have been busy"),
          (y = u()),
          ($ = c("p")),
          (b = l("writing production apps in these languages: ")),
          (v = l(P)),
          (x = u()),
          (w = c("p")),
          (k = l("using these frameworks: ")),
          (_ = l(T)),
          (j = u()),
          (z = c("p")),
          (E = l("with some of these really cool tools: ")),
          (C = l(q)),
          (N = u()),
          (A = c("p")),
          (R = l("while learning more about: ")),
          (S = l(B)),
          (I = u()),
          (O = c("a")),
          (O.textContent = "Email me"),
          f(o, "class", "svelte-zy6d0d"),
          f(h, "class", "svelte-zy6d0d"),
          f($, "class", "svelte-zy6d0d"),
          f(w, "class", "svelte-zy6d0d"),
          f(z, "class", "svelte-zy6d0d"),
          f(A, "class", "svelte-zy6d0d"),
          f(g, "class", "home-main-description svelte-zy6d0d"),
          f(O, "href", "mailto:website@natachatomkinson.co.uk"),
          f(O, "target", "_blank"),
          f(O, "rel", "noopener noreferrer"),
          f(n, "class", "svelte-zy6d0d");
      },
      m(t, e) {
        !(function (t, e, n) {
          t.insertBefore(e, n || null);
        })(t, n, e),
          a(n, o),
          a(o, r),
          a(o, s),
          a(o, m),
          a(n, p),
          a(n, g),
          a(g, h),
          a(g, y),
          a(g, $),
          a($, b),
          a($, v),
          a(g, x),
          a(g, w),
          a(w, k),
          a(w, _),
          a(g, j),
          a(g, z),
          a(z, E),
          a(z, C),
          a(g, N),
          a(g, A),
          a(A, R),
          a(A, S),
          a(n, I),
          a(n, O);
      },
      p(t, [e]) {
        1 & e && d(s, t[0]),
          8 & e && P !== (P = t[3].join(", ") + "") && d(v, P),
          2 & e && T !== (T = t[1].join(", ") + "") && d(_, T),
          4 & e && q !== (q = t[2].join(", ") + "") && d(C, q),
          16 & e && B !== (B = t[4].join(", ") + "") && d(S, B);
      },
      i: t,
      o: t,
      d(t) {
        t && i(n);
      },
    };
  }
  function A(t, e, n) {
    let { name: o } = e,
      { frameworks: r } = e,
      { tools: s } = e,
      { languages: a } = e,
      { interests: i } = e;
    return (
      (t.$set = (t) => {
        "name" in t && n(0, (o = t.name)),
          "frameworks" in t && n(1, (r = t.frameworks)),
          "tools" in t && n(2, (s = t.tools)),
          "languages" in t && n(3, (a = t.languages)),
          "interests" in t && n(4, (i = t.interests));
      }),
      [o, r, s, a, i]
    );
  }
  return new (class extends class {
    $destroy() {
      !(function (t, e) {
        const n = t.$$;
        null !== n.fragment &&
          (o(n.on_destroy),
          n.fragment && n.fragment.d(e),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []));
      })(this, 1),
        (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set() {}
  } {
    constructor(t) {
      super(),
        C(this, t, A, N, s, {
          name: 0,
          frameworks: 1,
          tools: 2,
          languages: 3,
          interests: 4,
        });
    }
  })({
    target: document.body,
    props: {
      name: "Natacha Tomkinson",
      languages: ["Javascript", "Node", "Ruby", "Elixir"],
      frameworks: ["React", "Rails", "Phoenix"],
      tools: [
        "intellij",
        "vscode",
        "github",
        "docker",
        "docker-compose",
        "aws",
      ],
      interests: ["C", "Svelte"],
    },
  });
})();
//# sourceMappingURL=bundle.js.map
