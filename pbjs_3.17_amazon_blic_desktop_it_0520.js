//load the apstag.js library
! function (a9, a, p, s, t, A, g) {
    if (a[a9]) return;

    function q(c, r) {
        a[a9]._Q.push([c, r])
    }
    a[a9] = {
        init: function () {
            q("i", arguments)
        },
        fetchBids: function () {
            q("f", arguments)
        },
        setDisplayBids: function () {},
        targetingKeys: function () {
            return []
        },
        _Q: []
    };
    A = p.createElement(s);
    A.async = !0;
    A.src = t;
    g = p.getElementsByTagName(s)[0];
    g.parentNode.insertBefore(A, g)
}("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

//initialize the apstag.js library on the page to allow bidding
apstag.init({
    pubID: '0d79d97f-1108-428c-8926-8b56782eacb6',
    adServer: 'googletag'
});

apstag.fetchBids({
    slots: [{
            slotID: '970x90',
            slotName: '/161634325/Blic_Desktop/Blic_Desktop_IT/970x90',
            sizes: [
                [728, 90]
            ]
        }, {
            slotID: '300x250_P1',
            slotName: '/161634325/Blic_Desktop/Blic_Desktop_IT/300x250_P1',
            sizes: [
                [300, 250]
            ]
        }, {
            slotID: '300x250_P2',
            slotName: '/161634325/Blic_Desktop/Blic_Desktop_IT/300x250_P2',
            sizes: [
                [300, 250],
                [300, 600]
            ]
        },
        {
            slotID: '300x250_P3',
            slotName: '/161634325/Blic_Desktop/Blic_Desktop_IT/300x250_P3',
            sizes: [
                [300, 250],
                [300, 600]
            ]
        },
        {
            slotID: '300x250_P4',
            slotName: '/161634325/Blic_Desktop/Blic_Desktop_IT/300x250_P4',
            sizes: [
                [300, 250],
                [300, 600]
            ]
        },
        {
            slotID: '300x250_P5',
            slotName: '/161634325/Blic_Desktop/Blic_Desktop_IT/300x250_P5',
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    ],
    timeout: 2e3
}, function (bids) {
    // set apstag targeting on googletag, then trigger the first DFP request in googletag's disableInitialLoad integration
    googletag.cmd.push(function () {
        apstag.setDisplayBids();
        googletag.pubads().refresh();
    });
});


/* prebid.js v3.17.0
Updated : 2020-04-23 */
! function (u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function (e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length;) c.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        d = {
            291: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function (e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function (e) {
        throw console.error(e), e
    }, f(f.s = 739)
}({
    0: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function () {
            return R
        }), n.d(t, "bind", function () {
            return k
        }), t.getUniqueIdentifierStr = N, t.generateUUID = function e(t) {
            return t ? (t ^ M() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function (e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function (e, t, n) {
            if (n) return e + t + "=" + encodeURIComponent(n) + "&";
            return e
        }, n.d(t, "parseQueryStringParameters", function () {
            return q
        }), t.transformAdServerTargetingObj = function (t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? pe(t).map(function (e) {
                return "".concat(e, "=").concat(encodeURIComponent(ge(t, e)))
            }).join("&") : ""
        }, t.getAdUnitSizes = function (e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, t.parseSizesInput = function (e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) oe(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === h(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(G(e));
                    else
                        for (var a = 0; a < o; a++) t.push(G(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = G, t.parseGPTSingleSizeArrayToRtbSize = function (e) {
            if (F(e)) return {
                w: e[0],
                h: e[1]
            }
        }, t.getWindowTop = W, t.getWindowSelf = L, t.getWindowLocation = z, t.logMessage = V, t.logInfo = H, t.logWarn = J, t.logError = K, t.hasConsoleLogger = function () {
            return _
        }, t.debugTurnedOn = $, t.createInvisibleIframe = function () {
            var e = document.createElement("iframe");
            return e.id = N(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = function (e) {
            return Ie(z().search)[e] || ""
        }, t.isA = Q, t.isFn = X, t.isStr = Z, t.isArray = ee, t.isNumber = te, t.isPlainObject = ne, t.isBoolean = function (e) {
            return Q(e, j)
        }, t.isEmpty = re, t.isEmptyStr = function (e) {
            return Z(e) && (!e || 0 === e.length)
        }, t._each = ie, t.contains = function (e, t) {
            if (re(e)) return !1;
            if (X(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, t._map = function (n, r) {
            if (re(n)) return [];
            if (X(n.map)) return n.map(r);
            var i = [];
            return ie(n, function (e, t) {
                i.push(r(e, t, n))
            }), i
        }, t.hasOwn = oe, t.insertElement = ae, t.triggerPixel = ce, t.callBurl = function (e) {
            var t = e.source,
                n = e.burl;
            t === S.S2S.SRC && n && R.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function (e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = N(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", R.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = ue, t.createTrackPixelHtml = function (e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = se, t.getValueString = de, t.uniques = fe, t.flatten = le, t.getBidRequest = function (n, e) {
            return n ? (e.some(function (e) {
                var t = s()(e.bids, function (t) {
                    return ["bidId", "adId", "bid_id"].some(function (e) {
                        return t[e] === n
                    })
                });
                return t && (r = t), t
            }), r) : void 0;
            var r
        }, t.getKeys = pe, t.getValue = ge, t.getKeyByValue = function (e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function () {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function (e) {
                return e.bids.map(function (e) {
                    return e.bidder
                }).reduce(le, [])
            }).reduce(le).filter(fe)
        }, t.isGptPubadsDefined = ye, n.d(t, "getHighestCpm", function () {
            return be
        }), n.d(t, "getOldestHighestCpmBid", function () {
            return ve
        }), n.d(t, "getLatestHighestCpmBid", function () {
            return he
        }), t.shuffle = function (e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function (e, t) {
            return f()(e, t && t.adUnitCode)
        }, t.deepClone = Se, t.inIframe = function () {
            try {
                return R.getWindowSelf() !== R.getWindowTop()
            } catch (e) {
                return !0
            }
        }, t.isSafariBrowser = function () {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function (e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.timestamp = function () {
            return (new Date).getTime()
        }, t.hasDeviceAccess = function () {
            return !1 !== r.b.getConfig("deviceAccess")
        }, t.checkCookieSupport = Ae, t.delayExecution = function (e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function () {
                ++n === t && e.apply(this, arguments)
            }
        }, t.groupBy = function (e, n) {
            return e.reduce(function (e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }, {})
        }, t.getDefinedParams = function (n, e) {
            return e.filter(function (e) {
                return n[e]
            }).reduce(function (e, t) {
                return v(e, b({}, t, n[t]))
            }, {})
        }, t.isValidMediaTypes = function (e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every(function (e) {
                    return f()(t, e)
                })) return !1;
            if (e.video && e.video.context) return f()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function (e, t, n) {
            return s()(e, function (e) {
                return 0 < e.bids.filter(function (e) {
                    return e.bidder === t && e.adUnitCode === n
                }).length
            }) || {
                start: null,
                auctionId: null
            }
        }, t.getUserConfiguredParams = function (e, t, n) {
            return e.filter(function (e) {
                return e.code === t
            }).map(function (e) {
                return e.bids
            }).reduce(le, []).filter(function (e) {
                return e.bidder === n
            }).map(function (e) {
                return e.params || {}
            })
        }, t.getOrigin = function () {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, t.getDNT = function () {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, t.isAdUnitCodeMatchingSlot = function (t) {
            return function (e) {
                return Ee(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = Oe, t.getGptSlotInfoForAdUnitCode = function (e) {
            var t;
            ye() && (t = s()(window.googletag.pubads().getSlots(), Oe(e)));
            if (t) return {
                gptSlot: t.getAdUnitPath(),
                divId: t.getSlotElementId()
            };
            return {}
        }, t.unsupportedBidderMessage = function (e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.isInteger = Te, t.convertCamelToUnderscore = function (e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
                return "_" + t.toLowerCase()
            }).replace(/^_/, "")
        }, t.cleanObj = function (n) {
            return Object.keys(n).reduce(function (e, t) {
                return void 0 !== n[t] && (e[t] = n[t]), e
            }, {})
        }, t.pick = function (a, c) {
            return "object" === h(a) ? c.reduce(function (e, t, n) {
                if ("function" == typeof t) return e;
                var r = t,
                    i = t.match(/^(.+?)\sas\s(.+?)$/i);
                i && (t = i[1], r = i[2]);
                var o = a[t];
                return "function" == typeof c[n + 1] && (o = c[n + 1](o, e)), void 0 !== o && (e[r] = o), e
            }, {}) : {}
        }, t.transformBidderParamKeywords = function (e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return ie(e, function (e, t) {
                if (ee(e)) {
                    var n = [];
                    ie(e, function (e) {
                        !(e = de(r + "." + t, e)) && "" !== e || n.push(e)
                    }), e = n
                } else {
                    if (!Z(e = de(r + "." + t, e))) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            }), i
        }, t.convertTypes = function (r, i) {
            return Object.keys(r).forEach(function (e) {
                var t, n;
                i[e] && (X(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), isNaN(i[e]) && delete i.key)
            }), i
        }, t.isArrayOfNums = function (e, t) {
            return ee(e) && (!t || e.length === t) && e.every(function (e) {
                return Te(e)
            })
        }, t.fill = function (e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = ne(e) ? Se(e) : e;
                n.push(i)
            }
            return n
        }, t.chunk = function (e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t,
                    o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }, t.getMinValueFromArray = function (e) {
            return Math.min.apply(Math, y(e))
        }, t.getMaxValueFromArray = function (e) {
            return Math.max.apply(Math, y(e))
        }, t.compareOn = function (n) {
            return function (e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        }, t.parseQS = Ie, t.formatQS = je, t.parseUrl = function (e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : R.parseQS(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.buildUrl = function (e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(R.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }, t.deepEqual = we, t.mergeDeep = function e(t) {
            for (var n = arguments.length, r = new Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            if (!r.length) return t;
            var o = r.shift();
            if (ne(t) && ne(o))
                for (var a in o) ne(o[a]) ? (t[a] || v(t, b({}, a, {})), e(t[a], o[a])) : ee(o[a]) && t[a] ? ee(t[a]) && (t[a] = t[a].concat(o[a])) : v(t, b({}, a, o[a]));
            return e.apply(void 0, [t].concat(r))
        };
        var r = n(3),
            i = n(121),
            o = n.n(i),
            a = n(122),
            c = n.n(a),
            u = n(12),
            s = n.n(u),
            d = n(11),
            f = n.n(d),
            l = n(136);
        n.d(t, "deepAccess", function () {
            return l.a
        });
        var p = n(137);

        function g(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function y(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function b(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function v() {
            return (v = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        n.d(t, "deepSetValue", function () {
            return p.a
        });
        var m, S = n(5),
            A = "Array",
            E = "String",
            O = "Function",
            T = "Number",
            I = "Object",
            j = "Boolean",
            w = Object.prototype.toString,
            C = Boolean(window.console),
            _ = Boolean(C && window.console.log),
            U = Boolean(C && window.console.info),
            B = Boolean(C && window.console.warn),
            P = Boolean(C && window.console.error),
            R = {
                checkCookieSupport: Ae,
                createTrackPixelIframeHtml: se,
                getWindowSelf: L,
                getWindowTop: W,
                getWindowLocation: z,
                insertUserSyncIframe: ue,
                insertElement: ae,
                isFn: X,
                triggerPixel: ce,
                logError: K,
                logWarn: J,
                logMessage: V,
                logInfo: H,
                parseQS: Ie,
                formatQS: je,
                deepEqual: we
            },
            x = {},
            k = function (e, t) {
                return t
            }.bind(null, 1, x)() === x ? Function.prototype.bind : function (e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            },
            D = (m = 0, function () {
                return ++m
            });

        function N() {
            return D() + Math.random().toString(16).substr(2)
        }

        function M() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }
        var q = R.formatQS;

        function G(e) {
            if (F(e)) return e[0] + "x" + e[1]
        }

        function F(e) {
            return ee(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
        }

        function W() {
            return window.top
        }

        function L() {
            return window.self
        }

        function z() {
            return window.location
        }

        function V() {
            $() && _ && console.log.apply(console, Y(arguments, "MESSAGE:"))
        }

        function H() {
            $() && U && console.info.apply(console, Y(arguments, "INFO:"))
        }

        function J() {
            $() && B && console.warn.apply(console, Y(arguments, "WARNING:"))
        }

        function K() {
            $() && P && console.error.apply(console, Y(arguments, "ERROR:"))
        }

        function Y(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function $() {
            return !!r.b.getConfig("debug")
        }

        function Q(e, t) {
            return w.call(e) === "[object " + t + "]"
        }

        function X(e) {
            return Q(e, O)
        }

        function Z(e) {
            return Q(e, E)
        }

        function ee(e) {
            return Q(e, A)
        }

        function te(e) {
            return Q(e, T)
        }

        function ne(e) {
            return Q(e, I)
        }

        function re(e) {
            if (!e) return !0;
            if (ee(e) || Z(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function ie(e, t) {
            if (!re(e)) {
                if (X(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }

        function oe(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        }

        function ae(e, t, n, r) {
            var i;
            t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o)
                }
            } catch (e) {}
        }

        function ce(e, t) {
            var n = new Image;
            t && R.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function ue(e, t) {
            var n = R.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && R.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), R.insertElement(i, document, "html", !0)
        }

        function se(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(N(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function de(e, t, n) {
            return null == t ? n : Z(t) ? t : te(t) ? t.toString() : void R.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function fe(e, t, n) {
            return n.indexOf(e) === t
        }

        function le(e, t) {
            return e.concat(t)
        }

        function pe(e) {
            return Object.keys(e)
        }

        function ge(e, t) {
            return e[t]
        }

        function ye() {
            if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots)) return !0
        }
        var be = me("timeToRespond", function (e, t) {
                return t < e
            }),
            ve = me("responseTimestamp", function (e, t) {
                return t < e
            }),
            he = me("responseTimestamp", function (e, t) {
                return e < t
            });

        function me(n, r) {
            return function (e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function Se(e) {
            return o()(e)
        }

        function Ae() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var Ee = function (e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Oe(t) {
            return function (e) {
                return Ee(e, t)
            }
        }

        function Te(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Ie(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function (e, t) {
                var n = g(t.split("="), 2),
                    r = n[0],
                    i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e
            }, {}) : {}
        }

        function je(e) {
            return Object.keys(e).map(function (t) {
                return Array.isArray(e[t]) ? e[t].map(function (e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
        }

        function we(e, t) {
            return c()(e, t)
        }
    },
    1: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "storage", function () {
            return T
        }), t.registerBidder = function (t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = w(e);
                c.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach(function (e) {
                c.default.aliasRegistry[e] = t.code, r(O({}, t, {
                    code: e
                }))
            })
        }, t.newBidder = w, n.d(t, "registerSyncInner", function () {
            return C
        }), t.preloadBidderMappingFile = _, t.getIabSubCategory = function (t, e) {
            var n = c.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(),
                    i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                    o = T.getDataFromLocalStorage(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }, t.isValid = U;
        var r = n(83),
            c = n(7),
            u = n(3),
            b = n(22),
            s = n(33),
            o = n(26),
            a = n(34),
            i = n(5),
            v = n.n(i),
            d = n(8),
            h = n.n(d),
            f = n(11),
            l = n.n(f),
            p = n(4),
            m = n(0),
            g = n(2),
            y = n(13),
            S = n(9);

        function A(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function E(e) {
            return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function O() {
            return (O = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var T = Object(S.a)("bidderFactory"),
            I = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            j = 1;

        function w(p) {
            return O(new r.a(p.code), {
                getSpec: function () {
                    return Object.freeze(p)
                },
                registerSyncs: g,
                callBids: function (o, a, e, n, c, r) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            s = [],
                            t = o.bids.filter(y);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach(function (e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            });
                            var i = p.buildRequests(t, o);
                            if (i && 0 !== i.length) {
                                Array.isArray(i) || (i = [i]);
                                var f = Object(m.delayExecution)(r(l), i.length);
                                i.forEach(function (i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("".concat(i.url).concat(function (e) {
                                                if (e) return "?".concat("object" === E(e) ? Object(m.parseQueryStringParameters)(e) : e);
                                                return ""
                                            }(i.data)), {
                                                success: r(e),
                                                error: t
                                            }, void 0, O({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: r(e),
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), O({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            Object(m.logWarn)("Skipping invalid request from ".concat(p.code, ". Request type ").concat(i.type, " must be GET or POST")), f()
                                    }

                                    function e(e, t) {
                                        c(p.code);
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        var n;
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, s.push(e);
                                        try {
                                            n = p.interpretResponse(e, i)
                                        } catch (e) {
                                            return Object(m.logError)("Bidder ".concat(p.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                                        }

                                        function r(e) {
                                            var t, n, r = d[e.requestId];
                                            if (r) {
                                                e.originalCpm = e.cpm, e.originalCurrency = e.currency;
                                                var i = O(Object(b.a)(v.a.STATUS.GOOD, r), e);
                                                t = r.adUnitCode, n = i, u[t] = !0, U(t, n, [o]) && a(t, n)
                                            } else Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                        }
                                        n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n)
                                    }

                                    function t(e) {
                                        c(p.code), Object(m.logError)("Server call for ".concat(p.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                                    }
                                })
                            } else l()
                        } else l()
                    }

                    function l() {
                        e(), h.a.emit(v.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent, o.uspConsent)
                    }
                }
            });

            function g(e, t, n) {
                C(p, e, t, n)
            }

            function y(e) {
                return !!p.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }
        var C = Object(y.b)("async", function (t, e, n, r) {
            var i = u.b.getConfig("userSync.aliasSyncEnabled");
            if (t.getUserSyncs && (i || !c.default.aliasRegistry[t.code])) {
                var o = u.b.getConfig("userSync.filterSettings"),
                    a = t.getUserSyncs({
                        iframeEnabled: !(!o || !o.iframe && !o.all),
                        pixelEnabled: !(!o || !o.image && !o.all)
                    }, e, n, r);
                a && (Array.isArray(a) || (a = [a]), a.forEach(function (e) {
                    s.a.registerSync(e.type, t.code, e.url)
                }))
            }
        }, "registerSyncs");

        function _(e, t) {
            if (!u.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function (e) {
                return Object(m.deepAccess)(e, "mediaTypes.video.context") === g.a
            }).map(function (e) {
                return e.bids.map(function (e) {
                    return e.bidder
                })
            }).reduce(m.flatten, []).filter(m.uniques).forEach(function (n) {
                var e = c.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : j,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = T.getDataFromLocalStorage(i);
                    (!o || Object(m.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                        success: function (e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(m.timestamp)(),
                                    mapping: e.mapping
                                };
                                T.setDataInLocalStorage(i, JSON.stringify(t))
                            } catch (e) {
                                Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                            }
                        },
                        error: function () {
                            Object(m.logError)("Failed to load ".concat(n, " bidder translation file"))
                        }
                    })
                }
            }), e.call(this, t)
        }

        function U(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), I.every(function (e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            }) ? "native" !== t.mediaType || Object(o.f)(t, n) ? "video" !== t.mediaType || Object(a.d)(t, n) ? !("banner" === t.mediaType && ! function (e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), 1;
                var r = Object(m.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(m.parseSizesInput)(i);
                if (1 === o.length) {
                    var a = A(o[0].split("x"), 2),
                        c = a[0],
                        u = a[1];
                    return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1
                }
            }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(y.a)("checkAdUnitSetup").before(_)
    },
    10: function (e, t, n) {
        "use strict";
        t.a = i, t.c = function (e) {
            return !(!e || !e.url)
        }, t.b = function (e, t) {
            e.render(t)
        };
        var f = n(29),
            l = n(0),
            r = n(12),
            p = n.n(r),
            g = "outstream";

        function i(e) {
            var t, n, r, i = this,
                o = e.url,
                a = e.config,
                c = e.id,
                u = e.callback,
                s = e.loaded,
                d = e.adUnitCode;
            this.url = o, this.config = a, this.handlers = {}, this.id = c, this.loaded = s, this.cmd = [], this.push = function (e) {
                "function" == typeof e ? i.loaded ? e.call() : i.cmd.push(e) : l.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = u || function () {
                i.loaded = !0, i.process()
            }, t = d, n = pbjs.adUnits, (r = p()(n, function (e) {
                return e.code === t
            })) && r.renderer && r.renderer.url && r.renderer.render ? l.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)) : Object(f.a)(o, g, this.callback)
        }
        i.install = function (e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, i.prototype.getConfig = function () {
            return this.config
        }, i.prototype.setRender = function (e) {
            this.render = e
        }, i.prototype.setEventHandlers = function (e) {
            this.handlers = e
        }, i.prototype.handleVideoEvent = function (e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), l.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
        }, i.prototype.process = function () {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                l.logError("Error processing Renderer command: ", e)
            }
        }
    },
    100: function (e, t, n) {
        var a = n(20),
            c = n(30),
            u = n(101);
        e.exports = n(25) ? Object.defineProperties : function (e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    101: function (e, t, n) {
        var r = n(102),
            i = n(68);
        e.exports = Object.keys || function (e) {
            return r(e, i)
        }
    },
    102: function (e, t, n) {
        var a = n(31),
            c = n(49),
            u = n(64)(!1),
            s = n(51)("IE_PROTO");
        e.exports = function (e, t) {
            var n, r = c(e),
                i = 0,
                o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    },
    103: function (e, t, n) {
        var r = n(19).document;
        e.exports = r && r.documentElement
    },
    104: function (e, t, n) {
        var r = n(31),
            i = n(46),
            o = n(51)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    105: function (e, t, n) {
        n(106);
        for (var r = n(19), i = n(24), o = n(32), a = n(14)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array
        }
    },
    106: function (e, t, n) {
        "use strict";
        var r = n(41),
            i = n(69),
            o = n(32),
            a = n(49);
        e.exports = n(50)(Array, "Array", function (e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function () {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    },
    107: function (e, t, n) {
        "use strict";
        var r = n(108),
            i = n(77);
        e.exports = n(110)("Set", function (t) {
            return function (e) {
                return t(this, 0 < arguments.length ? e : void 0)
            }
        }, {
            add: function (e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    },
    108: function (e, t, n) {
        "use strict";

        function a(e, t) {
            var n, r = g(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        }
        var c = n(20).f,
            u = n(67),
            s = n(70),
            d = n(27),
            f = n(71),
            l = n(42),
            r = n(50),
            i = n(69),
            o = n(109),
            p = n(25),
            g = n(76).fastKey,
            y = n(77),
            b = p ? "_s" : "size";
        e.exports = {
            getConstructor: function (e, o, n, r) {
                var i = e(function (e, t) {
                    f(e, i, o, "_i"), e._t = o, e._i = u(null), e._f = void 0, e._l = void 0, e[b] = 0, null != t && l(t, n, e[r], e)
                });
                return s(i.prototype, {
                    clear: function () {
                        for (var e = y(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[b] = 0
                    },
                    delete: function (e) {
                        var t = y(this, o),
                            n = a(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[b]--
                        }
                        return !!n
                    },
                    forEach: function (e, t) {
                        y(this, o);
                        for (var n, r = d(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function (e) {
                        return !!a(y(this, o), e)
                    }
                }), p && c(i.prototype, "size", {
                    get: function () {
                        return y(this, o)[b]
                    }
                }), i
            },
            def: function (e, t, n) {
                var r, i, o = a(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = g(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[b]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: a,
            setStrong: function (e, n, t) {
                r(e, n, function (e, t) {
                    this._t = y(e, n), this._k = t, this._l = void 0
                }, function () {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, i(1))
                }, t ? "entries" : "values", !t, !0), o(n)
            }
        }
    },
    109: function (e, t, n) {
        "use strict";
        var r = n(19),
            i = n(17),
            o = n(20),
            a = n(25),
            c = n(14)("species");
        e.exports = function (e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[c] && o.f(t, c, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    },
    11: function (e, t, n) {
        n(94), e.exports = n(17).Array.includes
    },
    110: function (e, t, n) {
        "use strict";
        var f = n(19),
            l = n(16),
            p = n(76),
            g = n(37),
            y = n(24),
            b = n(70),
            v = n(42),
            h = n(71),
            m = n(18),
            S = n(52),
            A = n(20).f,
            E = n(45)(0),
            O = n(25);
        e.exports = function (n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return O && "function" == typeof c && (o || s.forEach && !g(function () {
                (new c).entries().next()
            })) ? (c = e(function (e, t) {
                h(e, c, n, "_c"), e._c = new a, null != t && v(t, i, e[u], e)
            }), E("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && y(c.prototype, r, function (e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n
                })
            }), o || A(c.prototype, "size", {
                get: function () {
                    return this._c.size
                }
            })) : (c = r.getConstructor(e, n, i, u), b(c.prototype, t), p.NEED = !0), S(c, n), d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c
        }
    },
    111: function (e, t, n) {
        var r = n(16);
        r(r.P + r.R, "Set", {
            toJSON: n(112)("Set")
        })
    },
    112: function (e, t, n) {
        var r = n(75),
            i = n(113);
        e.exports = function (e) {
            return function () {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this)
            }
        }
    },
    113: function (e, t, n) {
        var r = n(42);
        e.exports = function (e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n
        }
    },
    114: function (e, t, n) {
        n(115)("Set")
    },
    115: function (e, t, n) {
        "use strict";
        var r = n(16);
        e.exports = function (e) {
            r(r.S, e, {
                of: function () {
                    for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    },
    116: function (e, t, n) {
        n(117)("Set")
    },
    117: function (e, t, n) {
        "use strict";
        var r = n(16),
            u = n(59),
            s = n(27),
            d = n(42);
        e.exports = function (e) {
            r(r.S, e, {
                from: function (e, t, n) {
                    var r, i, o, a, c = t;
                    return u(this), (r = void 0 !== c) && u(c), null == e ? new this : (i = [], r ? (o = 0, a = s(c, n, 2), d(e, !1, function (e) {
                        i.push(a(e, o++))
                    })) : d(e, !1, i.push, i), new this(i))
                }
            })
        }
    },
    118: function (e, t, n) {
        "use strict";
        var g = n(27),
            r = n(16),
            y = n(46),
            b = n(72),
            v = n(73),
            h = n(40),
            m = n(119),
            S = n(74);
        r(r.S + r.F * !n(120)(function (e) {
            Array.from(e)
        }), "Array", {
            from: function (e, t, n) {
                var r, i, o, a, c = y(e),
                    u = "function" == typeof this ? this : Array,
                    s = arguments.length,
                    d = 1 < s ? t : void 0,
                    f = void 0 !== d,
                    l = 0,
                    p = S(c);
                if (f && (d = g(d, 2 < s ? n : void 0, 2)), null == p || u == Array && v(p))
                    for (i = new u(r = h(c.length)); l < r; l++) m(i, l, f ? d(c[l], l) : c[l]);
                else
                    for (a = p.call(c), i = new u; !(o = a.next()).done; l++) m(i, l, f ? b(a, d, [o.value, l], !0) : o.value);
                return i.length = l, i
            }
        })
    },
    119: function (e, t, n) {
        "use strict";
        var r = n(20),
            i = n(44);
        e.exports = function (e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    },
    12: function (e, t, n) {
        n(88), e.exports = n(17).Array.find
    },
    120: function (e, t, n) {
        var o = n(14)("iterator"),
            a = !1;
        try {
            var r = [7][o]();
            r.return = function () {
                a = !0
            }, Array.from(r, function () {
                throw 2
            })
        } catch (e) {}
        e.exports = function (e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = [7],
                    i = r[o]();
                i.next = function () {
                    return {
                        done: n = !0
                    }
                }, r[o] = function () {
                    return i
                }, e(r)
            } catch (e) {}
            return n
        }
    },
    121: function (e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    122: function (e, t, n) {
        var f = n(79),
            l = n(124),
            i = n(125),
            p = n(126),
            g = n(129),
            y = n(135),
            b = Date.prototype.getTime;

        function v(e, t, n) {
            var r = n || {};
            return !(r.strict ? !i(e, t) : e !== t) || (!e || !t || "object" != typeof e && "object" != typeof t ? r.strict ? i(e, t) : e == t : function (e, t, n) {
                var r, i;
                if (typeof e != typeof t) return !1;
                if (h(e) || h(t)) return !1;
                if (e.prototype !== t.prototype) return !1;
                if (l(e) !== l(t)) return !1;
                var o = p(e),
                    a = p(t);
                if (o !== a) return !1;
                if (o || a) return e.source === t.source && g(e) === g(t);
                if (y(e) && y(t)) return b.call(e) === b.call(t);
                var c = m(e),
                    u = m(t);
                if (c !== u) return !1;
                if (c || u) {
                    if (e.length !== t.length) return !1;
                    for (r = 0; r < e.length; r++)
                        if (e[r] !== t[r]) return !1;
                    return !0
                }
                if (typeof e != typeof t) return !1;
                try {
                    var s = f(e),
                        d = f(t)
                } catch (e) {
                    return !1
                }
                if (s.length !== d.length) return !1;
                for (s.sort(), d.sort(), r = s.length - 1; 0 <= r; r--)
                    if (s[r] != d[r]) return !1;
                for (r = s.length - 1; 0 <= r; r--)
                    if (i = s[r], !v(e[i], t[i], n)) return !1;
                return !0
            }(e, t, r))
        }

        function h(e) {
            return null == e
        }

        function m(e) {
            return !(!e || "object" != typeof e || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(0 < e.length && "number" != typeof e[0]))
        }
        e.exports = v
    },
    123: function (e, t, n) {
        "use strict";
        var r;
        if (!Object.keys) {
            var l = Object.prototype.hasOwnProperty,
                p = Object.prototype.toString,
                g = n(80),
                i = Object.prototype.propertyIsEnumerable,
                y = !i.call({
                    toString: null
                }, "toString"),
                b = i.call(function () {}, "prototype"),
                v = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                h = function (e) {
                    var t = e.constructor;
                    return t && t.prototype === e
                },
                o = {
                    $applicationCache: !0,
                    $console: !0,
                    $external: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $innerHeight: !0,
                    $innerWidth: !0,
                    $onmozfullscreenchange: !0,
                    $onmozfullscreenerror: !0,
                    $outerHeight: !0,
                    $outerWidth: !0,
                    $pageXOffset: !0,
                    $pageYOffset: !0,
                    $parent: !0,
                    $scrollLeft: !0,
                    $scrollTop: !0,
                    $scrollX: !0,
                    $scrollY: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                },
                m = function () {
                    if ("undefined" == typeof window) return !1;
                    for (var e in window) try {
                        if (!o["$" + e] && l.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                            h(window[e])
                        } catch (e) {
                            return !0
                        }
                    } catch (e) {
                        return !0
                    }
                    return !1
                }();
            r = function (e) {
                var t = null !== e && "object" == typeof e,
                    n = "[object Function]" === p.call(e),
                    r = g(e),
                    i = t && "[object String]" === p.call(e),
                    o = [];
                if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object");
                var a = b && n;
                if (i && 0 < e.length && !l.call(e, 0))
                    for (var c = 0; c < e.length; ++c) o.push(String(c));
                if (r && 0 < e.length)
                    for (var u = 0; u < e.length; ++u) o.push(String(u));
                else
                    for (var s in e) a && "prototype" === s || !l.call(e, s) || o.push(String(s));
                if (y)
                    for (var d = function (e) {
                            if ("undefined" == typeof window || !m) return h(e);
                            try {
                                return h(e)
                            } catch (e) {
                                return !1
                            }
                        }(e), f = 0; f < v.length; ++f) d && "constructor" === v[f] || !l.call(e, v[f]) || o.push(v[f]);
                return o
            }
        }
        e.exports = r
    },
    124: function (e, t, n) {
        "use strict";

        function r(e) {
            return !(o && e && "object" == typeof e && Symbol.toStringTag in e) && "[object Arguments]" === a.call(e)
        }

        function i(e) {
            return !!r(e) || null !== e && "object" == typeof e && "number" == typeof e.length && 0 <= e.length && "[object Array]" !== a.call(e) && "[object Function]" === a.call(e.callee)
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
            a = Object.prototype.toString,
            c = function () {
                return r(arguments)
            }();
        r.isLegacyArguments = i, e.exports = c ? r : i
    },
    125: function (e, t, n) {
        "use strict";

        function r(e) {
            return e != e
        }
        e.exports = function (e, t) {
            return 0 === e && 0 === t ? 1 / e == 1 / t : e === t || !(!r(e) || !r(t))
        }
    },
    126: function (e, t, n) {
        "use strict";
        var r = n(127),
            i = RegExp.prototype.exec,
            o = Object.getOwnPropertyDescriptor,
            a = Object.prototype.toString,
            c = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        e.exports = function (e) {
            if (!e || "object" != typeof e) return !1;
            if (!c) return "[object RegExp]" === a.call(e);
            var t = o(e, "lastIndex");
            return !(!t || !r(t, "value")) && function (e) {
                try {
                    var t = e.lastIndex;
                    return e.lastIndex = 0, i.call(e), !0
                } catch (e) {
                    return !1
                } finally {
                    e.lastIndex = t
                }
            }(e)
        }
    },
    127: function (e, t, n) {
        "use strict";
        var r = n(53);
        e.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
    },
    128: function (e, t, n) {
        "use strict";
        var u = Array.prototype.slice,
            s = Object.prototype.toString;
        e.exports = function (t) {
            var n = this;
            if ("function" != typeof n || "[object Function]" !== s.call(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
            for (var r, i = u.call(arguments, 1), e = Math.max(0, n.length - i.length), o = [], a = 0; a < e; a++) o.push("$" + a);
            if (r = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this,arguments); }")(function () {
                    if (this instanceof r) {
                        var e = n.apply(this, i.concat(u.call(arguments)));
                        return Object(e) === e ? e : this
                    }
                    return n.apply(t, i.concat(u.call(arguments)))
                }), n.prototype) {
                var c = function () {};
                c.prototype = n.prototype, r.prototype = new c, c.prototype = null
            }
            return r
        }
    },
    129: function (e, t, n) {
        "use strict";
        var r = n(54),
            i = n(130),
            o = n(81),
            a = n(82),
            c = n(134),
            u = i(o);
        r(u, {
            getPolyfill: a,
            implementation: o,
            shim: c
        }), e.exports = u
    },
    13: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return o
        }), n.d(t, "a", function () {
            return a
        }), t.d = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        }, t.c = function (e, n) {
            o("async", function (e) {
                e.forEach(function (e) {
                    return n.apply(void 0, function (e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                    }(t = e) || function (e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(t) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }());
                    var t
                })
            }, e)([])
        }, t.e = function (e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            a(e).before(function (e, t) {
                t.push(n), e(t)
            })
        };
        var r = n(138),
            i = n.n(r);
        var o = i()({
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            a = o.get
    },
    130: function (e, t, n) {
        "use strict";
        var r = n(53),
            i = n(131)("%Function%"),
            o = i.apply,
            a = i.call;
        e.exports = function () {
            return r.apply(a, arguments)
        }, e.exports.apply = function () {
            return r.apply(o, arguments)
        }
    },
    131: function (e, t, n) {
        "use strict";
        var r, c = TypeError,
            u = Object.getOwnPropertyDescriptor;
        if (u) try {
            u({}, "")
        } catch (e) {
            u = null
        }

        function i() {
            throw new c
        }
        var o = u ? function () {
                try {
                    return i
                } catch (e) {
                    try {
                        return u(arguments, "callee").get
                    } catch (e) {
                        return i
                    }
                }
            }() : i,
            a = n(132)(),
            s = Object.getPrototypeOf || function (e) {
                return e.__proto__
            },
            d = r,
            f = r,
            l = r,
            p = r,
            g = "undefined" == typeof Uint8Array ? r : s(Uint8Array),
            y = {
                "%Array%": Array,
                "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer.prototype,
                "%ArrayIteratorPrototype%": a ? s([][Symbol.iterator]()) : r,
                "%ArrayPrototype%": Array.prototype,
                "%ArrayProto_entries%": Array.prototype.entries,
                "%ArrayProto_forEach%": Array.prototype.forEach,
                "%ArrayProto_keys%": Array.prototype.keys,
                "%ArrayProto_values%": Array.prototype.values,
                "%AsyncFromSyncIteratorPrototype%": r,
                "%AsyncFunction%": f,
                "%AsyncFunctionPrototype%": r,
                "%AsyncGenerator%": r,
                "%AsyncGeneratorFunction%": l,
                "%AsyncGeneratorPrototype%": r,
                "%AsyncIteratorPrototype%": p && a && Symbol.asyncIterator ? p[Symbol.asyncIterator]() : r,
                "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                "%Boolean%": Boolean,
                "%BooleanPrototype%": Boolean.prototype,
                "%DataView%": "undefined" == typeof DataView ? r : DataView,
                "%DataViewPrototype%": "undefined" == typeof DataView ? r : DataView.prototype,
                "%Date%": Date,
                "%DatePrototype%": Date.prototype,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%ErrorPrototype%": Error.prototype,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%EvalErrorPrototype%": EvalError.prototype,
                "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? r : Float32Array.prototype,
                "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? r : Float64Array.prototype,
                "%Function%": Function,
                "%FunctionPrototype%": Function.prototype,
                "%Generator%": r,
                "%GeneratorFunction%": d,
                "%GeneratorPrototype%": r,
                "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? r : Int8Array.prototype,
                "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? r : Int8Array.prototype,
                "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? r : Int32Array.prototype,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": a ? s(s([][Symbol.iterator]())) : r,
                "%JSON%": "object" == typeof JSON ? JSON : r,
                "%JSONParse%": "object" == typeof JSON ? JSON.parse : r,
                "%Map%": "undefined" == typeof Map ? r : Map,
                "%MapIteratorPrototype%": "undefined" != typeof Map && a ? s((new Map)[Symbol.iterator]()) : r,
                "%MapPrototype%": "undefined" == typeof Map ? r : Map.prototype,
                "%Math%": Math,
                "%Number%": Number,
                "%NumberPrototype%": Number.prototype,
                "%Object%": Object,
                "%ObjectPrototype%": Object.prototype,
                "%ObjProto_toString%": Object.prototype.toString,
                "%ObjProto_valueOf%": Object.prototype.valueOf,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": "undefined" == typeof Promise ? r : Promise,
                "%PromisePrototype%": "undefined" == typeof Promise ? r : Promise.prototype,
                "%PromiseProto_then%": "undefined" == typeof Promise ? r : Promise.prototype.then,
                "%Promise_all%": "undefined" == typeof Promise ? r : Promise.all,
                "%Promise_reject%": "undefined" == typeof Promise ? r : Promise.reject,
                "%Promise_resolve%": "undefined" == typeof Promise ? r : Promise.resolve,
                "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                "%RangeError%": RangeError,
                "%RangeErrorPrototype%": RangeError.prototype,
                "%ReferenceError%": ReferenceError,
                "%ReferenceErrorPrototype%": ReferenceError.prototype,
                "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                "%RegExp%": RegExp,
                "%RegExpPrototype%": RegExp.prototype,
                "%Set%": "undefined" == typeof Set ? r : Set,
                "%SetIteratorPrototype%": "undefined" != typeof Set && a ? s((new Set)[Symbol.iterator]()) : r,
                "%SetPrototype%": "undefined" == typeof Set ? r : Set.prototype,
                "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer.prototype,
                "%String%": String,
                "%StringIteratorPrototype%": a ? s("" [Symbol.iterator]()) : r,
                "%StringPrototype%": String.prototype,
                "%Symbol%": a ? Symbol : r,
                "%SymbolPrototype%": a ? Symbol.prototype : r,
                "%SyntaxError%": SyntaxError,
                "%SyntaxErrorPrototype%": SyntaxError.prototype,
                "%ThrowTypeError%": o,
                "%TypedArray%": g,
                "%TypedArrayPrototype%": g ? g.prototype : r,
                "%TypeError%": c,
                "%TypeErrorPrototype%": c.prototype,
                "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? r : Uint8Array.prototype,
                "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray.prototype,
                "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? r : Uint16Array.prototype,
                "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? r : Uint32Array.prototype,
                "%URIError%": URIError,
                "%URIErrorPrototype%": URIError.prototype,
                "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                "%WeakMapPrototype%": "undefined" == typeof WeakMap ? r : WeakMap.prototype,
                "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
                "%WeakSetPrototype%": "undefined" == typeof WeakSet ? r : WeakSet.prototype
            },
            b = n(53).call(Function.call, String.prototype.replace),
            v = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            h = /\\(\\)?/g;
        e.exports = function (e, t) {
            if ("string" != typeof e || 0 === e.length) throw new TypeError("intrinsic name must be a non-empty string");
            if (1 < arguments.length && "boolean" != typeof t) throw new TypeError('"allowMissing" argument must be a boolean');
            for (var i, n = (i = [], b(e, v, function (e, t, n, r) {
                    i[i.length] = n ? b(r, h, "$1") : t || e
                }), i), r = function (e, t) {
                    if (!(e in y)) throw new SyntaxError("intrinsic " + e + " does not exist!");
                    if (void 0 === y[e] && !t) throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
                    return y[e]
                }("%" + (0 < n.length ? n[0] : "") + "%", t), o = 1; o < n.length; o += 1)
                if (null != r)
                    if (u && o + 1 >= n.length) {
                        var a = u(r, n[o]);
                        if (!(t || n[o] in r)) throw new c("base intrinsic for " + e + " exists, but the property is not available.");
                        r = a ? a.get || a.value : r[n[o]]
                    } else r = r[n[o]];
            return r
        }
    },
    132: function (r, e, i) {
        "use strict";
        (function (e) {
            var t = e.Symbol,
                n = i(133);
            r.exports = function () {
                return "function" == typeof t && ("function" == typeof Symbol && ("symbol" == typeof t("foo") && ("symbol" == typeof Symbol("bar") && n())))
            }
        }).call(e, i(28))
    },
    133: function (e, t, n) {
        "use strict";
        e.exports = function () {
            if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
            if ("symbol" == typeof Symbol.iterator) return !0;
            var e = {},
                t = Symbol("test"),
                n = Object(t);
            if ("string" == typeof t) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
            for (t in e[t] = 42, e) return !1;
            if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
            if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
            var r = Object.getOwnPropertySymbols(e);
            if (1 !== r.length || r[0] !== t) return !1;
            if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
                var i = Object.getOwnPropertyDescriptor(e, t);
                if (42 !== i.value || !0 !== i.enumerable) return !1
            }
            return !0
        }
    },
    134: function (e, t, n) {
        "use strict";
        var r = n(54).supportsDescriptors,
            i = n(82),
            o = Object.getOwnPropertyDescriptor,
            a = Object.defineProperty,
            c = TypeError,
            u = Object.getPrototypeOf,
            s = /a/;
        e.exports = function () {
            if (!r || !u) throw new c("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
            var e = i(),
                t = u(s),
                n = o(t, "flags");
            return n && n.get === e || a(t, "flags", {
                configurable: !0,
                enumerable: !1,
                get: e
            }), e
        }
    },
    135: function (e, t, n) {
        "use strict";
        var r = Date.prototype.getDay,
            i = Object.prototype.toString,
            o = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        e.exports = function (e) {
            return "object" == typeof e && null !== e && (o ? function (e) {
                try {
                    return r.call(e), !0
                } catch (e) {
                    return !1
                }
            }(e) : "[object Date]" === i.call(e))
        }
    },
    136: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e
        }
    },
    137: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {}
        }
    },
    138: function (e, t) {
        h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
        var g = "fun-hooks";
        var n = Object.freeze({
                useProxy: !0,
                ready: 0
            }),
            y = new WeakMap,
            r = "2,1,0" === [1].reduce(function (e, t, n) {
                return [e, t, n]
            }, 2).toString() ? Array.prototype.reduce : function (e, t) {
                var n, r = Object(this),
                    i = r.length >>> 0,
                    o = 0;
                if (t) n = t;
                else {
                    for (; o < i && !(o in r);) o++;
                    n = r[o++]
                }
                for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
                return n
            };

        function b(e, t) {
            return Array.prototype.slice.call(e, t)
        }
        var v = Object.assign || function (e) {
            return r.call(b(arguments, 1), function (t, n) {
                return n && Object.keys(n).forEach(function (e) {
                    t[e] = n[e]
                }), t
            }, e)
        };

        function h(u) {
            var s, e = {},
                d = [];

            function t(e, t) {
                return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function (o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                    var c = {},
                        n = ["constructor"];
                    for (;
                        (e = e.filter(function (e) {
                            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                        })).forEach(function (e) {
                            var t = e.split(":"),
                                n = t[0],
                                r = t[1] || "sync";
                            if (!c[n]) {
                                var i = o[n];
                                c[n] = o[n] = f(r, i, a ? [a, n] : void 0)
                            }
                        }), o = Object.getPrototypeOf(o), t && o;);
                    return c
                }.apply(null, arguments) : void 0
            }

            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(a, function (t, n, e) {
                    var r = t[n],
                        i = !1;
                    return r || (e === a.length - 1 ? (s || d.push(function () {
                        i || console.warn(g + ": referenced '" + o + "' but it was never created")
                    }), t[n] = p(function (e) {
                        t[n] = e, i = !0
                    })) : t[n] = {})
                }, e)
            }

            function p(r) {
                var o = [],
                    a = [],
                    c = function () {},
                    e = {
                        before: function (e, t) {
                            return n.call(this, o, "before", e, t)
                        },
                        after: function (e, t) {
                            return n.call(this, a, "after", e, t)
                        },
                        getHooks: function (n) {
                            var e = o.concat(a);
                            return "object" == typeof n && (e = e.filter(function (t) {
                                return Object.keys(n).every(function (e) {
                                    return t[e] === n[e]
                                })
                            })), v(e, {
                                remove: function () {
                                    return e.forEach(function (e) {
                                        e.remove()
                                    }), this
                                }
                            })
                        },
                        removeAll: function () {
                            return this.getHooks().remove()
                        }
                    },
                    t = {
                        install: function (e, t, n) {
                            this.type = e, (c = n)(o, a), r && r(t)
                        }
                    };
                return y.set(e.after, t), e;

                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function () {
                            var e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), c(o, a))
                        }
                    };
                    return t.push(i), t.sort(function (e, t) {
                        return t.priority - e.priority
                    }), c(o, a), this
                }
            }

            function f(f, e, t) {
                var n = e.after && y.get(e.after);
                if (n) {
                    if (n.type !== f) throw g + ": recreated hookable with different type";
                    return e
                }
                var r, i, o = t ? l(t) : p(),
                    a = {
                        get: function (e, t) {
                            return o[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : v(i = function () {
                    return a.apply ? a.apply(e, this, b(arguments)) : e.apply(this, arguments)
                }, o), y.get(i.after).install(f, i, function (e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function (n, r, e) {
                        var i, o = 0,
                            a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();

                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }

                        function u(e) {
                            if (d[o]) {
                                var t = b(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t)
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }
                        return d[s] = function () {
                            var e = b(arguments, 1);
                            "async" === f && a && (delete u.bail, e.push(u));
                            var t = n.apply(r, e);
                            "sync" === f && u(t)
                        }, u.apply(null, e), i
                    }) : void 0;

                    function n(e) {
                        d.push(e.hook)
                    }
                    c()
                }), i;

                function c() {
                    !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC) ? "sync" !== f && u.ready & h.QUEUE ? a.apply = function () {
                        var e = arguments;
                        d.push(function () {
                            i.apply(e[1], e[2])
                        })
                    } : a.apply = function () {
                        throw g + ": hooked function not ready"
                    } : a.apply = r
                }
            }
            return (u = v({}, n, u)).ready ? t.ready = function () {
                s = !0,
                    function (e) {
                        for (var t; t = e.shift();) t()
                    }(d)
            } : s = !0, t.get = l, t
        }
        e.exports = h
    },
    14: function (e, t, n) {
        var r = n(62)("wks"),
            i = n(48),
            o = n(19).Symbol,
            a = "function" == typeof o;
        (e.exports = function (e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    15: function (e, t, n) {
        "use strict";
        t.a = function () {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs")
    },
    16: function (e, t, n) {
        var y = n(19),
            b = n(17),
            v = n(27),
            h = n(24),
            m = n(31),
            S = "prototype",
            A = function (e, t, n) {
                var r, i, o, a = e & A.F,
                    c = e & A.G,
                    u = e & A.S,
                    s = e & A.P,
                    d = e & A.B,
                    f = e & A.W,
                    l = c ? b : b[t] || (b[t] = {}),
                    p = l[S],
                    g = c ? y : u ? y[t] : (y[t] || {})[S];
                for (r in c && (n = t), n)(i = !a && g && void 0 !== g[r]) && m(l, r) || (o = i ? g[r] : n[r], l[r] = c && "function" != typeof g[r] ? n[r] : d && i ? v(o, y) : f && g[r] == o ? function (r) {
                    function e(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    }
                    return e[S] = r[S], e
                }(o) : s && "function" == typeof o ? v(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & A.R && p && !p[r] && h(p, r, o)))
            };
        A.F = 1, A.G = 2, A.S = 4, A.P = 8, A.B = 16, A.W = 32, A.U = 64, A.R = 128, e.exports = A
    },
    17: function (e, t) {
        var n = e.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = n)
    },
    18: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    19: function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    190: function (e, t, n) {
        "use strict";
        var r = n(16),
            i = n(45)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o](function () {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            findIndex: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(41)(o)
    },
    195: function (e, t, n) {
        "use strict";
        t.a = function () {
            window.addEventListener("message", c, !1)
        };
        var r = n(8),
            y = n.n(r),
            b = n(26),
            i = n(5),
            v = (n.n(i), n(0)),
            h = n(23),
            o = n(12),
            m = n.n(o),
            S = n(10),
            a = n(11),
            A = n.n(a),
            E = i.EVENTS.BID_WON;

        function c(e) {
            var t, n, r, i, o, a, c, u, s, d, f = e.message ? "message" : "data",
                l = {};
            try {
                l = JSON.parse(e[f])
            } catch (e) {
                return
            }
            if (l && l.adId) {
                var p = m()(h.a.getBidsReceived(), function (e) {
                    return e.adId === l.adId
                });
                if (p && "Prebid Request" === l.message && (t = p, n = l.adServerDomain, r = e.source, i = t.adId, o = t.ad, a = t.adUrl, c = t.width, u = t.height, s = t.renderer, d = t.cpm, Object(S.c)(s) ? Object(S.b)(s, t) : i && (function (e) {
                        var o = e.adId,
                            a = e.adUnitCode,
                            r = e.width,
                            i = e.height;

                        function c(e) {
                            var t, n, r = (t = o, n = a, window.googletag ? function (n) {
                                    return m()(window.googletag.pubads().getSlots(), function (t) {
                                        return m()(t.getTargetingKeys(), function (e) {
                                            return A()(t.getTargeting(e), n)
                                        })
                                    }).getSlotElementId()
                                }(t) : window.apntag ? function (e) {
                                    var t = window.apntag.getTag(e);
                                    return t && t.targetId
                                }(n) : n),
                                i = document.getElementById(r);
                            return i && i.querySelector(e)
                        } ["div", "iframe"].forEach(function (e) {
                            var t = c(e + ':not([style*="display: none"])');
                            if (t) {
                                var n = t.style;
                                n.width = r + "px", n.height = i + "px"
                            } else Object(v.logWarn)("Unable to locate matching page element for adUnitCode ".concat(a, ".  Can't resize it to ad's dimensions.  Please review setup."))
                        })
                    }(t), r.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: Object(v.replaceAuctionPrice)(o, d),
                        adUrl: Object(v.replaceAuctionPrice)(a, d),
                        adId: i,
                        width: c,
                        height: u
                    }), n)), h.a.addWinningBid(p), y.a.emit(E, p)), p && "Prebid Native" === l.message) {
                    if ("assetRequest" === l.action) {
                        var g = Object(b.c)(l, p);
                        return void e.source.postMessage(JSON.stringify(g), e.origin)
                    }
                    if ("click" === Object(b.b)(l, p)) return;
                    h.a.addWinningBid(p), y.a.emit(E, p)
                }
            }
        }
    },
    196: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && p(t, !0)
        };
        var r, i, o = n(3),
            a = n(0),
            c = n(35),
            u = "pbjs:debugging";

        function s(e) {
            Object(a.logMessage)("DEBUG: " + e)
        }

        function d(e) {
            Object(a.logWarn)("DEBUG: " + e)
        }

        function f(e) {
            r = function (e, t, n) {
                if (y(this.bidders, n.bidderCode)) return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function (e) {
                    g(e, n.bidderCode, t) || b(e, n, "bidder")
                });
                e(t, n)
            }.bind(e), c.c.before(r, 5), i = function (e, t) {
                var r = this,
                    n = t.filter(function (e) {
                        return !y(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1)
                    });
                Array.isArray(r.bidRequests) && n.forEach(function (n) {
                    r.bidRequests.forEach(function (t) {
                        n.bids.forEach(function (e) {
                            g(t, n.bidderCode, e.adUnitCode) || b(t, e, "bidRequest")
                        })
                    })
                });
                e(n)
            }.bind(e), c.e.before(i, 5)
        }

        function l() {
            c.c.getHooks({
                hook: r
            }).remove(), c.e.getHooks({
                hook: i
            }).remove()
        }

        function p(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            o.b.setConfig({
                debug: !0
            }), l(), f(e), s("bidder overrides enabled".concat(n ? " from session" : ""))
        }

        function g(e, t, n) {
            return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n)
        }

        function y(e, t) {
            return Array.isArray(e) && -1 === e.indexOf(t)
        }

        function b(n, e, r) {
            return Object.keys(n).filter(function (e) {
                return -1 === ["adUnitCode", "bidder"].indexOf(e)
            }).reduce(function (e, t) {
                return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")), e[t] = n[t], e
            }, e)
        }

        function v(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                p(e)
            } else {
                l(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        o.b.getConfig("debugging", function (e) {
            return v(e.debugging)
        })
    },
    2: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return r
        }), n.d(t, "d", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        }), n.d(t, "a", function () {
            return a
        });
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod"
    },
    20: function (e, t, n) {
        var r = n(30),
            i = n(89),
            o = n(90),
            a = Object.defineProperty;
        t.f = n(25) ? Object.defineProperty : function (e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    21: function (e, t, n) {
        "use strict";
        t.a = r, n.d(t, "b", function () {
            return i
        });
        var c = n(0);

        function u() {
            return (u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function r(i) {
            function o() {
                var e = function () {
                        var t, n = [];
                        do {
                            try {
                                t = t ? t.parent : i;
                                try {
                                    var e = t == i.top,
                                        r = {
                                            referrer: t.document.referrer || null,
                                            location: t.location.href || null,
                                            isTop: e
                                        };
                                    e && (r = u(r, {
                                        canonicalUrl: a(t.document)
                                    })), n.push(r)
                                } catch (e) {
                                    n.push({
                                        referrer: null,
                                        location: null,
                                        isTop: t == i.top
                                    }), Object(c.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                }
                            } catch (e) {
                                return n.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }), n
                            }
                        } while (t != i.top);
                        return n
                    }(),
                    t = function () {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins
                        } catch (e) {}
                    }();
                if (t)
                    for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e
            }

            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href
                } catch (e) {}
                return null
            }
            return function () {
                try {
                    var e, t = o(),
                        n = t.length - 1,
                        r = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                        i = function (e) {
                            var t, n = [],
                                r = null,
                                i = null,
                                o = null,
                                a = null,
                                c = null;
                            for (t = e.length - 1; 0 <= t; t--) {
                                try {
                                    r = e[t].location
                                } catch (e) {}
                                if (r) n.push(r), c = c || r;
                                else if (0 !== t) {
                                    i = e[t - 1];
                                    try {
                                        o = i.referrer, a = i.ancestor
                                    } catch (e) {}
                                    o ? (n.push(o), c = c || o) : a ? (n.push(a), c = c || a) : n.push(null)
                                } else n.push(null)
                            }
                            return {
                                stack: n,
                                detectedRefererUrl: c
                            }
                        }(t);
                    return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                        referer: i.detectedRefererUrl,
                        reachedTop: r,
                        numIframes: n,
                        stack: i.stack,
                        canonicalUrl: e
                    }
                } catch (e) {}
            }
        }
        var i = r(window)
    },
    22: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            return new r(e, t)
        };
        var i = n(0);

        function r(e, t) {
            var n = t && t.src || "client",
                r = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function () {
                switch (r) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function () {
                return r
            }, this.getSize = function () {
                return this.width + "x" + this.height
            }
        }
    },
    23: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return u
        });
        var r = n(0),
            s = n(35),
            i = n(12),
            o = n.n(i),
            a = n(5);
        var d, c, u = (d = [], (c = {}).addWinningBid = function (t) {
            var e = o()(d, function (e) {
                return e.getAuctionId() === t.auctionId
            });
            e ? (t.status = a.BID_STATUS.RENDERED, e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid")
        }, c.getAllWinningBids = function () {
            return d.map(function (e) {
                return e.getWinningBids()
            }).reduce(r.flatten, [])
        }, c.getBidsRequested = function () {
            return d.map(function (e) {
                return e.getBidRequests()
            }).reduce(r.flatten, [])
        }, c.getNoBids = function () {
            return d.map(function (e) {
                return e.getNoBids()
            }).reduce(r.flatten, [])
        }, c.getBidsReceived = function () {
            return d.map(function (e) {
                if (e.getAuctionStatus() === s.a) return e.getBidsReceived()
            }).reduce(r.flatten, []).filter(function (e) {
                return e
            })
        }, c.getAdUnits = function () {
            return d.map(function (e) {
                return e.getAdUnits()
            }).reduce(r.flatten, [])
        }, c.getAdUnitCodes = function () {
            return d.map(function (e) {
                return e.getAdUnitCodes()
            }).reduce(r.flatten, []).filter(r.uniques)
        }, c.createAuction = function (e) {
            var t, n = e.adUnits,
                r = e.adUnitCodes,
                i = e.callback,
                o = e.cbTimeout,
                a = e.labels,
                c = e.auctionId,
                u = Object(s.k)({
                    adUnits: n,
                    adUnitCodes: r,
                    callback: i,
                    cbTimeout: o,
                    labels: a,
                    auctionId: c
                });
            return t = u, d.push(t), u
        }, c.findBidByAdId = function (t) {
            return o()(d.map(function (e) {
                return e.getBidsReceived()
            }).reduce(r.flatten, []), function (e) {
                return e.adId === t
            })
        }, c.getStandardBidderAdServerTargeting = function () {
            return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }, c.setStatusForBids = function (e, t) {
            var n = c.findBidByAdId(e);
            if (n && (n.status = t), n && t === a.BID_STATUS.BID_TARGETING_SET) {
                var r = o()(d, function (e) {
                    return e.getAuctionId() === n.auctionId
                });
                r && r.setBidTargeting(n)
            }
        }, c.getLastAuctionId = function () {
            return d.length && d[d.length - 1].getAuctionId()
        }, c)
    },
    24: function (e, t, n) {
        var r = n(20),
            i = n(44);
        e.exports = n(25) ? function (e, t, n) {
            return r.f(e, t, i(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    },
    25: function (e, t, n) {
        e.exports = !n(37)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    26: function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return o
        }), n.d(t, "a", function () {
            return s
        }), t.g = function (e) {
            if (e && e.type && function (e) {
                    return e && c()(Object.keys(d), e) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
                }(e.type)) return d[e.type];
            return e
        }, t.f = function (t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n) return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter(function (e) {
                    return r[e].required
                }),
                o = Object.keys(t.native).filter(function (e) {
                    return t.native[e]
                });
            return i.every(function (e) {
                return c()(o, e)
            })
        }, t.b = function (e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel), e.action
        }, t.d = function (r, i) {
            var o = {};
            return Object.keys(r.native).forEach(function (e) {
                var t = u.NATIVE_KEYS[e],
                    n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId));
                t && n && (o[t] = n)
            }), o
        }, t.c = function (e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach(function (e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
                    n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            }), i
        };
        var a = n(0),
            r = n(11),
            c = n.n(r);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var u = n(5),
            o = [],
            s = Object.keys(u.NATIVE_KEYS).map(function (e) {
                return u.NATIVE_KEYS[e]
            }),
            d = {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            };

        function f(e) {
            return "object" === i(e) && e.url ? e.url : e
        }
    },
    27: function (e, t, n) {
        var o = n(59);
        e.exports = function (r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function (e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function (e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function (e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function () {
                return r.apply(i, arguments)
            }
        }
    },
    28: function (WE, XE) {
        var YE;
        YE = function () {
            return this
        }();
        try {
            YE = YE || Function("return this")() || eval("this")
        } catch (e) {
            "object" == typeof window && (YE = window)
        }
        WE.exports = YE
    },
    29: function (e, t, n) {
        "use strict";
        t.a = function (r, e, t) {
            if (!e || !r) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, e)) return void o.logError("".concat(e, " not whitelisted for loading external JavaScript"));
            if (a[r]) return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), a[r].tag;
            a[r] = {
                loaded: !1,
                tag: null,
                callbacks: []
            }, t && "function" == typeof t && a[r].callbacks.push(t);
            return o.logWarn("module ".concat(e, " is loading external JavaScript")),
                function (e, t) {
                    var n = document.createElement("script");
                    n.type = "text/javascript", n.async = !0, (a[r].tag = n).readyState ? n.onreadystatechange = function () {
                        "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
                    } : n.onload = function () {
                        t()
                    };
                    return n.src = e, o.insertElement(n), n
                }(r, function () {
                    a[r].loaded = !0;
                    try {
                        for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]()
                    } catch (e) {
                        o.logError("Error executing callback", "adloader.js:loadExternalScript", e)
                    }
                })
        };
        var r = n(11),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo", "outstream", "adagio", "browsi"]
    },
    297: function (e, t, n) {
        n(298), e.exports = n(17).String.includes
    },
    298: function (e, t, n) {
        "use strict";
        var r = n(16),
            i = n(299),
            o = "includes";
        r(r.P + r.F * n(301)(o), "String", {
            includes: function (e, t) {
                return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? t : void 0)
            }
        })
    },
    299: function (e, t, n) {
        var r = n(300),
            i = n(39);
        e.exports = function (e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e))
        }
    },
    3: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return v
        }), n.d(t, "b", function () {
            return j
        });
        var r = n(43),
            i = n(12),
            a = n.n(i),
            o = n(11),
            c = n.n(o),
            u = n(65),
            s = n.n(u),
            d = n(0);

        function f() {
            return (f = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var l = n(78),
            p = n(0),
            g = n(5),
            y = "TRUE" === p.getParameterByName(g.DEBUG_MODE).toUpperCase(),
            b = window.location.origin,
            v = "random",
            h = {};
        h[v] = !0, h.fixed = !0;
        var m = v,
            S = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            };
        var A, E, O, T, I, j = (T = [], I = null, w(), {
            getCurrentBidder: function () {
                return I
            },
            getConfig: function () {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? p.deepAccess(C(), e) : C()
                }
                return function (e, t) {
                    var n = t;
                    if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
                        var r = {
                            topic: e,
                            callback: n
                        };
                        return T.push(r),
                            function () {
                                T.splice(T.indexOf(r), 1)
                            }
                    }
                    p.logError("listener must be a function")
                }.apply(void 0, arguments)
            },
            setConfig: function (n) {
                if (p.isPlainObject(n)) {
                    var e = Object.keys(n),
                        r = {};
                    e.forEach(function (e) {
                        var t = n[e];
                        p.isPlainObject(A[e]) && p.isPlainObject(t) && (t = f({}, A[e], t)), r[e] = E[e] = t
                    }), _(r)
                } else p.logError("setConfig options must be an object")
            },
            setDefaults: function (e) {
                p.isPlainObject(A) ? (f(A, e), f(E, e)) : p.logError("defaults must be an object")
            },
            resetConfig: w,
            runWithBidder: U,
            callbackWithBidder: function (o) {
                return function (i) {
                    return function () {
                        if ("function" == typeof i) {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return U(o, (e = p.bind).call.apply(e, [i, this].concat(n)))
                        }
                        p.logWarn("config.callbackWithBidder callback is not a function")
                    }
                }
            },
            setBidderConfig: function (r) {
                try {
                    ! function (e) {
                        if (!p.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                        if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                        if (!p.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object"
                    }(r), r.bidders.forEach(function (n) {
                        O[n] || (O[n] = {}), Object.keys(r.config).forEach(function (e) {
                            var t = r.config[e];
                            p.isPlainObject(t) ? O[n][e] = f({}, O[n][e] || {}, t) : O[n][e] = t
                        })
                    })
                } catch (e) {
                    p.logError(e)
                }
            },
            getBidderConfig: function () {
                return O
            }
        });

        function w() {
            A = {};
            var n = {
                _debug: y,
                get debug() {
                    return this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: b,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: S.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : p.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = S.CUSTOM, p.logMessage("Using custom price granularity")))
                },
                get priceGranularity() {
                    return this._priceGranularity
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity
                },
                set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function (e, t) {
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : p.isPlainObject(n) && (e[t] = n[t], p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)), e
                    }, {})
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                _useBidCache: !1,
                get useBidCache() {
                    return this._useBidCache
                },
                set useBidCache(e) {
                    this._useBidCache = e
                },
                _deviceAccess: !0,
                get deviceAccess() {
                    return this._deviceAccess
                },
                set deviceAccess(e) {
                    this._deviceAccess = e
                },
                _bidderSequence: m,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    h[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                }
            };

            function i(t) {
                return a()(Object.keys(S), function (e) {
                    return t === S[e]
                })
            }

            function o(e) {
                if (e) {
                    if ("string" == typeof e) i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if (p.isPlainObject(e) && !Object(r.b)(e)) return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");
                    return 1
                }
                p.logError("Prebid Error: no value passed to `setPriceGranularity()`")
            }
            E && _(Object.keys(E).reduce(function (e, t) {
                return E[t] !== n[t] && (e[t] = n[t] || {}), e
            }, {})), E = n, O = {}
        }

        function C() {
            if (I && O && p.isPlainObject(O[I])) {
                var n = O[I],
                    e = new s.a(Object.keys(E).concat(Object.keys(n)));
                return l(e).reduce(function (e, t) {
                    return void 0 === n[t] ? e[t] = E[t] : void 0 !== E[t] && p.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, E[t], n[t]) : e[t] = n[t], e
                }, {})
            }
            return f({}, E)
        }

        function _(i) {
            var t = Object.keys(i);
            T.filter(function (e) {
                return c()(t, e.topic)
            }).forEach(function (e) {
                var t, n, r;
                e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t))
            }), T.filter(function (e) {
                return "*" === e.topic
            }).forEach(function (e) {
                return e.callback(i)
            })
        }

        function U(e, t) {
            I = e;
            try {
                return t()
            } finally {
                I = null
            }
        }
    },
    30: function (e, t, n) {
        var r = n(18);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    300: function (e, t, n) {
        var r = n(18),
            i = n(38),
            o = n(14)("match");
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    },
    301: function (e, t, n) {
        var r = n(14)("match");
        e.exports = function (t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[r] = !1, !"/./" [t](n)
                } catch (e) {}
            }
            return !0
        }
    },
    31: function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    },
    32: function (e, t) {
        e.exports = {}
    },
    33: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return m
        });
        var a = n(0),
            r = n(3),
            i = n(11),
            o = n.n(i),
            c = n(9);

        function u(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function s() {
            return (s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        r.b.setDefaults({
            userSync: a.deepClone({
                syncEnabled: !0,
                filterSettings: {
                    image: {
                        bidders: "*",
                        filter: "include"
                    }
                },
                syncsPerBidder: 5,
                syncDelay: 3e3,
                auctionDelay: 0
            })
        });
        var d = Object(c.a)("usersync");
        var f, l, p, g, y, b, v, h = !a.isSafariBrowser() && d.cookiesAreEnabled(),
            m = (f = {
                config: r.b.getConfig("userSync"),
                browserSupportsCookies: h
            }, l = {}, p = S(), g = new Set, b = {
                image: !0,
                iframe: !(y = {})
            }, v = f.config, r.b.getConfig("userSync", function (e) {
                if (e.userSync) {
                    var t = e.userSync.filterSettings;
                    a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                        bidders: "*",
                        filter: "include"
                    }))
                }
                v = s(v, e.userSync)
            }), l.registerSync = function (e, t, n) {
                return g.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : v.syncEnabled && a.isArray(p[e]) ? t ? 0 !== v.syncsPerBidder && Number(y[t]) >= v.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : l.canBidderRegisterSync(e, t) ? (p[e].push([t, n]), (r = y)[i = t] ? r[i] += 1 : r[i] = 1, void(y = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
                var r, i
            }, l.syncUsers = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(A, Number(e));
                A()
            }, l.triggerUserSyncs = function () {
                v.enableOverride && l.syncUsers()
            }, l.canBidderRegisterSync = function (e, t) {
                return !v.filterSettings || !O(e, t)
            }, l);

        function S() {
            return {
                image: [],
                iframe: []
            }
        }

        function A() {
            if (v.syncEnabled && f.browserSupportsCookies) {
                try {
                    ! function () {
                        if (!b.image) return;
                        E(p.image, function (e) {
                            var t = u(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r)
                        })
                    }(),
                    function () {
                        if (!b.iframe) return;
                        E(p.iframe, function (e) {
                            var t = u(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r)
                        })
                    }()
                } catch (e) {
                    return a.logError("Error firing user syncs", e)
                }
                p = S()
            }
        }

        function E(e, t) {
            a.shuffle(e).forEach(function (e) {
                t(e), g.add(e[0])
            })
        }

        function O(e, t) {
            var n = v.filterSettings;
            if (function (e, t) {
                    if (e.all && e[t]) return void a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'));
                    var n = e.all ? e.all : e[t],
                        r = e.all ? "all" : t;
                    if (!n) return;
                    var i = n.filter,
                        o = n.bidders;
                    if (i && "include" !== i && "exclude" !== i) return void a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'."));
                    return "*" === o || Array.isArray(o) && 0 < o.length && o.every(function (e) {
                        return a.isStr(e) && "*" !== e
                    }) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                }(n, e)) {
                b[e] = !0;
                var r = n.all ? n.all : n[e],
                    i = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function (e, t) {
                        return !o()(e, t)
                    },
                    exclude: function (e, t) {
                        return o()(e, t)
                    }
                } [r.filter || "include"](i, t)
            }
        }
    },
    34: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return c
        }), n.d(t, "a", function () {
            return u
        }), t.d = function (e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t),
                r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                i = r && Object(o.deepAccess)(r, "context");
            return s(e, n, r, i)
        }, n.d(t, "c", function () {
            return s
        });
        n(7);
        var o = n(0),
            i = n(3),
            r = n(11),
            a = (n.n(r), n(13)),
            c = "outstream",
            u = "instream";
        var s = Object(a.b)("sync", function (e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !(!e.renderer && !t.renderer)
        }, "checkVideoBidSetup")
    },
    35: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return F
        }), n.d(t, "a", function () {
            return W
        }), t.k = function (e) {
            var t, n, y, b, o = e.adUnits,
                r = e.adUnitCodes,
                i = e.callback,
                a = e.cbTimeout,
                c = e.labels,
                u = e.auctionId,
                v = o,
                s = c,
                d = r,
                h = [],
                f = [],
                l = [],
                p = u || D.generateUUID(),
                g = i,
                m = a,
                S = [],
                A = new Set;

            function E() {
                return {
                    auctionId: p,
                    timestamp: t,
                    auctionEnd: n,
                    auctionStatus: y,
                    adUnits: v,
                    adUnitCodes: d,
                    labels: s,
                    bidderRequests: h,
                    noBids: l,
                    bidsReceived: f,
                    winningBids: S,
                    timeout: m
                }
            }

            function O(r, e) {
                if (e && clearTimeout(b), void 0 === n) {
                    var i = [];
                    r && (D.logMessage("Auction ".concat(p, " timedOut")), t = A, (i = h.map(function (e) {
                        return (e.bids || []).filter(function (e) {
                            return !t.has(e.bidder)
                        })
                    }).reduce(w.flatten, []).map(function (e) {
                        return {
                            bidId: e.bidId,
                            bidder: e.bidder,
                            adUnitCode: e.adUnitCode,
                            auctionId: e.auctionId
                        }
                    })).length && M.emit(q.EVENTS.BID_TIMEOUT, i)), y = W, n = Date.now(), M.emit(q.EVENTS.AUCTION_END, E()), Y(v, function () {
                        try {
                            if (null != g) {
                                var e = d,
                                    t = f.filter(D.bind.call(w.adUnitsFilter, this, e)).reduce(Z, {});
                                g.apply(pbjs, [t, r, p]), g = null
                            }
                        } catch (e) {
                            D.logError("Error executing bidsBackHandler", null, e)
                        } finally {
                            i.length && N.callTimedOutBidders(o, i, m);
                            var n = U.b.getConfig("userSync") || {};
                            n.enableOverride || k(n.syncDelay)
                        }
                    })
                }
                var t
            }

            function T() {
                D.logInfo("Bids Received for Auction with id: ".concat(p), f), y = W, O(!1, !0)
            }

            function I(e) {
                A.add(e)
            }

            function j(d) {
                var f = this;
                d.forEach(function (e) {
                    var t;
                    t = e, h = h.concat(t)
                });
                var l = {},
                    e = {
                        bidRequests: d,
                        run: function () {
                            var e, t;
                            e = O.bind(null, !0), t = setTimeout(e, m), b = t, y = F, M.emit(q.EVENTS.AUCTION_INIT, E());
                            var n, r, i, o, a, c, u = (n = T, r = f, i = 0, o = !1, a = new Set, c = {}, {
                                addBidResponse: function (e, t) {
                                    c[t.requestId] = !0, i++;
                                    var n = function (e) {
                                        var t = e.adUnitCode,
                                            n = e.bid,
                                            r = e.bidderRequest,
                                            i = e.auctionId,
                                            o = r.start,
                                            a = x({}, n, {
                                                auctionId: i,
                                                responseTimestamp: Object(w.timestamp)(),
                                                requestTimestamp: o,
                                                cpm: parseFloat(n.cpm) || 0,
                                                bidder: n.bidderCode,
                                                adUnitCode: t
                                            });
                                        a.timeToRespond = a.responseTimestamp - a.requestTimestamp, M.emit(q.EVENTS.BID_ADJUSTMENT, a);
                                        var c = r.bids && B()(r.bids, function (e) {
                                                return e.adUnitCode == t
                                            }),
                                            u = c && c.renderer;
                                        u && u.url && (a.renderer = _.a.install({
                                            url: u.url
                                        }), a.renderer.setRender(u.render));
                                        var s = X(n.mediaType, c, U.b.getConfig("mediaTypePriceGranularity")),
                                            d = Object(C.a)(a.cpm, "object" === R(s) ? s : U.b.getConfig("customPriceBucket"), U.b.getConfig("currency.granularityMultiplier"));
                                        return a.pbLg = d.low, a.pbMg = d.med, a.pbHg = d.high, a.pbAg = d.auto, a.pbDg = d.dense, a.pbCg = d.custom, a
                                    }({
                                        adUnitCode: e,
                                        bid: t,
                                        bidderRequest: this,
                                        auctionId: r.getAuctionId()
                                    });
                                    "video" === n.mediaType ? function (e, t, n, r) {
                                        var i = !0,
                                            o = Object(w.getBidRequest)(t.requestId, [n]),
                                            a = o && Object(w.deepAccess)(o, "mediaTypes.video"),
                                            c = a && Object(w.deepAccess)(a, "context");
                                        U.b.getConfig("cache.url") && c !== P.b && (t.videoCacheKey ? t.vastUrl || (D.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, Q(e, t, r, o))), i && ($(e, t), r())
                                    }(r, n, this, s) : ($(r, n), s())
                                },
                                adapterDone: function () {
                                    a.add(this), o = r.getBidRequests().every(function (e) {
                                        return a.has(e)
                                    }), this.bids.forEach(function (e) {
                                        c[e.bidId] || (r.addNoBid(e), M.emit(q.EVENTS.NO_BID, e))
                                    }), o && 0 === i && n()
                                }
                            });

                            function s() {
                                i--, o && 0 === i && n()
                            }
                            N.callBids(v, d, function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                J.apply({
                                    dispatch: u.addBidResponse,
                                    bidderRequest: this
                                }, t)
                            }, u.adapterDone, {
                                request: function (e, t) {
                                    g(z, t), g(l, e), V[e] || (V[e] = {
                                        SRA: !0,
                                        origin: t
                                    }), 1 < l[e] && (V[e].SRA = !1)
                                },
                                done: function (e) {
                                    z[e]--, H[0] && p(H[0]) && H.shift()
                                }
                            }, m, I)
                        }
                    };

                function p(e) {
                    var r = !0,
                        i = U.b.getConfig("maxRequestsPerOrigin") || L;
                    return e.bidRequests.some(function (e) {
                        var t = 1,
                            n = void 0 !== e.src && e.src === q.S2S.SRC ? "s2s" : e.bidderCode;
                        return V[n] && (!1 === V[n].SRA && (t = Math.min(e.bids.length, i)), z[V[n].origin] + t > i && (r = !1)), !r
                    }), r && e.run(), r
                }

                function g(e, t) {
                    void 0 === e[t] ? e[t] = 1 : e[t]++
                }
                p(e) || (D.logWarn("queueing auction due to limited endpoint capacity"), H.push(e))
            }
            return {
                addBidReceived: function (e) {
                    f = f.concat(e)
                },
                addNoBid: function (e) {
                    l = l.concat(e)
                },
                executeCallback: O,
                callBids: function () {
                    y = G, t = Date.now();
                    var e = N.makeBidRequests(v, t, p, m, s);
                    D.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (D.logWarn("No valid bid requests returned for auction"), T()) : K.call({
                        dispatch: j,
                        context: this
                    }, e)
                },
                addWinningBid: function (e) {
                    S = S.concat(e), N.callBidWonBidder(e.bidder, e, o)
                },
                setBidTargeting: function (e) {
                    N.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function () {
                    return S
                },
                getTimeout: function () {
                    return m
                },
                getAuctionId: function () {
                    return p
                },
                getAuctionStatus: function () {
                    return y
                },
                getAdUnits: function () {
                    return v
                },
                getAdUnitCodes: function () {
                    return d
                },
                getBidRequests: function () {
                    return h
                },
                getBidsReceived: function () {
                    return f
                },
                getNoBids: function () {
                    return l
                }
            }
        }, n.d(t, "c", function () {
            return J
        }), n.d(t, "e", function () {
            return K
        }), t.g = s, t.d = $, n.d(t, "f", function () {
            return Q
        }), n.d(t, "i", function () {
            return d
        }), n.d(t, "h", function () {
            return f
        }), t.j = l;
        var w = n(0),
            C = n(43),
            a = n(26),
            o = n(85),
            _ = n(10),
            U = n(3),
            r = n(33),
            i = n(13),
            c = n(12),
            B = n.n(c),
            P = n(34),
            u = n(2);

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function x() {
            return (x = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var k = r.a.syncUsers,
            D = n(0),
            N = n(7).default,
            M = n(8),
            q = n(5),
            G = "started",
            F = "inProgress",
            W = "completed";
        M.on(q.EVENTS.BID_ADJUSTMENT, function (e) {
            ! function (e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, x({}, e))
                } catch (e) {
                    D.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var L = 4,
            z = {},
            V = {},
            H = [];
        var J = Object(i.b)("async", function (e, t) {
                this.dispatch.call(this.bidderRequest, e, t)
            }, "addBidResponse"),
            K = Object(i.b)("sync", function (e) {
                this.dispatch.call(this.context, e)
            }, "addBidderRequests"),
            Y = Object(i.b)("async", function (e, t) {
                t && t()
            }, "bidsBackCallback");

        function s(e, t) {
            t.timeToRespond > e.getTimeout() + U.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function $(e, t) {
            var n = e.getBidRequests(),
                r = B()(n, function (e) {
                    return e.bidderCode === t.bidderCode
                });
            ! function (t, e) {
                var n;
                if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                    var r = B()(e.bids, function (e) {
                        return e.adUnitCode === t.adUnitCode
                    });
                    n = function (e, t, n) {
                        if (!t) return {};
                        var r = {},
                            i = pbjs.bidderSettings;
                        if (i) {
                            var o = l(t.mediaType, e, n);
                            p(r, o, t), e && i[e] && i[e][q.JSON_MAPPING.ADSERVER_TARGETING] && (p(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                        }
                        t.native && (r = x({}, r, Object(a.d)(t, n)));
                        return r
                    }(t.bidderCode, t, r)
                }
                t.adserverTargeting = x(t.adserverTargeting || {}, n)
            }(t, r), M.emit(q.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), s(e, t)
        }
        var Q = Object(i.b)("async", function (n, r, i, e) {
            Object(o.b)([r], function (e, t) {
                e ? (D.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), s(n, r)) : "" === t[0].uuid ? (D.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), s(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), $(n, r), i())
            })
        }, "callPrebidCache");

        function X(e, t, n) {
            if (e && n) {
                if (e === u.d) {
                    var r = Object(w.deepAccess)(t, "mediaTypes.".concat(u.d, ".context"), "instream");
                    if (n["".concat(u.d, "-").concat(r)]) return n["".concat(u.d, "-").concat(r)]
                }
                return n[e]
            }
        }
        var d = function (e, t) {
                var n = X(e, t, U.b.getConfig("mediaTypePriceGranularity"));
                return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : U.b.getConfig("priceGranularity")
            },
            f = function (t) {
                return function (e) {
                    return t === q.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === q.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === q.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === q.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === q.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === q.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            };

        function l(e, t, n) {
            function r(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function (e) {
                        return t(e)
                    } : function (e) {
                        return Object(w.getValue)(e, t)
                    }
                }
            }
            var i = q.TARGETING_KEYS,
                o = d(e, n),
                a = pbjs.bidderSettings;
            if (a[q.JSON_MAPPING.BD_SETTING_STANDARD] || (a[q.JSON_MAPPING.BD_SETTING_STANDARD] = {}), a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] || (a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] = [r(i.BIDDER, "bidderCode"), r(i.AD_ID, "adId"), r(i.PRICE_BUCKET, f(o)), r(i.SIZE, "size"), r(i.DEAL, "dealId"), r(i.SOURCE, "source"), r(i.FORMAT, "mediaType")]), "video" === e) {
                var c = a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING];
                if ([i.UUID, i.CACHE_ID].forEach(function (t) {
                        void 0 === B()(c, function (e) {
                            return e.key === t
                        }) && c.push(r(t, "videoCacheKey"))
                    }), U.b.getConfig("cache.url") && (!t || !1 !== D.deepAccess(a, "".concat(t, ".sendStandardTargeting")))) {
                    var u = Object(w.parseUrl)(U.b.getConfig("cache.url"));
                    void 0 === B()(c, function (e) {
                        return e.key === i.CACHE_HOST
                    }) && c.push(r(i.CACHE_HOST, function (e) {
                        return D.deepAccess(e, "adserverTargeting.".concat(i.CACHE_HOST)) ? e.adserverTargeting[i.CACHE_HOST] : u.hostname
                    }))
                }
            }
            return a[q.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function p(r, i, o) {
            var e = i[q.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), D._each(e, function (e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && D.logWarn("The key: " + t + " is getting ovewritten"), D.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    D.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== q.TARGETING_KEYS.DEAL || !D.isEmptyStr(n) && null != n ? r[t] = n : D.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }), r
        }

        function Z(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    36: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return l
        });
        var v = n(0),
            h = n(3),
            m = n(26),
            r = n(23),
            i = n(84),
            o = n(2),
            a = n(11),
            S = n.n(a);

        function A() {
            return (A = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function E(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function O(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var c = n(0),
            T = n(5),
            I = [],
            j = Object.keys(T.TARGETING_KEYS).map(function (e) {
                return T.TARGETING_KEYS[e]
            }),
            u = function (e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(v.timestamp)()
            },
            s = function (e) {
                return e && (e.status && !S()([T.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function w(e, r, t) {
            var i = 2 < arguments.length && void 0 !== t ? t : 0,
                o = [],
                a = h.b.getConfig("sendBidsControl.dealPrioritization"),
                c = Object(v.groupBy)(e, "adUnitCode");
            return Object.keys(c).forEach(function (e) {
                var t = [],
                    n = Object(v.groupBy)(c[e], "bidderCode");
                Object.keys(n).forEach(function (e) {
                    return t.push(n[e].reduce(r))
                }), 0 < i ? (t = a ? t(C(!0)) : t.sort(function (e, t) {
                    return t.cpm - e.cpm
                }), o.push.apply(o, O(t.slice(0, i)))) : o.push.apply(o, O(t))
            }), o
        }

        function C(e) {
            var n = 0 < arguments.length && void 0 !== e && e;
            return function (e, t) {
                return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb
            }
        }
        var d, _, f, l = (d = r.a, f = {}, (_ = {}).setLatestAuctionForAdUnit = function (e, t) {
            f[e] = t
        }, _.resetPresetTargeting = function (e, t) {
            if (Object(v.isGptPubadsDefined)()) {
                var n = B(e),
                    i = d.getAdUnits().filter(function (e) {
                        return S()(n, e.code)
                    });
                window.googletag.pubads().getSlots().forEach(function (n) {
                    var r = c.isFn(t) && t(n);
                    I.forEach(function (t) {
                        i.forEach(function (e) {
                            (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || c.isFn(r) && r(e.code)) && n.setTargeting(t, null)
                        })
                    })
                })
            }
        }, _.resetPresetTargetingAST = function (e) {
            B(e).forEach(function (e) {
                var t = window.apntag.getTag(e);
                if (t && t.keywords) {
                    var n = Object.keys(t.keywords),
                        r = {};
                    n.forEach(function (e) {
                        S()(I, e.toLowerCase()) || (r[e] = t.keywords[e])
                    }), window.apntag.modifyTag(e, {
                        keywords: r
                    })
                }
            })
        }, _.getAllTargeting = function (e) {
            var n, t, r, i, o, a, c, u, s, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : P(),
                f = B(e),
                l = (a = f, c = d, u = _.getWinningBids(a, c), s = R(), (u = u.map(function (o) {
                    return E({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function (e) {
                        return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e)
                    }).reduce(function (e, t) {
                        var n = [o.adserverTargeting[t]],
                            r = E({}, t.substring(0, 20), n);
                        if (t !== T.TARGETING_KEYS.DEAL) return [].concat(O(e), [r]);
                        var i = E({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                        return [].concat(O(e), [r, i])
                    }, []))
                })).concat((o = f, d.filter(function (e) {
                    return S()(o, e.adUnitCode)
                }).map(function (e) {
                    return A({}, e)
                }).reduce(x, []).map(k).filter(function (e) {
                    return e
                }))).concat(h.b.getConfig("enableSendAllBids") ? (n = f, t = d, r = j.concat(m.a), i = h.b.getConfig("sendBidsControl.bidLimit"), w(t, v.getHighestCpm, i).map(function (t) {
                    if (U(t, n)) return E({}, t.adUnitCode, D(t, r.filter(function (e) {
                        return void 0 !== t.adserverTargeting[e]
                    })))
                }).filter(function (e) {
                    return e
                })) : function (e, t) {
                    if (!0 !== h.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                    var n = j.concat(m.a);
                    return w(t, v.getHighestCpm).map(function (t) {
                        if (t.dealId && U(t, e)) return E({}, t.adUnitCode, D(t, n.filter(function (e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                    }).filter(function (e) {
                        return e
                    })
                }(f, d)));
            l.map(function (t) {
                Object.keys(t).map(function (e) {
                    t[e].map(function (e) {
                        -1 === I.indexOf(Object.keys(e)[0]) && (I = Object.keys(e).concat(I))
                    })
                })
            }), l = l.map(function (e) {
                return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                    return E({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                }).reduce(function (e, t) {
                    return A(t, e)
                }, {}))
            }).reduce(function (e, t) {
                var n = Object.keys(t)[0];
                return e[n] = A({}, e[n], t[n]), e
            }, {});
            var p, g, y, b = h.b.getConfig("targetingControls.auctionKeyMaxChars");
            return b && (Object(v.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(b, " characters.  Running checks on auction keys...")), p = l, g = b, y = Object(v.deepClone)(p), l = Object.keys(y).map(function (e) {
                return {
                    adUnitCode: e,
                    adUnitTargeting: y[e]
                }
            }).sort(C()).reduce(function (e, t, n, r) {
                var i, o = (i = t.adUnitTargeting, Object.keys(i).reduce(function (e, t) {
                    return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26")
                }, ""));
                n + 1 === r.length && (o = o.slice(0, -3));
                var a = t.adUnitCode,
                    c = o.length;
                return c <= g ? (g -= c, Object(v.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(g), y[a]), e[a] = y[a]) : Object(v.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(g, ".\n"), y[a]), n + 1 === r.length && 0 === Object.keys(e).length && Object(v.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
            }, {})), f.forEach(function (e) {
                l[e] || (l[e] = {})
            }), l
        }, _.setTargetingForGPT = function (i, e) {
            window.googletag.pubads().getSlots().forEach(function (r) {
                Object.keys(i).filter((e || Object(v.isAdUnitCodeMatchingSlot))(r)).forEach(function (n) {
                    return Object.keys(i[n]).forEach(function (t) {
                        var e = i[n][t].split(",");
                        (e = 1 < e.length ? [e] : e).map(function (e) {
                            return c.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e
                        }).forEach(function (e) {
                            r.setTargeting(t, e)
                        })
                    })
                })
            })
        }, _.getWinningBids = function (e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : P(),
                t = B(e);
            return n.filter(function (e) {
                return S()(t, e.adUnitCode)
            }).filter(function (e) {
                return 0 < e.cpm
            }).map(function (e) {
                return e.adUnitCode
            }).filter(v.uniques).map(function (t) {
                return n.filter(function (e) {
                    return e.adUnitCode === t ? e : null
                }).reduce(v.getHighestCpm)
            })
        }, _.setTargetingForAst = function (e) {
            var r = _.getAllTargeting(e);
            try {
                _.resetPresetTargetingAST(e)
            } catch (e) {
                c.logError("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach(function (n) {
                return Object.keys(r[n]).forEach(function (e) {
                    if (c.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), c.isStr(r[n][e]) || c.isArray(r[n][e])) {
                        var t = {};
                        e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
                            overrideKeyValue: !0
                        })
                    }
                })
            })
        }, _.isApntagDefined = function () {
            if (window.apntag && c.isFn(window.apntag.setKeywords)) return !0
        }, _);

        function U(e, t) {
            return e.adserverTargeting && t && (c.isArray(t) && S()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
        }

        function B(e) {
            return "string" == typeof e ? [e] : c.isArray(e) ? e : d.getAdUnitCodes() || []
        }

        function P() {
            var e = d.getBidsReceived();
            return h.b.getConfig("useBidCache") || (e = e.filter(function (e) {
                return f[e.adUnitCode] === e.auctionId
            })), w(e = e.filter(function (e) {
                return Object(v.deepAccess)(e, "video.context") !== o.a
            }).filter(function (e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(s).filter(u), v.getOldestHighestCpmBid)
        }

        function R() {
            return d.getStandardBidderAdServerTargeting().map(function (e) {
                return e.key
            }).concat(j).filter(v.uniques)
        }

        function x(r, i, e, t) {
            return Object.keys(i.adserverTargeting).filter(p()).forEach(function (e) {
                var t, n;
                r.length && r.filter((n = e, function (e) {
                    return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                })).forEach((t = e, function (e) {
                    c.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(v.uniques), delete i.adserverTargeting[t]
                }))
            }), r.push(i), r
        }

        function p() {
            var t = R().concat(m.a);
            return function (e) {
                return -1 === t.indexOf(e)
            }
        }

        function k(t) {
            return E({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(p()).map(function (e) {
                return E({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }

        function D(t, e) {
            return e.map(function (e) {
                return E({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
            })
        }
    },
    37: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    38: function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    },
    39: function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    4: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        }), t.b = i;
        var l = n(3);

        function p() {
            return (p = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var y = n(0),
            b = 4,
            r = i();

        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function (e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c = "object" === g(t) && null !== t ? t : {
                        success: function () {
                            y.logMessage("xhr success")
                        },
                        error: function (e) {
                            y.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function () {
                            if (i.readyState === b) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i)
                            }
                        }, l.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function () {
                            y.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = y.parseUrl(e, r);
                        p(u.search, n), e = y.buildUrl(u)
                    }
                    i.open(o, e, !0), l.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), y._each(r.customHeaders, function (e, t) {
                        i.setRequestHeader(t, e)
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    y.logError("xhr construction", e)
                }
            }
        }
    },
    40: function (e, t, n) {
        var r = n(47),
            i = Math.min;
        e.exports = function (e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    41: function (e, t) {
        e.exports = function () {}
    },
    411: function (e, t, n) {
        n(412), e.exports = n(17).Number.isInteger
    },
    412: function (e, t, n) {
        var r = n(16);
        r(r.S, "Number", {
            isInteger: n(413)
        })
    },
    413: function (e, t, n) {
        var r = n(18),
            i = Math.floor;
        e.exports = function (e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    },
    42: function (e, t, n) {
        var l = n(27),
            p = n(72),
            g = n(73),
            y = n(30),
            b = n(40),
            v = n(74),
            h = {},
            m = {};
        (t = e.exports = function (e, t, n, r, i) {
            var o, a, c, u, s = i ? function () {
                    return e
                } : v(e),
                d = l(n, r, t ? 2 : 1),
                f = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (g(s)) {
                for (o = b(e.length); f < o; f++)
                    if ((u = t ? d(y(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u
            } else
                for (c = s.call(e); !(a = c.next()).done;)
                    if ((u = p(c, d, a.value, t)) === h || u === m) return u
        }).BREAK = h, t.RETURN = m
    },
    43: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return d
        }), n.d(t, "b", function () {
            return h
        });
        var r = n(12),
            b = n.n(r),
            i = n(0),
            v = 2,
            o = {
                buckets: [{
                    max: 5,
                    increment: .5
                }]
            },
            a = {
                buckets: [{
                    max: 20,
                    increment: .1
                }]
            },
            c = {
                buckets: [{
                    max: 20,
                    increment: .01
                }]
            },
            u = {
                buckets: [{
                    max: 3,
                    increment: .01
                }, {
                    max: 8,
                    increment: .05
                }, {
                    max: 20,
                    increment: .5
                }]
            },
            s = {
                buckets: [{
                    max: 5,
                    increment: .05
                }, {
                    max: 10,
                    increment: .1
                }, {
                    max: 20,
                    increment: .5
                }]
            };

        function d(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : f(e, o, n),
                med: "" === r ? "" : f(e, a, n),
                high: "" === r ? "" : f(e, c, n),
                auto: "" === r ? "" : f(e, s, n),
                dense: "" === r ? "" : f(e, u, n),
                custom: "" === r ? "" : f(e, t, n)
            }
        }

        function f(n, e, r) {
            var i = "";
            if (!h(e)) return i;
            var t, o, a, c, u, s, d, f, l, p = e.buckets.reduce(function (e, t) {
                    return e.max > t.max ? e : t
                }, {
                    max: 0
                }),
                g = 0,
                y = b()(e.buckets, function (e) {
                    if (n > p.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = v), i = (e.max * r).toFixed(t)
                    } else {
                        if (n <= e.max * r && g * r <= n) return e.min = g, e;
                        g = e.max
                    }
                });
            return y && (t = n, a = r, c = void 0 !== (o = y).precision ? o.precision : v, u = o.increment * a, s = o.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, i = (l = Number(l.toFixed(10))).toFixed(c)), i
        }

        function h(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function (e) {
                e.max && e.increment || (t = !1)
            }), t
        }
    },
    44: function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    45: function (e, t, n) {
        var m = n(27),
            S = n(61),
            A = n(46),
            E = n(40),
            r = n(91);
        e.exports = function (f, e) {
            var l = 1 == f,
                p = 2 == f,
                g = 3 == f,
                y = 4 == f,
                b = 6 == f,
                v = 5 == f || b,
                h = e || r;
            return function (e, t, n) {
                for (var r, i, o = A(e), a = S(o), c = m(t, n, 3), u = E(a.length), s = 0, d = l ? h(e, u) : p ? h(e, 0) : void 0; s < u; s++)
                    if ((v || s in a) && (i = c(r = a[s], s, o), f))
                        if (l) d[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        d.push(r)
                } else if (y) return !1;
                return b ? -1 : g || y ? y : d
            }
        }
    },
    46: function (e, t, n) {
        var r = n(39);
        e.exports = function (e) {
            return Object(r(e))
        }
    },
    47: function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    48: function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    49: function (e, t, n) {
        var r = n(61),
            i = n(39);
        e.exports = function (e) {
            return r(i(e))
        }
    },
    5: function (e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                BEFORE_REQUEST_BIDS: "beforeRequestBids",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered",
                BID_REJECTED: "bidRejected"
            },
            SUBMODULES_THAT_ALWAYS_REFRESH_ID: {
                parrableId: !0
            }
        }
    },
    50: function (e, t, n) {
        "use strict";

        function m() {
            return this
        }
        var S = n(63),
            A = n(16),
            E = n(98),
            O = n(24),
            T = n(32),
            I = n(99),
            j = n(52),
            w = n(104),
            C = n(14)("iterator"),
            _ = !([].keys && "next" in [].keys()),
            U = "values";
        e.exports = function (e, t, n, r, i, o, a) {
            I(n, t, r);

            function c(e) {
                if (!_ && e in g) return g[e];
                switch (e) {
                    case "keys":
                    case U:
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }
            var u, s, d, f = t + " Iterator",
                l = i == U,
                p = !1,
                g = e.prototype,
                y = g[C] || g["@@iterator"] || i && g[i],
                b = y || c(i),
                v = i ? l ? c("entries") : b : void 0,
                h = "Array" == t && g.entries || y;
            if (h && (d = w(h.call(new e))) !== Object.prototype && d.next && (j(d, f, !0), S || "function" == typeof d[C] || O(d, C, m)), l && y && y.name !== U && (p = !0, b = function () {
                    return y.call(this)
                }), S && !a || !_ && !p && g[C] || O(g, C, b), T[t] = b, T[f] = m, i)
                if (u = {
                        values: l ? b : c(U),
                        keys: o ? b : c("keys"),
                        entries: v
                    }, a)
                    for (s in u) s in g || E(g, s, u[s]);
                else A(A.P + A.F * (_ || p), t, u);
            return u
        }
    },
    51: function (e, t, n) {
        var r = n(62)("keys"),
            i = n(48);
        e.exports = function (e) {
            return r[e] || (r[e] = i(e))
        }
    },
    52: function (e, t, n) {
        var r = n(20).f,
            i = n(31),
            o = n(14)("toStringTag");
        e.exports = function (e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    53: function (e, t, n) {
        "use strict";
        var r = n(128);
        e.exports = Function.prototype.bind || r
    },
    54: function (e, t, n) {
        "use strict";

        function o(e, t, n, r) {
            var i;
            t in e && ("function" != typeof (i = r) || "[object Function]" !== u.call(i) || !r()) || (f ? d(e, t, {
                configurable: !0,
                enumerable: !1,
                value: n,
                writable: !0
            }) : e[t] = n)
        }

        function r(e, t) {
            var n = 2 < arguments.length ? arguments[2] : {},
                r = a(t);
            c && (r = s.call(r, Object.getOwnPropertySymbols(t)));
            for (var i = 0; i < r.length; i += 1) o(e, r[i], t[r[i]], n[r[i]])
        }
        var a = n(79),
            c = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
            u = Object.prototype.toString,
            s = Array.prototype.concat,
            d = Object.defineProperty,
            f = d && function () {
                var e = {};
                try {
                    for (var t in d(e, "x", {
                            enumerable: !1,
                            value: e
                        }), e) return !1;
                    return e.x === e
                } catch (e) {
                    return !1
                }
            }();
        r.supportsDescriptors = !!f, e.exports = r
    },
    55: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var r = n(0),
            c = {};

        function i(e, t, n) {
            var r, i, o, a = (i = n, o = c[r = e] = c[r] || {
                bidders: {}
            }, i ? o.bidders[i] = o.bidders[i] || {} : o);
            return a[t] = (a[t] || 0) + 1, a[t]
        }
        var o = {
            incrementRequestsCounter: function (e) {
                return i(e, "requestsCounter")
            },
            incrementBidderRequestsCounter: function (e, t) {
                return i(e, "requestsCounter", t)
            },
            incrementBidderWinsCounter: function (e, t) {
                return i(e, "winsCounter", t)
            },
            getRequestsCounter: function (e) {
                return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0
            },
            getBidderRequestsCounter: function (e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0
            },
            getBidderWinsCounter: function (e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0
            }
        }
    },
    56: function (e, t, n) {
        n(190), e.exports = n(17).Array.findIndex
    },
    57: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "adUnitSetupChecks", function () {
            return z
        }), n.d(t, "checkAdUnitSetup", function () {
            return V
        }), t.executeStorageCallbacks = K;
        var r = n(15),
            i = n(0),
            o = n(195),
            a = n(33),
            d = n(3),
            v = n(23),
            f = n(36),
            c = n(13),
            u = n(196),
            s = n(11),
            l = n.n(s),
            p = n(55),
            h = n(10),
            g = n(22),
            y = n(9);

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function m() {
            return (m = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var S = Object(r.a)(),
            A = n(5),
            E = n(0),
            O = n(7).default,
            T = n(8),
            I = a.a.triggerUserSyncs,
            j = A.EVENTS,
            w = j.ADD_AD_UNITS,
            C = j.BID_WON,
            _ = j.REQUEST_BIDS,
            U = j.SET_TARGETING,
            B = j.AD_RENDER_FAILED,
            P = A.AD_RENDER_FAILED_REASON,
            R = P.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            x = P.NO_AD,
            k = P.EXCEPTION,
            D = P.CANNOT_FIND_AD,
            N = P.MISSING_DOC_OR_ADID,
            M = {
                bidWon: function (e) {
                    var t = v.a.getBidsRequested().map(function (e) {
                        return e.bids.map(function (e) {
                            return e.adUnitCode
                        })
                    }).reduce(i.flatten).filter(i.uniques);
                    return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.')
                }
            };

        function q(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }

        function G(e, t) {
            var n = [];
            return E.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function (e) {
                return Object(i.isArrayOfNums)(e, 2)
            }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n
        }

        function F(e) {
            var t = e.mediaTypes.banner,
                n = G(t.sizes);
            0 < n.length ? (t.sizes = n, e.sizes = n) : (E.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
        }

        function W(e) {
            var t = e.mediaTypes.video,
                n = "number" == typeof t.playerSize[0] ? 2 : 1,
                r = G(t.playerSize, n);
            0 < r.length ? (2 == n && E.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), t.playerSize = r, e.sizes = r) : (E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize)
        }

        function L(e) {
            var t = e.mediaTypes.native;
            t.image && t.image.sizes && !Array.isArray(t.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), t.image && t.image.aspect_ratios && !Array.isArray(t.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), t.icon && t.icon.sizes && !Array.isArray(t.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
        }
        Object(u.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v3.17.0", E.logInfo("Prebid.js v3.17.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var z = {
                validateBannerMediaType: F,
                validateVideoMediaType: W,
                validateNativeMediaType: L,
                validateSizes: G
            },
            V = Object(c.b)("sync", function (e) {
                return e.filter(function (e) {
                    var t = e.mediaTypes;
                    if (!t || 0 === Object.keys(t).length) return E.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")), !1;
                    t.banner && F(e), !t.video || t.video.playerSize && W(e);
                    return t.native && L(e), !0
                })
            }, "checkAdUnitSetup");

        function H(e) {
            var n = v.a[e]().filter(E.bind.call(i.adUnitsFilter, this, v.a.getAdUnitCodes())),
                r = v.a.getLastAuctionId();
            return n.map(function (e) {
                return e.adUnitCode
            }).filter(i.uniques).map(function (t) {
                return n.filter(function (e) {
                    return e.auctionId === r && e.adUnitCode === t
                })
            }).filter(function (e) {
                return e && e[0] && e[0].adUnitCode
            }).map(function (e) {
                return t = {}, n = e[0].adUnitCode, r = {
                    bids: e
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t;
                var t, n, r
            }).reduce(function (e, t) {
                return m(e, t)
            }, {})
        }

        function J(e) {
            var t = e.reason,
                n = e.message,
                r = e.bid,
                i = e.id,
                o = {
                    reason: t,
                    message: n
                };
            r && (o.bid = r), i && (o.adId = i), E.logError(n), T.emit(B, o)
        }

        function K(e, t) {
            ! function (e) {
                var t;
                for (; t = e.shift();) t()
            }(y.c), e.call(this, t)
        }

        function Y(e) {
            e.forEach(function (e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    E.logError("Error processing command :", "prebid.js", e)
                }
            })
        }
        S.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return E.transformAdServerTargetingObj(t)
            }
            E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function (e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function (e) {
            return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.a.getAllTargeting(e)
        }, S.getNoBids = function () {
            return E.logInfo("Invoking pbjs.getNoBids", arguments), H("getNoBids")
        }, S.getBidResponses = function () {
            return E.logInfo("Invoking pbjs.getBidResponses", arguments), H("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function (t) {
            return {
                bids: v.a.getBidsReceived().filter(function (e) {
                    return e.adUnitCode === t
                })
            }
        }, S.setTargetingForGPTAsync = function (e, t) {
            if (E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)()) {
                var n = f.a.getAllTargeting(e);
                f.a.resetPresetTargeting(e, t), f.a.setTargetingForGPT(n, t), Object.keys(n).forEach(function (t) {
                    Object.keys(n[t]).forEach(function (e) {
                        "hb_adid" === e && v.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET)
                    })
                }), T.emit(U, n)
            } else E.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function (e) {
            E.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.a.isApntagDefined() ? (f.a.setTargetingForAst(e), T.emit(U, f.a.getAllTargeting())) : E.logError("window.apntag is not defined on the page")
        }, S.renderAd = function (e, t) {
            if (E.logInfo("Invoking pbjs.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = v.a.findBidByAdId(t);
                if (n) {
                    n.ad = E.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = E.replaceAuctionPrice(n.adUrl, n.cpm), v.a.addWinningBid(n), T.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        c = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (E.insertElement(s, e, "body"), Object(h.c)(u)) Object(h.b)(u, n);
                    else if (e === document && !E.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        J({
                            reason: R,
                            message: d,
                            bid: n,
                            id: t
                        })
                    } else if (o) {
                        if (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/")) {
                            var f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                            f && parseInt(f, 10) < 67 && e.open("text/html", "replace")
                        }
                        e.write(o), e.close(), q(e, i, r), E.callBurl(n)
                    } else if (c) {
                        var l = E.createInvisibleIframe();
                        l.height = r, l.width = i, l.style.display = "inline", l.style.overflow = "hidden", l.src = c, E.insertElement(l, e, "body"), q(e, i, r), E.callBurl(n)
                    } else {
                        var p = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        J({
                            reason: x,
                            message: p,
                            bid: n,
                            id: t
                        })
                    }
                } else {
                    var g = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    J({
                        reason: D,
                        message: g,
                        id: t
                    })
                }
            } catch (e) {
                var y = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                J({
                    reason: k,
                    message: y,
                    id: t
                })
            } else {
                var b = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                J({
                    reason: N,
                    message: b,
                    id: t
                })
            }
        }, S.removeAdUnit = function (e) {
            (E.logInfo("Invoking pbjs.removeAdUnit", arguments), e) ? (E.isArray(e) ? e : [e]).forEach(function (e) {
                for (var t = S.adUnits.length - 1; 0 <= t; t--) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            }): S.adUnits = []
        }, S.requestBids = Object(c.b)("async", function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            T.emit(_);
            var c = n || d.b.getConfig("bidderTimeout");
            if (r = r || S.adUnits, E.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function (e) {
                    return l()(i, e.code)
                }) : i = r && r.map(function (e) {
                    return e.code
                }), (r = V(r)).forEach(function (i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map(function (e) {
                            return e.bidder
                        }),
                        a = O.bidderRegistry,
                        t = d.b.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter(function (e) {
                            return !l()(n, e)
                        }) : e;
                    i.transactionId = E.generateUUID(), r.forEach(function (t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some(function (e) {
                            return l()(r, e)
                        }) ? p.a.incrementBidderRequestsCounter(i.code, t) : (E.logWarn(E.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function (e) {
                            return e.bidder !== t
                        }))
                    }), p.a.incrementRequestsCounter(i.code)
                }), r && 0 !== r.length) {
                var u = v.a.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: c,
                        labels: o,
                        auctionId: a
                    }),
                    s = r.length;
                return 15 < s && E.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach(function (e) {
                    return f.a.setLatestAuctionForAdUnit(e, u.getAuctionId())
                }), u.callBids(), u
            }
            if (E.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                E.logError("Error executing bidsBackHandler", null, e)
            }
        }), S.requestBids.before(K, 49), S.addAdUnits = function (e) {
            E.logInfo("Invoking pbjs.addAdUnits", arguments), E.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === b(e) && S.adUnits.push(e), T.emit(w)
        }, S.onEvent = function (e, t, n) {
            E.logInfo("Invoking pbjs.onEvent", arguments), E.isFn(t) ? !n || M[e].call(null, n) ? T.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function (e, t, n) {
            E.logInfo("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || T.off(e, t, n)
        }, S.registerBidAdapter = function (e, t) {
            E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                O.registerBidAdapter(e(), t)
            } catch (e) {
                E.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function (e) {
            E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                O.registerAnalyticsAdapter(e)
            } catch (e) {
                E.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function (e) {
            return E.logInfo("Invoking pbjs.createBid", arguments), Object(g.a)(e)
        }, S.enableAnalytics = function (e) {
            e && !E.isEmpty(e) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", e), O.enableAnalytics(e)) : E.logError("pbjs.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function (e, t) {
            E.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? O.aliasBidAdapter(e, t) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, S.getAllWinningBids = function () {
            return v.a.getAllWinningBids()
        }, S.getAllPrebidWinningBids = function () {
            return v.a.getBidsReceived().filter(function (e) {
                return e.status === A.BID_STATUS.BID_TARGETING_SET
            })
        }, S.getHighestCpmBids = function (e) {
            return f.a.getWinningBids(e)
        }, S.markWinningBidAsUsed = function (t) {
            var e = [];
            t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter(function (e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = f.a.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter(function (e) {
                return e.adId === t.adId
            }) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = A.BID_STATUS.RENDERED)
        }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.setBidderConfig = d.b.setBidderConfig, S.que.push(function () {
            return Object(o.a)()
        }), S.cmd.push = function (e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                E.logError("Error processing command :", e.message, e.stack)
            } else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function () {
            c.b.ready(), Y(S.que), Y(S.cmd)
        }, t.default = S
    },
    58: function (e, t, n) {
        "use strict";
        t.a = function (t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function (e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            })
        };
        var r = n(15),
            i = n(0),
            o = Object(r.a)()
    },
    59: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    60: function (e, t, n) {
        var r = n(18),
            i = n(19).document,
            o = r(i) && r(i.createElement);
        e.exports = function (e) {
            return o ? i.createElement(e) : {}
        }
    },
    61: function (e, t, n) {
        var r = n(38);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    62: function (e, t, n) {
        var r = n(17),
            i = n(19),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function (e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(63) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    63: function (e, t) {
        e.exports = !0
    },
    64: function (e, t, n) {
        var u = n(49),
            s = n(40),
            d = n(95);
        e.exports = function (c) {
            return function (e, t, n) {
                var r, i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1
            }
        }
    },
    65: function (e, t, n) {
        n(96), n(66), n(105), n(107), n(111), n(114), n(116), e.exports = n(17).Set
    },
    66: function (e, t, n) {
        "use strict";
        var r = n(97)(!0);
        n(50)(String, "String", function (e) {
            this._t = String(e), this._i = 0
        }, function () {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    },
    67: function (e, t, r) {
        function i() {}
        var o = r(30),
            a = r(100),
            c = r(68),
            u = r(51)("IE_PROTO"),
            s = "prototype",
            d = function () {
                var e, t = r(60)("iframe"),
                    n = c.length;
                for (t.style.display = "none", r(103).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[s][c[n]];
                return d()
            };
        e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (i[s] = o(e), n = new i, i[s] = null, n[u] = e) : n = d(), void 0 === t ? n : a(n, t)
        }
    },
    68: function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    69: function (e, t) {
        e.exports = function (e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    },
    7: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "gdprDataHandler", function () {
            return R
        }), n.d(t, "uspDataHandler", function () {
            return x
        }), t.setS2STestingModule = function (e) {
            j = e
        };
        var A = n(0),
            p = n(84),
            g = n(26),
            d = n(1),
            h = n(4),
            E = n(3),
            r = n(13),
            i = n(11),
            O = n.n(i),
            o = n(12),
            T = n.n(o),
            y = n(55),
            I = n(21);

        function m(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function b() {
            return (b = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var j, w = n(0),
            C = n(5),
            _ = n(8),
            f = {},
            U = f.bidderRegistry = {},
            l = f.aliasRegistry = {},
            B = {};
        E.b.getConfig("s2sConfig", function (e) {
            B = e.s2sConfig
        });
        var a = {};
        var P = Object(r.b)("sync", function (e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce(function (e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && w.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : w.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function (e) {
                    return e.bidder === i
                }).reduce(function (e, t) {
                    var n = c.nativeParams || w.deepAccess(c, "mediaTypes.native");
                    n && (t = b({}, t, {
                        nativeParams: Object(g.g)(n)
                    })), t = b({}, t, Object(A.getDefinedParams)(c, ["fpd", "mediaType", "renderer", "storedAuctionResponse"]));
                    var r = Object(p.b)(Object(p.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && w.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : w.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), w.isValidMediaTypes(o) ? t = b({}, t, {
                        mediaTypes: o
                    }) : w.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(b({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: w.deepAccess(o, "banner.sizes") || w.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || w.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: y.a.getRequestsCounter(c.code),
                        bidderRequestsCount: y.a.getBidderRequestsCounter(c.code, t.bidder),
                        bidderWinsCount: y.a.getBidderWinsCounter(c.code, t.bidder)
                    })), e
                }, [])), e
            }, []).reduce(A.flatten, []).filter(function (e) {
                return "" !== e
            })
        }, "getBids");
        var R = {
                consentData: null,
                setConsentData: function (e) {
                    R.consentData = e
                },
                getConsentData: function () {
                    return R.consentData
                }
            },
            x = {
                consentData: null,
                setConsentData: function (e) {
                    x.consentData = e
                },
                getConsentData: function () {
                    return x.consentData
                }
            };

        function k() {
            return B && B.enabled && B.testing && j
        }

        function c(t, n, e) {
            try {
                var r = U[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (w.logInfo("Invoking ".concat(t, ".").concat(n)), E.b.runWithBidder(t, A.bind.call(r[n], r, e)))
            } catch (e) {
                w.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        f.makeBidRequests = Object(r.b)("sync", function (e, i, o, a, c) {
            _.emit(C.EVENTS.BEFORE_REQUEST_BIDS, e);
            var u = [],
                t = Object(A.getBidderCodes)(e);
            E.b.getConfig("bidderSequence") === E.a && (t = Object(A.shuffle)(t));
            var n, r, s, d, f = Object(I.b)(),
                l = t,
                p = [];
            if (B.enabled) {
                if (k()) {
                    var g = j.getSourceBidderMap(e);
                    p = g[j.CLIENT]
                }
                var y = B.bidders;
                l = t.filter(function (e) {
                    return !O()(y, e) || O()(p, e)
                });
                Boolean(k() && B.testServerOnly) && (d = e, Boolean(T()(d, function (e) {
                    return T()(e.bids, function (e) {
                        return (e.bidSource || B.bidderControl && B.bidderControl[e.bidder]) && e.finalSource === j.SERVER
                    })
                }))) && (l.length = 0);
                var b = (n = e, r = B.bidders, (s = w.deepClone(n)).forEach(function (e) {
                        e.bids = e.bids.filter(function (e) {
                            return O()(r, e.bidder) && (!k() || e.finalSource !== j.CLIENT)
                        }).map(function (e) {
                            return e.bid_id = w.getUniqueIdentifierStr(), e
                        })
                    }), s = s.filter(function (e) {
                        return 0 !== e.bids.length
                    })),
                    v = w.generateUUID();
                y.forEach(function (e) {
                    var t = w.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: v,
                            bids: P({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: w.deepClone(b),
                                labels: c,
                                src: C.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: B.timeout,
                            src: C.S2S.SRC,
                            refererInfo: f
                        };
                    0 !== n.bids.length && u.push(n)
                }), b.forEach(function (e) {
                    var t = e.bids.filter(function (t) {
                        return T()(u, function (e) {
                            return T()(e.bids, function (e) {
                                return e.bidId === t.bid_id
                            })
                        })
                    });
                    e.bids = t
                }), u.forEach(function (e) {
                    e.adUnitsS2SCopy = b.filter(function (e) {
                        return 0 < e.bids.length
                    })
                })
            }
            var h, m, S = (h = e, (m = w.deepClone(h)).forEach(function (e) {
                e.bids = e.bids.filter(function (e) {
                    return !k() || e.finalSource !== j.SERVER
                })
            }), m = m.filter(function (e) {
                return 0 !== e.bids.length
            }));
            return l.forEach(function (e) {
                var t = w.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: P({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: w.deepClone(S),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: f
                    },
                    r = U[e];
                r || w.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            }), R.getConsentData() && u.forEach(function (e) {
                e.gdprConsent = R.getConsentData()
            }), x.getConsentData() && u.forEach(function (e) {
                e.uspConsent = x.getConsentData()
            }), u
        }, "makeBidRequests"), f.callBids = function (e, t, i, o, a, c, u) {
            if (t.length) {
                var n = m(t.reduce(function (e, t) {
                        return e[Number(void 0 !== t.src && t.src === C.S2S.SRC)].push(t), e
                    }, [
                        [],
                        []
                    ]), 2),
                    r = n[0],
                    s = n[1];
                if (s.length) {
                    var d = Object(h.b)(c, a ? {
                            request: a.request.bind(null, "s2s"),
                            done: a.done
                        } : void 0),
                        f = B.bidders,
                        l = U[B.adapter],
                        p = s[0].tid,
                        g = s[0].adUnitsS2SCopy;
                    if (l) {
                        var y = {
                            tid: p,
                            ad_units: g
                        };
                        if (y.ad_units.length) {
                            var b = s.map(function (e) {
                                    return e.start = Object(A.timestamp)(), o.bind(e)
                                }),
                                v = y.ad_units.reduce(function (e, t) {
                                    return e.concat((t.bids || []).reduce(function (e, t) {
                                        return e.concat(t.bidder)
                                    }, []))
                                }, []);
                            w.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function (e) {
                                return O()(v, e)
                            }).join(","))), s.forEach(function (e) {
                                _.emit(C.EVENTS.BID_REQUESTED, e)
                            }), l.callBids(y, s, function (e, t) {
                                var n = Object(A.getBidderRequest)(s, t.bidderCode, e);
                                n && i.call(n, e, t)
                            }, function () {
                                return b.forEach(function (e) {
                                    return e()
                                })
                            }, d)
                        }
                    } else w.logError("missing " + B.adapter)
                }
                r.forEach(function (t) {
                    t.start = Object(A.timestamp)();
                    var e = U[t.bidderCode];
                    w.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)), _.emit(C.EVENTS.BID_REQUESTED, t);
                    var n = Object(h.b)(c, a ? {
                            request: a.request.bind(null, t.bidderCode),
                            done: a.done
                        } : void 0),
                        r = o.bind(t);
                    try {
                        E.b.runWithBidder(t.bidderCode, A.bind.call(e.callBids, e, t, i.bind(t), r, n, u, E.b.callbackWithBidder(t.bidderCode)))
                    } catch (e) {
                        w.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                            e: e,
                            bidRequest: t
                        }), r()
                    }
                })
            } else w.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, f.videoAdapters = [], f.registerBidAdapter = function (e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (U[t] = e, O()(r, "video") && f.videoAdapters.push(t), O()(r, "native") && g.e.push(t)) : w.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : w.logError("bidAdaptor or bidderCode not specified")
        }, f.aliasBidAdapter = function (t, e) {
            var n, r;
            if (void 0 === U[e]) {
                var i = U[t];
                if (void 0 === i) {
                    var o = E.b.getConfig("s2sConfig"),
                        a = o && o.bidders;
                    a && O()(a, e) ? l[e] = t : w.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var c, u = (n = t, r = [], O()(f.videoAdapters, n) && r.push("video"), O()(g.e, n) && r.push("native"), r);
                    if (i.constructor.prototype != Object.prototype)(c = new i.constructor).setBidderCode(e);
                    else {
                        var s = i.getSpec();
                        c = Object(d.newBidder)(b({}, s, {
                            code: e
                        })), l[e] = t
                    }
                    f.registerBidAdapter(c, e, {
                        supportedMediaTypes: u
                    })
                } catch (e) {
                    w.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else w.logMessage('alias name "' + e + '" has been already specified.')
        }, f.registerAnalyticsAdapter = function (e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, a[n] = t) : w.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : w.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, f.enableAnalytics = function (e) {
            w.isArray(e) || (e = [e]), w._each(e, function (e) {
                var t = a[e.provider];
                t ? t.enableAnalytics(e) : w.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            })
        }, f.getBidAdapter = function (e) {
            return U[e]
        }, f.callTimedOutBidders = function (t, n, r) {
            n = n.map(function (e) {
                return e.params = w.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            }), n = w.groupBy(n, "bidder"), Object.keys(n).forEach(function (e) {
                c(e, "onTimeout", n[e])
            })
        }, f.callBidWonBidder = function (e, t, n) {
            t.params = w.getUserConfiguredParams(n, t.adUnitCode, t.bidder), y.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), c(e, "onBidWon", t)
        }, f.callSetTargetingBidder = function (e, t) {
            c(e, "onSetTargeting", t)
        }, t.default = f
    },
    70: function (e, t, n) {
        var i = n(24);
        e.exports = function (e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
            return e
        }
    },
    71: function (e, t) {
        e.exports = function (e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    },
    72: function (e, t, n) {
        var o = n(30);
        e.exports = function (t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    73: function (e, t, n) {
        var r = n(32),
            i = n(14)("iterator"),
            o = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    },
    739: function (e, t, n) {
        e.exports = n(57)
    },
    74: function (e, t, n) {
        var r = n(75),
            i = n(14)("iterator"),
            o = n(32);
        e.exports = n(17).getIteratorMethod = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    75: function (e, t, n) {
        var i = n(38),
            o = n(14)("toStringTag"),
            a = "Arguments" == i(function () {
                return arguments
            }());
        e.exports = function (e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    76: function (e, t, n) {
        function r(e) {
            c(e, i, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        }
        var i = n(48)("meta"),
            o = n(18),
            a = n(31),
            c = n(20).f,
            u = 0,
            s = Object.isExtensible || function () {
                return !0
            },
            d = !n(37)(function () {
                return s(Object.preventExtensions({}))
            }),
            f = e.exports = {
                KEY: i,
                NEED: !1,
                fastKey: function (e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, i)) {
                        if (!s(e)) return "F";
                        if (!t) return "E";
                        r(e)
                    }
                    return e[i].i
                },
                getWeak: function (e, t) {
                    if (!a(e, i)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        r(e)
                    }
                    return e[i].w
                },
                onFreeze: function (e) {
                    return d && f.NEED && s(e) && !a(e, i) && r(e), e
                }
            }
    },
    77: function (e, t, n) {
        var r = n(18);
        e.exports = function (e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    },
    78: function (e, t, n) {
        n(66), n(118), e.exports = n(17).Array.from
    },
    79: function (e, t, n) {
        "use strict";
        var r = Array.prototype.slice,
            i = n(80),
            o = Object.keys,
            a = o ? function (e) {
                return o(e)
            } : n(123),
            c = Object.keys;
        a.shim = function () {
            Object.keys ? function () {
                var e = Object.keys(arguments);
                return e && e.length === arguments.length
            }(1, 2) || (Object.keys = function (e) {
                return i(e) ? c(r.call(e)) : c(e)
            }) : Object.keys = a;
            return Object.keys || a
        }, e.exports = a
    },
    8: function (e, t, n) {
        function r() {
            return (r = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, i, u = n(0),
            o = n(5),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, function (e) {
                return e
            }),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (c = {}, (i = {}).on = function (e, t, n) {
            if (i = e, u.contains(d, i)) {
                var r = c[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), c[e] = r
            } else u.logError("Wrong event name : " + e + " Valid event names :" + d);
            var i
        }, i.emit = function (e) {
            ! function (e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = c[e] || {
                        que: []
                    },
                    o = u._map(i, function (e, t) {
                        return t
                    }),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function (e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                })
            }(e, a.call(arguments, 1))
        }, i.off = function (e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function (e) {
                var t = i[r].que;
                e === n && t.splice(t.indexOf(e), 1)
            }) : u._each(i.que, function (e) {
                var t = i.que;
                e === n && t.splice(t.indexOf(e), 1)
            }), c[e] = i)
        }, i.get = function () {
            return c
        }, i.getEvents = function () {
            var n = [];
            return u._each(l, function (e) {
                var t = r({}, e);
                n.push(t)
            }), n
        }, i)
    },
    80: function (e, t, n) {
        "use strict";
        var r = Object.prototype.toString;
        e.exports = function (e) {
            var t = r.call(e),
                n = "[object Arguments]" === t;
            return n = n || "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && 0 <= e.length && "[object Function]" === r.call(e.callee)
        }
    },
    81: function (e, t, n) {
        "use strict";
        var r = Object,
            i = TypeError;
        e.exports = function () {
            if (null != this && this !== r(this)) throw new i("RegExp.prototype.flags getter called on non-object");
            var e = "";
            return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.dotAll && (e += "s"), this.unicode && (e += "u"), this.sticky && (e += "y"), e
        }
    },
    82: function (e, t, n) {
        "use strict";
        var r = n(81),
            i = n(54).supportsDescriptors,
            o = Object.getOwnPropertyDescriptor,
            a = TypeError;
        e.exports = function () {
            if (!i) throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
            if ("gim" === /a/gim.flags) {
                var e = o(RegExp.prototype, "flags");
                if (e && "function" == typeof e.get && "boolean" == typeof /a/.dotAll) return e.get
            }
            return r
        }
    },
    83: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t = e;
            return {
                callBids: function () {},
                setBidderCode: function (e) {
                    t = e
                },
                getBidderCode: function () {
                    return t
                }
            }
        }
    },
    84: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.c = function (e) {
            var t = b(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : y);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.b = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                c = 1 < arguments.length ? arguments[1] : void 0,
                u = 2 < arguments.length ? arguments[2] : void 0,
                s = b(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : y);
            c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(p.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function (e) {
                return s.sizesSupported[e]
            }));
            var f = Object.keys(c),
                l = {
                    active: f.every(function (e) {
                        return "banner" !== e
                    }) || f.some(function (e) {
                        return "banner" === e
                    }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function (e) {
                        return s.labels[e]
                    }) || n.some(function (e) {
                        return g()(a, e)
                    })) || i && n.reduce(function (e, t) {
                        return e ? s.labels[t] || g()(a, t) : e
                    }, !0)),
                    mediaTypes: c
                };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        };
        var r = n(3),
            p = n(0),
            i = n(11),
            g = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var y = [];

        function b(e) {
            return e.reduce(function (n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    if ("" === r.mediaQuery) t = !0;
                    else try {
                        t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function (t) {
                        return (r[t] || []).forEach(function (e) {
                            return n[t][e] = !0
                        })
                    }))
                } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.b.getConfig("sizeConfig", function (e) {
            return t = e.sizeConfig, void(y = t);
            var t
        })
    },
    85: function (e, t, n) {
        "use strict";
        t.b = function (e, t) {
            var n = {
                puts: e.map(i)
            };
            Object(r.a)(o.b.getConfig("cache.url"), function (n) {
                return {
                    success: function (e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function (e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                    }
                }
            }(t), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }, t.a = function (e) {
            return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e)
        };
        var r = n(4),
            o = n(3);

        function i(e) {
            var t, n, r, i = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return o.b.getConfig("cache.vasttrack") && (i.bidder = e.bidder, i.bidid = e.requestId), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey), i
        }
    },
    88: function (e, t, n) {
        "use strict";
        var r = n(16),
            i = n(45)(5),
            o = !0;
        "find" in [] && Array(1).find(function () {
            o = !1
        }), r(r.P + r.F * o, "Array", {
            find: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(41)("find")
    },
    89: function (e, t, n) {
        e.exports = !n(25) && !n(37)(function () {
            return 7 != Object.defineProperty(n(60)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    9: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return f
        }), n.d(t, "d", function () {
            return l
        }), t.a = function (e) {
            return o({
                moduleName: e,
                moduleType: "core"
            })
        }, t.b = function (e, t) {
            return o({
                gvlid: e,
                moduleName: t
            })
        };
        var r = n(13),
            c = n(0),
            i = n(11),
            u = n.n(i),
            d = ["core", "prebid-module"],
            f = [];

        function o(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {},
                i = t.gvlid,
                o = t.moduleName,
                a = t.moduleType;

            function s(n) {
                if (u()(d, a)) {
                    return n({
                        valid: !0
                    })
                }
                var r;
                return l(i, o, {
                    hasEnforcementHook: !1
                }, function (e) {
                    if (e && e.hasEnforcementHook) r = n(e);
                    else {
                        var t = {
                            hasEnforcementHook: !1,
                            valid: c.hasDeviceAccess()
                        };
                        r = n(t)
                    }
                }), r
            }
            return {
                setCookie: function (i, o, a, c, u, t) {
                    function n(e) {
                        if (e && e.valid) {
                            var t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : "",
                                n = a && "" !== a ? " ;expires=".concat(a) : "",
                                r = null != c && "none" == c.toLowerCase() ? "; Secure" : "";
                            document.cookie = "".concat(i, "=").concat(encodeURIComponent(o)).concat(n, "; path=/").concat(t).concat(c ? "; SameSite=".concat(c) : "").concat(r)
                        }
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function () {
                        var e = s(n);
                        t(e)
                    })
                },
                getCookie: function (n, t) {
                    function r(e) {
                        if (e && e.valid) {
                            var t = window.document.cookie.match("(^|;)\\s*" + n + "\\s*=\\s*([^;]*)\\s*(;|$)");
                            return t ? decodeURIComponent(t[2]) : null
                        }
                        return null
                    }
                    if (!t || "function" != typeof t) return s(r);
                    f.push(function () {
                        var e = s(r);
                        t(e)
                    })
                },
                localStorageIsEnabled: function (t) {
                    function n(e) {
                        if (e && e.valid) try {
                            return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
                        } catch (e) {}
                        return !1
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function () {
                        var e = s(n);
                        t(e)
                    })
                },
                cookiesAreEnabled: function (t) {
                    function n(e) {
                        return !(!e || !e.valid) && (!!c.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 !== window.document.cookie.indexOf("prebid.cookieTest")))
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function () {
                        var e = s(n);
                        t(e)
                    })
                },
                setDataInLocalStorage: function (t, n, r) {
                    function i(e) {
                        e && e.valid && window.localStorage.setItem(t, n)
                    }
                    if (!r || "function" != typeof r) return s(i);
                    f.push(function () {
                        var e = s(i);
                        r(e)
                    })
                },
                getDataFromLocalStorage: function (t, n) {
                    function r(e) {
                        return e && e.valid ? window.localStorage.getItem(t) : null
                    }
                    if (!n || "function" != typeof n) return s(r);
                    f.push(function () {
                        var e = s(r);
                        n(e)
                    })
                },
                removeDataFromLocalStorage: function (t, n) {
                    function r(e) {
                        e && e.valid && window.localStorage.removeItem(t)
                    }
                    if (!n || "function" != typeof n) return s(r);
                    f.push(function () {
                        var e = s(r);
                        n(e)
                    })
                },
                hasLocalStorage: function (t) {
                    function n(e) {
                        if (e && e.valid) try {
                            return !!window.localStorage
                        } catch (e) {
                            c.logError("Local storage api disabled")
                        }
                        return !1
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function () {
                        var e = s(n);
                        t(e)
                    })
                },
                findSimilarCookies: function (o, t) {
                    function n(e) {
                        if (e && e.valid) {
                            var t = [];
                            if (c.hasDeviceAccess())
                                for (var n = document.cookie.split(";"); n.length;) {
                                    var r = n.pop(),
                                        i = r.indexOf("=");
                                    i = i < 0 ? r.length : i, 0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)))
                                }
                            return t
                        }
                    }
                    if (!t || "function" != typeof t) return s(n);
                    f.push(function () {
                        var e = s(n);
                        t(e)
                    })
                }
            }
        }
        var l = Object(r.b)("async", function (e, t, n, r) {
            r(n)
        }, "validateStorageEnforcement")
    },
    90: function (e, t, n) {
        var i = n(18);
        e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    91: function (e, t, n) {
        var r = n(92);
        e.exports = function (e, t) {
            return new(r(e))(t)
        }
    },
    92: function (e, t, n) {
        var r = n(18),
            i = n(93),
            o = n(14)("species");
        e.exports = function (e) {
            var t;
            return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    93: function (e, t, n) {
        var r = n(38);
        e.exports = Array.isArray || function (e) {
            return "Array" == r(e)
        }
    },
    94: function (e, t, n) {
        "use strict";
        var r = n(16),
            i = n(64)(!0);
        r(r.P, "Array", {
            includes: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(41)("includes")
    },
    95: function (e, t, n) {
        var r = n(47),
            i = Math.max,
            o = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    96: function (e, t) {},
    97: function (e, t, n) {
        var u = n(47),
            s = n(39);
        e.exports = function (c) {
            return function (e, t) {
                var n, r, i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
    },
    98: function (e, t, n) {
        e.exports = n(24)
    },
    99: function (e, t, n) {
        "use strict";
        var r = n(67),
            i = n(44),
            o = n(52),
            a = {};
        n(24)(a, n(14)("iterator"), function () {
            return this
        }), e.exports = function (e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    }
});
pbjsChunk([283], {
    158: function (e, r, n) {
        e.exports = n(159)
    },
    159: function (e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), n.d(r, "spec", function () {
            return d
        });
        var t = n(1),
            v = n(3),
            l = n(2),
            h = n(10),
            f = n(0),
            _ = "adform",
            d = {
                code: _,
                supportedMediaTypes: [l.b, l.d],
                isBidRequestValid: function (e) {
                    return !!e.params.mid
                },
                buildRequests: function (e, r) {
                    var n, t, d, s, i, o, p, a, u, c, g = v.b.getConfig("currency.adServerCurrency"),
                        l = [],
                        h = [
                            ["adxDomain", "adx.adform.net"],
                            ["fd", 1],
                            ["url", null],
                            ["tid", null]
                        ],
                        f = JSON.parse(JSON.stringify(e)),
                        b = f[0] && f[0].bidder || _;
                    for (n = 0, t = f.length; n < t; n++) {
                        for ("net" !== (i = f[n]).params.priceType && "net" !== i.params.pt || (u = "net"), d = 0, s = h.length; d < s; d++)(p = i[o = h[d][0]] || i.params[o]) && (i[o] = i.params[o] = null, h[d][1] = p);
                        (a = i.params).transactionId = i.transactionId, a.rcur = a.rcur || g, l.push(m(a))
                    }
                    for (l.unshift("https://" + h[0][1] + "/adx/?rp=4"), u = u || "gross", l.push("pt=" + u), l.push("stid=" + e[0].auctionId), r && r.gdprConsent && r.gdprConsent.gdprApplies && (c = {
                            gdpr: r.gdprConsent.gdprApplies,
                            gdpr_consent: r.gdprConsent.consentString
                        }, l.push("gdpr=" + c.gdpr), l.push("gdpr_consent=" + c.gdpr_consent)), n = 1, t = h.length; n < t; n++) o = h[n][0], (p = h[n][1]) && l.push(o + "=" + encodeURIComponent(p));
                    return {
                        method: "GET",
                        url: l.join("&"),
                        bids: e,
                        netRevenue: u,
                        bidder: b,
                        gdpr: c
                    };

                    function m(e) {
                        var r, n = [];
                        for (r in e) e.hasOwnProperty(r) && e[r] && n.push(r, "=", e[r], "&");
                        return encodeURIComponent(btoa(n.join("").slice(0, -1)))
                    }
                },
                interpretResponse: function (e, r) {
                    for (var n, t, d, s, i = {
                            banner: 1,
                            vast_content: 1,
                            vast_url: 1
                        }, o = [], p = r.bids, a = e.body, u = 0; u < a.length; u++) s = "banner" === (t = a[u]).response ? l.b : l.d, d = p[u], i[t.response] && (g(t, f.getAdUnitSizes(d)) || s === l.d) && (n = {
                        requestId: d.bidId,
                        cpm: t.win_bid,
                        width: t.width,
                        height: t.height,
                        creativeId: d.bidId,
                        dealId: t.deal_id,
                        currency: t.win_cur,
                        netRevenue: "gross" !== r.netRevenue,
                        ttl: 360,
                        ad: t.banner,
                        bidderCode: r.bidder,
                        transactionId: d.transactionId,
                        vastUrl: t.vast_url,
                        vastXml: t.vast_content,
                        mediaType: s
                    }, d.renderer || s !== l.d || "outstream" !== f.deepAccess(d, "mediaTypes.video.context") || (n.renderer = h.a.install({
                        id: d.bidId,
                        url: "https://s2.adform.net/banners/scripts/video/outstream/render.js"
                    }), n.renderer.setRender(c)), r.gdpr && (n.gdpr = r.gdpr.gdpr, n.gdpr_consent = r.gdpr.gdpr_consent), o.push(n));
                    return o;

                    function c(e) {
                        e.renderer.push(function () {
                            window.Adform.renderOutstream(e)
                        })
                    }

                    function g(e, r) {
                        for (var n = 0, t = r.length; n < t; n++)
                            if (e.width == r[n][0] && e.height == r[n][1]) return 1
                    }
                }
            };
        Object(t.registerBidder)(d)
    }
}, [158]);
pbjsChunk([254], {
    231: function (e, r, t) {
        e.exports = t(232)
    },
    232: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function () {
            return h
        });
        var f = t(10),
            _ = t(0),
            k = t(3),
            v = t(1),
            g = t(2),
            p = t(23),
            a = t(12),
            I = t.n(a),
            n = t(11),
            x = t.n(n),
            y = t(34),
            i = t(9);

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function b() {
            return (b = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                return e
            }).apply(this, arguments)
        }

        function C(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var r = 0, t = new Array(e.length); r < e.length; r++) t[r] = e[r];
                    return t
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var o = "appnexus",
            A = "https://ib.adnxs.com/ut/v3/prebid",
            c = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            w = ["age", "externalUid", "segments", "gender", "dnt", "language"],
            S = ["geo", "device_id"],
            T = ["enabled", "dongle", "member_id", "debug_timeout"],
            u = {
                body: "description",
                body2: "desc2",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    }
                },
                sponsoredBy: "sponsored_by",
                privacyLink: "privacy_link",
                salePrice: "saleprice",
                displayUrl: "displayurl"
            },
            d = "<script",
            l = /\/\/cdn\.adnxs\.com\/v/,
            m = "trk.js",
            E = Object(i.b)(32, o),
            h = {
                code: o,
                gvlid: 32,
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm", "adasta", "beintoo"],
                supportedMediaTypes: [g.b, g.d, g.c],
                isBidRequestValid: function (e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function (e, r) {
                    var a = e.map(P),
                        t = I()(e, N),
                        n = {};
                    !0 === k.b.getConfig("coppa") && (n = {
                        coppa: !0
                    }), t && Object.keys(t.params.user).filter(function (e) {
                        return x()(w, e)
                    }).forEach(function (e) {
                        var r = _.convertCamelToUnderscore(e);
                        n[r] = t.params.user[e]
                    });
                    var i, s = I()(e, z);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function (e) {
                        return x()(S, e)
                    }).forEach(function (e) {
                        return i[e] = s.params.app[e]
                    }));
                    var o, d = I()(e, M);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = {},
                        c = {},
                        u = E.getCookie("apn_prebid_debug") || null;
                    if (u) try {
                        p = JSON.parse(u)
                    } catch (e) {
                        _.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var l = I()(e, B);
                        l && l.debug && (p = l.debug)
                    }
                    p && p.enabled && Object.keys(p).filter(function (e) {
                        return x()(T, e)
                    }).forEach(function (e) {
                        c[e] = p[e]
                    });
                    var m = I()(e, q),
                        f = m ? parseInt(m.params.member, 10) : 0,
                        v = e[0].schain,
                        g = {
                            tags: C(a),
                            user: n,
                            sdk: {
                                source: "pbjs",
                                version: "3.17.0"
                            },
                            schain: v
                        };
                    if (0 < f && (g.member_id = f), s && (g.device = i), d && (g.app = o), k.b.getConfig("adpod.brandCategoryExclusion") && (g.brand_category_uniqueness = !0), c.enabled && (g.debug = c, _.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(c, null, 4))), r && r.gdprConsent && (g.gdpr_consent = {
                            consent_string: r.gdprConsent.consentString,
                            consent_required: r.gdprConsent.gdprApplies
                        }), r && r.uspConsent && (g.us_privacy = r.uspConsent), r && r.refererInfo) {
                        var y = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map(function (e) {
                                return encodeURIComponent(e)
                            }).join(",")
                        };
                        g.referrer_detection = y
                    }
                    I()(e, D) && e.filter(D).forEach(function (r) {
                        var e = function (e, r) {
                                var t = r.mediaTypes.video,
                                    a = t.durationRangeSec,
                                    n = t.requireExactDuration,
                                    i = function (e) {
                                        var r = e.adPodDurationSec,
                                            t = e.durationRangeSec,
                                            a = e.requireExactDuration,
                                            n = _.getMinValueFromArray(t),
                                            i = Math.floor(r / n);
                                        return a ? Math.max(i, t.length) : i
                                    }(r.mediaTypes.video),
                                    s = _.getMaxValueFromArray(a),
                                    o = e.filter(function (e) {
                                        return e.uuid === r.bidId
                                    }),
                                    d = _.fill.apply(_, C(o).concat([i]));
                                if (n) {
                                    var p = Math.ceil(i / a.length),
                                        c = _.chunk(d, p);
                                    a.forEach(function (r, e) {
                                        c[e].map(function (e) {
                                            V(e, "minduration", r), V(e, "maxduration", r)
                                        })
                                    })
                                } else d.map(function (e) {
                                    return V(e, "maxduration", s)
                                });
                                return d
                            }(a, r),
                            t = g.tags.filter(function (e) {
                                return e.uuid !== r.bidId
                            });
                        g.tags = [].concat(C(t), C(e))
                    });
                    var b = _.deepAccess(e[0], "userId.criteoId");
                    if (b) {
                        var h = [];
                        h.push({
                            provider: "criteo",
                            user_id: b
                        }), g.tpuids = h
                    }
                    return function (e, t) {
                        var a = [],
                            n = {};
                        ! function (e) {
                            var r = !0;
                            e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== _.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1")));
                            return r
                        }(t) && (n = {
                            withCredentials: !1
                        });
                        if (15 < e.tags.length) {
                            var i = _.deepClone(e);
                            _.chunk(e.tags, 15).forEach(function (e) {
                                i.tags = e;
                                var r = JSON.stringify(i);
                                a.push({
                                    method: "POST",
                                    url: A,
                                    data: r,
                                    bidderRequest: t,
                                    options: n
                                })
                            })
                        } else {
                            var r = JSON.stringify(e);
                            a = {
                                method: "POST",
                                url: A,
                                data: r,
                                bidderRequest: t,
                                options: n
                            }
                        }
                        return a
                    }(g, r)
                },
                interpretResponse: function (e, r) {
                    var i = this,
                        s = r.bidderRequest;
                    e = e.body;
                    var o = [];
                    if (!e || e.error) {
                        var t = "in response for ".concat(s.bidderCode, " adapter");
                        return e && e.error && (t += ": ".concat(e.error)), _.logError(t), o
                    }
                    if (e.tags && e.tags.forEach(function (e) {
                            var r, t, a = (r = e) && r.ads && r.ads.length && I()(r.ads, function (e) {
                                return e.rtb
                            });
                            if (a && 0 !== a.cpm && x()(i.supportedMediaTypes, a.ad_type)) {
                                var n = function (r, e, t) {
                                    var a = _.getBidRequest(r.uuid, [t]),
                                        n = {
                                            requestId: r.uuid,
                                            cpm: e.cpm,
                                            creativeId: e.creative_id,
                                            dealId: e.deal_id,
                                            currency: "USD",
                                            netRevenue: !0,
                                            ttl: 300,
                                            adUnitCode: a.adUnitCode,
                                            appnexus: {
                                                buyerMemberId: e.buyer_member_id,
                                                dealPriority: e.deal_priority,
                                                dealCode: e.deal_code
                                            }
                                        };
                                    e.advertiser_id && (n.meta = b({}, n.meta, {
                                        advertiserId: e.advertiser_id
                                    }));
                                    if (e.rtb.video) {
                                        switch (b(n, {
                                            width: e.rtb.video.player_width,
                                            height: e.rtb.video.player_height,
                                            vastImpUrl: e.notify_url,
                                            ttl: 3600
                                        }), _.deepAccess(a, "mediaTypes.video.context")) {
                                            case g.a:
                                                var i = Object(v.getIabSubCategory)(a.bidder, e.brand_category_id);
                                                n.meta = b({}, n.meta, {
                                                    iabSubCatId: i
                                                });
                                                var s = e.deal_priority;
                                                n.video = {
                                                    context: g.a,
                                                    durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                                    dealTier: s
                                                }, n.vastUrl = e.rtb.video.asset_url;
                                                break;
                                            case y.b:
                                                if (n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, n.vastXml = e.rtb.video.content, e.renderer_url) {
                                                    var o = I()(t.bids, function (e) {
                                                            return e.bidId === r.uuid
                                                        }),
                                                        d = _.deepAccess(o, "renderer.options");
                                                    n.renderer = function (e, r) {
                                                        var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                            a = f.a.install({
                                                                id: r.renderer_id,
                                                                url: r.renderer_url,
                                                                config: t,
                                                                loaded: !1,
                                                                adUnitCode: e
                                                            });
                                                        try {
                                                            a.setRender(J)
                                                        } catch (e) {
                                                            _.logWarn("Prebid Error calling setRender on renderer", e)
                                                        }
                                                        return a.setEventHandlers({
                                                            impression: function () {
                                                                return _.logMessage("AppNexus outstream video impression event")
                                                            },
                                                            loaded: function () {
                                                                return _.logMessage("AppNexus outstream video loaded event")
                                                            },
                                                            ended: function () {
                                                                _.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                            }
                                                        }), a
                                                    }(n.adUnitCode, e, d)
                                                }
                                                break;
                                            case y.a:
                                                n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url)
                                        }
                                    } else if (e.rtb[g.c]) {
                                        var p = e.rtb[g.c],
                                            c = e.viewability.config.replace("src=", "data-src="),
                                            u = p.javascript_trackers;
                                        null == u ? u = c : _.isStr(u) ? u = [u, c] : u.push(c), n[g.c] = {
                                            title: p.title,
                                            body: p.desc,
                                            body2: p.desc2,
                                            cta: p.ctatext,
                                            rating: p.rating,
                                            sponsoredBy: p.sponsored,
                                            privacyLink: p.privacy_link,
                                            address: p.address,
                                            downloads: p.downloads,
                                            likes: p.likes,
                                            phone: p.phone,
                                            price: p.price,
                                            salePrice: p.saleprice,
                                            clickUrl: p.link.url,
                                            displayUrl: p.displayurl,
                                            clickTrackers: p.link.click_trackers,
                                            impressionTrackers: p.impression_trackers,
                                            javascriptTrackers: u
                                        }, p.main_img && (n.native.image = {
                                            url: p.main_img.url,
                                            height: p.main_img.height,
                                            width: p.main_img.width
                                        }), p.icon && (n.native.icon = {
                                            url: p.icon.url,
                                            height: p.icon.height,
                                            width: p.icon.width
                                        })
                                    } else {
                                        b(n, {
                                            width: e.rtb.banner.width,
                                            height: e.rtb.banner.height,
                                            ad: e.rtb.banner.content
                                        });
                                        try {
                                            var l = e.rtb.trackers[0].impression_urls[0],
                                                m = _.createTrackPixelHtml(l);
                                            n.ad += m
                                        } catch (e) {
                                            _.logError("Error appending tracking pixel", e)
                                        }
                                    }
                                    return n
                                }(e, a, s);
                                n.mediaType = (t = a.ad_type) === g.d ? g.d : t === g.c ? g.c : g.b, o.push(n)
                            }
                        }), e.debug && e.debug.debug_info) {
                        var a = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                        a = a.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), _.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), _.logMessage(a)
                    }
                    return o
                },
                getMappingFileInfo: function () {
                    return {
                        url: "https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                        refreshInDays: 7
                    }
                },
                getUserSyncs: function (e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "https://acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                },
                transformBidParams: function (t, e) {
                    return t = _.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: _.transformBidderParamKeywords
                    }, t), e && (t.use_pmt_rule = "boolean" == typeof t.usePaymentRule && t.usePaymentRule, t.usePaymentRule && delete t.usePaymentRule, R(t.keywords) && t.keywords.forEach(O), Object.keys(t).forEach(function (e) {
                        var r = _.convertCamelToUnderscore(e);
                        r !== e && (t[r] = t[e], delete t[e])
                    })), t
                },
                onBidWon: function (e) {
                    e.native && function (e) {
                        var r = function (e) {
                            var r;
                            if (_.isStr(e) && j(e)) r = e;
                            else if (_.isArray(e))
                                for (var t = 0; t < e.length; t++) {
                                    var a = e[t];
                                    j(a) && (r = a)
                                }
                            return r
                        }(e.native.javascriptTrackers);
                        if (r)
                            for (var t = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, a = function (e) {
                                    var r = e.indexOf('src="') + 5,
                                        t = e.indexOf('"', r);
                                    return e.substring(r, t)
                                }(r), n = a.replace("dom_id=%native_dom_id%", t), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                                var d = i[o];
                                try {
                                    var p = d.contentDocument || d.contentWindow.document;
                                    if (p)
                                        for (var c = p.getElementsByTagName("script"), u = 0; u < c.length && !s; u++) {
                                            var l = c[u];
                                            l.getAttribute("data-src") == a && (l.setAttribute("src", n), l.setAttribute("data-src", ""), l.removeAttribute && l.removeAttribute("data-src"), s = !0)
                                        }
                                } catch (e) {
                                    if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e
                                }
                            }
                    }(e)
                }
            };

        function R(e) {
            return _.isArray(e) && 0 < e.length
        }

        function O(e) {
            R(e.value) && "" === e.value[0] && delete e.value
        }

        function j(e) {
            var r = e.match(l),
                t = null != r && 1 <= r.length,
                a = e.match(m),
                n = null != a && 1 <= a.length;
            return e.startsWith(d) && n && t
        }

        function P(r) {
            var n, i, t = {};
            if (t.sizes = U(r.sizes), t.primary_size = t.sizes[0], t.ad_types = [], t.uuid = r.bidId, r.params.placementId ? t.id = parseInt(r.params.placementId, 10) : t.code = r.params.invCode, t.allow_smaller_sizes = r.params.allowSmallerSizes || !1, t.use_pmt_rule = r.params.usePaymentRule || !1, t.prebid = !0, t.disable_psa = !0, r.params.reserve && (t.reserve = r.params.reserve), r.params.position && (t.position = {
                    above: 1,
                    below: 2
                } [r.params.position] || 0), r.params.trafficSourceCode && (t.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (t.private_sizes = U(r.params.privateSizes)), r.params.supplyType && (t.supply_type = r.params.supplyType), r.params.pubClick && (t.pubclick = r.params.pubClick), r.params.extInvCode && (t.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (t.external_imp_id = r.params.externalImpId), !_.isEmpty(r.params.keywords)) {
                var e = _.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(O), t.keywords = e
            }
            if ((r.mediaType === g.c || _.deepAccess(r, "mediaTypes.".concat(g.c))) && (t.ad_types.push(g.c), 0 === t.sizes.length && (t.sizes = U([1, 1])), r.nativeParams)) {
                var a = (n = r.nativeParams, i = {}, Object.keys(n).forEach(function (e) {
                    var r = u[e] && u[e].serverName || u[e] || e,
                        t = u[e] && u[e].requiredParams;
                    if (i[r] = b({}, t, n[e]), (r === u.image.serverName || r === u.icon.serverName) && i[r].sizes) {
                        var a = i[r].sizes;
                        (_.isArrayOfNums(a) || _.isArray(a) && 0 < a.length && a.every(function (e) {
                            return _.isArrayOfNums(e)
                        })) && (i[r].sizes = U(i[r].sizes))
                    }
                    r === u.privacyLink && (i.privacy_supported = !0)
                }), i);
                t[g.c] = {
                    layouts: [a]
                }
            }
            var s = _.deepAccess(r, "mediaTypes.".concat(g.d)),
                o = _.deepAccess(r, "mediaTypes.video.context");
            t.hb_source = s && "adpod" === o ? 7 : 1, r.mediaType !== g.d && !s || t.ad_types.push(g.d), (r.mediaType === g.d || s && "outstream" !== o) && (t.require_asset_url = !0), r.params.video && (t.video = {}, Object.keys(r.params.video).filter(function (e) {
                return x()(c, e)
            }).forEach(function (e) {
                return t.video[e] = r.params.video[e]
            })), r.renderer && (t.video = b({}, t.video, {
                custom_renderer_present: !0
            }));
            var d = I()(p.a.getAdUnits(), function (e) {
                return r.transactionId === e.transactionId
            });
            return d && d.mediaTypes && d.mediaTypes.banner && t.ad_types.push(g.b), 0 === t.ad_types.length && delete t.ad_types, t
        }

        function U(e) {
            var r = [],
                t = {};
            if (_.isArray(e) && 2 === e.length && !_.isArray(e[0])) t.width = parseInt(e[0], 10), t.height = parseInt(e[1], 10), r.push(t);
            else if ("object" === s(e))
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    (t = {}).width = parseInt(n[0], 10), t.height = parseInt(n[1], 10), r.push(t)
                }
            return r
        }

        function N(e) {
            return !!e.params.user
        }

        function q(e) {
            return !!parseInt(e.params.member, 10)
        }

        function z(e) {
            if (e.params) return !!e.params.app
        }

        function M(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function B(e) {
            return !!e.debug
        }

        function D(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === g.a
        }

        function V(e, r, t) {
            _.isEmpty(e.video) && (e.video = {}), e.video[r] = t
        }

        function J(e) {
            var r, t;
            r = e.adUnitCode, (t = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && t[0].style.setProperty("display", "none"), e.renderer.push(function () {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function (e, r, t) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: t
                    })
                }.bind(null, e))
            })
        }
        Object(v.registerBidder)(h)
    }
}, [231]);
pbjsChunk([224], {
    293: function (e, r, t) {
        e.exports = t(294)
    },
    294: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function () {
            return s
        });
        var o = t(0),
            n = t(1),
            i = t(2),
            u = t(3);

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function p() {
            return (p = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }).apply(this, arguments)
        }
        var s = {
                code: "connectad",
                aliases: ["connectadrealtime"],
                supportedMediaTypes: [i.b],
                isBidRequestValid: function (e) {
                    return !(!e.params.networkId || !e.params.siteId)
                },
                buildRequests: function (e, r) {
                    var t, n = {
                        method: "POST",
                        url: "",
                        data: "",
                        bidRequest: []
                    };
                    if (e.length < 1) return n;
                    var i, s = p({
                        placements: [],
                        time: Date.now(),
                        user: {},
                        url: r.refererInfo && r.refererInfo.referer ? r.refererInfo.referer : window.location.href,
                        referrer: window.document.referrer,
                        referrer_info: r.refererInfo,
                        screensize: [window.screen.width, window.screen.height].join("x"),
                        dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                        language: navigator.language,
                        ua: navigator.userAgent
                    });
                    !0 === u.b.getConfig("coppa") && o.deepSetValue(s, "user.coppa", 1), e[0].schain && o.deepSetValue(s, "source.ext.schain", e[0].schain), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (i = r.gdprConsent.gdprApplies ? 1 : 0), o.deepSetValue(s, "user.ext.gdpr", i), o.deepSetValue(s, "user.ext.consent", r.gdprConsent.consentString));
                    r.uspConsent && o.deepSetValue(s, "user.ext.us_privacy", r.uspConsent);
                    var d = o.deepAccess(e[0], "userId.digitrustid.data");
                    return !d || d.privacy && d.privacy.optout || (t = {
                        id: d.id,
                        keyv: d.keyv
                    }), t && o.deepSetValue(s, "user.ext.digitrust", {
                        id: t.id,
                        keyv: t.keyv
                    }), e[0].userId && "object" === a(e[0].userId) && (e[0].userId.tdid || e[0].userId.pubcid || e[0].userId.lipb || e[0].userId.id5id || e[0].userId.parrableid) && (o.deepSetValue(s, "user.ext.eids", []), e[0].userId.tdid && s.user.ext.eids.push({
                        source: "adserver.org",
                        uids: [{
                            id: e[0].userId.tdid,
                            ext: {
                                rtiPartner: "TDID"
                            }
                        }]
                    }), e[0].userId.pubcid && s.user.ext.eids.push({
                        source: "pubcommon",
                        uids: [{
                            id: e[0].userId.pubcid
                        }]
                    }), e[0].userId.id5id && s.user.ext.eids.push({
                        source: "id5-sync.com",
                        uids: [{
                            id: e[0].userId.id5id
                        }]
                    }), e[0].userId.parrableid && s.user.ext.eids.push({
                        source: "parrable.com",
                        uids: [{
                            id: e[0].userId.parrableid
                        }]
                    }), e[0].userId.lipb && e[0].userId.lipb.lipbid && s.user.ext.eids.push({
                        source: "liveintent.com",
                        uids: [{
                            id: e[0].userId.lipb.lipbid
                        }]
                    })), e.map(function (e) {
                        var r, t, n = p({
                            id: e.transactionId,
                            divName: e.bidId,
                            sizes: e.mediaTypes.banner.sizes,
                            adTypes: (r = e.mediaTypes.banner.sizes || e.sizes, t = [], r.forEach(function (e) {
                                var r = c.indexOf(e[0] + "x" + e[1]);
                                0 <= r && t.push(r)
                            }), t)
                        }, e.params);
                        n.networkId && n.siteId && s.placements.push(n)
                    }), n.data = JSON.stringify(s), n.bidRequest = e, n.url = "https://i.connectad.io/api/v2", n
                },
                interpretResponse: function (e, r) {
                    var t, n, i, s, d = [];
                    n = r.bidRequest, e = (e || {}).body;
                    for (var o = 0; o < n.length; o++)
                        if (t = {}, i = n[o].bidId, e) {
                            var u = e.decisions && e.decisions[i],
                                a = u && u.pricing && u.pricing.clearPrice;
                            u && a && (t.requestId = i, t.cpm = a, t.width = u.width, t.height = u.height, t.dealid = u.dealid || null, t.ad = (s = u).contents && s.contents[0] && s.contents[0].body, t.currency = "USD", t.creativeId = u.adId, t.ttl = 360, t.netRevenue = !0, d.push(t))
                        } return d
                },
                getUserSyncs: function (e, r, t, n) {
                    var i = "https://cdn.connectad.io/connectmyusers.php?";
                    if (t && (i = o.tryAppendQueryString(i, "gdpr", t.gdprApplies ? 1 : 0)), t && "string" == typeof t.consentString && (i = o.tryAppendQueryString(i, "gdpr_consent", t.consentString)), n && (i = o.tryAppendQueryString(i, "us_privacy", n)), !0 === u.b.getConfig("coppa") && (i = o.tryAppendQueryString(i, "coppa", 1)), e.iframeEnabled) return [{
                        type: "iframe",
                        url: i
                    }];
                    o.logWarn("Bidder ConnectAd: Please activate iFrame Sync")
                }
            },
            c = [null, "120x90", "200x200", "468x60", "728x90", "300x250", "160x600", "120x600", "300x100", "180x150", "336x280", "240x400", "234x60", "88x31", "120x60", "120x240", "125x125", "220x250", "250x250", "250x90", "0x0", "200x90", "300x50", "320x50", "320x480", "185x185", "620x45", "300x125", "800x250", "980x120", "980x150", "320x150", "300x300", "200x600", "320x500", "320x320"];
        c[77] = "970x90", c[123] = "970x250", c[43] = "300x600", c[286] = "970x66", c[3230] = "970x280", c[429] = "486x60", c[374] = "700x500", c[934] = "300x1050", c[1578] = "320x100", c[331] = "320x250", c[3301] = "320x267", c[2730] = "728x250", Object(n.registerBidder)(s)
    }
}, [293]);
pbjsChunk([0], {
    314: function (t, e, r) {
        t.exports = r(315)
    },
    315: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), r.d(e, "ADAPTER_VERSION", function () {
            return u
        }), r.d(e, "PROFILE_ID_PUBLISHERTAG", function () {
            return v
        }), r.d(e, "spec", function () {
            return s
        }), e.tryGetCriteoFastBid = I;
        var a = r(29),
            i = r(1),
            c = r(3),
            h = r(2),
            f = r(0),
            o = r(12),
            l = r.n(o),
            p = r(316),
            n = (r.n(p), r(9));

        function d() {
            return (d = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }).apply(this, arguments)
        }
        var u = 28,
            m = "criteo",
            v = 185,
            y = Object(n.b)(91),
            b = 65537,
            g = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
            s = {
                code: m,
                gvlid: 91,
                supportedMediaTypes: [h.b, h.d, h.c],
                isBidRequestValid: function (t) {
                    return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(A(t) && ! function (e) {
                        var r = !0;
                        if (["mimes", "playerSize", "maxduration", "protocols", "api"].forEach(function (t) {
                                void 0 === f.deepAccess(e, "mediaTypes.video." + t) && (r = !1, f.logError("Criteo Bid Adapter: mediaTypes.video." + t + " is required"))
                            }), ["skip", "placement", "playbackmethod"].forEach(function (t) {
                                void 0 === f.deepAccess(e, "params.video." + t) && (r = !1, f.logError("Criteo Bid Adapter: params.video." + t + " is required"))
                            }), r) {
                            if ("instream" == e.mediaTypes.video.context && 1 === e.params.video.placement) return 1;
                            if ("outstream" == e.mediaTypes.video.context && 1 !== e.params.video.placement) return 1
                        }
                        return
                    }(t))
                },
                buildRequests: function (t, e) {
                    var r, i;
                    if (d(e, {
                            publisherExt: c.b.getConfig("fpd.context"),
                            userExt: c.b.getConfig("fpd.user"),
                            ceh: c.b.getConfig("criteo.ceh")
                        }), T() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, I(), setTimeout(function () {
                            Object(a.a)("https://static.criteo.net/js/ld/publishertag.prebid.js", m)
                        }, e.timeout)), T()) {
                        var o = new Criteo.PubTag.Adapters.Prebid(v, u, t, e, "3.17.0"),
                            n = c.b.getConfig("enableSendAllBids");
                        o.setEnableSendAllBids && "function" == typeof o.setEnableSendAllBids && "boolean" == typeof n && o.setEnableSendAllBids(n), r = o.buildCdbUrl(), i = o.buildCdbRequest()
                    } else {
                        var s = function (t, e) {
                            var r = "";
                            e && e.refererInfo && (r = e.refererInfo.referer);
                            var i = f.parseUrl(r).search,
                                o = {
                                    url: r,
                                    debug: "1" === i.pbt_debug,
                                    noLog: "1" === i.pbt_nolog,
                                    amp: !1
                                };
                            return t.forEach(function (t) {
                                "amp" === t.params.integrationMode && (o.amp = !0)
                            }), o
                        }(t, e);
                        r = function (t) {
                            var e = "https://bidder.criteo.com/cdb";
                            e += "?profileId=207", e += "&av=" + String(u), e += "&wv=" + encodeURIComponent("3.17.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.amp && (e += "&im=1");
                            t.debug && (e += "&debug=1");
                            t.noLog && (e += "&nolog=1");
                            return e
                        }(s), i = function (t, e, r) {
                            var s, i = {
                                publisher: {
                                    url: t.url,
                                    ext: r.publisherExt
                                },
                                slots: e.map(function (t) {
                                    s = t.params.networkId || s;
                                    var e, r, i, o = {
                                        impid: t.adUnitCode,
                                        transactionid: t.transactionId,
                                        auctionId: t.auctionId,
                                        sizes: (e = t, S(f.deepAccess(e, "mediaTypes.banner.sizes") || e.sizes))
                                    };
                                    if (t.params.zoneId && (o.zoneid = t.params.zoneId), t.fpd && t.fpd.context && (o.ext = t.fpd.context), t.params.ext && (o.ext = d({}, o.ext, t.params.ext)), t.params.publisherSubId && (o.publishersubid = t.params.publisherSubId), (t.params.nativeCallback || f.deepAccess(t, "mediaTypes.".concat(h.c))) && (o.native = !0, (r = t).nativeParams && (r.nativeParams.image && !0 !== r.nativeParams.image.sendId || r.nativeParams.icon && !0 !== r.nativeParams.icon.sendId || r.nativeParams.clickUrl && !0 !== r.nativeParams.clickUrl.sendId || r.nativeParams.displayUrl && !0 !== r.nativeParams.displayUrl.sendId || r.nativeParams.privacyLink && !0 !== r.nativeParams.privacyLink.sendId || r.nativeParams.privacyIcon && !0 !== r.nativeParams.privacyIcon.sendId) && f.logWarn("Criteo: all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)")), A(t)) {
                                        var n = {
                                            playersizes: (i = t, S(f.deepAccess(i, "mediaTypes.video.playerSize"))),
                                            mimes: t.mediaTypes.video.mimes,
                                            protocols: t.mediaTypes.video.protocols,
                                            maxduration: t.mediaTypes.video.maxduration,
                                            api: t.mediaTypes.video.api
                                        };
                                        n.skip = t.params.video.skip, n.placement = t.params.video.placement, n.minduration = t.params.video.minduration, n.playbackmethod = t.params.video.playbackmethod, n.startdelay = t.params.video.startdelay, o.video = n
                                    }
                                    return o
                                })
                            };
                            s && (i.publisher.networkid = s);
                            i.user = {
                                ext: r.userExt
                            }, r && r.ceh && (i.user.ceh = r.ceh);
                            r && r.gdprConsent && (i.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (i.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), r.gdprConsent.vendorData && r.gdprConsent.vendorData.vendorConsents && void 0 !== r.gdprConsent.vendorData.vendorConsents[91..toString(10)] && (i.gdprConsent.consentGiven = !!r.gdprConsent.vendorData.vendorConsents[91..toString(10)]), void 0 !== r.gdprConsent.consentString && (i.gdprConsent.consentData = r.gdprConsent.consentString));
                            r && r.uspConsent && (i.user.uspIab = r.uspConsent);
                            return i
                        }(s, t, e)
                    }
                    if (i) return {
                        method: "POST",
                        url: r,
                        data: i,
                        bidRequests: t
                    }
                },
                interpretResponse: function (t, d) {
                    var e = t.body || t;
                    if (T()) {
                        var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(d);
                        if (r) return r.interpretResponse(e, d)
                    }
                    var u = [];
                    return e && e.slots && f.isArray(e.slots) && e.slots.forEach(function (e) {
                        var t, r, i, o, n, s = l()(d.bidRequests, function (t) {
                                return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid)
                            }),
                            a = s.bidId,
                            p = {
                                requestId: a,
                                adId: e.bidId || f.getUniqueIdentifierStr(),
                                cpm: e.cpm,
                                currency: e.currency,
                                netRevenue: !0,
                                ttl: e.ttl || 60,
                                creativeId: a,
                                width: e.width,
                                height: e.height,
                                dealId: e.dealCode
                            };
                        if (e.native)
                            if (s.params.nativeCallback) p.ad = (r = a, i = e.native, o = s.params.nativeCallback, n = "criteo_prebid_native_slots", window[n] = window[n] || {}, window[n][r] = {
                                callback: o,
                                payload: i
                            }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(n, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(r, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>'));
                            else {
                                if (!0 === c.b.getConfig("enableSendAllBids")) return;
                                p.native = {
                                    title: (t = e.native).products[0].title,
                                    body: t.products[0].description,
                                    sponsoredBy: t.advertiser.description,
                                    icon: t.advertiser.logo,
                                    image: t.products[0].image,
                                    clickUrl: t.products[0].click_url,
                                    privacyLink: t.privacy.optout_click_url,
                                    privacyIcon: t.privacy.optout_image_url,
                                    cta: t.products[0].call_to_action,
                                    price: t.products[0].price,
                                    impressionTrackers: t.impression_pixels.map(function (t) {
                                        return t.url
                                    })
                                }, p.mediaType = h.c
                            }
                        else e.video ? (p.vastUrl = e.displayurl, p.mediaType = h.d) : p.ad = e.creative;
                        u.push(p)
                    }), u
                },
                onTimeout: function (t) {
                    T() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout()
                },
                onBidWon: function (t) {
                    T() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)
                },
                onSetTargeting: function (t) {
                    T() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)
                }
            };

        function T() {
            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
        }

        function C(t) {
            return t[0] + "x" + t[1]
        }

        function S(t) {
            return Array.isArray(t[0]) ? t.map(function (t) {
                return C(t)
            }) : [C(t)]
        }

        function A(t) {
            return void 0 !== f.deepAccess(t, "params.video") && void 0 !== f.deepAccess(t, "mediaTypes.video")
        }

        function I() {
            try {
                var t = "criteo_fast_bid",
                    e = "// Hash: ",
                    r = y.getDataFromLocalStorage(t);
                if (null !== r) {
                    var i = r.indexOf("\n"),
                        o = r.substr(0, i).trim();
                    if (o.substr(0, e.length) !== e) f.logWarn("No hash found in FastBid"), y.removeDataFromLocalStorage(t);
                    else {
                        var n = o.substr(e.length),
                            s = r.substr(i + 1);
                        if (Object(p.verify)(s, n, g, b)) {
                            f.logInfo("Using Criteo FastBid");
                            var a = document.createElement("script");
                            a.type = "text/javascript", a.text = s, f.insertElement(a)
                        } else f.logWarn("Invalid Criteo FastBid found"), y.removeDataFromLocalStorage(t)
                    }
                }
            } catch (t) {}
        }
        Object(i.registerBidder)(s)
    },
    316: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(317),
            p = r(318);
        e.verify = function (t, e, r, i) {
            var o = new a.BigInteger(a.b64toHex(e)),
                n = new a.BigInteger(a.b64toHex(r)),
                s = o.modPowInt(i, n);
            return a.removeExtraSymbols(s.toHexString()) === p.Sha256.hash(t)
        }
    },
    317: function (t, e, r) {
        "use strict";
        var i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (g.prototype.toHexString = function () {
            if (this.s < 0) return "-" + this.negate().toHexString();
            var t, e = !1,
                r = "",
                i = this.t,
                o = this.DB - i * this.DB % 4;
            if (0 < i--)
                for (o < this.DB && 0 < (t = this[i] >> o) && (e = !0, r = u(t)); 0 <= i;) o < 4 ? (t = (this[i] & (1 << o) - 1) << 4 - o, t |= this[--i] >> (o += this.DB - 4)) : (t = this[i] >> (o -= 4) & 15, o <= 0 && (o += this.DB, --i)), 0 < t && (e = !0), e && (r += u(t));
            return e ? r : "0"
        }, g.prototype.fromHexString = function (t) {
            if (null !== t) {
                this.t = 0, this.s = 0;
                for (var e = t.length, r = !1, i = 0; 0 <= --e;) {
                    var o = p(t, e);
                    o < 0 ? "-" == t.charAt(e) && (r = !0) : (r = !1, 0 == i ? this[this.t++] = o : i + 4 > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - i) - 1) << i, this[this.t++] = o >> this.DB - i) : this[this.t - 1] |= o << i, (i += 4) >= this.DB && (i -= this.DB))
                }
                this.clamp(), r && g.ZERO.subTo(this, this)
            }
        }, g.prototype.negate = function () {
            var t = T();
            return g.ZERO.subTo(this, t), t
        }, g.prototype.abs = function () {
            return this.s < 0 ? this.negate() : this
        }, g.prototype.mod = function (t) {
            var e = T();
            return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(g.ZERO) && t.subTo(e, e), e
        }, g.prototype.copyTo = function (t) {
            for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s
        }, g.prototype.lShiftTo = function (t, e) {
            for (var r = t % this.DB, i = this.DB - r, o = (1 << i) - 1, n = Math.floor(t / this.DB), s = this.s << r & this.DM, a = this.t - 1; 0 <= a; --a) e[a + n + 1] = this[a] >> i | s, s = (this[a] & o) << r;
            for (a = n - 1; 0 <= a; --a) e[a] = 0;
            e[n] = s, e.t = this.t + n + 1, e.s = this.s, e.clamp()
        }, g.prototype.invDigit = function () {
            if (this.t < 1) return 0;
            var t = this[0];
            if (0 == (1 & t)) return 0;
            var e = 3 & t;
            return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
        }, g.prototype.dlShiftTo = function (t, e) {
            var r;
            for (r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
            for (r = t - 1; 0 <= r; --r) e[r] = 0;
            e.t = this.t + t, e.s = this.s
        }, g.prototype.squareTo = function (t) {
            for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r;) t[r] = 0;
            for (r = 0; r < e.t - 1; ++r) {
                var i = e.am(r, e[r], t, 2 * r, 0, 1);
                (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
            }
            0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
        }, g.prototype.multiplyTo = function (t, e) {
            var r = this.abs(),
                i = t.abs(),
                o = r.t;
            for (e.t = o + i.t; 0 <= --o;) e[o] = 0;
            for (o = 0; o < i.t; ++o) e[o + r.t] = r.am(0, i[o], e, o, 0, r.t);
            e.s = 0, e.clamp(), this.s != t.s && g.ZERO.subTo(e, e)
        }, g.prototype.divRemTo = function (t, e, r) {
            var i = t.abs();
            if (!(i.t <= 0)) {
                var o = this.abs();
                if (o.t < i.t) return null != e && e.fromHexString("0"), void(null != r && this.copyTo(r));
                null == r && (r = T());
                var n = T(),
                    s = this.s,
                    a = t.s,
                    p = this.DB - C(i[i.t - 1]);
                0 < p ? (i.lShiftTo(p, n), o.lShiftTo(p, r)) : (i.copyTo(n), o.copyTo(r));
                var d = n.t,
                    u = n[d - 1];
                if (0 != u) {
                    var c = u * (1 << this.F1) + (1 < d ? n[d - 2] >> this.F2 : 0),
                        h = this.FV / c,
                        f = (1 << this.F1) / c,
                        l = 1 << this.F2,
                        m = r.t,
                        v = m - d,
                        y = null == e ? T() : e;
                    for (n.dlShiftTo(v, y), 0 <= r.compareTo(y) && (r[r.t++] = 1, r.subTo(y, r)), g.ONE.dlShiftTo(d, y), y.subTo(n, n); n.t < d;) n[n.t++] = 0;
                    for (; 0 <= --v;) {
                        var b = r[--m] == u ? this.DM : Math.floor(r[m] * h + (r[m - 1] + l) * f);
                        if ((r[m] += n.am(0, b, r, v, 0, d)) < b)
                            for (n.dlShiftTo(v, y), r.subTo(y, r); r[m] < --b;) r.subTo(y, r)
                    }
                    null != e && (r.drShiftTo(d, e), s != a && g.ZERO.subTo(e, e)), r.t = d, r.clamp(), 0 < p && r.rShiftTo(p, r), s < 0 && g.ZERO.subTo(r, r)
                }
            }
        }, g.prototype.rShiftTo = function (t, e) {
            e.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) e.t = 0;
            else {
                var i = t % this.DB,
                    o = this.DB - i,
                    n = (1 << i) - 1;
                e[0] = this[r] >> i;
                for (var s = r + 1; s < this.t; ++s) e[s - r - 1] |= (this[s] & n) << o, e[s - r] = this[s] >> i;
                0 < i && (e[this.t - r - 1] |= (this.s & n) << o), e.t = this.t - r, e.clamp()
            }
        }, g.prototype.drShiftTo = function (t, e) {
            for (var r = t; r < this.t; ++r) e[r - t] = this[r];
            e.t = Math.max(this.t - t, 0), e.s = this.s
        }, g.prototype.subTo = function (t, e) {
            for (var r = 0, i = 0, o = Math.min(t.t, this.t); r < o;) i += this[r] - t[r], e[r++] = i & this.DM, i >>= this.DB;
            if (t.t < this.t) {
                for (i -= t.s; r < this.t;) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
                i += this.s
            } else {
                for (i += this.s; r < t.t;) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
                i -= t.s
            }
            e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : 0 < i && (e[r++] = i), e.t = r, e.clamp()
        }, g.prototype.clamp = function () {
            for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t
        }, g.prototype.modPowInt = function (t, e) {
            var r;
            return r = new(t < 256 || e.isEven() ? c : f)(e), this.exp(t, r)
        }, g.prototype.exp = function (t, e) {
            if (4294967295 < t || t < 1) return g.ONE;
            var r = T(),
                i = T(),
                o = e.convert(this),
                n = C(t) - 1;
            for (o.copyTo(r); 0 <= --n;)
                if (e.sqrTo(r, i), 0 < (t & 1 << n)) e.mulTo(i, o, r);
                else {
                    var s = r;
                    r = i, i = s
                } return e.revert(r)
        }, g.prototype.isEven = function () {
            return 0 == (0 < this.t ? 1 & this[0] : this.s)
        }, g.prototype.compareTo = function (t) {
            var e = this.s - t.s;
            if (0 != e) return e;
            var r = this.t;
            if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
            for (; 0 <= --r;)
                if (0 != (e = this[r] - t[r])) return e;
            return 0
        }, g.prototype.am1 = function (t, e, r, i, o, n) {
            for (; 0 <= --n;) {
                var s = e * this[t++] + r[i] + o;
                o = Math.floor(s / 67108864), r[i++] = 67108863 & s
            }
            return o
        }, g.prototype.am2 = function (t, e, r, i, o, n) {
            for (var s = 32767 & e, a = e >> 15; 0 <= --n;) {
                var p = 32767 & this[t],
                    d = this[t++] >> 15,
                    u = a * p + d * s;
                o = ((p = s * p + ((32767 & u) << 15) + r[i] + (1073741823 & o)) >>> 30) + (u >>> 15) + a * d + (o >>> 30), r[i++] = 1073741823 & p
            }
            return o
        }, g.prototype.am3 = function (t, e, r, i, o, n) {
            for (var s = 16383 & e, a = e >> 14; 0 <= --n;) {
                var p = 16383 & this[t],
                    d = this[t++] >> 14,
                    u = a * p + d * s;
                o = ((p = s * p + ((16383 & u) << 14) + r[i] + o) >> 28) + (u >> 14) + a * d, r[i++] = 268435455 & p
            }
            return o
        }, g);

        function g(t) {
            null !== t && this.fromHexString(t)
        }

        function T() {
            return new o(null)
        }

        function C(t) {
            var e, r = 1;
            return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
        }
        e.BigInteger = o, e.nbi = T, e.nbits = C;
        var n, s, a = [];
        for (n = "0".charCodeAt(0), s = 0; s <= 9; ++s) a[n++] = s;
        for (n = "a".charCodeAt(0), s = 10; s < 36; ++s) a[n++] = s;
        for (n = "A".charCodeAt(0), s = 10; s < 36; ++s) a[n++] = s;

        function p(t, e) {
            var r = a[t.charCodeAt(e)];
            return null == r ? -1 : r
        }
        e.intAt = p;
        var d = "0123456789abcdefghijklmnopqrstuvwxyz";

        function u(t) {
            return d.charAt(t)
        }
        e.int2char = u;
        e.b64toHex = function (t) {
            var e, r = "",
                i = 0,
                o = 0;
            for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));
                n < 0 || (i = 0 == i ? (r += u(n >> 2), o = 3 & n, 1) : 1 == i ? (r += u(o << 2 | n >> 4), o = 15 & n, 2) : 2 == i ? (r += u(o), r += u(n >> 2), o = 3 & n, 3) : (r += u(o << 2 | n >> 4), r += u(15 & n), 0))
            }
            return 1 == i && (r += u(o << 2)), r
        }, e.removeExtraSymbols = function (t) {
            return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "")
        };
        var c = (h.prototype.convert = function (t) {
            return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
        }, h.prototype.revert = function (t) {
            return t
        }, h.prototype.reduce = function (t) {
            t.divRemTo(this.m, null, t)
        }, h.prototype.mulTo = function (t, e, r) {
            t.multiplyTo(e, r), this.reduce(r)
        }, h.prototype.sqrTo = function (t, e) {
            t.squareTo(e), this.reduce(e)
        }, h);

        function h(t) {
            this.m = t
        }
        var f = (l.prototype.convert = function (t) {
            var e = T();
            return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(o.ZERO) && this.m.subTo(e, e), e
        }, l.prototype.revert = function (t) {
            var e = T();
            return t.copyTo(e), this.reduce(e), e
        }, l.prototype.reduce = function (t) {
            for (; t.t <= this.mt2;) t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
                var r = 32767 & t[e],
                    i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
            }
            t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t)
        }, l.prototype.mulTo = function (t, e, r) {
            t.multiplyTo(e, r), this.reduce(r)
        }, l.prototype.sqrTo = function (t, e) {
            t.squareTo(e), this.reduce(e)
        }, l);

        function l(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
        }

        function m(t) {
            var e = T();
            return e.fromHexString(t.toString()), e
        }
        e.nbv = m, o.ZERO = m(0), o.ONE = m(1), i = "Microsoft Internet Explorer" == navigator.appName ? (o.prototype.am = o.prototype.am2, 30) : "Netscape" != navigator.appName ? (o.prototype.am = o.prototype.am1, 26) : (o.prototype.am = o.prototype.am3, 28), o.prototype.DB = i, o.prototype.DM = (1 << i) - 1, o.prototype.DV = 1 << i;
        o.prototype.FV = Math.pow(2, 52), o.prototype.F1 = 52 - i, o.prototype.F2 = 2 * i - 52
    },
    318: function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = (A.hash = function (t) {
            t = A.utf8Encode(t || "");
            for (var e = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], i = (t += String.fromCharCode(128)).length / 4 + 2, o = Math.ceil(i / 16), n = new Array(o), s = 0; s < o; s++) {
                n[s] = new Array(16);
                for (var a = 0; a < 16; a++) n[s][a] = t.charCodeAt(64 * s + 4 * a) << 24 | t.charCodeAt(64 * s + 4 * a + 1) << 16 | t.charCodeAt(64 * s + 4 * a + 2) << 8 | t.charCodeAt(64 * s + 4 * a + 3) << 0
            }
            var p = 8 * (t.length - 1) / Math.pow(2, 32),
                d = 8 * (t.length - 1) >>> 0;
            for (n[o - 1][14] = Math.floor(p), n[o - 1][15] = d, s = 0; s < o; s++) {
                for (var u = new Array(64), c = 0; c < 16; c++) u[c] = n[s][c];
                for (c = 16; c < 64; c++) u[c] = A.q1(u[c - 2]) + u[c - 7] + A.q0(u[c - 15]) + u[c - 16] >>> 0;
                var h = r[0],
                    f = r[1],
                    l = r[2],
                    m = r[3],
                    v = r[4],
                    y = r[5],
                    b = r[6],
                    g = r[7];
                for (c = 0; c < 64; c++) {
                    var T = g + A.z1(v) + A.Ch(v, y, b) + e[c] + u[c],
                        C = A.z0(h) + A.Maj(h, f, l);
                    g = b, b = y, y = v, v = m + T >>> 0, m = l, l = f, f = h, h = T + C >>> 0
                }
                r[0] = r[0] + h >>> 0, r[1] = r[1] + f >>> 0, r[2] = r[2] + l >>> 0, r[3] = r[3] + m >>> 0, r[4] = r[4] + v >>> 0, r[5] = r[5] + y >>> 0, r[6] = r[6] + b >>> 0, r[7] = r[7] + g >>> 0
            }
            var S = new Array(r.length);
            for (g = 0; g < r.length; g++) S[g] = ("00000000" + r[g].toString(16)).slice(-8);
            return S.join("")
        }, A.utf8Encode = function (e) {
            try {
                return (new TextEncoder).encode(e).reduce(function (t, e) {
                    return t + String.fromCharCode(e)
                }, "")
            } catch (t) {
                return unescape(encodeURIComponent(e))
            }
        }, A.ROTR = function (t, e) {
            return e >>> t | e << 32 - t
        }, A.z0 = function (t) {
            return A.ROTR(2, t) ^ A.ROTR(13, t) ^ A.ROTR(22, t)
        }, A.z1 = function (t) {
            return A.ROTR(6, t) ^ A.ROTR(11, t) ^ A.ROTR(25, t)
        }, A.q0 = function (t) {
            return A.ROTR(7, t) ^ A.ROTR(18, t) ^ t >>> 3
        }, A.q1 = function (t) {
            return A.ROTR(17, t) ^ A.ROTR(19, t) ^ t >>> 10
        }, A.Ch = function (t, e, r) {
            return t & e ^ ~t & r
        }, A.Maj = function (t, e, r) {
            return t & e ^ t & r ^ e & r
        }, A);

        function A() {}
        e.Sha256 = i
    }
}, [314]);
pbjsChunk([175], {
    409: function (e, r, t) {
        e.exports = t(410)
    },
    410: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function () {
            return O
        });
        var l = t(0),
            y = t(2),
            b = t(3),
            i = t(12),
            a = t.n(i),
            n = t(411),
            s = t.n(n),
            o = t(1);

        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var d = [y.b, y.d],
            v = 100,
            g = 300,
            w = 3600,
            x = !0,
            I = {
                JPY: 1
            };

        function p(e) {
            var r = c(e);
            r.video = l.deepClone(e.params.video), r.video.w = e.params.size[0], r.video.h = e.params.size[1];
            var t = l.deepAccess(e, "mediaTypes.video.context");
            return t && ("instream" === t ? r.video.placement = 1 : "outstream" === t ? r.video.placement = 4 : l.logWarn("ix bidder params: video context '".concat(t, "' is not supported"))), r
        }

        function c(e) {
            var r = {};
            return r.id = e.bidId, r.ext = {}, r.ext.siteID = e.params.siteId, !e.params.hasOwnProperty("id") || "string" != typeof e.params.id && "number" != typeof e.params.id ? r.ext.sid = "".concat(e.params.size[0], "x").concat(e.params.size[1]) : r.ext.sid = String(e.params.id), e.params.hasOwnProperty("bidFloor") && e.params.hasOwnProperty("bidFloorCur") && (r.bidfloor = e.params.bidFloor, r.bidfloorcur = e.params.bidFloorCur), r
        }

        function u(e) {
            return Array.isArray(e) && 2 === e.length && s()(e[0]) && s()(e[1])
        }

        function m(e, r) {
            if (u(e)) return e[0] === r[0] && e[1] === r[1];
            for (var t = 0; t < e.length; t++)
                if (e[t][0] === r[0] && e[t][1] === r[1]) return 1
        }

        function P(r, e) {
            if (r) return a()(e, function (e) {
                return e.id === r
            })
        }

        function f(e, r, t, i) {
            var a = [];
            if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
                var n = window.headertag.getIdentityInfo();
                if (n && "object" === h(n))
                    for (var s in n)
                        if (n.hasOwnProperty(s)) {
                            var o = n[s];
                            !o.responsePending && o.data && "object" === h(o.data) && Object.keys(o.data).length && a.push(o.data)
                        }
            }
            var d = {};
            if (d.id = e[0].bidderRequestId, d.imp = t, d.site = {}, d.ext = {}, d.ext.source = "prebid", e[0].schain && (d.source = {
                    ext: {
                        schain: e[0].schain
                    }
                }), 0 < a.length && (d.user = {}, d.user.eids = a), document.referrer && "" !== document.referrer && (d.site.ref = document.referrer), r) {
                if (r.gdprConsent) {
                    var p = r.gdprConsent;
                    p.hasOwnProperty("gdprApplies") && (d.regs = {
                        ext: {
                            gdpr: p.gdprApplies ? 1 : 0
                        }
                    }), p.hasOwnProperty("consentString") && (d.user = d.user || {}, d.user.ext = {
                        consent: p.consentString || ""
                    })
                }
                r.uspConsent && l.deepSetValue(d, "regs.ext.us_privacy", r.uspConsent), r.refererInfo && (d.site.page = r.refererInfo.referer)
            }
            var c = {},
                u = b.b.getConfig("ix");
            if (u) {
                if ("object" === h(u.firstPartyData)) {
                    var m = u.firstPartyData,
                        f = "?";
                    for (var y in m) m.hasOwnProperty(y) && (f += "".concat(encodeURIComponent(y), "=").concat(encodeURIComponent(m[y]), "&"));
                    f = f.slice(0, -1), d.site.page += f
                }
                "number" == typeof u.timeout && (c.t = u.timeout)
            }
            return c.s = e[0].params.siteId, c.v = i, c.r = JSON.stringify(d), c.ac = "j", c.sd = 1, 8.1 === i && (c.nf = 1), {
                method: "GET",
                url: "https://as-sec.casalemedia.com/cygnus",
                data: c
            }
        }
        var O = {
            code: "ix",
            gvlid: 10,
            supportedMediaTypes: d,
            isBidRequestValid: function (e) {
                if (!u(e.params.size)) return l.logError("ix bidder params: bid size has invalid format."), !1;
                if (!m(e.sizes, e.params.size)) return l.logError("ix bidder params: bid size is not included in ad unit sizes."), !1;
                if (e.hasOwnProperty("mediaType") && !l.contains(d, e.mediaType)) return !1;
                if (e.hasOwnProperty("mediaTypes") && !l.deepAccess(e, "mediaTypes.banner.sizes") && !l.deepAccess(e, "mediaTypes.video.playerSize")) return !1;
                if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return l.logError("ix bidder params: siteId must be string or number value."), !1;
                var r, t, i = e.params.hasOwnProperty("bidFloor"),
                    a = e.params.hasOwnProperty("bidFloorCur");
                return !!(!i && !a || i && a && (r = e.params.bidFloor, t = e.params.bidFloorCur, Boolean("number" == typeof r && "string" == typeof t && t.match(/^[A-Z]{3}$/)))) || (l.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."), !1)
            },
            buildRequests: function (e, r) {
                for (var t, i, a = [], n = [], s = [], o = null, d = 0; d < e.length; d++)(o = e[d]).mediaType !== y.d && !l.deepAccess(o, "mediaTypes.video") || (o.mediaType === y.d || m(o.mediaTypes.video.playerSize, o.params.size) ? s.push(p(o)) : l.logError("Bid size is not included in video playerSize")), o.mediaType !== y.b && !l.deepAccess(o, "mediaTypes.banner") && (o.mediaType || o.mediaTypes) || n.push((i = void 0, (i = c(t = o)).banner = {}, i.banner.w = t.params.size[0], i.banner.h = t.params.size[1], i.banner.topframe = l.inIframe() ? 0 : 1, i));
                return 0 < n.length && a.push(f(e, r, n, 7.2)), 0 < s.length && a.push(f(e, r, s, 8.1)), a
            },
            interpretResponse: function (e, r) {
                var t = [];
                if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return t;
                for (var i, a, n, s, o = e.body, d = o.seatbid, p = 0; p < d.length; p++)
                    if (d[p].hasOwnProperty("bid"))
                        for (var c = d[p].bid, u = JSON.parse(r.data.r), m = 0; m < c.length; m++) {
                            var f = P(c[m].impid, u.imp);
                            i = c[m], a = o.cur, n = f, s = void 0, s = {}, I.hasOwnProperty(a) ? s.cpm = i.price / I[a] : s.cpm = i.price / v, s.requestId = i.impid, s.dealId = l.deepAccess(i, "ext.dealid"), s.netRevenue = x, s.currency = a, s.creativeId = i.hasOwnProperty("crid") ? i.crid : "-", l.deepAccess(i, "ext.vasturl") ? (s.vastUrl = i.ext.vasturl, s.width = n.video.w, s.height = n.video.h, s.mediaType = y.d, s.ttl = w) : (s.ad = i.adm, s.width = i.w, s.height = i.h, s.mediaType = y.b, s.ttl = g), s.meta = {}, s.meta.networkId = l.deepAccess(i, "ext.dspid"), s.meta.brandId = l.deepAccess(i, "ext.advbrandid"), s.meta.brandName = l.deepAccess(i, "ext.advbrand"), t.push(s)
                        }
                return t
            },
            transformBidParams: function (e) {
                return l.convertTypes({
                    siteID: "number"
                }, e)
            },
            getUserSyncs: function (e) {
                return e.iframeEnabled ? [{
                    type: "iframe",
                    url: "https://js-sec.indexww.com/um/ixmatch.html"
                }] : []
            }
        };
        Object(o.registerBidder)(O)
    }
}, [409]);
pbjsChunk([137], {
    503: function (e, t, n) {
        e.exports = n(504)
    },
    504: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "USER_ID_CODE_TO_QUERY_ARG", function () {
            return m
        }), n.d(t, "spec", function () {
            return a
        });
        var d = n(3),
            r = n(1),
            c = n(0),
            s = n(2);

        function o(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        r || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var i = [s.b, s.d],
            p = "hb_pb",
            u = "3.0.2",
            m = {
                britepoolid: "britepoolid",
                criteoId: "criteoid",
                digitrustid: "digitrustid",
                id5id: "id5id",
                idl_env: "lre",
                lipb: "lipbid",
                netId: "netid",
                parrableid: "parrableid",
                pubcid: "pubcid",
                tdid: "ttduuid"
            },
            a = {
                code: "openx",
                gvlid: 69,
                supportedMediaTypes: i,
                isBidRequestValid: function (e) {
                    var t = e.params.delDomain || e.params.platform;
                    return c.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < c.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
                },
                buildRequests: function (e, r) {
                    if (0 === e.length) return [];
                    var i = [],
                        t = o(e.reduce(function (e, t) {
                            var n;
                            return n = t, c.deepAccess(n, "mediaTypes.video") && !c.deepAccess(n, "mediaTypes.banner") || n.mediaType === s.d ? e[0].push(t) : e[1].push(t), e
                        }, [
                            [],
                            []
                        ]), 2),
                        n = t[0],
                        a = t[1];
                    return 0 < a.length && i.push(function (e, t) {
                        var r = [],
                            i = !1,
                            n = l(e, t),
                            a = c._map(e, function (e) {
                                return e.params.unit
                            });
                        n.aus = c._map(e, function (e) {
                            return c.parseSizesInput(e.mediaTypes.banner.sizes).join(",")
                        }).join("|"), n.divIds = c._map(e, function (e) {
                            return encodeURIComponent(e.adUnitCode)
                        }).join(","), a.some(function (e) {
                            return e
                        }) && (n.auid = a.join(","));
                        e.some(function (e) {
                            return e.params.doNotTrack
                        }) && (n.ns = 1);
                        !0 !== d.b.getConfig("coppa") && !e.some(function (e) {
                            return e.params.coppa
                        }) || (n.tfcd = 1);
                        e.forEach(function (t) {
                            if (t.params.customParams) {
                                var e = c._map(Object.keys(t.params.customParams), function (e) {
                                        return function (e, t) {
                                            var n = t[e];
                                            c.isArray(n) && (n = n.join(","));
                                            return (e.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_")
                                        }(e, t.params.customParams)
                                    }),
                                    n = window.btoa(e.join("&"));
                                i = !0, r.push(n)
                            } else r.push("")
                        }), i && (n.tps = r.join(","));
                        var s = [],
                            o = !1;
                        e.forEach(function (e) {
                            e.params.customFloor ? (s.push(Math.round(100 * e.params.customFloor) / 100 * 1e3), o = !0) : s.push(0)
                        }), o && (n.aumfs = s.join(","));
                        return {
                            method: "GET",
                            url: n.ph ? "https://u.openx.net/w/1.0/arj" : "https://".concat(e[0].params.delDomain, "/w/1.0/arj"),
                            data: n,
                            payload: {
                                bids: e,
                                startTime: new Date
                            }
                        }
                    }(a, r)), 0 < n.length && n.forEach(function (e) {
                        var t, n;
                        i.push({
                            method: "GET",
                            url: (n = function (e, t) {
                                var n, r, i = l([e], t),
                                    a = c.deepAccess(e, "params.video") || {},
                                    s = c.deepAccess(e, "mediaTypes.video.context"),
                                    o = c.deepAccess(e, "mediaTypes.video.playerSize");
                                c.isArray(e.sizes) && 2 === e.sizes.length && !c.isArray(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), r = parseInt(e.sizes[1], 10)) : c.isArray(e.sizes) && c.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), r = parseInt(e.sizes[0][1], 10)) : c.isArray(o) && 2 === o.length && (n = parseInt(o[0], 10), r = parseInt(o[1], 10));
                                Object.keys(a).forEach(function (e) {
                                    "openrtb" === e ? (a[e].w = n || a[e].w, a[e].v = r || a[e].v, i[e] = JSON.stringify(a[e])) : e in i || "url" === e || (i[e] = a[e])
                                }), i.auid = e.params.unit, i.vwd = n || a.vwd, i.vht = r || a.vht, "outstream" === s && (i.vos = "101");
                                a.mimes && (i.vmimes = a.mimes);
                                return i
                            }(t = e, r)).ph ? "https://u.openx.net/v/1.0/avjp" : "https://".concat(t.params.delDomain, "/v/1.0/avjp"),
                            data: n,
                            payload: {
                                bid: t,
                                startTime: new Date
                            }
                        })
                    }), i
                },
                interpretResponse: function (e, t) {
                    var n = e.body;
                    return ((/avjp$/.test(t.url) ? s.d : s.b) === s.d ? function (e, t) {
                        var n = t.bid,
                            r = (t.startTime, []);
                        if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                            var i = c.parseUrl(e.vastUrl).search || {},
                                a = {};
                            a.requestId = n.bidId, a.ttl = 300, a.netRevenue = !0, a.currency = e.currency, a.cpm = Number(e.pub_rev) / 1e3, a.width = e.width, a.height = e.height, a.creativeId = e.adid, a.vastUrl = e.vastUrl, a.mediaType = s.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, r.push(a)
                        }
                        return r
                    } : function (e, t) {
                        for (var n = t.bids, r = (t.startTime, e.ads.ad), i = [], a = 0; a < r.length; a++) {
                            var s = r[a],
                                o = parseInt(s.idx, 10),
                                d = {};
                            if (d.requestId = n[o].bidId, s.pub_rev) {
                                d.cpm = Number(s.pub_rev) / 1e3;
                                var c = s.creative[0];
                                c && (d.width = c.width, d.height = c.height), d.creativeId = c.id, d.ad = s.html, s.deal_id && (d.dealId = s.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = s.currency, s.tbd && (d.tbd = s.tbd), d.ts = s.ts, d.meta = {}, s.brand_id && (d.meta.brandId = s.brand_id), s.adv_id && (d.meta.dspid = s.adv_id), i.push(d)
                            }
                        }
                        return i
                    })(n, t.payload)
                },
                getUserSyncs: function (e, t, n, r) {
                    if (e.iframeEnabled || e.pixelEnabled) return [{
                        type: e.iframeEnabled ? "iframe" : "image",
                        url: c.deepAccess(t, "0.body.ads.pixels") || c.deepAccess(t, "0.body.pixels") || function (e, t) {
                            var n = [];
                            e && (n.push("gdpr=" + (e.gdprApplies ? 1 : 0)), n.push("gdpr_consent=" + encodeURIComponent(e.consentString || "")));
                            t && n.push("us_privacy=" + encodeURIComponent(t));
                            return "".concat("https://u.openx.net/w/1.0/pd").concat(0 < n.length ? "?" + n.join("&") : "")
                        }(n, r)
                    }]
                },
                transformBidParams: function (e) {
                    return c.convertTypes({
                        unit: "string",
                        customFloor: "number"
                    }, e)
                }
            };

        function l(e, t) {
            var n, r, i, a, s = c.inIframe();
            if (n = {
                    ju: d.b.getConfig("pageUrl") || t.refererInfo.referer,
                    ch: document.charSet || document.characterSet,
                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                    ifr: s,
                    tz: (new Date).getTimezoneOffset(),
                    tws: function (e) {
                        var t, n, r, i = window,
                            a = document,
                            s = a.documentElement;
                        if (e) {
                            try {
                                i = window.top, a = window.top.document
                            } catch (e) {
                                return
                            }
                            s = a.documentElement, r = a.body, t = i.innerWidth || s.clientWidth || r.clientWidth, n = i.innerHeight || s.clientHeight || r.clientHeight
                        } else s = a.documentElement, t = i.innerWidth || s.clientWidth, n = i.innerHeight || s.clientHeight;
                        return "".concat(t, "x").concat(n)
                    }(s),
                    be: 1,
                    bc: e[0].params.bc || "".concat(p, "_").concat(u),
                    dddid: c._map(e, function (e) {
                        return e.transactionId
                    }).join(","),
                    nocache: (new Date).getTime()
                }, e[0].params.platform && (n.ph = e[0].params.platform), t.gdprConsent) {
                var o = t.gdprConsent;
                void 0 !== o.consentString && (n.gdpr_consent = o.consentString), void 0 !== o.gdprApplies && (n.gdpr = o.gdprApplies ? 1 : 0), "iab" === d.b.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
            }
            return t && t.uspConsent && (n.us_privacy = t.uspConsent), c.deepAccess(e[0], "crumbs.pubcid") && c.deepSetValue(e[0], "userId.pubcid", c.deepAccess(e[0], "crumbs.pubcid")), r = n, i = e[0].userId, c._each(i, function (e, t) {
                var n = m[t];
                if (m.hasOwnProperty(t)) switch (t) {
                    case "digitrustid":
                        r[n] = c.deepAccess(e, "data.id");
                        break;
                    case "lipb":
                        r[n] = e.lipbid;
                        break;
                    default:
                        r[n] = e
                }
            }), n = r, e[0].schain && (n.schain = (a = e[0].schain, "".concat(a.ver, ",").concat(a.complete, "!").concat(function (e) {
                var n = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e.map(function (t) {
                    return n.map(function (e) {
                        return t[e] || ""
                    }).join(",")
                }).join("!")
            }(a.nodes)))), n
        }
        Object(r.registerBidder)(a)
    }
}, [503]);
pbjsChunk([103], {
    590: function (e, r, t) {
        e.exports = t(591)
    },
    591: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", function () {
            return o
        }), t.d(r, "VIDEO_ENDPOINT", function () {
            return l
        }), t.d(r, "SYNC_ENDPOINT", function () {
            return a
        }), t.d(r, "spec", function () {
            return h
        }), r.hasVideoMediaType = n, r.masSizeOrdering = c, r.determineRubiconVideoSizeId = S, r.getPriceGranularity = C, r.hasValidVideoParams = j, r.hasValidSupplyChainParams = k, r.encodeParam = T, r.resetUserSync = function () {
            R = !1
        };
        var v = t(0),
            i = t(1),
            g = t(3),
            u = t(2);

        function b(e, r) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, r) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var t = [],
                    i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return t
            }(e, r) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function y() {
            return (y = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function p(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function x(e) {
            return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var o = "https://fastlane.rubiconproject.com/a/api/fastlane.json",
            l = "https://prebid-server.rubiconproject.com/openrtb2/auction",
            a = "https://eus.rubiconproject.com/usync.html",
            d = {
                FASTLANE: {
                    id: "dt.id",
                    keyv: "dt.keyv",
                    pref: "dt.pref"
                },
                PREBID_SERVER: {
                    id: "id",
                    keyv: "keyv"
                }
            },
            f = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                17: "240x400",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                42: "2x4",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                66: "930x600",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                85: "300x120",
                90: "548x150",
                94: "970x310",
                95: "970x100",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                105: "250x800",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                145: "980x150",
                152: "1000x250",
                156: "640x320",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                221: "1x1",
                229: "320x180",
                230: "2000x1400",
                232: "580x400",
                234: "6x6",
                251: "2x2",
                256: "480x820",
                257: "400x600",
                258: "500x200",
                259: "998x200",
                264: "970x1000",
                265: "1920x1080",
                274: "1800x200",
                278: "320x500",
                282: "320x400",
                288: "640x380"
            };
        v._each(f, function (e, r) {
            return f[e] = r
        });
        var h = {
            code: "rubicon",
            gvlid: 52,
            supportedMediaTypes: [u.b, u.d],
            isBidRequestValid: function (e) {
                if ("object" !== x(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return v.logError("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                var i = m(e, !0);
                return !!i && ("video" !== i || j(e))
            },
            buildRequests: function (e, u) {
                var r = [],
                    t = e.filter(function (e) {
                        return "video" === m(e)
                    }).map(function (e) {
                        e.startTime = (new Date).getTime();
                        var r, t = {
                            id: e.transactionId,
                            test: g.b.getConfig("debug") ? 1 : 0,
                            cur: ["USD"],
                            source: {
                                tid: e.transactionId
                            },
                            tmax: g.b.getConfig("TTL") || 1e3,
                            imp: [{
                                exp: 300,
                                id: e.adUnitCode,
                                secure: 1,
                                ext: p({}, e.bidder, e.params),
                                video: v.deepAccess(e, "mediaTypes.video") || {}
                            }],
                            ext: {
                                prebid: {
                                    cache: {
                                        vastxml: {
                                            returnCreative: !1
                                        }
                                    },
                                    targeting: {
                                        includewinners: !0,
                                        includebidderkeys: !1,
                                        pricegranularity: C(g.b)
                                    }
                                }
                            }
                        };
                        if ("rubicon" !== e.bidder && (t.ext.prebid.aliases = p({}, e.bidder, "rubicon")), "function" != typeof e.getFloor || g.b.getConfig("rubicon.disableFloors")) r = parseFloat(v.deepAccess(e, "params.floor"));
                        else {
                            var i = e.getFloor({
                                currency: "USD",
                                mediaType: "video",
                                size: A(e, "video")
                            });
                            r = "object" !== x(i) || "USD" !== i.currency || isNaN(parseInt(i.floor)) ? void 0 : parseFloat(i.floor)
                        }
                        isNaN(r) || (t.imp[0].bidfloor = r), t.imp[0].ext[e.bidder].video.size_id = S(e),
                            function (r, t, e) {
                                if (!r) return;
                                "object" === x(g.b.getConfig("app")) ? r.app = g.b.getConfig("app") : r.site = {
                                    page: I(t, e)
                                };
                                "object" === x(g.b.getConfig("device")) && (r.device = g.b.getConfig("device"));
                                t.params.video.language && ["site", "device"].forEach(function (e) {
                                    r[e] && (r[e].content = y({
                                        language: t.params.video.language
                                    }, r[e].content))
                                })
                            }(t, e, u),
                            function (e, r) {
                                "object" === x(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                "object" === x(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                "object" === x(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                                var t = A(r, "video");
                                e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                            }(t, e);
                        var n, o = _(e, "PREBID_SERVER");
                        o && v.deepSetValue(t, "user.ext.digitrust", o), u.gdprConsent && ("boolean" == typeof u.gdprConsent.gdprApplies && (n = u.gdprConsent.gdprApplies ? 1 : 0), v.deepSetValue(t, "regs.ext.gdpr", n), v.deepSetValue(t, "user.ext.consent", u.gdprConsent.consentString));
                        u.uspConsent && v.deepSetValue(t, "regs.ext.us_privacy", u.uspConsent), e.userId && "object" === x(e.userId) && (e.userId.tdid || e.userId.pubcid || e.userId.lipb || e.userId.idl_env) && (v.deepSetValue(t, "user.ext.eids", []), e.userId.tdid && t.user.ext.eids.push({
                            source: "adserver.org",
                            uids: [{
                                id: e.userId.tdid,
                                ext: {
                                    rtiPartner: "TDID"
                                }
                            }]
                        }), e.userId.pubcid && t.user.ext.eids.push({
                            source: "pubcommon",
                            uids: [{
                                id: e.userId.pubcid
                            }]
                        }), e.userId.lipb && e.userId.lipb.lipbid && (t.user.ext.eids.push({
                            source: "liveintent.com",
                            uids: [{
                                id: e.userId.lipb.lipbid
                            }]
                        }), t.user.ext.tpid = {
                            source: "liveintent.com",
                            uid: e.userId.lipb.lipbid
                        }, Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && v.deepSetValue(t, "rp.target.LIseg", e.userId.lipb.segments)), e.userId.idl_env && t.user.ext.eids.push({
                            source: "liveramp.com",
                            uids: [{
                                id: e.userId.idl_env
                            }]
                        })), !0 === g.b.getConfig("coppa") && v.deepSetValue(t, "regs.coppa", 1), e.schain && k(e.schain) && v.deepSetValue(t, "source.ext.schain", e.schain);
                        var a = y({}, e.params.inventory, g.b.getConfig("fpd.context")),
                            s = y({}, e.params.visitor, g.b.getConfig("fpd.user"));
                        if (!v.isEmpty(a) || !v.isEmpty(s)) {
                            var d = {
                                bidders: [u.bidderCode],
                                config: {
                                    fpd: {}
                                }
                            };
                            v.isEmpty(a) || (d.config.fpd.site = a), v.isEmpty(s) || (d.config.fpd.user = s), v.deepSetValue(t, "ext.prebid.bidderconfig.0", d)
                        }
                        var c = v.deepAccess(e, "fpd.context.pbAdSlot");
                        return "string" == typeof c && c && v.deepSetValue(t.imp[0].ext, "context.data.adslot", c), e.storedAuctionResponse && v.deepSetValue(t.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()), {
                            method: "POST",
                            url: l,
                            data: t,
                            bidRequest: e
                        }
                    });
                if (!0 !== g.b.getConfig("rubicon.singleRequest")) r = t.concat(e.filter(function (e) {
                    return "banner" === m(e)
                }).map(function (e) {
                    var i = h.createSlotParams(e, u);
                    return {
                        method: "GET",
                        url: o,
                        data: h.getOrderedParams(i).reduce(function (e, r) {
                            var t = i[r];
                            return v.isStr(t) && "" !== t || v.isNumber(t) ? "".concat(e).concat(T(r, t), "&") : e
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                }));
                else {
                    var n = e.filter(function (e) {
                        return "banner" === m(e)
                    }).reduce(function (e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }, {});
                    r = t.concat(Object.keys(n).reduce(function (r, e) {
                        var t, i;
                        return t = n[e], i = 10, t.map(function (e, r) {
                            return r % i == 0 ? t.slice(r, r + i) : null
                        }).filter(function (e) {
                            return e
                        }).forEach(function (e) {
                            var i = h.combineSlotUrlParams(e.map(function (e) {
                                return h.createSlotParams(e, u)
                            }));
                            r.push({
                                method: "GET",
                                url: o,
                                data: h.getOrderedParams(i).reduce(function (e, r) {
                                    var t = i[r];
                                    return v.isStr(t) && "" !== t || v.isNumber(t) ? "".concat(e).concat(T(r, t), "&") : e
                                }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                                bidRequest: e
                            })
                        }), r
                    }, []))
                }
                return r
            },
            getOrderedParams: function (e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain", "tpid_tdid", "tpid_liveintent.com", "tg_v.LIseg", "dt.id", "dt.keyv", "dt.pref", "rf", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter(function (e) {
                        return r.test(e)
                    })).concat(Object.keys(e).filter(function (e) {
                        return t.test(e)
                    })).concat(["tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter(function (e) {
                    return -1 === i.indexOf(e)
                }))
            },
            combineSlotUrlParams: function (n) {
                if (1 === n.length) return n[0];
                var i = n.reduce(function (r, t, i) {
                        return Object.keys(t).forEach(function (e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        }), r
                    }, {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach(function (e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                }), i
            },
            createSlotParams: function (e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = A(e, "banner"),
                    n = b(t.latLong || [], 2),
                    o = n[0],
                    a = n[1],
                    s = g.b.getConfig("rubicon.int_type"),
                    d = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: "1",
                        tk_flint: "".concat(s || "pbjs_lite", "_v3.17.0"),
                        "x_source.tid": e.transactionId,
                        "x_source.pchain": t.pchain,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: I(e, r)
                    };
                if ("function" == typeof e.getFloor && !g.b.getConfig("rubicon.disableFloors")) {
                    var c = e.getFloor({
                        currency: "USD",
                        mediaType: "banner",
                        size: "*"
                    });
                    d.rp_hard_floor = "object" !== x(c) || "USD" !== c.currency || isNaN(parseInt(c.floor)) ? void 0 : c.floor
                }
                d.p_pos = "atf" === t.position || "btf" === t.position ? t.position : "", e.userId && (e.userId.tdid && (d.tpid_tdid = e.userId.tdid), e.userId.lipb && e.userId.lipb.lipbid && (d["tpid_liveintent.com"] = e.userId.lipb.lipbid, Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && (d["tg_v.LIseg"] = e.userId.lipb.segments.join(","))), e.userId.idl_env && (d["tpid_liveramp.com"] = e.userId.idl_env)), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (d.gdpr = Number(r.gdprConsent.gdprApplies)), d.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (d.us_privacy = encodeURIComponent(r.uspConsent));
                var u = y({}, t.visitor, g.b.getConfig("fpd.user"));
                Object.keys(u).forEach(function (e) {
                    null != u[e] && "keywords" !== e && (d["tg_v.".concat(e)] = "object" !== x(u[e]) || Array.isArray(u[e]) ? u[e].toString() : JSON.stringify(u[e]))
                });
                var p = y({}, t.inventory, g.b.getConfig("fpd.context"));
                Object.keys(p).forEach(function (e) {
                    null != p[e] && "keywords" !== e && (d["tg_i.".concat(e)] = "object" !== x(p[e]) || Array.isArray(p[e]) ? p[e].toString() : JSON.stringify(p[e]))
                });
                var l = (t.keywords || []).concat(v.deepAccess(g.b.getConfig("fpd.user"), "keywords") || [], v.deepAccess(g.b.getConfig("fpd.context"), "keywords") || []);
                d.kw = Array.isArray(l) && l.length ? l.join(",") : "";
                var f = v.deepAccess(e, "fpd.context.pbAdSlot");
                "string" == typeof f && f && (d["tg_i.dfp_ad_unit_code"] = f.replace(/^\/+/, ""));
                var m = _(e, "FASTLANE");
                return y(d, m), !0 === g.b.getConfig("coppa") && (d.coppa = 1), e.schain && k(e.schain) && (d.rp_schain = h.serializeSupplyChain(e.schain)), d
            },
            serializeSupplyChain: function (e) {
                if (!k(e)) return "";
                var r = e.ver,
                    t = e.complete,
                    i = e.nodes;
                return "".concat(r, ",").concat(t, "!").concat(h.serializeSupplyChainNodes(i))
            },
            serializeSupplyChainNodes: function (e) {
                var t = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e.map(function (r) {
                    return t.map(function (e) {
                        return encodeURIComponent(r[e] || "")
                    }).join(",")
                }).join("!")
            },
            interpretResponse: function (d, e) {
                var c = e.bidRequest;
                if (!(d = d.body) || "object" !== x(d)) return [];
                if (d.seatbid) {
                    var r = v.deepAccess(d, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && v.logWarn("Rubicon: Error in video response");
                    var o = [];
                    return d.seatbid.forEach(function (n) {
                        (n.bid || []).forEach(function (e) {
                            var r = {
                                requestId: c.bidId,
                                currency: d.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: !1 !== g.b.getConfig("rubicon.netRevenue"),
                                width: e.w || v.deepAccess(c, "mediaTypes.video.w") || v.deepAccess(c, "params.video.playerWidth"),
                                height: e.h || v.deepAccess(c, "mediaTypes.video.h") || v.deepAccess(c, "params.video.playerHeight")
                            };
                            e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid);
                            var t = v.deepAccess(d, "ext.responsetimemillis.rubicon");
                            if (c && t && (c.serverResponseTimeMs = t), v.deepAccess(e, "ext.prebid.type") === u.d) {
                                r.mediaType = u.d;
                                var i = v.deepAccess(e, "ext.prebid.targeting");
                                i && "object" === x(i) && (r.adserverTargeting = i), e.ext.prebid.cache && "object" === x(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && (r.videoCacheKey = i.hb_uuid, r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)
                            } else v.logWarn("Rubicon: video response received non-video media type");
                            o.push(r)
                        })
                    }), o
                }
                var t = d.ads;
                return "object" !== x(c) || Array.isArray(c) || "video" !== m(c) || "object" !== x(t) || (t = t[c.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function (e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n, o = Array.isArray(c) ? c[t] : c;
                    if (o && "object" === x(o)) {
                        var a = {
                            requestId: o.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: !1 !== g.b.getConfig("rubicon.netRevenue"),
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            },
                            meta: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (a.mediaType = r.creative_type), r.creative_type === u.d) a.width = o.params.video.playerWidth, a.height = o.params.video.playerHeight, a.vastUrl = r.creative_depot_url, a.impression_id = r.impression_id, a.videoCacheKey = r.impression_id;
                        else {
                            a.ad = (i = r.script, n = r.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(n, "'>\n<script type='text/javascript'>").concat(i, "<\/script>\n</div>\n</body>\n</html>"));
                            var s = b(f[r.size_id].split("x").map(function (e) {
                                return Number(e)
                            }), 2);
                            a.width = s[0], a.height = s[1]
                        }
                        a.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function (e, r) {
                            return e[r.key] = r.values[0], e
                        }, {
                            rpfl_elemid: o.adUnitCode
                        }), e.push(a)
                    } else v.logError("Rubicon: bidRequest undefined at index position:".concat(t), c, d);
                    return e
                }, []).sort(function (e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                })
            },
            getUserSyncs: function (e, r, t, i) {
                if (!R && e.iframeEnabled) {
                    var n = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? n += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : n += "?gdpr_consent=".concat(t.consentString)), i && (n += "".concat(n ? "&" : "?", "us_privacy=").concat(encodeURIComponent(i))), R = !0, {
                        type: "iframe",
                        url: a + n
                    }
                }
            },
            transformBidParams: function (e) {
                return v.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function _(e, r) {
            var t, i = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? r : void 0;
            if (!n || !d[n]) return null;
            var o = d[n];
            var a = function () {
                var e = v.deepAccess(i, "userId.digitrustid.data");
                if (e) return e;
                var r = window.DigiTrust && (g.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: "T9QSFKPDN9"
                }));
                return r && r.success && r.identity || null
            }();
            if (!a || a.privacy && a.privacy.optout) return null;
            var s = (p(t = {}, o.id, a.id), p(t, o.keyv, a.keyv), t);
            return o.pref && (s[o.pref] = 0), s
        }

        function I(e, r) {
            var t = g.b.getConfig("pageUrl");
            return t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer, e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function A(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(v.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== v.deepAccess(e, "mediaTypes.banner.sizes") ? n = s(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = s(e.sizes) : v.logWarn("Rubicon: no sizes are setup or found"), c(n)
        }

        function s(e) {
            return v.parseSizesInput(e).reduce(function (e, r) {
                var t = parseInt(f[r], 10);
                return t && e.push(t), e
            }, [])
        }

        function n(e) {
            return "object" === x(v.deepAccess(e, "params.video")) && void 0 !== v.deepAccess(e, "mediaTypes.".concat(u.d))
        }

        function m(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            return n(e) ? -1 === ["outstream", "instream"].indexOf(v.deepAccess(e, "mediaTypes.".concat(u.d, ".context"))) ? void(t && v.logError("Rubicon: mediaTypes.video.context must be outstream or instream")) : A(e, "video").length < 2 ? void(t && v.logError("Rubicon: could not determine the playerSize of the video")) : (t && v.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === A(e, "banner").length ? void(t && v.logError("Rubicon: could not determine the sizes for banner request")) : (t && v.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), "banner")
        }

        function c(e) {
            var n = [15, 2, 9];
            return e.sort(function (e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            })
        }

        function S(e) {
            var r = parseInt(v.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === v.deepAccess(e, "mediaTypes.".concat(u.d, ".context")) ? 203 : 201 : r
        }

        function C(e) {
            return {
                ranges: {
                    low: [{
                        max: 5,
                        increment: .5
                    }],
                    medium: [{
                        max: 20,
                        increment: .1
                    }],
                    high: [{
                        max: 20,
                        increment: .01
                    }],
                    auto: [{
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    }],
                    dense: [{
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    }],
                    custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
                } [e.getConfig("priceGranularity")]
            }
        }

        function j(r) {
            var t = !0,
                e = Object.prototype.toString.call([]),
                i = Object.prototype.toString.call(0),
                n = {
                    mimes: e,
                    protocols: e,
                    maxduration: i,
                    linearity: i,
                    api: e
                };
            return Object.keys(n).forEach(function (e) {
                Object.prototype.toString.call(v.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, v.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            }), t
        }

        function k(e) {
            var r = !1,
                t = ["asi", "sid", "hp"];
            return e.nodes && ((r = e.nodes.reduce(function (e, r) {
                return e ? t.every(function (e) {
                    return r[e]
                }) : e
            }, !0)) || v.logError("Rubicon: required schain params missing")), r
        }

        function T(e, r) {
            return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r))
        }
        var R = !1;
        Object(i.registerBidder)(h)
    }
}, [590]);
pbjs.processQueue();






//prebid

var PREBID_TIMEOUT = 3000;
var FAILSAFE_TIMEOUT = 3000;
var adUnits = [{
    code: '970x90',
    mediaTypes: {
        banner: {
            sizes: [
                [970, 250],
                [728, 90],
                [970, 90]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [
                [728, 90]
            ],
            siteId: "336021"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698264', //970x250
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540842208',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162662",
            accountId: "19712",
            position: "atf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15027771"
        }
    }]

}, {
    code: '300x250_P1',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 600],
                [300, 250]
            ]
        }
    },
    bids: [{
        bidder: 'openx',
        params: {
            unit: '540842224',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'ix',
        params: {
            size: [300, 600],
            siteId: "336017"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698262', //300x600
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162556",
            accountId: "19712",
            position: "atf"
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15027727"
        }
    }]

}, {
    code: '300x250_P2',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336014"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698263', //300x250 
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540842225',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162652",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15027729"
        }
    }]

}, {
    code: '300x250_P3',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336015"
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540842227',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698265', //300x250
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162654",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "15027730"
        }
    }]

}, {
    code: '300x250_P4',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336016"
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540842229',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698266', //300x250
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1162656",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "115027735"
        }
    }]

}, {
    code: 'Under_Article_1',
    mediaTypes: {
        banner: {
            sizes: [
                [728, 90]
            ]
        }
    },
    bids: [{
        bidder: 'openx',
        params: {
            unit: '540842232',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'ix',
        params: {
            size: [728, 90],
            siteId: "399716"
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1391070",
            accountId: "19712",
            position: "atf"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698267', //728x90
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "16698017"
        }
    }]

}, {
    code: 'Under_Article_2',
    mediaTypes: {
        banner: {
            sizes: [
                [728, 90]
            ]
        }
    },
    bids: [{
        bidder: 'openx',
        params: {
            unit: '540842235',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1391072",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '698268', //728x90
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'ix',
        params: {
            size: [728, 90],
            siteId: "399717"
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "16698022"
        }
    }]
}, {
    code: '300x250_P5',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "430180"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '802198', //300x250
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540915547',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1493166",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "18181593"
        }
    }]

}, {
    code: '300x250_P6',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "449527"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '802202', //300x250
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540945084',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1536002",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "18181668"
        }
    }]

}, {
    code: '300x250_P7',
    mediaTypes: {
        banner: {
            sizes: [
                [300, 250],
                [300, 600]
            ]
        }
    },
    bids: [{
        bidder: 'ix',
        params: {
            size: [300, 600],
            siteId: "449537"
        }
    }, {
        bidder: 'openx',
        params: {
            unit: '540945110',
            delDomain: 'ringieraxelspr-d.openx.net'
        }
    }, {
        bidder: 'rubicon',
        params: {
            siteId: "235620",
            zoneId: "1536008",
            accountId: "19712",
            position: "btf"
        }
    }, {
        bidder: "adform",
        params: {
            mid: '802208', //300x250
        }
    }, {
        bidder: 'criteo',
        params: {
            networkId: '9517'
        }
    }, {
        bidder: 'connectad',
        params: {
            networkId: '10047',
            siteId: '1033013'
        }
    }, {
        bidder: 'appnexus',
        params: {
            placementId: "18181730"
        }
    }]
}];
const customConfigObject = {
    "buckets": [{
        "precision": 2,
        "min": 0,
        "max": 4,
        "increment": 0.01
    }, {
        "precision": 2,
        "min": 4,
        "max": 8,
        "increment": 0.05
    }, {
        "precision": 2,
        "min": 8,
        "max": 20,
        "increment": 0.1
    }, {
        "precision": 2,
        "min": 21,
        "max": 99,
        "increment": 1.00
    }]
};

//var googletag = googletag || {};
//googletag.cmd = googletag.cmd || [];
//googletag.cmd.push(function() {
//    googletag.pubads().disableInitialLoad();
//});

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
pbjs.que.push(function () {
    pbjs.addAdUnits(adUnits);
    pbjs.setConfig({
        priceGranularity: customConfigObject
    });
    pbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });
});

function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function () {
        pbjs.que.push(function () {
            pbjs.setTargetingForGPTAsync();
            //regoogletag.pubads().refresh();
        });
    });
}
setTimeout(function () {
    initAdserver();
}, FAILSAFE_TIMEOUT);