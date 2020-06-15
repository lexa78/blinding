!function (e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (p, e) {
  function t(e, t) {
    return t.toUpperCase()
  }

  var n = [], u = n.slice, g = n.concat, a = n.push, o = n.indexOf, i = {}, r = i.toString, m = i.hasOwnProperty,
    v = {}, b = p.document, s = "2.1.4", $ = function (e, t) {
      return new $.fn.init(e, t)
    }, c = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, l = /^-ms-/, d = /-([\da-z])/gi;

  function f(e) {
    var t = "length" in e && e.length, n = $.type(e);
    return "function" !== n && !$.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  $.fn = $.prototype = {
    jquery: s, constructor: $, selector: "", length: 0, toArray: function () {
      return u.call(this)
    }, get: function (e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
    }, pushStack: function (e) {
      var t = $.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
      return $.each(this, e, t)
    }, map: function (n) {
      return this.pushStack($.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    }, slice: function () {
      return this.pushStack(u.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: a, sort: n.sort, splice: n.splice
  }, $.extend = $.fn.extend = function () {
    var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, c = arguments.length, l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || $.isFunction(s) || (s = {}), a === c && (s = this, a--); a < c; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (i = e[t]) && (l && i && ($.isPlainObject(i) || (o = $.isArray(i))) ? (r = o ? (o = !1, n && $.isArray(n) ? n : []) : n && $.isPlainObject(n) ? n : {}, s[t] = $.extend(l, r, i)) : void 0 !== i && (s[t] = i));
    return s
  }, $.extend({
    expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isFunction: function (e) {
      return "function" === $.type(e)
    }, isArray: Array.isArray, isWindow: function (e) {
      return null != e && e === e.window
    }, isNumeric: function (e) {
      return !$.isArray(e) && 0 <= e - parseFloat(e) + 1
    }, isPlainObject: function (e) {
      return !("object" !== $.type(e) || e.nodeType || $.isWindow(e) || e.constructor && !m.call(e.constructor.prototype, "isPrototypeOf"))
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e
    }, globalEval: function (e) {
      var t, n = eval;
      (e = $.trim(e)) && (1 === e.indexOf("use strict") ? ((t = b.createElement("script")).text = e, b.head.appendChild(t).parentNode.removeChild(t)) : n(e))
    }, camelCase: function (e) {
      return e.replace(l, "ms-").replace(d, t)
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, n) {
      var i = 0, o = e.length, r = f(e);
      if (n) {
        if (r) for (; i < o && !1 !== t.apply(e[i], n); i++) ; else for (i in e) if (!1 === t.apply(e[i], n)) break
      } else if (r) for (; i < o && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
      return e
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(c, "")
    }, makeArray: function (e, t) {
      var n = t || [];
      return null != e && (f(Object(e)) ? $.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
    }, inArray: function (e, t, n) {
      return null == t ? -1 : o.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
      return e.length = o, e
    }, grep: function (e, t, n) {
      for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
      return i
    }, map: function (e, t, n) {
      var i, o = 0, r = e.length, s = [];
      if (f(e)) for (; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
      return g.apply([], s)
    }, guid: 1, proxy: function (e, t) {
      var n, i, o;
      return "string" == typeof t && (n = e[t], t = e, e = n), $.isFunction(e) ? (i = u.call(arguments, 2), (o = function () {
        return e.apply(t || this, i.concat(u.call(arguments)))
      }).guid = e.guid = e.guid || $.guid++, o) : void 0
    }, now: Date.now, support: v
  }), $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    i["[object " + t + "]"] = t.toLowerCase()
  });
  var h = function (n) {
    function d(e, t, n) {
      var i = "0x" + t - 65536;
      return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
    }

    function i() {
      v()
    }

    var e, p, x, r, o, g, f, m, w, l, u, v, C, s, b, y, a, h, $, T = "sizzle" + +new Date, F = n.document, S = 0, E = 0,
      c = re(), _ = re(), k = re(), D = function (e, t) {
        return e === t && (u = !0), 0
      }, A = {}.hasOwnProperty, t = [], P = t.pop, I = t.push, L = t.push, N = t.slice, j = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", q = O.replace("w", "w#"),
      H = "\\[" + M + "*(" + O + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + M + "*\\]",
      z = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"), W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      X = new RegExp("^" + M + "*," + M + "*"), Y = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      V = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), U = new RegExp(z), Q = new RegExp("^" + q + "$"),
      Z = {
        ID: new RegExp("^#(" + O + ")"),
        CLASS: new RegExp("^\\.(" + O + ")"),
        TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + H),
        PSEUDO: new RegExp("^" + z),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      }, K = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
      ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, te = /[+~]/, ne = /'|\\/g,
      ie = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig");
    try {
      L.apply(t = N.call(F.childNodes), F.childNodes), t[F.childNodes.length].nodeType
    } catch (e) {
      L = {
        apply: t.length ? function (e, t) {
          I.apply(e, N.call(t))
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) ;
          e.length = n - 1
        }
      }
    }

    function oe(e, t, n, i) {
      var o, r, s, a, c, l, u, d, f, h;
      if ((t ? t.ownerDocument || t : F) !== C && v(t), n = n || [], a = (t = t || C).nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
      if (!i && b) {
        if (11 !== a && (o = ee.exec(e))) if (s = o[1]) {
          if (9 === a) {
            if (!(r = t.getElementById(s)) || !r.parentNode) return n;
            if (r.id === s) return n.push(r), n
          } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && $(t, r) && r.id === s) return n.push(r), n
        } else {
          if (o[2]) return L.apply(n, t.getElementsByTagName(e)), n;
          if ((s = o[3]) && p.getElementsByClassName) return L.apply(n, t.getElementsByClassName(s)), n
        }
        if (p.qsa && (!y || !y.test(e))) {
          if (d = u = T, f = t, h = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
            for (l = g(e), (u = t.getAttribute("id")) ? d = u.replace(ne, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", c = l.length; c--;) l[c] = d + ge(l[c]);
            f = te.test(e) && he(t.parentNode) || t, h = l.join(",")
          }
          if (h) try {
            return L.apply(n, f.querySelectorAll(h)), n
          } catch (e) {
          } finally {
            u || t.removeAttribute("id")
          }
        }
      }
      return m(e.replace(W, "$1"), t, n, i)
    }

    function re() {
      var i = [];
      return function e(t, n) {
        return i.push(t + " ") > x.cacheLength && delete e[i.shift()], e[t + " "] = n
      }
    }

    function se(e) {
      return e[T] = !0, e
    }

    function ae(e) {
      var t = C.createElement("div");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function ce(e, t) {
      for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
    }

    function le(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1
    }

    function ue(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function de(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function fe(s) {
      return se(function (r) {
        return r = +r, se(function (e, t) {
          for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function he(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }

    for (e in p = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, v = oe.setDocument = function (e) {
      var t, n, c = e ? e.ownerDocument || e : F;
      return c !== C && 9 === c.nodeType && c.documentElement ? (s = (C = c).documentElement, (n = c.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), b = !o(c), p.attributes = ae(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), p.getElementsByTagName = ae(function (e) {
        return e.appendChild(c.createComment("")), !e.getElementsByTagName("*").length
      }), p.getElementsByClassName = J.test(c.getElementsByClassName), p.getById = ae(function (e) {
        return s.appendChild(e).id = T, !c.getElementsByName || !c.getElementsByName(T).length
      }), p.getById ? (x.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && b) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, x.filter.ID = function (e) {
        var t = e.replace(ie, d);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }) : (delete x.find.ID, x.filter.ID = function (e) {
        var n = e.replace(ie, d);
        return function (e) {
          var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n
        }
      }), x.find.TAG = p.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, i = [], o = 0, r = t.getElementsByTagName(e);
        if ("*" !== e) return r;
        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
        return i
      }, x.find.CLASS = p.getElementsByClassName && function (e, t) {
        return b ? t.getElementsByClassName(e) : void 0
      }, a = [], y = [], (p.qsa = J.test(c.querySelectorAll)) && (ae(function (e) {
        s.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + T + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || y.push(".#.+[+~]")
      }), ae(function (e) {
        var t = c.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
      })), (p.matchesSelector = J.test(h = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ae(function (e) {
        p.disconnectedMatch = h.call(e, "div"), h.call(e, "[s!='']:x"), a.push("!=", z)
      }), y = y.length && new RegExp(y.join("|")), a = a.length && new RegExp(a.join("|")), t = J.test(s.compareDocumentPosition), $ = t || J.test(s.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1
      }, D = t ? function (e, t) {
        if (e === t) return u = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === c || e.ownerDocument === F && $(F, e) ? -1 : t === c || t.ownerDocument === F && $(F, t) ? 1 : l ? j(l, e) - j(l, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return u = !0, 0;
        var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
        if (!o || !r) return e === c ? -1 : t === c ? 1 : o ? -1 : r ? 1 : l ? j(l, e) - j(l, t) : 0;
        if (o === r) return le(e, t);
        for (n = e; n = n.parentNode;) s.unshift(n);
        for (n = t; n = n.parentNode;) a.unshift(n);
        for (; s[i] === a[i];) i++;
        return i ? le(s[i], a[i]) : s[i] === F ? -1 : a[i] === F ? 1 : 0
      }, c) : C
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t)
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && v(e), t = t.replace(V, "='$1']"), !(!p.matchesSelector || !b || a && a.test(t) || y && y.test(t))) try {
        var n = h.call(e, t);
        if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (e) {
      }
      return 0 < oe(t, C, null, [e]).length
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && v(e), $(e, t)
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== C && v(e);
      var n = x.attrHandle[t.toLowerCase()], i = n && A.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !b) : void 0;
      return void 0 !== i ? i : p.attributes || !b ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, oe.uniqueSort = function (e) {
      var t, n = [], i = 0, o = 0;
      if (u = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(D), u) {
        for (; t = e[o++];) t === e[o] && (i = n.push(o));
        for (; i--;) e.splice(n[i], 1)
      }
      return l = null, e
    }, r = oe.getText = function (e) {
      var t, n = "", i = 0, o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else for (; t = e[i++];) n += r(t);
      return n
    }, (x = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: Z,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(ie, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return Z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(ie, d).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = c[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && c(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        }, ATTR: function (n, i, o) {
          return function (e) {
            var t = oe.attr(e, n);
            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(B, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
          }
        }, CHILD: function (h, e, t, p, g) {
          var m = "nth" !== h.slice(0, 3), v = "last" !== h.slice(-4), b = "of-type" === e;
          return 1 === p && 0 === g ? function (e) {
            return !!e.parentNode
          } : function (e, t, n) {
            var i, o, r, s, a, c, l = m != v ? "nextSibling" : "previousSibling", u = e.parentNode,
              d = b && e.nodeName.toLowerCase(), f = !n && !b;
            if (u) {
              if (m) {
                for (; l;) {
                  for (r = e; r = r[l];) if (b ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
                  c = l = "only" === h && !c && "nextSibling"
                }
                return !0
              }
              if (c = [v ? u.firstChild : u.lastChild], v && f) {
                for (a = (i = (o = u[T] || (u[T] = {}))[h] || [])[0] === S && i[1], s = i[0] === S && i[2], r = a && u.childNodes[a]; r = ++a && r && r[l] || (s = a = 0) || c.pop();) if (1 === r.nodeType && ++s && r === e) {
                  o[h] = [S, a, s];
                  break
                }
              } else if (f && (i = (e[T] || (e[T] = {}))[h]) && i[0] === S) s = i[1]; else for (; (r = ++a && r && r[l] || (s = a = 0) || c.pop()) && ((b ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++s || (f && ((r[T] || (r[T] = {}))[h] = [S, s]), r !== e));) ;
              return (s -= g) === p || s % p == 0 && 0 <= s / p
            }
          }
        }, PSEUDO: function (e, r) {
          var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return s[T] ? s(r) : 1 < s.length ? (t = [e, e, "", r], x.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
            for (var n, i = s(e, r), o = i.length; o--;) e[n = j(e, i[o])] = !(t[n] = i[o])
          }) : function (e) {
            return s(e, 0, t)
          }) : s
        }
      },
      pseudos: {
        not: se(function (e) {
          var i = [], o = [], a = f(e.replace(W, "$1"));
          return a[T] ? se(function (e, t, n, i) {
            for (var o, r = a(e, null, i, []), s = e.length; s--;) (o = r[s]) && (e[s] = !(t[s] = o))
          }) : function (e, t, n) {
            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
          }
        }), has: se(function (t) {
          return function (e) {
            return 0 < oe(t, e).length
          }
        }), contains: se(function (t) {
          return t = t.replace(ie, d), function (e) {
            return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
          }
        }), lang: se(function (n) {
          return Q.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(ie, d).toLowerCase(), function (e) {
            var t;
            do {
              if (t = b ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1
          }
        }), target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id
        }, root: function (e) {
          return e === s
        }, focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
          return !1 === e.disabled
        }, disabled: function (e) {
          return !0 === e.disabled
        }, checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        }, parent: function (e) {
          return !x.pseudos.empty(e)
        }, header: function (e) {
          return G.test(e.nodeName)
        }, input: function (e) {
          return K.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: fe(function () {
          return [0]
        }), last: fe(function (e, t) {
          return [t - 1]
        }), eq: fe(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }), even: fe(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }), odd: fe(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }), lt: fe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
          return e
        }), gt: fe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    }).pseudos.nth = x.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[e] = ue(e);
    for (e in{submit: !0, reset: !0}) x.pseudos[e] = de(e);

    function pe() {
    }

    function ge(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function me(s, e, t) {
      var a = e.dir, c = t && "parentNode" === a, l = E++;
      return e.first ? function (e, t, n) {
        for (; e = e[a];) if (1 === e.nodeType || c) return s(e, t, n)
      } : function (e, t, n) {
        var i, o, r = [S, l];
        if (n) {
          for (; e = e[a];) if ((1 === e.nodeType || c) && s(e, t, n)) return !0
        } else for (; e = e[a];) if (1 === e.nodeType || c) {
          if ((i = (o = e[T] || (e[T] = {}))[a]) && i[0] === S && i[1] === l) return r[2] = i[2];
          if ((o[a] = r)[2] = s(e, t, n)) return !0
        }
      }
    }

    function ve(o) {
      return 1 < o.length ? function (e, t, n) {
        for (var i = o.length; i--;) if (!o[i](e, t, n)) return !1;
        return !0
      } : o[0]
    }

    function be(e, t, n, i, o) {
      for (var r, s = [], a = 0, c = e.length, l = null != t; a < c; a++) !(r = e[a]) || n && !n(r, i, o) || (s.push(r), l && t.push(a));
      return s
    }

    function ye(h, p, g, m, v, e) {
      return m && !m[T] && (m = ye(m)), v && !v[T] && (v = ye(v, e)), se(function (e, t, n, i) {
        var o, r, s, a = [], c = [], l = t.length, u = e || function (e, t, n) {
            for (var i = 0, o = t.length; i < o; i++) oe(e, t[i], n);
            return n
          }(p || "*", n.nodeType ? [n] : n, []), d = !h || !e && p ? u : be(u, a, h, n, i),
          f = g ? v || (e ? h : l || m) ? [] : t : d;
        if (g && g(d, f, n, i), m) for (o = be(f, c), m(o, [], n, i), r = o.length; r--;) (s = o[r]) && (f[c[r]] = !(d[c[r]] = s));
        if (e) {
          if (v || h) {
            if (v) {
              for (o = [], r = f.length; r--;) (s = f[r]) && o.push(d[r] = s);
              v(null, f = [], o, i)
            }
            for (r = f.length; r--;) (s = f[r]) && -1 < (o = v ? j(e, s) : a[r]) && (e[o] = !(t[o] = s))
          }
        } else f = be(f === t ? f.splice(l, f.length) : f), v ? v(null, t, f, i) : L.apply(t, f)
      })
    }

    function xe(e) {
      for (var o, t, n, i = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, c = me(function (e) {
        return e === o
      }, s, !0), l = me(function (e) {
        return -1 < j(o, e)
      }, s, !0), u = [function (e, t, n) {
        var i = !r && (n || t !== w) || ((o = t).nodeType ? c : l)(e, t, n);
        return o = null, i
      }]; a < i; a++) if (t = x.relative[e[a].type]) u = [me(ve(u), t)]; else {
        if ((t = x.filter[e[a].type].apply(null, e[a].matches))[T]) {
          for (n = ++a; n < i && !x.relative[e[n].type]; n++) ;
          return ye(1 < a && ve(u), 1 < a && ge(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(W, "$1"), t, a < n && xe(e.slice(a, n)), n < i && xe(e = e.slice(n)), n < i && ge(e))
        }
        u.push(t)
      }
      return ve(u)
    }

    return pe.prototype = x.filters = x.pseudos, x.setFilters = new pe, g = oe.tokenize = function (e, t) {
      var n, i, o, r, s, a, c, l = _[e + " "];
      if (l) return t ? 0 : l.slice(0);
      for (s = e, a = [], c = x.preFilter; s;) {
        for (r in n && !(i = X.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = Y.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(W, " ")
        }), s = s.slice(n.length)), x.filter) !(i = Z[r].exec(s)) || c[r] && !(i = c[r](i)) || (n = i.shift(), o.push({
          value: n,
          type: r,
          matches: i
        }), s = s.slice(n.length));
        if (!n) break
      }
      return t ? s.length : s ? oe.error(e) : _(e, a).slice(0)
    }, f = oe.compile = function (e, t) {
      var n, m, v, b, y, i, o = [], r = [], s = k[e + " "];
      if (!s) {
        for (n = (t = t || g(e)).length; n--;) (s = xe(t[n]))[T] ? o.push(s) : r.push(s);
        (s = k(e, (m = r, b = 0 < (v = o).length, y = 0 < m.length, i = function (e, t, n, i, o) {
          var r, s, a, c = 0, l = "0", u = e && [], d = [], f = w, h = e || y && x.find.TAG("*", o),
            p = S += null == f ? 1 : Math.random() || .1, g = h.length;
          for (o && (w = t !== C && t); l !== g && null != (r = h[l]); l++) {
            if (y && r) {
              for (s = 0; a = m[s++];) if (a(r, t, n)) {
                i.push(r);
                break
              }
              o && (S = p)
            }
            b && ((r = !a && r) && c--, e && u.push(r))
          }
          if (c += l, b && l !== c) {
            for (s = 0; a = v[s++];) a(u, d, t, n);
            if (e) {
              if (0 < c) for (; l--;) u[l] || d[l] || (d[l] = P.call(i));
              d = be(d)
            }
            L.apply(i, d), o && !e && 0 < d.length && 1 < c + v.length && oe.uniqueSort(i)
          }
          return o && (S = p, w = f), u
        }, b ? se(i) : i))).selector = e
      }
      return s
    }, m = oe.select = function (e, t, n, i) {
      var o, r, s, a, c, l = "function" == typeof e && e, u = !i && g(e = l.selector || e);
      if (n = n || [], 1 === u.length) {
        if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && p.getById && 9 === t.nodeType && b && x.relative[r[1].type]) {
          if (!(t = (x.find.ID(s.matches[0].replace(ie, d), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(r.shift().value.length)
        }
        for (o = Z.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);) if ((c = x.find[a]) && (i = c(s.matches[0].replace(ie, d), te.test(r[0].type) && he(t.parentNode) || t))) {
          if (r.splice(o, 1), !(e = i.length && ge(r))) return L.apply(n, i), n;
          break
        }
      }
      return (l || f(e, u))(i, t, !b, n, te.test(e) && he(t.parentNode) || t), n
    }, p.sortStable = T.split("").sort(D).join("") === T, p.detectDuplicates = !!u, v(), p.sortDetached = ae(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("div"))
    }), ae(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ce("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), p.attributes && ae(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ce("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }), ae(function (e) {
      return null == e.getAttribute("disabled")
    }) || ce(R, function (e, t, n) {
      var i;
      return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), oe
  }(p);
  $.find = h, $.expr = h.selectors, $.expr[":"] = $.expr.pseudos, $.unique = h.uniqueSort, $.text = h.getText, $.isXMLDoc = h.isXML, $.contains = h.contains;
  var y = $.expr.match.needsContext, x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

  function C(e, n, i) {
    if ($.isFunction(n)) return $.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== i
    });
    if (n.nodeType) return $.grep(e, function (e) {
      return e === n !== i
    });
    if ("string" == typeof n) {
      if (w.test(n)) return $.filter(n, e, i);
      n = $.filter(n, e)
    }
    return $.grep(e, function (e) {
      return 0 <= o.call(n, e) !== i
    })
  }

  $.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? $.find.matchesSelector(i, e) ? [i] : [] : $.find.matches(e, $.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, $.fn.extend({
    find: function (e) {
      var t, n = this.length, i = [], o = this;
      if ("string" != typeof e) return this.pushStack($(e).filter(function () {
        for (t = 0; t < n; t++) if ($.contains(o[t], this)) return !0
      }));
      for (t = 0; t < n; t++) $.find(e, o[t], i);
      return (i = this.pushStack(1 < n ? $.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
    }, filter: function (e) {
      return this.pushStack(C(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(C(this, e || [], !0))
    }, is: function (e) {
      return !!C(this, "string" == typeof e && y.test(e) ? $(e) : e || [], !1).length
    }
  });
  var T, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ($.fn.init = function (e, t) {
    var n, i;
    if (!e) return this;
    if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : $.isFunction(e) ? void 0 !== T.ready ? T.ready(e) : e($) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), $.makeArray(e, this));
    if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : F.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
    if (n[1]) {
      if (t = t instanceof $ ? t[0] : t, $.merge(this, $.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), x.test(n[1]) && $.isPlainObject(t)) for (n in t) $.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
      return this
    }
    return (i = b.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = b, this.selector = e, this
  }).prototype = $.fn, T = $(b);
  var S = /^(?:parents|prev(?:Until|All))/, E = {children: !0, contents: !0, next: !0, prev: !0};

  function _(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) ;
    return e
  }

  $.extend({
    dir: function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (o && $(e).is(n)) break;
        i.push(e)
      }
      return i
    }, sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }), $.fn.extend({
    has: function (e) {
      var t = $(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if ($.contains(this, t[e])) return !0
      })
    }, closest: function (e, t) {
      for (var n, i = 0, o = this.length, r = [], s = y.test(e) || "string" != typeof e ? $(e, t || this.context) : 0; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && $.find.matchesSelector(n, e))) {
        r.push(n);
        break
      }
      return this.pushStack(1 < r.length ? $.unique(r) : r)
    }, index: function (e) {
      return e ? "string" == typeof e ? o.call($(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack($.unique($.merge(this.get(), $(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), $.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return $.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return $.dir(e, "parentNode", n)
    }, next: function (e) {
      return _(e, "nextSibling")
    }, prev: function (e) {
      return _(e, "previousSibling")
    }, nextAll: function (e) {
      return $.dir(e, "nextSibling")
    }, prevAll: function (e) {
      return $.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return $.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return $.dir(e, "previousSibling", n)
    }, siblings: function (e) {
      return $.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return $.sibling(e.firstChild)
    }, contents: function (e) {
      return e.contentDocument || $.merge([], e.childNodes)
    }
  }, function (i, o) {
    $.fn[i] = function (e, t) {
      var n = $.map(this, o, e);
      return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = $.filter(t, n)), 1 < this.length && (E[i] || $.unique(n), S.test(i) && n.reverse()), this.pushStack(n)
    }
  });
  var k, D = /\S+/g, A = {};

  function P() {
    b.removeEventListener("DOMContentLoaded", P, !1), p.removeEventListener("load", P, !1), $.ready()
  }

  $.Callbacks = function (o) {
    var n;
    o = "string" == typeof o ? A[o] || (n = A[o] = {}, $.each(o.match(D) || [], function (e, t) {
      n[t] = !0
    }), n) : $.extend({}, o);
    var t, i, r, s, a, c, l = [], u = !o.once && [], d = function (e) {
      for (t = o.memory && e, i = !0, c = s || 0, s = 0, a = l.length, r = !0; l && c < a; c++) if (!1 === l[c].apply(e[0], e[1]) && o.stopOnFalse) {
        t = !1;
        break
      }
      r = !1, l && (u ? u.length && d(u.shift()) : t ? l = [] : f.disable())
    }, f = {
      add: function () {
        var e;
        return l && (e = l.length, function i(e) {
          $.each(e, function (e, t) {
            var n = $.type(t);
            "function" === n ? o.unique && f.has(t) || l.push(t) : t && t.length && "string" !== n && i(t)
          })
        }(arguments), r ? a = l.length : t && (s = e, d(t))), this
      }, remove: function () {
        return l && $.each(arguments, function (e, t) {
          for (var n; -1 < (n = $.inArray(t, l, n));) l.splice(n, 1), r && (n <= a && a--, n <= c && c--)
        }), this
      }, has: function (e) {
        return e ? -1 < $.inArray(e, l) : !(!l || !l.length)
      }, empty: function () {
        return l = [], a = 0, this
      }, disable: function () {
        return l = u = t = void 0, this
      }, disabled: function () {
        return !l
      }, lock: function () {
        return u = void 0, t || f.disable(), this
      }, locked: function () {
        return !u
      }, fireWith: function (e, t) {
        return !l || i && !u || (t = [e, (t = t || []).slice ? t.slice() : t], r ? u.push(t) : d(t)), this
      }, fire: function () {
        return f.fireWith(this, arguments), this
      }, fired: function () {
        return !!i
      }
    };
    return f
  }, $.extend({
    Deferred: function (e) {
      var r = [["resolve", "done", $.Callbacks("once memory"), "resolved"], ["reject", "fail", $.Callbacks("once memory"), "rejected"], ["notify", "progress", $.Callbacks("memory")]],
        o = "pending", s = {
          state: function () {
            return o
          }, always: function () {
            return a.done(arguments).fail(arguments), this
          }, then: function () {
            var o = arguments;
            return $.Deferred(function (i) {
              $.each(r, function (e, t) {
                var n = $.isFunction(o[e]) && o[e];
                a[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && $.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                })
              }), o = null
            }).promise()
          }, promise: function (e) {
            return null != e ? $.extend(e, s) : s
          }
        }, a = {};
      return s.pipe = s.then, $.each(r, function (e, t) {
        var n = t[2], i = t[3];
        s[t[1]] = n.add, i && n.add(function () {
          o = i
        }, r[1 ^ e][2].disable, r[2][2].lock), a[t[0]] = function () {
          return a[t[0] + "With"](this === a ? s : this, arguments), this
        }, a[t[0] + "With"] = n.fireWith
      }), s.promise(a), e && e.call(a, a), a
    }, when: function (e) {
      function t(t, n, i) {
        return function (e) {
          n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === o ? l.notifyWith(n, i) : --c || l.resolveWith(n, i)
        }
      }

      var o, n, i, r = 0, s = u.call(arguments), a = s.length, c = 1 !== a || e && $.isFunction(e.promise) ? a : 0,
        l = 1 === c ? e : $.Deferred();
      if (1 < a) for (o = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) s[r] && $.isFunction(s[r].promise) ? s[r].promise().done(t(r, i, s)).fail(l.reject).progress(t(r, n, o)) : --c;
      return c || l.resolveWith(i, s), l.promise()
    }
  }), $.fn.ready = function (e) {
    return $.ready.promise().done(e), this
  }, $.extend({
    isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? $.readyWait++ : $.ready(!0)
    }, ready: function (e) {
      (!0 === e ? --$.readyWait : $.isReady) || ($.isReady = !0) !== e && 0 < --$.readyWait || (k.resolveWith(b, [$]), $.fn.triggerHandler && ($(b).triggerHandler("ready"), $(b).off("ready")))
    }
  }), $.ready.promise = function (e) {
    return k || (k = $.Deferred(), "complete" === b.readyState ? setTimeout($.ready) : (b.addEventListener("DOMContentLoaded", P, !1), p.addEventListener("load", P, !1))), k.promise(e)
  }, $.ready.promise();
  var I = $.access = function (e, t, n, i, o, r, s) {
    var a = 0, c = e.length, l = null == n;
    if ("object" === $.type(n)) for (a in o = !0, n) $.access(e, t, a, n[a], !0, r, s); else if (void 0 !== i && (o = !0, $.isFunction(i) || (s = !0), l && (t = s ? (t.call(e, i), null) : (l = t, function (e, t, n) {
      return l.call($(e), n)
    })), t)) for (; a < c; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    return o ? e : l ? t.call(e) : c ? t(e[0], n) : r
  };

  function L() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {}
      }
    }), this.expando = $.expando + L.uid++
  }

  $.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }, L.uid = 1, L.accepts = $.acceptData, L.prototype = {
    key: function (t) {
      if (!L.accepts(t)) return 0;
      var n = {}, i = t[this.expando];
      if (!i) {
        i = L.uid++;
        try {
          n[this.expando] = {value: i}, Object.defineProperties(t, n)
        } catch (e) {
          n[this.expando] = i, $.extend(t, n)
        }
      }
      return this.cache[i] || (this.cache[i] = {}), i
    }, set: function (e, t, n) {
      var i, o = this.key(e), r = this.cache[o];
      if ("string" == typeof t) r[t] = n; else if ($.isEmptyObject(r)) $.extend(this.cache[o], t); else for (i in t) r[i] = t[i];
      return r
    }, get: function (e, t) {
      var n = this.cache[this.key(e)];
      return void 0 === t ? n : n[t]
    }, access: function (e, t, n) {
      var i;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, $.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, i, o, r = this.key(e), s = this.cache[r];
      if (void 0 === t) this.cache[r] = {}; else {
        n = (i = $.isArray(t) ? t.concat(t.map($.camelCase)) : (o = $.camelCase(t), t in s ? [t, o] : (i = o) in s ? [i] : i.match(D) || [])).length;
        for (; n--;) delete s[i[n]]
      }
    }, hasData: function (e) {
      return !$.isEmptyObject(this.cache[e[this.expando]] || {})
    }, discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]]
    }
  };
  var N = new L, j = new L, R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, M = /([A-Z])/g;

  function O(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(M, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : R.test(n) ? $.parseJSON(n) : n)
      } catch (e) {
      }
      j.set(e, t, n)
    } else n = void 0;
    return n
  }

  $.extend({
    hasData: function (e) {
      return j.hasData(e) || N.hasData(e)
    }, data: function (e, t, n) {
      return j.access(e, t, n)
    }, removeData: function (e, t) {
      j.remove(e, t)
    }, _data: function (e, t, n) {
      return N.access(e, t, n)
    }, _removeData: function (e, t) {
      N.remove(e, t)
    }
  }), $.fn.extend({
    data: function (i, e) {
      var t, n, o, r = this[0], s = r && r.attributes;
      if (void 0 !== i) return "object" == typeof i ? this.each(function () {
        j.set(this, i)
      }) : I(this, function (t) {
        var e, n = $.camelCase(i);
        if (r && void 0 === t) {
          if (void 0 !== (e = j.get(r, i))) return e;
          if (void 0 !== (e = j.get(r, n))) return e;
          if (void 0 !== (e = O(r, n, void 0))) return e
        } else this.each(function () {
          var e = j.get(this, n);
          j.set(this, n, t), -1 !== i.indexOf("-") && void 0 !== e && j.set(this, i, t)
        })
      }, null, e, 1 < arguments.length, null, !0);
      if (this.length && (o = j.get(r), 1 === r.nodeType && !N.get(r, "hasDataAttrs"))) {
        for (t = s.length; t--;) s[t] && 0 === (n = s[t].name).indexOf("data-") && (n = $.camelCase(n.slice(5)), O(r, n, o[n]));
        N.set(r, "hasDataAttrs", !0)
      }
      return o
    }, removeData: function (e) {
      return this.each(function () {
        j.remove(this, e)
      })
    }
  }), $.extend({
    queue: function (e, t, n) {
      var i;
      return e ? (t = (t || "fx") + "queue", i = N.get(e, t), n && (!i || $.isArray(n) ? i = N.access(e, t, $.makeArray(n)) : i.push(n)), i || []) : void 0
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = $.queue(e, t), i = n.length, o = n.shift(), r = $._queueHooks(e, t);
      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
        $.dequeue(e, t)
      }, r)), !i && r && r.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return N.get(e, n) || N.access(e, n, {
        empty: $.Callbacks("once memory").add(function () {
          N.remove(e, [t + "queue", n])
        })
      })
    }
  }), $.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? $.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = $.queue(this, t, n);
        $._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && $.dequeue(this, t)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        $.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      function n() {
        --o || r.resolveWith(s, [s])
      }

      var i, o = 1, r = $.Deferred(), s = this, a = this.length;
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (i = N.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
      return n(), r.promise(t)
    }
  });

  function q(e, t) {
    return e = t || e, "none" === $.css(e, "display") || !$.contains(e.ownerDocument, e)
  }

  var H, z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, B = ["Top", "Right", "Bottom", "Left"],
    W = /^(?:checkbox|radio)$/i, X = b.createDocumentFragment().appendChild(b.createElement("div"));
  (H = b.createElement("input")).setAttribute("type", "radio"), H.setAttribute("checked", "checked"), H.setAttribute("name", "t"), X.appendChild(H), v.checkClone = X.cloneNode(!0).cloneNode(!0).lastChild.checked, X.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!X.cloneNode(!0).lastChild.defaultValue;
  var Y = "undefined";
  v.focusinBubbles = "onfocusin" in p;
  var V = /^key/, U = /^(?:mouse|pointer|contextmenu)|click/, Q = /^(?:focusinfocus|focusoutblur)$/,
    Z = /^([^.]*)(?:\.(.+)|)$/;

  function K() {
    return !0
  }

  function G() {
    return !1
  }

  function J() {
    try {
      return b.activeElement
    } catch (e) {
    }
  }

  $.event = {
    global: {},
    add: function (t, e, n, i, o) {
      var r, s, a, c, l, u, d, f, h, p, g, m = N.get(t);
      if (m) for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = $.guid++), (c = m.events) || (c = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
        return typeof $ != Y && $.event.triggered !== e.type ? $.event.dispatch.apply(t, arguments) : void 0
      }), l = (e = (e || "").match(D) || [""]).length; l--;) h = g = (a = Z.exec(e[l]) || [])[1], p = (a[2] || "").split(".").sort(), h && (d = $.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = $.event.special[h] || {}, u = $.extend({
        type: h,
        origType: g,
        data: i,
        handler: n,
        guid: n.guid,
        selector: o,
        needsContext: o && $.expr.match.needsContext.test(o),
        namespace: p.join(".")
      }, r), (f = c[h]) || ((f = c[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s, !1)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), $.event.global[h] = !0)
    },
    remove: function (e, t, n, i, o) {
      var r, s, a, c, l, u, d, f, h, p, g, m = N.hasData(e) && N.get(e);
      if (m && (c = m.events)) {
        for (l = (t = (t || "").match(D) || [""]).length; l--;) if (h = g = (a = Z.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
          for (d = $.event.special[h] || {}, f = c[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) u = f[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
          s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || $.removeEvent(e, h, m.handle), delete c[h])
        } else for (h in c) $.event.remove(e, h + t[l], n, i, !0);
        $.isEmptyObject(c) && (delete m.handle, N.remove(e, "events"))
      }
    },
    trigger: function (e, t, n, i) {
      var o, r, s, a, c, l, u = [n || b], d = m.call(e, "type") ? e.type : e,
        f = m.call(e, "namespace") ? e.namespace.split(".") : [], h = r = n = n || b;
      if (3 !== n.nodeType && 8 !== n.nodeType && !Q.test(d + $.event.triggered) && (0 <= d.indexOf(".") && (d = (f = d.split(".")).shift(), f.sort()), a = d.indexOf(":") < 0 && "on" + d, (e = e[$.expando] ? e : new $.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : $.makeArray(t, [e]), l = $.event.special[d] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
        if (!i && !l.noBubble && !$.isWindow(n)) {
          for (s = l.delegateType || d, Q.test(s + d) || (h = h.parentNode); h; h = h.parentNode) u.push(h), r = h;
          r === (n.ownerDocument || b) && u.push(r.defaultView || r.parentWindow || p)
        }
        for (o = 0; (h = u[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? s : l.bindType || d, (c = (N.get(h, "events") || {})[e.type] && N.get(h, "handle")) && c.apply(h, t), (c = a && h[a]) && c.apply && $.acceptData(h) && (e.result = c.apply(h, t), !1 === e.result && e.preventDefault());
        return e.type = d, i || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(u.pop(), t) || !$.acceptData(n) || a && $.isFunction(n[d]) && !$.isWindow(n) && ((r = n[a]) && (n[a] = null), n[$.event.triggered = d](), $.event.triggered = void 0, r && (n[a] = r)), e.result
      }
    },
    dispatch: function (e) {
      e = $.event.fix(e);
      var t, n, i, o, r, s = [], a = u.call(arguments), c = (N.get(this, "events") || {})[e.type] || [],
        l = $.event.special[e.type] || {};
      if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
        for (s = $.event.handlers.call(this, e, c), t = 0; (o = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (i = (($.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, t) {
      var n, i, o, r, s = [], a = t.delegateCount, c = e.target;
      if (a && c.nodeType && (!e.button || "click" !== e.type)) for (; c !== this; c = c.parentNode || this) if (!0 !== c.disabled || "click" !== e.type) {
        for (i = [], n = 0; n < a; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? 0 <= $(o, this).index(c) : $.find(o, this, null, [c]).length), i[o] && i.push(r);
        i.length && s.push({elem: c, handlers: i})
      }
      return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, t) {
        var n, i, o, r = t.button;
        return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || b).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
      }
    },
    fix: function (e) {
      if (e[$.expando]) return e;
      var t, n, i, o = e.type, r = e, s = this.fixHooks[o];
      for (s || (this.fixHooks[o] = s = U.test(o) ? this.mouseHooks : V.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new $.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
      return e.target || (e.target = b), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          return this !== J() && this.focus ? (this.focus(), !1) : void 0
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === J() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && $.nodeName(this, "input") ? (this.click(), !1) : void 0
        }, _default: function (e) {
          return $.nodeName(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n, i) {
      var o = $.extend(new $.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
      i ? $.event.trigger(o, null, t) : $.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
    }
  }, $.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  }, $.Event = function (e, t) {
    return this instanceof $.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? K : G) : this.type = e, t && $.extend(this, t), this.timeStamp = e && e.timeStamp || $.now(), void (this[$.expando] = !0)) : new $.Event(e, t)
  }, $.Event.prototype = {
    isDefaultPrevented: G,
    isPropagationStopped: G,
    isImmediatePropagationStopped: G,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = K, e && e.preventDefault && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = K, e && e.stopPropagation && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = K, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, $.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, o) {
    $.event.special[e] = {
      delegateType: o, bindType: o, handle: function (e) {
        var t, n = e.relatedTarget, i = e.handleObj;
        return n && (n === this || $.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
      }
    }
  }), v.focusinBubbles || $.each({focus: "focusin", blur: "focusout"}, function (n, i) {
    function o(e) {
      $.event.simulate(i, e.target, $.event.fix(e), !0)
    }

    $.event.special[i] = {
      setup: function () {
        var e = this.ownerDocument || this, t = N.access(e, i);
        t || e.addEventListener(n, o, !0), N.access(e, i, (t || 0) + 1)
      }, teardown: function () {
        var e = this.ownerDocument || this, t = N.access(e, i) - 1;
        t ? N.access(e, i, t) : (e.removeEventListener(n, o, !0), N.remove(e, i))
      }
    }
  }), $.fn.extend({
    on: function (e, t, n, i, o) {
      var r, s;
      if ("object" == typeof e) {
        for (s in"string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], o);
        return this
      }
      if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = G; else if (!i) return this;
      return 1 === o && (r = i, (i = function (e) {
        return $().off(e), r.apply(this, arguments)
      }).guid = r.guid || (r.guid = $.guid++)), this.each(function () {
        $.event.add(this, e, i, n, t)
      })
    }, one: function (e, t, n, i) {
      return this.on(e, t, n, i, 1)
    }, off: function (e, t, n) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, $(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = G), this.each(function () {
        $.event.remove(this, e, n, t)
      });
      for (o in e) this.off(o, t, e[o]);
      return this
    }, trigger: function (e, t) {
      return this.each(function () {
        $.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      return n ? $.event.trigger(e, t, n, !0) : void 0
    }
  });
  var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, te = /<([\w:]+)/,
    ne = /<|&#?\w+;/, ie = /<(?:script|style|link)/i, oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    re = /^$|\/(?:java|ecma)script/i, se = /^true\/(.*)/, ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ce = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

  function le(e, t) {
    return $.nodeName(e, "table") && $.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function ue(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function de(e) {
    var t = se.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function fe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) N.set(e[n], "globalEval", !t || N.get(t[n], "globalEval"))
  }

  function he(e, t) {
    var n, i, o, r, s, a, c, l;
    if (1 === t.nodeType) {
      if (N.hasData(e) && (r = N.access(e), s = N.set(t, r), l = r.events)) for (o in delete s.handle, s.events = {}, l) for (n = 0, i = l[o].length; n < i; n++) $.event.add(t, o, l[o][n]);
      j.hasData(e) && (a = j.access(e), c = $.extend({}, a), j.set(t, c))
    }
  }

  function pe(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && $.nodeName(e, t) ? $.merge([e], n) : n
  }

  ce.optgroup = ce.option, ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead, ce.th = ce.td, $.extend({
    clone: function (e, t, n) {
      var i, o, r, s, a, c, l, u = e.cloneNode(!0), d = $.contains(e.ownerDocument, e);
      if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || $.isXMLDoc(e))) for (s = pe(u), i = 0, o = (r = pe(e)).length; i < o; i++) a = r[i], "input" === (l = (c = s[i]).nodeName.toLowerCase()) && W.test(a.type) ? c.checked = a.checked : "input" !== l && "textarea" !== l || (c.defaultValue = a.defaultValue);
      if (t) if (n) for (r = r || pe(e), s = s || pe(u), i = 0, o = r.length; i < o; i++) he(r[i], s[i]); else he(e, u);
      return 0 < (s = pe(u, "script")).length && fe(s, !d && pe(e, "script")), u
    }, buildFragment: function (e, t, n, i) {
      for (var o, r, s, a, c, l, u = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++) if ((o = e[f]) || 0 === o) if ("object" === $.type(o)) $.merge(d, o.nodeType ? [o] : o); else if (ne.test(o)) {
        for (r = r || u.appendChild(t.createElement("div")), s = (te.exec(o) || ["", ""])[1].toLowerCase(), a = ce[s] || ce._default, r.innerHTML = a[1] + o.replace(ee, "<$1></$2>") + a[2], l = a[0]; l--;) r = r.lastChild;
        $.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
      } else d.push(t.createTextNode(o));
      for (u.textContent = "", f = 0; o = d[f++];) if ((!i || -1 === $.inArray(o, i)) && (c = $.contains(o.ownerDocument, o), r = pe(u.appendChild(o), "script"), c && fe(r), n)) for (l = 0; o = r[l++];) re.test(o.type || "") && n.push(o);
      return u
    }, cleanData: function (e) {
      for (var t, n, i, o, r = $.event.special, s = 0; void 0 !== (n = e[s]); s++) {
        if ($.acceptData(n) && (o = n[N.expando]) && (t = N.cache[o])) {
          if (t.events) for (i in t.events) r[i] ? $.event.remove(n, i) : $.removeEvent(n, i, t.handle);
          N.cache[o] && delete N.cache[o]
        }
        delete j.cache[n[j.expando]]
      }
    }
  }), $.fn.extend({
    text: function (e) {
      return I(this, function (e) {
        return void 0 === e ? $.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || le(this, e).appendChild(e)
      })
    }, prepend: function () {
      return this.domManip(arguments, function (e) {
        var t;
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = le(this, e)).insertBefore(e, t.firstChild)
      })
    }, before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, remove: function (e, t) {
      for (var n, i = e ? $.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || $.cleanData(pe(n)), n.parentNode && (t && $.contains(n.ownerDocument, n) && fe(pe(n, "script")), n.parentNode.removeChild(n));
      return this
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && ($.cleanData(pe(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return $.clone(this, e, t)
      })
    }, html: function (e) {
      return I(this, function (e) {
        var t = this[0] || {}, n = 0, i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !ie.test(e) && !ce[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(ee, "<$1></$2>");
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && ($.cleanData(pe(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var t = arguments[0];
      return this.domManip(arguments, function (e) {
        t = this.parentNode, $.cleanData(pe(this)), t && t.replaceChild(e, this)
      }), t && (t.length || t.nodeType) ? this : this.remove()
    }, detach: function (e) {
      return this.remove(e, !0)
    }, domManip: function (n, i) {
      n = g.apply([], n);
      var e, t, o, r, s, a, c = 0, l = this.length, u = this, d = l - 1, f = n[0], h = $.isFunction(f);
      if (h || 1 < l && "string" == typeof f && !v.checkClone && oe.test(f)) return this.each(function (e) {
        var t = u.eq(e);
        h && (n[0] = f.call(this, e, t.html())), t.domManip(n, i)
      });
      if (l && (t = (e = $.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
        for (r = (o = $.map(pe(e, "script"), ue)).length; c < l; c++) s = e, c !== d && (s = $.clone(s, !0, !0), r && $.merge(o, pe(s, "script"))), i.call(this[c], s, c);
        if (r) for (a = o[o.length - 1].ownerDocument, $.map(o, de), c = 0; c < r; c++) s = o[c], re.test(s.type || "") && !N.access(s, "globalEval") && $.contains(a, s) && (s.src ? $._evalUrl && $._evalUrl(s.src) : $.globalEval(s.textContent.replace(ae, "")))
      }
      return this
    }
  }), $.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, s) {
    $.fn[e] = function (e) {
      for (var t, n = [], i = $(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), $(i[r])[s](t), a.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var ge, me = {};

  function ve(e, t) {
    var n, i = $(t.createElement(e)).appendTo(t.body),
      o = p.getDefaultComputedStyle && (n = p.getDefaultComputedStyle(i[0])) ? n.display : $.css(i[0], "display");
    return i.detach(), o
  }

  function be(e) {
    var t = b, n = me[e];
    return n || ("none" !== (n = ve(e, t)) && n || ((t = (ge = (ge || $("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = ve(e, t), ge.detach()), me[e] = n), n
  }

  var ye, xe, we, Ce, $e, Te = /^margin/, Fe = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"), Se = function (e) {
    return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : p.getComputedStyle(e, null)
  };

  function Ee(e, t, n) {
    var i, o, r, s, a = e.style;
    return (n = n || Se(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || $.contains(e.ownerDocument, e) || (s = $.style(e, t)), Fe.test(s) && Te.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
  }

  function _e(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function ke() {
    $e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", $e.innerHTML = "", we.appendChild(Ce);
    var e = p.getComputedStyle($e, null);
    ye = "1%" !== e.top, xe = "4px" === e.width, we.removeChild(Ce)
  }

  we = b.documentElement, Ce = b.createElement("div"), ($e = b.createElement("div")).style && ($e.style.backgroundClip = "content-box", $e.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === $e.style.backgroundClip, Ce.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", Ce.appendChild($e), p.getComputedStyle && $.extend(v, {
    pixelPosition: function () {
      return ke(), ye
    }, boxSizingReliable: function () {
      return null == xe && ke(), xe
    }, reliableMarginRight: function () {
      var e, t = $e.appendChild(b.createElement("div"));
      return t.style.cssText = $e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", $e.style.width = "1px", we.appendChild(Ce), e = !parseFloat(p.getComputedStyle(t, null).marginRight), we.removeChild(Ce), $e.removeChild(t), e
    }
  })), $.swap = function (e, t, n, i) {
    var o, r, s = {};
    for (r in t) s[r] = e.style[r], e.style[r] = t[r];
    for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
    return o
  };
  var De = /^(none|table(?!-c[ea]).+)/, Ae = new RegExp("^(" + z + ")(.*)$", "i"),
    Pe = new RegExp("^([+-])=(" + z + ")", "i"), Ie = {position: "absolute", visibility: "hidden", display: "block"},
    Le = {letterSpacing: "0", fontWeight: "400"}, Ne = ["Webkit", "O", "Moz", "ms"];

  function je(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ne.length; o--;) if ((t = Ne[o] + n) in e) return t;
    return i
  }

  function Re(e, t, n) {
    var i = Ae.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
  }

  function Me(e, t, n, i, o) {
    for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += $.css(e, n + B[r], !0, o)), i ? ("content" === n && (s -= $.css(e, "padding" + B[r], !0, o)), "margin" !== n && (s -= $.css(e, "border" + B[r] + "Width", !0, o))) : (s += $.css(e, "padding" + B[r], !0, o), "padding" !== n && (s += $.css(e, "border" + B[r] + "Width", !0, o)));
    return s
  }

  function Oe(e, t, n) {
    var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = Se(e),
      s = "border-box" === $.css(e, "boxSizing", !1, r);
    if (o <= 0 || null == o) {
      if (((o = Ee(e, t, r)) < 0 || null == o) && (o = e.style[t]), Fe.test(o)) return o;
      i = s && (v.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
    }
    return o + Me(e, t, n || (s ? "border" : "content"), i, r) + "px"
  }

  function qe(e, t) {
    for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++) (i = e[s]).style && (r[s] = N.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && q(i) && (r[s] = N.access(i, "olddisplay", be(i.nodeName)))) : (o = q(i), "none" === n && o || N.set(i, "olddisplay", o ? n : $.css(i, "display"))));
    for (s = 0; s < a; s++) (i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
    return e
  }

  function He(e, t, n, i, o) {
    return new He.prototype.init(e, t, n, i, o)
  }

  $.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ee(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {float: "cssFloat"},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, r, s, a = $.camelCase(t), c = e.style;
        return t = $.cssProps[a] || ($.cssProps[a] = je(c, a)), s = $.cssHooks[t] || $.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t] : ("string" == (r = typeof n) && (o = Pe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat($.css(e, t)), r = "number"), void (null != n && n == n && ("number" !== r || $.cssNumber[a] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (c[t] = n))))
      }
    },
    css: function (e, t, n, i) {
      var o, r, s, a = $.camelCase(t);
      return t = $.cssProps[a] || ($.cssProps[a] = je(e.style, a)), (s = $.cssHooks[t] || $.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ee(e, t, i)), "normal" === o && t in Le && (o = Le[t]), "" === n || n ? (r = parseFloat(o), !0 === n || $.isNumeric(r) ? r || 0 : o) : o
    }
  }), $.each(["height", "width"], function (e, o) {
    $.cssHooks[o] = {
      get: function (e, t, n) {
        return t ? De.test($.css(e, "display")) && 0 === e.offsetWidth ? $.swap(e, Ie, function () {
          return Oe(e, o, n)
        }) : Oe(e, o, n) : void 0
      }, set: function (e, t, n) {
        var i = n && Se(e);
        return Re(0, t, n ? Me(e, o, n, "border-box" === $.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), $.cssHooks.marginRight = _e(v.reliableMarginRight, function (e, t) {
    return t ? $.swap(e, {display: "inline-block"}, Ee, [e, "marginRight"]) : void 0
  }), $.each({margin: "", padding: "", border: "Width"}, function (o, r) {
    $.cssHooks[o + r] = {
      expand: function (e) {
        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + B[t] + r] = i[t] || i[t - 2] || i[0];
        return n
      }
    }, Te.test(o) || ($.cssHooks[o + r].set = Re)
  }), $.fn.extend({
    css: function (e, t) {
      return I(this, function (e, t, n) {
        var i, o, r = {}, s = 0;
        if ($.isArray(t)) {
          for (i = Se(e), o = t.length; s < o; s++) r[t[s]] = $.css(e, t[s], !1, i);
          return r
        }
        return void 0 !== n ? $.style(e, t, n) : $.css(e, t)
      }, e, t, 1 < arguments.length)
    }, show: function () {
      return qe(this, !0)
    }, hide: function () {
      return qe(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        q(this) ? $(this).show() : $(this).hide()
      })
    }
  }), (($.Tween = He).prototype = {
    constructor: He, init: function (e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || ($.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = He.propHooks[this.prop];
      return e && e.get ? e.get(this) : He.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = He.propHooks[this.prop];
      return this.options.duration ? this.pos = t = $.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : He.propHooks._default.set(this), this
    }
  }).init.prototype = He.prototype, (He.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = $.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
      }, set: function (e) {
        $.fx.step[e.prop] ? $.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[$.cssProps[e.prop]] || $.cssHooks[e.prop]) ? $.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }).scrollTop = He.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, $.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, $.fx = He.prototype.init, $.fx.step = {};
  var ze, Be, We, Xe, Ye, Ve = /^(?:toggle|show|hide)$/, Ue = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
    Qe = /queueHooks$/, Ze = [function (t, e, n) {
      var i, o, r, s, a, c, l, u = this, d = {}, f = t.style, h = t.nodeType && q(t), p = N.get(t, "fxshow");
      for (i in n.queue || (null == (a = $._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, c = a.empty.fire, a.empty.fire = function () {
        a.unqueued || c()
      }), a.unqueued++, u.always(function () {
        u.always(function () {
          a.unqueued--, $.queue(t, "fx").length || a.empty.fire()
        })
      })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (l = $.css(t, "display")) ? N.get(t, "olddisplay") || be(t.nodeName) : l) && "none" === $.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function () {
        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
      })), e) if (o = e[i], Ve.exec(o)) {
        if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
          if ("show" !== o || !p || void 0 === p[i]) continue;
          h = !0
        }
        d[i] = p && p[i] || $.style(t, i)
      } else l = void 0;
      if ($.isEmptyObject(d)) "inline" === ("none" === l ? be(t.nodeName) : l) && (f.display = l); else for (i in p ? "hidden" in p && (h = p.hidden) : p = N.access(t, "fxshow", {}), r && (p.hidden = !h), h ? $(t).show() : u.done(function () {
        $(t).hide()
      }), u.done(function () {
        var e;
        for (e in N.remove(t, "fxshow"), d) $.style(t, e, d[e])
      }), d) s = et(h ? p[i] : 0, i, u), i in p || (p[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
    }], Ke = {
      "*": [function (e, t) {
        var n = this.createTween(e, t), i = n.cur(), o = Ue.exec(t), r = o && o[3] || ($.cssNumber[e] ? "" : "px"),
          s = ($.cssNumber[e] || "px" !== r && +i) && Ue.exec($.css(n.elem, e)), a = 1, c = 20;
        if (s && s[3] !== r) for (r = r || s[3], o = o || [], s = +i || 1; s /= a = a || ".5", $.style(n.elem, e, s + r), a !== (a = n.cur() / i) && 1 !== a && --c;) ;
        return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
      }]
    };

  function Ge() {
    return setTimeout(function () {
      ze = void 0
    }), ze = $.now()
  }

  function Je(e, t) {
    var n, i = 0, o = {height: e};
    for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = B[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o
  }

  function et(e, t, n) {
    for (var i, o = (Ke[t] || []).concat(Ke["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, t, e)) return i
  }

  function tt(r, e, t) {
    var n, s, i = 0, o = Ze.length, a = $.Deferred().always(function () {
      delete c.elem
    }), c = function () {
      if (s) return !1;
      for (var e = ze || Ge(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), i = 0, o = l.tweens.length; i < o; i++) l.tweens[i].run(n);
      return a.notifyWith(r, [l, n, t]), n < 1 && o ? t : (a.resolveWith(r, [l]), !1)
    }, l = a.promise({
      elem: r,
      props: $.extend({}, e),
      opts: $.extend(!0, {specialEasing: {}}, t),
      originalProperties: e,
      originalOptions: t,
      startTime: ze || Ge(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = $.Tween(r, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n
      },
      stop: function (e) {
        var t = 0, n = e ? l.tweens.length : 0;
        if (s) return this;
        for (s = !0; t < n; t++) l.tweens[t].run(1);
        return e ? a.resolveWith(r, [l, e]) : a.rejectWith(r, [l, e]), this
      }
    }), u = l.props;
    for (function (e, t) {
      var n, i, o, r, s;
      for (n in e) if (o = t[i = $.camelCase(n)], r = e[n], $.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = $.cssHooks[i]) && "expand" in s) for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o); else t[i] = o
    }(u, l.opts.specialEasing); i < o; i++) if (n = Ze[i].call(l, r, u, l.opts)) return n;
    return $.map(u, et, l), $.isFunction(l.opts.start) && l.opts.start.call(r, l), $.fx.timer($.extend(c, {
      elem: r,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  $.Animation = $.extend(tt, {
    tweener: function (e, t) {
      for (var n, i = 0, o = (e = $.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; i < o; i++) n = e[i], Ke[n] = Ke[n] || [], Ke[n].unshift(t)
    }, prefilter: function (e, t) {
      t ? Ze.unshift(e) : Ze.push(e)
    }
  }), $.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? $.extend({}, e) : {
      complete: n || !n && t || $.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !$.isFunction(t) && t
    };
    return i.duration = $.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in $.fx.speeds ? $.fx.speeds[i.duration] : $.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      $.isFunction(i.old) && i.old.call(this), i.queue && $.dequeue(this, i.queue)
    }, i
  }, $.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(q).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
    }, animate: function (t, e, n, i) {
      function o() {
        var e = tt(this, $.extend({}, t), s);
        (r || N.get(this, "finish")) && e.stop(!0)
      }

      var r = $.isEmptyObject(t), s = $.speed(e, n, i);
      return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
    }, stop: function (o, e, r) {
      function s(e) {
        var t = e.stop;
        delete e.stop, t(r)
      }

      return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
        var e = !0, t = null != o && o + "queueHooks", n = $.timers, i = N.get(this);
        if (t) i[t] && i[t].stop && s(i[t]); else for (t in i) i[t] && i[t].stop && Qe.test(t) && s(i[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
        !e && r || $.dequeue(this, o)
      })
    }, finish: function (s) {
      return !1 !== s && (s = s || "fx"), this.each(function () {
        var e, t = N.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], o = $.timers, r = n ? n.length : 0;
        for (t.finish = !0, $.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
        for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), $.each(["toggle", "show", "hide"], function (e, i) {
    var o = $.fn[i];
    $.fn[i] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(Je(i, !0), e, t, n)
    }
  }), $.each({
    slideDown: Je("show"),
    slideUp: Je("hide"),
    slideToggle: Je("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, i) {
    $.fn[e] = function (e, t, n) {
      return this.animate(i, e, t, n)
    }
  }), $.timers = [], $.fx.tick = function () {
    var e, t = 0, n = $.timers;
    for (ze = $.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || $.fx.stop(), ze = void 0
  }, $.fx.timer = function (e) {
    $.timers.push(e), e() ? $.fx.start() : $.timers.pop()
  }, $.fx.interval = 13, $.fx.start = function () {
    Be = Be || setInterval($.fx.tick, $.fx.interval)
  }, $.fx.stop = function () {
    clearInterval(Be), Be = null
  }, $.fx.speeds = {slow: 600, fast: 200, _default: 400}, $.fn.delay = function (i, e) {
    return i = $.fx && $.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
      var n = setTimeout(e, i);
      t.stop = function () {
        clearTimeout(n)
      }
    })
  }, We = b.createElement("input"), Ye = (Xe = b.createElement("select")).appendChild(b.createElement("option")), We.type = "checkbox", v.checkOn = "" !== We.value, v.optSelected = Ye.selected, Xe.disabled = !0, v.optDisabled = !Ye.disabled, (We = b.createElement("input")).value = "t", We.type = "radio", v.radioValue = "t" === We.value;
  var nt, it = $.expr.attrHandle;
  $.fn.extend({
    attr: function (e, t) {
      return I(this, $.attr, e, t, 1 < arguments.length)
    }, removeAttr: function (e) {
      return this.each(function () {
        $.removeAttr(this, e)
      })
    }
  }), $.extend({
    attr: function (e, t, n) {
      var i, o, r = e.nodeType;
      if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute == Y ? $.prop(e, t, n) : (1 === r && $.isXMLDoc(e) || (t = t.toLowerCase(), i = $.attrHooks[t] || ($.expr.match.bool.test(t) ? nt : void 0)), void 0 === n ? !(i && "get" in i && null !== (o = i.get(e, t))) && null == (o = $.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void $.removeAttr(e, t))
    }, removeAttr: function (e, t) {
      var n, i, o = 0, r = t && t.match(D);
      if (r && 1 === e.nodeType) for (; n = r[o++];) i = $.propFix[n] || n, $.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!v.radioValue && "radio" === t && $.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }
  }), nt = {
    set: function (e, t, n) {
      return !1 === t ? $.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, $.each($.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var r = it[t] || $.find.attr;
    it[t] = function (e, t, n) {
      var i, o;
      return n || (o = it[t], it[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, it[t] = o), i
    }
  });
  var ot = /^(?:input|select|textarea|button)$/i;
  $.fn.extend({
    prop: function (e, t) {
      return I(this, $.prop, e, t, 1 < arguments.length)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[$.propFix[e] || e]
      })
    }
  }), $.extend({
    propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, n) {
      var i, o, r = e.nodeType;
      if (e && 3 !== r && 8 !== r && 2 !== r) return 1 === r && $.isXMLDoc(e) || (t = $.propFix[t] || t, o = $.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          return e.hasAttribute("tabindex") || ot.test(e.nodeName) || e.href ? e.tabIndex : -1
        }
      }
    }
  }), v.optSelected || ($.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }
  }), $.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    $.propFix[this.toLowerCase()] = this
  });
  var rt = /[\t\r\n\f]/g;
  $.fn.extend({
    addClass: function (t) {
      var e, n, i, o, r, s, a = "string" == typeof t && t, c = 0, l = this.length;
      if ($.isFunction(t)) return this.each(function (e) {
        $(this).addClass(t.call(this, e, this.className))
      });
      if (a) for (e = (t || "").match(D) || []; c < l; c++) if (i = 1 === (n = this[c]).nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : " ")) {
        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
        s = $.trim(i), n.className !== s && (n.className = s)
      }
      return this
    }, removeClass: function (t) {
      var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t, c = 0, l = this.length;
      if ($.isFunction(t)) return this.each(function (e) {
        $(this).removeClass(t.call(this, e, this.className))
      });
      if (a) for (e = (t || "").match(D) || []; c < l; c++) if (i = 1 === (n = this[c]).nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : "")) {
        for (r = 0; o = e[r++];) for (; 0 <= i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
        s = t ? $.trim(i) : "", n.className !== s && (n.className = s)
      }
      return this
    }, toggleClass: function (o, t) {
      var r = typeof o;
      return "boolean" == typeof t && "string" == r ? t ? this.addClass(o) : this.removeClass(o) : this.each($.isFunction(o) ? function (e) {
        $(this).toggleClass(o.call(this, e, this.className, t), t)
      } : function () {
        if ("string" == r) for (var e, t = 0, n = $(this), i = o.match(D) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else r != Y && "boolean" != r || (this.className && N.set(this, "__className__", this.className), this.className = !this.className && !1 !== o && N.get(this, "__className__") || "")
      })
    }, hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(rt, " ").indexOf(t)) return !0;
      return !1
    }
  });
  var st = /\r/g;
  $.fn.extend({
    val: function (n) {
      var i, e, o, t = this[0];
      return arguments.length ? (o = $.isFunction(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = o ? n.call(this, e, $(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : $.isArray(t) && (t = $.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (i = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
      })) : t ? (i = $.valHooks[t.type] || $.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(st, "") : null == e ? "" : e : void 0
    }
  }), $.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = $.find.attr(e, "value");
          return null != t ? t : $.trim($.text(e))
        }
      }, select: {
        get: function (e) {
          for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, c = o < 0 ? a : r ? o : 0; c < a; c++) if (!(!(n = i[c]).selected && c !== o || (v.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && $.nodeName(n.parentNode, "optgroup"))) {
            if (t = $(n).val(), r) return t;
            s.push(t)
          }
          return s
        }, set: function (e, t) {
          for (var n, i, o = e.options, r = $.makeArray(t), s = o.length; s--;) ((i = o[s]).selected = 0 <= $.inArray(i.value, r)) && (n = !0);
          return n || (e.selectedIndex = -1), r
        }
      }
    }
  }), $.each(["radio", "checkbox"], function () {
    $.valHooks[this] = {
      set: function (e, t) {
        return $.isArray(t) ? e.checked = 0 <= $.inArray($(e).val(), t) : void 0
      }
    }, v.checkOn || ($.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
    $.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  }), $.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }, bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var at = $.now(), ct = /\?/;
  $.parseJSON = function (e) {
    return JSON.parse(e + "")
  }, $.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || $.error("Invalid XML: " + e), t
  };
  var lt = /#.*$/, ut = /([?&])_=[^&]*/, dt = /^(.*?):[ \t]*([^\r\n]*)$/gm, ft = /^(?:GET|HEAD)$/, ht = /^\/\//,
    pt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, gt = {}, mt = {}, vt = "*/".concat("*"),
    bt = p.location.href, yt = pt.exec(bt.toLowerCase()) || [];

  function xt(r) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, i = 0, o = e.toLowerCase().match(D) || [];
      if ($.isFunction(t)) for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
    }
  }

  function wt(t, o, r, s) {
    var a = {}, c = t === mt;

    function l(e) {
      var i;
      return a[e] = !0, $.each(t[e] || [], function (e, t) {
        var n = t(o, r, s);
        return "string" != typeof n || c || a[n] ? c ? !(i = n) : void 0 : (o.dataTypes.unshift(n), l(n), !1)
      }), i
    }

    return l(o.dataTypes[0]) || !a["*"] && l("*")
  }

  function Ct(e, t) {
    var n, i, o = $.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
    return i && $.extend(!0, e, i), e
  }

  $.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": vt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": $.parseJSON, "text xml": $.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? Ct(Ct(e, $.ajaxSettings), t) : Ct($.ajaxSettings, e)
    },
    ajaxPrefilter: xt(gt),
    ajaxTransport: xt(mt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var u, d, f, n, h, i, p, o, g = $.ajaxSetup({}, t), m = g.context || g,
        v = g.context && (m.nodeType || m.jquery) ? $(m) : $.event, b = $.Deferred(), y = $.Callbacks("once memory"),
        x = g.statusCode || {}, r = {}, s = {}, w = 0, a = "canceled", C = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === w) {
              if (!n) for (n = {}; t = dt.exec(f);) n[t[1].toLowerCase()] = t[2];
              t = n[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return 2 === w ? f : null
          }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return w || (e = s[n] = s[n] || e, r[e] = t), this
          }, overrideMimeType: function (e) {
            return w || (g.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (w < 2) for (t in e) x[t] = [x[t], e[t]]; else C.always(e[C.status]);
            return this
          }, abort: function (e) {
            var t = e || a;
            return u && u.abort(t), c(0, t), this
          }
        };
      if (b.promise(C).complete = y.add, C.success = C.done, C.error = C.fail, g.url = ((e || g.url || bt) + "").replace(lt, "").replace(ht, yt[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = $.trim(g.dataType || "*").toLowerCase().match(D) || [""], null == g.crossDomain && (i = pt.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] === yt[1] && i[2] === yt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (yt[3] || ("http:" === yt[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = $.param(g.data, g.traditional)), wt(gt, g, t, C), 2 === w) return C;
      for (o in(p = $.event && g.global) && 0 == $.active++ && $.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !ft.test(g.type), d = g.url, g.hasContent || (g.data && (d = g.url += (ct.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = ut.test(d) ? d.replace(ut, "$1_=" + at++) : d + (ct.test(d) ? "&" : "?") + "_=" + at++)), g.ifModified && ($.lastModified[d] && C.setRequestHeader("If-Modified-Since", $.lastModified[d]), $.etag[d] && C.setRequestHeader("If-None-Match", $.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && C.setRequestHeader("Content-Type", g.contentType), C.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + vt + "; q=0.01" : "") : g.accepts["*"]), g.headers) C.setRequestHeader(o, g.headers[o]);
      if (g.beforeSend && (!1 === g.beforeSend.call(m, C, g) || 2 === w)) return C.abort();
      for (o in a = "abort", {success: 1, error: 1, complete: 1}) C[o](g[o]);
      if (u = wt(mt, g, t, C)) {
        C.readyState = 1, p && v.trigger("ajaxSend", [C, g]), g.async && 0 < g.timeout && (h = setTimeout(function () {
          C.abort("timeout")
        }, g.timeout));
        try {
          w = 1, u.send(r, c)
        } catch (e) {
          if (!(w < 2)) throw e;
          c(-1, e)
        }
      } else c(-1, "No Transport");

      function c(e, t, n, i) {
        var o, r, s, a, c, l = t;
        2 !== w && (w = 2, h && clearTimeout(h), u = void 0, f = i || "", C.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
          for (var i, o, r, s, a = e.contents, c = e.dataTypes; "*" === c[0];) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i) for (o in a) if (a[o] && a[o].test(i)) {
            c.unshift(o);
            break
          }
          if (c[0] in n) r = c[0]; else {
            for (o in n) {
              if (!c[0] || e.converters[o + " " + c[0]]) {
                r = o;
                break
              }
              s = s || o
            }
            r = r || s
          }
          return r ? (r !== c[0] && c.unshift(r), n[r]) : void 0
        }(g, C, n)), a = function (e, t, n, i) {
          var o, r, s, a, c, l = {}, u = e.dataTypes.slice();
          if (u[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
          for (r = u.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = u.shift()) if ("*" === r) r = c; else if ("*" !== c && c !== r) {
            if (!(s = l[c + " " + r] || l["* " + r])) for (o in l) if ((a = o.split(" "))[1] === r && (s = l[c + " " + a[0]] || l["* " + a[0]])) {
              !0 === s ? s = l[o] : !0 !== l[o] && (r = a[0], u.unshift(a[1]));
              break
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
              t = s(t)
            } catch (e) {
              return {state: "parsererror", error: s ? e : "No conversion from " + c + " to " + r}
            }
          }
          return {state: "success", data: t}
        }(g, a, C, o), o ? (g.ifModified && ((c = C.getResponseHeader("Last-Modified")) && ($.lastModified[d] = c), (c = C.getResponseHeader("etag")) && ($.etag[d] = c)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state, r = a.data, o = !(s = a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || l) + "", o ? b.resolveWith(m, [r, l, C]) : b.rejectWith(m, [C, l, s]), C.statusCode(x), x = void 0, p && v.trigger(o ? "ajaxSuccess" : "ajaxError", [C, g, o ? r : s]), y.fireWith(m, [C, l]), p && (v.trigger("ajaxComplete", [C, g]), --$.active || $.event.trigger("ajaxStop")))
      }

      return C
    },
    getJSON: function (e, t, n) {
      return $.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return $.get(e, void 0, t, "script")
    }
  }), $.each(["get", "post"], function (e, o) {
    $[o] = function (e, t, n, i) {
      return $.isFunction(t) && (i = i || n, n = t, t = void 0), $.ajax({
        url: e,
        type: o,
        dataType: i,
        data: t,
        success: n
      })
    }
  }), $._evalUrl = function (e) {
    return $.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
  }, $.fn.extend({
    wrapAll: function (t) {
      var e;
      return $.isFunction(t) ? this.each(function (e) {
        $(this).wrapAll(t.call(this, e))
      }) : (this[0] && (e = $(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this)
    }, wrapInner: function (n) {
      return this.each($.isFunction(n) ? function (e) {
        $(this).wrapInner(n.call(this, e))
      } : function () {
        var e = $(this), t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    }, wrap: function (t) {
      var n = $.isFunction(t);
      return this.each(function (e) {
        $(this).wrapAll(n ? t.call(this, e) : t)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
      }).end()
    }
  }), $.expr.filters.hidden = function (e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }, $.expr.filters.visible = function (e) {
    return !$.expr.filters.hidden(e)
  };
  var $t = /%20/g, Tt = /\[\]$/, Ft = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i,
    Et = /^(?:input|select|textarea|keygen)/i;

  function _t(n, e, i, o) {
    var t;
    if ($.isArray(e)) $.each(e, function (e, t) {
      i || Tt.test(n) ? o(n, t) : _t(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
    }); else if (i || "object" !== $.type(e)) o(n, e); else for (t in e) _t(n + "[" + t + "]", e[t], i, o)
  }

  $.param = function (e, t) {
    function n(e, t) {
      t = $.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    }

    var i, o = [];
    if (void 0 === t && (t = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(e) || e.jquery && !$.isPlainObject(e)) $.each(e, function () {
      n(this.name, this.value)
    }); else for (i in e) _t(i, e[i], t, n);
    return o.join("&").replace($t, "+")
  }, $.fn.extend({
    serialize: function () {
      return $.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = $.prop(this, "elements");
        return e ? $.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !$(this).is(":disabled") && Et.test(this.nodeName) && !St.test(e) && (this.checked || !W.test(e))
      }).map(function (e, t) {
        var n = $(this).val();
        return null == n ? null : $.isArray(n) ? $.map(n, function (e) {
          return {name: t.name, value: e.replace(Ft, "\r\n")}
        }) : {name: t.name, value: n.replace(Ft, "\r\n")}
      }).get()
    }
  }), $.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest
    } catch (e) {
    }
  };
  var kt = 0, Dt = {}, At = {0: 200, 1223: 204}, Pt = $.ajaxSettings.xhr();
  p.attachEvent && p.attachEvent("onunload", function () {
    for (var e in Dt) Dt[e]()
  }), v.cors = !!Pt && "withCredentials" in Pt, v.ajax = Pt = !!Pt, $.ajaxTransport(function (r) {
    var s;
    return v.cors || Pt && !r.crossDomain ? {
      send: function (e, t) {
        var n, i = r.xhr(), o = ++kt;
        if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (n in r.xhrFields) i[n] = r.xhrFields[n];
        for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
        s = function (e) {
          return function () {
            s && (delete Dt[o], s = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? t(i.status, i.statusText) : t(At[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {text: i.responseText} : void 0, i.getAllResponseHeaders()))
          }
        }, i.onload = s(), i.onerror = s("error"), s = Dt[o] = s("abort");
        try {
          i.send(r.hasContent && r.data || null)
        } catch (e) {
          if (s) throw e
        }
      }, abort: function () {
        s && s()
      }
    } : void 0
  }), $.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      "text script": function (e) {
        return $.globalEval(e), e
      }
    }
  }), $.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), $.ajaxTransport("script", function (n) {
    var i, o;
    if (n.crossDomain) return {
      send: function (e, t) {
        i = $("<script>").prop({async: !0, charset: n.scriptCharset, src: n.url}).on("load error", o = function (e) {
          i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), b.head.appendChild(i[0])
      }, abort: function () {
        o && o()
      }
    }
  });
  var It = [], Lt = /(=)\?(?=&|$)|\?\?/;
  $.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = It.pop() || $.expando + "_" + at++;
      return this[e] = !0, e
    }
  }), $.ajaxPrefilter("json jsonp", function (e, t, n) {
    var i, o, r,
      s = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
    return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = $.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Lt, "$1" + i) : !1 !== e.jsonp && (e.url += (ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
      return r || $.error(i + " was not called"), r[0]
    }, e.dataTypes[0] = "json", o = p[i], p[i] = function () {
      r = arguments
    }, n.always(function () {
      p[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, It.push(i)), r && $.isFunction(o) && o(r[0]), r = o = void 0
    }), "script") : void 0
  }), $.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || b;
    var i = x.exec(e), o = !n && [];
    return i ? [t.createElement(i[1])] : (i = $.buildFragment([e], t, o), o && o.length && $(o).remove(), $.merge([], i.childNodes))
  };
  var Nt = $.fn.load;
  $.fn.load = function (e, t, n) {
    if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
    var i, o, r, s = this, a = e.indexOf(" ");
    return 0 <= a && (i = $.trim(e.slice(a)), e = e.slice(0, a)), $.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && $.ajax({
      url: e,
      type: o,
      dataType: "html",
      data: t
    }).done(function (e) {
      r = arguments, s.html(i ? $("<div>").append($.parseHTML(e)).find(i) : e)
    }).complete(n && function (e, t) {
      s.each(n, r || [e.responseText, t, e])
    }), this
  }, $.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    $.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), $.expr.filters.animated = function (t) {
    return $.grep($.timers, function (e) {
      return t === e.elem
    }).length
  };
  var jt = p.document.documentElement;

  function Rt(e) {
    return $.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }

  $.offset = {
    setOffset: function (e, t, n) {
      var i, o, r, s, a, c, l = $.css(e, "position"), u = $(e), d = {};
      "static" === l && (e.style.position = "relative"), a = u.offset(), r = $.css(e, "top"), c = $.css(e, "left"), o = ("absolute" === l || "fixed" === l) && -1 < (r + c).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(r) || 0, parseFloat(c) || 0), $.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
    }
  }, $.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        $.offset.setOffset(this, t, e)
      });
      var e, n, i = this[0], o = {top: 0, left: 0}, r = i && i.ownerDocument;
      return r ? (e = r.documentElement, $.contains(e, i) ? (typeof i.getBoundingClientRect != Y && (o = i.getBoundingClientRect()), n = Rt(r), {
        top: o.top + n.pageYOffset - e.clientTop,
        left: o.left + n.pageXOffset - e.clientLeft
      }) : o) : void 0
    }, position: function () {
      if (this[0]) {
        var e, t, n = this[0], i = {top: 0, left: 0};
        return "fixed" === $.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), $.nodeName(e[0], "html") || (i = e.offset()), i.top += $.css(e[0], "borderTopWidth", !0), i.left += $.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - i.top - $.css(n, "marginTop", !0),
          left: t.left - i.left - $.css(n, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || jt; e && !$.nodeName(e, "html") && "static" === $.css(e, "position");) e = e.offsetParent;
        return e || jt
      })
    }
  }), $.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, o) {
    var r = "pageYOffset" === o;
    $.fn[t] = function (e) {
      return I(this, function (e, t, n) {
        var i = Rt(e);
        return void 0 === n ? i ? i[o] : e[t] : void (i ? i.scrollTo(r ? p.pageXOffset : n, r ? n : p.pageYOffset) : e[t] = n)
      }, t, e, arguments.length, null)
    }
  }), $.each(["top", "left"], function (e, n) {
    $.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
      return t ? (t = Ee(e, n), Fe.test(t) ? $(e).position()[n] + "px" : t) : void 0
    })
  }), $.each({Height: "height", Width: "width"}, function (r, s) {
    $.each({padding: "inner" + r, content: s, "": "outer" + r}, function (i, e) {
      $.fn[e] = function (e, t) {
        var n = arguments.length && (i || "boolean" != typeof e), o = i || (!0 === e || !0 === t ? "margin" : "border");
        return I(this, function (e, t, n) {
          var i;
          return $.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? $.css(e, t, o) : $.style(e, t, n, o)
        }, s, n ? e : void 0, n, null)
      }
    })
  }), $.fn.size = function () {
    return this.length
  }, $.fn.andSelf = $.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return $
  });
  var Mt = p.jQuery, Ot = p.$;
  return $.noConflict = function (e) {
    return p.$ === $ && (p.$ = Ot), e && p.jQuery === $ && (p.jQuery = Mt), $
  }, typeof e == Y && (p.jQuery = p.$ = $), $
});
var loading = {}, loaded = {}, head = document.getElementsByTagName("head")[0], runCallbacks = function (e, t) {
  var n, i = loading[e], o = 0;
  for (delete loading[e]; n = i[o++];) n[t] && n[t]()
}, onSuccess = function (e) {
  loaded[e] = !0, runCallbacks(e, "success")
}, onError = function (e) {
  runCallbacks(e, "error")
};

