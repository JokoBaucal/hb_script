/* prebid.js v2.44.7
Updated : 2020-02-13 */
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
            293: 0
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
    }, f(f.s = 720)
}({
    0: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "internal", function () {
            return _
        }), n.d(t, "bind", function () {
            return U
        }), t.replaceTokenInString = function (i, e, o) {
            return re(e, function (e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            }), i
        }, t.getUniqueIdentifierStr = N, t.generateUUID = function e(t) {
            return t ? (t ^ x() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, t.getBidIdParameter = function (e, t) {
            if (t && t[e]) return t[e];
            return ""
        }, t.tryAppendQueryString = function (e, t, n) {
            if (n) return e += t + "=" + encodeURIComponent(n) + "&";
            return e
        }, t.parseQueryStringParameters = function (e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, t.transformAdServerTargetingObj = function (t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? ge(t).map(function (e) {
                return "".concat(e, "=").concat(encodeURIComponent(pe(t, e)))
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
            } else if ("object" === b(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(k(e));
                    else
                        for (var a = 0; a < o; a++) t.push(k(e[a]))
            }
            return t
        }, t.parseGPTSingleSizeArray = k, t.parseGPTSingleSizeArrayToRtbSize = function (e) {
            if (P(e)) return {
                w: e[0],
                h: e[1]
            }
        }, t.getTopWindowLocation = q, t.getTopFrameReferrer = M, t.getAncestorOrigins = G, t.getWindowTop = W, t.getWindowSelf = L, t.getWindowLocation = F, t.getTopWindowUrl = function () {
            var t;
            try {
                t = _.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, t.getTopWindowReferrer = function () {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, t.logMessage = z, t.logInfo = V, t.logWarn = H, t.logError = K, t.hasConsoleLogger = function () {
            return I
        }, t.debugTurnedOn = Y, t.createInvisibleIframe = function () {
            var e = document.createElement("iframe");
            return e.id = N(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        }, t.getParameterByName = function (e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null !== t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : ""
        }, t.hasValidBidRequest = function (e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, re(e, i), !r) return K("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, t.addEventHandler = function (e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.isA = Q, t.isFn = X, t.isStr = $, t.isArray = Z, t.isNumber = ee, t.isPlainObject = te, t.isBoolean = function (e) {
            return Q(e, A)
        }, t.isEmpty = ne, t.isEmptyStr = function (e) {
            return $(e) && (!e || 0 === e.length)
        }, t._each = re, t.contains = function (e, t) {
            if (ne(e)) return !1;
            if (X(e.indexOf)) return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--;)
                if (e[n] === t) return !0;
            return !1
        }, n.d(t, "indexOf", function () {
            return ie
        }), t._map = function (n, r) {
            if (ne(n)) return [];
            if (X(n.map)) return n.map(r);
            var i = [];
            return re(n, function (e, t) {
                i.push(r(e, t, n))
            }), i
        }, t.hasOwn = oe, t.insertElement = ae, t.triggerPixel = ce, t.callBurl = function (e) {
            var t = e.source,
                n = e.burl;
            t === y.S2S.SRC && n && _.triggerPixel(n)
        }, t.insertHtmlIntoIframe = function (e) {
            if (!e) return;
            var t = document.createElement("iframe");
            t.id = N(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", _.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
        }, t.insertUserSyncIframe = ue, t.createTrackPixelHtml = function (e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }, t.createTrackPixelIframeHtml = se, t.getIframeDocument = function (e) {
            if (!e) return;
            var t;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (e) {
                _.logError("Cannot get iframe document", e)
            }
            return t
        }, t.getValueString = de, t.uniques = fe, t.flatten = le, t.getBidRequest = function (n, e) {
            return n ? (e.some(function (e) {
                var t = c()(e.bids, function (t) {
                    return ["bidId", "adId", "bid_id"].some(function (e) {
                        return t[e] === n
                    })
                });
                return t && (r = t), t
            }), r) : void 0;
            var r
        }, t.getKeys = ge, t.getValue = pe, t.getKeyByValue = function (e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t) return n
        }, t.getBidderCodes = function () {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function (e) {
                return e.bids.map(function (e) {
                    return e.bidder
                }).reduce(le, [])
            }).reduce(le).filter(fe)
        }, t.isGptPubadsDefined = function () {
            if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots)) return !0
        }, n.d(t, "getHighestCpm", function () {
            return be
        }), n.d(t, "getOldestHighestCpmBid", function () {
            return ye
        }), n.d(t, "getLatestHighestCpmBid", function () {
            return ve
        }), t.shuffle = function (e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, t.adUnitsFilter = function (e, t) {
            return s()(e, t && t.adUnitCode)
        }, t.isSrcdocSupported = function (e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, t.deepClone = me, t.inIframe = Se, t.isSafariBrowser = function () {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, t.replaceAuctionPrice = function (e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, t.timestamp = function () {
            return (new Date).getTime()
        }, t.checkCookieSupport = Ee, t.cookiesAreEnabled = function () {
            if (_.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, t.getCookie = function (e) {
            var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
            return t ? decodeURIComponent(t[2]) : null
        }, t.setCookie = function (e, t, n, r) {
            document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/").concat(r ? "; SameSite=".concat(r) : "")
        }, t.localStorageIsEnabled = function () {
            try {
                return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
            } catch (e) {
                return !1
            }
        }, t.delayExecution = function (e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function () {
                ++n === t && e.apply(this, arguments)
            }
        }, t.groupBy = function (e, n) {
            return e.reduce(function (e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }, {})
        }, t.createContentToExecuteExtScriptInFriendlyFrame = function (e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
        }, t.getDefinedParams = function (n, e) {
            return e.filter(function (e) {
                return n[e]
            }).reduce(function (e, t) {
                return p(e, function (e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }({}, t, n[t]))
            }, {})
        }, t.isValidMediaTypes = function (e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every(function (e) {
                    return s()(t, e)
                })) return !1;
            if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }, t.getBidderRequest = function (e, t, n) {
            return c()(e, function (e) {
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
                return Ae(t, e)
            }
        }, t.isSlotMatchingAdUnitCode = function (t) {
            return function (e) {
                return Ae(e, t)
            }
        }, t.unsupportedBidderMessage = function (e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }, t.deletePropertyFromObject = function (e, t) {
            var n = p({}, e);
            return delete n[t], n
        }, t.isInteger = Te, t.convertCamelToUnderscore = function (e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
                return "_" + t.toLowerCase()
            }).replace(/^_/, "")
        }, t.cleanObj = function (n) {
            return Object.keys(n).reduce(function (e, t) {
                return void 0 !== n[t] && (e[t] = n[t]), e
            }, {})
        }, t.pick = function (a, c) {
            return "object" === b(a) ? c.reduce(function (e, t, n) {
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
            return re(e, function (e, t) {
                if (Z(e)) {
                    var n = [];
                    re(e, function (e) {
                        !(e = de(r + "." + t, e)) && "" !== e || n.push(e)
                    }), e = n
                } else {
                    if (!$(e = de(r + "." + t, e))) return;
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
        }, t.setDataInLocalStorage = function (e, t) {
            Oe() && window.localStorage.setItem(e, t)
        }, t.getDataFromLocalStorage = function (e) {
            if (Oe()) return window.localStorage.getItem(e)
        }, t.removeDataFromLocalStorage = function (e) {
            Oe() && window.localStorage.removeItem(e)
        }, t.hasLocalStorage = Oe, t.isArrayOfNums = function (e, t) {
            return Z(e) && (!t || e.length === t) && e.every(function (e) {
                return Te(e)
            })
        }, t.fill = function (e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = te(e) ? me(e) : e;
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
            return Math.min.apply(Math, g(e))
        }, t.getMaxValueFromArray = function (e) {
            return Math.max.apply(Math, g(e))
        }, t.compareOn = function (n) {
            return function (e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        };
        var r = n(3),
            i = n(118),
            o = n.n(i),
            a = n(12),
            c = n.n(a),
            u = n(11),
            s = n.n(u),
            d = n(9),
            f = n(119);
        n.d(t, "deepAccess", function () {
            return f.a
        });
        var l = n(120);

        function g(e) {
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

        function p() {
            return (p = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        n.d(t, "deepSetValue", function () {
            return l.a
        });
        var y = n(5),
            v = "Array",
            h = "String",
            m = "Function",
            S = "Number",
            E = "Object",
            A = "Boolean",
            T = Object.prototype.toString,
            O = Boolean(window.console),
            I = Boolean(O && window.console.log),
            w = Boolean(O && window.console.info),
            C = Boolean(O && window.console.warn),
            j = Boolean(O && window.console.error),
            _ = {
                checkCookieSupport: Ee,
                createTrackPixelIframeHtml: se,
                getWindowSelf: L,
                getWindowTop: W,
                getAncestorOrigins: G,
                getTopFrameReferrer: M,
                getWindowLocation: F,
                getTopWindowLocation: q,
                insertUserSyncIframe: ue,
                insertElement: ae,
                isFn: X,
                triggerPixel: ce,
                logError: K,
                logWarn: H,
                logMessage: z,
                logInfo: V
            },
            B = {},
            U = function (e, t) {
                return t
            }.bind(null, 1, B)() === B ? Function.prototype.bind : function (e) {
                var t = this,
                    n = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
                }
            };
        var R, D = (R = 0, function () {
            return ++R
        });

        function N() {
            return D() + Math.random().toString(16).substr(2)
        }

        function x() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }

        function k(e) {
            if (P(e)) return e[0] + "x" + e[1]
        }

        function P(e) {
            return Z(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
        }

        function q() {
            if (Se()) {
                var e;
                try {
                    e = _.getAncestorOrigins() || _.getTopFrameReferrer()
                } catch (e) {
                    V("could not obtain top window location", e)
                }
                if (e) return Object(d.c)(e, {
                    decodeSearchAsString: !0
                })
            }
            return _.getWindowLocation()
        }

        function M() {
            try {
                window.top.location.toString();
                for (var e, t = "";
                    (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer), e !== window.top;);
                return t
            } catch (e) {
                return window.document.referrer
            }
        }

        function G() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }

        function W() {
            return window.top
        }

        function L() {
            return window.self
        }

        function F() {
            return window.location
        }

        function z() {
            Y() && I && console.log.apply(console, J(arguments, "MESSAGE:"))
        }

        function V() {
            Y() && w && console.info.apply(console, J(arguments, "INFO:"))
        }

        function H() {
            Y() && C && console.warn.apply(console, J(arguments, "WARNING:"))
        }

        function K() {
            Y() && j && console.error.apply(console, J(arguments, "ERROR:"))
        }

        function J(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }

        function Y() {
            return !!r.b.getConfig("debug")
        }

        function Q(e, t) {
            return T.call(e) === "[object " + t + "]"
        }

        function X(e) {
            return Q(e, m)
        }

        function $(e) {
            return Q(e, h)
        }

        function Z(e) {
            return Q(e, v)
        }

        function ee(e) {
            return Q(e, S)
        }

        function te(e) {
            return Q(e, E)
        }

        function ne(e) {
            if (!e) return !0;
            if (Z(e) || $(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }

        function re(e, t) {
            if (!ne(e)) {
                if (X(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }
        var ie = function () {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        }();

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
            t && _.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e
        }

        function ue(e, t) {
            var n = _.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && _.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), _.insertElement(i, document, "html", !0)
        }

        function se(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(N(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }

        function de(e, t, n) {
            return null == t ? n : $(t) ? t : ee(t) ? t.toString() : void _.logWarn("Unsuported type for param: " + e + " required type: String")
        }

        function fe(e, t, n) {
            return n.indexOf(e) === t
        }

        function le(e, t) {
            return e.concat(t)
        }

        function ge(e) {
            return Object.keys(e)
        }

        function pe(e, t) {
            return e[t]
        }
        var be = he("timeToRespond", function (e, t) {
                return t < e
            }),
            ye = he("responseTimestamp", function (e, t) {
                return t < e
            }),
            ve = he("responseTimestamp", function (e, t) {
                return e < t
            });

        function he(n, r) {
            return function (e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }

        function me(e) {
            return o()(e)
        }

        function Se() {
            try {
                return _.getWindowSelf() !== _.getWindowTop()
            } catch (e) {
                return !0
            }
        }

        function Ee() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }
        var Ae = function (e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };

        function Te(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }

        function Oe() {
            try {
                return !!window.localStorage
            } catch (e) {
                K("Local storage api disabled")
            }
        }
    },
    1: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.registerBidder = function (t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = I(e);
                a.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach(function (e) {
                a.default.aliasRegistry[e] = t.code, r(A({}, t, {
                    code: e
                }))
            })
        }, t.newBidder = I, t.preloadBidderMappingFile = w, t.getIabSubCategory = function (t, e) {
            var n = a.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo(),
                    i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                    o = Object(m.getDataFromLocalStorage)(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }, t.isValid = C;
        var r = n(54),
            a = n(7),
            o = n(3),
            y = n(23),
            c = n(32),
            u = n(27),
            s = n(33),
            i = n(5),
            v = n.n(i),
            d = n(8),
            h = n.n(d),
            f = n(11),
            l = n.n(f),
            g = n(4),
            m = n(0),
            p = n(2),
            b = n(13);

        function S(e, t) {
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

        function A() {
            return (A = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var T = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
            O = 1;

        function I(g) {
            return A(new r.a(g.code), {
                getSpec: function () {
                    return Object.freeze(g)
                },
                registerSyncs: p,
                callBids: function (o, a, e, n, c, r) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            s = [],
                            t = o.bids.filter(b);
                        if (0 !== t.length) {
                            var d = {};
                            t.forEach(function (e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            });
                            var i = g.buildRequests(t, o);
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
                                            }, void 0, A({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: r(e),
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), A({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            Object(m.logWarn)("Skipping invalid request from ".concat(g.code, ". Request type ").concat(i.type, " must be GET or POST")), f()
                                    }

                                    function e(e, t) {
                                        c(g.code);
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
                                            n = g.interpretResponse(e, i)
                                        } catch (e) {
                                            return Object(m.logError)("Bidder ".concat(g.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f()
                                        }

                                        function r(e) {
                                            var t, n, r = d[e.requestId];
                                            if (r) {
                                                e.originalCpm = e.cpm, e.originalCurrency = e.currency;
                                                var i = A(Object(y.a)(v.a.STATUS.GOOD, r), e);
                                                t = r.adUnitCode, n = i, u[t] = !0, C(t, n, [o]) && a(t, n)
                                            } else Object(m.logWarn)("Bidder ".concat(g.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                        }
                                        n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n)
                                    }

                                    function t(e) {
                                        c(g.code), Object(m.logError)("Server call for ".concat(g.code, " failed: ").concat(e, ". Continuing without bids.")), f()
                                    }
                                })
                            } else l()
                        } else l()
                    }

                    function l() {
                        e(), h.a.emit(v.a.EVENTS.BIDDER_DONE, o), p(s, o.gdprConsent, o.uspConsent)
                    }
                }
            });

            function p(e, t, n) {
                if (g.getUserSyncs && !a.default.aliasRegistry[g.code]) {
                    var r = o.b.getConfig("userSync.filterSettings"),
                        i = g.getUserSyncs({
                            iframeEnabled: !!(o.b.getConfig("userSync.iframeEnabled") || r && (r.iframe || r.all)),
                            pixelEnabled: !!(o.b.getConfig("userSync.pixelEnabled") || r && (r.image || r.all))
                        }, e, t, n);
                    i && (Array.isArray(i) || (i = [i]), i.forEach(function (e) {
                        c.a.registerSync(e.type, g.code, e.url)
                    }))
                }
            }

            function b(e) {
                return !!g.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(g.code, ": ").concat(JSON.stringify(e))), !1)
            }
        }

        function w(e, t) {
            if (!o.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
            t.filter(function (e) {
                return Object(m.deepAccess)(e, "mediaTypes.video.context") === p.a
            }).map(function (e) {
                return e.bids.map(function (e) {
                    return e.bidder
                })
            }).reduce(m.flatten, []).filter(m.uniques).forEach(function (n) {
                var e = a.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo(),
                        r = t.refreshInDays ? t.refreshInDays : O,
                        i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
                        o = Object(m.getDataFromLocalStorage)(i);
                    (!o || Object(m.timestamp)() < o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(g.a)(t.url, {
                        success: function (e) {
                            try {
                                e = JSON.parse(e);
                                var t = {
                                    lastUpdated: Object(m.timestamp)(),
                                    mapping: e.mapping
                                };
                                Object(m.setDataInLocalStorage)(i, JSON.stringify(t))
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

        function C(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t), T.every(function (e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            }) ? "native" !== t.mediaType || Object(u.f)(t, n) ? "video" !== t.mediaType || Object(s.d)(t, n) ? !("banner" === t.mediaType && ! function (e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
                var r = Object(m.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = Object(m.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = S(o[0].split("x"), 2),
                    c = a[0],
                    u = a[1];
                return t.width = parseInt(c, 10), t.height = parseInt(u, 10), !0
            }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
        Object(b.a)("checkAdUnitSetup").before(w)
    },
    10: function (e, t, n) {
        "use strict";
        t.a = i, t.c = function (e) {
            return !(!e || !e.url)
        }, t.b = function (e, t) {
            e.render(t)
        };
        var f = n(42),
            l = n(0),
            r = n(12),
            g = n.n(r);

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
            }, t = d, n = pbjs.adUnits, (r = g()(n, function (e) {
                return e.code === t
            })) && r.renderer && r.renderer.url && r.renderer.render ? l.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)) : Object(f.b)(o, this.callback, !0)
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
        var r = n(19).document;
        e.exports = r && r.documentElement
    },
    101: function (e, t, n) {
        var r = n(29),
            i = n(47),
            o = n(52)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    },
    102: function (e, t, n) {
        n(103);
        for (var r = n(19), i = n(21), o = n(30), a = n(14)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
            var s = c[u],
                d = r[s],
                f = d && d.prototype;
            f && !f[a] && i(f, a, s), o[s] = o.Array
        }
    },
    103: function (e, t, n) {
        "use strict";
        var r = n(40),
            i = n(69),
            o = n(30),
            a = n(50);
        e.exports = n(51)(Array, "Array", function (e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function () {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    },
    104: function (e, t, n) {
        "use strict";
        var r = n(105),
            i = n(77);
        e.exports = n(107)("Set", function (t) {
            return function (e) {
                return t(this, 0 < arguments.length ? e : void 0)
            }
        }, {
            add: function (e) {
                return r.def(i(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, r)
    },
    105: function (e, t, n) {
        "use strict";

        function a(e, t) {
            var n, r = p(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        }
        var c = n(20).f,
            u = n(67),
            s = n(70),
            d = n(26),
            f = n(71),
            l = n(41),
            r = n(51),
            i = n(69),
            o = n(106),
            g = n(22),
            p = n(76).fastKey,
            b = n(77),
            y = g ? "_s" : "size";
        e.exports = {
            getConstructor: function (e, o, n, r) {
                var i = e(function (e, t) {
                    f(e, i, o, "_i"), e._t = o, e._i = u(null), e._f = void 0, e._l = void 0, e[y] = 0, null != t && l(t, n, e[r], e)
                });
                return s(i.prototype, {
                    clear: function () {
                        for (var e = b(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[y] = 0
                    },
                    delete: function (e) {
                        var t = b(this, o),
                            n = a(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[y]--
                        }
                        return !!n
                    },
                    forEach: function (e, t) {
                        b(this, o);
                        for (var n, r = d(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function (e) {
                        return !!a(b(this, o), e)
                    }
                }), g && c(i.prototype, "size", {
                    get: function () {
                        return b(this, o)[y]
                    }
                }), i
            },
            def: function (e, t, n) {
                var r, i, o = a(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: i = p(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[y]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: a,
            setStrong: function (e, n, t) {
                r(e, n, function (e, t) {
                    this._t = b(e, n), this._k = t, this._l = void 0
                }, function () {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? i(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (e._t = void 0, i(1))
                }, t ? "entries" : "values", !t, !0), o(n)
            }
        }
    },
    106: function (e, t, n) {
        "use strict";
        var r = n(19),
            i = n(16),
            o = n(20),
            a = n(22),
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
    107: function (e, t, n) {
        "use strict";
        var f = n(19),
            l = n(15),
            g = n(76),
            p = n(36),
            b = n(21),
            y = n(70),
            v = n(41),
            h = n(71),
            m = n(17),
            S = n(53),
            E = n(20).f,
            A = n(46)(0),
            T = n(22);
        e.exports = function (n, e, t, r, i, o) {
            var a = f[n],
                c = a,
                u = i ? "set" : "add",
                s = c && c.prototype,
                d = {};
            return T && "function" == typeof c && (o || s.forEach && !p(function () {
                (new c).entries().next()
            })) ? (c = e(function (e, t) {
                h(e, c, n, "_c"), e._c = new a, null != t && v(t, i, e[u], e)
            }), A("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (r) {
                var i = "add" == r || "set" == r;
                r in s && (!o || "clear" != r) && b(c.prototype, r, function (e, t) {
                    if (h(this, c, r), !i && o && !m(e)) return "get" == r && void 0;
                    var n = this._c[r](0 === e ? 0 : e, t);
                    return i ? this : n
                })
            }), o || E(c.prototype, "size", {
                get: function () {
                    return this._c.size
                }
            })) : (c = r.getConstructor(e, n, i, u), y(c.prototype, t), g.NEED = !0), S(c, n), d[n] = c, l(l.G + l.W + l.F, d), o || r.setStrong(c, n, i), c
        }
    },
    108: function (e, t, n) {
        var r = n(15);
        r(r.P + r.R, "Set", {
            toJSON: n(109)("Set")
        })
    },
    109: function (e, t, n) {
        var r = n(75),
            i = n(110);
        e.exports = function (e) {
            return function () {
                if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
                return i(this)
            }
        }
    },
    11: function (e, t, n) {
        n(91), e.exports = n(16).Array.includes
    },
    110: function (e, t, n) {
        var r = n(41);
        e.exports = function (e, t) {
            var n = [];
            return r(e, !1, n.push, n, t), n
        }
    },
    111: function (e, t, n) {
        n(112)("Set")
    },
    112: function (e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function (e) {
            r(r.S, e, {
                of: function () {
                    for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    },
    113: function (e, t, n) {
        n(114)("Set")
    },
    114: function (e, t, n) {
        "use strict";
        var r = n(15),
            u = n(59),
            s = n(26),
            d = n(41);
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
    115: function (e, t, n) {
        "use strict";
        var p = n(26),
            r = n(15),
            b = n(47),
            y = n(72),
            v = n(73),
            h = n(39),
            m = n(116),
            S = n(74);
        r(r.S + r.F * !n(117)(function (e) {
            Array.from(e)
        }), "Array", {
            from: function (e, t, n) {
                var r, i, o, a, c = b(e),
                    u = "function" == typeof this ? this : Array,
                    s = arguments.length,
                    d = 1 < s ? t : void 0,
                    f = void 0 !== d,
                    l = 0,
                    g = S(c);
                if (f && (d = p(d, 2 < s ? n : void 0, 2)), null == g || u == Array && v(g))
                    for (i = new u(r = h(c.length)); l < r; l++) m(i, l, f ? d(c[l], l) : c[l]);
                else
                    for (a = g.call(c), i = new u; !(o = a.next()).done; l++) m(i, l, f ? y(a, d, [o.value, l], !0) : o.value);
                return i.length = l, i
            }
        })
    },
    116: function (e, t, n) {
        "use strict";
        var r = n(20),
            i = n(45);
        e.exports = function (e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    },
    117: function (e, t, n) {
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
    118: function (e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    119: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e
        }
    },
    12: function (e, t, n) {
        n(85), e.exports = n(16).Array.find
    },
    120: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {}
        }
    },
    121: function (e, t) {
        h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
        var p = "fun-hooks";
        var n = Object.freeze({
                useProxy: !0,
                ready: 0
            }),
            b = new WeakMap,
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

        function y(e, t) {
            return Array.prototype.slice.call(e, t)
        }
        var v = Object.assign || function (e) {
            return r.call(y(arguments, 1), function (t, n) {
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
                        i || console.warn(p + ": referenced '" + o + "' but it was never created")
                    }), t[n] = g(function (e) {
                        t[n] = e, i = !0
                    })) : t[n] = {})
                }, e)
            }

            function g(r) {
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
                return b.set(e.after, t), e;

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
                var n = e.after && b.get(e.after);
                if (n) {
                    if (n.type !== f) throw p + ": recreated hookable with different type";
                    return e
                }
                var r, i, o = t ? l(t) : g(),
                    a = {
                        get: function (e, t) {
                            return o[t] || Reflect.get.apply(Reflect, arguments)
                        }
                    };
                return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : v(i = function () {
                    return a.apply ? a.apply(e, this, y(arguments)) : e.apply(this, arguments)
                }, o), b.get(i.after).install(f, i, function (e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function (n, r, e) {
                        var i, o = 0,
                            a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();

                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }

                        function u(e) {
                            if (d[o]) {
                                var t = y(arguments);
                                return u.bail = c, t.unshift(u), d[o++].apply(r, t)
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }
                        return d[s] = function () {
                            var e = y(arguments, 1);
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
                        throw p + ": hooked function not ready"
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
        var r = n(121),
            i = n.n(r);
        var o = i()({
                ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
            }),
            a = o.get
    },
    14: function (e, t, n) {
        var r = n(62)("wks"),
            i = n(49),
            o = n(19).Symbol,
            a = "function" == typeof o;
        (e.exports = function (e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    15: function (e, t, n) {
        var b = n(19),
            y = n(16),
            v = n(26),
            h = n(21),
            m = n(29),
            S = "prototype",
            E = function (e, t, n) {
                var r, i, o, a = e & E.F,
                    c = e & E.G,
                    u = e & E.S,
                    s = e & E.P,
                    d = e & E.B,
                    f = e & E.W,
                    l = c ? y : y[t] || (y[t] = {}),
                    g = l[S],
                    p = c ? b : u ? b[t] : (b[t] || {})[S];
                for (r in c && (n = t), n)(i = !a && p && void 0 !== p[r]) && m(l, r) || (o = i ? p[r] : n[r], l[r] = c && "function" != typeof p[r] ? n[r] : d && i ? v(o, b) : f && p[r] == o ? function (r) {
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
                }(o) : s && "function" == typeof o ? v(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & E.R && g && !g[r] && h(g, r, o)))
            };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E
    },
    16: function (e, t) {
        var n = e.exports = {
            version: "2.6.10"
        };
        "number" == typeof __e && (__e = n)
    },
    166: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(46)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o](function () {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            findIndex: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(40)(o)
    },
    169: function (e, t, n) {
        "use strict";
        t.a = function () {
            addEventListener("message", a, !1)
        };
        var r = n(8),
            b = n.n(r),
            y = n(27),
            i = n(5),
            v = (n.n(i), n(0)),
            h = n(25),
            o = n(12),
            m = n.n(o),
            S = n(10),
            E = i.EVENTS.BID_WON;

        function a(e) {
            var t, n, r, i, o, a, c, u, s, d, f = e.message ? "message" : "data",
                l = {};
            try {
                l = JSON.parse(e[f])
            } catch (e) {
                return
            }
            if (l && l.adId) {
                var g = m()(h.a.getBidsReceived(), function (e) {
                    return e.adId === l.adId
                });
                if (g && "Prebid Request" === l.message && (t = g, n = l.adServerDomain, r = e.source, i = t.adId, o = t.ad, a = t.adUrl, c = t.width, u = t.height, s = t.renderer, d = t.cpm, Object(S.c)(s) ? Object(S.b)(s, t) : i && (function (e) {
                        var i = e.adUnitCode,
                            r = e.width,
                            o = e.height;

                        function a(e) {
                            var t, n = (t = i, window.googletag ? function (e) {
                                    return m()(window.googletag.pubads().getSlots().filter(Object(v.isSlotMatchingAdUnitCode)(e)), function (e) {
                                        return e
                                    }).getSlotElementId()
                                }(t) : window.apntag ? function (e) {
                                    var t = window.apntag.getTag(e);
                                    return t && t.targetId
                                }(t) : t),
                                r = document.getElementById(n);
                            return r && r.querySelector(e)
                        } ["div", "iframe"].forEach(function (e) {
                            var t = a(e + ':not([style*="display: none"])');
                            if (t) {
                                var n = t.style;
                                n.width = r + "px", n.height = o + "px"
                            } else Object(v.logWarn)("Unable to locate matching page element for adUnitCode ".concat(i, ".  Can't resize it to ad's dimensions.  Please review setup."))
                        })
                    }(t), r.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: Object(v.replaceAuctionPrice)(o, d),
                        adUrl: Object(v.replaceAuctionPrice)(a, d),
                        adId: i,
                        width: c,
                        height: u
                    }), n)), h.a.addWinningBid(g), b.a.emit(E, g)), g && "Prebid Native" === l.message) {
                    if ("assetRequest" === l.action) {
                        var p = Object(y.c)(l, g);
                        return void e.source.postMessage(JSON.stringify(p), e.origin)
                    }
                    if ("click" === Object(y.b)(l, g)) return;
                    h.a.addWinningBid(g), b.a.emit(E, g)
                }
            }
        }
    },
    17: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    170: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && f(t, !0)
        };
        var r = n(3),
            o = n(0),
            i = n(43);

        function a() {
            return (a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var c, u = "pbjs:debugging";

        function s(e) {
            Object(o.logMessage)("DEBUG: " + e)
        }

        function d() {
            i.c.getHooks({
                hook: c
            }).remove()
        }

        function f(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            r.b.setConfig({
                debug: !0
            }), s("bidder overrides enabled".concat(n ? " from session" : "")), d(), c = function (e, r, i) {
                if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(i.bidderCode)) return void
                function (e) {
                    Object(o.logWarn)("DEBUG: " + e)
                }("bidder '".concat(i.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function (n) {
                    n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = a({}, i), Object.keys(n).filter(function (e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    }).forEach(function (e) {
                        var t = n[e];
                        s("bidder overrides changed '".concat(r, "/").concat(i.bidderCode, "' bid.").concat(e, " from '").concat(i[e], "' to '").concat(t, "'")), i[e] = t
                    }))
                });
                e(r, i)
            }.bind(e), i.c.before(c, 5)
        }

        function l(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                f(e)
            } else {
                d(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        r.b.getConfig("debugging", function (e) {
            return l(e.debugging)
        })
    },
    19: function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
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
        var r = n(28),
            i = n(86),
            o = n(87),
            a = Object.defineProperty;
        t.f = n(22) ? Object.defineProperty : function (e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    21: function (e, t, n) {
        var r = n(20),
            i = n(45);
        e.exports = n(22) ? function (e, t, n) {
            return r.f(e, t, i(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    },
    22: function (e, t, n) {
        e.exports = !n(36)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    23: function (e, t, n) {
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
    24: function (e, t, n) {
        "use strict";
        t.a = function () {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs")
    },
    25: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return u
        });
        var r = n(0),
            s = n(43),
            i = n(12),
            o = n.n(i),
            a = n(5);
        var d, c, u = (d = [], (c = {}).addWinningBid = function (t) {
            var e = o()(d, function (e) {
                return e.getAuctionId() === t.auctionId
            });
            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
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
                u = Object(s.j)({
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
            return Object(s.i)()[a.JSON_MAPPING.ADSERVER_TARGETING]
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
    26: function (e, t, n) {
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
    265: function (e, t, n) {
        n(266), e.exports = n(16).String.includes
    },
    266: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(267),
            o = "includes";
        r(r.P + r.F * n(269)(o), "String", {
            includes: function (e, t) {
                return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? t : void 0)
            }
        })
    },
    267: function (e, t, n) {
        var r = n(268),
            i = n(38);
        e.exports = function (e, t, n) {
            if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e))
        }
    },
    268: function (e, t, n) {
        var r = n(17),
            i = n(37),
            o = n(14)("match");
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    },
    269: function (e, t, n) {
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
    27: function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return o
        }), n.d(t, "a", function () {
            return s
        }), t.g = function (e) {
            if (e && e.type && function (e) {
                    return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1)
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
    28: function (e, t, n) {
        var r = n(17);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    29: function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    },
    3: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return v
        }), n.d(t, "b", function () {
            return w
        });
        var r = n(44),
            i = n(12),
            a = n.n(i),
            o = n(11),
            c = n.n(o),
            u = n(65),
            s = n.n(u),
            d = n(9);

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
            g = n(0),
            p = n(5),
            b = "TRUE" === (Object(d.d)(window.location.search)[p.DEBUG_MODE] || "").toUpperCase(),
            y = window.location.origin,
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
        var E, A, T, O, I, w = (O = [], I = null, C(), {
            getConfig: function () {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? g.deepAccess(j(), e) : j()
                }
                return function (e, t) {
                    var n = t;
                    if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
                        var r = {
                            topic: e,
                            callback: n
                        };
                        return O.push(r),
                            function () {
                                O.splice(O.indexOf(r), 1)
                            }
                    }
                    g.logError("listener must be a function")
                }.apply(void 0, arguments)
            },
            setConfig: function (n) {
                if (g.isPlainObject(n)) {
                    var e = Object.keys(n),
                        r = {};
                    e.forEach(function (e) {
                        var t = n[e];
                        g.isPlainObject(E[e]) && g.isPlainObject(t) && (t = f({}, E[e], t)), r[e] = A[e] = t
                    }), _(r)
                } else g.logError("setConfig options must be an object")
            },
            setDefaults: function (e) {
                g.isPlainObject(E) ? (f(E, e), f(A, e)) : g.logError("defaults must be an object")
            },
            resetConfig: C,
            runWithBidder: B,
            callbackWithBidder: function (o) {
                return function (i) {
                    return function () {
                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return B(o, (e = g.bind).call.apply(e, [i, this].concat(n)))
                    }
                }
            },
            setBidderConfig: function (r) {
                try {
                    ! function (e) {
                        if (!g.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                        if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                        if (!g.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object"
                    }(r), r.bidders.forEach(function (n) {
                        T[n] || (T[n] = {}), Object.keys(r.config).forEach(function (e) {
                            var t = r.config[e];
                            g.isPlainObject(t) ? T[n][e] = f({}, T[n][e] || {}, t) : T[n][e] = t
                        })
                    })
                } catch (e) {
                    g.logError(e)
                }
            },
            getBidderConfig: function () {
                return T
            }
        });

        function C() {
            E = {};
            var n = {
                _debug: b,
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
                _publisherDomain: y,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: S.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : g.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = S.CUSTOM, g.logMessage("Using custom price granularity")))
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
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : g.isPlainObject(n) && (e[t] = n[t], g.logMessage("Using custom price granularity for ".concat(t))) : g.logWarn("Invalid price granularity for media type: ".concat(t)), e
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
                _bidderSequence: m,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    h[e] ? this._bidderSequence = e : g.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
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
                if (!e) return g.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                if ("string" == typeof e) i(e) || g.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                else if (g.isPlainObject(e) && !Object(r.b)(e)) return g.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                return !0
            }
            A && _(Object.keys(A).reduce(function (e, t) {
                return A[t] !== n[t] && (e[t] = n[t] || {}), e
            }, {})), A = n, T = {}
        }

        function j() {
            if (I && T && g.isPlainObject(T[I])) {
                var n = T[I],
                    e = new s.a(Object.keys(A).concat(Object.keys(n)));
                return l(e).reduce(function (e, t) {
                    return void 0 === n[t] ? e[t] = A[t] : void 0 === A[t] ? e[t] = n[t] : g.isPlainObject(n[t]) ? e[t] = f({}, A[t], n[t]) : e[t] = n[t], e
                }, {})
            }
            return f({}, A)
        }

        function _(i) {
            var t = Object.keys(i);
            O.filter(function (e) {
                return c()(t, e.topic)
            }).forEach(function (e) {
                var t, n, r;
                e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t))
            }), O.filter(function (e) {
                return "*" === e.topic
            }).forEach(function (e) {
                return e.callback(i)
            })
        }

        function B(e, t) {
            I = e;
            try {
                return t()
            } finally {
                I = null
            }
        }
    },
    30: function (e, t) {
        e.exports = {}
    },
    31: function (e, t, n) {
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
    32: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return v
        });
        var a = n(0),
            r = n(3),
            i = n(11),
            o = n.n(i);

        function c(e, t) {
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

        function u() {
            return (u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        r.b.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3,
                auctionDelay: 0
            }
        });
        var s, d, f, l, g, p, b, y = !a.isSafariBrowser() && a.cookiesAreEnabled(),
            v = (s = {
                config: r.b.getConfig("userSync"),
                browserSupportsCookies: y
            }, d = {}, f = h(), l = new Set, p = {
                image: !(g = {}),
                iframe: !1
            }, b = s.config, r.b.getConfig("userSync", function (e) {
                b = u(b, e.userSync)
            }), d.registerSync = function (e, t, n) {
                return l.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : b.syncEnabled && a.isArray(f[e]) ? t ? 0 !== b.syncsPerBidder && Number(g[t]) >= b.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : d.canBidderRegisterSync(e, t) ? (f[e].push([t, n]), (r = g)[i = t] ? r[i] += 1 : r[i] = 1, void(g = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
                var r, i
            }, d.syncUsers = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(m, Number(e));
                m()
            }, d.triggerUserSyncs = function () {
                b.enableOverride && d.syncUsers()
            }, d.canBidderRegisterSync = function (e, t) {
                if (b.filterSettings) {
                    if (E(e, t)) return !1
                } else {
                    if (b.enabledBidders && b.enabledBidders.length && b.enabledBidders.indexOf(t) < 0) return !1;
                    if ("iframe" === e && !b.iframeEnabled && !p.iframe) return !1;
                    if ("image" === e && !b.pixelEnabled && !p.image) return !1
                }
                return !0
            }, d);

        function h() {
            return {
                image: [],
                iframe: []
            }
        }

        function m() {
            if (b.syncEnabled && s.browserSupportsCookies) {
                try {
                    ! function () {
                        if (!b.pixelEnabled && !p.image) return;
                        S(f.image, function (e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r)
                        })
                    }(),
                    function () {
                        if (!b.iframeEnabled && !p.iframe) return;
                        S(f.iframe, function (e) {
                            var t = c(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r)
                        })
                    }()
                } catch (e) {
                    return a.logError("Error firing user syncs", e)
                }
                f = h()
            }
        }

        function S(e, t) {
            a.shuffle(e).forEach(function (e) {
                t(e), l.add(e[0])
            })
        }

        function E(e, t) {
            var n = b.filterSettings;
            if (function (e, t) {
                    if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                    var n = e.all ? e.all : e[t],
                        r = e.all ? "all" : t;
                    if (!n) return !1;
                    var i = n.filter,
                        o = n.bidders;
                    if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                    return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function (e) {
                        return a.isStr(e) && "*" !== e
                    })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                }(n, e)) {
                p[e] = !0;
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
            return !1
        }
    },
    33: function (e, t, n) {
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
    34: function (e, t, n) {
        n(166), e.exports = n(16).Array.findIndex
    },
    35: function (e, t, n) {
        "use strict";
        t.a = C, n.d(t, "b", function () {
            return l
        });
        var v = n(0),
            h = n(3),
            m = n(27),
            r = n(25),
            i = n(79),
            o = n(2),
            a = n(11),
            S = n.n(a);

        function E() {
            return (E = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function A(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function T(e) {
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
            O = n(5),
            I = [],
            w = Object.keys(O.TARGETING_KEYS).map(function (e) {
                return O.TARGETING_KEYS[e]
            }),
            u = function (e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(v.timestamp)()
            },
            s = function (e) {
                return e && (e.status && !S()([O.BID_STATUS.BID_TARGETING_SET, O.BID_STATUS.RENDERED], e.status) || !e.status)
            };

        function C(e, r) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                o = [],
                a = Object(v.groupBy)(e, "adUnitCode");
            return Object.keys(a).forEach(function (e) {
                var t = [],
                    n = Object(v.groupBy)(a[e], "bidderCode");
                Object.keys(n).forEach(function (e) {
                    return t.push(n[e].reduce(r))
                }), 0 < i ? (t.sort(function (e, t) {
                    return t.cpm - e.cpm
                }), o.push.apply(o, T(t.slice(0, i)))) : o.push.apply(o, t)
            }), o
        }

        function j(e, t) {
            return void 0 !== e.adUnitTargeting.hb_deal && void 0 === t.adUnitTargeting.hb_deal ? -1 : void 0 === e.adUnitTargeting.hb_deal && void 0 !== t.adUnitTargeting.hb_deal ? 1 : t.adUnitTargeting.hb_pb - e.adUnitTargeting.hb_pb
        }
        var d, _, f, l = (d = r.a, f = {}, (_ = {}).setLatestAuctionForAdUnit = function (e, t) {
            f[e] = t
        }, _.resetPresetTargeting = function (e) {
            if (Object(v.isGptPubadsDefined)()) {
                var t = U(e),
                    r = d.getAdUnits().filter(function (e) {
                        return S()(t, e.code)
                    });
                window.googletag.pubads().getSlots().forEach(function (n) {
                    I.forEach(function (t) {
                        r.forEach(function (e) {
                            e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                        })
                    })
                })
            }
        }, _.resetPresetTargetingAST = function (e) {
            U(e).forEach(function (e) {
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
            var n, t, r, i, o, a, c, u, s, d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : R(),
                f = U(e),
                l = (a = f, c = d, u = _.getWinningBids(a, c), s = D(), u = u.map(function (o) {
                    return A({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function (e) {
                        return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === s.indexOf(e)
                    }).reduce(function (e, t) {
                        var n = [o.adserverTargeting[t]],
                            r = A({}, t.substring(0, 20), n);
                        if (t !== O.TARGETING_KEYS.DEAL) return [].concat(T(e), [r]);
                        var i = A({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                        return [].concat(T(e), [r, i])
                    }, []))
                })).concat((o = f, d.filter(function (e) {
                    return S()(o, e.adUnitCode)
                }).map(function (e) {
                    return E({}, e)
                }).reduce(N, []).map(x).filter(function (e) {
                    return e
                }))).concat(h.b.getConfig("enableSendAllBids") ? (n = f, t = d, r = w.concat(m.a), i = h.b.getConfig("sendBidsControl.bidLimit"), C(t, v.getHighestCpm, i).map(function (t) {
                    if (B(t, n)) return A({}, t.adUnitCode, k(t, r.filter(function (e) {
                        return void 0 !== t.adserverTargeting[e]
                    })))
                }).filter(function (e) {
                    return e
                })) : function (e, t) {
                    if (!0 !== h.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                    var n = w.concat(m.a);
                    return C(t, v.getHighestCpm).map(function (t) {
                        if (t.dealId && B(t, e)) return A({}, t.adUnitCode, k(t, n.filter(function (e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                    }).filter(function (e) {
                        return e
                    })
                }(f, d));
            l.map(function (t) {
                Object.keys(t).map(function (e) {
                    t[e].map(function (e) {
                        -1 === I.indexOf(Object.keys(e)[0]) && (I = Object.keys(e).concat(I))
                    })
                })
            }), l = l.map(function (e) {
                return A({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                    return A({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                }).reduce(function (e, t) {
                    return E(t, e)
                }, {}))
            }).reduce(function (e, t) {
                var n = Object.keys(t)[0];
                return e[n] = E({}, e[n], t[n]), e
            }, {});
            var g, p, b, y = h.b.getConfig("targetingControls.auctionKeyMaxChars");
            return y && (Object(v.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(y, " characters.  Running checks on auction keys...")), g = l, p = y, b = Object(v.deepClone)(g), l = Object.keys(b).map(function (e) {
                return {
                    adUnitCode: e,
                    adUnitTargeting: b[e]
                }
            }).sort(j).reduce(function (e, t, n, r) {
                var i, o = (i = t.adUnitTargeting, Object.keys(i).reduce(function (e, t) {
                    return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26")
                }, ""));
                n + 1 === r.length && (o = o.slice(0, -3));
                var a = t.adUnitCode,
                    c = o.length;
                return c <= p ? (p -= c, Object(v.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(p), b[a]), e[a] = b[a]) : Object(v.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(p, ".\n"), b[a]), n + 1 === r.length && 0 === Object.keys(e).length && Object(v.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
            }, {})), f.forEach(function (e) {
                l[e] || (l[e] = {})
            }), l
        }, _.setTargetingForGPT = function (i, e) {
            window.googletag.pubads().getSlots().forEach(function (r) {
                Object.keys(i).filter(e ? e(r) : Object(v.isAdUnitCodeMatchingSlot)(r)).forEach(function (n) {
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
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : R(),
                t = U(e);
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

        function B(e, t) {
            return e.adserverTargeting && t && (c.isArray(t) && S()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
        }

        function U(e) {
            return "string" == typeof e ? [e] : c.isArray(e) ? e : d.getAdUnitCodes() || []
        }

        function R() {
            var e = d.getBidsReceived();
            return h.b.getConfig("useBidCache") || (e = e.filter(function (e) {
                return f[e.adUnitCode] === e.auctionId
            })), C(e = e.filter(function (e) {
                return Object(v.deepAccess)(e, "video.context") !== o.a
            }).filter(function (e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(s).filter(u), v.getOldestHighestCpmBid)
        }

        function D() {
            return d.getStandardBidderAdServerTargeting().map(function (e) {
                return e.key
            }).concat(w).filter(v.uniques)
        }

        function N(r, i, e, t) {
            return Object.keys(i.adserverTargeting).filter(g()).forEach(function (e) {
                var t, n;
                r.length && r.filter((n = e, function (e) {
                    return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                })).forEach((t = e, function (e) {
                    c.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(v.uniques), delete i.adserverTargeting[t]
                }))
            }), r.push(i), r
        }

        function g() {
            var t = D().concat(m.a);
            return function (e) {
                return -1 === t.indexOf(e)
            }
        }

        function x(t) {
            return A({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(g()).map(function (e) {
                return A({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }

        function k(t, e) {
            return e.map(function (e) {
                return A({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
            })
        }
    },
    36: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    37: function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    },
    38: function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    39: function (e, t, n) {
        var r = n(48),
            i = Math.min;
        e.exports = function (e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    390: function (e, t, n) {
        n(391), e.exports = n(16).Number.isInteger
    },
    391: function (e, t, n) {
        var r = n(15);
        r(r.S, "Number", {
            isInteger: n(392)
        })
    },
    392: function (e, t, n) {
        var r = n(17),
            i = Math.floor;
        e.exports = function (e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    },
    4: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        }), t.b = i;
        var l = n(9),
            g = n(3);

        function p() {
            return (p = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var y = n(0),
            v = 4,
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
                    var c = "object" === b(t) && null !== t ? t : {
                        success: function () {
                            y.logMessage("xhr success")
                        },
                        error: function (e) {
                            y.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (c.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function () {
                            if (i.readyState === v) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? c.success(i.responseText, i) : c.error(i.statusText, i)
                            }
                        }, g.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function () {
                            y.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = Object(l.c)(e, r);
                        p(u.search, n), e = Object(l.a)(u)
                    }
                    i.open(o, e, !0), g.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), y._each(r.customHeaders, function (e, t) {
                        i.setRequestHeader(t, e)
                    }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    y.logError("xhr construction", e)
                }
            }
        }
    },
    40: function (e, t) {
        e.exports = function () {}
    },
    41: function (e, t, n) {
        var l = n(26),
            g = n(72),
            p = n(73),
            b = n(28),
            y = n(39),
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
            if (p(s)) {
                for (o = y(e.length); f < o; f++)
                    if ((u = t ? d(b(a = e[f])[0], a[1]) : d(e[f])) === h || u === m) return u
            } else
                for (c = s.call(e); !(a = c.next()).done;)
                    if ((u = g(c, d, a.value, t)) === h || u === m) return u
        }).BREAK = h, t.RETURN = m
    },
    42: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            if (!t || !e) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, t)) return void o.logError("".concat(t, " not whitelisted for loading external JavaScript"));
            if (a[e]) return;
            o.logWarn("module ".concat(t, " is loading external JavaScript"));
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, o.insertElement(n), a[e] = !0
        }, t.b = function (t, e, n) {
            if (!t) return void o.logError("Error attempting to request empty URL", "adloader.js:loadScript");
            n ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && a[t].callbacks.push(e), u(t, function () {
                a[t].loaded = !0;
                try {
                    for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            })) : u(t, e)
        };
        var r = n(11),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["criteo", "adagio"];

        function u(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function () {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function () {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
    },
    43: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return G
        }), n.d(t, "a", function () {
            return W
        }), t.j = function (e) {
            var t, n, b, y, o = e.adUnits,
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
                m = u || x.generateUUID(),
                g = i,
                S = a,
                p = [],
                E = new Set;

            function A() {
                return {
                    auctionId: m,
                    timestamp: t,
                    auctionEnd: n,
                    auctionStatus: b,
                    adUnits: v,
                    adUnitCodes: d,
                    labels: s,
                    bidderRequests: h,
                    noBids: l,
                    bidsReceived: f,
                    winningBids: p,
                    timeout: S
                }
            }

            function T(r, e) {
                if (e && clearTimeout(y), void 0 === n) {
                    var i = [];
                    r && (x.logMessage("Auction ".concat(m, " timedOut")), t = E, (i = h.map(function (e) {
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
                    })).length && P.emit(q.EVENTS.BID_TIMEOUT, i)), b = W, n = Date.now(), P.emit(q.EVENTS.AUCTION_END, A()), K(d, function () {
                        try {
                            if (null != g) {
                                var e = d,
                                    t = f.filter(x.bind.call(w.adUnitsFilter, this, e)).reduce(X, {});
                                g.apply(pbjs, [t, r]), g = null
                            }
                        } catch (e) {
                            x.logError("Error executing bidsBackHandler", null, e)
                        } finally {
                            i.length && k.callTimedOutBidders(o, i, S);
                            var n = _.b.getConfig("userSync") || {};
                            n.enableOverride || N(n.syncDelay)
                        }
                    })
                }
                var t
            }

            function O() {
                x.logInfo("Bids Received for Auction with id: ".concat(m), f), b = W, T(!1, !0)
            }

            function I(e) {
                E.add(e)
            }
            return {
                addBidReceived: function (e) {
                    f = f.concat(e)
                },
                addNoBid: function (e) {
                    l = l.concat(e)
                },
                executeCallback: T,
                callBids: function () {
                    var d = this;
                    b = M, t = Date.now();
                    var f = k.makeBidRequests(v, t, m, S, s);
                    x.logInfo("Bids Requested for Auction with id: ".concat(m), f), f.forEach(function (e) {
                        var t;
                        t = e, h = h.concat(t)
                    });
                    var l = {};
                    if (f.length < 1) x.logWarn("No valid bid requests returned for auction"), O();
                    else {
                        var e = {
                            bidRequests: f,
                            run: function () {
                                var e, t;
                                e = T.bind(null, !0), t = setTimeout(e, S), y = t, b = G, P.emit(q.EVENTS.AUCTION_INIT, A());
                                var n, r, i, o, a, c, u = (n = O, r = d, i = 0, o = !1, a = new Set, c = {}, {
                                    addBidResponse: function (e, t) {
                                        c[t.requestId] = !0, i++;
                                        var n = function (e) {
                                            var t = e.adUnitCode,
                                                n = e.bid,
                                                r = e.bidderRequest,
                                                i = e.auctionId,
                                                o = r.start,
                                                a = D({}, n, {
                                                    auctionId: i,
                                                    responseTimestamp: Object(w.timestamp)(),
                                                    requestTimestamp: o,
                                                    cpm: parseFloat(n.cpm) || 0,
                                                    bidder: n.bidderCode,
                                                    adUnitCode: t
                                                });
                                            a.timeToRespond = a.responseTimestamp - a.requestTimestamp, P.emit(q.EVENTS.BID_ADJUSTMENT, a);
                                            var c = r.bids && B()(r.bids, function (e) {
                                                    return e.adUnitCode == t
                                                }),
                                                u = c && c.renderer;
                                            u && u.url && (a.renderer = j.a.install({
                                                url: u.url
                                            }), a.renderer.setRender(u.render));
                                            var s = Q(n.mediaType, c, _.b.getConfig("mediaTypePriceGranularity")),
                                                d = Object(C.a)(a.cpm, "object" === R(s) ? s : _.b.getConfig("customPriceBucket"), _.b.getConfig("currency.granularityMultiplier"));
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
                                            _.b.getConfig("cache.url") && c !== U.b && (t.videoCacheKey ? t.vastUrl || (x.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, Y(e, t, r, o))), i && (J(e, t), r())
                                        }(r, n, this, s) : (J(r, n), s())
                                    },
                                    adapterDone: function () {
                                        a.add(this), o = r.getBidRequests().every(function (e) {
                                            return a.has(e)
                                        }), this.bids.forEach(function (e) {
                                            c[e.bidId] || (r.addNoBid(e), P.emit(q.EVENTS.NO_BID, e))
                                        }), o && 0 === i && n()
                                    }
                                });

                                function s() {
                                    i--, o && 0 === i && n()
                                }
                                k.callBids(v, f, function () {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    H.apply({
                                        dispatch: u.addBidResponse,
                                        bidderRequest: this
                                    }, t)
                                }, u.adapterDone, {
                                    request: function (e, t) {
                                        p(F, t), p(l, e), z[e] || (z[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < l[e] && (z[e].SRA = !1)
                                    },
                                    done: function (e) {
                                        F[e]--, V[0] && g(V[0]) && V.shift()
                                    }
                                }, S, I)
                            }
                        };
                        g(e) || (x.logWarn("queueing auction due to limited endpoint capacity"), V.push(e))
                    }

                    function g(e) {
                        var r = !0,
                            i = _.b.getConfig("maxRequestsPerOrigin") || L;
                        return e.bidRequests.some(function (e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === q.S2S.SRC ? "s2s" : e.bidderCode;
                            return z[n] && (!1 === z[n].SRA && (t = Math.min(e.bids.length, i)), F[z[n].origin] + t > i && (r = !1)), !r
                        }), r && e.run(), r
                    }

                    function p(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function (e) {
                    p = p.concat(e), k.callBidWonBidder(e.bidder, e, o)
                },
                setBidTargeting: function (e) {
                    k.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function () {
                    return p
                },
                getTimeout: function () {
                    return S
                },
                getAuctionId: function () {
                    return m
                },
                getAuctionStatus: function () {
                    return b
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
            return H
        }), t.f = d, t.d = J, n.d(t, "e", function () {
            return Y
        }), n.d(t, "h", function () {
            return f
        }), n.d(t, "g", function () {
            return l
        }), t.i = g;
        var w = n(0),
            s = n(9),
            C = n(44),
            a = n(27),
            o = n(81),
            j = n(10),
            _ = n(3),
            r = n(32),
            i = n(13),
            c = n(12),
            B = n.n(c),
            U = n(33),
            u = n(2);

        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function D() {
            return (D = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var N = r.a.syncUsers,
            x = n(0),
            k = n(7).default,
            P = n(8),
            q = n(5),
            M = "started",
            G = "inProgress",
            W = "completed";
        P.on(q.EVENTS.BID_ADJUSTMENT, function (e) {
            ! function (e) {
                var t, n = e.bidderCode,
                    r = e.cpm;
                if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[q.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
                    r = t(e.cpm, D({}, e))
                } catch (e) {
                    x.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var L = 4,
            F = {},
            z = {},
            V = [];
        var H = Object(i.b)("async", function (e, t) {
                this.dispatch.call(this.bidderRequest, e, t)
            }, "addBidResponse"),
            K = Object(i.b)("async", function (e, t) {
                t && t()
            }, "bidsBackCallback");

        function d(e, t) {
            t.timeToRespond > e.getTimeout() + _.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function J(e, t) {
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
                            var o = g(t.mediaType, e, n);
                            p(r, o, t), e && i[e] && i[e][q.JSON_MAPPING.ADSERVER_TARGETING] && (p(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)
                        }
                        t.native && (r = D({}, r, Object(a.d)(t, n)));
                        return r
                    }(t.bidderCode, t, r)
                }
                t.adserverTargeting = D(t.adserverTargeting || {}, n)
            }(t, r), P.emit(q.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t)
        }
        var Y = Object(i.b)("async", function (n, r, i, e) {
            Object(o.b)([r], function (e, t) {
                e ? (x.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), d(n, r)) : "" === t[0].uuid ? (x.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), J(n, r), i())
            })
        }, "callPrebidCache");

        function Q(e, t, n) {
            if (e && n) {
                if (e === u.d) {
                    var r = Object(w.deepAccess)(t, "mediaTypes.".concat(u.d, ".context"), "instream");
                    if (n["".concat(u.d, "-").concat(r)]) return n["".concat(u.d, "-").concat(r)]
                }
                return n[e]
            }
        }
        var f = function (e, t) {
                var n = Q(e, t, _.b.getConfig("mediaTypePriceGranularity"));
                return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : _.b.getConfig("priceGranularity")
            },
            l = function (t) {
                return function (e) {
                    return t === q.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === q.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === q.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === q.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === q.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === q.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            };

        function g(e, t, n) {
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
                o = f(e, n),
                a = pbjs.bidderSettings;
            if (a[q.JSON_MAPPING.BD_SETTING_STANDARD] || (a[q.JSON_MAPPING.BD_SETTING_STANDARD] = {}), a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] || (a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING] = [r(i.BIDDER, "bidderCode"), r(i.AD_ID, "adId"), r(i.PRICE_BUCKET, l(o)), r(i.SIZE, "size"), r(i.DEAL, "dealId"), r(i.SOURCE, "source"), r(i.FORMAT, "mediaType")]), "video" === e) {
                var c = a[q.JSON_MAPPING.BD_SETTING_STANDARD][q.JSON_MAPPING.ADSERVER_TARGETING];
                if ([i.UUID, i.CACHE_ID].forEach(function (t) {
                        void 0 === B()(c, function (e) {
                            return e.key === t
                        }) && c.push(r(t, "videoCacheKey"))
                    }), _.b.getConfig("cache.url") && (!t || !1 !== x.deepAccess(a, "".concat(t, ".sendStandardTargeting")))) {
                    var u = Object(s.c)(_.b.getConfig("cache.url"));
                    void 0 === B()(c, function (e) {
                        return e.key === i.CACHE_HOST
                    }) && c.push(r(i.CACHE_HOST, function (e) {
                        return x.deepAccess(e, "adserverTargeting.".concat(i.CACHE_HOST)) ? e.adserverTargeting[i.CACHE_HOST] : u.hostname
                    }))
                }
            }
            return a[q.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function p(r, i, o) {
            var e = i[q.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), x._each(e, function (e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && x.logWarn("The key: " + t + " is getting ovewritten"), x.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    x.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== q.TARGETING_KEYS.DEAL || !x.isEmptyStr(n) && null != n ? r[t] = n : x.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }), r
        }

        function X(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    44: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return d
        }), n.d(t, "b", function () {
            return v
        });
        var r = n(12),
            b = n.n(r),
            i = n(0),
            y = 2,
            o = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            a = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            u = {
                buckets: [{
                    min: 0,
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
                }]
            },
            s = {
                buckets: [{
                    min: 0,
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
            if (!v(e)) return i;
            var t, o, a, c, u, s, d, f, l, g = e.buckets.reduce(function (e, t) {
                    return e.max > t.max ? e : t
                }, {
                    max: 0
                }),
                p = b()(e.buckets, function (e) {
                    if (n > g.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = y), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                });
            return p && (t = n, a = r, c = void 0 !== (o = p).precision ? o.precision : y, u = o.increment * a, s = o.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, i = (l = Number(l.toFixed(10))).toFixed(c)), i
        }

        function v(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach(function (e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            }), t
        }
    },
    45: function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    46: function (e, t, n) {
        var m = n(26),
            S = n(61),
            E = n(47),
            A = n(39),
            r = n(88);
        e.exports = function (f, e) {
            var l = 1 == f,
                g = 2 == f,
                p = 3 == f,
                b = 4 == f,
                y = 6 == f,
                v = 5 == f || y,
                h = e || r;
            return function (e, t, n) {
                for (var r, i, o = E(e), a = S(o), c = m(t, n, 3), u = A(a.length), s = 0, d = l ? h(e, u) : g ? h(e, 0) : void 0; s < u; s++)
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
                } else if (b) return !1;
                return y ? -1 : p || b ? b : d
            }
        }
    },
    47: function (e, t, n) {
        var r = n(38);
        e.exports = function (e) {
            return Object(r(e))
        }
    },
    48: function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    49: function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
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
                RENDERED: "rendered"
            },
            SUBMODULES_THAT_ALWAYS_REFRESH_ID: {
                parrableId: !0
            }
        }
    },
    50: function (e, t, n) {
        var r = n(61),
            i = n(38);
        e.exports = function (e) {
            return r(i(e))
        }
    },
    51: function (e, t, n) {
        "use strict";

        function m() {
            return this
        }
        var S = n(63),
            E = n(15),
            A = n(95),
            T = n(21),
            O = n(30),
            I = n(96),
            w = n(53),
            C = n(101),
            j = n(14)("iterator"),
            _ = !([].keys && "next" in [].keys()),
            B = "values";
        e.exports = function (e, t, n, r, i, o, a) {
            I(n, t, r);

            function c(e) {
                if (!_ && e in p) return p[e];
                switch (e) {
                    case "keys":
                    case B:
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }
            var u, s, d, f = t + " Iterator",
                l = i == B,
                g = !1,
                p = e.prototype,
                b = p[j] || p["@@iterator"] || i && p[i],
                y = b || c(i),
                v = i ? l ? c("entries") : y : void 0,
                h = "Array" == t && p.entries || b;
            if (h && (d = C(h.call(new e))) !== Object.prototype && d.next && (w(d, f, !0), S || "function" == typeof d[j] || T(d, j, m)), l && b && b.name !== B && (g = !0, y = function () {
                    return b.call(this)
                }), S && !a || !_ && !g && p[j] || T(p, j, y), O[t] = y, O[f] = m, i)
                if (u = {
                        values: l ? y : c(B),
                        keys: o ? y : c("keys"),
                        entries: v
                    }, a)
                    for (s in u) s in p || A(p, s, u[s]);
                else E(E.P + E.F * (_ || g), t, u);
            return u
        }
    },
    52: function (e, t, n) {
        var r = n(62)("keys"),
            i = n(49);
        e.exports = function (e) {
            return r[e] || (r[e] = i(e))
        }
    },
    53: function (e, t, n) {
        var r = n(20).f,
            i = n(29),
            o = n(14)("toStringTag");
        e.exports = function (e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    },
    54: function (e, t, n) {
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
    58: function (e, t, n) {
        "use strict";
        t.a = function (t, n) {
            o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function (e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            })
        };
        var r = n(24),
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
        var r = n(17),
            i = n(19).document,
            o = r(i) && r(i.createElement);
        e.exports = function (e) {
            return o ? i.createElement(e) : {}
        }
    },
    61: function (e, t, n) {
        var r = n(37);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    62: function (e, t, n) {
        var r = n(16),
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
        var u = n(50),
            s = n(39),
            d = n(92);
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
        n(93), n(66), n(102), n(104), n(108), n(111), n(113), e.exports = n(16).Set
    },
    66: function (e, t, n) {
        "use strict";
        var r = n(94)(!0);
        n(51)(String, "String", function (e) {
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
        var o = r(28),
            a = r(97),
            c = r(68),
            u = r(52)("IE_PROTO"),
            s = "prototype",
            d = function () {
                var e, t = r(60)("iframe"),
                    n = c.length;
                for (t.style.display = "none", r(100).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; n--;) delete d[s][c[n]];
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
            return D
        }), n.d(t, "uspDataHandler", function () {
            return N
        }), t.setS2STestingModule = function (e) {
            w = e
        };
        var E = n(0),
            g = n(79),
            p = n(27),
            d = n(1),
            h = n(4),
            A = n(3),
            r = n(11),
            T = n.n(r),
            i = n(12),
            O = n.n(i),
            b = n(80),
            I = n(31);

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

        function y() {
            return (y = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        var w, C = n(0),
            j = n(5),
            _ = n(8),
            f = {},
            B = f.bidderRegistry = {},
            l = f.aliasRegistry = {},
            U = {};
        A.b.getConfig("s2sConfig", function (e) {
            U = e.s2sConfig
        });
        var o = {};

        function R(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                d = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce(function (e, c) {
                var t = Object(g.b)(Object(g.a)(c, f), c.mediaTypes, c.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : C.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function (e) {
                    return e.bidder === i
                }).reduce(function (e, t) {
                    var n = c.nativeParams || C.deepAccess(c, "mediaTypes.native");
                    n && (t = y({}, t, {
                        nativeParams: Object(p.g)(n)
                    })), t = y({}, t, Object(E.getDefinedParams)(c, ["fpd", "mediaType", "renderer"]));
                    var r = Object(g.b)(Object(g.a)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : C.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), C.isValidMediaTypes(o) ? t = y({}, t, {
                        mediaTypes: o
                    }) : C.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(y({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: C.deepAccess(o, "banner.sizes") || C.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || C.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: b.a.getRequestsCounter(c.code),
                        bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
                        bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder)
                    })), e
                }, [])), e
            }, []).reduce(E.flatten, []).filter(function (e) {
                return "" !== e
            })
        }
        var D = {
                consentData: null,
                setConsentData: function (e) {
                    D.consentData = e
                },
                getConsentData: function () {
                    return D.consentData
                }
            },
            N = {
                consentData: null,
                setConsentData: function (e) {
                    N.consentData = e
                },
                getConsentData: function () {
                    return N.consentData
                }
            };

        function x() {
            return U && U.enabled && U.testing && w
        }

        function a(t, n, e) {
            try {
                var r = B[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (C.logInfo("Invoking ".concat(t, ".").concat(n)), A.b.runWithBidder(t, E.bind.call(r[n], r, e)))
            } catch (e) {
                C.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        f.makeBidRequests = function (e, i, o, a, c) {
            _.emit(j.EVENTS.BEFORE_REQUEST_BIDS, e);
            var u = [],
                t = Object(E.getBidderCodes)(e);
            A.b.getConfig("bidderSequence") === A.a && (t = Object(E.shuffle)(t));
            var n, r, s, d, f = Object(I.b)(),
                l = t,
                g = [];
            if (U.enabled) {
                if (x()) {
                    var p = w.getSourceBidderMap(e);
                    g = p[w.CLIENT]
                }
                var b = U.bidders;
                l = t.filter(function (e) {
                    return !T()(b, e) || T()(g, e)
                });
                Boolean(x() && U.testServerOnly) && (d = e, Boolean(O()(d, function (e) {
                    return O()(e.bids, function (e) {
                        return (e.bidSource || U.bidderControl && U.bidderControl[e.bidder]) && e.finalSource === w.SERVER
                    })
                }))) && (l.length = 0);
                var y = (n = e, r = U.bidders, (s = C.deepClone(n)).forEach(function (e) {
                        e.bids = e.bids.filter(function (e) {
                            return T()(r, e.bidder) && (!x() || e.finalSource !== w.CLIENT)
                        }).map(function (e) {
                            return e.bid_id = C.getUniqueIdentifierStr(), e
                        })
                    }), s = s.filter(function (e) {
                        return 0 !== e.bids.length
                    })),
                    v = C.generateUUID();
                b.forEach(function (e) {
                    var t = C.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: v,
                            bids: R({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: C.deepClone(y),
                                labels: c,
                                src: j.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: U.timeout,
                            src: j.S2S.SRC,
                            refererInfo: f
                        };
                    0 !== n.bids.length && u.push(n)
                }), y.forEach(function (e) {
                    var t = e.bids.filter(function (t) {
                        return O()(u, function (e) {
                            return O()(e.bids, function (e) {
                                return e.bidId === t.bid_id
                            })
                        })
                    });
                    e.bids = t
                }), u.forEach(function (e) {
                    e.adUnitsS2SCopy = y.filter(function (e) {
                        return 0 < e.bids.length
                    })
                })
            }
            var h, m, S = (h = e, (m = C.deepClone(h)).forEach(function (e) {
                e.bids = e.bids.filter(function (e) {
                    return !x() || e.finalSource !== w.SERVER
                })
            }), m = m.filter(function (e) {
                return 0 !== e.bids.length
            }));
            return l.forEach(function (e) {
                var t = C.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: R({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: C.deepClone(S),
                            labels: c,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: f
                    },
                    r = B[e];
                r || C.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n)
            }), D.getConsentData() && u.forEach(function (e) {
                e.gdprConsent = D.getConsentData()
            }), N.getConsentData() && u.forEach(function (e) {
                e.uspConsent = N.getConsentData()
            }), u
        }, f.callBids = function (e, t, r, i, o, a, c) {
            if (t.length) {
                var n = m(t.reduce(function (e, t) {
                        return e[Number(void 0 !== t.src && t.src === j.S2S.SRC)].push(t), e
                    }, [
                        [],
                        []
                    ]), 2),
                    u = n[0],
                    s = n[1];
                if (s.length) {
                    var d = Object(h.b)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0),
                        f = U.bidders,
                        l = B[U.adapter],
                        g = s[0].tid,
                        p = s[0].adUnitsS2SCopy;
                    if (l) {
                        var b = {
                            tid: g,
                            ad_units: p
                        };
                        if (b.ad_units.length) {
                            var y = s.map(function (e) {
                                    return e.start = Object(E.timestamp)(), i.bind(e)
                                }),
                                v = b.ad_units.reduce(function (e, t) {
                                    return e.concat((t.bids || []).reduce(function (e, t) {
                                        return e.concat(t.bidder)
                                    }, []))
                                }, []);
                            C.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function (e) {
                                return T()(v, e)
                            }).join(","))), s.forEach(function (e) {
                                _.emit(j.EVENTS.BID_REQUESTED, e)
                            }), l.callBids(b, s, function (e, t) {
                                var n = Object(E.getBidderRequest)(s, t.bidderCode, e);
                                n && r.call(n, e, t)
                            }, function () {
                                return y.forEach(function (e) {
                                    return e()
                                })
                            }, d)
                        }
                    } else C.logError("missing " + U.adapter)
                }
                u.forEach(function (e) {
                    e.start = Object(E.timestamp)();
                    var t = B[e.bidderCode];
                    C.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), _.emit(j.EVENTS.BID_REQUESTED, e);
                    var n = Object(h.b)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    A.b.runWithBidder(e.bidderCode, E.bind.call(t.callBids, t, e, r.bind(e), i.bind(e), n, c, A.b.callbackWithBidder(e.bidderCode)))
                })
            } else C.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, f.videoAdapters = [], f.registerBidAdapter = function (e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (B[t] = e, T()(r, "video") && f.videoAdapters.push(t), T()(r, "native") && p.e.push(t)) : C.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : C.logError("bidAdaptor or bidderCode not specified")
        }, f.aliasBidAdapter = function (t, e) {
            var n, r;
            if (void 0 === B[e]) {
                var i = B[t];
                if (void 0 === i) {
                    var o = A.b.getConfig("s2sConfig"),
                        a = o && o.bidders;
                    a && T()(a, e) ? l[e] = t : C.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else try {
                    var c, u = (n = t, r = [], T()(f.videoAdapters, n) && r.push("video"), T()(p.e, n) && r.push("native"), r);
                    if (i.constructor.prototype != Object.prototype)(c = new i.constructor).setBidderCode(e);
                    else {
                        var s = i.getSpec();
                        c = Object(d.newBidder)(y({}, s, {
                            code: e
                        })), l[e] = t
                    }
                    f.registerBidAdapter(c, e, {
                        supportedMediaTypes: u
                    })
                } catch (e) {
                    C.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                }
            } else C.logMessage('alias name "' + e + '" has been already specified.')
        }, f.registerAnalyticsAdapter = function (e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, o[n] = t) : C.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : C.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, f.enableAnalytics = function (e) {
            C.isArray(e) || (e = [e]), C._each(e, function (e) {
                var t = o[e.provider];
                t ? t.enableAnalytics(e) : C.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            })
        }, f.getBidAdapter = function (e) {
            return B[e]
        }, f.callTimedOutBidders = function (t, n, r) {
            n = n.map(function (e) {
                return e.params = C.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            }), n = C.groupBy(n, "bidder"), Object.keys(n).forEach(function (e) {
                a(e, "onTimeout", n[e])
            })
        }, f.callBidWonBidder = function (e, t, n) {
            t.params = C.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), a(e, "onBidWon", t)
        }, f.callSetTargetingBidder = function (e, t) {
            a(e, "onSetTargeting", t)
        }, t.default = f
    },
    70: function (e, t, n) {
        var i = n(21);
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
        var o = n(28);
        e.exports = function (t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    },
    720: function (e, t, n) {
        e.exports = n(82)
    },
    73: function (e, t, n) {
        var r = n(30),
            i = n(14)("iterator"),
            o = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    },
    74: function (e, t, n) {
        var r = n(75),
            i = n(14)("iterator"),
            o = n(30);
        e.exports = n(16).getIteratorMethod = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    75: function (e, t, n) {
        var i = n(37),
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
        var i = n(49)("meta"),
            o = n(17),
            a = n(29),
            c = n(20).f,
            u = 0,
            s = Object.isExtensible || function () {
                return !0
            },
            d = !n(36)(function () {
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
        var r = n(17);
        e.exports = function (e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    },
    78: function (e, t, n) {
        n(66), n(115), e.exports = n(16).Array.from
    },
    79: function (e, t, n) {
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
            var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
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
                s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(g.isPlainObject)(c) ? Object(g.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(g.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function (e) {
                return s.sizesSupported[e]
            }));
            var f = Object.keys(c),
                l = {
                    active: f.every(function (e) {
                        return "banner" !== e
                    }) || f.some(function (e) {
                        return "banner" === e
                    }) && 0 < Object(g.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function (e) {
                        return s.labels[e]
                    }) || n.some(function (e) {
                        return p()(a, e)
                    })) || i && n.reduce(function (e, t) {
                        return e ? s.labels[t] || p()(a, t) : e
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
            g = n(0),
            i = n(11),
            p = n.n(i);

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var b = [];

        function y(e) {
            return e.reduce(function (n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    if ("" === r.mediaQuery) t = !0;
                    else try {
                        t = Object(g.getWindowTop)().matchMedia(r.mediaQuery).matches
                    } catch (e) {
                        Object(g.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches
                    }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function (t) {
                        return (r[t] || []).forEach(function (e) {
                            return n[t][e] = !0
                        })
                    }))
                } else Object(g.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.b.getConfig("sizeConfig", function (e) {
            return t = e.sizeConfig, void(b = t);
            var t
        })
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
                e === n && t.splice(u.indexOf.call(t, e), 1)
            }) : u._each(i.que, function (e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
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
    81: function (e, t, n) {
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
    82: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "checkAdUnitSetup", function () {
            return G
        });
        var r = n(24),
            c = n(0),
            i = n(169),
            o = n(32),
            a = n(42),
            d = n(3),
            v = n(25),
            f = n(35),
            u = n(13),
            s = n(170),
            l = n(11),
            g = n.n(l),
            p = n(80),
            h = n(10),
            b = n(23);

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
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
            E = n(5),
            A = n(0),
            T = n(7).default,
            O = n(8),
            I = o.a.triggerUserSyncs,
            w = E.EVENTS,
            C = w.ADD_AD_UNITS,
            j = w.BID_WON,
            _ = w.REQUEST_BIDS,
            B = w.SET_TARGETING,
            U = w.AD_RENDER_FAILED,
            R = E.AD_RENDER_FAILED_REASON,
            D = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            N = R.NO_AD,
            x = R.EXCEPTION,
            k = R.CANNOT_FIND_AD,
            P = R.MISSING_DOC_OR_ADID,
            q = {
                bidWon: function (e) {
                    var t = v.a.getBidsRequested().map(function (e) {
                        return e.bids.map(function (e) {
                            return e.adUnitCode
                        })
                    }).reduce(c.flatten).filter(c.uniques);
                    return !!A.contains(t, e) || void A.logError('The "' + e + '" placement is not defined.')
                }
            };

        function M(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }
        Object(s.a)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v2.44.7", A.logInfo("Prebid.js v2.44.7 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = I;
        var G = Object(u.b)("sync", function (e) {
            return e.forEach(function (e) {
                var t = e.mediaTypes,
                    n = A.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (A.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (A.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize)
                        if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(function (e) {
                                return Object(c.isArrayOfNums)(e, 2)
                            })) e.sizes = i.playerSize;
                        else if (Object(c.isArrayOfNums)(i.playerSize, 2)) {
                        var o = [];
                        o.push(i.playerSize), A.logInfo("Transforming video.playerSize from [".concat(i.playerSize, "] to [[").concat(o, "]] so it's in the proper format.")), e.sizes = i.playerSize = o
                    } else A.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (A.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (A.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (A.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            }), e
        }, "checkAdUnitSetup");

        function W(e) {
            var n = v.a[e]().filter(A.bind.call(c.adUnitsFilter, this, v.a.getAdUnitCodes())),
                r = v.a.getLastAuctionId();
            return n.map(function (e) {
                return e.adUnitCode
            }).filter(c.uniques).map(function (t) {
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

        function L(e) {
            var t = e.reason,
                n = e.message,
                r = e.bid,
                i = e.id,
                o = {
                    reason: t,
                    message: n
                };
            r && (o.bid = r), i && (o.adId = i), A.logError(n), O.emit(U, o)
        }

        function F(e) {
            e.forEach(function (e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    A.logError("Error processing command :", "prebid.js", e)
                }
            })
        }
        S.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if (A.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return A.transformAdServerTargetingObj(t)
            }
            A.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function (e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function (e) {
            return A.logInfo("Invoking pbjs.getAdserverTargeting", arguments), f.b.getAllTargeting(e)
        }, S.getNoBids = function () {
            return A.logInfo("Invoking pbjs.getNoBids", arguments), W("getNoBids")
        }, S.getBidResponses = function () {
            return A.logInfo("Invoking pbjs.getBidResponses", arguments), W("getBidsReceived")
        }, S.getBidResponsesForAdUnitCode = function (t) {
            return {
                bids: v.a.getBidsReceived().filter(function (e) {
                    return e.adUnitCode === t
                })
            }
        }, S.setTargetingForGPTAsync = function (e, t) {
            if (A.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(c.isGptPubadsDefined)()) {
                var n = f.b.getAllTargeting(e);
                f.b.resetPresetTargeting(e), f.b.setTargetingForGPT(n, t), Object.keys(n).forEach(function (t) {
                    Object.keys(n[t]).forEach(function (e) {
                        "hb_adid" === e && v.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET)
                    })
                }), O.emit(B, n)
            } else A.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function (e) {
            A.logInfo("Invoking pbjs.setTargetingForAn", arguments), f.b.isApntagDefined() ? (f.b.setTargetingForAst(e), O.emit(B, f.b.getAllTargeting())) : A.logError("window.apntag is not defined on the page")
        }, S.renderAd = function (e, t) {
            if (A.logInfo("Invoking pbjs.renderAd", arguments), A.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = v.a.findBidByAdId(t);
                if (n) {
                    n.status = E.BID_STATUS.RENDERED, n.ad = A.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm), v.a.addWinningBid(n), O.emit(j, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        c = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                    if (A.insertElement(s, e, "body"), Object(h.c)(u)) Object(h.b)(u, n);
                    else if (e === document && !A.inIframe() || "video" === a) {
                        var d = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
                        L({
                            reason: D,
                            message: d,
                            bid: n,
                            id: t
                        })
                    } else if (o) {
                        if (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/")) {
                            var f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                            f && parseInt(f, 10) < 67 && e.open("text/html", "replace")
                        }
                        e.write(o), e.close(), M(e, i, r), A.callBurl(n)
                    } else if (c) {
                        var l = A.createInvisibleIframe();
                        l.height = r, l.width = i, l.style.display = "inline", l.style.overflow = "hidden", l.src = c, A.insertElement(l, e, "body"), M(e, i, r), A.callBurl(n)
                    } else {
                        var g = "Error trying to write ad. No ad for bid response id: ".concat(t);
                        L({
                            reason: N,
                            message: g,
                            bid: n,
                            id: t
                        })
                    }
                } else {
                    var p = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
                    L({
                        reason: k,
                        message: p,
                        id: t
                    })
                }
            } catch (e) {
                var b = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                L({
                    reason: x,
                    message: b,
                    id: t
                })
            } else {
                var y = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                L({
                    reason: P,
                    message: y,
                    id: t
                })
            }
        }, S.removeAdUnit = function (e) {
            (A.logInfo("Invoking pbjs.removeAdUnit", arguments), e) ? (A.isArray(e) ? e : [e]).forEach(function (e) {
                for (var t = S.adUnits.length - 1; 0 <= t; t--) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
            }): S.adUnits = []
        }, S.requestBids = Object(u.b)("async", function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels,
                a = e.auctionId;
            O.emit(_);
            var c = n || d.b.getConfig("bidderTimeout");
            if (r = r || S.adUnits, A.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function (e) {
                    return g()(i, e.code)
                }) : i = r && r.map(function (e) {
                    return e.code
                }), (r = G(r)).forEach(function (i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map(function (e) {
                            return e.bidder
                        }),
                        a = T.bidderRegistry,
                        t = d.b.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter(function (e) {
                            return !g()(n, e)
                        }) : e;
                    i.transactionId = A.generateUUID(), r.forEach(function (t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some(function (e) {
                            return g()(r, e)
                        }) ? p.a.incrementBidderRequestsCounter(i.code, t) : (A.logWarn(A.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function (e) {
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
                return 15 < s && A.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach(function (e) {
                    return f.b.setLatestAuctionForAdUnit(e, u.getAuctionId())
                }), u.callBids(), u
            }
            if (A.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                A.logError("Error executing bidsBackHandler", null, e)
            }
        }), S.addAdUnits = function (e) {
            A.logInfo("Invoking pbjs.addAdUnits", arguments), A.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === y(e) && S.adUnits.push(e), O.emit(C)
        }, S.onEvent = function (e, t, n) {
            A.logInfo("Invoking pbjs.onEvent", arguments), A.isFn(t) ? !n || q[e].call(null, n) ? O.on(e, t, n) : A.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : A.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function (e, t, n) {
            A.logInfo("Invoking pbjs.offEvent", arguments), n && !q[e].call(null, n) || O.off(e, t, n)
        }, S.registerBidAdapter = function (e, t) {
            A.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                T.registerBidAdapter(e(), t)
            } catch (e) {
                A.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function (e) {
            A.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                T.registerAnalyticsAdapter(e)
            } catch (e) {
                A.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function (e) {
            return A.logInfo("Invoking pbjs.createBid", arguments), Object(b.a)(e)
        }, S.loadScript = function (e, t, n) {
            A.logInfo("Invoking pbjs.loadScript", arguments), Object(a.b)(e, t, n)
        }, S.enableAnalytics = function (e) {
            e && !A.isEmpty(e) ? (A.logInfo("Invoking pbjs.enableAnalytics for: ", e), T.enableAnalytics(e)) : A.logError("pbjs.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function (e, t) {
            A.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? T.aliasBidAdapter(e, t) : A.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, S.getAllWinningBids = function () {
            return v.a.getAllWinningBids()
        }, S.getAllPrebidWinningBids = function () {
            return v.a.getBidsReceived().filter(function (e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET
            })
        }, S.getHighestCpmBids = function (e) {
            var t = Object(f.a)(v.a.getBidsReceived(), c.getLatestHighestCpmBid);
            return f.b.getWinningBids(e, t)
        }, S.markWinningBidAsUsed = function (t) {
            var e = [];
            t.adUnitCode && t.adId ? e = v.a.getBidsReceived().filter(function (e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = f.b.getWinningBids(t.adUnitCode) : t.adId ? e = v.a.getBidsReceived().filter(function (e) {
                return e.adId === t.adId
            }) : A.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED)
        }, S.getConfig = d.b.getConfig, S.setConfig = d.b.setConfig, S.setBidderConfig = d.b.setBidderConfig, S.que.push(function () {
            return Object(i.a)()
        }), S.cmd.push = function (e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                A.logError("Error processing command :", e.message, e.stack)
            } else A.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function () {
            u.b.ready(), F(S.que), F(S.cmd)
        }, t.default = S
    },
    85: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(46)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o](function () {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            find: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(40)(o)
    },
    86: function (e, t, n) {
        e.exports = !n(22) && !n(36)(function () {
            return 7 != Object.defineProperty(n(60)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    87: function (e, t, n) {
        var i = n(17);
        e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    88: function (e, t, n) {
        var r = n(89);
        e.exports = function (e, t) {
            return new(r(e))(t)
        }
    },
    89: function (e, t, n) {
        var r = n(17),
            i = n(90),
            o = n(14)("species");
        e.exports = function (e) {
            var t;
            return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    9: function (e, t, n) {
        "use strict";

        function o(e, t) {
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

        function i(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function (e, t) {
                var n = o(t.split("="), 2),
                    r = n[0],
                    i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e
            }, {}) : {}
        }

        function r(e) {
            return Object.keys(e).map(function (t) {
                return Array.isArray(e[t]) ? e[t].map(function (e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
        }
        t.d = i, t.b = r, t.c = function (e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : i(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.a = function (e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }
    },
    90: function (e, t, n) {
        var r = n(37);
        e.exports = Array.isArray || function (e) {
            return "Array" == r(e)
        }
    },
    91: function (e, t, n) {
        "use strict";
        var r = n(15),
            i = n(64)(!0);
        r(r.P, "Array", {
            includes: function (e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(40)("includes")
    },
    92: function (e, t, n) {
        var r = n(48),
            i = Math.max,
            o = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    93: function (e, t) {},
    94: function (e, t, n) {
        var u = n(48),
            s = n(38);
        e.exports = function (c) {
            return function (e, t) {
                var n, r, i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
    },
    95: function (e, t, n) {
        e.exports = n(21)
    },
    96: function (e, t, n) {
        "use strict";
        var r = n(67),
            i = n(45),
            o = n(53),
            a = {};
        n(21)(a, n(14)("iterator"), function () {
            return this
        }), e.exports = function (e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    },
    97: function (e, t, n) {
        var a = n(20),
            c = n(28),
            u = n(98);
        e.exports = n(22) ? Object.defineProperties : function (e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    98: function (e, t, n) {
        var r = n(99),
            i = n(68);
        e.exports = Object.keys || function (e) {
            return r(e, i)
        }
    },
    99: function (e, t, n) {
        var a = n(29),
            c = n(50),
            u = n(64)(!1),
            s = n(52)("IE_PROTO");
        e.exports = function (e, t) {
            var n, r = c(e),
                i = 0,
                o = [];
            for (n in r) n != s && a(r, n) && o.push(n);
            for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    }
});
pbjsChunk([285], {
    138: function (e, r, n) {
        e.exports = n(139)
    },
    139: function (e, r, n) {
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
                    for (l.unshift("//" + h[0][1] + "/adx/?rp=4"), u = u || "gross", l.push("pt=" + u), l.push("stid=" + e[0].auctionId), r && r.gdprConsent && r.gdprConsent.gdprApplies && (c = {
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
                            if (e.width == r[n][0] && e.height == r[n][1]) return !0;
                        return !1
                    }
                }
            };
        Object(t.registerBidder)(d)
    }
}, [138]);
pbjsChunk([259], {
    207: function (e, r, a) {
        e.exports = a(208)
    },
    208: function (e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function () {
            return l
        });
        var f = a(10),
            _ = a(0),
            k = a(3),
            v = a(1),
            g = a(2),
            c = a(25),
            t = a(12),
            I = a.n(t),
            n = a(11),
            x = a.n(n),
            y = a(33);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function b() {
            return (b = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }).apply(this, arguments)
        }

        function A(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
                    return a
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var C = "appnexus",
            w = "//ib.adnxs.com/ut/v3/prebid",
            u = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            S = ["age", "externalUid", "segments", "gender", "dnt", "language"],
            T = ["geo", "device_id"],
            E = ["enabled", "dongle", "member_id", "debug_timeout"],
            p = {
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
            s = "<script",
            o = /\/\/cdn\.adnxs\.com\/v/,
            d = "trk.js",
            l = {
                code: C,
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm", "adasta"],
                supportedMediaTypes: [g.b, g.d, g.c],
                isBidRequestValid: function (e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function (e, r) {
                    var t = e.map(O),
                        a = I()(e, P),
                        n = {};
                    !0 === k.b.getConfig("coppa") && (n = {
                        coppa: !0
                    }), a && Object.keys(a.params.user).filter(function (e) {
                        return x()(S, e)
                    }).forEach(function (e) {
                        return n[e] = a.params.user[e]
                    });
                    var i, s = I()(e, U);
                    s && s.params && s.params.app && (i = {}, Object.keys(s.params.app).filter(function (e) {
                        return x()(T, e)
                    }).forEach(function (e) {
                        return i[e] = s.params.app[e]
                    }));
                    var o, d = I()(e, q);
                    d && d.params && s.params.app && s.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var c = {},
                        u = {},
                        p = _.getCookie("apn_prebid_debug") || null;
                    if (p) try {
                        c = JSON.parse(p)
                    } catch (e) {
                        _.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    } else {
                        var l = I()(e, z);
                        l && l.debug && (c = l.debug)
                    }
                    c && c.enabled && Object.keys(c).filter(function (e) {
                        return x()(E, e)
                    }).forEach(function (e) {
                        u[e] = c[e]
                    });
                    var m = I()(e, N),
                        f = m ? parseInt(m.params.member, 10) : 0,
                        v = e[0].schain,
                        g = {
                            tags: A(t),
                            user: n,
                            sdk: {
                                source: "pbjs",
                                version: "2.44.7"
                            },
                            schain: v
                        };
                    if (0 < f && (g.member_id = f), s && (g.device = i), d && (g.app = o), k.b.getConfig("adpod.brandCategoryExclusion") && (g.brand_category_uniqueness = !0), u.enabled && (g.debug = u, _.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(u, null, 4))), r && r.gdprConsent && (g.gdpr_consent = {
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
                    I()(e, M) && e.filter(M).forEach(function (r) {
                        var e = function (e, r) {
                                var a = r.mediaTypes.video,
                                    t = a.durationRangeSec,
                                    n = a.requireExactDuration,
                                    i = function (e) {
                                        var r = e.adPodDurationSec,
                                            a = e.durationRangeSec,
                                            t = e.requireExactDuration,
                                            n = _.getMinValueFromArray(a),
                                            i = Math.floor(r / n);
                                        return t ? Math.max(i, a.length) : i
                                    }(r.mediaTypes.video),
                                    s = _.getMaxValueFromArray(t),
                                    o = e.filter(function (e) {
                                        return e.uuid === r.bidId
                                    }),
                                    d = _.fill.apply(_, A(o).concat([i]));
                                if (n) {
                                    var c = Math.ceil(i / t.length),
                                        u = _.chunk(d, c);
                                    t.forEach(function (r, e) {
                                        u[e].map(function (e) {
                                            B(e, "minduration", r), B(e, "maxduration", r)
                                        })
                                    })
                                } else d.map(function (e) {
                                    return B(e, "maxduration", s)
                                });
                                return d
                            }(t, r),
                            a = g.tags.filter(function (e) {
                                return e.uuid !== r.bidId
                            });
                        g.tags = [].concat(A(a), A(e))
                    });
                    var b = _.deepAccess(e[0], "userId.criteortus.".concat(C, ".userid"));
                    if (b) {
                        var h = [];
                        h.push({
                            provider: "criteo",
                            user_id: b
                        }), g.tpuids = h
                    }
                    return function (e, a) {
                        var t = [];
                        if (15 < e.tags.length) {
                            var n = _.deepClone(e);
                            _.chunk(e.tags, 15).forEach(function (e) {
                                n.tags = e;
                                var r = JSON.stringify(n);
                                t.push({
                                    method: "POST",
                                    url: w,
                                    data: r,
                                    bidderRequest: a
                                })
                            })
                        } else {
                            var r = JSON.stringify(e);
                            t = {
                                method: "POST",
                                url: w,
                                data: r,
                                bidderRequest: a
                            }
                        }
                        return t
                    }(g, r)
                },
                interpretResponse: function (e, r) {
                    var i = this,
                        s = r.bidderRequest;
                    e = e.body;
                    var o = [];
                    if (!e || e.error) {
                        var a = "in response for ".concat(s.bidderCode, " adapter");
                        return e && e.error && (a += ": ".concat(e.error)), _.logError(a), o
                    }
                    if (e.tags && e.tags.forEach(function (e) {
                            var r, a, t = (r = e) && r.ads && r.ads.length && I()(r.ads, function (e) {
                                return e.rtb
                            });
                            if (t && 0 !== t.cpm && x()(i.supportedMediaTypes, t.ad_type)) {
                                var n = function (r, e, a) {
                                    var t = _.getBidRequest(r.uuid, [a]),
                                        n = {
                                            requestId: r.uuid,
                                            cpm: e.cpm,
                                            creativeId: e.creative_id,
                                            dealId: e.deal_id,
                                            currency: "USD",
                                            netRevenue: !0,
                                            ttl: 300,
                                            adUnitCode: t.adUnitCode,
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
                                        }), _.deepAccess(t, "mediaTypes.video.context")) {
                                            case g.a:
                                                var i = Object(v.getIabSubCategory)(t.bidder, e.brand_category_id);
                                                n.meta = b({}, n.meta, {
                                                    iabSubCatId: i
                                                });
                                                var s = e.rtb.dealPriority;
                                                n.video = {
                                                    context: g.a,
                                                    durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                                    dealTier: s
                                                }, n.vastUrl = e.rtb.video.asset_url;
                                                break;
                                            case y.b:
                                                if (n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, n.vastXml = e.rtb.video.content, e.renderer_url) {
                                                    var o = I()(a.bids, function (e) {
                                                            return e.bidId === r.uuid
                                                        }),
                                                        d = _.deepAccess(o, "renderer.options");
                                                    n.renderer = function (e, r) {
                                                        var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                            t = f.a.install({
                                                                id: r.renderer_id,
                                                                url: r.renderer_url,
                                                                config: a,
                                                                loaded: !1,
                                                                adUnitCode: e
                                                            });
                                                        try {
                                                            t.setRender(D)
                                                        } catch (e) {
                                                            _.logWarn("Prebid Error calling setRender on renderer", e)
                                                        }
                                                        return t.setEventHandlers({
                                                            impression: function () {
                                                                return _.logMessage("AppNexus outstream video impression event")
                                                            },
                                                            loaded: function () {
                                                                return _.logMessage("AppNexus outstream video loaded event")
                                                            },
                                                            ended: function () {
                                                                _.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                            }
                                                        }), t
                                                    }(n.adUnitCode, e, d)
                                                }
                                                break;
                                            case y.a:
                                                n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url)
                                        }
                                    } else if (e.rtb[g.c]) {
                                        var c = e.rtb[g.c],
                                            u = e.viewability.config.replace("src=", "data-src="),
                                            p = c.javascript_trackers;
                                        null == p ? p = u : _.isStr(p) ? p = [p, u] : p.push(u), n[g.c] = {
                                            title: c.title,
                                            body: c.desc,
                                            body2: c.desc2,
                                            cta: c.ctatext,
                                            rating: c.rating,
                                            sponsoredBy: c.sponsored,
                                            privacyLink: c.privacy_link,
                                            address: c.address,
                                            downloads: c.downloads,
                                            likes: c.likes,
                                            phone: c.phone,
                                            price: c.price,
                                            salePrice: c.saleprice,
                                            clickUrl: c.link.url,
                                            displayUrl: c.displayurl,
                                            clickTrackers: c.link.click_trackers,
                                            impressionTrackers: c.impression_trackers,
                                            javascriptTrackers: p
                                        }, c.main_img && (n.native.image = {
                                            url: c.main_img.url,
                                            height: c.main_img.height,
                                            width: c.main_img.width
                                        }), c.icon && (n.native.icon = {
                                            url: c.icon.url,
                                            height: c.icon.height,
                                            width: c.icon.width
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
                                }(e, t, s);
                                n.mediaType = (a = t.ad_type) === g.d ? g.d : a === g.c ? g.c : g.b, o.push(n)
                            }
                        }), e.debug && e.debug.debug_info) {
                        var t = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                        t = t.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), _.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), _.logMessage(t)
                    }
                    return o
                },
                getMappingFileInfo: function () {
                    return {
                        url: "//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                        refreshInDays: 7
                    }
                },
                getUserSyncs: function (e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                },
                transformBidParams: function (a, e) {
                    return a = _.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: _.transformBidderParamKeywords
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, m(a.keywords) && a.keywords.forEach(h), Object.keys(a).forEach(function (e) {
                        var r = _.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    })), a
                },
                onBidWon: function (e) {
                    e.native && function (e) {
                        var r = function (e) {
                            var r;
                            if (_.isStr(e) && R(e)) r = e;
                            else if (_.isArray(e))
                                for (var a = 0; a < e.length; a++) {
                                    var t = e[a];
                                    R(t) && (r = t)
                                }
                            return r
                        }(e.native.javascriptTrackers);
                        if (r)
                            for (var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, t = function (e) {
                                    var r = e.indexOf('src="') + 5,
                                        a = e.indexOf('"', r);
                                    return e.substring(r, a)
                                }(r), n = t.replace("dom_id=%native_dom_id%", a), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                                var d = i[o];
                                try {
                                    var c = d.contentDocument || d.contentWindow.document;
                                    if (c)
                                        for (var u = c.getElementsByTagName("script"), p = 0; p < u.length && !s; p++) {
                                            var l = u[p];
                                            l.getAttribute("data-src") == t && (l.setAttribute("src", n), l.setAttribute("data-src", ""), l.removeAttribute && l.removeAttribute("data-src"), s = !0)
                                        }
                                } catch (e) {
                                    if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e
                                }
                            }
                    }(e)
                }
            };

        function m(e) {
            return !!(_.isArray(e) && 0 < e.length)
        }

        function h(e) {
            m(e.value) && "" === e.value[0] && delete e.value
        }

        function R(e) {
            var r = e.match(o),
                a = null != r && 1 <= r.length,
                t = e.match(d),
                n = null != t && 1 <= t.length;
            return e.startsWith(s) && n && a
        }

        function O(r) {
            var n, i, a = {};
            if (a.sizes = j(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                } [r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = j(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !_.isEmpty(r.params.keywords)) {
                var e = _.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(h), a.keywords = e
            }
            if ((r.mediaType === g.c || _.deepAccess(r, "mediaTypes.".concat(g.c))) && (a.ad_types.push(g.c), 0 === a.sizes.length && (a.sizes = j([1, 1])), r.nativeParams)) {
                var t = (n = r.nativeParams, i = {}, Object.keys(n).forEach(function (e) {
                    var r = p[e] && p[e].serverName || p[e] || e,
                        a = p[e] && p[e].requiredParams;
                    if (i[r] = b({}, a, n[e]), (r === p.image.serverName || r === p.icon.serverName) && i[r].sizes) {
                        var t = i[r].sizes;
                        (_.isArrayOfNums(t) || _.isArray(t) && 0 < t.length && t.every(function (e) {
                            return _.isArrayOfNums(e)
                        })) && (i[r].sizes = j(i[r].sizes))
                    }
                    r === p.privacyLink && (i.privacy_supported = !0)
                }), i);
                a[g.c] = {
                    layouts: [t]
                }
            }
            var s = _.deepAccess(r, "mediaTypes.".concat(g.d)),
                o = _.deepAccess(r, "mediaTypes.video.context");
            r.mediaType !== g.d && !s || a.ad_types.push(g.d), (r.mediaType === g.d || s && "outstream" !== o) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter(function (e) {
                return x()(u, e)
            }).forEach(function (e) {
                return a.video[e] = r.params.video[e]
            })), r.renderer && (a.video = b({}, a.video, {
                custom_renderer_present: !0
            }));
            var d = I()(c.a.getAdUnits(), function (e) {
                return r.transactionId === e.transactionId
            });
            return d && d.mediaTypes && d.mediaTypes.banner && a.ad_types.push(g.b), 0 === a.ad_types.length && delete a.ad_types, a
        }

        function j(e) {
            var r = [],
                a = {};
            if (_.isArray(e) && 2 === e.length && !_.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === i(e))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a)
                }
            return r
        }

        function P(e) {
            return !!e.params.user
        }

        function N(e) {
            return !!parseInt(e.params.member, 10)
        }

        function U(e) {
            if (e.params) return !!e.params.app
        }

        function q(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function z(e) {
            return !!e.debug
        }

        function M(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === g.a
        }

        function B(e, r, a) {
            _.isEmpty(e.video) && (e.video = {}), e.video[r] = a
        }

        function D(e) {
            e.renderer.push(function () {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function (e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            })
        }
        Object(v.registerBidder)(l)
    }
}, [207]);
pbjsChunk([178], {
    388: function (e, r, t) {
        e.exports = t(389)
    },
    389: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function () {
            return O
        });
        var b = t(0),
            y = t(2),
            l = t(3),
            i = t(12),
            a = t.n(i),
            n = t(390),
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
            g = 35,
            w = 3600,
            x = !0,
            I = {
                JPY: 1
            };

        function p(e) {
            var r = u(e);
            r.video = b.deepClone(e.params.video), r.video.w = e.params.size[0], r.video.h = e.params.size[1];
            var t = b.deepAccess(e, "mediaTypes.video.context");
            return t && ("instream" === t ? r.video.placement = 1 : "outstream" === t ? r.video.placement = 4 : b.logWarn("ix bidder params: video context '".concat(t, "' is not supported"))), r
        }

        function u(e) {
            var r = {};
            return r.id = e.bidId, r.ext = {}, r.ext.siteID = e.params.siteId, !e.params.hasOwnProperty("id") || "string" != typeof e.params.id && "number" != typeof e.params.id ? r.ext.sid = "".concat(e.params.size[0], "x").concat(e.params.size[1]) : r.ext.sid = String(e.params.id), e.params.hasOwnProperty("bidFloor") && e.params.hasOwnProperty("bidFloorCur") && (r.bidfloor = e.params.bidFloor, r.bidfloorcur = e.params.bidFloorCur), r
        }

        function c(e) {
            return Array.isArray(e) && 2 === e.length && s()(e[0]) && s()(e[1])
        }

        function m(e, r) {
            if (c(e)) return e[0] === r[0] && e[1] === r[1];
            for (var t = 0; t < e.length; t++)
                if (e[t][0] === r[0] && e[t][1] === r[1]) return !0;
            return !1
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
                r.uspConsent && b.deepSetValue(d, "regs.ext.us_privacy", r.uspConsent), r.refererInfo && (d.site.page = r.refererInfo.referer)
            }
            var u = {},
                c = l.b.getConfig("ix");
            if (c) {
                if ("object" === h(c.firstPartyData)) {
                    var m = c.firstPartyData,
                        f = "?";
                    for (var y in m) m.hasOwnProperty(y) && (f += "".concat(encodeURIComponent(y), "=").concat(encodeURIComponent(m[y]), "&"));
                    f = f.slice(0, -1), d.site.page += f
                }
                "number" == typeof c.timeout && (u.t = c.timeout)
            }
            return u.s = e[0].params.siteId, u.v = i, u.r = JSON.stringify(d), u.ac = "j", u.sd = 1, 8.1 === i && (u.nf = 1), {
                method: "GET",
                url: "https://as-sec.casalemedia.com/cygnus",
                data: u
            }
        }
        var O = {
            code: "ix",
            supportedMediaTypes: d,
            isBidRequestValid: function (e) {
                if (!c(e.params.size)) return b.logError("ix bidder params: bid size has invalid format."), !1;
                if (!m(e.sizes, e.params.size)) return b.logError("ix bidder params: bid size is not included in ad unit sizes."), !1;
                if (e.hasOwnProperty("mediaType") && !b.contains(d, e.mediaType)) return !1;
                if (e.hasOwnProperty("mediaTypes") && !b.deepAccess(e, "mediaTypes.banner.sizes") && !b.deepAccess(e, "mediaTypes.video.playerSize")) return !1;
                if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return b.logError("ix bidder params: siteId must be string or number value."), !1;
                var r, t, i = e.params.hasOwnProperty("bidFloor"),
                    a = e.params.hasOwnProperty("bidFloorCur");
                return !!(!i && !a || i && a && (r = e.params.bidFloor, t = e.params.bidFloorCur, Boolean("number" == typeof r && "string" == typeof t && t.match(/^[A-Z]{3}$/)))) || (b.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."), !1)
            },
            buildRequests: function (e, r) {
                for (var t, i, a = [], n = [], s = [], o = null, d = 0; d < e.length; d++)(o = e[d]).mediaType !== y.d && !b.deepAccess(o, "mediaTypes.video") || (o.mediaType === y.d || m(o.mediaTypes.video.playerSize, o.params.size) ? s.push(p(o)) : b.logError("Bid size is not included in video playerSize")), o.mediaType !== y.b && !b.deepAccess(o, "mediaTypes.banner") && (o.mediaType || o.mediaTypes) || n.push((i = void 0, (i = u(t = o)).banner = {}, i.banner.w = t.params.size[0], i.banner.h = t.params.size[1], i.banner.topframe = b.inIframe() ? 0 : 1, i));
                return 0 < n.length && a.push(f(e, r, n, 7.2)), 0 < s.length && a.push(f(e, r, s, 8.1)), a
            },
            interpretResponse: function (e, r) {
                var t = [];
                if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return t;
                for (var i, a, n, s, o = e.body, d = o.seatbid, p = 0; p < d.length; p++)
                    if (d[p].hasOwnProperty("bid"))
                        for (var u = d[p].bid, c = JSON.parse(r.data.r), m = 0; m < u.length; m++) {
                            var f = P(u[m].impid, c.imp);
                            i = u[m], a = o.cur, n = f, s = void 0, s = {}, I.hasOwnProperty(a) ? s.cpm = i.price / I[a] : s.cpm = i.price / v, s.requestId = i.impid, s.dealId = b.deepAccess(i, "ext.dealid"), s.netRevenue = x, s.currency = a, s.creativeId = i.hasOwnProperty("crid") ? i.crid : "-", b.deepAccess(i, "ext.vasturl") ? (s.vastUrl = i.ext.vasturl, s.width = n.video.w, s.height = n.video.h, s.mediaType = y.d, s.ttl = w) : (s.ad = i.adm, s.width = i.w, s.height = i.h, s.mediaType = y.b, s.ttl = g), s.meta = {}, s.meta.networkId = b.deepAccess(i, "ext.dspid"), s.meta.brandId = b.deepAccess(i, "ext.advbrandid"), s.meta.brandName = b.deepAccess(i, "ext.advbrand"), t.push(s)
                        }
                return t
            },
            transformBidParams: function (e) {
                return b.convertTypes({
                    siteID: "number"
                }, e)
            }
        };
        Object(o.registerBidder)(O)
    }
}, [388]);
pbjsChunk([142], {
    473: function (e, t, n) {
        e.exports = n(474)
    },
    474: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "spec", function () {
            return i
        });
        var c = n(3),
            r = n(1),
            d = n(0),
            s = n(2),
            o = n(9);

        function p(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, i = e
                } finally {
                    try {
                        r || null == o.return || o.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var a = [s.b, s.d],
            u = "hb_pb",
            m = "3.0.1",
            h = {
                idl_env: "lre",
                pubcid: "pubcid",
                tdid: "ttduuid"
            },
            i = {
                code: "openx",
                supportedMediaTypes: a,
                isBidRequestValid: function (e) {
                    var t = e.params.delDomain || e.params.platform;
                    return d.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < d.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
                },
                buildRequests: function (e, r) {
                    if (0 === e.length) return [];
                    var a = [],
                        t = p(e.reduce(function (e, t) {
                            var n;
                            return n = t, d.deepAccess(n, "mediaTypes.video") && !d.deepAccess(n, "mediaTypes.banner") || n.mediaType === s.d ? e[0].push(t) : e[1].push(t), e
                        }, [
                            [],
                            []
                        ]), 2),
                        n = t[0],
                        i = t[1];
                    return 0 < i.length && a.push(function (e, t) {
                        var r = [],
                            a = !1,
                            n = l(e, t),
                            i = d._map(e, function (e) {
                                return e.params.unit
                            });
                        n.aus = d._map(e, function (e) {
                            return d.parseSizesInput(e.mediaTypes.banner.sizes).join(",")
                        }).join("|"), n.divIds = d._map(e, function (e) {
                            return encodeURIComponent(e.adUnitCode)
                        }).join(","), i.some(function (e) {
                            return e
                        }) && (n.auid = i.join(","));
                        e.some(function (e) {
                            return e.params.doNotTrack
                        }) && (n.ns = 1);
                        !0 !== c.b.getConfig("coppa") && !e.some(function (e) {
                            return e.params.coppa
                        }) || (n.tfcd = 1);
                        e.forEach(function (t) {
                            if (t.params.customParams) {
                                var e = d._map(Object.keys(t.params.customParams), function (e) {
                                        return function (e, t) {
                                            var n = t[e];
                                            d.isArray(n) && (n = n.join(","));
                                            return (e.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_")
                                        }(e, t.params.customParams)
                                    }),
                                    n = window.btoa(e.join("&"));
                                a = !0, r.push(n)
                            } else r.push("")
                        }), a && (n.tps = r.join(","));
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
                    }(i, r)), 0 < n.length && n.forEach(function (e) {
                        var t, n;
                        a.push({
                            method: "GET",
                            url: (n = function (e, t) {
                                var n, r, a = l([e], t),
                                    i = d.deepAccess(e, "params.video") || {},
                                    s = d.deepAccess(e, "mediaTypes.video.context"),
                                    o = d.deepAccess(e, "mediaTypes.video.playerSize");
                                d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), r = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), r = parseInt(e.sizes[0][1], 10)) : d.isArray(o) && 2 === o.length && (n = parseInt(o[0], 10), r = parseInt(o[1], 10));
                                Object.keys(i).forEach(function (e) {
                                    "openrtb" === e ? (i[e].w = n || i[e].w, i[e].v = r || i[e].v, a[e] = JSON.stringify(i[e])) : e in a || "url" === e || (a[e] = i[e])
                                }), a.auid = e.params.unit, a.vwd = n || i.vwd, a.vht = r || i.vht, "outstream" === s && (a.vos = "101");
                                i.mimes && (a.vmimes = i.mimes);
                                return a
                            }(t = e, r)).ph ? "https://u.openx.net/v/1.0/avjp" : "https://".concat(t.params.delDomain, "/v/1.0/avjp"),
                            data: n,
                            payload: {
                                bid: t,
                                startTime: new Date
                            }
                        })
                    }), a
                },
                interpretResponse: function (e, t) {
                    var n = e.body;
                    return (/avjp$/.test(t.url) ? s.d : s.b) === s.d ? function (e, t) {
                        var n = t.bid,
                            r = (t.startTime, []);
                        if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                            var a = Object(o.c)(e.vastUrl).search || {},
                                i = {};
                            i.requestId = n.bidId, i.ttl = 300, i.netRevenue = !0, i.currency = e.currency, i.cpm = Number(e.pub_rev) / 1e3, i.width = e.width, i.height = e.height, i.creativeId = e.adid, i.vastUrl = e.vastUrl, i.mediaType = s.d, e.ph = a.ph, e.colo = a.colo, e.ts = a.ts, r.push(i)
                        }
                        return r
                    }(n, t.payload) : function (e, t) {
                        for (var n = t.bids, r = (t.startTime, e.ads.ad), a = [], i = 0; i < r.length; i++) {
                            var s = r[i],
                                o = parseInt(s.idx, 10),
                                c = {};
                            if (c.requestId = n[o].bidId, s.pub_rev) {
                                c.cpm = Number(s.pub_rev) / 1e3;
                                var d = s.creative[0];
                                d && (c.width = d.width, c.height = d.height), c.creativeId = d.id, c.ad = s.html, s.deal_id && (c.dealId = s.deal_id), c.ttl = 300, c.netRevenue = !0, c.currency = s.currency, s.tbd && (c.tbd = s.tbd), c.ts = s.ts, c.meta = {}, s.brand_id && (c.meta.brandId = s.brand_id), s.adv_id && (c.meta.dspid = s.adv_id), a.push(c)
                            }
                        }
                        return a
                    }(n, t.payload)
                },
                getUserSyncs: function (e, t, n, r) {
                    if (e.iframeEnabled || e.pixelEnabled) return [{
                        type: e.iframeEnabled ? "iframe" : "image",
                        url: d.deepAccess(t, "0.body.ads.pixels") || d.deepAccess(t, "0.body.pixels") || function (e, t) {
                            var n = [];
                            e && (n.push("gdpr=" + (e.gdprApplies ? 1 : 0)), n.push("gdpr_consent=" + encodeURIComponent(e.consentString || "")));
                            t && n.push("us_privacy=" + encodeURIComponent(t));
                            return "".concat("https://u.openx.net/w/1.0/pd").concat(0 < n.length ? "?" + n.join("&") : "")
                        }(n, r)
                    }]
                },
                transformBidParams: function (e) {
                    return d.convertTypes({
                        unit: "string",
                        customFloor: "number"
                    }, e)
                }
            };

        function l(e, t) {
            var n, r, a, i, s = d.inIframe();
            if (n = {
                    ju: c.b.getConfig("pageUrl") || t.refererInfo.referer,
                    ch: document.charSet || document.characterSet,
                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                    ifr: s,
                    tz: (new Date).getTimezoneOffset(),
                    tws: function (e) {
                        var t, n, r, a = window,
                            i = document,
                            s = i.documentElement;
                        if (e) {
                            try {
                                a = window.top, i = window.top.document
                            } catch (e) {
                                return
                            }
                            s = i.documentElement, r = i.body, t = a.innerWidth || s.clientWidth || r.clientWidth, n = a.innerHeight || s.clientHeight || r.clientHeight
                        } else s = i.documentElement, t = a.innerWidth || s.clientWidth, n = a.innerHeight || s.clientHeight;
                        return "".concat(t, "x").concat(n)
                    }(s),
                    be: 1,
                    bc: e[0].params.bc || "".concat(u, "_").concat(m),
                    dddid: d._map(e, function (e) {
                        return e.transactionId
                    }).join(","),
                    nocache: (new Date).getTime()
                }, e[0].params.platform && (n.ph = e[0].params.platform), t.gdprConsent) {
                var o = t.gdprConsent;
                void 0 !== o.consentString && (n.gdpr_consent = o.consentString), void 0 !== o.gdprApplies && (n.gdpr = o.gdprApplies ? 1 : 0), "iab" === c.b.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
            }
            return t && t.uspConsent && (n.us_privacy = t.uspConsent), d.deepAccess(e[0], "crumbs.pubcid") && d.deepSetValue(e[0], "userId.pubcid", d.deepAccess(e[0], "crumbs.pubcid")), r = n, a = e[0].userId, d._each(a, function (e, t) {
                h.hasOwnProperty(t) && (r[h[t]] = e)
            }), n = r, e[0].schain && (n.schain = (i = e[0].schain, "".concat(i.ver, ",").concat(i.complete, "!").concat(function (e) {
                var n = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e.map(function (t) {
                    return n.map(function (e) {
                        return t[e] || ""
                    }).join(",")
                }).join("!")
            }(i.nodes)))), n
        }
        Object(r.registerBidder)(i)
    }
}, [473]);
pbjsChunk([121], {
    520: function (e, r, a) {
        e.exports = a(521)
    },
    521: function (e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), a.d(r, "spec", function () {
            return x
        });
        var h = a(0),
            i = a(1),
            f = a(2),
            I = a(3);

        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var E = "PubMatic: ",
            v = "USD",
            t = "nFIn8aLzbd",
            b = void 0,
            w = {
                kadpageurl: "",
                gender: "",
                yob: "",
                lat: "",
                lon: "",
                wiid: "",
                profId: "",
                verId: ""
            },
            n = {
                NUMBER: "number",
                STRING: "string",
                BOOLEAN: "boolean",
                ARRAY: "array",
                OBJECT: "object"
            },
            s = {
                mimes: n.ARRAY,
                minduration: n.NUMBER,
                maxduration: n.NUMBER,
                startdelay: n.NUMBER,
                playbackmethod: n.ARRAY,
                api: n.ARRAY,
                protocols: n.ARRAY,
                w: n.NUMBER,
                h: n.NUMBER,
                battr: n.ARRAY,
                linearity: n.NUMBER,
                placement: n.NUMBER,
                minbitrate: n.NUMBER,
                maxbitrate: n.NUMBER
            },
            p = {
                TITLE: {
                    ID: 1,
                    KEY: "title",
                    TYPE: 0
                },
                IMAGE: {
                    ID: 2,
                    KEY: "image",
                    TYPE: 0
                },
                ICON: {
                    ID: 3,
                    KEY: "icon",
                    TYPE: 0
                },
                SPONSOREDBY: {
                    ID: 4,
                    KEY: "sponsoredBy",
                    TYPE: 1
                },
                BODY: {
                    ID: 5,
                    KEY: "body",
                    TYPE: 2
                },
                CLICKURL: {
                    ID: 6,
                    KEY: "clickUrl",
                    TYPE: 0
                },
                VIDEO: {
                    ID: 7,
                    KEY: "video",
                    TYPE: 0
                },
                EXT: {
                    ID: 8,
                    KEY: "ext",
                    TYPE: 0
                },
                DATA: {
                    ID: 9,
                    KEY: "data",
                    TYPE: 0
                },
                LOGO: {
                    ID: 10,
                    KEY: "logo",
                    TYPE: 0
                },
                SPONSORED: {
                    ID: 11,
                    KEY: "sponsored",
                    TYPE: 1
                },
                DESC: {
                    ID: 12,
                    KEY: "data",
                    TYPE: 2
                },
                RATING: {
                    ID: 13,
                    KEY: "rating",
                    TYPE: 3
                },
                LIKES: {
                    ID: 14,
                    KEY: "likes",
                    TYPE: 4
                },
                DOWNLOADS: {
                    ID: 15,
                    KEY: "downloads",
                    TYPE: 5
                },
                PRICE: {
                    ID: 16,
                    KEY: "price",
                    TYPE: 6
                },
                SALEPRICE: {
                    ID: 17,
                    KEY: "saleprice",
                    TYPE: 7
                },
                PHONE: {
                    ID: 18,
                    KEY: "phone",
                    TYPE: 8
                },
                ADDRESS: {
                    ID: 19,
                    KEY: "address",
                    TYPE: 9
                },
                DESC2: {
                    ID: 20,
                    KEY: "desc2",
                    TYPE: 10
                },
                DISPLAYURL: {
                    ID: 21,
                    KEY: "displayurl",
                    TYPE: 11
                },
                CTA: {
                    ID: 22,
                    KEY: "cta",
                    TYPE: 12
                }
            },
            c = {
                ICON: 1,
                LOGO: 2,
                IMAGE: 3
            },
            l = [{
                id: p.SPONSOREDBY.ID,
                required: !0,
                data: {
                    type: 1
                }
            }, {
                id: p.TITLE.ID,
                required: !0
            }, {
                id: p.IMAGE.ID,
                required: !0
            }],
            o = {
                1: "PMP",
                5: "PREF",
                6: "PMPG"
            },
            T = 0,
            O = !1,
            d = {},
            u = {};

        function D(e, r) {
            if (!h.isStr(r)) return r && h.logWarn(E + "Ignoring param key: " + e + ", expects string-value, found " + y(r)), b;
            switch (e) {
                case "pmzoneid":
                    return r.split(",").slice(0, 50).map(function (e) {
                        return e.trim()
                    }).join();
                case "kadfloor":
                case "lat":
                case "lon":
                    return parseFloat(r) || b;
                case "yob":
                    return parseInt(r) || b;
                default:
                    return r
            }
        }

        function S(e) {
            var r;
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, h.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
            var a = e.params.adSlot,
                i = a.split(":");
            if (a = i[0], 2 == i.length && (e.params.adUnitIndex = i[1]), i = a.split("@"), e.params.adUnit = i[0], 1 < i.length) {
                if (2 != (i = i[1].split("x")).length) return void h.logWarn(E + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(i[0], 10), e.params.height = parseInt(i[1], 10)
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(f.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var s = 0, t = []; s < e.mediaTypes.banner.sizes.length; s++) 2 === e.mediaTypes.banner.sizes[s].length && t.push(e.mediaTypes.banner.sizes[s]);
                e.mediaTypes.banner.sizes = t, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
            }
        }

        function m(e, r, a) {
            var i, s = "Ignoring param key: " + e + ", expects " + a + ", found " + y(r);
            switch (a) {
                case n.BOOLEAN:
                    i = h.isBoolean;
                    break;
                case n.NUMBER:
                    i = h.isNumber;
                    break;
                case n.STRING:
                    i = h.isStr;
                    break;
                case n.ARRAY:
                    i = h.isArray
            }
            return i(r) ? r : (h.logWarn(E + s), b)
        }

        function Y(e) {
            var r, a, i, s = {
                assets: []
            };
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    var n = {};
                    if (!(s.assets && 0 < s.assets.length && s.assets.hasOwnProperty(t))) switch (t) {
                        case p.TITLE.KEY:
                            e[t].len || e[t].length ? n = {
                                id: p.TITLE.ID,
                                required: e[t].required ? 1 : 0,
                                title: {
                                    len: e[t].len || e[t].length,
                                    ext: e[t].ext
                                }
                            } : h.logWarn(E + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.IMAGE.KEY:
                            e[t].sizes && 0 < e[t].sizes.length ? n = {
                                id: p.IMAGE.ID,
                                required: e[t].required ? 1 : 0,
                                img: {
                                    type: c.IMAGE,
                                    w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : b),
                                    h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : b),
                                    wmin: e[t].wmin || e[t].minimumWidth || (e[t].minsizes ? e[t].minsizes[0] : b),
                                    hmin: e[t].hmin || e[t].minimumHeight || (e[t].minsizes ? e[t].minsizes[1] : b),
                                    mimes: e[t].mimes,
                                    ext: e[t].ext
                                }
                            } : h.logWarn(E + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.ICON.KEY:
                            e[t].sizes && 0 < e[t].sizes.length ? n = {
                                id: p.ICON.ID,
                                required: e[t].required ? 1 : 0,
                                img: {
                                    type: c.ICON,
                                    w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : b),
                                    h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : b)
                                }
                            } : h.logWarn(E + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                            break;
                        case p.VIDEO.KEY:
                            n = {
                                id: p.VIDEO.ID,
                                required: e[t].required ? 1 : 0,
                                video: {
                                    minduration: e[t].minduration,
                                    maxduration: e[t].maxduration,
                                    protocols: e[t].protocols,
                                    mimes: e[t].mimes,
                                    ext: e[t].ext
                                }
                            };
                            break;
                        case p.EXT.KEY:
                            n = {
                                id: p.EXT.ID,
                                required: e[t].required ? 1 : 0
                            };
                            break;
                        case p.LOGO.KEY:
                            n = {
                                id: p.LOGO.ID,
                                required: e[t].required ? 1 : 0,
                                img: {
                                    type: c.LOGO,
                                    w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : b),
                                    h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : b)
                                }
                            };
                            break;
                        case p.SPONSOREDBY.KEY:
                        case p.BODY.KEY:
                        case p.RATING.KEY:
                        case p.LIKES.KEY:
                        case p.DOWNLOADS.KEY:
                        case p.PRICE.KEY:
                        case p.SALEPRICE.KEY:
                        case p.PHONE.KEY:
                        case p.ADDRESS.KEY:
                        case p.DESC2.KEY:
                        case p.DISPLAYURL.KEY:
                        case p.CTA.KEY:
                            r = u[t], a = e, i = r.KEY, n = {
                                id: r.ID,
                                required: a[i].required ? 1 : 0,
                                data: {
                                    type: r.TYPE,
                                    len: a[i].len,
                                    ext: a[i].ext
                                }
                            }
                    }
                }
                n && n.id && (s.assets[s.assets.length] = n)
            }
            var o = l.length,
                d = 0;
            return l.forEach(function (e) {
                for (var r = s.assets.length, a = 0; a < r; a++)
                    if (e.id == s.assets[a].id) {
                        d++;
                        break
                    }
            }), O = o != d, s
        }

        function P(e) {
            var r, a = e.mediaTypes.banner.sizes,
                i = [];
            if (a !== b && h.isArray(a)) {
                if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;
                else {
                    if (0 === a.length) return r = b, h.logWarn(E + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                    r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1)
                }
                0 < a.length && (i = [], a.forEach(function (e) {
                    1 < e.length && i.push({
                        w: e[0],
                        h: e[1]
                    })
                }), 0 < i.length && (r.format = i)), r.pos = 0, r.topframe = h.inIframe() ? 0 : 1
            } else h.logWarn(E + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = b;
            return r
        }

        function A(e) {
            var r, a = e.params.video;
            if (a !== b) {
                for (var i in r = {}, s) a.hasOwnProperty(i) && (r[i] = m(i, a[i], s[i]));
                h.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : h.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                })
            } else r = b, h.logWarn(E + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r
        }

        function g(e) {
            var r, a, i, s = (r = t, !(i = (a = window.DigiTrust && (I.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                member: r
            }))) && a.success && a.identity || null) || i.privacy && i.privacy.optout ? null : i);
            null !== s && e.push({
                source: "digitru.st",
                uids: [{
                    id: s.id || "",
                    atype: 1,
                    ext: {
                        keyv: parseInt(s.keyv) || 0
                    }
                }]
            })
        }

        function R(e, r, a, i) {
            h.isStr(r) && e.push({
                source: a,
                uids: [{
                    id: r,
                    atype: i
                }]
            })
        }

        function k(e, r) {
            var a, i, s, t, n = [];
            g(n), a = n, i = r, s = null, t = I.b.getConfig("adsrvrOrgId"), h.isStr(h.deepAccess(i, "0.userId.tdid")) ? s = i[0].userId.tdid : t && h.isStr(t.TDID) && (s = t.TDID), null !== s && a.push({
                source: "adserver.org",
                uids: [{
                    id: s,
                    atype: 1,
                    ext: {
                        rtiPartner: "TDID"
                    }
                }]
            });
            var o = r[0];
            o && o.userId && (R(n, h.deepAccess(o, "userId.pubcid"), "pubcid.org", 1), R(n, h.deepAccess(o, "userId.digitrustid.data.id"), "digitru.st", 1), R(n, h.deepAccess(o, "userId.id5id"), "id5-sync.com", 1), R(n, h.deepAccess(o, "userId.criteoId"), "criteo.com", 1), R(n, h.deepAccess(o, "userId.idl_env"), "liveramp.com", 1), R(n, h.deepAccess(o, "userId.lipb.lipbid"), "liveintent.com", 1), R(n, h.deepAccess(o, "userId.parrableid"), "parrable.com", 1), R(n, h.deepAccess(o, "userId.britepoolid"), "britepool.com", 1)), 0 < n.length && (e.user.eids = n)
        }
        h._each(p, function (e) {
            d[e.ID] = e.KEY
        }), h._each(p, function (e) {
            u[e.KEY] = e
        });
        var x = {
            code: "pubmatic",
            supportedMediaTypes: [f.b, f.d, f.c],
            isBidRequestValid: function (e) {
                return !(!e || !e.params) && (h.isStr(e.params.publisherId) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && h.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (h.logWarn(E + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1) : (h.logWarn(E + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1))
            },
            buildRequests: function (e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var i, s, t, n, o, d, p, c = {
                        pageURL: (i = a) && i.referer ? i.referer : window.location.href,
                        refURL: window.document.referrer
                    },
                    l = (s = c, {
                        id: "" + (new Date).getTime(),
                        at: 1,
                        cur: [v],
                        imp: [],
                        site: {
                            page: s.pageURL,
                            ref: s.refURL,
                            publisher: {}
                        },
                        device: {
                            ua: navigator.userAgent,
                            js: 1,
                            dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                            h: screen.height,
                            w: screen.width,
                            language: navigator.language
                        },
                        user: {},
                        ext: {}
                    }),
                    u = "",
                    m = [],
                    g = [];
                if (e.forEach(function (e) {
                        if ((t = h.deepClone(e)).params.adSlot = t.params.adSlot || "", S(t), t.params.hasOwnProperty("video") || t.hasOwnProperty("mediaTypes") && t.mediaTypes.hasOwnProperty(f.c) || 0 !== t.params.width || 0 !== t.params.height) {
                            c.pubId = c.pubId || t.params.publisherId, (c = function (e, r) {
                                var a, i, s;
                                for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), w) w.hasOwnProperty(a) && (i = e[a]) && ("object" === y(s = w[a]) && (i = s.f(i, r)), h.isStr(i) ? r[a] = i : h.logWarn(E + "Ignoring param : " + a + " with value : " + w[a] + ", expects string-value, found " + y(i)));
                                return r
                            }(t.params, c)).transactionId = t.transactionId, "" === u ? u = t.params.currency || b : t.params.hasOwnProperty("currency") && u !== t.params.currency && h.logWarn(E + "Currency specifier ignored. Only one currency permitted."), t.params.currency = u, t.params.hasOwnProperty("dctr") && h.isStr(t.params.dctr) && m.push(t.params.dctr), t.params.hasOwnProperty("bcat") && h.isArray(t.params.bcat) && (g = g.concat(t.params.bcat));
                            var r = function (e) {
                                var r, a, i = {},
                                    s = {},
                                    t = e.hasOwnProperty("sizes") ? e.sizes : [],
                                    n = "",
                                    o = [];
                                if (i = {
                                        id: e.bidId,
                                        tagid: e.params.adUnit || void 0,
                                        bidfloor: D("kadfloor", e.params.kadfloor),
                                        secure: 1,
                                        ext: {
                                            pmZoneId: D("pmzoneid", e.params.pmzoneid)
                                        },
                                        bidfloorcur: e.params.currency ? D("currency", e.params.currency) : v
                                    }, e.hasOwnProperty("mediaTypes"))
                                    for (n in e.mediaTypes) switch (n) {
                                        case f.b:
                                            (r = P(e)) !== b && (i.banner = r);
                                            break;
                                        case f.c:
                                            s.request = JSON.stringify(Y(e.nativeParams)), O ? h.logWarn(E + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : i.native = s;
                                            break;
                                        case f.d:
                                            (a = A(e)) !== b && (i.video = a)
                                    } else r = {
                                        pos: 0,
                                        w: e.params.width,
                                        h: e.params.height,
                                        topframe: h.inIframe() ? 0 : 1
                                    }, h.isArray(t) && 1 < t.length && ((t = t.splice(1, t.length - 1)).forEach(function (e) {
                                        o.push({
                                            w: e[0],
                                            h: e[1]
                                        })
                                    }), r.format = o), i.banner = r;
                                return i.hasOwnProperty(f.b) || i.hasOwnProperty(f.c) || i.hasOwnProperty(f.d) ? i : b
                            }(t);
                            r && l.imp.push(r)
                        } else h.logWarn(E + "Skipping the non-standard adslot: ", t.params.adSlot, JSON.stringify(t))
                    }), 0 != l.imp.length) return l.site.publisher.id = c.pubId.trim(), T = c.pubId.trim(), l.ext.wrapper = {}, l.ext.wrapper.profile = parseInt(c.profId) || b, l.ext.wrapper.version = parseInt(c.verId) || b, l.ext.wrapper.wiid = c.wiid || b, l.ext.wrapper.wv = "prebid_prebid_2.44.7", l.ext.wrapper.transactionId = c.transactionId, l.ext.wrapper.wp = "pbjs", l.user.gender = c.gender ? c.gender.trim() : b, l.user.geo = {}, l.user.geo.lat = D("lat", c.lat), l.user.geo.lon = D("lon", c.lon), l.user.yob = D("yob", c.yob), l.device.geo = l.user.geo, l.site.page = c.kadpageurl.trim() || l.site.page.trim(), l.site.domain = (n = l.site.page, (o = document.createElement("a")).href = n, o.hostname), -1 !== window.location.href.indexOf("pubmaticTest=true") && (l.test = 1), e[0].schain && (l.source = {
                        ext: {
                            schain: e[0].schain
                        }
                    }), r && r.gdprConsent && (l.user.ext = {
                        consent: r.gdprConsent.consentString
                    }, l.regs = {
                        ext: {
                            gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                        }
                    }), r && r.uspConsent && h.deepSetValue(l, "regs.ext.us_privacy", r.uspConsent), !0 === I.b.getConfig("coppa") && h.deepSetValue(l, "regs.coppa", 1),
                    function (e, r, a) {
                        var i, s = "";
                        if (0 < r.length)
                            if (a[0].params.hasOwnProperty("dctr")) {
                                if (s = a[0].params.dctr, h.isStr(s) && 0 < s.length) {
                                    var t = s.split("|");
                                    s = "", t.forEach(function (e) {
                                        s += 0 < e.length ? e.trim() + "|" : ""
                                    }), i = s.length, "|" === s.substring(i, i - 1) && (s = s.substring(0, i - 1)), e.site.ext = {
                                        key_val: s.trim()
                                    }
                                } else h.logWarn(E + "Ignoring param : dctr with value : " + s + ", expects string-value, found empty or non-string value");
                                1 < r.length && h.logWarn(E + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                            } else h.logWarn(E + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")
                    }(l, m, e), k(l, e), d = l, 0 < (p = (p = g).filter(function (e) {
                        return "string" == typeof e || (h.logWarn(E + "bcat: Each category should be a string, ignoring category: " + e), !1)
                    }).map(function (e) {
                        return e.trim()
                    }).filter(function (e, r, a) {
                        if (3 < e.length) return a.indexOf(e) === r;
                        h.logWarn(E + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                    })).length && (h.logWarn(E + "bcat: Selected: ", p), d.bcat = p), {
                        method: "POST",
                        url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                        data: JSON.stringify(l)
                    }
            },
            interpretResponse: function (e, r) {
                var i = [],
                    s = v,
                    t = JSON.parse(r.data),
                    n = t.site && t.site.ref ? t.site.ref : "";
                try {
                    e.body && e.body.seatbid && h.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function (e) {
                        e.bid && h.isArray(e.bid) && e.bid.forEach(function (r) {
                            var a = {
                                requestId: r.impid,
                                cpm: (parseFloat(r.price) || 0).toFixed(2),
                                width: r.w,
                                height: r.h,
                                creativeId: r.crid || r.id,
                                dealId: r.dealid,
                                currency: s,
                                netRevenue: !1,
                                ttl: 300,
                                referrer: n,
                                ad: r.adm
                            };
                            t.imp && 0 < t.imp.length && t.imp.forEach(function (e) {
                                if (r.impid === e.id) switch (! function (r, e) {
                                    var a = "",
                                        i = new RegExp(/VAST\s+version/);
                                    if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = f.b;
                                    else if (i.test(r)) e.mediaType = f.d;
                                    else try {
                                        (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = f.c)
                                    } catch (e) {
                                        h.logWarn(E + "Error: Cannot parse native reponse for ad response: " + r)
                                    }
                                }(r.adm, a), a.mediaType) {
                                    case f.b:
                                        break;
                                    case f.d:
                                        a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, a.vastXml = r.adm;
                                        break;
                                    case f.c:
                                        ! function (e, r) {
                                            if (r.native = {}, e.hasOwnProperty("adm")) {
                                                var a = "";
                                                try {
                                                    a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                } catch (e) {
                                                    return h.logWarn(E + "Error: Cannot parse native reponse for ad response: " + r.adm)
                                                }
                                                if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                    r.mediaType = f.c;
                                                    for (var i = 0, s = a.native.assets.length; i < s; i++) switch (a.native.assets[i].id) {
                                                        case p.TITLE.ID:
                                                            r.native.title = a.native.assets[i].title && a.native.assets[i].title.text;
                                                            break;
                                                        case p.IMAGE.ID:
                                                            r.native.image = {
                                                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                width: a.native.assets[i].img && a.native.assets[i].img.w
                                                            };
                                                            break;
                                                        case p.ICON.ID:
                                                            r.native.icon = {
                                                                url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                width: a.native.assets[i].img && a.native.assets[i].img.w
                                                            };
                                                            break;
                                                        case p.SPONSOREDBY.ID:
                                                        case p.BODY.ID:
                                                        case p.LIKES.ID:
                                                        case p.DOWNLOADS.ID:
                                                        case p.PRICE:
                                                        case p.SALEPRICE.ID:
                                                        case p.PHONE.ID:
                                                        case p.ADDRESS.ID:
                                                        case p.DESC2.ID:
                                                        case p.CTA.ID:
                                                        case p.RATING.ID:
                                                        case p.DISPLAYURL.ID:
                                                            r.native[d[a.native.assets[i].id]] = a.native.assets[i].data && a.native.assets[i].data.value
                                                    }
                                                    r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0)
                                                }
                                            }
                                        }(r, a)
                                }
                            }), r.ext && r.ext.deal_channel && (a.dealChannel = o[r.ext.deal_channel] || null), a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), r.adomain && 0 < r.adomain.length && (a.meta.clickUrl = r.adomain[0]), i.push(a)
                        })
                    }))
                } catch (e) {
                    h.logError(e)
                }
                return i
            },
            getUserSyncs: function (e, r, a, i) {
                var s = "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + T;
                if (a && (s += "&gdpr=" + (a.gdprApplies ? 1 : 0), s += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), i && (s += "&us_privacy=" + encodeURIComponent(i)), !0 === I.b.getConfig("coppa") && (s += "&coppa=1"), e.iframeEnabled) return [{
                    type: "iframe",
                    url: s
                }];
                h.logWarn(E + "Please enable iframe based user sync.")
            },
            transformBidParams: function (e) {
                return h.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e)
            }
        };
        Object(i.registerBidder)(x)
    }
}, [520]);
pbjsChunk([104], {
    568: function (e, r, t) {
        e.exports = t(569)
    },
    569: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "FASTLANE_ENDPOINT", function () {
            return o
        }), t.d(r, "VIDEO_ENDPOINT", function () {
            return s
        }), t.d(r, "SYNC_ENDPOINT", function () {
            return a
        }), t.d(r, "spec", function () {
            return b
        }), r.hasVideoMediaType = n, r.masSizeOrdering = A, r.determineRubiconVideoSizeId = S, r.getPriceGranularity = j, r.hasValidVideoParams = C, r.hasValidSupplyChainParams = k, r.encodeParam = T, r.resetUserSync = function () {
            R = !1
        };
        var p = t(0),
            i = t(1),
            l = t(3),
            u = t(2);

        function m() {
            return (m = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }

        function v(e, r) {
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

        function c(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }

        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var o = "https://fastlane.rubiconproject.com/a/api/fastlane.json",
            s = "https://prebid-server.rubiconproject.com/openrtb2/auction",
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
            g = {
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
                94: "970x310",
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
                232: "580x400",
                234: "6x6",
                251: "2x2",
                257: "400x600",
                264: "970x1000",
                265: "1920x1080",
                278: "320x500",
                288: "640x380"
            };
        p._each(g, function (e, r) {
            return g[e] = r
        });
        var b = {
            code: "rubicon",
            supportedMediaTypes: [u.b, u.d],
            isBidRequestValid: function (e) {
                if ("object" !== f(e.params)) return !1;
                for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                    if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return p.logError("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                var i = I(e, !0);
                return !!i && ("video" !== i || C(e))
            },
            buildRequests: function (e, a) {
                var r = [],
                    t = e.filter(function (e) {
                        return "video" === I(e)
                    }).map(function (e) {
                        e.startTime = (new Date).getTime();
                        var r = {
                            id: e.transactionId,
                            test: l.b.getConfig("debug") ? 1 : 0,
                            cur: ["USD"],
                            source: {
                                tid: e.transactionId
                            },
                            tmax: l.b.getConfig("TTL") || 1e3,
                            imp: [{
                                exp: 300,
                                id: e.adUnitCode,
                                secure: 1,
                                ext: c({}, e.bidder, e.params),
                                video: p.deepAccess(e, "mediaTypes.video") || {}
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
                                        pricegranularity: j(l.b)
                                    }
                                }
                            }
                        };
                        "rubicon" !== e.bidder && (r.ext.prebid.aliases = c({}, e.bidder, "rubicon"));
                        var t = parseFloat(p.deepAccess(e, "params.floor"));
                        isNaN(t) || (r.imp[0].bidfloor = t), r.imp[0].ext[e.bidder].video.size_id = S(e),
                            function (r, t, e) {
                                if (!r) return;
                                "object" === f(l.b.getConfig("app")) ? r.app = l.b.getConfig("app") : r.site = {
                                    page: h(t, e)
                                };
                                "object" === f(l.b.getConfig("device")) && (r.device = l.b.getConfig("device"));
                                t.params.video.language && ["site", "device"].forEach(function (e) {
                                    r[e] && (r[e].content = m({
                                        language: t.params.video.language
                                    }, r[e].content))
                                })
                            }(r, e, a),
                            function (e, r) {
                                "object" === f(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                "object" === f(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                "object" === f(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                                var t = x(r, "video");
                                e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                            }(r, e);
                        var i, n = y(e, "PREBID_SERVER");
                        n && p.deepSetValue(r, "user.ext.digitrust", n), a.gdprConsent && ("boolean" == typeof a.gdprConsent.gdprApplies && (i = a.gdprConsent.gdprApplies ? 1 : 0), p.deepSetValue(r, "regs.ext.gdpr", i), p.deepSetValue(r, "user.ext.consent", a.gdprConsent.consentString));
                        a.uspConsent && p.deepSetValue(r, "regs.ext.us_privacy", a.uspConsent), e.userId && "object" === f(e.userId) && (e.userId.tdid || e.userId.pubcid || e.userId.lipb) && (p.deepSetValue(r, "user.ext.eids", []), e.userId.tdid && r.user.ext.eids.push({
                            source: "adserver.org",
                            uids: [{
                                id: e.userId.tdid,
                                ext: {
                                    rtiPartner: "TDID"
                                }
                            }]
                        }), e.userId.pubcid && r.user.ext.eids.push({
                            source: "pubcommon",
                            uids: [{
                                id: e.userId.pubcid
                            }]
                        }), e.userId.lipb && e.userId.lipb.lipbid && (r.user.ext.eids.push({
                            source: "liveintent.com",
                            uids: [{
                                id: e.userId.lipb.lipbid
                            }]
                        }), r.user.ext.tpid = {
                            source: "liveintent.com",
                            uid: e.userId.lipb.lipbid
                        }, Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && p.deepSetValue(r, "rp.target.LIseg", e.userId.lipb.segments))), !0 === l.b.getConfig("coppa") && p.deepSetValue(r, "regs.coppa", 1), e.schain && k(e.schain) && p.deepSetValue(r, "source.ext.schain", e.schain);
                        var o = p.deepAccess(e, "fpd.context.pbAdSlot");
                        return "string" == typeof o && o && p.deepSetValue(r.imp[0].ext, "context.data.adslot", o), {
                            method: "POST",
                            url: s,
                            data: r,
                            bidRequest: e
                        }
                    });
                if (!0 !== l.b.getConfig("rubicon.singleRequest")) r = t.concat(e.filter(function (e) {
                    return "banner" === I(e)
                }).map(function (e) {
                    var i = b.createSlotParams(e, a);
                    return {
                        method: "GET",
                        url: o,
                        data: b.getOrderedParams(i).reduce(function (e, r) {
                            var t = i[r];
                            return p.isStr(t) && "" !== t || p.isNumber(t) ? "".concat(e).concat(T(r, t), "&") : e
                        }, "") + "slots=1&rand=".concat(Math.random()),
                        bidRequest: e
                    }
                }));
                else {
                    var n = e.filter(function (e) {
                        return "banner" === I(e)
                    }).reduce(function (e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }, {});
                    r = t.concat(Object.keys(n).reduce(function (r, e) {
                        var t, i;
                        return (t = n[e], i = 10, t.map(function (e, r) {
                            return r % i == 0 ? t.slice(r, r + i) : null
                        }).filter(function (e) {
                            return e
                        })).forEach(function (e) {
                            var i = b.combineSlotUrlParams(e.map(function (e) {
                                return b.createSlotParams(e, a)
                            }));
                            r.push({
                                method: "GET",
                                url: o,
                                data: b.getOrderedParams(i).reduce(function (e, r) {
                                    var t = i[r];
                                    return p.isStr(t) && "" !== t || p.isNumber(t) ? "".concat(e).concat(T(r, t), "&") : e
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
                    i = x(e, "banner"),
                    n = v(t.latLong || [], 2),
                    o = n[0],
                    a = n[1],
                    s = l.b.getConfig("rubicon.int_type"),
                    c = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: "1",
                        tk_flint: "".concat(s || "pbjs_lite", "_v2.44.7"),
                        "x_source.tid": e.transactionId,
                        "x_source.pchain": t.pchain,
                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(o)) ? void 0 : parseFloat(o).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: h(e, r)
                    };
                c.p_pos = "atf" === t.position || "btf" === t.position ? t.position : "", e.userId && (e.userId.tdid && (c.tpid_tdid = e.userId.tdid), e.userId.lipb && e.userId.lipb.lipbid && (c["tpid_liveintent.com"] = e.userId.lipb.lipbid, Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && (c["tg_v.LIseg"] = e.userId.lipb.segments.join(",")))), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), c.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent)), null !== t.visitor && "object" === f(t.visitor) && Object.keys(t.visitor).forEach(function (e) {
                    null != t.visitor[e] && (c["tg_v.".concat(e)] = t.visitor[e].toString())
                }), null !== t.inventory && "object" === f(t.inventory) && Object.keys(t.inventory).forEach(function (e) {
                    null != t.inventory[e] && (c["tg_i.".concat(e)] = t.inventory[e].toString())
                });
                var d = p.deepAccess(e, "fpd.context.pbAdSlot");
                "string" == typeof d && d && (c["tg_i.dfp_ad_unit_code"] = d.replace(/^\/+/, ""));
                var u = y(e, "FASTLANE");
                return m(c, u), !0 === l.b.getConfig("coppa") && (c.coppa = 1), e.schain && k(e.schain) && (c.rp_schain = b.serializeSupplyChain(e.schain)), c
            },
            serializeSupplyChain: function (e) {
                if (!k(e)) return "";
                var r = e.ver,
                    t = e.complete,
                    i = e.nodes;
                return "".concat(r, ",").concat(t, "!").concat(b.serializeSupplyChainNodes(i))
            },
            serializeSupplyChainNodes: function (e) {
                var t = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e.map(function (r) {
                    return t.map(function (e) {
                        return encodeURIComponent(r[e] || "")
                    }).join(",")
                }).join("!")
            },
            interpretResponse: function (c, e) {
                var d = e.bidRequest;
                if (!(c = c.body) || "object" !== f(c)) return [];
                if (c.seatbid) {
                    var r = p.deepAccess(c, "ext.errors.rubicon");
                    Array.isArray(r) && 0 < r.length && p.logWarn("Rubicon: Error in video response");
                    var o = [];
                    return c.seatbid.forEach(function (n) {
                        (n.bid || []).forEach(function (e) {
                            var r = {
                                requestId: d.bidId,
                                currency: c.cur || "USD",
                                creativeId: e.crid,
                                cpm: e.price || 0,
                                bidderCode: n.seat,
                                ttl: 300,
                                netRevenue: !1 !== l.b.getConfig("rubicon.netRevenue"),
                                width: e.w || p.deepAccess(d, "mediaTypes.video.w") || p.deepAccess(d, "params.video.playerWidth"),
                                height: e.h || p.deepAccess(d, "mediaTypes.video.h") || p.deepAccess(d, "params.video.playerHeight")
                            };
                            e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid);
                            var t = p.deepAccess(c, "ext.responsetimemillis.rubicon");
                            if (d && t && (d.serverResponseTimeMs = t), p.deepAccess(e, "ext.prebid.type") === u.d) {
                                r.mediaType = u.d;
                                var i = p.deepAccess(e, "ext.prebid.targeting");
                                i && "object" === f(i) && (r.adserverTargeting = i), e.ext.prebid.cache && "object" === f(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : i && i.hb_uuid && i.hb_cache_host && i.hb_cache_path && (r.videoCacheKey = i.hb_uuid, r.vastUrl = "https://".concat(i.hb_cache_host).concat(i.hb_cache_path, "?uuid=").concat(i.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)
                            } else p.logWarn("Rubicon: video response received non-video media type");
                            o.push(r)
                        })
                    }), o
                }
                var t = c.ads;
                return "object" !== f(d) || Array.isArray(d) || "video" !== I(d) || "object" !== f(t) || (t = t[d.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function (e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n, o = Array.isArray(d) ? d[t] : d;
                    if (o && "object" === f(o)) {
                        var a = {
                            requestId: o.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: !1 !== l.b.getConfig("rubicon.netRevenue"),
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
                            var s = v(g[r.size_id].split("x").map(function (e) {
                                return Number(e)
                            }), 2);
                            a.width = s[0], a.height = s[1]
                        }
                        a.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function (e, r) {
                            return e[r.key] = r.values[0], e
                        }, {
                            rpfl_elemid: o.adUnitCode
                        }), e.push(a)
                    } else p.logError("Rubicon: bidRequest undefined at index position:".concat(t), d, c);
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
                return p.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function y(e, r) {
            var t, i = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? r : void 0;
            if (!n || !d[n]) return null;
            var o = d[n];
            var a = function () {
                var e = p.deepAccess(i, "userId.digitrustid.data");
                if (e) return e;
                var r = window.DigiTrust && (l.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: "T9QSFKPDN9"
                }));
                return r && r.success && r.identity || null
            }();
            if (!a || a.privacy && a.privacy.optout) return null;
            var s = (c(t = {}, o.id, a.id), c(t, o.keyv, a.keyv), t);
            return o.pref && (s[o.pref] = 0), s
        }

        function h(e, r) {
            var t = l.b.getConfig("pageUrl");
            return t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer, e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function x(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(p.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== p.deepAccess(e, "mediaTypes.banner.sizes") ? n = _(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = _(e.sizes) : p.logWarn("Rubicon: no sizes are setup or found"), A(n)
        }

        function _(e) {
            return p.parseSizesInput(e).reduce(function (e, r) {
                var t = parseInt(g[r], 10);
                return t && e.push(t), e
            }, [])
        }

        function n(e) {
            return "object" === f(p.deepAccess(e, "params.video")) && void 0 !== p.deepAccess(e, "mediaTypes.".concat(u.d))
        }

        function I(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            return n(e) ? -1 === ["outstream", "instream"].indexOf(p.deepAccess(e, "mediaTypes.".concat(u.d, ".context"))) ? void(t && p.logError("Rubicon: mediaTypes.video.context must be outstream or instream")) : x(e, "video").length < 2 ? void(t && p.logError("Rubicon: could not determine the playerSize of the video")) : (t && p.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === x(e, "banner").length ? void(t && p.logError("Rubicon: could not determine the sizes for banner request")) : (t && p.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), "banner")
        }

        function A(e) {
            var n = [15, 2, 9];
            return e.sort(function (e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            })
        }

        function S(e) {
            var r = parseInt(p.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === p.deepAccess(e, "mediaTypes.".concat(u.d, ".context")) ? 203 : 201 : r
        }

        function j(e) {
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

        function C(r) {
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
                Object.prototype.toString.call(p.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, p.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]))
            }), t
        }

        function k(e) {
            var r = !1,
                t = ["asi", "sid", "hp"];
            return e.nodes && ((r = e.nodes.reduce(function (e, r) {
                return e ? t.every(function (e) {
                    return r[e]
                }) : e
            }, !0)) || p.logError("Rubicon: required schain params missing")), r
        }

        function T(e, r) {
            return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r))
        }
        var R = !1;
        Object(i.registerBidder)(b)
    }
}, [568]);
pbjsChunk([98], {
    582: function (e, r, t) {
        e.exports = t(583)
    },
    583: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "spec", function () {
            return a
        });
        var p = t(0),
            i = t(1);

        function d() {
            return (d = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            }).apply(this, arguments)
        }
        var c = {
                serverbid: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                connectad: {
                    BASE_URI: "https://i.connectad.io/api/v2"
                },
                onefiftytwo: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                insticator: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                automatad: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                archon: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                buysellads: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                },
                answermedia: {
                    BASE_URI: "https://e.serverbid.com/api/v2"
                }
            },
            n = 0,
            o = "serverbid",
            a = {
                code: "serverbid",
                aliases: ["connectad", "onefiftytwo", "insticator", "automatad", "archon", "buysellads", "answermedia"],
                isBidRequestValid: function (e) {
                    return !(!e.params.networkId || !e.params.siteId)
                },
                buildRequests: function (e) {
                    var a, r = {
                        method: "POST",
                        url: "",
                        data: "",
                        bidRequest: []
                    };
                    if (e.length < 1) return r;
                    n = e[0].params.siteId, o = e[0].bidder;
                    var s = d({
                        placements: [],
                        time: Date.now(),
                        user: {},
                        url: p.getTopWindowUrl(),
                        referrer: document.referrer,
                        enableBotFiltering: !0,
                        includePricingData: !0,
                        parallel: !0
                    }, e[0].params);
                    return e.map(function (e) {
                        var r = c[e.bidder];
                        a = r.BASE_URI;
                        var t, i, n = d({
                            divName: e.bidId,
                            adTypes: e.adTypes || (t = e.sizes, i = [], t.forEach(function (e) {
                                var r = u.indexOf(e[0] + "x" + e[1]);
                                0 <= r && i.push(r)
                            }), i)
                        }, e.params);
                        n.networkId && n.siteId && s.placements.push(n)
                    }), r.data = JSON.stringify(s), r.bidRequest = e, r.url = a, r
                },
                interpretResponse: function (e, r) {
                    var t, i, n, a, s = [];
                    i = r.bidRequest, e = (e || {}).body;
                    for (var d = 0; d < i.length; d++)
                        if (t = {}, n = i[d].bidId, e) {
                            var c = e.decisions && e.decisions[n],
                                o = c && c.pricing && c.pricing.clearPrice;
                            c && o && (t.requestId = n, t.cpm = o, t.width = c.width, t.height = c.height, t.ad = (a = c).contents && a.contents[0] && a.contents[0].body + p.createTrackPixelHtml(a.impressionUrl), t.currency = "USD", t.creativeId = c.adId, t.ttl = 360, t.netRevenue = !0, t.referrer = p.getTopWindowUrl(), s.push(t))
                        } return s
                },
                getUserSyncs: function (e) {
                    if (e.iframeEnabled) return "connectad" === o ? [{
                        type: "iframe",
                        url: "//cdn.connectad.io/connectmyusers.php"
                    }] : [{
                        type: "iframe",
                        url: "//s.zkcdn.net/ss/" + n + ".html"
                    }];
                    p.logWarn(o + ": Please enable iframe based user syncing.")
                }
            },
            u = [null, "120x90", "120x90", "468x60", "728x90", "300x250", "160x600", "120x600", "300x100", "180x150", "336x280", "240x400", "234x60", "88x31", "120x60", "120x240", "125x125", "220x250", "250x250", "250x90", "0x0", "200x90", "300x50", "320x50", "320x480", "185x185", "620x45", "300x125", "800x250"];
        u[77] = "970x90", u[123] = "970x250", u[43] = "300x600", u[286] = "970x66", u[3230] = "970x280", u[429] = "486x60", u[374] = "700x500", u[934] = "300x1050", u[1578] = "320x100", u[331] = "320x250", u[3301] = "320x267", u[2730] = "728x250", Object(i.registerBidder)(a)
    }
}, [582]);
pbjs.processQueue();

//load the apstag.js library
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

//initialize the apstag.js library on the page to allow bidding
apstag.init({
     pubID: '0d79d97f-1108-428c-8926-8b56782eacb6', 
     adServer: 'googletag'
});

apstag.fetchBids({
    slots: [{
        slotID: 'InText_1', 
        slotName: '/161634325/Blic_Desktop/Blic_Desktop_IT/InText_1', 
        sizes: [[300,250]]
    },
    {
        slotID: '300x250_P1', 
        slotName: '/161634325/Blic_Desktop/Blic_Desktop_IT/300x250_P1', 
        sizes: [[300,250], [300, 600]]
    }],
    timeout: 2e3
}, function(bids) {
    // set apstag targeting on googletag, then trigger the first DFP request in googletag's disableInitialLoad integration
    googletag.cmd.push(function(){
        apstag.setDisplayBids();
       //googletag.pubads().refresh();
    });
}); 





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
                [970, 250]
            ],
            siteId: "336021"
        }
    }, {
        bidder: 'ix',
        params: {
            size: [
                [970, 90]
            ],
            siteId: "336021"
        }
    }, {
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
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548475'
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
            zoneId: '1437229'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437228'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437224'
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
        bidder: 'ix',
        params: {
            size: [300, 250],
            siteId: "336017"
        }
    }, {
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548466'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437227'
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
        bidder: 'ix',
        params: {
            size: [300, 600],
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
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548467'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
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
        bidder: 'ix',
        params: {
            size: [300, 600],
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
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548468'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
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
        bidder: 'ix',
        params: {
            size: [300, 600],
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
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548469'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
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
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548473'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437224'
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
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548474'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437224'
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
        bidder: 'ix',
        params: {
            size: [300, 6000],
            siteId: "430180"
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
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548470'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
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
        bidder: 'ix',
        params: {
            size: [300, 600],
            siteId: "449527"
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
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548471'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
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
            size: [300, 250],
            siteId: "449537"
        }
    }, {
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
        bidder: 'pubmatic',
        params: {
            publisherId: "158892",
            adSlot: '2548472'
        }
    }, {
        bidder: 'criteo',
        params: {
            zoneId: '1437223'
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
            googletag.pubads().refresh();
        });
    });
}
setTimeout(function () {
    initAdserver();
}, FAILSAFE_TIMEOUT);
