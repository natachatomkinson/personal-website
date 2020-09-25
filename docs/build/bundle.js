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
  function l(t) {
    return document.createElement(t);
  }
  function c(t) {
    return document.createTextNode(t);
  }
  function u() {
    return c(" ");
  }
  function f(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function d(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  let p;
  function m(t) {
    p = t;
  }
  const h = [],
    g = [],
    $ = [],
    y = [],
    b = Promise.resolve();
  let k = !1;
  function v(t) {
    $.push(t);
  }
  let _ = !1;
  const x = new Set();
  function w() {
    if (!_) {
      _ = !0;
      do {
        for (let t = 0; t < h.length; t += 1) {
          const e = h[t];
          m(e), j(e.$$);
        }
        for (m(null), h.length = 0; g.length; ) g.pop()();
        for (let t = 0; t < $.length; t += 1) {
          const e = $[t];
          x.has(e) || (x.add(e), e());
        }
        $.length = 0;
      } while (h.length);
      for (; y.length; ) y.pop()();
      (k = !1), (_ = !1), x.clear();
    }
  }
  function j(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(v);
    }
  }
  const z = new Set();
  function E(t, e) {
    -1 === t.$$.dirty[0] &&
      (h.push(t), k || ((k = !0), b.then(w)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function C(s, a, l, c, u, f, d = [-1]) {
    const h = p;
    m(s);
    const g = a.props || {},
      $ = (s.$$ = {
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
        context: new Map(h ? h.$$.context : []),
        callbacks: n(),
        dirty: d,
        skip_bound: !1,
      });
    let y = !1;
    if (
      (($.ctx = l
        ? l(s, g, (t, e, ...n) => {
            const o = n.length ? n[0] : e;
            return (
              $.ctx &&
                u($.ctx[t], ($.ctx[t] = o)) &&
                (!$.skip_bound && $.bound[t] && $.bound[t](o), y && E(s, t)),
              e
            );
          })
        : []),
      $.update(),
      (y = !0),
      o($.before_update),
      ($.fragment = !!c && c($.ctx)),
      a.target)
    ) {
      if (a.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(a.target);
        $.fragment && $.fragment.l(t), t.forEach(i);
      } else $.fragment && $.fragment.c();
      a.intro && (b = s.$$.fragment) && b.i && (z.delete(b), b.i(k)),
        (function (t, n, s) {
          const {
            fragment: a,
            on_mount: i,
            on_destroy: l,
            after_update: c,
          } = t.$$;
          a && a.m(n, s),
            v(() => {
              const n = i.map(e).filter(r);
              l ? l.push(...n) : o(n), (t.$$.on_mount = []);
            }),
            c.forEach(v);
        })(s, a.target, a.anchor),
        w();
    }
    var b, k;
    m(h);
  }
  function N(e) {
    let n,
      o,
      r,
      s,
      p,
      m,
      h,
      g,
      $,
      y,
      b,
      k,
      v,
      _,
      x,
      w,
      j,
      z,
      E,
      C,
      N,
      A,
      O,
      R,
      S,
      T,
      I = e[3].join(", ") + "",
      P = e[1].join(", ") + "",
      q = e[2].join(", ") + "",
      B = e[4].join(", ") + "";
    return {
      c() {
        (n = l("main")),
          (o = l("h1")),
          (r = c("Hello, I am ")),
          (s = c(e[0])),
          (p = c("!")),
          (m = u()),
          (h = l("div")),
          (g = l("p")),
          (g.textContent = "Well, I have been busy"),
          ($ = u()),
          (y = l("p")),
          (b = c("writing production apps in these languages: ")),
          (k = c(I)),
          (v = u()),
          (_ = l("p")),
          (x = c("using these frameworks: ")),
          (w = c(P)),
          (j = u()),
          (z = l("p")),
          (E = c("with some of these really cool tools: ")),
          (C = c(q)),
          (N = u()),
          (A = l("p")),
          (O = c("while learning more about: ")),
          (R = c(B)),
          (S = u()),
          (T = l("a")),
          (T.textContent = "Email me"),
          f(o, "class", "svelte-zy6d0d"),
          f(g, "class", "svelte-zy6d0d"),
          f(y, "class", "svelte-zy6d0d"),
          f(_, "class", "svelte-zy6d0d"),
          f(z, "class", "svelte-zy6d0d"),
          f(A, "class", "svelte-zy6d0d"),
          f(h, "class", "home-main-description svelte-zy6d0d"),
          f(T, "href", "mailto:website@natachatomkinson.co.uk"),
          f(T, "target", "_blank"),
          f(T, "rel", "noopener noreferrer"),
          f(n, "class", "svelte-zy6d0d");
      },
      m(t, e) {
        !(function (t, e, n) {
          t.insertBefore(e, n || null);
        })(t, n, e),
          a(n, o),
          a(o, r),
          a(o, s),
          a(o, p),
          a(n, m),
          a(n, h),
          a(h, g),
          a(h, $),
          a(h, y),
          a(y, b),
          a(y, k),
          a(h, v),
          a(h, _),
          a(_, x),
          a(_, w),
          a(h, j),
          a(h, z),
          a(z, E),
          a(z, C),
          a(h, N),
          a(h, A),
          a(A, O),
          a(A, R),
          a(n, S),
          a(n, T);
      },
      p(t, [e]) {
        1 & e && d(s, t[0]),
          8 & e && I !== (I = t[3].join(", ") + "") && d(k, I),
          2 & e && P !== (P = t[1].join(", ") + "") && d(w, P),
          4 & e && q !== (q = t[2].join(", ") + "") && d(C, q),
          16 & e && B !== (B = t[4].join(", ") + "") && d(R, B);
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
      (t.$$set = (t) => {
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
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
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