function loader(t, e, n) {
  var i;
  loaded[t] ? e && e() : loading[t] ? loading[t].push({success: e, error: n}) : (loading[t] = [{
    success: e,
    error: n
  }], (i = document.createElement("script")).type = "text/javascript", i.charset = "utf-8", i.src = ("file:" !== location.protocol || t.indexOf("//") ? "" : "http:") + t, "onload" in i ? (i.onload = function () {
    i.onload = i.onerror = null, onSuccess(t)
  }, i.onerror = function () {
    i.onload = i.onerror = null, onError(t)
  }) : i.onreadystatechange = function () {
    var e = this.readyState;
    "loaded" !== e && "complete" !== e || (i.onreadystatechange = null, onSuccess(t))
  }, head.insertBefore(i, head.lastChild))
}

function lazyInitImages() {
  lazyInit({
    selector: "[data-lazy-src]", init: function (e) {
      console.log("Intersects image:", e), (src = e.dataset.lazySrc) && (e.src = src, delete e.dataset.lazySrc), (srcset = e.dataset.lazySrcset) && (e.srcset = srcset, delete e.dataset.lazySrcset)
    }
  })
}

function lazyInit(n) {
  var t, e = [].slice.call(document.querySelectorAll(n.selector));
  "IntersectionObserver" in window ? (t = new IntersectionObserver(function (e, t) {
    e.forEach(function (e) {
      e.isIntersecting && (n.init(e.target), t.unobserve(e.target))
    })
  }, {rootMargin: "30% 0px 30% 0px"}), e.forEach(function (e) {
    t.observe(e)
  }), window.lazyObservers = window.lazyObservers || [], window.lazyObservers.push(t)) : e.forEach(n.init)
}

function pad(e) {
  return e < 10 ? "0" + e : e
}

function timerUpdate(thisis) {
  $days = $(thisis).find(".b-timer__digit_type_days"), $hours = $(thisis).find(".b-timer__digit_type_hours"), $minutes = $(thisis).find(".b-timer__digit_type_minutes"), $seconds = $(thisis).find(".b-timer__digit_type_seconds");
  var now = Math.floor(Date.now() / 1e3), finish = parseInt($(thisis).attr("data-timer")), diff = finish - now;
  if (diff < 1) {
    diff = 0, $(thisis).stopTime();
    var id = $(thisis).attr("data-timer-id");
    if (id && $('.b-timer__target[data-timer-id~="' + id + '"]').addClass("b-timer__target_finished"), $(thisis).hasClass("b-timer_action_once")) {
      if (saved = parseInt(localStorage.getItem(id)), !isNaN(saved) && saved < 1) return;
      localStorage.setItem(id, "-1")
    }
    action = $(thisis).attr("data-timer-action"), action && eval(action)
  }
  var diff_d = Math.floor(diff / 86400), diff_h = Math.floor((diff - 60 * diff_d * 60 * 24) / 3600),
    diff_m = Math.floor((diff - 60 * diff_d * 60 * 24 - 60 * diff_h * 60) / 60),
    diff_s = Math.floor(diff - 60 * diff_d * 60 * 24 - 60 * diff_h * 60 - 60 * diff_m);
  $seconds.text(pad(diff_s)), $minutes.text(pad(diff_m)), $hours.text(pad(diff_h)), $days.text(pad(diff_d)), $(thisis).hasClass("b-timer_mode_dayless") && $hours.text(pad(diff_h + 24 * diff_d))
}

$(document).ready(function () {
  $(".b-nocopy").on("contextmenu", function (e) {
    "INPUT" == e.target.nodeName || "TEXTAREA" == e.target.nodeName || "A" == e.target.nodeName || $(e.target).hasClass("b-nocopy_disabled") || e.preventDefault()
  })
}), $(function () {
  $(".b-video").not(".b-video_inited").not(".b-video_init_false").each(function () {
    $(this).append('<a class="b-popup b-popup_type_iframe" target="_blank" href="https://www.youtube.com/embed/' + $(this).attr("data-video") + '?autoplay=1"><img class="b-video__cover" data-lazy-src="https://img.youtube.com/vi/' + $(this).attr("data-video") + '/sddefault.jpg" /></a>')
  })
}), $(document).ready(function () {
  var e, o, t, n;
  $(".b-video__subscribe").length && (e = $(".b-video"), o = $(".b-video__subscribe"), t = e.attr("data-video"), n = "AIzaSyD9qAqBZsvZotmw5Pz5c_IImA1KppJW2ZQ", $.getJSON("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + t + "&key=" + n).complete(function (e) {
    var i;
    e.responseJSON && (i = e.responseJSON.items[0].snippet.channelId, $.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + i + "&key=" + n).complete(function (e) {
      var t, n;
      e.responseJSON && (t = e.responseJSON.items[0].statistics.subscriberCount, n = o.text(), o.attr("href", "https://www.youtube.com/channel/" + i + "?sub_confirmation=1"), o.text(n + " " + t), o.addClass("b-video__subscribe_loaded"))
    }))
  }))
}), function () {
  "use strict";
  var g, t;

  function l(e) {
    this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    }, this.isIntersecting = !!e.intersectionRect;
    var t = this.boundingClientRect, n = t.width * t.height, i = this.intersectionRect, o = i.width * i.height;
    this.intersectionRatio = n ? Number((o / n).toFixed(4)) : this.isIntersecting ? 1 : 0
  }

  function e(e, t) {
    var n, i, o, r = t || {};
    if ("function" != typeof e) throw new Error("callback must be a function");
    if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
    this._checkForIntersections = (n = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, o = null, function () {
      o = o || setTimeout(function () {
        n(), o = null
      }, i)
    }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map(function (e) {
      return e.value + e.unit
    }).join(" ")
  }

  function n(e, t, n, i) {
    "function" == typeof e.addEventListener ? e.addEventListener(t, n, i || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
  }

  function i(e, t, n, i) {
    "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, i || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
  }

  function m(e) {
    var t;
    try {
      t = e.getBoundingClientRect()
    } catch (e) {
    }
    return t ? (t.width && t.height || (t = {
      top: t.top,
      right: t.right,
      bottom: t.bottom,
      left: t.left,
      width: t.right - t.left,
      height: t.bottom - t.top
    }), t) : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
  }

  function o(e, t) {
    for (var n = t; n;) {
      if (n == e) return !0;
      n = v(n)
    }
    return !1
  }

  function v(e) {
    var t = e.parentNode;
    return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
  }

  "object" == typeof window && ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
    get: function () {
      return 0 < this.intersectionRatio
    }
  }) : (g = window.document, t = [], e.prototype.THROTTLE_TIMEOUT = 100, e.prototype.POLL_INTERVAL = null, e.prototype.USE_MUTATION_OBSERVER = !0, e.prototype.observe = function (t) {
    if (!this._observationTargets.some(function (e) {
      return e.element == t
    })) {
      if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
      this._registerInstance(), this._observationTargets.push({
        element: t,
        entry: null
      }), this._monitorIntersections(), this._checkForIntersections()
    }
  }, e.prototype.unobserve = function (t) {
    this._observationTargets = this._observationTargets.filter(function (e) {
      return e.element != t
    }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
  }, e.prototype.disconnect = function () {
    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
  }, e.prototype.takeRecords = function () {
    var e = this._queuedEntries.slice();
    return this._queuedEntries = [], e
  }, e.prototype._initThresholds = function (e) {
    var t = e || [0];
    return Array.isArray(t) || (t = [t]), t.sort().filter(function (e, t, n) {
      if ("number" != typeof e || isNaN(e) || e < 0 || 1 < e) throw new Error("threshold must be a number between 0 and 1 inclusively");
      return e !== n[t - 1]
    })
  }, e.prototype._parseRootMargin = function (e) {
    var t = (e || "0px").split(/\s+/).map(function (e) {
      var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
      if (!t) throw new Error("rootMargin must be specified in pixels or percent");
      return {value: parseFloat(t[1]), unit: t[2]}
    });
    return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
  }, e.prototype._monitorIntersections = function () {
    this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(window, "resize", this._checkForIntersections, !0), n(g, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(g, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    }))))
  }, e.prototype._unmonitorIntersections = function () {
    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(window, "resize", this._checkForIntersections, !0), i(g, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
  }, e.prototype._checkForIntersections = function () {
    var a = this._rootIsInDom(),
      c = a ? this._getRootRect() : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0};
    this._observationTargets.forEach(function (e) {
      var t = e.element, n = m(t), i = this._rootContainsTarget(t), o = e.entry,
        r = a && i && this._computeTargetAndRootIntersection(t, c), s = e.entry = new l({
          time: window.performance && performance.now && performance.now(),
          target: t,
          boundingClientRect: n,
          rootBounds: c,
          intersectionRect: r
        });
      o ? a && i ? this._hasCrossedThreshold(o, s) && this._queuedEntries.push(s) : o && o.isIntersecting && this._queuedEntries.push(s) : this._queuedEntries.push(s)
    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
  }, e.prototype._computeTargetAndRootIntersection = function (e, t) {
    if ("none" != window.getComputedStyle(e).display) {
      for (var n, i, o, r, s, a, c, l, u = m(e), d = v(e), f = !1; !f;) {
        var h = null, p = 1 == d.nodeType ? window.getComputedStyle(d) : {};
        if ("none" == p.display) return;
        if (d == this.root || d == g ? (f = !0, h = t) : d != g.body && d != g.documentElement && "visible" != p.overflow && (h = m(d)), h && (n = h, i = u, o = Math.max(n.top, i.top), r = Math.min(n.bottom, i.bottom), s = Math.max(n.left, i.left), l = r - o, !(u = 0 <= (c = (a = Math.min(n.right, i.right)) - s) && 0 <= l && {
          top: o,
          bottom: r,
          left: s,
          right: a,
          width: c,
          height: l
        }))) break;
        d = v(d)
      }
      return u
    }
  }, e.prototype._getRootRect = function () {
    var e, t, n;
    return n = this.root ? m(this.root) : (e = g.documentElement, t = g.body, {
      top: 0,
      left: 0,
      right: e.clientWidth || t.clientWidth,
      width: e.clientWidth || t.clientWidth,
      bottom: e.clientHeight || t.clientHeight,
      height: e.clientHeight || t.clientHeight
    }), this._expandRectByRootMargin(n)
  }, e.prototype._expandRectByRootMargin = function (n) {
    var e = this._rootMarginValues.map(function (e, t) {
      return "px" == e.unit ? e.value : e.value * (t % 2 ? n.width : n.height) / 100
    }), t = {top: n.top - e[0], right: n.right + e[1], bottom: n.bottom + e[2], left: n.left - e[3]};
    return t.width = t.right - t.left, t.height = t.bottom - t.top, t
  }, e.prototype._hasCrossedThreshold = function (e, t) {
    var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1, i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
    if (n !== i) for (var o = 0; o < this.thresholds.length; o++) {
      var r = this.thresholds[o];
      if (r == n || r == i || r < n != r < i) return !0
    }
  }, e.prototype._rootIsInDom = function () {
    return !this.root || o(g, this.root)
  }, e.prototype._rootContainsTarget = function (e) {
    return o(this.root || g, e)
  }, e.prototype._registerInstance = function () {
    t.indexOf(this) < 0 && t.push(this)
  }, e.prototype._unregisterInstance = function () {
    var e = t.indexOf(this);
    -1 != e && t.splice(e, 1)
  }, window.IntersectionObserver = e, window.IntersectionObserverEntry = l))
}(), $(function () {
  lazyInitImages()
}), $(function () {
  lazyInit({
    selector: ".b-widget_lazy", init: function (e) {
      $(e).contents().filter(function () {
        return 8 === this.nodeType
      }).replaceWith(function () {
        return this.data
      })
    }
  })
}), jQuery.fn.extend({
  everyTime: function (e, t, n, i) {
    return this.each(function () {
      jQuery.timer.add(this, e, t, n, i)
    })
  }, oneTime: function (e, t, n) {
    return this.each(function () {
      jQuery.timer.add(this, e, t, n, 1)
    })
  }, stopTime: function (e, t) {
    return this.each(function () {
      jQuery.timer.remove(this, e, t)
    })
  }
}), jQuery.extend({
  timer: {
    global: [],
    guid: 1,
    dataKey: "jQuery.timer",
    regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
    powers: {ms: 1, cs: 10, ds: 100, s: 1e3, das: 1e4, hs: 1e5, ks: 1e6},
    timeParse: function (e) {
      if (null == e || null == e) return null;
      var t = this.regex.exec(jQuery.trim(e.toString()));
      return t[2] ? parseFloat(t[1]) * (this.powers[t[2]] || 1) : e
    },
    add: function (e, t, n, i, o) {
      var r, s, a = 0;
      jQuery.isFunction(n) && (o = o || i, i = n, n = t), "number" != typeof (t = jQuery.timer.timeParse(t)) || isNaN(t) || t < 0 || (("number" != typeof o || isNaN(o) || o < 0) && (o = 0), o = o || 0, (r = jQuery.data(e, this.dataKey) || jQuery.data(e, this.dataKey, {}))[n] || (r[n] = {}), i.timerID = i.timerID || this.guid++, (s = function () {
        (++a > o && 0 !== o || !1 === i.call(e, a)) && jQuery.timer.remove(e, n, i)
      }).timerID = i.timerID, r[n][i.timerID] || (r[n][i.timerID] = window.setInterval(s, t)), this.global.push(e))
    },
    remove: function (e, t, n) {
      var i, o = jQuery.data(e, this.dataKey);
      if (o) {
        if (t) {
          if (o[t]) {
            if (n) n.timerID && (window.clearInterval(o[t][n.timerID]), delete o[t][n.timerID]); else for (var n in o[t]) window.clearInterval(o[t][n]), delete o[t][n];
            for (i in o[t]) break;
            i || (i = null, delete o[t])
          }
        } else for (t in o) this.remove(e, t, n);
        for (i in o) break;
        i || jQuery.removeData(e, this.dataKey)
      }
    }
  }
}), jQuery(window).bind("unload", function () {
  jQuery.each(jQuery.timer.global, function (e, t) {
    jQuery.timer.remove(t)
  })
}), Date.now || (Date.now = function () {
  return (new Date).getTime()
}), $(document).ready(function () {
  $(".b-timer").each(function () {
    var e = Math.floor(Date.now() / 1e3);
    finish = e + parseInt($(this).attr("data-timer")), id = $(this).attr("data-timer-id"), id && (saved = localStorage.getItem(id), saved ? finish = saved : localStorage.setItem(id, finish)), $(this).attr("data-timer", finish), timerUpdate(this), $(this).everyTime(1e3, "timer", function () {
      timerUpdate(this)
    })
  })
}), $(function () {
  $(".b-totop").click(function (e) {
    return console.log("b-totop clicked!"), $("html,body").animate({scrollTop: 0}, "500", "swing"), !1
  }), $(function () {
    $(window).scroll()
  }), $(window).scroll(function () {
    $(window).scrollTop() < 250 ? $(".b-totop").addClass("b-totop_visible_false") : $(".b-totop").removeClass("b-totop_visible_false")
  })
}), $(function () {
  $(".b-totop").click(function (e) {
    return console.log("b-totop clicked!"), $("html,body").animate({scrollTop: 0}, "500", "swing"), !1
  }), $(function () {
    $(window).scroll()
  }), $(window).scroll(function () {
    $(window).scrollTop() < 250 ? $(".b-totop").addClass("b-totop_visible_false") : $(".b-totop").removeClass("b-totop_visible_false")
  })
}), function (c, d, g, m) {
  "use strict";
  var e, t, n, i, o, r, s, a, f, l, u, h, p, v;

  function b(e, t) {
    var n, i, o, r = [], s = 0;
    e && e.isDefaultPrevented() || (e.preventDefault(), t = t || {}, e && e.data && (t = p(e.data.options, t)), n = t.$target || g(e.currentTarget).trigger("blur"), (o = g.fancybox.getInstance()) && o.$trigger && o.$trigger.is(n) || (r = t.selector ? g(t.selector) : (i = n.attr("data-fancybox") || "") ? (r = e.data ? e.data.items : []).length ? r.filter('[data-fancybox="' + i + '"]') : g('[data-fancybox="' + i + '"]') : [n], (s = g(r).index(n)) < 0 && (s = 0), (o = g.fancybox.open(r, t, s)).$trigger = n))
  }

  c.console = c.console || {
    info: function (e) {
    }
  }, g && (g.fn.fancybox ? console.info("fancyBox already initialized") : (o = {
    closeExisting: !1,
    loop: !1,
    gutter: 50,
    keyboard: !0,
    preventCaptionOverlap: !0,
    arrows: !0,
    infobar: !0,
    smallBtn: "auto",
    toolbar: "auto",
    buttons: ["zoom", "slideShow", "thumbs", "close"],
    idleTime: 3,
    protect: !1,
    modal: !1,
    image: {preload: !1},
    ajax: {settings: {data: {fancybox: !0}}},
    iframe: {
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
      preload: !0,
      css: {},
      attr: {scrolling: "auto"}
    },
    video: {
      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
      format: "",
      autoStart: !0
    },
    defaultType: "image",
    animationEffect: "zoom",
    animationDuration: 366,
    zoomOpacity: "auto",
    transitionEffect: "fade",
    transitionDuration: 366,
    slideClass: "",
    baseClass: "",
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
    spinnerTpl: '<div class="fancybox-loading"></div>',
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
    },
    parentEl: "body",
    hideScrollbar: !0,
    autoFocus: !0,
    backFocus: !0,
    trapFocus: !0,
    fullScreen: {autoStart: !1},
    touch: {vertical: !0, momentum: !0},
    hash: null,
    media: {},
    slideShow: {autoStart: !1, speed: 3e3},
    thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"},
    wheel: "auto",
    onInit: g.noop,
    beforeLoad: g.noop,
    afterLoad: g.noop,
    beforeShow: g.noop,
    afterShow: g.noop,
    beforeClose: g.noop,
    afterClose: g.noop,
    onActivate: g.noop,
    onDeactivate: g.noop,
    clickContent: function (e, t) {
      return "image" === e.type && "zoom"
    },
    clickSlide: "close",
    clickOutside: "close",
    dblclickContent: !1,
    dblclickSlide: !1,
    dblclickOutside: !1,
    mobile: {
      preventCaptionOverlap: !1, idleTime: !1, clickContent: function (e, t) {
        return "image" === e.type && "toggleControls"
      }, clickSlide: function (e, t) {
        return "image" === e.type ? "toggleControls" : "close"
      }, dblclickContent: function (e, t) {
        return "image" === e.type && "zoom"
      }, dblclickSlide: function (e, t) {
        return "image" === e.type && "zoom"
      }
    },
    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  }, r = g(c), s = g(d), a = 0, f = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function (e) {
    return c.setTimeout(e, 1e3 / 60)
  }, l = c.cancelAnimationFrame || c.webkitCancelAnimationFrame || c.mozCancelAnimationFrame || c.oCancelAnimationFrame || function (e) {
    c.clearTimeout(e)
  }, u = function () {
    var e, t = d.createElement("fakeelement"), n = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
    for (e in n) if (t.style[e] !== m) return n[e];
    return "transitionend"
  }(), h = function (e) {
    return e && e.length && e[0].offsetHeight
  }, p = function (e, t) {
    var n = g.extend(!0, {}, e, t);
    return g.each(t, function (e, t) {
      g.isArray(t) && (n[e] = t)
    }), n
  }, v = function (e, t, n) {
    var i = this;
    i.opts = p({index: n}, g.fancybox.defaults), g.isPlainObject(t) && (i.opts = p(i.opts, t)), g.fancybox.isMobile && (i.opts = p(i.opts, i.opts.mobile)), i.id = i.opts.id || ++a, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(e), i.group.length && i.init()
  }, g.extend(v.prototype, {
    init: function () {
      var t, n, i = this, o = i.group[i.currIndex].opts;
      o.closeExisting && g.fancybox.close(!0), g("body").addClass("fancybox-active"), !g.fancybox.getInstance() && !1 !== o.hideScrollbar && !g.fancybox.isMobile && d.body.scrollHeight > c.innerHeight && (g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (c.innerWidth - d.documentElement.clientWidth) + "px;}</style>"), g("body").addClass("compensate-for-scrollbar")), n = "", g.each(o.buttons, function (e, t) {
        n += o.btnTpl[t] || ""
      }), t = g(i.translate(i, o.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", o.btnTpl.arrowLeft + o.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass(o.baseClass).data("FancyBox", i).appendTo(o.parentEl), i.$refs = {container: t}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (e) {
        i.$refs[e] = t.find(".fancybox-" + e)
      }), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
    }, translate: function (e, t) {
      var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
      return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
        return n[t] === m ? e : n[t]
      })
    }, addContent: function (e) {
      var t, l = this, n = g.makeArray(e);
      g.each(n, function (e, t) {
        var n, i, o, r, s, a = {}, c = {};
        g.isPlainObject(t) ? c = (a = t).opts || t : "object" === g.type(t) && g(t).length ? (c = (n = g(t)).data() || {}, (c = g.extend(!0, {}, c, c.options)).$orig = n, a.src = l.opts.src || c.src || n.attr("href"), a.type || a.src || (a.type = "inline", a.src = t)) : a = {
          type: "html",
          src: t + ""
        }, a.opts = g.extend(!0, {}, l.opts, c), g.isArray(c.buttons) && (a.opts.buttons = c.buttons), g.fancybox.isMobile && a.opts.mobile && (a.opts = p(a.opts, a.opts.mobile)), i = a.type || a.opts.type, r = a.src || "", !i && r && ((o = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "video", a.opts.video.format || (a.opts.video.format = "video/" + ("ogv" === o[1] ? "ogg" : o[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (i = "iframe", a = g.extend(!0, a, {
          contentType: "pdf",
          opts: {iframe: {preload: !1}}
        })) : "#" === r.charAt(0) && (i = "inline")), i ? a.type = i : l.trigger("objectNeedsType", a), a.contentType || (a.contentType = -1 < g.inArray(a.type, ["html", "inline", "ajax"]) ? "html" : a.type), a.index = l.group.length, "auto" == a.opts.smallBtn && (a.opts.smallBtn = -1 < g.inArray(a.type, ["html", "inline", "ajax"])), "auto" === a.opts.toolbar && (a.opts.toolbar = !a.opts.smallBtn), a.$thumb = a.opts.$thumb || null, a.opts.$trigger && a.index === l.opts.index && (a.$thumb = a.opts.$trigger.find("img:first"), a.$thumb.length && (a.opts.$orig = a.opts.$trigger)), a.$thumb && a.$thumb.length || !a.opts.$orig || (a.$thumb = a.opts.$orig.find("img:first")), a.$thumb && !a.$thumb.length && (a.$thumb = null), a.thumb = a.opts.thumb || (a.$thumb ? a.$thumb[0].src : null), "function" === g.type(a.opts.caption) && (a.opts.caption = a.opts.caption.apply(t, [l, a])), "function" === g.type(l.opts.caption) && (a.opts.caption = l.opts.caption.apply(t, [l, a])), a.opts.caption instanceof g || (a.opts.caption = a.opts.caption === m ? "" : a.opts.caption + ""), "ajax" === a.type && 1 < (s = r.split(/\s+/, 2)).length && (a.src = s.shift(), a.opts.filter = s.shift()), a.opts.modal && (a.opts = g.extend(!0, a.opts, {
          trapFocus: !0,
          infobar: 0,
          toolbar: 0,
          smallBtn: 0,
          keyboard: 0,
          slideShow: 0,
          fullScreen: 0,
          thumbs: 0,
          touch: 0,
          clickContent: !1,
          clickSlide: !1,
          clickOutside: !1,
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1
        })), l.group.push(a)
      }), Object.keys(l.slides).length && (l.updateControls(), (t = l.Thumbs) && t.isActive && (t.create(), t.focus()))
    }, addEvents: function () {
      var i = this;
      i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
        e.stopPropagation(), e.preventDefault(), i.close(e)
      }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
        e.stopPropagation(), e.preventDefault(), i.previous()
      }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
        e.stopPropagation(), e.preventDefault(), i.next()
      }).on("click.fb", "[data-fancybox-zoom]", function (e) {
        i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
      }), r.on("orientationchange.fb resize.fb", function (e) {
        e && e.originalEvent && "resize" === e.originalEvent.type ? (i.requestId && l(i.requestId), i.requestId = f(function () {
          i.update(e)
        })) : (i.current && "iframe" === i.current.type && i.$refs.stage.hide(), setTimeout(function () {
          i.$refs.stage.show(), i.update(e)
        }, g.fancybox.isMobile ? 600 : 250))
      }), s.on("keydown.fb", function (e) {
        var t = (g.fancybox ? g.fancybox.getInstance() : null).current, n = e.keyCode || e.which;
        if (9 != n) {
          if (!(!t.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || g(e.target).is("input,textarea,video,audio"))) return 8 === n || 27 === n ? (e.preventDefault(), void i.close(e)) : 37 === n || 38 === n ? (e.preventDefault(), void i.previous()) : 39 === n || 40 === n ? (e.preventDefault(), void i.next()) : void i.trigger("afterKeydown", e, n)
        } else t.opts.trapFocus && i.focus(e)
      }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, s.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
        i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
      }), i.idleInterval = c.setInterval(function () {
        i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
      }, 1e3))
    }, removeEvents: function () {
      r.off("orientationchange.fb resize.fb"), s.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), this.idleInterval = null)
    }, previous: function (e) {
      return this.jumpTo(this.currPos - 1, e)
    }, next: function (e) {
      return this.jumpTo(this.currPos + 1, e)
    }, jumpTo: function (e, i) {
      var t, n, o, r, s, a, c, l, u, d = this, f = d.group.length;
      if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
        if (e = parseInt(e, 10), !(o = d.current ? d.current.opts.loop : d.opts.loop) && (e < 0 || f <= e)) return !1;
        if (t = d.firstRun = !Object.keys(d.slides).length, s = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, r = d.createSlide(e), 1 < f && ((o || r.index < f - 1) && d.createSlide(e + 1), (o || 0 < r.index) && d.createSlide(e - 1)), d.current = r, d.currIndex = r.index, d.currPos = r.pos, d.trigger("beforeShow", t), d.updateControls(), r.forcedDuration = m, g.isNumeric(i) ? r.forcedDuration = i : i = r.opts[t ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), n = d.isMoved(r), r.$slide.addClass("fancybox-slide--current"), t) return r.opts.animationEffect && i && d.$refs.container.css("transition-duration", i + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(r), void d.preload("image");
        a = g.fancybox.getTranslate(s.$slide), c = g.fancybox.getTranslate(d.$refs.stage), g.each(d.slides, function (e, t) {
          g.fancybox.stop(t.$slide, !0)
        }), s.pos !== r.pos && (s.isComplete = !1), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), n ? (u = a.left - (s.pos * a.width + s.pos * s.opts.gutter), g.each(d.slides, function (e, t) {
          t.$slide.removeClass("fancybox-animated").removeClass(function (e, t) {
            return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
          });
          var n = t.pos * a.width + t.pos * t.opts.gutter;
          g.fancybox.setTranslate(t.$slide, {
            top: 0,
            left: n - c.left + u
          }), t.pos !== r.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > r.pos ? "next" : "previous")), h(t.$slide), g.fancybox.animate(t.$slide, {
            top: 0,
            left: (t.pos - r.pos) * a.width + (t.pos - r.pos) * t.opts.gutter
          }, i, function () {
            t.$slide.css({
              transform: "",
              opacity: ""
            }).removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === d.currPos && d.complete()
          })
        })) : i && r.opts.transitionEffect && (l = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, s.$slide.addClass("fancybox-slide--" + (s.pos > r.pos ? "next" : "previous")), g.fancybox.animate(s.$slide, l, i, function () {
          s.$slide.removeClass(l).removeClass("fancybox-slide--next fancybox-slide--previous")
        }, !1)), r.isLoaded ? d.revealContent(r) : d.loadSlide(r), d.preload("image")
      }
    }, createSlide: function (e) {
      var t, n = this, i = (i = e % n.group.length) < 0 ? n.group.length + i : i;
      return !n.slides[e] && n.group[i] && (t = g('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[e] = g.extend(!0, {}, n.group[i], {
        pos: e,
        $slide: t,
        isLoaded: !1
      }), n.updateSlide(n.slides[e])), n.slides[e]
    }, scaleToActual: function (e, t, n) {
      var i, o, r, s, a, c = this, l = c.current, u = l.$content, d = g.fancybox.getTranslate(l.$slide).width,
        f = g.fancybox.getTranslate(l.$slide).height, h = l.width, p = l.height;
      c.isAnimating || c.isMoved() || !u || "image" != l.type || !l.isLoaded || l.hasError || (c.isAnimating = !0, g.fancybox.stop(u), e = e === m ? .5 * d : e, t = t === m ? .5 * f : t, (i = g.fancybox.getTranslate(u)).top -= g.fancybox.getTranslate(l.$slide).top, i.left -= g.fancybox.getTranslate(l.$slide).left, s = h / i.width, a = p / i.height, o = .5 * d - .5 * h, r = .5 * f - .5 * p, d < h && (0 < (o = i.left * s - (e * s - e)) && (o = 0), o < d - h && (o = d - h)), f < p && (0 < (r = i.top * a - (t * a - t)) && (r = 0), r < f - p && (r = f - p)), c.updateCursor(h, p), g.fancybox.animate(u, {
        top: r,
        left: o,
        scaleX: s,
        scaleY: a
      }, n || 366, function () {
        c.isAnimating = !1
      }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
    }, scaleToFit: function (e) {
      var t, n = this, i = n.current, o = i.$content;
      n.isAnimating || n.isMoved() || !o || "image" != i.type || !i.isLoaded || i.hasError || (n.isAnimating = !0, g.fancybox.stop(o), t = n.getFitPos(i), n.updateCursor(t.width, t.height), g.fancybox.animate(o, {
        top: t.top,
        left: t.left,
        scaleX: t.width / o.width(),
        scaleY: t.height / o.height()
      }, e || 366, function () {
        n.isAnimating = !1
      }))
    }, getFitPos: function (e) {
      var t, n, i, o, r = e.$content, s = e.$slide, a = e.width || e.opts.width, c = e.height || e.opts.height, l = {};
      return !!(e.isLoaded && r && r.length) && (t = g.fancybox.getTranslate(this.$refs.stage).width, n = g.fancybox.getTranslate(this.$refs.stage).height, t -= parseFloat(s.css("paddingLeft")) + parseFloat(s.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), n -= parseFloat(s.css("paddingTop")) + parseFloat(s.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), a && c || (a = t, c = n), t - .5 < (a *= i = Math.min(1, t / a, n / c)) && (a = t), n - .5 < (c *= i) && (c = n), "image" === e.type ? (l.top = Math.floor(.5 * (n - c)) + parseFloat(s.css("paddingTop")), l.left = Math.floor(.5 * (t - a)) + parseFloat(s.css("paddingLeft"))) : "video" === e.contentType && (a / (o = e.opts.width && e.opts.height ? a / c : e.opts.ratio || 16 / 9) < c ? c = a / o : c * o < a && (a = c * o)), l.width = a, l.height = c, l)
    }, update: function (n) {
      var i = this;
      g.each(i.slides, function (e, t) {
        i.updateSlide(t, n)
      })
    }, updateSlide: function (e, t) {
      var n = this, i = e && e.$content, o = e.width || e.opts.width, r = e.height || e.opts.height, s = e.$slide;
      n.adjustCaption(e), i && (o || r || "video" === e.contentType) && !e.hasError && (g.fancybox.stop(i), g.fancybox.setTranslate(i, n.getFitPos(e)), e.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(e), s.length && (s.trigger("refresh"), e.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)), n.trigger("onUpdate", e, t)
    }, centerSlide: function (e) {
      var t = this, n = t.current, i = n.$slide;
      !t.isClosing && n && (i.siblings().css({
        transform: "",
        opacity: ""
      }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), g.fancybox.animate(i, {
        top: 0,
        left: 0,
        opacity: 1
      }, e === m ? 0 : e, function () {
        i.css({transform: "", opacity: ""}), n.isComplete || t.complete()
      }, !1))
    }, isMoved: function (e) {
      var t, n, i = e || this.current;
      return !!i && (n = g.fancybox.getTranslate(this.$refs.stage), t = g.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(t.top - n.top) || .5 < Math.abs(t.left - n.left)))
    }, updateCursor: function (e, t) {
      var n, i, o = this, r = o.current, s = o.$refs.container;
      r && !o.isClosing && o.Guestures && (s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), i = !!(n = o.canPan(e, t)) || o.isZoomable(), s.toggleClass("fancybox-is-zoomable", i), g("[data-fancybox-zoom]").prop("disabled", !i), n ? s.addClass("fancybox-can-pan") : i && ("zoom" === r.opts.clickContent || g.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? s.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || 1 < o.group.length) && "video" !== r.contentType && s.addClass("fancybox-can-swipe"))
    }, isZoomable: function () {
      var e, t = this.current;
      if (t && !this.isClosing && "image" === t.type && !t.hasError) {
        if (!t.isLoaded) return !0;
        if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height)) return !0
      }
      return !1
    }, isScaledDown: function (e, t) {
      var n = !1, i = this.current, o = i.$content;
      return e !== m && t !== m ? n = e < i.width && t < i.height : o && (n = (n = g.fancybox.getTranslate(o)).width < i.width && n.height < i.height), n
    }, canPan: function (e, t) {
      var n = this.current, i = null, o = !1;
      return "image" === n.type && (n.isComplete || e && t) && !n.hasError && (o = this.getFitPos(n), e !== m && t !== m ? i = {
        width: e,
        height: t
      } : n.isComplete && (i = g.fancybox.getTranslate(n.$content)), i && o && (o = 1.5 < Math.abs(i.width - o.width) || 1.5 < Math.abs(i.height - o.height))), o
    }, loadSlide: function (n) {
      var e, t, i, o = this;
      if (!n.isLoading && !n.isLoaded) {
        if (!(n.isLoading = !0) === o.trigger("beforeLoad", n)) return n.isLoading = !1;
        switch (e = n.type, (t = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), e) {
          case"image":
            o.setImage(n);
            break;
          case"iframe":
            o.setIframe(n);
            break;
          case"html":
            o.setContent(n, n.src || n.content);
            break;
          case"video":
            o.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
            break;
          case"inline":
            g(n.src).length ? o.setContent(n, g(n.src)) : o.setError(n);
            break;
          case"ajax":
            o.showLoading(n), i = g.ajax(g.extend({}, n.opts.ajax.settings, {
              url: n.src, success: function (e, t) {
                "success" === t && o.setContent(n, e)
              }, error: function (e, t) {
                e && "abort" !== t && o.setError(n)
              }
            })), t.one("onReset", function () {
              i.abort()
            });
            break;
          default:
            o.setError(n)
        }
        return !0
      }
    }, setImage: function (t) {
      var e, n = this;
      setTimeout(function () {
        var e = t.$image;
        n.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || n.showLoading(t)
      }, 50), n.checkSrcset(t), t.$content = g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (e = d.createElement("img")).onerror = function () {
        g(this).remove(), t.$ghost = null
      }, e.onload = function () {
        n.afterLoad(t)
      }, t.$ghost = g(e).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), n.setBigImage(t)
    }, checkSrcset: function (e) {
      var t, n, i, o, r = e.opts.srcset || e.opts.image.srcset;
      if (r) {
        i = c.devicePixelRatio || 1, o = c.innerWidth * i, (n = r.split(",").map(function (e) {
          var i = {};
          return e.trim().split(/\s+/).forEach(function (e, t) {
            var n = parseInt(e.substring(0, e.length - 1), 10);
            if (0 === t) return i.url = e;
            n && (i.value = n, i.postfix = e[e.length - 1])
          }), i
        })).sort(function (e, t) {
          return e.value - t.value
        });
        for (var s = 0; s < n.length; s++) {
          var a = n[s];
          if ("w" === a.postfix && a.value >= o || "x" === a.postfix && a.value >= i) {
            t = a;
            break
          }
        }
        !t && n.length && (t = n[n.length - 1]), t && (e.src = t.url, e.width && e.height && "w" == t.postfix && (e.height = e.width / e.height * t.value, e.width = t.value), e.opts.srcset = r)
      }
    }, setBigImage: function (t) {
      var n = this, e = d.createElement("img"), i = g(e);
      t.$image = i.one("error", function () {
        n.setError(t)
      }).one("load", function () {
        var e;
        t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (1 < t.width / t.height && 1 < r.width() / r.height() ? "100" : Math.round(t.width / t.height * 100)) + "vw"), i.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
          t.$ghost && !n.isClosing && t.$ghost.hide()
        }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
      }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (e.complete || "complete" == e.readyState) && i.naturalWidth && i.naturalHeight ? i.trigger("load") : e.error && i.trigger("error")
    }, resolveImageSlideSize: function (e, t, n) {
      var i = parseInt(e.opts.width, 10), o = parseInt(e.opts.height, 10);
      e.width = t, e.height = n, 0 < i && (e.width = i, e.height = Math.floor(i * n / t)), 0 < o && (e.width = Math.floor(o * t / n), e.height = o)
    }, setIframe: function (o) {
      var r, t = this, s = o.opts.iframe, a = o.$slide;
      o.$content = g('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(a), a.addClass("fancybox-slide--" + o.contentType), o.$iframe = r = g(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(o.$content), s.preload ? (t.showLoading(o), r.on("load.fb error.fb", function (e) {
        this.isReady = 1, o.$slide.trigger("refresh"), t.afterLoad(o)
      }), a.on("refresh.fb", function () {
        var e, t = o.$content, n = s.css.width, i = s.css.height;
        if (1 === r[0].isReady) {
          try {
            e = r.contents().find("body")
          } catch (e) {
          }
          e && e.length && e.children().length && (a.css("overflow", "visible"), t.css({
            width: "100%",
            "max-width": "100%",
            height: "9999px"
          }), n === m && (n = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))), t.css("width", n || "").css("max-width", ""), i === m && (i = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))), t.css("height", i || ""), a.css("overflow", "auto")), t.removeClass("fancybox-is-hidden")
        }
      })) : t.afterLoad(o), r.attr("src", o.src), a.one("onReset", function () {
        try {
          g(this).find("iframe").hide().unbind().attr("src", "//about:blank")
        } catch (e) {
        }
        g(this).off("refresh.fb").empty(), o.isLoaded = !1, o.isRevealed = !1
      })
    }, setContent: function (e, t) {
      this.isClosing || (this.hideLoading(e), e.$content && g.fancybox.stop(e.$content), e.$slide.empty(), t && t.hasOwnProperty && t instanceof g && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), e.$placeholder = g("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === g.type(t) && (t = g("<div>").append(g.trim(t)).contents()), e.opts.filter && (t = g("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function () {
        g(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (g(this).empty(), e.isLoaded = !1, e.isRevealed = !1)
      }), g(t).appendTo(e.$slide), g(t).is("video,audio") && (g(t).addClass("fancybox-video"), g(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || g(t).attr("width"), e.opts.height = e.opts.height || g(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), e.$content.siblings().hide(), e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()), e.$content.addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e))
    }, setError: function (e) {
      e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
    }, showLoading: function (e) {
      (e = e || this.current) && !e.$spinner && (e.$spinner = g(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
    }, hideLoading: function (e) {
      (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner)
    }, afterLoad: function (e) {
      var t = this;
      t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = g(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function (e) {
        return 2 == e.button && e.preventDefault(), !0
      }), "image" === e.type && g('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.adjustCaption(e), t.adjustLayout(e), e.pos === t.currPos && t.updateCursor(), t.revealContent(e))
    }, adjustCaption: function (e) {
      var t, n = this, i = e || n.current, o = i.opts.caption, r = i.opts.preventCaptionOverlap, s = n.$refs.caption,
        a = !1;
      s.toggleClass("fancybox-caption--separate", r), r && o && o.length && (i.pos !== n.currPos ? ((t = s.clone().appendTo(s.parent())).children().eq(0).empty().html(o), a = t.outerHeight(!0), t.empty().remove()) : n.$caption && (a = n.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", a || ""))
    }, adjustLayout: function (e) {
      var t, n, i, o, r = e || this.current;
      r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""), r.$content.outerHeight() > r.$slide.height() + .5 && (i = r.$slide[0].style["padding-bottom"], o = r.$slide.css("padding-bottom"), 0 < parseFloat(o) && (t = r.$slide[0].scrollHeight, r.$slide.css("padding-bottom", 0), Math.abs(t - r.$slide[0].scrollHeight) < 1 && (n = o), r.$slide.css("padding-bottom", i))), r.$content.css("margin-bottom", n))
    }, revealContent: function (e) {
      var t, n, i, o, r = this, s = e.$slide, a = !1, c = !1, l = r.isMoved(e), u = e.isRevealed;
      return e.isRevealed = !0, t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"], i = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(e.forcedDuration === m ? i : e.forcedDuration, 10), !l && e.pos === r.currPos && i || (t = !1), "zoom" === t && (e.pos === r.currPos && i && "image" === e.type && !e.hasError && (c = r.getThumbPos(e)) ? a = r.getFitPos(e) : t = "fade"), "zoom" === t ? (r.isAnimating = !0, a.scaleX = a.width / c.width, a.scaleY = a.height / c.height, "auto" == (o = e.opts.zoomOpacity) && (o = .1 < Math.abs(e.width / e.height - c.width / c.height)), o && (c.opacity = .1, a.opacity = 1), g.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), c), h(e.$content), void g.fancybox.animate(e.$content, a, i, function () {
        r.isAnimating = !1, r.complete()
      })) : (r.updateSlide(e), t ? (g.fancybox.stop(s), n = "fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t, s.addClass(n).removeClass("fancybox-slide--current"), e.$content.removeClass("fancybox-is-hidden"), h(s), "image" !== e.type && e.$content.hide().show(0), void g.fancybox.animate(s, "fancybox-slide--current", i, function () {
        s.removeClass(n).css({transform: "", opacity: ""}), e.pos === r.currPos && r.complete()
      }, !0)) : (e.$content.removeClass("fancybox-is-hidden"), u || !l || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void (e.pos === r.currPos && r.complete())))
    }, getThumbPos: function (e) {
      var t, n, i, o, r, s, a, c, l, u = e.$thumb;
      return !!(u && (a = u[0]) && a.ownerDocument === d && (g(".fancybox-container").css("pointer-events", "none"), c = {
        x: a.getBoundingClientRect().left + a.offsetWidth / 2,
        y: a.getBoundingClientRect().top + a.offsetHeight / 2
      }, l = d.elementFromPoint(c.x, c.y) === a, g(".fancybox-container").css("pointer-events", ""), l)) && (n = g.fancybox.getTranslate(u), i = parseFloat(u.css("border-top-width") || 0), o = parseFloat(u.css("border-right-width") || 0), r = parseFloat(u.css("border-bottom-width") || 0), s = parseFloat(u.css("border-left-width") || 0), t = {
        top: n.top + i,
        left: n.left + s,
        width: n.width - o - s,
        height: n.height - i - r,
        scaleX: 1,
        scaleY: 1
      }, 0 < n.width && 0 < n.height && t)
    }, complete: function () {
      var e, n = this, t = n.current, i = {};
      !n.isMoved() && t.isLoaded && (t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), h(t.$slide), t.$slide.addClass("fancybox-slide--complete"), g.each(n.slides, function (e, t) {
        t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? i[t.pos] = t : t && (g.fancybox.stop(t.$slide), t.$slide.off().remove())
      }), n.slides = i), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), t.opts.video.autoStart && t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
        this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next()
      }), t.opts.autoFocus && "html" === t.contentType && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : n.focus(null, !0)), t.$slide.scrollTop(0).scrollLeft(0))
    }, preload: function (e) {
      var t, n, i = this;
      i.group.length < 2 || (n = i.slides[i.currPos + 1], (t = i.slides[i.currPos - 1]) && t.type === e && i.loadSlide(t), n && n.type === e && i.loadSlide(n))
    }, focus: function (e, t) {
      var n, i, o = this,
        r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
      o.isClosing || ((n = (n = !e && o.current && o.current.isComplete ? o.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : o.$refs.container.find("*:visible")).filter(r).filter(function () {
        return "hidden" !== g(this).css("visibility") && !g(this).hasClass("disabled")
      })).length ? (i = n.index(d.activeElement), e && e.shiftKey ? (i < 0 || 0 == i) && (e.preventDefault(), n.eq(n.length - 1).trigger("focus")) : (i < 0 || i == n.length - 1) && (e && e.preventDefault(), n.eq(0).trigger("focus"))) : o.$refs.container.trigger("focus"))
    }, activate: function () {
      var t = this;
      g(".fancybox-container").each(function () {
        var e = g(this).data("FancyBox");
        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
      }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
    }, close: function (e, t) {
      function n() {
        u.cleanUp(e)
      }

      var i, o, r, s, a, c, l, u = this, d = u.current;
      return !u.isClosing && (!(u.isClosing = !0) === u.trigger("beforeClose", e) ? (u.isClosing = !1, f(function () {
        u.update()
      }), !1) : (u.removeEvents(), r = d.$content, i = d.opts.animationEffect, o = g.isNumeric(t) ? t : i ? d.opts.animationDuration : 0, d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== e ? g.fancybox.stop(d.$slide) : i = !1, d.$slide.siblings().trigger("onReset").remove(), o && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), u.hideLoading(d), u.hideControls(!0), u.updateCursor(), "zoom" !== i || r && o && "image" === d.type && !u.isMoved() && !d.hasError && (l = u.getThumbPos(d)) || (i = "fade"), "zoom" === i ? (g.fancybox.stop(r), c = {
        top: (s = g.fancybox.getTranslate(r)).top,
        left: s.left,
        scaleX: s.width / l.width,
        scaleY: s.height / l.height,
        width: l.width,
        height: l.height
      }, "auto" == (a = d.opts.zoomOpacity) && (a = .1 < Math.abs(d.width / d.height - l.width / l.height)), a && (l.opacity = 0), g.fancybox.setTranslate(r, c), h(r), g.fancybox.animate(r, l, o, n)) : i && o ? g.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, n) : !0 === e ? setTimeout(n, o) : n(), !0))
    }, cleanUp: function (e) {
      var t, n, i, o = this, r = o.current.opts.$orig;
      o.current.$slide.trigger("onReset"), o.$refs.container.empty().remove(), o.trigger("afterClose", e), o.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = o.$trigger), r && r.length && (n = c.scrollX, i = c.scrollY, r.trigger("focus"), g("html, body").scrollTop(i).scrollLeft(n))), o.current = null, (t = g.fancybox.getInstance()) ? t.activate() : (g("body").removeClass("fancybox-active compensate-for-scrollbar"), g("#fancybox-style-noscroll").remove())
    }, trigger: function (e, t) {
      var n, i = Array.prototype.slice.call(arguments, 1), o = this, r = t && t.opts ? t : o.current;
      if (r ? i.unshift(r) : r = o, i.unshift(o), g.isFunction(r.opts[e]) && (n = r.opts[e].apply(r, i)), !1 === n) return n;
      "afterClose" !== e && o.$refs ? o.$refs.container.trigger(e + ".fb", i) : s.trigger(e + ".fb", i)
    }, updateControls: function () {
      var e = this, t = e.current, n = t.index, i = e.$refs.container, o = e.$refs.caption, r = t.opts.caption;
      t.$slide.trigger("refresh"), r && r.length ? (e.$caption = o).children().eq(0).html(r) : e.$caption = null, e.hasHiddenControls || e.isIdle || e.showControls(), i.find("[data-fancybox-count]").html(e.group.length), i.find("[data-fancybox-index]").html(n + 1), i.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0), i.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= e.group.length - 1), "image" === t.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), g(d.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
    }, hideControls: function (e) {
      var t = ["infobar", "toolbar", "nav"];
      !e && this.current.opts.preventCaptionOverlap || t.push("caption"), this.$refs.container.removeClass(t.map(function (e) {
        return "fancybox-show-" + e
      }).join(" ")), this.hasHiddenControls = !0
    }, showControls: function () {
      var e = this, t = e.current ? e.current.opts : e.opts, n = e.$refs.container;
      e.hasHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < e.group.length)).toggleClass("fancybox-show-caption", !!e.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < e.group.length)).toggleClass("fancybox-is-modal", !!t.modal)
    }, toggleControls: function () {
      this.hasHiddenControls ? this.showControls() : this.hideControls()
    }
  }), g.fancybox = {
    version: "3.5.6",
    defaults: o,
    getInstance: function (e) {
      var t = g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
        n = Array.prototype.slice.call(arguments, 1);
      return t instanceof v && ("string" === g.type(e) ? t[e].apply(t, n) : "function" === g.type(e) && e.apply(t, n), t)
    },
    open: function (e, t, n) {
      return new v(e, t, n)
    },
    close: function (e) {
      var t = this.getInstance();
      t && (t.close(), !0 === e && this.close(e))
    },
    destroy: function () {
      this.close(!0), s.add("body").off("click.fb-start", "**")
    },
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    use3d: (e = d.createElement("div"), c.getComputedStyle && c.getComputedStyle(e) && c.getComputedStyle(e).getPropertyValue("transform") && !(d.documentMode && d.documentMode < 11)),
    getTranslate: function (e) {
      var t;
      return !(!e || !e.length) && {
        top: (t = e[0].getBoundingClientRect()).top || 0,
        left: t.left || 0,
        width: t.width,
        height: t.height,
        opacity: parseFloat(e.css("opacity"))
      }
    },
    setTranslate: function (e, t) {
      var n = "", i = {};
      if (e && t) return t.left === m && t.top === m || (n = (t.left === m ? e.position().left : t.left) + "px, " + (t.top === m ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), t.scaleX !== m && t.scaleY !== m ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : t.scaleX !== m && (n += " scaleX(" + t.scaleX + ")"), n.length && (i.transform = n), t.opacity !== m && (i.opacity = t.opacity), t.width !== m && (i.width = t.width), t.height !== m && (i.height = t.height), e.css(i)
    },
    animate: function (t, n, i, o, r) {
      var s, a = this;
      g.isFunction(i) && (o = i, i = null), a.stop(t), s = a.getTranslate(t), t.on(u, function (e) {
        e && e.originalEvent && (!t.is(e.originalEvent.target) || "z-index" == e.originalEvent.propertyName) || (a.stop(t), g.isNumeric(i) && t.css("transition-duration", ""), g.isPlainObject(n) ? n.scaleX !== m && n.scaleY !== m && a.setTranslate(t, {
          top: n.top,
          left: n.left,
          width: s.width * n.scaleX,
          height: s.height * n.scaleY,
          scaleX: 1,
          scaleY: 1
        }) : !0 !== r && t.removeClass(n), g.isFunction(o) && o(e))
      }), g.isNumeric(i) && t.css("transition-duration", i + "ms"), g.isPlainObject(n) ? (n.scaleX !== m && n.scaleY !== m && (delete n.width, delete n.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), g.fancybox.setTranslate(t, n)) : t.addClass(n), t.data("timer", setTimeout(function () {
        t.trigger(u)
      }, i + 33))
    },
    stop: function (e, t) {
      e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(u), e.off(u).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"))
    }
  }, g.fn.fancybox = function (e) {
    var t;
    return (t = (e = e || {}).selector || !1) ? g("body").off("click.fb-start", t).on("click.fb-start", t, {options: e}, b) : this.off("click.fb-start").on("click.fb-start", {
      items: this,
      options: e
    }, b), this
  }, s.on("click.fb-start", "[data-fancybox]", b), s.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
    g('[data-fancybox="' + g(this).attr("data-fancybox-trigger") + '"]').eq(g(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {$trigger: g(this)})
  }), t = ".fancybox-button", n = "fancybox-focus", i = null, s.on("mousedown mouseup focus blur", t, function (e) {
    switch (e.type) {
      case"mousedown":
        i = g(this);
        break;
      case"mouseup":
        i = null;
        break;
      case"focusin":
        g(t).removeClass(n), g(this).is(i) || g(this).is("[disabled]") || g(this).addClass(n);
        break;
      case"focusout":
        g(t).removeClass(n)
    }
  })))
}(window, document, jQuery), function (h) {
  "use strict";

  function p(n, e, t) {
    if (n) return t = t || "", "object" === h.type(t) && (t = h.param(t, !0)), h.each(e, function (e, t) {
      n = n.replace("$" + e, t || "")
    }), t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t), n
  }

  var i = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (e) {
        return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
      }
    },
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (e) {
        return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
      }
    }
  };
  h(document).on("objectNeedsType.fb", function (e, t, o) {
    var r, s, a, c, l, u, d = o.src || "", f = !1, n = h.extend(!0, {}, i, o.opts.media);
    h.each(n, function (e, t) {
      if (s = d.match(t.matcher)) {
        if (f = t.type, u = e, l = {}, t.paramPlace && s[t.paramPlace]) {
          "?" == (c = s[t.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
          for (var n = 0; n < c.length; ++n) {
            var i = c[n].split("=", 2);
            2 == i.length && (l[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
          }
        }
        return a = h.extend(!0, {}, t.params, o.opts[e], l), d = "function" === h.type(t.url) ? t.url.call(this, s, a, o) : p(t.url, s, a), r = "function" === h.type(t.thumb) ? t.thumb.call(this, s, a, o) : p(t.thumb, s), "youtube" === e ? d = d.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, i) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
        }) : "vimeo" === e && (d = d.replace("&%23", "#")), !1
      }
    }), f ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === f && (o.opts = h.extend(!0, o.opts, {
      iframe: {
        preload: !1,
        attr: {scrolling: "no"}
      }
    })), h.extend(o, {
      type: f,
      src: d,
      origSrc: o.src,
      contentSource: u,
      contentType: "image" === f ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
    })) : d && (o.type = o.opts.defaultType)
  });
  var o = {
    youtube: {src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1},
    vimeo: {src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1},
    load: function (e) {
      var t, n = this;
      this[e].loaded ? setTimeout(function () {
        n.done(e)
      }) : this[e].loading || (this[e].loading = !0, (t = document.createElement("script")).type = "text/javascript", t.src = this[e].src, "youtube" === e ? window.onYouTubeIframeAPIReady = function () {
        n[e].loaded = !0, n.done(e)
      } : t.onload = function () {
        n[e].loaded = !0, n.done(e)
      }, document.body.appendChild(t))
    },
    done: function (e) {
      var t, n;
      "youtube" === e && delete window.onYouTubeIframeAPIReady, (t = h.fancybox.getInstance()) && (n = t.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
        events: {
          onStateChange: function (e) {
            0 == e.data && t.next()
          }
        }
      }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function () {
        t.next()
      }))
    }
  };
  h(document).on({
    "afterShow.fb": function (e, t, n) {
      1 < t.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
    }
  })
}(jQuery), function (g, c, m) {
  "use strict";

  function u(e) {
    var t = [];
    for (var n in e = (e = e.originalEvent || e || g.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? t.push({
      x: e[n].pageX,
      y: e[n].pageY
    }) : e[n].clientX && t.push({x: e[n].clientX, y: e[n].clientY});
    return t
  }

  function v(e, t, n) {
    return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
  }

  function l(e) {
    if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || m.isFunction(e.get(0).onclick) || e.data("selectable")) return 1;
    for (var t = 0, n = e[0].attributes, i = n.length; t < i; t++) if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return 1
  }

  function d(e) {
    for (var t, n, i, o, r, s = !1; t = e.get(0), n = g.getComputedStyle(t)["overflow-y"], i = g.getComputedStyle(t)["overflow-x"], o = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight, r = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth, !(s = o || r) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body");) ;
    return s
  }

  function n(e) {
    var t = this;
    t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", m.proxy(t, "ontouchstart"))
  }

  var b = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || function (e) {
      return g.setTimeout(e, 1e3 / 60)
    },
    y = g.cancelAnimationFrame || g.webkitCancelAnimationFrame || g.mozCancelAnimationFrame || g.oCancelAnimationFrame || function (e) {
      g.clearTimeout(e)
    };
  n.prototype.destroy = function () {
    var e = this;
    e.$container.off(".fb.touch"), m(c).off(".fb.touch"), e.requestId && (y(e.requestId), e.requestId = null), e.tapped && (clearTimeout(e.tapped), e.tapped = null)
  }, n.prototype.ontouchstart = function (e) {
    var t = this, n = m(e.target), i = t.instance, o = i.current, r = o.$slide, s = o.$content,
      a = "touchstart" == e.type;
    if (a && t.$container.off("mousedown.fb.touch"), (!e.originalEvent || 2 != e.originalEvent.button) && r.length && n.length && !l(n) && !l(n.parent()) && (n.is("img") || !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
      if (!o || i.isAnimating || o.$slide.hasClass("fancybox-animated")) return e.stopPropagation(), void e.preventDefault();
      t.realPoints = t.startPoints = u(e), t.startPoints.length && (o.touch && e.stopPropagation(), t.startEvent = e, t.canTap = !0, t.$target = n, t.$content = s, t.opts = o.opts.touch, t.isPanning = !1, t.isSwiping = !1, t.isZooming = !1, t.isScrolling = !1, t.canPan = i.canPan(), t.startTime = (new Date).getTime(), t.distanceX = t.distanceY = t.distance = 0, t.canvasWidth = Math.round(r[0].clientWidth), t.canvasHeight = Math.round(r[0].clientHeight), t.contentLastPos = null, t.contentStartPos = m.fancybox.getTranslate(t.$content) || {
        top: 0,
        left: 0
      }, t.sliderStartPos = m.fancybox.getTranslate(r), t.stagePos = m.fancybox.getTranslate(i.$refs.stage), t.sliderStartPos.top -= t.stagePos.top, t.sliderStartPos.left -= t.stagePos.left, t.contentStartPos.top -= t.stagePos.top, t.contentStartPos.left -= t.stagePos.left, m(c).off(".fb.touch").on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", m.proxy(t, "ontouchend")).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", m.proxy(t, "ontouchmove")), m.fancybox.isMobile && c.addEventListener("scroll", t.onscroll, !0), ((t.opts || t.canPan) && (n.is(t.$stage) || t.$stage.find(n).length) || (n.is(".fancybox-image") && e.preventDefault(), m.fancybox.isMobile && n.parents(".fancybox-caption").length)) && (t.isScrollable = d(n) || d(n.parent()), m.fancybox.isMobile && t.isScrollable || e.preventDefault(), 1 !== t.startPoints.length && !o.hasError || (t.canPan ? (m.fancybox.stop(t.$content), t.isPanning = !0) : t.isSwiping = !0, t.$container.addClass("fancybox-is-grabbing")), 2 === t.startPoints.length && "image" === o.type && (o.isLoaded || o.$ghost) && (t.canTap = !1, t.isSwiping = !1, t.isPanning = !1, t.isZooming = !0, m.fancybox.stop(t.$content), t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - m(g).scrollLeft(), t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - m(g).scrollTop(), t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width, t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height, t.startDistanceBetweenFingers = v(t.startPoints[0], t.startPoints[1]))))
    }
  }, n.prototype.onscroll = function (e) {
    this.isScrolling = !0, c.removeEventListener("scroll", this.onscroll, !0)
  }, n.prototype.ontouchmove = function (e) {
    var t = this;
    void 0 === e.originalEvent.buttons || 0 !== e.originalEvent.buttons ? t.isScrolling ? t.canTap = !1 : (t.newPoints = u(e), (t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = v(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = v(t.newPoints[0], t.startPoints[0], "y"), t.distance = v(t.newPoints[0], t.startPoints[0]), 0 < t.distance && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))) : t.ontouchend(e)
  }, n.prototype.onSwipe = function (e) {
    var t, o = this, r = o.instance, n = o.isSwiping, i = o.sliderStartPos.left || 0;
    if (!0 !== n) "x" == n && (0 < o.distanceX && (o.instance.group.length < 2 || 0 === o.instance.current.index && !o.instance.current.opts.loop) ? i += Math.pow(o.distanceX, .8) : o.distanceX < 0 && (o.instance.group.length < 2 || o.instance.current.index === o.instance.group.length - 1 && !o.instance.current.opts.loop) ? i -= Math.pow(-o.distanceX, .8) : i += o.distanceX), o.sliderLastPos = {
      top: "x" == n ? 0 : o.sliderStartPos.top + o.distanceY,
      left: i
    }, o.requestId && (y(o.requestId), o.requestId = null), o.requestId = b(function () {
      o.sliderLastPos && (m.each(o.instance.slides, function (e, t) {
        var n = t.pos - o.instance.currPos;
        m.fancybox.setTranslate(t.$slide, {
          top: o.sliderLastPos.top,
          left: o.sliderLastPos.left + n * o.canvasWidth + n * t.opts.gutter
        })
      }), o.$container.addClass("fancybox-is-sliding"))
    }); else if (10 < Math.abs(o.distance)) {
      if (o.canTap = !1, r.group.length < 2 && o.opts.vertical ? o.isSwiping = "y" : r.isDragging || !1 === o.opts.vertical || "auto" === o.opts.vertical && 800 < m(g).width() ? o.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI), o.isSwiping = 45 < t && t < 135 ? "y" : "x"), "y" === o.isSwiping && m.fancybox.isMobile && o.isScrollable) return void (o.isScrolling = !0);
      r.isDragging = o.isSwiping, o.startPoints = o.newPoints, m.each(r.slides, function (e, t) {
        var n, i;
        m.fancybox.stop(t.$slide), n = m.fancybox.getTranslate(t.$slide), i = m.fancybox.getTranslate(r.$refs.stage), t.$slide.css({
          transform: "",
          opacity: "",
          "transition-duration": ""
        }).removeClass("fancybox-animated").removeClass(function (e, t) {
          return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
        }), t.pos === r.current.pos && (o.sliderStartPos.top = n.top - i.top, o.sliderStartPos.left = n.left - i.left), m.fancybox.setTranslate(t.$slide, {
          top: n.top - i.top,
          left: n.left - i.left
        })
      }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
    }
  }, n.prototype.onPan = function () {
    var e = this;
    v(e.newPoints[0], e.realPoints[0]) < (m.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && y(e.requestId), e.requestId = b(function () {
      m.fancybox.setTranslate(e.$content, e.contentLastPos)
    }))
  }, n.prototype.limitMovement = function () {
    var e = this, t = e.canvasWidth, n = e.canvasHeight, i = e.distanceX, o = e.distanceY, r = e.contentStartPos,
      s = r.left, a = r.top, c = r.width, l = r.height, u = t < c ? s + i : s, d = a + o,
      f = Math.max(0, .5 * t - .5 * c), h = Math.max(0, .5 * n - .5 * l), p = Math.min(t - c, .5 * t - .5 * c),
      g = Math.min(n - l, .5 * n - .5 * l);
    return 0 < i && f < u && (u = f - 1 + Math.pow(-f + s + i, .8) || 0), i < 0 && u < p && (u = p + 1 - Math.pow(p - s - i, .8) || 0), 0 < o && h < d && (d = h - 1 + Math.pow(-h + a + o, .8) || 0), o < 0 && d < g && (d = g + 1 - Math.pow(g - a - o, .8) || 0), {
      top: d,
      left: u
    }
  }, n.prototype.limitPosition = function (e, t, n, i) {
    var o = this.canvasWidth, r = this.canvasHeight;
    return e = o < n ? (e = 0 < e ? 0 : e) < o - n ? o - n : e : Math.max(0, o / 2 - n / 2), {
      top: t = r < i ? (t = 0 < t ? 0 : t) < r - i ? r - i : t : Math.max(0, r / 2 - i / 2),
      left: e
    }
  }, n.prototype.onZoom = function () {
    var e = this, t = e.contentStartPos, n = t.width, i = t.height, o = t.left, r = t.top,
      s = v(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers, a = Math.floor(n * s),
      c = Math.floor(i * s), l = (n - a) * e.percentageOfImageAtPinchPointX,
      u = (i - c) * e.percentageOfImageAtPinchPointY, d = (e.newPoints[0].x + e.newPoints[1].x) / 2 - m(g).scrollLeft(),
      f = (e.newPoints[0].y + e.newPoints[1].y) / 2 - m(g).scrollTop(), h = d - e.centerPointStartX,
      p = {top: r + (u + (f - e.centerPointStartY)), left: o + (l + h), scaleX: s, scaleY: s};
    e.canTap = !1, e.newWidth = a, e.newHeight = c, e.contentLastPos = p, e.requestId && y(e.requestId), e.requestId = b(function () {
      m.fancybox.setTranslate(e.$content, e.contentLastPos)
    })
  }, n.prototype.ontouchend = function (e) {
    var t = this, n = t.isSwiping, i = t.isPanning, o = t.isZooming, r = t.isScrolling;
    if (t.endPoints = u(e), t.dMs = Math.max((new Date).getTime() - t.startTime, 1), t.$container.removeClass("fancybox-is-grabbing"), m(c).off(".fb.touch"), c.removeEventListener("scroll", t.onscroll, !0), t.requestId && (y(t.requestId), t.requestId = null), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.isScrolling = !1, t.instance.isDragging = !1, t.canTap) return t.onTap(e);
    t.speed = 100, t.velocityX = t.distanceX / t.dMs * .5, t.velocityY = t.distanceY / t.dMs * .5, i ? t.endPanning() : o ? t.endZooming() : t.endSwiping(n, r)
  }, n.prototype.endSwiping = function (e, t) {
    var n = this, i = !1, o = n.instance.group.length, r = Math.abs(n.distanceX),
      s = "x" == e && 1 < o && (130 < n.dMs && 10 < r || 50 < r);
    n.sliderLastPos = null, "y" == e && !t && 50 < Math.abs(n.distanceY) ? (m.fancybox.animate(n.instance.current.$slide, {
      top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
      opacity: 0
    }, 200), i = n.instance.close(!0, 250)) : s && 0 < n.distanceX ? i = n.instance.previous(300) : s && n.distanceX < 0 && (i = n.instance.next(300)), !1 !== i || "x" != e && "y" != e || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
  }, n.prototype.endPanning = function () {
    var e, t, n, i = this;
    i.contentLastPos && (t = !1 === i.opts.momentum || 350 < i.dMs ? (e = i.contentLastPos.left, i.contentLastPos.top) : (e = i.contentLastPos.left + 500 * i.velocityX, i.contentLastPos.top + 500 * i.velocityY), (n = i.limitPosition(e, t, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, n.height = i.contentStartPos.height, m.fancybox.animate(i.$content, n, 366))
  }, n.prototype.endZooming = function () {
    var e, t, n, i, o = this, r = o.instance.current, s = o.newWidth, a = o.newHeight;
    o.contentLastPos && (e = o.contentLastPos.left, i = {
      top: t = o.contentLastPos.top,
      left: e,
      width: s,
      height: a,
      scaleX: 1,
      scaleY: 1
    }, m.fancybox.setTranslate(o.$content, i), s < o.canvasWidth && a < o.canvasHeight ? o.instance.scaleToFit(150) : s > r.width || a > r.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (n = o.limitPosition(e, t, s, a), m.fancybox.animate(o.$content, n, 150)))
  }, n.prototype.onTap = function (n) {
    function e(e) {
      var t = s.opts[e];
      if (m.isFunction(t) && (t = t.apply(r, [s, n])), t) switch (t) {
        case"close":
          r.close(i.startEvent);
          break;
        case"toggleControls":
          r.toggleControls();
          break;
        case"next":
          r.next();
          break;
        case"nextOrClose":
          1 < r.group.length ? r.next() : r.close(i.startEvent);
          break;
        case"zoom":
          "image" == s.type && (s.isLoaded || s.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, l) : r.group.length < 2 && r.close(i.startEvent))
      }
    }

    var t, i = this, o = m(n.target), r = i.instance, s = r.current, a = n && u(n) || i.startPoints,
      c = a[0] ? a[0].x - m(g).scrollLeft() - i.stagePos.left : 0,
      l = a[0] ? a[0].y - m(g).scrollTop() - i.stagePos.top : 0;
    if ((!n.originalEvent || 2 != n.originalEvent.button) && (o.is("img") || !(c > o[0].clientWidth + o.offset().left))) {
      if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside"; else if (o.is(".fancybox-slide")) t = "Slide"; else {
        if (!r.current.$content || !r.current.$content.find(o).addBack().filter(o).length) return;
        t = "Content"
      }
      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(c - i.tapX) || 50 < Math.abs(l - i.tapY)) return this;
        e("dblclick" + t)
      } else i.tapX = c, i.tapY = l, s.opts["dblclick" + t] && s.opts["dblclick" + t] !== s.opts["click" + t] ? i.tapped = setTimeout(function () {
        i.tapped = null, r.isAnimating || e("click" + t)
      }, 500) : e("click" + t);
      return this
    }
  }, m(c).on("onActivate.fb", function (e, t) {
    t && !t.Guestures && (t.Guestures = new n(t))
  }).on("beforeClose.fb", function (e, t) {
    t && t.Guestures && t.Guestures.destroy()
  })
}(window, document, jQuery), function (s, a) {
  "use strict";
  a.extend(!0, a.fancybox.defaults, {
    btnTpl: {slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},
    slideShow: {autoStart: !1, speed: 3e3, progress: !0}
  });

  function n(e) {
    this.instance = e, this.init()
  }

  a.extend(n.prototype, {
    timer: null, isActive: !1, $button: null, init: function () {
      var e = this, t = e.instance, n = t.group[t.currIndex].opts.slideShow;
      e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        e.toggle()
      }), t.group.length < 2 || !n ? e.$button.hide() : n.progress && (e.$progress = a('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner))
    }, set: function (e) {
      var t = this, n = t.instance, i = n.current;
      i && (!0 === e || i.opts.loop || n.currIndex < n.group.length - 1) ? t.isActive && "video" !== i.contentType && (t.$progress && a.fancybox.animate(t.$progress.show(), {scaleX: 1}, i.opts.slideShow.speed), t.timer = setTimeout(function () {
        n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
      }, i.opts.slideShow.speed)) : (t.stop(), n.idleSecondsCounter = 0, n.showControls())
    }, clear: function () {
      clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
    }, start: function () {
      var e = this, t = e.instance.current;
      t && (e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.isActive = !0, t.isComplete && e.set(!0), e.instance.trigger("onSlideShowChange", !0))
    }, stop: function () {
      var e = this, t = e.instance.current;
      e.clear(), e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1, e.instance.trigger("onSlideShowChange", !1), e.$progress && e.$progress.removeAttr("style").hide()
    }, toggle: function () {
      this.isActive ? this.stop() : this.start()
    }
  }), a(s).on({
    "onInit.fb": function (e, t) {
      t && !t.SlideShow && (t.SlideShow = new n(t))
    }, "beforeShow.fb": function (e, t, n, i) {
      var o = t && t.SlideShow;
      i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
    }, "afterShow.fb": function (e, t, n) {
      var i = t && t.SlideShow;
      i && i.isActive && i.set()
    }, "afterKeydown.fb": function (e, t, n, i, o) {
      var r = t && t.SlideShow;
      !r || !n.opts.slideShow || 80 !== o && 32 !== o || a(s.activeElement).is("button,a,input") || (i.preventDefault(), r.toggle())
    }, "beforeClose.fb onDeactivate.fb": function (e, t) {
      var n = t && t.SlideShow;
      n && n.stop()
    }
  }), a(s).on("visibilitychange", function () {
    var e = a.fancybox.getInstance(), t = e && e.SlideShow;
    t && t.isActive && (s.hidden ? t.clear() : t.set())
  })
}(document, jQuery), function (r, n) {
  "use strict";
  var i, o = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], t = {}, n = 0; n < e.length; n++) {
      var i = e[n];
      if (i && i[1] in r) {
        for (var o = 0; o < i.length; o++) t[e[0][o]] = i[o];
        return t
      }
    }
    return !1
  }();
  o && (i = {
    request: function (e) {
      (e = e || r.documentElement)[o.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
    }, exit: function () {
      r[o.exitFullscreen]()
    }, toggle: function (e) {
      e = e || r.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
    }, isFullscreen: function () {
      return Boolean(r[o.fullscreenElement])
    }, enabled: function () {
      return Boolean(r[o.fullscreenEnabled])
    }
  }, n.extend(!0, n.fancybox.defaults, {
    btnTpl: {fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},
    fullScreen: {autoStart: !1}
  }), n(r).on(o.fullscreenchange, function () {
    var e = i.isFullscreen(), t = n.fancybox.getInstance();
    t && (t.current && "image" === t.current.type && t.isAnimating && (t.isAnimating = !1, t.update(!0, !0, 0), t.isComplete || t.complete()), t.trigger("onFullscreenChange", e), t.$refs.container.toggleClass("fancybox-is-fullscreen", e), t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
  })), n(r).on({
    "onInit.fb": function (e, t) {
      o ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
        e.stopPropagation(), e.preventDefault(), i.toggle()
      }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(), t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
    }, "afterKeydown.fb": function (e, t, n, i, o) {
      t && t.FullScreen && 70 === o && (i.preventDefault(), t.FullScreen.toggle())
    }, "beforeClose.fb": function (e, t) {
      t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
    }
  })
}(document, jQuery), function (e, r) {
  "use strict";
  var s = "fancybox-thumbs", a = s + "-active";
  r.fancybox.defaults = r.extend(!0, {
    btnTpl: {thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},
    thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"}
  }, r.fancybox.defaults);

  function i(e) {
    this.init(e)
  }

  r.extend(i.prototype, {
    $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (e) {
      var t = this, n = e.group, i = 0;
      t.instance = e, t.opts = n[e.currIndex].opts.thumbs, (e.Thumbs = t).$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
      for (var o = 0, r = n.length; o < r && (n[o].thumb && i++, !(1 < i)); o++) ;
      1 < i && t.opts ? (t.$button.removeAttr("style").on("click", function () {
        t.toggle()
      }), t.isActive = !0) : t.$button.hide()
    }, create: function () {
      var n, e = this, t = e.instance, i = e.opts.parentEl, o = [];
      e.$grid || (e.$grid = r('<div class="' + s + " " + s + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(i).addBack().filter(i)), e.$grid.on("click", "a", function () {
        t.jumpTo(r(this).attr("data-index"))
      })), e.$list || (e.$list = r('<div class="' + s + '__list">').appendTo(e.$grid)), r.each(t.group, function (e, t) {
        (n = t.thumb) || "image" !== t.type || (n = t.src), o.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
      }), e.$list[0].innerHTML = o.join(""), "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0))
    }, focus: function (e) {
      var t, n, i = this, o = i.$list, r = i.$grid;
      i.instance.current && (n = (t = o.children().removeClass(a).filter('[data-index="' + i.instance.current.index + '"]').addClass(a)).position(), "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - t.outerHeight()) ? o.stop().animate({scrollTop: o.scrollTop() + n.top}, e) : "x" === i.opts.axis && (n.left < r.scrollLeft() || n.left > r.scrollLeft() + (r.width() - t.outerWidth())) && o.parent().stop().animate({scrollLeft: n.left}, e))
    }, update: function () {
      var e = this;
      e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"), e.instance.update()
    }, hide: function () {
      this.isVisible = !1, this.update()
    }, show: function () {
      this.isVisible = !0, this.update()
    }, toggle: function () {
      this.isVisible = !this.isVisible, this.update()
    }
  }), r(e).on({
    "onInit.fb": function (e, t) {
      var n;
      t && !t.Thumbs && (n = new i(t)).isActive && !0 === n.opts.autoStart && n.show()
    }, "beforeShow.fb": function (e, t, n, i) {
      var o = t && t.Thumbs;
      o && o.isVisible && o.focus(i ? 0 : 250)
    }, "afterKeydown.fb": function (e, t, n, i, o) {
      var r = t && t.Thumbs;
      r && r.isActive && 71 === o && (i.preventDefault(), r.toggle())
    }, "beforeClose.fb": function (e, t) {
      var n = t && t.Thumbs;
      n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
    }
  })
}(document, jQuery), function (e, r) {
  "use strict";
  r.extend(!0, r.fancybox.defaults, {
    btnTpl: {share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},
    share: {
      url: function (e, t) {
        return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
    }
  }), r(e).on("click", "[data-fancybox-share]", function () {
    var e, t, n, i = r.fancybox.getInstance(), o = i.current || null;
    o && ("function" === r.type(o.opts.share.url) && (e = o.opts.share.url.apply(o, [i, o])), t = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (n = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    }, String(e).replace(/[&<>"'`=\/]/g, function (e) {
      return n[e]
    }))).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), r.fancybox.open({
      src: i.translate(i, t),
      type: "html",
      opts: {
        touch: !1, animationEffect: !1, afterLoad: function (e, t) {
          i.$refs.container.one("beforeClose.fb", function () {
            e.close(null, 0)
          }), t.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1
          })
        }, mobile: {autoFocus: !1}
      }
    }))
  })
}(document, jQuery), function (r, s, o) {
  "use strict";

  function a() {
    var e = r.location.hash.substr(1), t = e.split("-"),
      n = 1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || 1;
    return {hash: e, index: n < 1 ? 1 : n, gallery: t.join("-")}
  }

  function t(e) {
    "" !== e.gallery && o("[data-fancybox='" + o.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
  }

  function c(e) {
    var t, n;
    return !!e && "" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n
  }

  o.escapeSelector || (o.escapeSelector = function (e) {
    return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    })
  }), o(function () {
    !1 !== o.fancybox.defaults.hash && (o(s).on({
      "onInit.fb": function (e, t) {
        var n, i;
        !1 !== t.group[t.currIndex].opts.hash && (n = a(), (i = c(t)) && n.gallery && i == n.gallery && (t.currIndex = n.index - 1))
      }, "beforeShow.fb": function (e, t, n, i) {
        var o;
        n && !1 !== n.opts.hash && (o = c(t)) && (t.currentHash = o + (1 < t.group.length ? "-" + (n.index + 1) : ""), r.location.hash !== "#" + t.currentHash && (i && !t.origHash && (t.origHash = r.location.hash), t.hashTimer && clearTimeout(t.hashTimer), t.hashTimer = setTimeout(function () {
          "replaceState" in r.history ? (r.history[i ? "pushState" : "replaceState"]({}, s.title, r.location.pathname + r.location.search + "#" + t.currentHash), i && (t.hasCreatedHistory = !0)) : r.location.hash = t.currentHash, t.hashTimer = null
        }, 300)))
      }, "beforeClose.fb": function (e, t, n) {
        n && !1 !== n.opts.hash && (clearTimeout(t.hashTimer), t.currentHash && t.hasCreatedHistory ? r.history.back() : t.currentHash && ("replaceState" in r.history ? r.history.replaceState({}, s.title, r.location.pathname + r.location.search + (t.origHash || "")) : r.location.hash = t.origHash), t.currentHash = null)
      }
    }), o(r).on("hashchange.fb", function () {
      var e = a(), i = null;
      o.each(o(".fancybox-container").get().reverse(), function (e, t) {
        var n = o(t).data("FancyBox");
        if (n && n.currentHash) return i = n, !1
      }), i ? i.currentHash === e.gallery + "-" + e.index || 1 === e.index && i.currentHash == e.gallery || (i.currentHash = null, i.close()) : "" !== e.gallery && t(e)
    }), setTimeout(function () {
      o.fancybox.getInstance() || t(a())
    }, 50))
  })
}(window, document, jQuery), function (e, t) {
  "use strict";
  var o = (new Date).getTime();
  t(e).on({
    "onInit.fb": function (e, i, t) {
      i.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var t = i.current, n = (new Date).getTime();
        i.group.length < 2 || !1 === t.opts.wheel || "auto" === t.opts.wheel && "image" !== t.type || (e.preventDefault(), e.stopPropagation(), t.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, n - o < 250 || (o = n, i[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
      })
    }
  })
}(document, jQuery), $(document).ready(function () {
  $(".b-popup").fancybox({}), $(".b-popup_type_iframe").fancybox({
    toolbar: !1,
    smallBtn: !0,
    type: "iframe",
    preventCaptionOverlap: !1,
    iframe: {preload: !1}
  })
}), $(document).ready(function () {
  $(".b-typography a[href]").filter(function () {
    return /(jpg|jpeg|gif|png)$/.test($(this).attr("href"))
  }).fancybox({})
}), function () {
  var e, n = window.jQuery, i = window;
  n.fn.autogrow = function (u) {
    if (null == u && (u = {}), null == u.horizontal && (u.horizontal = !0), null == u.vertical && (u.vertical = !0), null == u.debugx && (u.debugx = -1e4), null == u.debugy && (u.debugy = -1e4), null == u.debugcolor && (u.debugcolor = "yellow"), null == u.flickering && (u.flickering = !0), null == u.postGrowCallback && (u.postGrowCallback = function () {
    }), null == u.verticalScrollbarWidth && (u.verticalScrollbarWidth = e()), !1 !== u.horizontal || !1 !== u.vertical) return this.filter("textarea").each(function () {
      var o, r, e, s, a, c, t, l;
      if (!(o = n(this)).data("autogrow-enabled")) return o.data("autogrow-enabled"), a = o.height(), c = o.width(), s = +o.css("lineHeight") || 0, o.hasVerticalScrollBar = function () {
        return o[0].clientHeight < o[0].scrollHeight
      }, r = n('<div class="autogrow-shadow"></div>').css({
        position: "absolute",
        display: "inline-block",
        "background-color": u.debugcolor,
        top: u.debugy,
        left: u.debugx,
        "max-width": o.css("max-width"),
        padding: o.css("padding"),
        fontSize: o.css("fontSize"),
        fontFamily: o.css("fontFamily"),
        fontWeight: o.css("fontWeight"),
        lineHeight: o.css("lineHeight"),
        resize: "none",
        "word-wrap": "break-word"
      }).appendTo(document.body), !1 === u.horizontal ? r.css({width: o.width()}) : (e = o.css("font-size"), r.css("padding-right", "+=" + e), r.normalPaddingRight = r.css("padding-right")), l = this, t = function (e) {
        var t, n,
          i = l.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n /g, "<br/>&nbsp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function (e) {
            return Array(e.length - 1).join("&nbsp;") + " "
          });
        return /(\n|\r)/.test(l.value) && (i += "<br />", !1 === u.flickering && (i += "<br />")), r.html(i), !0 === u.vertical && (t = Math.max(r.height() + s, a), o.height(t)), !0 === u.horizontal && (r.css("padding-right", r.normalPaddingRight), !1 === u.vertical && o.hasVerticalScrollBar() && r.css("padding-right", "+=" + u.verticalScrollbarWidth + "px"), n = Math.max(r.outerWidth(), c), o.width(n)), u.postGrowCallback(o)
      }, o.change(t).keyup(t).keydown(t), n(i).resize(t), t()
    })
  }, e = function () {
    var e, t, n, i;
    return (e = document.createElement("p")).style.width = "100%", e.style.height = "200px", (t = document.createElement("div")).style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t), n = e.offsetWidth, t.style.overflow = "scroll", n === (i = e.offsetWidth) && (i = t.clientWidth), document.body.removeChild(t), n - i
  }
}.call(this), $(".b-autogrow").autogrow({vertical: !0, horizontal: !1, flickering: !1}), $(function () {
  $(".b-easyscroll").each(function () {
  }), $(".b-easyscroll").not(".b-popup").click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var e = $(this.hash);
      if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({scrollTop: e.offset().top}, 1e3), !1
    }
  })
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (p) {
  var i = /\+/g;

  function g(e) {
    return v.raw ? e : encodeURIComponent(e)
  }

  function m(e, t) {
    var n = v.raw ? e : function (e) {
      0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
      try {
        return e = decodeURIComponent(e.replace(i, " ")), v.json ? JSON.parse(e) : e
      } catch (e) {
      }
    }(e);
    return p.isFunction(t) ? t(n) : n
  }

  var v = p.cookie = function (e, t, n) {
    var i, o;
    if (1 < arguments.length && !p.isFunction(t)) return "number" == typeof (n = p.extend({}, v.defaults, n)).expires && (i = n.expires, (o = n.expires = new Date).setMilliseconds(o.getMilliseconds() + 864e5 * i)), document.cookie = [g(e), "=", (r = t, g(v.json ? JSON.stringify(r) : String(r))), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("");
    for (var r, s, a = e ? void 0 : {}, c = document.cookie ? document.cookie.split("; ") : [], l = 0, u = c.length; l < u; l++) {
      var d = c[l].split("="), f = (s = d.shift(), v.raw ? s : decodeURIComponent(s)), h = d.join("=");
      if (e === f) {
        a = m(h, t);
        break
      }
      e || void 0 === (h = m(h)) || (a[f] = h)
    }
    return a
  };
  v.defaults = {}, p.removeCookie = function (e, t) {
    return p.cookie(e, "", p.extend({}, t, {expires: -1})), !p.cookie(e)
  }
}), $(document).ready(function () {
  $(window).resize(function () {
    $(".b-navigation__content").each(function () {
      $itemsWidth = 0, $(this).find(".b-navigation__item").each(function () {
        $itemsWidth += $(this).outerWidth()
      }), $itemsWidth + 30 > $(this).outerWidth() ? $(this).closest(".b-navigation").addClass("b-navigation_collapsed") : $(this).closest(".b-navigation").removeClass("b-navigation_collapsed")
    })
  }), $(window).resize(), $(".b-navigation__toggle").click(function () {
    $(this).closest(".b-navigation").toggleClass("b-navigation_opened")
  }), $(".b-navigation__link").click(function () {
    $(this).closest(".b-navigation").removeClass("b-navigation_opened")
  })
}), $(function () {
  function t(e) {
    $("#comment-form").appendTo(e)
  }

  $(".b-comments__answer-cancel").click(function () {
    $("#comment-form").removeClass("b-comments__respond_answer"), t($(".b-comments")), $(".b-comments__answer-cancel").addClass("b-comments__answer-cancel_hide")
  }), $(".b-comments__list").on("click", ".b-comments__list-item-body-reply-link", function (e) {
    $item = $(this).closest(".b-comments__list-item"), t($($item.find(".b-comments__list-item-body").first())), $(".b-comments__answer-cancel").removeClass("b-comments__answer-cancel_hide"), $("#comment-form").addClass("b-comments__respond_answer"), quote = $item.data("comments-selection"), name = $.trim($item.find(".b-comments__list-item-body-author-name").first().text()), $area = $item.closest(".b-comments").find("#commentform-text"), quote.length && (quote = "написал(а):\n> " + quote + "\n"), before = $area.val(), before.length && (before += "\n\n"), $area.val(before + name + ", " + quote), $area.focus(), $area.change(), e.stopPropagation()
  }), $(".b-comments__list").on("mousedown", ".b-comments__list-item-body-reply-link", function () {
    var e;
    $item = $(this).closest(".b-comments__list-item"), message = $item.find(".b-comments__list-item-body-content").text(), message = message.replace(/\t+/g, "\t"), message = message.replace(/\x20+/g, " "), message = message.replace(/\x20\t/g, " "), message = message.replace(/\t\x20/g, " "), selection = (e = "", window.getSelection ? e = window.getSelection().toString() : document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text), e), selection = selection.split("\n"), $item.data("comments-selection", ""), $.each(selection, function (e, t) {
      t.length && -1 !== message.indexOf(t) && (old = $item.data("comments-selection"), $item.data("comments-selection", old + t + "\n"))
    }), event.stopPropagation()
  })
}), $(document).ready(function () {
  $(".b-answer").on("click", ".b-answer__button", function () {
    var e = $(this).closest(".b-answer__block")[0].id.split("-")[1], t = $(".b-answer__input");
    t.val(e), t.trigger("change")
  }), $(".b-answer__delete").click(function () {
    var e = $(".b-answer__input");
    e.val(""), e.trigger("change")
  })
}), $("document").ready(function () {
  var e, t;
  $(".b-send-login__text-input").change(function () {
    sessionStorage.setItem("comment-text", $(this).val())
  }), $(".b-send-login__answer-input").change(function () {
    sessionStorage.setItem("comment-answer", $(this).val())
  }), $.cookie("send-login") && (e = sessionStorage.getItem("comment-text"), t = sessionStorage.getItem("comment-answer"), sessionStorage.removeItem("comment-text"), sessionStorage.removeItem("comment-answer"), $(".b-send-login__text-input").val(e), $(".b-send-login__answer-input").val(t), $("#w0").submit())
}), $(document).ready(function () {
  $(".b-reduction__more").click(function () {
    $(".b-reduction").removeClass("b-reduction_cut")
  }), $(".b-reduction__unmore").click(function () {
    $(".b-reduction").addClass("b-reduction_cut")
  })
}), $(document).ready(function () {
  $(".b-video-time__time").each(function () {
    var a = $(this), e = a.attr("data-video"),
      c = $.getJSON("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=" + e + "&key=AIzaSyD9qAqBZsvZotmw5Pz5c_IImA1KppJW2ZQ");
    c.complete(function (e) {
      var t, n, i, o, r, s;
      e.responseJSON && (t = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/, o = i = n = 0, r = c.responseJSON.items[0].contentDetails.duration, t.test(r) && ((s = t.exec(r))[1] && (n = s[1]), s[2] && (i = s[2]), s[3] && (o = s[3]), n < 10 && (n = "0" + String(n)), i < 10 && (i = "0" + String(i)), o < 10 && (o = "0" + String(o))), a[0].innerHTML = 0 != n ? n + ":" + i + ":" + o : i + ":" + o)
    })
  })
});
var cookie_name = "accept-cookie", hide_class = "b-accept-cookie_hide";

function ibook_auth_iframe_close() {
  document.getElementById("w0").submit()
}

function ibook_auth_redirect(e) {
  window.open(e, "_blank"), document.getElementById("w0").submit()
}

$(document).ready(function () {
  $.cookie(cookie_name) || $(".b-accept-cookie").removeClass(hide_class)
}), $(".b-accept-cookie__button").click(function () {
  $.cookie(cookie_name, 1, {expires: 365}), $(".b-accept-cookie").addClass(hide_class)
}), $(document).ready(function () {
  $(".b-load-more-comments").click(function (e) {
    if (e.preventDefault(), $(this).hasClass("b-load-more-comments_state_loading")) return !1;
    $(this).addClass("b-load-more-comments_state_loading"), $.ajax({
      type: "POST",
      url: $(this).attr("href"),
      data: {
        "_token": $('[name = "_token"]').val(),
        "postId": $(this).attr('post_id'),
        "pages": $(this).attr('pages'),
        "page": $(this).attr('page')
      },
      context: this,
      success: function (e) {
        var t = $("<div></div>");
        t.html(e), $comments = $("ul.b-comments__list > .b-comments__list-item", t), $next = $(this).hasClass("b-load-more-comments_newer") ? ($("ul.b-comments__list").prepend($comments), $(".b-load-more-comments_newer", t)) : ($comments.appendTo("ul.b-comments__list"), $(".b-load-more-comments_older", t)), 0 < $next.length ? ($(this).attr("href", $next.attr("href")),$(this).attr("page", $next.attr("page"))) : $(this).hide(), $(this).removeClass("b-load-more-comments_state_loading"), lazyInitImages()
      }
    })
  })
}), $(function () {
  $("#text").bind("paste, keyup", function () {
    var e, t, n = $("#text").val();
    $("#ch_cnt_sp").html(n.length), $("#ch_cnt").html(n.replace(/\s/g, "").length), $("#line_cnt").html(0 == (t = n).length ? 0 : t.split("\n").length), $("#wrd_cnt").html(0 == (e = n).length ? 0 : e.split(/\s+/).length), $("#lgn_ln").html(function (e) {
      for (var t = e.split(/\n/), n = 0, i = 0; i < t.length; i++) t[i].length > n && (n = t[i].length);
      return n
    }(n))
  })
}), $(function () {
  $("#send").click(function () {
    var e = document.getElementById("text").value, t = [];
    t["А"] = "A", t["а"] = "a", t["Б"] = "B", t["б"] = "b", t["В"] = "V", t["в"] = "v", t["Г"] = "G", t["г"] = "g", t["Д"] = "D", t["д"] = "d", t["Е"] = "E", t["е"] = "e", t["Ё"] = "Yo", t["ё"] = "yo", t["Ж"] = "Zh", t["ж"] = "zh", t["З"] = "Z", t["з"] = "z", t["И"] = "I", t["и"] = "i", t["Й"] = "J", t["й"] = "j", t["К"] = "K", t["к"] = "k", t["Л"] = "L", t["л"] = "l", t["М"] = "M", t["м"] = "m", t["Н"] = "N", t["н"] = "n", t["О"] = "O", t["о"] = "o", t["П"] = "P", t["п"] = "p", t["Р"] = "R", t["р"] = "r", t["С"] = "S", t["с"] = "s", t["Т"] = "T", t["т"] = "t", t["У"] = "U", t["у"] = "u", t["Ф"] = "F", t["ф"] = "f", t["Х"] = "X", t["х"] = "x", t["Ц"] = "C", t["ц"] = "c", t["Ч"] = "Ch", t["ч"] = "ch", t["Ш"] = "Sh", t["ш"] = "sh", t["Щ"] = "Shh", t["щ"] = "shh", t["Ъ"] = '"', t["ъ"] = '"', t["Ы"] = "Y'", t["ы"] = "y'", t["Ь"] = "'", t["ь"] = "'", t["Э"] = "E'", t["э"] = "e'", t["Ю"] = "Yu", t["ю"] = "yu", t["Я"] = "Ya", t["я"] = "ya", 1 == document.getElementById("checkbox1").checked && (t["Ъ"] = "", t["ъ"] = "", t["Ы"] = "Y", t["ы"] = "y", t["Ь"] = "", t["ь"] = "", t["Э"] = "E", t["э"] = "e");
    var n = document.getElementById("select").value, e = e.split(""), o = "";
    for (i = 0; i < e.length; i++) null != t[e[i]] ? o += t[e[i]] : (0 == n && (o += e[i]), 1 == n && " " == e[i] && (o += "_"), 2 == n && " " == e[i] && (o += "-"), 0 != n && " " != e[i] && (o += e[i]));
    1 == document.getElementById("checkbox2").checked && (o = o.toLowerCase()), document.getElementById("text").value = o
  })
}), $(function () {
  var l, o, i, r, s;
  (l = jQuery).extend(l.fn, {
    validate: function (e) {
      if (this.length) {
        var n = l.data(this[0], "validator");
        return n || (this.attr("novalidate", "novalidate"), n = new l.validator(e, this[0]), l.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
          n.settings.submitHandler && (n.submitButton = e.target), l(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== l(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
        }), this.submit(function (t) {
          function e() {
            var e;
            return !n.settings.submitHandler || (n.submitButton && (e = l("<input type='hidden'/>").attr("name", n.submitButton.name).val(l(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && e.remove(), !1)
          }

          return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, e()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : e() : (n.focusInvalid(), !1)
        })), n)
      }
      e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
    }, valid: function () {
      if (l(this[0]).is("form")) return this.validate().form();
      var e = !0, t = l(this[0].form).validate();
      return this.each(function () {
        e = e && t.element(this)
      }), e
    }, removeAttrs: function (e) {
      var n = {}, i = this;
      return l.each(e.split(/\s/), function (e, t) {
        n[t] = i.attr(t), i.removeAttr(t)
      }), n
    }, rules: function (e, t) {
      var n = this[0];
      if (e) {
        var i = l.data(n.form, "validator").settings, o = i.rules, r = l.validator.staticRules(n);
        switch (e) {
          case"add":
            l.extend(r, l.validator.normalizeRule(t)), delete r.messages, o[n.name] = r, t.messages && (i.messages[n.name] = l.extend(i.messages[n.name], t.messages));
            break;
          case"remove":
            if (!t) return delete o[n.name], r;
            var s = {};
            return l.each(t.split(/\s/), function (e, t) {
              s[t] = r[t], delete r[t]
            }), s
        }
      }
      var a,
        c = l.validator.normalizeRules(l.extend({}, l.validator.classRules(n), l.validator.attributeRules(n), l.validator.dataRules(n), l.validator.staticRules(n)), n);
      return c.required && (a = c.required, delete c.required, c = l.extend({required: a}, c)), c
    }
  }), l.extend(l.expr[":"], {
    blank: function (e) {
      return !l.trim("" + l(e).val())
    }, filled: function (e) {
      return !!l.trim("" + l(e).val())
    }, unchecked: function (e) {
      return !l(e).prop("checked")
    }
  }), l.validator = function (e, t) {
    this.settings = l.extend(!0, {}, l.validator.defaults, e), this.currentForm = t, this.init()
  }, l.validator.format = function (n, e) {
    return 1 === arguments.length ? function () {
      var e = l.makeArray(arguments);
      return e.unshift(n), l.validator.format.apply(this, e)
    } : (2 < arguments.length && e.constructor !== Array && (e = l.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), l.each(e, function (e, t) {
      n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
        return t
      })
    }), n)
  }, l.extend(l.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: !0,
      errorContainer: l([]),
      errorLabelContainer: l([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function (e, t) {
        this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
      },
      onfocusout: function (e, t) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
      },
      onkeyup: function (e, t) {
        9 === t.which && "" === this.elementValue(e) || (e.name in this.submitted || e === this.lastElement) && this.element(e)
      },
      onclick: function (e, t) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
      },
      highlight: function (e, t, n) {
        "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(n) : l(e).addClass(t).removeClass(n)
      },
      unhighlight: function (e, t, n) {
        "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(n) : l(e).removeClass(t).addClass(n)
      }
    },
    setDefaults: function (e) {
      l.extend(l.validator.defaults, e)
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: l.validator.format("Please enter no more than {0} characters."),
      minlength: l.validator.format("Please enter at least {0} characters."),
      rangelength: l.validator.format("Please enter a value between {0} and {1} characters long."),
      range: l.validator.format("Please enter a value between {0} and {1}."),
      max: l.validator.format("Please enter a value less than or equal to {0}."),
      min: l.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function () {
        this.labelContainer = l(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || l(this.currentForm), this.containers = l(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var i = this.groups = {};
        l.each(this.settings.groups, function (n, e) {
          "string" == typeof e && (e = e.split(/\s/)), l.each(e, function (e, t) {
            i[t] = n
          })
        });
        var n = this.settings.rules;

        function e(e) {
          var t = l.data(this[0].form, "validator"), n = "on" + e.type.replace(/^validate/, "");
          t.settings[n] && t.settings[n].call(t, this[0], e)
        }

        l.each(n, function (e, t) {
          n[e] = l.validator.normalizeRule(t)
        }), l(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && l(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
      }, form: function () {
        return this.checkForm(), l.extend(this.submitted, this.errorMap), this.invalid = l.extend({}, this.errorMap), this.valid() || l(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
      }, checkForm: function () {
        this.prepareForm();
        for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
        return this.valid()
      }, element: function (e) {
        e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = l(e);
        var t = !1 !== this.check(e);
        return t ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t
      }, showErrors: function (t) {
        if (t) {
          for (var e in l.extend(this.errorMap, t), this.errorList = [], t) this.errorList.push({
            message: t[e],
            element: this.findByName(e)[0]
          });
          this.successList = l.grep(this.successList, function (e) {
            return !(e.name in t)
          })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
      }, resetForm: function () {
        l.fn.resetForm && l(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
      }, numberOfInvalids: function () {
        return this.objectLength(this.invalid)
      }, objectLength: function (e) {
        var t = 0;
        for (var n in e) t++;
        return t
      }, hideErrors: function () {
        this.addWrapper(this.toHide).hide()
      }, valid: function () {
        return 0 === this.size()
      }, size: function () {
        return this.errorList.length
      }, focusInvalid: function () {
        if (this.settings.focusInvalid) try {
          l(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (e) {
        }
      }, findLastActive: function () {
        var t = this.lastActive;
        return t && 1 === l.grep(this.errorList, function (e) {
          return e.element.name === t.name
        }).length && t
      }, elements: function () {
        var e = this, t = {};
        return l(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
          return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in t || !e.objectLength(l(this).rules())) && (t[this.name] = !0)
        })
      }, clean: function (e) {
        return l(e)[0]
      }, errors: function () {
        var e = this.settings.errorClass.replace(" ", ".");
        return l(this.settings.errorElement + "." + e, this.errorContext)
      }, reset: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = l([]), this.toHide = l([]), this.currentElements = l([])
      }, prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers)
      }, prepareElement: function (e) {
        this.reset(), this.toHide = this.errorsFor(e)
      }, elementValue: function (e) {
        var t = l(e).attr("type"), n = l(e).val();
        return "radio" === t || "checkbox" === t ? l("input[name='" + l(e).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
      }, check: function (e) {
        e = this.validationTargetFor(this.clean(e));
        var t, n = l(e).rules(), i = !1, o = this.elementValue(e);
        for (var r in n) {
          var s = {method: r, parameters: n[r]};
          try {
            if ("dependency-mismatch" === (t = l.validator.methods[r].call(this, o, e, s.parameters))) {
              i = !0;
              continue
            }
            if (i = !1, "pending" === t) return void (this.toHide = this.toHide.not(this.errorsFor(e)));
            if (!t) return this.formatAndAdd(e, s), !1
          } catch (t) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.", t), t
          }
        }
        if (!i) return this.objectLength(n) && this.successList.push(e), !0
      }, customDataMessage: function (e, t) {
        return l(e).data("msg-" + t.toLowerCase()) || e.attributes && l(e).attr("data-msg-" + t.toLowerCase())
      }, customMessage: function (e, t) {
        var n = this.settings.messages[e];
        return n && (n.constructor === String ? n : n[t])
      }, findDefined: function () {
        for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e]
      }, defaultMessage: function (e, t) {
        return this.findDefined(this.customMessage(e.name, t), this.customDataMessage(e, t), !this.settings.ignoreTitle && e.title || void 0, l.validator.messages[t], "<strong>Warning: No message defined for " + e.name + "</strong>")
      }, formatAndAdd: function (e, t) {
        var n = this.defaultMessage(e, t.method), i = /\$?\{(\d+)\}/g;
        "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = l.validator.format(n.replace(i, "{$1}"), t.parameters)), this.errorList.push({
          message: n,
          element: e
        }), this.errorMap[e.name] = n, this.submitted[e.name] = n
      }, addWrapper: function (e) {
        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
      }, defaultShowErrors: function () {
        for (var e, t = 0; this.errorList[t]; t++) {
          var n = this.errorList[t];
          this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
        }
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
        if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
      }, validElements: function () {
        return this.currentElements.not(this.invalidElements())
      }, invalidElements: function () {
        return l(this.errorList).map(function () {
          return this.element
        })
      }, showLabel: function (e, t) {
        var n = this.errorsFor(e);
        n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(t)) : (n = l("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, l(e)) : n.insertAfter(e))), !t && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)), this.toShow = this.toShow.add(n)
      }, errorsFor: function (e) {
        var t = this.idOrName(e);
        return this.errors().filter(function () {
          return l(this).attr("for") === t
        })
      }, idOrName: function (e) {
        return this.groups[e.name] || !this.checkable(e) && e.id || e.name
      }, validationTargetFor: function (e) {
        return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
      }, checkable: function (e) {
        return /radio|checkbox/i.test(e.type)
      }, findByName: function (e) {
        return l(this.currentForm).find("[name='" + e + "']")
      }, getLength: function (e, t) {
        switch (t.nodeName.toLowerCase()) {
          case"select":
            return l("option:selected", t).length;
          case"input":
            if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
        }
        return e.length
      }, depend: function (e, t) {
        return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
      }, dependTypes: {
        boolean: function (e, t) {
          return e
        }, string: function (e, t) {
          return !!l(e, t.form).length
        }, function: function (e, t) {
          return e(t)
        }
      }, optional: function (e) {
        var t = this.elementValue(e);
        return !l.validator.methods.required.call(this, t, e) && "dependency-mismatch"
      }, startRequest: function (e) {
        this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
      }, stopRequest: function (e, t) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (l(this.currentForm).submit(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (l(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
      }, previousValue: function (e) {
        return l.data(e, "previousValue") || l.data(e, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(e, "remote")
        })
      }
    },
    classRuleSettings: {
      required: {required: !0},
      email: {email: !0},
      url: {url: !0},
      date: {date: !0},
      dateISO: {dateISO: !0},
      number: {number: !0},
      digits: {digits: !0},
      creditcard: {creditcard: !0}
    },
    addClassRules: function (e, t) {
      e.constructor === String ? this.classRuleSettings[e] = t : l.extend(this.classRuleSettings, e)
    },
    classRules: function (e) {
      var t = {}, n = l(e).attr("class");
      return n && l.each(n.split(" "), function () {
        this in l.validator.classRuleSettings && l.extend(t, l.validator.classRuleSettings[this])
      }), t
    },
    attributeRules: function (e) {
      var t = {}, n = l(e), i = n[0].getAttribute("type");
      for (var o in l.validator.methods) {
        var r = "required" === o ? ("" === (r = n.get(0).getAttribute(o)) && (r = !0), !!r) : n.attr(o);
        /min|max/.test(o) && (null === i || /number|range|text/.test(i)) && (r = Number(r)), r ? t[o] = r : i === o && "range" !== i && (t[o] = !0)
      }
      return t.maxlength && /-1|2147483647|524288/.test(t.maxlength) && delete t.maxlength, t
    },
    dataRules: function (e) {
      var t, n, i = {}, o = l(e);
      for (t in l.validator.methods) void 0 !== (n = o.data("rule-" + t.toLowerCase())) && (i[t] = n);
      return i
    },
    staticRules: function (e) {
      var t = {}, n = l.data(e.form, "validator");
      return n.settings.rules && (t = l.validator.normalizeRule(n.settings.rules[e.name]) || {}), t
    },
    normalizeRules: function (i, o) {
      return l.each(i, function (e, t) {
        if (!1 !== t) {
          if (t.param || t.depends) {
            var n = !0;
            switch (typeof t.depends) {
              case"string":
                n = !!l(t.depends, o.form).length;
                break;
              case"function":
                n = t.depends.call(o, o)
            }
            n ? i[e] = void 0 === t.param || t.param : delete i[e]
          }
        } else delete i[e]
      }), l.each(i, function (e, t) {
        i[e] = l.isFunction(t) ? t(o) : t
      }), l.each(["minlength", "maxlength"], function () {
        i[this] && (i[this] = Number(i[this]))
      }), l.each(["rangelength", "range"], function () {
        var e;
        i[this] && (l.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]))
      }), l.validator.autoCreateRanges && (i.min && i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), i.minlength && i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
    },
    normalizeRule: function (e) {
      var t;
      return "string" == typeof e && (t = {}, l.each(e.split(/\s/), function () {
        t[this] = !0
      }), e = t), e
    },
    addMethod: function (e, t, n) {
      l.validator.methods[e] = t, l.validator.messages[e] = void 0 !== n ? n : l.validator.messages[e], t.length < 3 && l.validator.addClassRules(e, l.validator.normalizeRule(e))
    },
    methods: {
      required: function (e, t, n) {
        if (!this.depend(n, t)) return "dependency-mismatch";
        if ("select" !== t.nodeName.toLowerCase()) return this.checkable(t) ? 0 < this.getLength(e, t) : 0 < l.trim(e).length;
        var i = l(t).val();
        return i && 0 < i.length
      }, email: function (e, t) {
        return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
      }, url: function (e, t) {
        return "http://" == e.substr(0, 7) && (e = e.substr(7)), "https://" == e.substr(0, 8) && (e = e.substr(8)), this.optional(t) || /^(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
      }, date: function (e, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
      }, dateISO: function (e, t) {
        return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
      }, number: function (e, t) {
        return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
      }, digits: function (e, t) {
        return this.optional(t) || /^\d+$/.test(e)
      }, creditcard: function (e, t) {
        if (this.optional(t)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(e)) return !1;
        for (var n = 0, i = 0, o = !1, r = (e = e.replace(/\D/g, "")).length - 1; 0 <= r; r--) {
          var s = e.charAt(r), i = parseInt(s, 10);
          o && 9 < (i *= 2) && (i -= 9), n += i, o = !o
        }
        return n % 10 == 0
      }, minlength: function (e, t, n) {
        var i = l.isArray(e) ? e.length : this.getLength(l.trim(e), t);
        return this.optional(t) || n <= i
      }, maxlength: function (e, t, n) {
        var i = l.isArray(e) ? e.length : this.getLength(l.trim(e), t);
        return this.optional(t) || i <= n
      }, rangelength: function (e, t, n) {
        var i = l.isArray(e) ? e.length : this.getLength(l.trim(e), t);
        return this.optional(t) || i >= n[0] && i <= n[1]
      }, min: function (e, t, n) {
        return this.optional(t) || n <= e
      }, max: function (e, t, n) {
        return this.optional(t) || e <= n
      }, range: function (e, t, n) {
        return this.optional(t) || e >= n[0] && e <= n[1]
      }, equalTo: function (e, t, n) {
        var i = l(n);
        return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          l(t).valid()
        }), e === i.val()
      }, remote: function (r, s, e) {
        if (this.optional(s)) return "dependency-mismatch";
        var a = this.previousValue(s);
        if (this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), a.originalMessage = this.settings.messages[s.name].remote, this.settings.messages[s.name].remote = a.message, e = "string" == typeof e ? {url: e} : e, a.old === r) return a.valid;
        a.old = r;
        var c = this;
        this.startRequest(s);
        var t = {};
        return t[s.name] = r, l.ajax(l.extend(!0, {
          url: e,
          mode: "abort",
          port: "validate" + s.name,
          dataType: "json",
          data: t,
          success: function (e) {
            c.settings.messages[s.name].remote = a.originalMessage;
            var t, n, i, o = !0 === e || "true" === e;
            o ? (t = c.formSubmitted, c.prepareElement(s), c.formSubmitted = t, c.successList.push(s), delete c.invalid[s.name], c.showErrors()) : (n = {}, i = e || c.defaultMessage(s, "remote"), n[s.name] = a.message = l.isFunction(i) ? i(r) : i, c.invalid[s.name] = !0, c.showErrors(n)), a.valid = o, c.stopRequest(s, o)
          }
        }, e)), "pending"
      }
    }
  }), l.format = l.validator.format, i = jQuery, s = {}, i.ajaxPrefilter ? i.ajaxPrefilter(function (e, t, n) {
    var i = e.port;
    "abort" === e.mode && (s[i] && s[i].abort(), s[i] = n)
  }) : (r = i.ajax, i.ajax = function (e) {
    var t = ("mode" in e ? e : i.ajaxSettings).mode, n = ("port" in e ? e : i.ajaxSettings).port;
    return "abort" === t ? (s[n] && s[n].abort(), s[n] = r.apply(this, arguments), s[n]) : r.apply(this, arguments)
  }), (o = jQuery).extend(o.fn, {
    validateDelegate: function (n, e, i) {
      return this.bind(e, function (e) {
        var t = o(e.target);
        if (t.is(n)) return i.apply(t, arguments)
      })
    }
  }), $(document).ready(function () {
    var t, n;
    self.cleanUpString = (t = {
      "-": "-",
      _: "_",
      "&lt;": "",
      "&gt;": "",
      "&#039;": "",
      "&amp;": "",
      "&quot;": "",
      "ГЂ": "A",
      "ГЃ": "A",
      "Г‚": "A",
      "Гѓ": "A",
      "Г„": "Ae",
      "&Auml;": "A",
      "Г…": "A",
      "ДЂ": "A",
      "Д„": "A",
      "Д‚": "A",
      "Г†": "Ae",
      "Г‡": "C",
      "Д†": "C",
      "ДЊ": "C",
      "Д€": "C",
      "ДЉ": "C",
      "ДЋ": "D",
      "Дђ": "D",
      "Гђ": "D",
      "Г€": "E",
      "Г‰": "E",
      "ГЉ": "E",
      "Г‹": "E",
      "Д’": "E",
      "Д": "E",
      "Дљ": "E",
      "Д”": "E",
      "Д–": "E",
      "Дњ": "G",
      "Дћ": "G",
      "Д ": "G",
      "Дў": "G",
      "Д¤": "H",
      "Д¦": "H",
      "ГЊ": "I",
      "ГЌ": "I",
      "ГЋ": "I",
      "ГЏ": "I",
      "ДЄ": "I",
      "ДЁ": "I",
      "Д¬": "I",
      "Д®": "I",
      "Д°": "I",
      "ДІ": "IJ",
      "Дґ": "J",
      "Д¶": "K",
      "ЕЃ": "K",
      "ДЅ": "K",
      "Д№": "K",
      "Д»": "K",
      "Дї": "K",
      "Г‘": "N",
      "Еѓ": "N",
      "Е‡": "N",
      "Е…": "N",
      "ЕЉ": "N",
      "Г’": "O",
      "Г“": "O",
      "Г”": "O",
      "Г•": "O",
      "Г–": "Oe",
      "&Ouml;": "Oe",
      "Г": "O",
      "ЕЊ": "O",
      "Еђ": "O",
      "ЕЋ": "O",
      "Е’": "OE",
      "Е”": "R",
      "Е": "R",
      "Е–": "R",
      "Ељ": "S",
      "Е ": "S",
      "Ећ": "S",
      "Ењ": "S",
      "И": "S",
      "Е¤": "T",
      "Еў": "T",
      "Е¦": "T",
      "Иљ": "T",
      "Г™": "U",
      "Гљ": "U",
      "Г›": "U",
      "Гњ": "Ue",
      "ЕЄ": "U",
      "&Uuml;": "Ue",
      "Е®": "U",
      "Е°": "U",
      "Е¬": "U",
      "ЕЁ": "U",
      "ЕІ": "U",
      "Еґ": "W",
      "Гќ": "Y",
      "Е¶": "Y",
      "Её": "Y",
      "Е№": "Z",
      "ЕЅ": "Z",
      "Е»": "Z",
      "Гћ": "T",
      "Г ": "a",
      "ГЎ": "a",
      "Гў": "a",
      "ГЈ": "a",
      "Г¤": "ae",
      "&auml;": "ae",
      "ГҐ": "a",
      "ДЃ": "a",
      "Д…": "a",
      "Дѓ": "a",
      "Г¦": "ae",
      "Г§": "c",
      "Д‡": "c",
      "ДЌ": "c",
      "Д‰": "c",
      "Д‹": "c",
      "ДЏ": "d",
      "Д‘": "d",
      "Г°": "d",
      "ГЁ": "e",
      "Г©": "e",
      "ГЄ": "e",
      "Г«": "e",
      "Д“": "e",
      "Д™": "e",
      "Д›": "e",
      "Д•": "e",
      "Д—": "e",
      "Ж’": "f",
      "Дќ": "g",
      "Дџ": "g",
      "ДЎ": "g",
      "ДЈ": "g",
      "ДҐ": "h",
      "Д§": "h",
      "Г¬": "i",
      "Г­": "i",
      "Г®": "i",
      "ГЇ": "i",
      "Д«": "i",
      "Д©": "i",
      "Д­": "i",
      "ДЇ": "i",
      "Д±": "i",
      "Ді": "ij",
      "Дµ": "j",
      "Д·": "k",
      "Дё": "k",
      "Е‚": "l",
      "Дѕ": "l",
      "Дє": "l",
      "Дј": "l",
      "ЕЂ": "l",
      "Г±": "n",
      "Е„": "n",
      "Е€": "n",
      "Е†": "n",
      "Е‰": "n",
      "Е‹": "n",
      "ГІ": "o",
      "Гі": "o",
      "Гґ": "o",
      "Гµ": "o",
      "Г¶": "oe",
      "&ouml;": "oe",
      "Гё": "o",
      "ЕЌ": "o",
      "Е‘": "o",
      "ЕЏ": "o",
      "Е“": "oe",
      "Е•": "r",
      "Е™": "r",
      "Е—": "r",
      "ЕЎ": "s",
      "Г№": "u",
      "Гє": "u",
      "Г»": "u",
      "Гј": "ue",
      "Е«": "u",
      "&uuml;": "ue",
      "ЕЇ": "u",
      "Е±": "u",
      "Е­": "u",
      "Е©": "u",
      "Еі": "u",
      "Еµ": "w",
      "ГЅ": "y",
      "Гї": "y",
      "Е·": "y",
      "Еѕ": "z",
      "Еј": "z",
      "Еє": "z",
      "Гѕ": "t",
      "Гџ": "ss",
      "Еї": "ss",
      "С‹Р№": "iy",
      "Рђ": "A",
      "Р‘": "B",
      "Р’": "V",
      "Р“": "G",
      "Р”": "D",
      "Р•": "E",
      "РЃ": "YO",
      "Р–": "ZH",
      "Р—": "Z",
      "Р": "I",
      "Р™": "Y",
      "Рљ": "K",
      "Р›": "L",
      "Рњ": "M",
      "Рќ": "N",
      "Рћ": "O",
      "Рџ": "P",
      "Р ": "R",
      "РЎ": "S",
      "Рў": "T",
      "РЈ": "U",
      "Р¤": "F",
      "РҐ": "H",
      "Р¦": "C",
      "Р§": "CH",
      "РЁ": "SH",
      "Р©": "SCH",
      "РЄ": "",
      "Р«": "Y",
      "Р¬": "",
      "Р­": "E",
      "Р®": "YU",
      "РЇ": "YA",
      "Р°": "a",
      "Р±": "b",
      "РІ": "v",
      "Рі": "g",
      "Рґ": "d",
      "Рµ": "e",
      "С‘": "yo",
      "Р¶": "zh",
      "Р·": "z",
      "Рё": "i",
      "Р№": "y",
      "Рє": "k",
      "Р»": "l",
      "Рј": "m",
      "РЅ": "n",
      "Рѕ": "o",
      "Рї": "p",
      "СЂ": "r",
      "СЃ": "s",
      "С‚": "t",
      "Сѓ": "u",
      "С„": "f",
      "С…": "h",
      "С†": "c",
      "С‡": "ch",
      "С€": "sh",
      "С‰": "sch",
      "СЉ": "",
      "С‹": "y",
      "СЊ": "",
      "СЌ": "e",
      "СЋ": "yu",
      "СЏ": "ya",
      "{": "{",
      "}": "}"
    }, n = new RegExp("(" + Object.keys(t).join("|") + ")", "g"), function (e) {
      return e = (e = e.replace(n, function (e) {
        return t[e]
      })).replace(/[^A-Za-z0-9_{}-]/g, "_"), (e = self.trim(e)).replace(/ +/g, "")
    }), self.trim = function (e, t) {
      var n, i = 0, o = 0;
      for (e += "", n = t ? (t += "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1") : " \n\r\t\f\v            ​\u2028\u2029　", i = e.length, o = 0; o < i; o++) if (-1 === n.indexOf(e.charAt(o))) {
        e = e.substring(o);
        break
      }
      for (o = (i = e.length) - 1; 0 <= o; o--) if (-1 === n.indexOf(e.charAt(o))) {
        e = e.substring(0, o + 1);
        break
      }
      return -1 === n.indexOf(e.charAt(0)) ? e : ""
    }, $(".btn_clear").on("click", function () {
      $(".tabs_content input").val("").removeClass("red").removeClass("green"), $(".result_box .result").val("")
    }), $(".btn_generate").on("click", function () {
      $("form").valid() && ($("#loadImg").show(), function () {
        var e = $(".utm_url").val(), t = e, n = "", i = "?";
        -1 < e.indexOf("#") && (t = e.split("#")[0], n = "#" + e.split("#")[1]), -1 < e.indexOf("?") && (i = "&"), e = t;
        var o = cleanUpString($(".utm_source").val()), r = cleanUpString($(".utm_medium").val()),
          s = cleanUpString($(".utm_campaign").val()), a = cleanUpString($(".utm_term").val()),
          c = cleanUpString($(".utm_content").val()), l = "", u = "", d = "", f = "", h = "";
        "" == !c && (u = "&utm_content=" + c), "" == !o && (d = "utm_source=" + o), "" == !r && (f = "&utm_medium=" + r), "" == !s && (h = "&utm_campaign=" + s), "" == !a && (l = "&utm_term=" + a);
        var p = i + d + f + l + u + h;
        $(".result_box .result").val(e + p + "" + n), $(".result_box .result").select();
        try {
          var g = document.execCommand("copy") ? "successful" : "unsuccessful";
          console.log("Cutting text command was " + g)
        } catch (e) {
          console.log("Oops, unable to cut")
        }
      }(), $("#qrgenrez").html(""))
    }), $("#instrument-utm").validate({
      rules: {
        utm_url: {required: !0, url: !0, minlength: 5},
        utm_source: {required: !1},
        utm_medium: {required: !1},
        utm_campaign: {required: !1},
        utm_term: {required: !1},
        utm_content: {required: !1}
      },
      messages: {utm_url: " ", utm_source: " ", utm_medium: " ", utm_campaign: " ", utm_term: " ", utm_content: " "},
      errorPlacement: function (e, t) {
      },
      submitHandler: function () {
      },
      success: function (e) {
      },
      highlight: function (e, t) {
        $(e).addClass("b-form__input_error").removeClass("b-form__input_sucess")
      },
      unhighlight: function (e, t, n) {
        $(e).addClass("b-form__input_sucess").removeClass("b-form__input_error")
      }
    })
  })
}), $(document).ready(function () {
  $("#w0").submit(function () {
    return $(this).find('button[type="submit"]').attr("disabled", !0), !0
  })
}), $(function () {
  $(window).scroll(function () {
    $(".b-top-bar").each(function () {
      $(window).scrollTop() > $(window).height() ? $(this).removeClass("b-top-bar_hidden") : $(this).addClass("b-top-bar_hidden")
    })
  }), $(".b-top-bar__close").click(function () {
    $(this).closest(".b-top-bar").addClass("b-top-bar_disabled")
  })
});

$(document).ready(function () {
  $('#sendComment').on("click", function (e) {
    e.preventDefault(); // avoids calling preview.php
    if ($(this).hasClass('b-load-more-comments_state_loading')) {
      return;
    }
    $.ajax({
      type: "POST",
      cache: false,
      url: $(this).attr('href'), // preview.php
      data: {
        "_token": $('[name = "_token"]').val(),
        "comment_text": $('#commentform-text').val(),
        "comment_name": $('#commentform-name').val(),
        "comment_email": $('#commentform-email').val(),
        "comment_parent_id": $('#commentform-id_parent').val(),
        "post_id": $('#post_id').val()
      }, // all form fields
      beforeSend: function(){
        $('#sendComment').addClass("b-load-more-comments_state_loading");
      }, //beforeSend
      success: function (data) {
        $('#sendComment').removeClass("b-load-more-comments_state_loading");
        // on success, post (preview) returned data in fancybox
        $.fancybox.open(data);
      }, // success
      error: function(msg) {
        $('#sendComment').removeClass("b-load-more-comments_state_loading");
      } //error
    }); // ajax
  }); // on
  $('.b-icon_type_paper-plane').on("click", function (e) {
    e.preventDefault(); // avoids calling preview.php
    var agree = Number($('[name = "pagree"]').prop('checked'));
    var data = {
      "_token": $('[name = "_token"]').val(),
      "name": $('[name = "pname"]').val(),
      "email": $('[name = "pemail"]').val(),
      "agree": agree ? agree : null
    };
    var url = $(this).closest('form').attr('action');
    sendRequestAjax(data, url);
  }); // on
  $('.b-subscribe__form-submit').on("click", function (e) {
    e.preventDefault(); // avoids calling preview.php
    var agree = Number($('[name = "fagree"]').prop('checked'));
    var data = {
      "_token": $('[name = "_token"]').val(),
      "name": $('[name = "fname"]').val(),
      "email": $('[name = "femail"]').val(),
      "agree": agree ? agree : null
    };
    var url = $(this).closest('form').attr('action');
    sendRequestAjax(data, url, true);
  }); // on
  function sendRequestAjax(data, url, closeForm=false) {
    $.ajax({
      type: "POST",
      cache: false,
      url: url, // preview.php
      data: data, // all form fields
      beforeSend: function(){
        $('#loader-identity-container').show();
      }, //beforeSend
      success: function (data) {
        $('#loader-identity-container').hide();
        if (closeForm) {
          if(!$(data).hasClass('error-message-block')) {
            $('.fancybox-close-small').click();
          }
        }
        // on success, post (preview) returned data in fancybox
        $.fancybox.open(data);
      }, // success
    }); // ajax
  }
  String.prototype.trim = function() {  return this.replace(/^\s+|\s+$/g, '');  };
  var searchInput = $('#search-form-5a81b431b9a62');
  searchInput.val(searchInput.val().trim());
}); // ready
