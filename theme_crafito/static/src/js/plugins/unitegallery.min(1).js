// Unite Gallery, Version: 1.7.8, released 13 Jan 2016 
function debugLine(e, t, i) {
    e === !0 && (e = "true"), e === !1 && (e = "false");
    var n = e;
    if ("object" == typeof e) {
        n = "";
        for (name in e) {
            var r = e[name];
            n += " " + name + ": " + r
        }
    }
    if (1 != t || i || (n += " " + Math.random()), 1 == i) {
        var o = jQuery("#debug_line");
        o.width(200), o.height() >= 500 && o.html("");
        var a = o.html();
        n = a + "<br> -------------- <br>" + n
    }
    jQuery("#debug_line").show().html(n)
}

function debugSide(e) {
    var t = "";
    for (name in e) {
        var i = e[name];
        t += name + " : " + i + "<br>"
    }
    jQuery("#debug_side").show().html(t)
}

function trace(e) {
    "undefined" != typeof console && console.log(e)
}

function UGFunctions() {
    function e(e, t, i) {
        t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
    }
    var t = null,
        i = this,
        n = {
            starTime: 0,
            arrThemes: [],
            isTouchDevice: -1,
            isRgbaSupported: -1,
            timeCache: {},
            dataCache: {},
            lastEventType: "",
            lastEventTime: 0,
            handle: null
        };
    this.debugVar = "", this.z__________FULL_SCREEN___________ = function() {}, this.toFullscreen = function(e, t) {
        if (e.requestFullscreen) e.requestFullscreen();
        else if (e.mozRequestFullScreen) e.mozRequestFullScreen();
        else if (e.webkitRequestFullscreen) e.webkitRequestFullscreen();
        else {
            if (!e.msRequestFullscreen) return !1;
            e.msRequestFullscreen()
        }
        return !0
    }, this.exitFullscreen = function() {
        if (0 == i.isFullScreen()) return !1;
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.cancelFullScreen) document.cancelFullScreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else {
            if (!document.msExitFullscreen) return !1;
            document.msExitFullscreen()
        }
        return !0
    }, this.addFullScreenChangeEvent = function(t) {
        document.webkitCancelFullScreen ? e("webkitfullscreenchange", document, t) : document.msExitFullscreen ? e("MSFullscreenChange", document, t) : document.mozCancelFullScreen ? e("mozfullscreenchange", document, t) : e("fullscreenchange", document, t)
    }, this.destroyFullScreenChangeEvent = function() {
        jQuery(document).unbind("fullscreenChange"), jQuery(document).unbind("mozfullscreenchange"), jQuery(document).unbind("webkitfullscreenchange"), jQuery(document).unbind("MSFullscreenChange")
    }, this.getFullScreenElement = function() {
        var e = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        return e
    }, this.isFullScreen = function() {
        var e = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
        return e = e ? !0 : !1
    }, this.z__________END_FULL_SCREEN___________ = function() {}, this.z__________GET_PROPS___________ = function() {}, this.getBrowserPrefix = function() {
        if (null !== t) return t;
        var e = ["webkit", "Moz", "ms", "O"],
            i = document.createElement("div");
        for (var n in e) {
            var r = e[n];
            if (r + "Transform" in i.style) return r = r.toLowerCase(), t = r, r
        }
        return t = "", ""
    }, this.getImageInsideParentDataByImage = function(e, t, n) {
        var r = e.parent(),
            o = i.getImageOriginalSize(e),
            a = i.getImageInsideParentData(r, o.width, o.height, t, n);
        return a
    }, this.getImageInsideParentData = function(e, t, i, n, r, o, a) {
        if (!r) var r = {};
        var s = {};
        if ("undefined" == typeof o) var o = e.width();
        if ("undefined" == typeof a) var a = e.height();
        r.padding_left && (o -= r.padding_left), r.padding_right && (o -= r.padding_right), r.padding_top && (a -= r.padding_top), r.padding_bottom && (a -= r.padding_bottom);
        var l = null,
            u = "100%",
            d = null,
            _ = null,
            g = "display:block;margin:0px auto;";
        if (t > 0 && i > 0) {
            if ("down" == n && o > t && a > i) u = i, l = t, _ = (o - l) / 2, d = (a - u) / 2;
            else if ("fill" == n) {
                var c = t / i;
                u = a, l = u * c, o > l ? (l = o, u = l / c, _ = 0, d = Math.round((u - a) / 2 * -1)) : (d = 0, _ = Math.round((l - o) / 2 * -1))
            } else {
                var c = t / i;
                u = a, l = u * c, d = 0, _ = (o - l) / 2, "fitvert" != n && l > o && (l = o, u = l / c, _ = 0, d = (a - u) / 2)
            }
            l = Math.floor(l), u = Math.floor(u), d = Math.floor(d), _ = Math.floor(_), g = "position:absolute;"
        }
        return r.padding_top && (d += r.padding_top), r.padding_left && (_ += r.padding_left), s.imageWidth = l, s.imageHeight = u, s.imageTop = d, s.imageLeft = _, s.imageRight = _ + l, 0 == d || "100%" == u ? s.imageBottom = null : s.imageBottom = d + u, s.style = g, s
    }, this.getElementCenterPosition = function(e, t) {
        var n = e.parent(),
            r = i.getElementSize(e),
            o = i.getElementSize(n),
            a = o.width,
            s = o.height;
        t && void 0 !== t.padding_top && (s -= t.padding_top), t && void 0 !== t.padding_bottom && (s -= t.padding_bottom), t && void 0 !== t.padding_left && (a -= t.padding_left), t && void 0 !== t.padding_right && (a -= t.padding_right);
        var l = {};
        return l.left = Math.round((a - r.width) / 2), l.top = Math.round((s - r.height) / 2), t && void 0 !== t.padding_top && (l.top += t.padding_top), t && void 0 !== t.padding_left && (l.left += t.padding_left), l
    }, this.getElementCenterPoint = function(e, t) {
        if (!t) var t = !1;
        var n = i.getElementSize(e),
            r = {};
        return r.x = n.width / 2, r.y = n.height / 2, 1 == t && (r.x += n.left, r.y += n.top), r.x = Math.round(r.x), r.y = Math.round(r.y), r
    }, this.getMousePosition = function(e, t) {
        var i = {
            pageX: e.pageX,
            pageY: e.pageY,
            clientX: e.clientX,
            clientY: e.clientY
        };
        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length > 0 && (i.pageX = e.originalEvent.touches[0].pageX, i.pageY = e.originalEvent.touches[0].pageY, i.clientX = e.originalEvent.touches[0].clientX, i.clientY = e.originalEvent.touches[0].clientY), t) {
            var n = t.offset();
            i.mouseX = i.pageX - n.left, i.mouseY = i.pageY - n.top
        }
        return i
    }, this.getMouseElementPoint = function(e, t) {
        var n = {
                x: e.pageX,
                y: e.pageY
            },
            r = i.getElementLocalPoint(n, t);
        return r
    }, this.getElementLocalPoint = function(e, t) {
        var i = {},
            n = t.offset();
        return i.x = Math.round(e.x - n.left), i.y = Math.round(e.y - n.top), i
    }, this.getImageOriginalSize = function(e, t, i) {
        if ("undefined" != typeof t && "undefined" != typeof i) return {
            width: t,
            height: i
        };
        var n = e[0];
        if ("undefined" == typeof n) throw new Error("getImageOriginalSize error - Image not found");
        var r = {};
        if ("undefined" == typeof n.naturalWidth) {
            if ("number" == typeof e.data("naturalWidth")) {
                var r = {};
                return r.width = e.data("naturalWidth"), r.height = e.data("naturalHeight"), r
            }
            var o = new Image;
            return o.src = n.src, o.complete ? (r.width = o.width, r.height = o.height, e.data("naturalWidth", r.width), e.data("naturalHeight", r.height), r) : {
                width: 0,
                height: 0
            }
        }
        return r.width = n.naturalWidth, r.height = n.naturalHeight, r
    }, this.getimageRatio = function(e) {
        var t = i.getImageOriginalSize(e),
            n = i.getElementSize(e),
            r = n.width / t.width;
        return r
    }, this.isImageFitParent = function(e) {
        var t = e.parent(),
            n = i.getElementSize(e),
            r = i.getElementSize(t);
        return n.width <= r.width && n.height <= r.height ? !0 : !1
    }, this.getElementSize = function(e) {
        if (void 0 === e) throw new Error("Can't get size, empty element");
        var t = e.position();
        return t.height = e.outerHeight(), t.width = e.outerWidth(), t.left = Math.round(t.left), t.top = Math.round(t.top), t.right = t.left + t.width, t.bottom = t.top + t.height, t
    }, this.isElementBiggerThenParent = function(e) {
        var t = e.parent(),
            n = i.getElementSize(e),
            r = i.getElementSize(t);
        return n.width > r.width || n.height > r.height ? !0 : !1
    }, this.isPointInsideElement = function(e, t) {
        var i = e.x >= 0 && e.x < t.width;
        if (0 == i) return !1;
        var n = e.y >= 0 && e.y < t.height;
        return 0 == n ? !1 : !0
    }, this.getElementRelativePos = function(e, t, n, r) {
        if (!r) var r = e.parent();
        var o = i.getElementSize(e),
            a = i.getElementSize(r);
        switch (t) {
            case "top":
            case "left":
                t = 0, n && (t += n);
                break;
            case "center":
                t = Math.round((a.width - o.width) / 2), n && (t += n);
                break;
            case "right":
                t = a.width - o.width, n && (t -= n);
                break;
            case "middle":
                t = Math.round((a.height - o.height) / 2), n && (t += n);
                break;
            case "bottom":
                t = a.height - o.height, n && (t -= n)
        }
        return t
    }, this.z__________END_GET_PROPS___________ = function() {}, this.z_________SET_ELEMENT_PROPS_______ = function() {}, this.zoomImageInsideParent = function(e, t, n, r, o, a, s) {
        if (!n) var n = 1.2;
        if (!o) var o = "fit";
        var l, u, d, _, g = n,
            c = e.parent(),
            h = i.getElementSize(e),
            p = i.getImageOriginalSize(e),
            f = !1,
            m = 0,
            v = 0,
            b = 0,
            y = 0;
        if (r) {
            var I = i.getMouseElementPoint(r, e);
            f = i.isPointInsideElement(I, h), b = I.x, y = I.y
        } else f = !1;
        if (0 == f) {
            var w = i.getElementCenterPoint(e);
            b = w.x, y = w.y
        }
        if (1 == t) l = h.height * g, u = h.width * g, 0 != b && (m = -(b * g - b)), 0 != y && (v = -(y * g - y));
        else {
            l = h.height / g, u = h.width / g;
            var T = i.getImageInsideParentData(c, p.width, p.height, o, s);
            if (u < T.imageWidth) return i.scaleImageFitParent(e, p.width, p.height, o, s), !0;
            1 == f && (0 != b && (m = -(b / g - b)), 0 != y && (v = -(y / g - y)))
        }
        if (a) {
            var E = 1;
            if (0 != p.width && (E = u / p.width), E > a) return !1
        }
        if (i.setElementSize(e, u, l), 0 == t && 0 == f) {
            var S = i.getElementCenterPosition(e);
            d = S.left, _ = S.top
        } else d = h.left + m, _ = h.top + v;
        return i.placeElement(e, d, _), !0
    }, this.placeElement = function(e, t, n, r, o, a) {
        if (0 == jQuery.isNumeric(t) || 0 == jQuery.isNumeric(n)) {
            if (!a) var a = e.parent();
            var s = i.getElementSize(e),
                l = i.getElementSize(a)
        }
        if (0 == jQuery.isNumeric(t)) switch (t) {
            case "left":
                t = 0, r && (t += r);
                break;
            case "center":
                t = Math.round((l.width - s.width) / 2), r && (t += r);
                break;
            case "right":
                t = l.width - s.width, r && (t -= r)
        }
        if (0 == jQuery.isNumeric(n)) switch (n) {
            case "top":
                n = 0, o && (n += o);
                break;
            case "middle":
            case "center":
                n = Math.round((l.height - s.height) / 2), o && (n += o);
                break;
            case "bottom":
                n = l.height - s.height, o && (n -= o)
        }
        var u = {
            position: "absolute",
            margin: "0px"
        };
        null !== t && (u.left = t), null !== n && (u.top = n), e.css(u)
    }, this.placeElementInParentCenter = function(e) {
        i.placeElement(e, "center", "middle")
    }, this.setElementSizeAndPosition = function(e, t, i, n, r) {
        var o = {
            width: n + "px",
            height: r + "px",
            left: t + "px",
            top: i + "px",
            position: "absolute",
            margin: "0px"
        };
        e.css(o)
    }, this.setElementSize = function(e, t, i) {
        var n = {
            width: t + "px"
        };
        null !== i && "undefined" != typeof i && (n.height = i + "px"), e.css(n)
    }, this.cloneElementSizeAndPos = function(e, t, n, r, o) {
        var a = e.position();
        if (void 0 == a) throw new Error("Can't get size, empty element");
        n === !0 ? (a.height = e.outerHeight(), a.width = e.outerWidth()) : (a.height = e.height(), a.width = e.width()), a.left = Math.round(a.left), a.top = Math.round(a.top), r && (a.left += r), o && (a.top += o), i.setElementSizeAndPosition(t, a.left, a.top, a.width, a.height)
    }, this.placeImageInsideParent = function(e, t, n, r, o, a) {
        var s = i.getImageInsideParentData(t, n, r, o, a),
            l = "<img";
        null !== s.imageWidth && (l += " width = '" + s.imageWidth + "'", s.style += "width:" + s.imageWidth + ";"), null != s.imageHeight && ("100%" == s.imageHeight ? (l += " height = '" + s.imageHeight + "'", s.style += "height:" + s.imageHeight + ";") : (l += " height = '" + s.imageHeight + "'", s.style += "height:" + s.imageHeight + "px;")), null !== s.imageTop && (s.style += "top:" + s.imageTop + "px;"), null !== s.imageLeft && (s.style += "left:" + s.imageLeft + "px;"), l += " style='" + s.style + "'", l += " src='" + e + "'", l += ">", t.html(l);
        var u = t.children("img");
        return u
    }, this.scaleImageCoverParent = function(e, t, n) {
        if ("number" == typeof t) var r = t,
            o = n;
        else var r = t.outerWidth(),
            o = t.outerHeight();
        var a = i.getImageOriginalSize(e),
            s = a.width,
            l = a.height,
            u = s / l,
            d = o,
            _ = d * u,
            g = 0,
            c = 0;
        r > _ ? (_ = r, d = _ / u, c = 0, g = Math.round((d - o) / 2 * -1)) : (g = 0, c = Math.round((_ - r) / 2 * -1)), _ = Math.round(_), d = Math.round(d), e.css({
            width: _ + "px",
            height: d + "px",
            left: c + "px",
            top: g + "px"
        })
    }, this.scaleImageFitParent = function(e, t, n, r, o) {
        var a = e.parent(),
            s = i.getImageInsideParentData(a, t, n, r, o),
            l = !1,
            u = {};
        null !== s.imageWidth && (l = !0, e.removeAttr("width"), u.width = s.imageWidth + "px"), null != s.imageHeight && (l = !0, e.removeAttr("height"), u.height = s.imageHeight + "px"), null !== s.imageTop && (l = !0, u.top = s.imageTop + "px"), null !== s.imageLeft && (l = !0, u.left = s.imageLeft + "px"), 1 == l && (u.position = "absolute", u.margin = "0px 0px", e.css(u))
    }, this.scaleImageByHeight = function(e, t, n, r) {
        var o = i.getImageOriginalSize(e, n, r),
            a = o.width / o.height,
            s = Math.round(t * a);
        t = Math.round(t), i.setElementSize(e, s, t)
    }, this.scaleImageByWidth = function(e, t, n, r) {
        var o = i.getImageOriginalSize(e, n, r),
            a = o.width / o.height,
            s = Math.round(t / a);
        t = Math.round(t), i.setElementSize(e, t, s)
    }, this.scaleImageExactSizeInParent = function(e, t, n, r, o, a) {
        var s = e.parent(),
            l = i.getElementSize(s);
        l.width < r && (r = l.width), l.height < o && (o = l.height);
        var u = i.getImageInsideParentData(null, t, n, a, null, r, o),
            d = r,
            _ = o,
            g = u.imageLeft,
            c = u.imageLeft,
            h = u.imageTop,
            p = u.imageTop,
            f = Math.round((l.width - r) / 2),
            m = Math.round((l.height - o) / 2),
            v = u.imageWidth + g + c,
            b = r - v;
        0 != b && (c += b);
        var y = u.imageHeight + h + p,
            b = o - y;
        0 != b && (p += b), e.removeAttr("width"), e.removeAttr("height");
        var I = {
            position: "absolute",
            margin: "0px 0px"
        };
        I.width = d + "px", I.height = _ + "px", I.left = f + "px", I.top = m + "px", I["padding-left"] = g + "px", I["padding-top"] = h + "px", I["padding-right"] = c + "px", I["padding-bottom"] = p + "px", e.css(I)
    }, this.showElement = function(e, t, i) {
        e.show().fadeTo(0, 1), t && t.show().fadeTo(0, 1), i && i.show().fadeTo(0, 1)
    }, this.z_________END_SET_ELEMENT_PROPS_______ = function() {}, this.z_________GALLERY_RELATED_FUNCTIONS_______ = function() {}, this.disableButton = function(e, t) {
        if (!t) var t = "ug-button-disabled";
        0 == i.isButtonDisabled(e, t) && e.addClass(t)
    }, this.convertCustomPrefixOptions = function(e, t, i) {
        if (!t) return e;
        var n = {};
        return jQuery.each(e, function(e, r) {
            if (0 === e.indexOf(t + "_" + i + "_")) {
                var o = e.replace(t + "_" + i + "_", i + "_");
                n[o] = r
            } else n[e] = r
        }), n
    }, this.enableButton = function(e, t) {
        if (!t) var t = "ug-button-disabled";
        1 == i.isButtonDisabled(e, t) && e.removeClass(t)
    }, this.isButtonDisabled = function(e, t) {
        if (!t) var t = "ug-button-disabled";
        return e.hasClass(t) ? !0 : !1
    }, this.z_________END_GALLERY_RELATED_FUNCTIONS_______ = function() {}, this.z_________MATH_FUNCTIONS_______ = function() {}, this.normalizeSetting = function(e, t, i, n, r, o) {
        if (!o) var o = !1;
        var a = (r - i) / (n - i);
        return r = e + (t - e) * a, 1 == o && (e > r && (r = e), r > t && (r = t)), r
    }, this.getNormalizedValue = function(e, t, i, n, r) {
        var o = (r - e) / (t - e);
        return r = e + (n - i) * o
    }, this.getDistance = function(e, t, i, n) {
        var r = Math.round(Math.sqrt(Math.abs((i - e) * (i - e) + (n - t) * (n - t))));
        return r
    }, this.getMiddlePoint = function(e, t, i, n) {
        var r = {};
        return r.x = e + Math.round((i - e) / 2), r.y = t + Math.round((n - t) / 2), r
    }, this.getNumItemsInSpace = function(e, t, i) {
        var n = Math.floor((e + i) / (t + i));
        return n
    }, this.getNumItemsInSpaceRound = function(e, t, i) {
        var n = Math.round((e + i) / (t + i));
        return n
    }, this.getSpaceByNumItems = function(e, t, i) {
        var n = e * t + (e - 1) * i;
        return n
    }, this.getItemSizeInSpace = function(e, t, i) {
        var n = Math.floor((e - (t - 1) * i) / t);
        return n
    }, this.getColX = function(e, t, i) {
        var n = e * (t + i);
        return n
    }, this.getColByIndex = function(e, t) {
        var i = t % e;
        return i
    }, this.getColRowByIndex = function(e, t) {
        var i = Math.floor(e / t),
            n = Math.floor(e % t);
        return {
            col: n,
            row: i
        }
    }, this.getIndexByRowCol = function(e, t, i) {
        if (0 > e) return -1;
        if (0 > t) return -1;
        var n = e * i + t;
        return n
    }, this.getPrevRowSameColIndex = function(e, t) {
        var n = i.getColRowByIndex(e, t),
            r = i.getIndexByRowCol(n.row - 1, n.col, t);
        return r
    }, this.getNextRowSameColIndex = function(e, t) {
        var n = i.getColRowByIndex(e, t),
            r = i.getIndexByRowCol(n.row + 1, n.col, t);
        return r
    }, this.z_________DATA_FUNCTIONS_______ = function() {}, this.setGlobalData = function(e, t) {
        jQuery.data(document.body, e, t)
    }, this.getGlobalData = function(e) {
        var t = jQuery.data(document.body, e);
        return t
    }, this.z_________EVENT_DATA_FUNCTIONS_______ = function() {}, this.handleScrollTop = function(e) {
        if (0 == i.isTouchDevice()) return null;
        var t = i.getStoredEventData(e),
            r = 15,
            o = 15;
        if (null === t.scrollDir && (Math.abs(t.diffMouseX) > r ? t.scrollDir = "hor" : Math.abs(t.diffMouseY) > o && Math.abs(t.diffMouseY) > Math.abs(t.diffMouseX) && (t.scrollDir = "vert", t.scrollStartY = t.lastMouseClientY, t.scrollOrigin = jQuery(document).scrollTop(), n.dataCache[e].scrollStartY = t.lastMouseClientY, n.dataCache[e].scrollOrigin = t.scrollOrigin), n.dataCache[e].scrollDir = t.scrollDir), "vert" !== t.scrollDir) return t.scrollDir;
        var a = (jQuery(document).scrollTop(), t.scrollOrigin - (t.lastMouseClientY - t.scrollStartY));
        return a >= 0 && jQuery(document).scrollTop(a), t.scrollDir
    }, this.wasVerticalScroll = function(e) {
        var t = i.getStoredEventData(e);
        return "vert" === t.scrollDir ? !0 : !1
    }, this.storeEventData = function(e, t, r) {
        var o = i.getMousePosition(e),
            a = jQuery.now(),
            s = {
                startTime: a,
                lastTime: a,
                startMouseX: o.pageX,
                startMouseY: o.pageY,
                lastMouseX: o.pageX,
                lastMouseY: o.pageY,
                startMouseClientY: o.clientY,
                lastMouseClientY: o.clientY,
                scrollTop: jQuery(document).scrollTop(),
                scrollDir: null
            };
        r && (s = jQuery.extend(s, r)), n.dataCache[t] = s
    }, this.updateStoredEventData = function(e, t, r) {
        if (!n.dataCache[t]) throw new Error("updateEventData error: must have stored cache object");
        var o = n.dataCache[t],
            a = i.getMousePosition(e);
        o.lastTime = jQuery.now(), void 0 !== a.pageX && (o.lastMouseX = a.pageX, o.lastMouseY = a.pageY, o.lastMouseClientY = a.clientY), r && (o = jQuery.extend(o, r)), n.dataCache[t] = o
    }, this.getStoredEventData = function(e, t) {
        if (!n.dataCache[e]) throw new Error("updateEventData error: must have stored cache object");
        var i = n.dataCache[e];
        return i.diffMouseX = i.lastMouseX - i.startMouseX, i.diffMouseY = i.lastMouseY - i.startMouseY, i.diffMouseClientY = i.lastMouseClientY - i.startMouseClientY, i.diffTime = i.lastTime - i.startTime, t === !0 ? (i.startMousePos = i.lastMouseY, i.lastMousePos = i.lastMouseY, i.diffMousePos = i.diffMouseY) : (i.startMousePos = i.lastMouseX, i.lastMousePos = i.lastMouseX, i.diffMousePos = i.diffMouseX), i
    }, this.isApproveStoredEventClick = function(e, t) {
        if (!n.dataCache[e]) return !0;
        var r = i.getStoredEventData(e, t),
            o = Math.abs(r.diffMousePos);
        return r.diffTime > 400 ? !1 : o > 30 ? !1 : !0
    }, this.clearStoredEventData = function(e) {
        n.dataCache[e] = null
    }, this.z_________CHECK_SUPPORT_FUNCTIONS_______ = function() {}, this.isCanvasExists = function() {
        var e = jQuery('<canvas width="500" height="500" > </canvas>')[0];
        return "function" == typeof e.getContext ? !0 : !1
    }, this.isScrollbarExists = function() {
        var e = window.innerWidth > document.documentElement.clientWidth;
        return e
    }, this.isTouchDevice = function() {
        if (-1 !== n.isTouchDevice) return n.isTouchDevice;
        try {
            document.createEvent("TouchEvent"), n.isTouchDevice = !0
        } catch (e) {
            n.isTouchDevice = !1
        }
        return n.isTouchDevice
    }, this.isDesktopDevice = function() {
        var e = void 0 === typeof window.screenX || i.isTouchDevice() ? !1 : !0;
        return e
    }, this.isRgbaSupported = function() {
        if (-1 !== n.isRgbaSupported) return n.isRgbaSupported;
        var e = document.getElementsByTagName("script")[0],
            t = e.style.color;
        try {
            e.style.color = "rgba(1,5,13,0.44)"
        } catch (i) {}
        var r = e.style.color != t;
        return e.style.color = t, n.isRgbaSupported = r, r
    }, this.z_________GENERAL_FUNCTIONS_______ = function() {}, this.checkMinJqueryVersion = function(e) {
        for (var t = jQuery.fn.jquery.split("."), i = e.split("."), n = 0, r = t.length; r > n; n++) {
            var o = parseInt(t[n]),
                a = parseInt(i[n]);
            if ("undefined" == typeof i[n]) return !0;
            if (a > o) return !1;
            if (o > a) return !0
        }
        return !0
    }, this.getCssSizeParam = function(e) {
        return jQuery.isNumeric(e) ? e + "px" : e
    }, this.convertHexToRGB = function(e, t) {
        var i = e.replace("#", "");
        return i === e ? e : (r = parseInt(i.substring(0, 2), 16), g = parseInt(i.substring(2, 4), 16), b = parseInt(i.substring(4, 6), 16), result = "rgba(" + r + "," + g + "," + b + "," + t + ")", result)
    }, this.timestampToString = function(e) {
        var t = new Date(e),
            i = t.getDate() + "/" + t.getMonth();
        return i += " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds()
    }, this.getArrTouches = function(e) {
        var t = [];
        return e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length > 0 && (t = e.originalEvent.touches), t
    }, this.getArrTouchPositions = function(e) {
        for (var t = [], i = 0; i < e.length; i++) {
            var n = {
                pageX: e[i].pageX,
                pageY: e[i].pageY
            };
            t.push(n)
        }
        return t
    }, this.startTimeDebug = function() {
        n.starTime = jQuery.now()
    }, this.showTimeDebug = function() {
        var e = jQuery.now(),
            t = e - n.starTime;
        debugLine({
            "Time Passed": t
        }, !0)
    }, this.initProgressIndicator = function(e, t, n) {
        switch ("bar" != e && 0 == i.isCanvasExists() && (e = "bar"), e) {
            case "bar":
                var r = new UGProgressBar;
                r.putHidden(n, t);
                break;
            default:
            case "pie":
                var r = new UGProgressPie;
                r.putHidden(n, t);
                break;
            case "pie2":
                t.type_fill = !0;
                var r = new UGProgressPie;
                r.putHidden(n, t)
        }
        return r
    }, this.setButtonMobileReady = function(e) {
        e.on("touchstart", function(e) {
            jQuery(this).addClass("ug-nohover")
        }), e.on("mousedown touchend", function(e) {
            return e.stopPropagation(), e.stopImmediatePropagation(), !1
        })
    }, this.registerTheme = function(e) {
        n.arrThemes.push(e)
    }, this.getArrThemes = function() {
        return n.arrThemes
    }, this.isThemeRegistered = function(e) {
        return -1 !== jQuery.inArray(e, n.arrThemes) ? !0 : !1
    }, this.getFirstRegisteredTheme = function() {
        if (0 == n.arrThemes.length) return "";
        var e = n.arrThemes[0];
        return e
    }, this.isTimePassed = function(e, t) {
        if (!t) var t = 100;
        var i = jQuery.now();
        0 == n.timeCache.hasOwnProperty(e) ? lastTime = 0 : lastTime = n.timeCache[e];
        var r = i - lastTime;
        return n.timeCache[e] = i, t >= r ? !1 : !0
    }, this.whenContiniousEventOver = function(e, t, i) {
        if (!i) var i = 300;
        1 == n.timeCache.hasOwnProperty(e) && null != n.timeCache[e] && (clearTimeout(n.timeCache[e]), n.timeCache[e] = null), n.timeCache[e] = setTimeout(t, i)
    }, this.validateClickTouchstartEvent = function(e) {
        var t = !0,
            i = jQuery.now() - n.lastEventTime;
        return "click" == e && "touchstart" == n.lastEventType && 1e3 > i && (t = !1), n.lastEventTime = jQuery.now(), n.lastEventType = e, t
    }, this.addClassOnHover = function(e, t) {
        if (!t) var t = "ug-button-hover";
        e.hover(function() {
            jQuery(this).addClass(t)
        }, function() {
            jQuery(this).removeClass(t)
        })
    }, this.destroyButton = function(e) {
        e.off("mouseenter"), e.off("mouseleave"), e.off("click"), e.off("touchstart"), e.off("touchend"), e.off("mousedown")
    }, this.setButtonOnClick = function(e, t) {
        i.setButtonMobileReady(e), e.on("click touchstart", function(e) {
            return objThis = jQuery(this), e.stopPropagation(), e.stopImmediatePropagation(), 0 == i.validateClickTouchstartEvent(e.type) ? !0 : void t(objThis, e)
        })
    }, this.loadJs = function(e, t) {
        t === !0 && (e = location.protocol + "//" + e);
        var i = document.createElement("script");
        i.src = e;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(i, n)
    }, this.loadCss = function(e, t) {
        t === !0 && (e = location.protocol + "//" + e);
        var i = document.createElement("link");
        i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("href", e), document.getElementsByTagName("head")[0].appendChild(i)
    }, this.addEvent = function(e, t, i) {
        "undefined" != typeof e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i)
    }, this.checkImagesLoaded = function(e, t, i) {
        function n(e, n) {
            r++, "function" == typeof i && setTimeout(function() {
                i(e, n)
            }), r == o && "function" == typeof t && setTimeout(function() {
                t()
            })
        }
        var r = 0,
            o = e.length;
        return 0 == o && t ? (t(), !1) : void setTimeout(function() {
            for (var t = 0; o > t; t++) {
                var i = e[t];
                if (void 0 !== i.naturalWidth && 0 !== i.naturalWidth) n(e[t], !1);
                else {
                    var r = jQuery("<img/>");
                    r.data("index", t), r.on("load", function() {
                        var t = jQuery(this).data("index");
                        n(e[t], !1)
                    }), r.on("error", function() {
                        var t = jQuery(this).data("index");
                        n(e[t], !0)
                    }), r.attr("src", i.src)
                }
            }
        })
    }, this.waitForWidth = function(e, t) {
        var i = e.width();
        return 0 != i ? (t(), !1) : void(n.handle = setInterval(function() {
            i = e.width(), 0 != i && (clearInterval(n.handle), t())
        }, 300))
    }, this.arrayShuffle = function(e) {
        if ("object" != typeof e) return e;
        for (var t, i, n = e.length; n; t = parseInt(Math.random() * n), i = e[--n], e[n] = e[t], e[t] = i);
        return e
    }, this.getObjectLength = function(e) {
        var t = 0;
        for (var i in e) t++;
        return t
    }, this.normalizePercent = function(e) {
        return 0 > e && (e = 0), e > 1 && (e = 1), e
    }, this.stripTags = function(e) {
        var t = e.replace(/(<([^>]+)>)/gi, "");
        return t
    }, this.htmlentitles = function(e) {
        var t = jQuery("<div/>").text(e).html();
        return t
    }, this.z_________END_GENERAL_FUNCTIONS_______ = function() {}
}

function UGThumbsGeneral() {
    function e(e, t, i, n) {
        var r = {
                width: e + "px",
                height: t + "px"
            },
            o = {
                width: e - j.thumbInnerReduce + "px",
                height: t - j.thumbInnerReduce + "px"
            },
            a = ".ug-thumb-loader, .ug-thumb-error, .ug-thumb-border-overlay, .ug-thumb-overlay";
        i ? (n !== !0 && i.css(r), i.children(a).css(o)) : (w.children(".ug-thumb-wrapper").css(r), w.find(a).css(o))
    }

    function t(e, t, i, n) {
        if (!n) var n = !1;
        S.isFakeFullscreen() && (n = !0);
        var r = e.children(".ug-thumb-border-overlay"),
            o = {};
        o["border-width"] = t + "px", 0 != t && (o["border-color"] = i), n && n === !0 ? (r.css(o), 0 == t ? r.hide() : r.show()) : (0 == t ? r.stop().fadeOut(x.thumb_transition_duration) : r.show().stop().fadeIn(x.thumb_transition_duration), s(r, o))
    }

    function i(e, t, i) {
        var n = e.children(".ug-thumb-overlay"),
            r = x.thumb_transition_duration;
        i && i === !0 && (r = 0), t ? n.stop(!0).fadeTo(r, j.colorOverlayOpacity) : n.stop(!0).fadeTo(r, 0)
    }

    function n(e, t, i) {
        var n = e.children("img.ug-thumb-image"),
            r = e.children("img.ug-thumb-image-overlay"),
            o = x.thumb_transition_duration;
        i && i === !0 && (o = 0), t ? r.stop(!0).fadeTo(o, 1) : (n.fadeTo(0, 1), r.stop(!0).fadeTo(o, 0))
    }

    function r(e, r) {
        if (j.isEffectBorder && t(e, x.thumb_selected_border_width, x.thumb_selected_border_color, r), j.isEffectOverlay) {
            var o = 1 == x.thumb_overlay_reverse ? !0 : !1;
            i(e, o, r)
        }
        j.isEffectImage && n(e, !1, r), E.trigger(T.events.SETSELECTEDSTYLE, e)
    }

    function o(e) {
        var t = T.getItemByThumb(e);
        return t.isLoaded = !0, t.isThumbImageLoaded = !1, 1 == j.customThumbs ? (E.trigger(T.events.IMAGELOADERROR, e), !0) : (e.children(".ug-thumb-loader").hide(), void e.children(".ug-thumb-error").show())
    }

    function a() {
        if (x.thumb_round_corners_radius <= 0) return !1;
        var e = {
            "border-radius": x.thumb_round_corners_radius + "px"
        };
        w.find(".ug-thumb-wrapper, .ug-thumb-wrapper .ug-thumb-border-overlay").css(e)
    }

    function s(e, t) {
        e.stop(!0).animate(t, {
            duration: x.thumb_transition_duration,
            easing: x.thumb_transition_easing,
            queue: !1
        })
    }

    function l(e) {
        1 == g(e) ? r(e, !0, "redraw") : T.setThumbNormalStyle(e, !0, "redraw")
    }

    function u(t, i, n) {
        if (1 == x.thumb_fixed_size) P.scaleImageCoverParent(i, t);
        else {
            "height" == x.thumb_resize_by ? P.scaleImageByHeight(i, x.thumb_height) : P.scaleImageByWidth(i, x.thumb_width);
            var r = P.getElementSize(i);
            P.placeElement(i, 0, 0), e(r.width, r.height, t)
        }
        t.children(".ug-thumb-loader").hide(), i.show(), 0 == x.thumb_image_overlay_effect ? i.fadeTo(0, 1) : (1 == x.thumb_image_overlay_effect && d(i), i.fadeTo(0, 0), l(t)), E.trigger(T.events.AFTERPLACEIMAGE, t)
    }

    function d(e) {
        var t = e.siblings(".ug-thumb-image-overlay");
        if (0 == t.length) return !1;
        var i = P.getElementSize(e),
            n = {
                width: i.width + "px",
                height: i.height + "px",
                left: i.left + "px",
                top: i.top + "px"
            };
        t.css(n), 0 == j.customThumbs && t.fadeTo(0, 1)
    }

    function _() {
        var e = "",
            t = x.thumb_image_overlay_type.split(",");
        for (var i in t) {
            var n = t[i];
            switch (n) {
                case "bw":
                    e += " ug-bw-effect";
                    break;
                case "blur":
                    e += " ug-blur-effect";
                    break;
                case "sepia":
                    e += " ug-sepia-effect"
            }
        }
        return e
    }

    function g(e) {
        return e.hasClass("ug-thumb-selected") ? !0 : !1
    }

    function c(t, i) {
        i = jQuery(i);
        var n = (T.getItemByThumb(i), P.getElementSize(i));
        e(n.width, n.height, i, !0), l(i)
    }

    function h(e) {
        return 1 == j.touchEnabled ? (objThumbs.off("mouseenter").off("mouseleave"), !0) : void(0 == g(e) && T.setThumbOverStyle(e))
    }

    function p(e) {
        return 1 == j.touchEnabled ? !0 : void(0 == g(e) && T.setThumbNormalStyle(e, !1))
    }

    function f(e, t) {
        if (!t) var t = !1;
        var i = jQuery(e),
            n = i.parents(".ug-thumb-wrapper");
        return 0 == n.parent().length ? !1 : (objItem = T.getItemByThumb(n), 1 == objItem.isLoaded && t === !1 ? !1 : (T.triggerImageLoadedEvent(n, i), void(1 == j.customThumbs ? E.trigger(T.events.PLACEIMAGE, [n, i]) : u(n, i, objItem))))
    }

    function m(e, t, i) {
        objItem = T.getItemByThumb(t), objItem.isLoaded = !0, objItem.isThumbImageLoaded = !0;
        var n = P.getImageOriginalSize(i);
        objItem.thumbWidth = n.width, objItem.thumbHeight = n.height, objItem.thumbRatioByWidth = n.width / n.height, objItem.thumbRatioByHeight = n.height / n.width
    }
    var v, b, y, I, w, T = this,
        E = jQuery(T),
        S = new UniteGalleryMain,
        P = new UGFunctions;
    this.events = {
        SETOVERSTYLE: "thumbmouseover",
        SETNORMALSTYLE: "thumbmouseout",
        SETSELECTEDSTYLE: "thumbsetselected",
        PLACEIMAGE: "thumbplaceimage",
        AFTERPLACEIMAGE: "thumb_after_place_image",
        IMAGELOADERROR: "thumbimageloaderror",
        THUMB_IMAGE_LOADED: "thumb_image_loaded"
    };
    var x = {
            thumb_width: 88,
            thumb_height: 50,
            thumb_fixed_size: !0,
            thumb_resize_by: "height",
            thumb_border_effect: !0,
            thumb_border_width: 0,
            thumb_border_color: "#000000",
            thumb_over_border_width: 0,
            thumb_over_border_color: "#d9d9d9",
            thumb_selected_border_width: 1,
            thumb_selected_border_color: "#d9d9d9",
            thumb_round_corners_radius: 0,
            thumb_color_overlay_effect: !0,
            thumb_overlay_color: "#000000",
            thumb_overlay_opacity: .4,
            thumb_overlay_reverse: !1,
            thumb_image_overlay_effect: !1,
            thumb_image_overlay_type: "bw",
            thumb_transition_duration: 200,
            thumb_transition_easing: "easeOutQuad",
            thumb_show_loader: !0,
            thumb_loader_type: "dark",
            thumb_wrapper_as_link: !1,
            thumb_link_newpage: !1
        },
        j = {
            touchEnabled: !1,
            num_thumbs_checking: 0,
            customThumbs: !1,
            funcSetCustomThumbHtml: null,
            isEffectBorder: !1,
            isEffectOverlay: !1,
            isEffectImage: !1,
            colorOverlayOpacity: 1,
            thumbInnerReduce: 0,
            allowOnResize: !0
        },
        C = {
            timeout_thumb_check: 100,
            thumb_max_check_times: 600,
            eventSizeChange: "thumb_size_change"
        };
    this.init = function(e, t) {
        b = e.getObjects(), S = e, v = jQuery(e), y = b.g_objWrapper, I = b.g_arrItems, x = jQuery.extend(x, t), j.isEffectBorder = x.thumb_border_effect, j.isEffectOverlay = x.thumb_color_overlay_effect, j.isEffectImage = x.thumb_image_overlay_effect
    }, this._____________EXTERNAL_SETTERS__________ = function() {}, this.setHtmlThumbs = function(e) {
        w = e;
        var t = S.getNumItems();
        if (1 == j.isEffectImage) var i = _();
        for (var n = 0; t > n; n++) {
            var r = I[n],
                o = "";
            0 == j.customThumbs && (o = " ug-thumb-generated");
            var a = r.index + 1,
                s = "style='z-index:" + a + ";'",
                l = "<div class='ug-thumb-wrapper" + o + "' " + s + "></div>";
            if (1 == x.thumb_wrapper_as_link) {
                var u = r.link;
                "" == r.link && (u = "javascript:void(0)");
                var d = "";
                1 == x.thumb_link_newpage && r.link && (d = " target='_blank'");
                var l = "<a href='" + u + "'" + d + " class='ug-thumb-wrapper" + o + "'></a>"
            }
            var g = jQuery(l),
                c = r.objThumbImage;
            if (0 == j.customThumbs) {
                if (1 == x.thumb_show_loader && c) {
                    var h = "ug-thumb-loader-dark";
                    "bright" == x.thumb_loader_type && (h = "ug-thumb-loader-bright"), g.append("<div class='ug-thumb-loader " + h + "'></div>"), g.append("<div class='ug-thumb-error' style='display:none'></div>")
                }
                if (c) {
                    if (c.addClass("ug-thumb-image"), 1 == x.thumb_image_overlay_effect) {
                        var p = c.clone().appendTo(g);
                        p.addClass("ug-thumb-image-overlay " + i).removeClass("ug-thumb-image"), p.fadeTo(0, 0), r.objImageOverlay = p
                    }
                    g.append(c)
                }
            }
            j.isEffectBorder && g.append("<div class='ug-thumb-border-overlay'></div>"), j.isEffectOverlay && g.append("<div class='ug-thumb-overlay'></div>"), w.append(g), j.customThumbs && j.funcSetCustomThumbHtml(g, r), I[n].objThumbWrapper = g
        }
    }, this.setThumbNormalStyle = function(e, r, o) {
        if (1 == j.customThumbs && e.removeClass("ug-thumb-over"), j.isEffectBorder && t(e, x.thumb_border_width, x.thumb_border_color, r), j.isEffectOverlay) {
            var a = 1 == x.thumb_overlay_reverse ? !1 : !0;
            i(e, a, r)
        }
        j.isEffectImage && n(e, !0, r), E.trigger(T.events.SETNORMALSTYLE, e)
    }, this.setThumbOverStyle = function(e) {
        if (1 == j.customThumbs && e.addClass("ug-thumb-over"), j.isEffectBorder && t(e, x.thumb_over_border_width, x.thumb_over_border_color), j.isEffectOverlay) {
            var r = 1 == x.thumb_overlay_reverse ? !0 : !1;
            i(e, r)
        }
        1 == j.isEffectImage && n(e, !1), E.trigger(T.events.SETOVERSTYLE, e)
    }, this.setHtmlProperties = function() {
        if (0 == j.customThumbs) {
            1 == x.thumb_fixed_size && e(x.thumb_width, x.thumb_height), a()
        }
        if (w.children(".ug-thumb-wrapper").each(function() {
                var e = jQuery(this);
                l(e)
            }), j.isEffectOverlay && x.thumb_overlay_color) {
            var t = {};
            if (P.isRgbaSupported()) {
                var i = P.convertHexToRGB(x.thumb_overlay_color, x.thumb_overlay_opacity);
                t["background-color"] = i
            } else t["background-color"] = x.thumb_overlay_color, j.colorOverlayOpacity = x.thumb_overlay_opacity;
            w.find(".ug-thumb-wrapper .ug-thumb-overlay").css(t)
        }
    }, this.setThumbSelected = function(e) {
        return 1 == j.customThumbs && e.removeClass("ug-thumb-over"), 1 == g(e) ? !0 : (e.addClass("ug-thumb-selected"), void r(e))
    }, this.setThumbUnselected = function(e) {
        e.removeClass("ug-thumb-selected"), T.setThumbNormalStyle(e, !1, "set unselected")
    }, this.setOptions = function(e) {
        x = jQuery.extend(x, e)
    }, this.setThumbInnerReduce = function(e) {
        j.thumbInnerReduce = e
    }, this.setCustomThumbs = function(e, t, i) {
        if (j.customThumbs = !0, "function" != typeof e) throw new Error("The argument should be function");
        j.funcSetCustomThumbHtml = e, -1 == jQuery.inArray("overlay", t) && (j.isEffectOverlay = !1), -1 == jQuery.inArray("border", t) && (j.isEffectBorder = !1), j.isEffectImage = !1, i && i.allow_onresize === !1 && (j.allowOnResize = !1)
    }, this._____________EXTERNAL_GETTERS__________ = function() {}, this.getOptions = function() {
        return x
    }, this.getNumThumbs = function() {
        var e = I.length;
        return e
    }, this.getThumbImage = function(e) {
        var t = e.find(".ug-thumb-image");
        return t
    }, this.getThumbByIndex = function(e) {
        var t = T.getThumbs();
        if (e >= t.length || 0 > e) throw new Error("Wrong thumb index");
        var i = jQuery(t[e]);
        return i
    }, this.getThumbs = function() {
        return w.children(".ug-thumb-wrapper")
    }, this.getItemByThumb = function(e) {
        var t = e.data("index");
        void 0 === t && (t = e.index());
        var i = I[t];
        return i
    }, this.isThumbLoaded = function(e) {
        var t = T.getItemByThumb(e);
        return t.isLoaded
    }, this.getGlobalThumbSize = function() {
        var e = {
            width: x.thumb_width,
            height: x.thumb_height
        };
        return e
    }, this._____________EXTERNAL_OTHERS__________ = function() {}, this.initEvents = function() {
        var e = w.find(".ug-thumb-wrapper");
        e.on("touchstart", function() {
            j.touchEnabled = !0, e.off("mouseenter").off("mouseleave")
        }), 1 == j.allowOnResize && y.on(C.eventSizeChange, c), e.hover(function(e) {
            var t = jQuery(this);
            h(t)
        }, function(e) {
            var t = jQuery(this);
            p(t)
        }), E.on(T.events.THUMB_IMAGE_LOADED, m)
    }, this.destroy = function() {
        var e = w.find(".ug-thumb-wrapper");
        e.off("touchstart"), y.off(C.eventSizeChange), e.off("mouseenter"), e.off("mouseleave"), E.off(T.events.THUMB_IMAGE_LOADED)
    }, this.loadThumbsImages = function() {
        var e = w.find(".ug-thumb-image");
        P.checkImagesLoaded(e, null, function(e, t) {
            if (0 == t) f(e, !0);
            else {
                var i = jQuery(e).parent();
                o(i)
            }
        })
    }, this.triggerImageLoadedEvent = function(e, t) {
        E.trigger(T.events.THUMB_IMAGE_LOADED, [e, t])
    }, this.hideThumbs = function() {
        w.find(".ug-thumb-wrapper").hide()
    }
}

function UGThumbsStrip() {
    function e(e, i) {
        S = e.getObjects(), O = e, O.attachThumbsPanel("strip", z), E = jQuery(e), P = S.g_objWrapper, x = S.g_arrItems, N = jQuery.extend(N, i), H = N.strip_vertical_type, 1 == H && (N = jQuery.extend(N, Q), N = jQuery.extend(N, i), i.thumb_resize_by = "width"),
            k.init(e, i), t()
    }

    function t() {
        var e = k.getOptions();
        R.isNotFixedThumbs = e.thumb_fixed_size === !1, H = N.strip_vertical_type
    }

    function n() {
        k.setHtmlProperties(), o(), l(), s(), 0 == R.isRunOnce && (1 == N.strip_control_touch && (M = new UGTouchThumbsControl, M.init(z)), 1 == N.strip_control_avia && (A = new UGAviaControl, A.init(z)), p(), k.loadThumbsImages(), y()), R.isRunOnce = !0
    }

    function r(e) {
        G.stripSize = e, 0 == H ? G.stripActiveSize = G.stripSize - N.strip_padding_left - N.strip_padding_right : G.stripActiveSize = G.stripSize - N.strip_padding_top - N.strip_padding_bottom, G.stripActiveSize < 0 && (G.stripActiveSize = 0)
    }

    function o() {
        var e = C.children(".ug-thumb-wrapper"),
            t = jQuery(e[0]),
            i = t.outerWidth(),
            n = t.outerHeight(),
            o = k.getOptions();
        0 == H ? (G.thumbSize = i, 1 == o.thumb_fixed_size ? G.thumbSecondSize = n : G.thumbSecondSize = o.thumb_height, r(j.width()), G.stripInnerSize = C.width()) : (G.thumbSize = n, 1 == o.thumb_fixed_size ? G.thumbSecondSize = i : G.thumbSecondSize = o.thumb_width, r(j.height()), G.stripInnerSize = C.height())
    }

    function a(e) {
        0 == H ? C.width(e) : C.height(e), G.stripInnerSize = e, p()
    }

    function s() {
        var e = C.children(".ug-thumb-wrapper"),
            t = 0,
            n = 0;
        for (0 == H && (n = N.strip_padding_top), i = 0; i < e.length; i++) {
            var r = jQuery(e[i]);
            if (1 == R.isNotFixedThumbs) {
                if (objItem = k.getItemByThumb(r), 0 == objItem.isLoaded) continue;
                r.show()
            }
            L.placeElement(r, t, n), 0 == H ? t += r.outerWidth() + N.strip_space_between_thumbs : n += r.outerHeight() + N.strip_space_between_thumbs
        }
        if (0 == H) var o = t - N.strip_space_between_thumbs;
        else var o = n - N.strip_space_between_thumbs;
        a(o)
    }

    function l() {
        if (0 == H) {
            var e = G.thumbSecondSize,
                t = {};
            t.height = e + "px";
            var i = {};
            i.height = e + "px"
        } else {
            var n = G.thumbSecondSize,
                t = {};
            t.width = n + "px";
            var i = {};
            i.width = n + "px"
        }
        j.css(t), C.css(i)
    }

    function u(e) {
        var t = z.getInnerStripPos(),
            i = t + e;
        i = z.fixInnerStripLimits(i), z.positionInnerStrip(i, !0)
    }

    function d(e) {
        var t = T(e),
            i = -1 * t.min;
        i = z.fixInnerStripLimits(i), z.positionInnerStrip(i, !0)
    }

    function _(e) {
        var t = T(e),
            i = -1 * t.max + G.stripSize;
        i = z.fixInnerStripLimits(i), z.positionInnerStrip(i, !0)
    }

    function g(e) {
        if (0 == I()) return !1;
        var t = w(),
            i = T(e);
        if (i.min < t.minPosThumbs) {
            var n = e.prev();
            d(n.length ? n : e)
        } else if (i.max > t.maxPosThumbs) {
            var r = e.next();
            _(r.length ? r : e)
        }
    }

    function c() {
        var e = O.getSelectedItem();
        if (null == e) return !0;
        var t = e.objThumbWrapper;
        t && g(t)
    }

    function h() {
        if (0 == I()) return !1;
        var e = z.getInnerStripPos(),
            t = z.fixInnerStripLimits(e);
        e != t && z.positionInnerStrip(t, !0)
    }

    function p() {
        var e = I();
        1 == e ? (A && A.enable(), M && M.enable()) : (A && A.disable(), M && M.disable())
    }

    function f() {
        return I() ? !1 : void(0 == H ? L.placeElement(C, N.strip_thumbs_align, 0) : L.placeElement(C, 0, N.strip_thumbs_align))
    }

    function m(e) {
        if (z.isTouchMotionActive()) {
            var t = M.isSignificantPassed();
            if (1 == t) return !0
        }
        var i = k.getItemByThumb(e);
        O.selectItem(i)
    }

    function v() {
        clearTimeout(R.handle), R.handle = setTimeout(function() {
            s()
        }, 50)
    }

    function b() {
        var e = O.getSelectedItem();
        k.setThumbSelected(e.objThumbWrapper), g(e.objThumbWrapper)
    }

    function y() {
        k.initEvents();
        var e = j.find(".ug-thumb-wrapper");
        e.on("click touchend", function(e) {
            var t = jQuery(this);
            m(t)
        }), E.on(O.events.ITEM_CHANGE, b), R.isNotFixedThumbs && jQuery(k).on(k.events.AFTERPLACEIMAGE, v)
    }

    function I() {
        return G.stripInnerSize > G.stripActiveSize ? !0 : !1
    }

    function w() {
        var e = {},
            t = z.getInnerStripPos();
        return e.minPosThumbs = -1 * t + 1, e.maxPosThumbs = -1 * t + G.stripSize - 1, e
    }

    function T(e) {
        var t = {},
            i = e.position();
        return 0 == H ? (t.min = i.left, t.max = i.left + G.thumbSize) : (t.min = i.top, t.max = i.top + G.thumbSize), t
    }
    var E, S, P, x, j, C, A, M, z = this,
        O = new UniteGalleryMain,
        L = new UGFunctions,
        H = !1,
        k = new UGThumbsGeneral,
        L = new UGFunctions,
        N = {
            strip_vertical_type: !1,
            strip_thumbs_align: "left",
            strip_space_between_thumbs: 6,
            strip_thumb_touch_sensetivity: 15,
            strip_scroll_to_thumb_duration: 500,
            strip_scroll_to_thumb_easing: "easeOutCubic",
            strip_control_avia: !0,
            strip_control_touch: !0,
            strip_padding_top: 0,
            strip_padding_bottom: 0,
            strip_padding_left: 0,
            strip_padding_right: 0
        },
        R = {
            isRunOnce: !1,
            is_placed: !1,
            isNotFixedThumbs: !1,
            handle: null
        },
        G = {
            stripSize: 0,
            stripActiveSize: 0,
            stripInnerSize: 0,
            thumbSize: 0,
            thumbSecondSize: 0
        };
    this.events = {
        STRIP_MOVE: "stripmove"
    };
    var Q = {
        strip_thumbs_align: "top",
        thumb_resize_by: "width"
    };
    this.setHtml = function(e) {
        if (!e) {
            var e = P;
            null != N.parent_container && (e = N.parent_container)
        }
        e.append("<div class='ug-thumbs-strip'><div class='ug-thumbs-strip-inner'></div></div>"), j = e.children(".ug-thumbs-strip"), C = j.children(".ug-thumbs-strip-inner"), k.setHtmlThumbs(C), 1 == R.isNotFixedThumbs && k.hideThumbs()
    }, this.destroy = function() {
        var e = j.find(".ug-thumb-wrapper");
        e.off("click"), e.off("touchend"), E.off(O.events.ITEM_CHANGE), jQuery(k).off(k.events.AFTERPLACEIMAGE), M && M.destroy(), A && A.destroy(), k.destroy()
    }, this.________EXTERNAL_GENERAL___________ = function() {}, this.init = function(t, i) {
        e(t, i)
    }, this.run = function() {
        n()
    }, this.positionInnerStrip = function(e, t) {
        if (void 0 === t) var t = !1;
        if (0 == H) var i = {
            left: e + "px"
        };
        else var i = {
            top: e + "px"
        };
        0 == t ? (C.css(i), z.triggerStripMoveEvent()) : (z.triggerStripMoveEvent(), C.stop(!0).animate(i, {
            duration: N.strip_scroll_to_thumb_duration,
            easing: N.strip_scroll_to_thumb_easing,
            queue: !1,
            progress: function() {
                z.triggerStripMoveEvent()
            },
            always: function() {
                z.triggerStripMoveEvent()
            }
        }))
    }, this.triggerStripMoveEvent = function() {
        jQuery(z).trigger(z.events.STRIP_MOVE)
    }, this.isTouchMotionActive = function() {
        if (!M) return !1;
        var e = M.isTouchActive();
        return e
    }, this.isItemThumbVisible = function(e) {
        var t = e.objThumbWrapper,
            i = t.position(),
            n = -1 * z.getInnerStripPos();
        if (0 == H) var r = n + G.stripSize,
            o = i.left,
            a = i.left + t.width();
        else var r = n + G.stripSize,
            o = i.top,
            a = i.top + t.height();
        var s = !1;
        return a >= n && r >= o && (s = !0), s
    }, this.getInnerStripPos = function() {
        return 0 == H ? C.position().left : C.position().top
    }, this.getInnerStripLimits = function() {
        var e = {};
        return 0 == H ? e.maxPos = N.strip_padding_left : e.maxPos = N.strip_padding_top, e.minPos = -(G.stripInnerSize - G.stripActiveSize), e
    }, this.fixInnerStripLimits = function(e) {
        var t = z.getInnerStripLimits();
        return e > t.maxPos && (e = t.maxPos), e < t.minPos && (e = t.minPos), e
    }, this.scrollForeward = function() {
        u(-G.stripSize)
    }, this.scrollBack = function() {
        u(G.stripSize)
    }, this.________EXTERNAL_SETTERS___________ = function() {}, this.setOptions = function(e) {
        N = jQuery.extend(N, e), k.setOptions(e), t()
    }, this.setSizeVertical = function(e) {
        if (0 == H) throw new Error("setSizeVertical error, the strip size is not vertical");
        var t = G.thumbSecondSize,
            i = {};
        i.width = t + "px", i.height = e + "px", j.css(i), r(e);
        var n = {};
        n.width = t + "px", n.left = "0px", n.top = "0px", C.css(n), R.is_placed = !0, p()
    }, this.setSizeHorizontal = function(e) {
        if (1 == H) throw new Error("setSizeHorizontal error, the strip size is not horizontal");
        var t = G.thumbSecondSize + N.strip_padding_top + N.strip_padding_bottom,
            i = {};
        i.width = e + "px", i.height = t + "px", j.css(i), r(e);
        var n = N.strip_padding_left,
            o = {};
        o.height = t + "px", o.left = n + "px", o.top = "0px", C.css(o), R.is_placed = !0, p()
    }, this.setPosition = function(e, t, i, n) {
        L.placeElement(j, e, t, i, n)
    }, this.resize = function(e) {
        0 == H ? (j.width(e), G.stripActiveSize = e - N.strip_padding_left - N.strip_padding_right) : (j.height(e), G.stripActiveSize = e - N.strip_padding_top - N.strip_padding_bottom), r(e), p(), h(), f(), c()
    }, this.setThumbUnselected = function(e) {
        k.setThumbUnselected(e)
    }, this.setCustomThumbs = function(e) {
        k.setCustomThumbs(e)
    }, this.________EXTERNAL_GETTERS___________ = function() {}, this.getObjects = function() {
        var e = k.getOptions(),
            t = jQuery.extend(N, e),
            i = {
                g_gallery: O,
                g_objGallery: E,
                g_objWrapper: P,
                g_arrItems: x,
                g_objStrip: j,
                g_objStripInner: C,
                g_aviaControl: A,
                g_touchThumbsControl: M,
                isVertical: H,
                g_options: t,
                g_thumbs: k
            };
        return i
    }, this.getObjThumbs = function() {
        return k
    }, this.getSelectedThumb = function() {
        var e = O.getSelectedItemIndex();
        return -1 == e ? null : k.getThumbByIndex(e)
    }, this.getSizeAndPosition = function() {
        var e = L.getElementSize(j);
        return e
    }, this.getHeight = function() {
        var e = j.outerHeight();
        return e
    }, this.getWidth = function() {
        var e = j.outerWidth();
        return e
    }, this.getSizes = function() {
        return G
    }, this.isVertical = function() {
        return H
    }, this.isPlaced = function() {
        return R.is_placed
    }, this.isMoveEnabled = function() {
        var e = I();
        return e
    }
}

function UGTouchThumbsControl() {
    function e() {
        var e = jQuery.now(),
            t = {};
        return t.passedTime = E.lastTime - E.startTime, t.lastActiveTime = e - E.buttonReleaseTime, t.passedDistance = E.lastPos - E.startPos, t.passedDistanceAbs = Math.abs(t.passedDistance), t
    }

    function t() {
        T.thumb_touch_slowFactor = w.normalizeSetting(5e-5, .01, 1, 100, y.strip_thumb_touch_sensetivity, !0)
    }

    function i(e) {
        return 0 == I ? w.getMousePosition(e).pageX : w.getMousePosition(e).pageY
    }

    function n(e) {
        var t = E.mousePos - e,
            i = E.innerPos - t,
            n = h.getInnerStripLimits();
        if (i > n.maxPos) {
            var r = i - n.maxPos;
            i = n.maxPos + r / 3
        }
        if (i < n.minPos) {
            var r = n.minPos - i;
            i = n.minPos - r / 3
        }
        h.positionInnerStrip(i)
    }

    function r(e) {
        var t = h.getInnerStripPos();
        E.mousePos = e, E.innerPos = t, E.lastPortionPos = t, E.lastDeltaTime = 0, E.lastDeltaPos = 0, E.startTime = jQuery.now(), E.startPos = E.innerPos, E.lastTime = E.startTime, E.lastPos = E.startPos, E.speed = 0
    }

    function o() {
        var e = jQuery.now(),
            t = e - E.lastTime;
        t >= T.touch_portion_time && (E.lastDeltaTime = e - E.lastTime, E.lastDeltaTime > T.touch_portion_time && (E.lastDeltaTime = T.touch_portion_time), E.lastDeltaPos = E.lastPos - E.lastPortionPos, E.lastPortionPos = E.lastPos, E.lastTime = e)
    }

    function a() {
        var e = T.thumb_touch_slowFactor,
            t = T.minDeltaTime,
            i = T.minPath,
            n = h.getInnerStripPos(),
            r = jQuery.now(),
            o = r - E.lastTime,
            a = n - E.lastPortionPos;
        t > o && E.lastDeltaTime > 0 && (o = E.lastDeltaTime, a = E.lastDeltaPos + a), t > o && (o = t);
        var l = a > 0 ? 1 : -1,
            u = 0;
        o > 0 && (u = a / o);
        var d = u * u / (2 * e) * l;
        Math.abs(d) <= i && (d = 0);
        var _ = h.getInnerStripPos(),
            g = _ + d,
            c = h.fixInnerStripLimits(g),
            p = h.getInnerStripLimits(),
            f = T.limitsBreakAddition,
            m = !1,
            v = c;
        if (g > p.maxPos && (m = !0, c = f, f > g && (c = g)), g < p.minPos) {
            m = !0;
            var y = p.minPos - f;
            c = y, g > y && (c = g)
        }
        var w = c - _,
            S = Math.abs(Math.round(u / e));
        if (0 != d && (S = S * w / d), _ != c) {
            var P = {
                left: c + "px"
            };
            1 == I && (P = {
                top: c + "px"
            }), b.animate(P, {
                duration: S,
                easing: T.animationEasing,
                queue: !0,
                progress: s
            })
        }
        if (1 == m) {
            var x = T.returnAnimateSpeed,
                j = {
                    left: v + "px"
                };
            1 == I && (j = {
                top: v + "px"
            }), b.animate(j, {
                duration: x,
                easing: T.returnAnimationEasing,
                queue: !0,
                progress: s
            })
        }
    }

    function s() {
        E.lastPos = h.getInnerStripPos(), h.triggerStripMoveEvent()
    }

    function l() {
        return 1 == E.loop_active ? !0 : (E.loop_active = !0, void(E.handle = setInterval(o, 10)))
    }

    function u(e) {
        if (0 == E.loop_active) return !0;
        if (e) {
            var t = i(e);
            a(t)
        }
        E.loop_active = !1, E.handle = clearInterval(E.handle)
    }

    function d(e) {
        return 0 == E.isControlEnabled ? !0 : (E.buttonReleaseTime = jQuery.now(), 0 == E.touch_active ? (u(e), !0) : (e.preventDefault(), E.touch_active = !1, u(e), void v.removeClass("ug-dragging")))
    }

    function _(e) {
        if (0 == E.isControlEnabled) return !0;
        e.preventDefault(), E.touch_active = !0;
        var t = i(e);
        b.stop(!0), r(t), l(), v.addClass("ug-dragging")
    }

    function g(e) {
        if (0 == E.isControlEnabled) return !0;
        if (0 == E.touch_active) return !0;
        if (e.preventDefault(), 0 == e.buttons) return E.touch_active = !1, u(e), !0;
        var t = i(e);
        E.lastPos = h.getInnerStripPos(), n(t), o()
    }

    function c() {
        v.bind("mousedown touchstart", _), jQuery(window).add("body").bind("mouseup touchend", d), jQuery("body").bind("mousemove touchmove", g)
    }
    var h, p, f, m, v, b, y, I, w = new UGFunctions,
        T = {
            touch_portion_time: 200,
            thumb_touch_slowFactor: 0,
            minDeltaTime: 70,
            minPath: 10,
            limitsBreakAddition: 30,
            returnAnimateSpeed: 500,
            animationEasing: "easeOutCubic",
            returnAnimationEasing: "easeOutCubic"
        },
        E = {
            touch_active: !1,
            loop_active: !1,
            mousePos: 0,
            innerPos: 0,
            startPos: 0,
            startTime: 0,
            lastTime: 0,
            buttonReleaseTime: 0,
            lastPos: 0,
            lastPortionPos: 0,
            lastDeltaTime: 0,
            lastDeltaPos: 0,
            speed: 0,
            handle: "",
            touchEnabled: !1,
            isControlEnabled: !0
        };
    this.enable = function() {
        E.isControlEnabled = !0
    }, this.disable = function() {
        E.isControlEnabled = !1
    }, this.init = function(e) {
        h = e, m = e.getObjects(), p = m.g_gallery, f = m.g_objGallery, v = m.g_objStrip, b = m.g_objStripInner, y = m.g_options, I = m.isVertical, t(), c()
    }, this.isSignificantPassed = function() {
        var t = e();
        return t.passedTime > 300 ? !0 : t.passedDistanceAbs > 30 ? !0 : !1
    }, this.isTouchActive = function() {
        if (1 == E.touch_active) return !0;
        if (1 == b.is(":animated")) return !0;
        var t = e();
        return t.lastActiveTime < 50 ? !0 : !1
    }, this.destroy = function() {
        v.unbind("mousedown"), v.unbind("touchstart"), jQuery(window).add("body").unbind("mouseup").unbind("touchend"), jQuery("body").unbind("mousemove").unbind("touchmove")
    }
}

function UGPanelsBase() {
    function e(e, t) {
        switch (n.orientation) {
            case "right":
            case "left":
                var i = {
                    left: e + "px"
                };
                break;
            case "top":
            case "bottom":
                var i = {
                    top: e + "px"
                }
        }
        o.stop(!0).animate(i, {
            duration: 300,
            easing: "easeInOutQuad",
            queue: !1,
            complete: function() {
                t && t()
            }
        })
    }

    function t(e) {
        switch (n.orientation) {
            case "right":
            case "left":
                g.placeElement(o, e, null);
                break;
            case "top":
            case "bottom":
                g.placeElement(o, null, e)
        }
    }

    function i() {
        s.trigger(r.events.FINISH_MOVE)
    }
    var n, r, o, a, s, l, u, d = new UniteGalleryMain,
        _ = this,
        g = new UGFunctions;
    this.init = function(e, t, i, o, l) {
        n = t, r = i, d = e, a = o, s = l, u = jQuery(d)
    }, this.setHtml = function(e) {
        if (o = e, "strip" == n.panelType) var t = a.strippanel_enable_handle;
        else var t = a.gridpanel_enable_handle;
        if (1 == t && (l = new UGPanelHandle, l.init(r, o, a, n.panelType, d), l.setHtml()), n.isDisabledAtStart === !0) {
            var i = "<div class='ug-overlay-disabled'></div>";
            o.append(i), setTimeout(function() {
                o.children(".ug-overlay-disabled").hide()
            }, n.disabledAtStartTimeout)
        }
    }, this.placeElements = function() {
        l && l.placeHandle()
    }, this.initEvents = function() {
        l && (l.initEvents(), u.on(d.events.SLIDER_ACTION_START, function() {
            l.hideHandle()
        }), u.on(d.events.SLIDER_ACTION_END, function() {
            l.showHandle()
        }))
    }, this.destroy = function() {
        l && (l.destroy(), u.off(d.events.SLIDER_ACTION_START), u.off(d.events.SLIDER_ACTION_END))
    }, this.openPanel = function(a) {
        if (!a) var a = !1;
        return o.is(":animated") ? !1 : 0 == n.isClosed ? !1 : (n.isClosed = !1, s.trigger(r.events.OPEN_PANEL), void(a === !1 ? e(n.originalPos, i) : (t(n.originalPos), i())))
    }, this.closePanel = function(a) {
        if (!a) var a = !1;
        if (o.is(":animated")) return !1;
        if (1 == n.isClosed) return !1;
        var l = _.getClosedPanelDest();
        n.isClosed = !0, s.trigger(r.events.CLOSE_PANEL), a === !1 ? e(l, i) : (t(l), i())
    }, this.setClosedState = function(e) {
        n.originalPos = e, s.trigger(r.events.CLOSE_PANEL), n.isClosed = !0
    }, this.setOpenedState = function(e) {
        s.trigger(r.events.OPEN_PANEL), n.isClosed = !1
    }, this.getClosedPanelDest = function() {
        var e, t = g.getElementSize(o);
        switch (n.orientation) {
            case "left":
                n.originalPos = t.left, e = -n.panelWidth;
                break;
            case "right":
                n.originalPos = t.left;
                var i = d.getSize();
                e = i.width;
                break;
            case "top":
                n.originalPos = t.top, e = -n.panelHeight;
                break;
            case "bottom":
                n.originalPos = t.top;
                var i = d.getSize();
                e = i.height
        }
        return e
    }, this.isPanelClosed = function() {
        return n.isClosed
    }, this.setDisabledAtStart = function(e) {
        return 0 >= e ? !1 : (n.isDisabledAtStart = !0, void(n.disabledAtStartTimeout = e))
    }
}

function UGPanelHandle() {
    function e() {
        s.removeClass("ug-button-hover")
    }

    function t() {
        s.addClass("ug-button-closed")
    }

    function i() {
        s.removeClass("ug-button-closed")
    }

    function n(e) {
        return e.stopPropagation(), e.stopImmediatePropagation(), 0 == l.validateClickTouchstartEvent(e.type) ? !0 : void(a.isPanelClosed() ? a.openPanel() : a.closePanel())
    }

    function r() {
        var e = a.getOrientation();
        switch (e) {
            case "right":
            case "left":
                "top" != u.panel_handle_align && "bottom" != u.panel_handle_align && (u.panel_handle_align = "top");
                break;
            case "bottom":
                "left" != u.panel_handle_align && "right" != u.panel_handle_align && (u.panel_handle_align = "left");
                break;
            case "top":
                "left" != u.panel_handle_align && "right" != u.panel_handle_align && (u.panel_handle_align = "right")
        }
    }
    var o, a, s, l = new UGFunctions,
        u = {
            panel_handle_align: "top",
            panel_handle_offset: 0,
            panel_handle_skin: 0
        };
    this.init = function(e, t, i, n, r) {
        switch (a = e, o = t, n) {
            case "grid":
                u.panel_handle_align = i.gridpanel_handle_align, u.panel_handle_offset = i.gridpanel_handle_offset, u.panel_handle_skin = i.gridpanel_handle_skin;
                break;
            case "strip":
                u.panel_handle_align = i.strippanel_handle_align, u.panel_handle_offset = i.strippanel_handle_offset, u.panel_handle_skin = i.strippanel_handle_skin;
                break;
            default:
                throw new Error("Panel handle error: wrong panel type: " + n)
        }
        var s = r.getOptions(),
            l = s.gallery_skin;
        "" == u.panel_handle_skin && (u.panel_handle_skin = l)
    }, this.setHtml = function() {
        var e = a.getOrientation(),
            t = "ug-panel-handle-tip";
        switch (e) {
            case "right":
                t += " ug-handle-tip-left";
                break;
            case "left":
                t += " ug-handle-tip-right";
                break;
            case "bottom":
                t += " ug-handle-tip-top";
                break;
            case "top":
                t += " ug-handle-tip-bottom"
        }
        o.append("<div class='" + t + " ug-skin-" + u.panel_handle_skin + "'></div>"), s = o.children(".ug-panel-handle-tip")
    }, this.initEvents = function() {
        l.addClassOnHover(s), s.bind("click touchstart", n), jQuery(a).on(a.events.OPEN_PANEL, function() {
            e(), i()
        }), jQuery(a).on(a.events.CLOSE_PANEL, function() {
            e(), t()
        })
    }, this.destroy = function() {
        l.destroyButton(s), jQuery(a).off(a.events.OPEN_PANEL), jQuery(a).off(a.events.CLOSE_PANEL)
    }, this.placeHandle = function() {
        var e = l.getElementSize(s);
        r();
        var t = a.getOrientation();
        switch (t) {
            case "left":
                l.placeElement(s, "right", u.panel_handle_align, -e.width);
                break;
            case "right":
                l.placeElement(s, -e.width, u.panel_handle_align, 0, u.panel_handle_offset);
                break;
            case "top":
                l.placeElement(s, u.panel_handle_align, "bottom", u.panel_handle_offset, -e.height);
                break;
            case "bottom":
                l.placeElement(s, u.panel_handle_align, "top", u.panel_handle_offset, -e.height);
                break;
            default:
                throw new Error("Wrong panel orientation: " + t)
        }
    }, this.hideHandle = function() {
        1 == s.is(":visible") && s.hide()
    }, this.showHandle = function() {
        0 == s.is(":visible") && s.show()
    }
}

function UGStripPanel() {
    function e(e, t) {
        E = e, m = jQuery(E), j = jQuery.extend(j, t);
        var i = !1;
        1 == j.strippanel_vertical_type && (j = jQuery.extend(j, C), i = !0), 0 == j.strippanel_enable_buttons && (j = jQuery.extend(j, A), i = !0), 1 == i && (j = jQuery.extend(j, t));
        var n = E.getOptions(),
            r = n.gallery_skin;
        "" == j.strippanel_buttons_skin && (j.strippanel_buttons_skin = r), v = E.getElement(), x.init(E, M, w, j, T), P = new UGThumbsStrip, P.init(E, j)
    }

    function t() {
        if (0 == j.strippanel_vertical_type) {
            if (0 == M.panelWidth) throw new Error("Strip panel error: The width not set, please set width")
        } else if (0 == M.panelHeight) throw new Error("Strip panel error: The height not set, please set height");
        if (null == M.orientation) throw new Error("Wrong orientation, please set panel orientation before run");
        return !0
    }

    function i() {
        return 1 == M.isFirstRun && 0 == t() ? !1 : (P.run(), s(), d(), f(), M.isFirstRun = !1, void c())
    }

    function n(e) {
        if (!e) var e = v;
        if (e.append("<div class='ug-strip-panel'></div>"), b = e.children(".ug-strip-panel"), 1 == j.strippanel_enable_buttons) {
            var t = "ug-strip-arrow-left",
                i = "ug-strip-arrow-right";
            1 == j.strippanel_vertical_type && (t = "ug-strip-arrow-up", i = "ug-strip-arrow-down"), b.append("<div class='ug-strip-arrow " + t + " ug-skin-" + j.strippanel_buttons_skin + "'><div class='ug-strip-arrow-tip'></div></div>"), b.append("<div class='ug-strip-arrow " + i + " ug-skin-" + j.strippanel_buttons_skin + "'><div class='ug-strip-arrow-tip'></div></div>")
        }
        x.setHtml(b), P.setHtml(b), 1 == j.strippanel_enable_buttons && (I = b.children("." + t), y = b.children("." + i)), r()
    }

    function r() {
        "" != j.strippanel_background_color && b.css("background-color", j.strippanel_background_color)
    }

    function o() {
        var e = P.getHeight(),
            t = M.panelWidth;
        if (y) {
            I.height(e), y.height(e);
            var i = I.children(".ug-strip-arrow-tip");
            S.placeElement(i, "center", "middle");
            var n = y.children(".ug-strip-arrow-tip");
            S.placeElement(n, "center", "middle")
        }
        var r = e + j.strippanel_padding_top + j.strippanel_padding_bottom;
        b.width(t), b.height(r), M.panelHeight = r;
        var o = t - j.strippanel_padding_left - j.strippanel_padding_right;
        if (y) {
            var a = y.outerWidth();
            o = o - 2 * a - 2 * j.strippanel_padding_buttons
        }
        P.resize(o)
    }

    function a() {
        var e = P.getWidth(),
            t = M.panelHeight;
        if (y) {
            I.width(e), y.width(e);
            var i = I.children(".ug-strip-arrow-tip");
            S.placeElement(i, "center", "middle");
            var n = y.children(".ug-strip-arrow-tip");
            S.placeElement(n, "center", "middle")
        }
        var r = e + j.strippanel_padding_left + j.strippanel_padding_right;
        b.width(r), b.height(t), M.panelWidth = r;
        var o = t - j.strippanel_padding_top - j.strippanel_padding_bottom;
        if (y) {
            var a = y.outerHeight();
            o = o - 2 * a - 2 * j.strippanel_padding_buttons
        }
        P.resize(o)
    }

    function s() {
        0 == j.strippanel_vertical_type ? o() : a()
    }

    function l() {
        y && (S.placeElement(I, "left", "top", j.strippanel_padding_left, j.strippanel_padding_top), S.placeElement(y, "right", "top", j.strippanel_padding_right, j.strippanel_padding_top));
        var e = j.strippanel_padding_left;
        y && (e += y.outerWidth() + j.strippanel_padding_buttons), P.setPosition(e, j.strippanel_padding_top)
    }

    function u() {
        y && (S.placeElement(I, "left", "top", j.strippanel_padding_left, j.strippanel_padding_top), S.placeElement(y, "left", "bottom", j.strippanel_padding_left, j.strippanel_padding_bottom));
        var e = j.strippanel_padding_top;
        y && (e += y.outerHeight() + j.strippanel_padding_buttons), P.setPosition(j.strippanel_padding_left, e)
    }

    function d() {
        0 == j.strippanel_vertical_type ? l() : u(), x.placeElements()
    }

    function _(e) {
        return S.isButtonDisabled(e) ? !0 : void("advance_item" == j.strippanel_buttons_role ? E.nextItem() : P.scrollForeward())
    }

    function g(e) {
        return S.isButtonDisabled(e) ? !0 : void("advance_item" == j.strippanel_buttons_role ? E.prevItem() : P.scrollBack())
    }

    function c() {
        if (!y) return !0;
        if (0 == P.isMoveEnabled()) return S.disableButton(I), S.disableButton(y), !0;
        var e = P.getInnerStripLimits(),
            t = P.getInnerStripPos();
        t >= e.maxPos ? S.disableButton(I) : S.enableButton(I), t <= e.minPos ? S.disableButton(y) : S.enableButton(y)
    }

    function h() {
        c()
    }

    function p() {
        E.isLastItem() ? S.disableButton(y) : S.enableButton(y), E.isFirstItem() ? S.disableButton(I) : S.enableButton(I)
    }

    function f() {
        if (1 == M.isEventsInited) return !1;
        if (M.isEventsInited = !0, y)
            if (S.addClassOnHover(y, "ug-button-hover"), S.addClassOnHover(I, "ug-button-hover"), S.setButtonOnClick(I, g), S.setButtonOnClick(y, _), "advance_item" != j.strippanel_buttons_role) jQuery(P).on(P.events.STRIP_MOVE, h), m.on(E.events.SIZE_CHANGE, c);
            else {
                var e = E.getOptions();
                0 == e.gallery_carousel && jQuery(E).on(E.events.ITEM_CHANGE, p)
            }
        x.initEvents()
    }
    var m, v, b, y, I, w = this,
        T = jQuery(this),
        E = new UniteGalleryMain,
        S = new UGFunctions,
        P = new UGThumbsStrip,
        x = new UGPanelsBase;
    this.events = {
        FINISH_MOVE: "gridpanel_move_finish",
        OPEN_PANEL: "open_panel",
        CLOSE_PANEL: "close_panel"
    };
    var j = {
            strippanel_vertical_type: !1,
            strippanel_padding_top: 8,
            strippanel_padding_bottom: 8,
            strippanel_padding_left: 0,
            strippanel_padding_right: 0,
            strippanel_enable_buttons: !0,
            strippanel_buttons_skin: "",
            strippanel_padding_buttons: 2,
            strippanel_buttons_role: "scroll_strip",
            strippanel_enable_handle: !0,
            strippanel_handle_align: "top",
            strippanel_handle_offset: 0,
            strippanel_handle_skin: "",
            strippanel_background_color: ""
        },
        C = {
            strip_vertical_type: !0,
            strippanel_padding_left: 8,
            strippanel_padding_right: 8,
            strippanel_padding_top: 0,
            strippanel_padding_bottom: 0
        },
        A = {
            strippanel_padding_left: 8,
            strippanel_padding_right: 8,
            strippanel_padding_top: 8,
            strippanel_padding_bottom: 8
        },
        M = {
            panelType: "strip",
            panelWidth: 0,
            panelHeight: 0,
            isEventsInited: !1,
            isClosed: !1,
            orientation: null,
            originalPos: null,
            isFirstRun: !0
        };
    this.destroy = function() {
        y && (S.destroyButton(y), S.destroyButton(I), jQuery(P).off(P.events.STRIP_MOVE), jQuery(E).off(E.events.ITEM_CHANGE), jQuery(E).off(E.events.SIZE_CHANGE)), x.destroy(), P.destroy()
    }, this.getOrientation = function() {
        return M.orientation
    }, this.setOrientation = function(e) {
        M.orientation = e
    }, this.init = function(t, i) {
        e(t, i)
    }, this.run = function() {
        i()
    }, this.setHtml = function(e) {
        n(e)
    }, this.getElement = function() {
        return b
    }, this.getSize = function() {
        var e = S.getElementSize(b);
        return e
    }, this.setWidth = function(e) {
        M.panelWidth = e
    }, this.setHeight = function(e) {
        M.panelHeight = e
    }, this.resize = function(e) {
        w.setWidth(e), s(), d()
    }, this.__________Functions_From_Base_____ = function() {}, this.isPanelClosed = function() {
        return x.isPanelClosed()
    }, this.getClosedPanelDest = function() {
        return x.getClosedPanelDest()
    }, this.openPanel = function(e) {
        x.openPanel(e)
    }, this.closePanel = function(e) {
        x.closePanel(e)
    }, this.setOpenedState = function(e) {
        x.setOpenedState(e)
    }, this.setClosedState = function(e) {
        x.setClosedState(e)
    }, this.setCustomThumbs = function(e) {
        P.setCustomThumbs(e)
    }, this.setDisabledAtStart = function(e) {
        x.setDisabledAtStart(e)
    }
}

function UGGridPanel() {
    function e(e, i) {
        x = e, t(), i && i.vertical_scroll && (M.gridpanel_vertical_scroll = i.vertical_scroll), M = jQuery.extend(M, i), 1 == L.isHorType ? (M = jQuery.extend(M, O), M = jQuery.extend(M, i)) : 1 == M.gridpanel_vertical_scroll && (M = jQuery.extend(M, z), M = jQuery.extend(M, i), M.grid_panes_direction = "bottom");
        var n = x.getOptions(),
            r = n.gallery_skin;
        "" == M.gridpanel_arrows_skin && (M.gridpanel_arrows_skin = r);
        var o = e.getObjects();
        I = o.g_objWrapper, A.init(x, L, S, M, P), C = new UGThumbsGrid, C.init(x, M)
    }

    function t() {
        if (null == L.orientation) throw new Error("Wrong orientation, please set panel orientation before run")
    }

    function i() {
        t(), o(), C.run(), l(), u(), y(), d()
    }

    function n() {
        I.append("<div class='ug-grid-panel'></div>"), w = I.children(".ug-grid-panel"), L.isHorType ? (w.append("<div class='grid-arrow grid-arrow-left-hortype ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), w.append("<div class='grid-arrow grid-arrow-right-hortype ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), E = w.children(".grid-arrow-left-hortype"), T = w.children(".grid-arrow-right-hortype")) : 0 == M.gridpanel_vertical_scroll ? (w.append("<div class='grid-arrow grid-arrow-left ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), w.append("<div class='grid-arrow grid-arrow-right ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), E = w.children(".grid-arrow-left"), T = w.children(".grid-arrow-right")) : (w.append("<div class='grid-arrow grid-arrow-up ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), w.append("<div class='grid-arrow grid-arrow-down ug-skin-" + M.gridpanel_arrows_skin + "'></div>"), E = w.children(".grid-arrow-up"), T = w.children(".grid-arrow-down")), A.setHtml(w), E.fadeTo(0, 0), T.fadeTo(0, 0), C.setHtml(w), r()
    }

    function r() {
        "" != M.gridpanel_background_color && w.css("background-color", M.gridpanel_background_color)
    }

    function o() {
        "center" == M.gridpanel_grid_align && (M.gridpanel_grid_align = "middle")
    }

    function a() {
        var e = M.gridpanel_padding_border_top + M.gridpanel_padding_border_bottom,
            t = L.panelHeight - e;
        if (0 == M.gridpanel_arrows_always_on) {
            var i = C.getNumPanesEstimationByHeight(t);
            if (1 == i) return t
        }
        var n = j.getElementSize(T),
            r = n.height,
            e = r + M.gridpanel_arrows_padding_vert;
        return 1 == M.gridpanel_vertical_scroll && (e *= 2), e += M.gridpanel_padding_border_top + M.gridpanel_padding_border_bottom, t = L.panelHeight - e
    }

    function s() {
        var e = M.gridpanel_padding_border_left + M.gridpanel_padding_border_right,
            t = L.panelWidth - e;
        if (0 == M.gridpanel_arrows_always_on) {
            var i = C.getNumPanesEstimationByWidth(t);
            if (1 == i) return t
        }
        var n = j.getElementSize(T),
            r = n.width;
        return e += 2 * (r + M.gridpanel_arrows_padding_hor), t = L.panelWidth - e
    }

    function l() {
        var e = !1;
        if (1 == M.gridpanel_arrows_always_on) e = !0;
        else {
            var t = C.getNumPanes();
            t > 1 && (e = !0)
        }
        1 == e ? (T.show().fadeTo(0, 1), E.show().fadeTo(0, 1), L.arrowsVisible = !0) : (T.hide(), E.hide(), L.arrowsVisible = !1)
    }

    function u() {
        var e = C.getSize();
        1 == L.isHorType ? L.panelHeight = e.height + M.gridpanel_padding_border_top + M.gridpanel_padding_border_bottom : L.panelWidth = e.width + M.gridpanel_padding_border_left + M.gridpanel_padding_border_right, j.setElementSize(w, L.panelWidth, L.panelHeight)
    }

    function d() {
        return 1 == L.isEventsInited ? !1 : (L.isEventsInited = !0, E && (j.addClassOnHover(E), C.attachPrevPaneButton(E)), T && (j.addClassOnHover(T), C.attachNextPaneButton(T)), void A.initEvents())
    }

    function _() {
        var e = M.gridpanel_padding_border_left;
        return e
    }

    function g() {
        var e = M.gridpanel_grid_align,
            t = 0;
        switch (e) {
            case "top":
                t = M.gridpanel_padding_border_top;
                break;
            case "bottom":
                t = M.gridpanel_padding_border_bottom
        }
        var i = _(),
            n = C.getElement();
        j.placeElement(n, i, e, 0, t)
    }

    function c() {
        var e, t, i, n, r = j.getElementSize(E),
            o = C.getSize();
        switch (M.gridpanel_grid_align) {
            default:
                case "top":
                e = M.gridpanel_padding_border_top + r.height + M.gridpanel_arrows_padding_vert;
            break;
            case "middle":
                    e = "middle";
                break;
            case "bottom":
                    e = L.panelHeight - o.height - r.height - M.gridpanel_padding_border_bottom - M.gridpanel_arrows_padding_vert
        }
        var a = _(),
            s = C.getElement();
        j.placeElement(s, a, e);
        var o = C.getSize();
        switch (M.gridpanel_arrows_align_vert) {
            default:
                case "center":
                case "middle":
                t = (o.top - r.height) / 2,
            i = o.bottom + (L.panelHeight - o.bottom - r.height) / 2,
            n = 0;
            break;
            case "grid":
                    t = o.top - r.height - M.gridpanel_arrows_padding_vert_vert,
                i = o.bottom + M.gridpanel_arrows_padding_vert,
                n = 0;
                break;
            case "border":
                    case "borders":
                    t = M.gridpanel_padding_border_top,
                i = "bottom",
                n = M.gridpanel_padding_border_bottom
        }
        j.placeElement(E, "center", t), j.placeElement(T, "center", i, 0, n)
    }

    function h() {
        1 == L.arrowsVisible ? c() : g()
    }

    function p() {
        var e, t, i, n, r = j.getElementSize(E),
            o = C.getSize(),
            a = M.gridpanel_padding_border_top;
        switch (M.gridpanel_grid_align) {
            case "middle":
                switch (M.gridpanel_arrows_align_vert) {
                    default: var s = o.height + M.gridpanel_arrows_padding_vert + r.height;a = (L.panelHeight - s) / 2;
                    break;
                    case "border":
                            case "borders":
                            var l = L.panelHeight - r.height - M.gridpanel_padding_border_bottom;a = (l - o.height) / 2
                }
                break;
            case "bottom":
                var s = o.height + r.height + M.gridpanel_arrows_padding_vert;
                a = L.panelHeight - s - M.gridpanel_padding_border_bottom
        }
        var u = C.getElement(),
            d = _();
        j.placeElement(u, d, a);
        var o = C.getSize();
        switch (M.gridpanel_arrows_align_vert) {
            default:
                case "center":
                case "middle":
                e = o.bottom + (L.panelHeight - o.bottom - r.height) / 2,
            i = 0;
            break;
            case "grid":
                    e = o.bottom + M.gridpanel_arrows_padding_vert,
                i = 0;
                break;
            case "border":
                    case "borders":
                    e = "bottom",
                i = M.gridpanel_padding_border_bottom
        }
        t = -r.width / 2 - M.gridpanel_space_between_arrows / 2, j.placeElement(E, "center", e, t, i);
        var n = Math.abs(t);
        j.placeElement(T, "center", e, n, i)
    }

    function f() {
        1 == L.arrowsVisible ? p() : g()
    }

    function m() {
        var e, t, i, n, r = j.getElementSize(E),
            o = C.getSize();
        switch (M.gridpanel_grid_align) {
            default:
                case "left":
                e = M.gridpanel_padding_border_left + M.gridpanel_arrows_padding_hor + r.width;
            break;
            case "middle":
                    case "center":
                    e = "center";
                break;
            case "right":
                    e = L.panelWidth - o.width - r.width - M.gridpanel_padding_border_right - M.gridpanel_arrows_padding_hor
        }
        var a = C.getElement();
        switch (j.placeElement(a, e, M.gridpanel_padding_border_top), o = C.getSize(), M.gridpanel_arrows_align_vert) {
            default:
                case "center":
                case "middle":
                n = (o.height - r.height) / 2 + o.top;
            break;
            case "top":
                    n = M.gridpanel_padding_border_top + M.gridpanel_arrows_padding_vert;
                break;
            case "bottom":
                    n = L.panelHeight - M.gridpanel_padding_border_bottom - M.gridpanel_arrows_padding_vert - r.height
        }
        switch (M.gridpanel_arrows_align_hor) {
            default:
                case "borders":
                t = M.gridpanel_padding_border_left,
            i = L.panelWidth - M.gridpanel_padding_border_right - r.width;
            break;
            case "grid":
                    t = o.left - M.gridpanel_arrows_padding_hor - r.width,
                i = o.right + M.gridpanel_arrows_padding_hor;
                break;
            case "center":
                    t = (o.left - r.width) / 2,
                i = o.right + (L.panelWidth - o.right - r.width) / 2
        }
        j.placeElement(E, t, n), j.placeElement(T, i, n)
    }

    function v() {
        var e, t = C.getSize();
        switch (M.gridpanel_grid_align) {
            default:
                case "left":
                e = M.gridpanel_padding_border_left;
            break;
            case "middle":
                    case "center":
                    e = "center";
                break;
            case "right":
                    e = L.panelWidth - t.width - M.gridpanel_padding_border_right
        }
        var i = C.getElement();
        j.placeElement(i, e, M.gridpanel_padding_border_top)
    }

    function b() {
        1 == L.arrowsVisible ? m() : v()
    }

    function y() {
        0 == L.isHorType ? 1 == M.gridpanel_vertical_scroll ? h() : f() : b(), A.placeElements()
    }
    var I, w, T, E, S = this,
        P = jQuery(this),
        x = new UniteGalleryMain,
        j = new UGFunctions,
        C = new UGThumbsGrid,
        A = new UGPanelsBase;
    this.events = {
        FINISH_MOVE: "gridpanel_move_finish",
        OPEN_PANEL: "open_panel",
        CLOSE_PANEL: "close_panel"
    };
    var M = {
            gridpanel_vertical_scroll: !0,
            gridpanel_grid_align: "middle",
            gridpanel_padding_border_top: 10,
            gridpanel_padding_border_bottom: 4,
            gridpanel_padding_border_left: 10,
            gridpanel_padding_border_right: 10,
            gridpanel_arrows_skin: "",
            gridpanel_arrows_align_vert: "middle",
            gridpanel_arrows_padding_vert: 4,
            gridpanel_arrows_align_hor: "center",
            gridpanel_arrows_padding_hor: 10,
            gridpanel_space_between_arrows: 20,
            gridpanel_arrows_always_on: !1,
            gridpanel_enable_handle: !0,
            gridpanel_handle_align: "top",
            gridpanel_handle_offset: 0,
            gridpanel_handle_skin: "",
            gridpanel_background_color: ""
        },
        z = {
            gridpanel_grid_align: "middle",
            gridpanel_padding_border_top: 2,
            gridpanel_padding_border_bottom: 2
        },
        O = {
            gridpanel_grid_align: "center"
        },
        L = {
            panelType: "grid",
            isHorType: !1,
            arrowsVisible: !1,
            panelHeight: 0,
            panelWidth: 0,
            originalPosX: null,
            isEventsInited: !1,
            isClosed: !1,
            orientation: null
        };
    this.destroy = function() {
            E && j.destroyButton(E), T && j.destroyButton(T), A.destroy(), C.destroy()
        }, this.getOrientation = function() {
            return L.orientation
        }, this.setOrientation = function(e) {
            switch (L.orientation = e, e) {
                case "right":
                case "left":
                    L.isHorType = !1;
                    break;
                case "top":
                case "bottom":
                    L.isHorType = !0;
                    break;
                default:
                    throw new Error("Wrong grid panel orientation: " + e)
            }
        }, this.setHeight = function(e) {
            if (1 == L.isHorType) throw new Error("setHeight is not appliable to this orientatio (" + L.orientation + "). Please use setWidth");
            L.panelHeight = e;
            var t = a();
            C.setMaxHeight(t)
        }, this.setWidth = function(e) {
            if (0 == L.isHorType) throw new Error("setWidth is not appliable to this orientatio (" + L.orientation + "). Please use setHeight");
            L.panelWidth = e;
            var t = s();
            C.setMaxWidth(t)
        }, this.init = function(t, i) {
            e(t, i)
        }, this.setHtml = function() {
            n()
        }, this.run = function() {
            i()
        }, this.getElement = function() {
            return w
        }, this.getSize = function() {
            var e = j.getElementSize(w);
            return e
        }, this.__________Functions_From_Base_____ = function() {},
        this.isPanelClosed = function() {
            return A.isPanelClosed()
        }, this.getClosedPanelDest = function() {
            return A.getClosedPanelDest()
        }, this.openPanel = function(e) {
            A.openPanel(e)
        }, this.closePanel = function(e) {
            A.closePanel(e)
        }, this.setOpenedState = function(e) {
            A.setOpenedState(e)
        }, this.setClosedState = function(e) {
            A.setClosedState(e)
        }, this.setDisabledAtStart = function(e) {
            A.setDisabledAtStart(e)
        }
}

function UGThumbsGrid() {
    function e(e, t, i) {
        H = e.getObjects(), W = e, W.attachThumbsPanel("grid", Q), L = jQuery(e), k = H.g_objWrapper, N = H.g_arrItems, i === !0 && (V.isTilesMode = !0), V.numThumbs = N.length, d(t), V.isNavigationVertical = "top" == U.grid_panes_direction || "bottom" == U.grid_panes_direction, 1 == V.isTilesMode ? (Y.setFixedMode(), Y.setApproveClickFunction(P), Y.init(e, U), B = Y.getObjThumbs()) : (t.thumb_fixed_size = !0, B.init(e, t))
    }

    function t(e) {
        var t = k;
        e && (t = e), t.append("<div class='ug-thumbs-grid'><div class='ug-thumbs-grid-inner'></div></div>"), R = t.children(".ug-thumbs-grid"), G = R.children(".ug-thumbs-grid-inner"), 1 == V.isTilesMode ? Y.setHtml(G) : B.setHtmlThumbs(G)
    }

    function n() {
        if (0 == V.isHorizontal) {
            if (0 == V.gridHeight) throw new Error("You must set height before run.")
        } else if (0 == V.gridWidth) throw new Error("You must set width before run.")
    }

    function r() {
        var e = W.getSelectedItem();
        if (n(), 1 == V.isFirstTimeRun && (O(), 1 == V.isTilesMode ? (l(), Y.run()) : (B.setHtmlProperties(), l(), B.loadThumbsImages())), h(), 1 == V.isFirstTimeRun && V.isTilesMode) {
            var t = B.getThumbs();
            t.each(function(e, t) {
                k.trigger(V.eventSizeChange, jQuery(t))
            }), t.fadeTo(0, 1)
        }
        null != e && u(e.index), D.trigger(Q.events.PANE_CHANGE, V.currentPane), V.isFirstTimeRun = !1
    }

    function o() {
        if (1 == V.isTilesMode) var e = Y.getGlobalTileSize();
        else var e = B.getGlobalThumbSize();
        return e
    }

    function a() {
        var e = o(),
            t = e.height,
            i = V.gridWidth,
            n = U.grid_num_rows * t + (U.grid_num_rows - 1) * U.grid_space_between_rows + 2 * U.grid_padding;
        V.gridHeight = n, F.setElementSize(R, i, n), F.setElementSize(G, i, n), V.innerWidth = i, V.innerHeight = n
    }

    function s() {
        var e = o(),
            t = e.width,
            i = U.grid_num_cols * t + (U.grid_num_cols - 1) * U.grid_space_between_cols + 2 * U.grid_padding,
            n = V.gridHeight;
        V.gridWidth = i, F.setElementSize(R, i, n), F.setElementSize(G, i, n), V.innerWidth = i, V.innerHeight = n
    }

    function l() {
        0 == V.isHorizontal ? s() : a()
    }

    function u(e) {
        var t = T(e);
        return -1 == t ? !1 : void Q.gotoPane(t, "scroll")
    }

    function d(e) {
        U = jQuery.extend(U, e), B.setOptions(e)
    }

    function _() {
        var e = G.children(".ug-thumb-wrapper"),
            t = 0,
            n = 0,
            r = 0,
            o = 0,
            a = 0,
            s = 0;
        V.innerWidth = 0, V.numPanes = 1, V.arrPanes = [], V.numThumbsInPane = 0, V.arrPanes.push(o);
        var l = e.length;
        for (i = 0; i < l; i++) {
            var u = jQuery(e[i]);
            F.placeElement(u, t, n);
            var d = u.outerWidth(),
                _ = u.outerHeight();
            t > a && (a = t);
            var g = n + _;
            g > s && (s = g);
            var c = a + d;
            c > V.innerWidth && (V.innerWidth = c), t += d + U.grid_space_between_cols, r++, r >= U.grid_num_cols && (n += _ + U.grid_space_between_rows, t = o, r = 0), 1 == V.numPanes && V.numThumbsInPane++, n + _ > V.gridHeight && (n = 0, o = V.innerWidth + U.grid_space_between_cols, t = o, r = 0, 1 == V.isMaxHeight && 1 == V.numPanes && (V.gridHeight = s, R.height(V.gridHeight)), i < l - 1 && (V.numPanes++, V.arrPanes.push(o)))
        }
        G.width(V.innerWidth), 1 == V.isMaxHeight && 1 == V.numPanes && (V.gridHeight = s, R.height(s))
    }

    function g() {
        var e = G.children(".ug-thumb-wrapper"),
            t = 0,
            n = 0,
            r = 0,
            o = 0,
            a = 0,
            s = 0;
        V.innerWidth = 0, V.numPanes = 1, V.arrPanes = [], V.numThumbsInPane = 0, V.arrPanes.push(a);
        var l = e.length;
        for (i = 0; i < l; i++) {
            var u = jQuery(e[i]);
            F.placeElement(u, t, n);
            var d = u.outerWidth(),
                _ = u.outerHeight();
            t += d + U.grid_space_between_cols;
            var g = n + _;
            g > r && (r = g), o++, o >= U.grid_num_cols && (n += _ + U.grid_space_between_rows, t = a, o = 0), 1 == V.numPanes && V.numThumbsInPane++, g = n + _;
            var c = s + V.gridHeight;
            g > c && (1 == V.isMaxHeight && 1 == V.numPanes && (V.gridHeight = r, R.height(V.gridHeight), c = V.gridHeight), n = c + U.grid_space_between_rows, s = n, a = 0, t = a, o = 0, i < l - 1 && (V.numPanes++, V.arrPanes.push(n)))
        }
        G.height(r), V.innerHeight = r, 1 == V.isMaxHeight && 1 == V.numPanes && (V.gridHeight = r, R.height(r))
    }

    function c() {
        var e = G.children(".ug-thumb-wrapper"),
            t = U.grid_padding,
            n = U.grid_padding,
            r = n,
            o = t,
            a = 0,
            s = 0,
            l = 0,
            u = 0;
        V.innerWidth = 0, V.numPanes = 1, V.arrPanes = [], V.numThumbsInPane = 0, V.arrPanes.push(t - U.grid_padding);
        var d = e.length;
        for (i = 0; i < d; i++) {
            var _ = jQuery(e[i]),
                g = _.outerWidth(),
                c = _.outerHeight();
            o - t + g > V.gridWidth && (u++, r = 0, u >= U.grid_num_rows ? (u = 0, t = o, l = 0, r = n, 1 == V.numPanes && (V.gridWidth = a + U.grid_padding, R.width(V.gridWidth)), V.numPanes++, V.arrPanes.push(t - U.grid_padding)) : (o = t, r = l + U.grid_space_between_rows)), F.placeElement(_, o, r);
            var h = o + g;
            h > a && (a = h);
            var p = r + c;
            p > l && (l = p), p > s && (s = p);
            var h = a + g;
            h > V.innerWidth && (V.innerWidth = h), o += g + U.grid_space_between_cols, 1 == V.numPanes && V.numThumbsInPane++
        }
        V.innerWidth = a, V.innerHeight = l, G.width(V.innerWidth), G.height(V.innerHeight), 1 == V.numPanes && (V.gridWidth = a + U.grid_padding, V.gridHeight = s + U.grid_padding, R.width(V.gridWidth), R.height(V.gridHeight))
    }

    function h() {
        0 == V.isHorizontal ? V.isNavigationVertical ? g() : _() : c()
    }

    function p(e) {
        if (0 > e || e >= V.numThumbs) throw new Error("Thumb not exists: " + e);
        return !0
    }

    function f(e) {
        if (e >= V.numPanes || 0 > e) throw new Error("Pane " + index + " doesn't exists.");
        return !0
    }

    function m(e) {
        var t = I(e);
        return 0 == t ? !1 : void G.css(t)
    }

    function v(e) {
        var t = I(e);
        return 0 == t ? !1 : void G.stop(!0).animate(t, {
            duration: U.grid_transition_duration,
            easing: U.grid_transition_easing,
            queue: !1
        })
    }

    function b() {
        var e = -V.arrPanes[V.currentPane];
        v(e)
    }

    function y() {
        return 1 == V.isNavigationVertical ? V.gridHeight : V.gridWidth
    }

    function I(e) {
        var t = {};
        return 1 == V.isNavigationVertical ? t.top = e + "px" : t.left = e + "px", t
    }

    function w() {
        var e = F.getElementSize(G);
        return 1 == V.isNavigationVertical ? e.top : e.left
    }

    function T(e) {
        if (0 == p(e)) return -1;
        var t = Math.floor(e / V.numThumbsInPane);
        return t
    }

    function E() {
        if (1 == V.numPanes) return !1;
        var e = F.getStoredEventData(V.storedEventID),
            t = e.diffTime,
            i = w(),
            n = Math.abs(i - e.startInnerPos);
        return n > 30 ? !0 : n > 5 && t > 300 ? !0 : !1
    }

    function S() {
        var e = F.getStoredEventData(V.storedEventID),
            t = w();
        diffPos = Math.abs(e.startInnerPos - t);
        var i = y(),
            n = Math.round(3 * i / 8);
        return diffPos >= n ? !0 : e.diffTime < 300 && diffPos > 25 ? !0 : !1
    }

    function P() {
        if (1 == V.numPanes) return !0;
        var e = F.isApproveStoredEventClick(V.storedEventID, V.isNavigationVertical);
        return e
    }

    function x(e) {
        if (1 == E()) return !0;
        var t = jQuery(this),
            i = B.getItemByThumb(t);
        W.selectItem(i)
    }

    function j(e) {
        if (1 == V.numPanes) return !0;
        if (1 == V.touchActive) return !0;
        0 == V.isTilesMode && e.preventDefault(), V.touchActive = !0;
        var t = {
            startInnerPos: w()
        };
        F.storeEventData(e, V.storedEventID, t)
    }

    function C() {
        if (0 == U.grid_vertical_scroll_ondrag) return !1;
        if (1 == V.isNavigationVertical) return !1;
        var e = F.handleScrollTop(V.storedEventID);
        return "vert" === e ? !0 : !1
    }

    function A(e) {
        if (0 == V.touchActive) return !0;
        e.preventDefault(), F.updateStoredEventData(e, V.storedEventID);
        var t = F.getStoredEventData(V.storedEventID, V.isNavigationVertical),
            i = C();
        if (i) return !0;
        var n = t.diffMousePos,
            r = t.startInnerPos + n,
            o = n > 0 ? "prev" : "next",
            a = V.arrPanes[V.numPanes - 1];
        0 == U.grid_carousel && r > 0 && "prev" == o && (r /= 3), 0 == U.grid_carousel && -a > r && "next" == o && (r = t.startInnerPos + n / 3), m(r)
    }

    function M(e) {
        if (0 == V.touchActive) return !0;
        F.updateStoredEventData(e, V.storedEventID);
        var t = F.getStoredEventData(V.storedEventID, V.isNavigationVertical);
        if (V.touchActive = !1, 0 == S()) return b(), !0;
        var i = w(),
            n = i - t.startInnerPos,
            r = n > 0 ? "prev" : "next";
        "next" == r ? 0 == U.grid_carousel && Q.isLastPane() ? b() : Q.nextPane() : 0 == U.grid_carousel && Q.isFirstPane() ? b() : Q.prevPane()
    }

    function z() {
        var e = W.getSelectedItem();
        B.setThumbSelected(e.objThumbWrapper), u(e.index)
    }

    function O() {
        if (0 == V.isTilesMode) {
            B.initEvents();
            var e = R.find(".ug-thumb-wrapper");
            e.on("click touchend", x), L.on(W.events.ITEM_CHANGE, z)
        } else Y.initEvents();
        R.bind("mousedown touchstart", j), jQuery("body").bind("mousemove touchmove", A), jQuery(window).add("body").bind("mouseup touchend", M)
    }
    var L, H, k, N, R, G, Q = this,
        D = jQuery(this),
        W = new UniteGalleryMain,
        F = new UGFunctions,
        B = new UGThumbsGeneral,
        Y = new UGTileDesign,
        U = {
            grid_panes_direction: "left",
            grid_num_cols: 2,
            grid_num_rows: 2,
            grid_space_between_cols: 10,
            grid_space_between_rows: 10,
            grid_transition_duration: 300,
            grid_transition_easing: "easeInOutQuad",
            grid_carousel: !1,
            grid_padding: 0,
            grid_vertical_scroll_ondrag: !1
        };
    this.events = {
        PANE_CHANGE: "pane_change"
    };
    var V = {
        eventSizeChange: "thumb_size_change",
        isHorizontal: !1,
        isMaxHeight: !1,
        isMaxWidth: !1,
        gridHeight: 0,
        gridWidth: 0,
        innerWidth: 0,
        innerHeight: 0,
        numPanes: 0,
        arrPanes: 0,
        numThumbs: 0,
        currentPane: 0,
        numThumbsInPane: 0,
        isNavigationVertical: !1,
        touchActive: !1,
        startScrollPos: 0,
        isFirstTimeRun: !0,
        isTilesMode: !1,
        storedEventID: "thumbsgrid"
    };
    this.destroy = function() {
        if (0 == V.isTilesMode) {
            var e = R.find(".ug-thumb-wrapper");
            e.off("click"), e.off("touchend"), L.on(W.events.ITEM_CHANGE), B.destroy()
        } else Y.destroy();
        R.unbind("mousedown"), R.unbind("touchstart"), jQuery("body").unbind("mousemove"), jQuery("body").unbind("touchmove"), jQuery(window).add("body").unbind("touchend"), jQuery(window).add("body").unbind("mouseup"), D.off(Q.events.PANE_CHANGE)
    }, this.__________EXTERNAL_GENERAL_________ = function() {}, this.setThumbUnselected = function(e) {
        B.setThumbUnselected(e)
    }, this.isItemThumbVisible = function(e) {
        var t = e.index,
            i = T(t);
        return i == V.currentPane ? !0 : !1
    }, this.__________EXTERNAL_API_________ = function() {}, this.getNumPanesEstimationByHeight = function(e) {
        if (1 == V.isTilesMode) var t = U.tile_height;
        else var i = B.getOptions(),
            t = i.thumb_height;
        var n = B.getNumThumbs(),
            r = Math.ceil(n / U.grid_num_cols),
            o = r * t + (r - 1) * U.grid_space_between_rows,
            a = Math.ceil(o / e);
        return a
    }, this.getNumPanesEstimationByWidth = function(e) {
        if (V.isTilesMode) var t = U.tile_width;
        else var i = B.getOptions(),
            t = i.thumb_width;
        var n = B.getNumThumbs(),
            r = Math.ceil(n / U.grid_num_rows),
            o = r * t + (r - 1) * U.grid_space_between_cols,
            a = Math.ceil(o / e);
        return a
    }, this.getHeightEstimationByWidth = function(e) {
        if (0 == V.isTilesMode) throw new Error("This function works only with tiles mode");
        var t = B.getNumThumbs(),
            i = F.getNumItemsInSpace(e, U.tile_width, U.grid_space_between_cols),
            n = Math.ceil(t / i);
        n > U.grid_num_rows && (n = U.grid_num_rows);
        var r = F.getSpaceByNumItems(n, U.tile_height, U.grid_space_between_rows);
        return r += 2 * U.grid_padding
    }, this.getElement = function() {
        return R
    }, this.getSize = function() {
        var e = F.getElementSize(R);
        return e
    }, this.getNumPanes = function() {
        return V.numPanes
    }, this.isFirstPane = function() {
        return 0 == V.currentPane ? !0 : !1
    }, this.isLastPane = function() {
        return V.currentPane == V.numPanes - 1 ? !0 : !1
    }, this.getPaneInfo = function() {
        var e = {
            pane: V.currentPane,
            total: V.numPanes
        };
        return e
    }, this.getPane = function() {
        return V.currentPane
    }, this.setWidth = function(e) {
        V.gridWidth = e, V.isHorizontal = !0
    }, this.setMaxWidth = function(e) {
        V.gridWidth = e, V.isMaxWidth = !0, V.isHorizontal = !0
    }, this.setHeight = function(e) {
        V.gridHeight = e, V.isHorizontal = !1
    }, this.setMaxHeight = function(e) {
        V.gridHeight = e, V.isMaxHeight = !0, V.isHorizontal = !1
    }, this.gotoPane = function(e, t) {
        if (0 == f(e)) return !1;
        if (e == V.currentPane) return !1;
        var i = -V.arrPanes[e];
        V.currentPane = e, v(i), D.trigger(Q.events.PANE_CHANGE, e)
    }, this.nextPane = function() {
        var e = V.currentPane + 1;
        if (e >= V.numPanes) {
            if (0 == U.grid_carousel) return !0;
            e = 0
        }
        Q.gotoPane(e, "next")
    }, this.prevPane = function() {
        var e = V.currentPane - 1;
        return 0 > e && (e = V.numPanes - 1, 0 == U.grid_carousel) ? !1 : void Q.gotoPane(e, "prev")
    }, this.attachNextPaneButton = function(e) {
        return F.setButtonOnClick(e, Q.nextPane), 1 == U.grid_carousel ? !0 : (Q.isLastPane() && e.addClass("ug-button-disabled"), void D.on(Q.events.PANE_CHANGE, function() {
            Q.isLastPane() ? e.addClass("ug-button-disabled") : e.removeClass("ug-button-disabled")
        }))
    }, this.attachPrevPaneButton = function(e) {
        return F.setButtonOnClick(e, Q.prevPane), 1 == U.grid_carousel ? !0 : (Q.isFirstPane() && e.addClass("ug-button-disabled"), void D.on(Q.events.PANE_CHANGE, function() {
            Q.isFirstPane() ? e.addClass("ug-button-disabled") : e.removeClass("ug-button-disabled")
        }))
    }, this.attachBullets = function(e) {
        e.setActive(V.currentPane), jQuery(e).on(e.events.BULLET_CLICK, function(t, i) {
            Q.gotoPane(i, "theme"), e.setActive(i)
        }), jQuery(Q).on(Q.events.PANE_CHANGE, function(t, i) {
            e.setActive(i)
        })
    }, this.getObjTileDesign = function() {
        return Y
    }, this.init = function(t, i, n) {
        e(t, i, n)
    }, this.run = function() {
        r()
    }, this.setHtml = function(e) {
        t(e)
    }
}

function UGTiles() {
    function e(e, i) {
        g_objects = e.getObjects(), re = e, q = jQuery(e), K = g_objects.g_objWrapper, $ = g_objects.g_arrItems, ue = jQuery.extend(ue, i), t(), ae.init(e, ue), se = ae.getObjThumbs()
    }

    function t() {
        ue.tiles_min_columns < 1 && (ue.tiles_min_columns = 1), 0 != ue.tiles_max_columns && ue.tiles_max_columns < ue.tiles_min_columns && (ue.tiles_max_columns = ue.tiles_min_columns)
    }

    function i(e) {
        if (!e) var e = K;
        J = e;
        var t = ue.tiles_type;
        e.addClass("ug-tiletype-" + t), ae.setHtml(e), e.children(".ug-thumb-wrapper").hide()
    }

    function n() {
        if (J.addClass("ug-tiles-rest-mode"), de.isTransInited = !0, 1 == ue.tiles_enable_transition) {
            J.addClass("ug-tiles-transit");
            var e = ae.getOptions();
            1 == e.tile_enable_image_effect && 0 == e.tile_image_effect_reverse && J.addClass("ug-tiles-transit-overlays"), de.isTransActive = !0
        }
    }

    function r() {
        return oe.getElementSize(J).width
    }

    function o() {
        return 0 == de.isTransInited ? !1 : (J.addClass("ug-tiles-transition-active"), J.removeClass("ug-tiles-rest-mode"), 0 == de.isTransActive ? !1 : void ae.disableEvents())
    }

    function a() {
        return 0 == de.isTransInited ? !1 : (J.removeClass("ug-tiles-transition-active"), void J.addClass("ug-tiles-rest-mode"))
    }

    function s() {
        1 == de.isTransActive ? (setTimeout(function() {
            ae.enableEvents(), ae.triggerSizeChangeEventAllTiles(), a()
        }, 800), de.handle && clearTimeout(de.handle), de.handle = setTimeout(function() {
            a(), ae.triggerSizeChangeEventAllTiles(), de.handle = null
        }, 2e3)) : (ae.triggerSizeChangeEventAllTiles(), a())
    }

    function l() {
        le.colWidth = (le.availWidth - le.colGap * (le.numCols - 1)) / le.numCols, le.colWidth = Math.floor(le.colWidth), le.totalWidth = oe.getSpaceByNumItems(le.numCols, le.colWidth, le.colGap)
    }

    function u() {
        if (le.colWidth = ue.tiles_col_width, le.minCols = ue.tiles_min_columns, 0 == re.isMobileMode() ? le.colGap = ue.tiles_space_between_cols : le.colGap = ue.tiles_space_between_cols_mobile, le.galleryWidth = r(), le.availWidth = le.galleryWidth, 1 == ue.tiles_include_padding && (le.availWidth = le.galleryWidth - 2 * le.colGap), 1 == ue.tiles_exact_width) le.numCols = oe.getNumItemsInSpace(le.availWidth, le.colWidth, le.colGap), le.maxCols > 0 && le.numCols > le.maxCols && (le.numCols = le.maxCols), le.numCols < le.minCols ? (le.numCols = le.minCols, l()) : le.totalWidth = le.numCols * (le.colWidth + le.colGap) - le.colGap;
        else {
            var e = oe.getNumItemsInSpaceRound(le.availWidth, le.colWidth, le.colGap);
            e < le.minCols ? e = le.minCols : 0 != le.maxCols && e > le.maxCols && (e = le.maxCols), le.numCols = e, l()
        }
        switch (ue.tiles_align) {
            case "center":
            default:
                le.addX = Math.round((le.galleryWidth - le.totalWidth) / 2);
                break;
            case "left":
                le.addX = 0;
                break;
            case "right":
                le.addX = le.galleryWidth - le.totalWidth
        }
        for (le.maxColHeight = 0, le.arrPosx = [], col = 0; col < le.numCols; col++) {
            var t = oe.getColX(col, le.colWidth, le.colGap);
            le.arrPosx[col] = t + le.addX
        }
        le.colHeights = [0]
    }

    function d() {
        var e = 0,
            t = 999999999;
        for (col = 0; col < le.numCols; col++) {
            if (void 0 == le.colHeights[col] || 0 == le.colHeights[col]) return col;
            le.colHeights[col] < t && (e = col, t = le.colHeights[col])
        }
        return e
    }

    function _(e, t, i, n) {
        if (null === n || "undefined" == typeof n) var n = d();
        var r = 0;
        void 0 !== le.colHeights[n] && (r = le.colHeights[n]);
        var o = ae.getTileHeightByWidth(le.colWidth, e);
        if (null === o) {
            if (1 == ue.tiles_enable_transition) throw new Error("Can't know tile height, please turn off transition");
            var a = oe.getElementSize(e);
            o = a.height
        }
        var s = le.arrPosx[n];
        oe.placeElement(e, s, r);
        var l = r + o;
        le.colHeights[n] = l + le.colGap, le.maxColHeight < l && (le.maxColHeight = l), 1 == t && e.show().fadeTo(0, 1), 1 == i && J.height(le.maxColHeight)
    }

    function g(e) {
        e || (e = !1), u();
        var t = se.getThumbs();
        o(), ae.resizeAllTiles(le.colWidth, ae.resizemode.VISIBLE_ELEMENTS);
        for (var i = 0; i < t.length; i++) {
            var n = jQuery(t[i]),
                r = void 0;
            1 == ue.tiles_keep_order && (r = oe.getColByIndex(le.numCols, i)), _(n, e, !1, r)
        }
        s();
        var a = J.height();
        1 == de.isTransActive && a > le.maxColHeight ? setTimeout(function() {
            J.height(le.maxColHeight)
        }, 700) : J.height(le.maxColHeight)
    }

    function c(e) {
        var t = e.index(),
            i = re.getItem(t);
        if (i.ordered_placed === !0) return !1;
        var n = oe.getPrevRowSameColIndex(t, le.numCols);
        if (0 > n) return !0;
        var r = re.getItem(n);
        return r.ordered_placed === !0 ? !0 : !1
    }

    function h(e, t) {
        if (t !== !0) {
            var i = c(e);
            if (0 == i) return !1
        }
        var n = e.index(),
            r = oe.getColByIndex(le.numCols, n),
            o = re.getItem(n);
        ae.resizeTile(e, le.colWidth), _(e, !0, !0, r), o.ordered_placed = !0;
        var a = re.getNumItems(),
            s = oe.getNextRowSameColIndex(n, le.numCols);
        if (s >= a) return !1;
        var l = se.getThumbByIndex(s),
            u = re.getItem(s);
        se.isThumbLoaded(l);
        se.isThumbLoaded(l) && !u.ordered_placed && h(l, !0)
    }

    function p(e, t) {
        if (1 == t) return !1;
        e = jQuery(e);
        var i = jQuery(e).parent();
        se.triggerImageLoadedEvent(i, e), 1 == ue.tiles_keep_order ? h(i) : (ae.resizeTile(i, le.colWidth), _(i, !0, !0))
    }

    function f() {
        var e = se.getThumbs();
        u();
        var t = Math.abs(le.galleryWidth - le.totalWidth);
        if (1 == ue.tiles_set_initial_height && 0 == oe.isScrollbarExists() && 25 > t) {
            var i = (e.length, Math.ceil(e.length / le.numCols)),
                r = i * ue.tiles_col_width * .75;
            J.height(r), u()
        }
        e.fadeTo(0, 0);
        var o = jQuery(J).find("img.ug-thumb-image");
        if (1 == de.isFixedMode) ne.trigger(ie.events.TILES_FIRST_PLACED), g(!0), oe.checkImagesLoaded(o, function() {
            n()
        });
        else {
            var a = le.numCols,
                s = le.galleryWidth,
                l = !1;
            oe.checkImagesLoaded(o, function() {
                u(), (a != le.numCols || s != le.galleryWidth) && g(!1), n()
            }, function(e, t) {
                0 == l && ne.trigger(ie.events.TILES_FIRST_PLACED), l = !0, p(e, t)
            })
        }
    }

    function m() {
        var e = r(),
            t = se.getThumbs(),
            i = ue.tiles_justified_row_height,
            n = [],
            o = 0,
            a = ue.tiles_justified_space_between,
            s = t.length;
        jQuery.each(t, function(e, t) {
            t = jQuery(t);
            var r = se.getItemByThumb(t),
                a = r.thumbWidth,
                s = r.thumbHeight;
            s !== i && (a = Math.floor(r.thumbRatioByWidth * i)), n[e] = a, o += a
        });
        var l = Math.ceil(o / e);
        l > s && (l = s);
        var u = o / l,
            d = [],
            _ = 0,
            g = [],
            c = [],
            h = 0,
            p = 0;
        jQuery.each(t, function(e, t) {
            var i = n[e];
            h + i / 2 > (p + 1) * u && (g[d.length] = _, d.push(c), c = [], _ = 0, p++), h += i, _ += i, c.push(t)
        }), g[d.length] = _, d.push(c);
        var f = [],
            m = [],
            v = 0;
        jQuery.each(d, function(t, r) {
            var o = (r.length, g[t]),
                s = (r.length - 1) * a,
                l = (e - s) / o,
                u = Math.round(i * l);
            v += u, t > 0 && (v += a), m.push(u);
            var d = u / i,
                _ = [],
                c = s;
            jQuery.each(r, function(e, t) {
                var i = jQuery(t),
                    r = i.index(),
                    o = n[r],
                    a = Math.round(o * d);
                _[e] = a, c += a
            });
            var h = c - e;
            jQuery.each(_, function(e, t) {
                return 0 == h ? !1 : (0 > h ? (_[e] = t + 1, h++) : (_[e] = t - 1, h--), void(e == _.length - 1 && 0 != h && (_[e] -= h)))
            }), f[t] = _
        });
        var b = {
            arrRows: d,
            arrRowWidths: f,
            arrRowHeights: m,
            gap: a,
            totalHeight: v
        };
        return b
    }

    function v(e) {
        if (!e) var e = !1;
        var t = r(),
            i = m();
        J.height(i.totalHeight);
        var n = r();
        n != t && (i = m()), o();
        var a = 0,
            l = 0;
        jQuery.each(i.arrRows, function(t, n) {
            var r = i.arrRowWidths[t],
                o = i.arrRowHeights[t],
                s = 0;
            jQuery.each(n, function(t, n) {
                var u = jQuery(n),
                    d = o,
                    _ = r[t];
                ae.resizeTile(u, _, d, ae.resizemode.VISIBLE_ELEMENTS), oe.placeElement(u, s, a), s += _, s > l && (l = s), s += i.gap, 1 == e && jQuery(n).show()
            }), a += o + i.gap
        }), s()
    }

    function b() {
        var e = jQuery(K).find("img.ug-thumb-image"),
            t = se.getThumbs();
        t.fadeTo(0, 0), oe.checkImagesLoaded(e, function() {
            setTimeout(function() {
                v(!0), t.fadeTo(0, 1), ne.trigger(ie.events.TILES_FIRST_PLACED), n()
            })
        }, function(e, t) {
            e = jQuery(e);
            var i = jQuery(e).parent();
            se.triggerImageLoadedEvent(i, e)
        })
    }

    function y() {
        var e = jQuery(K).find("img.ug-thumb-image"),
            t = se.getThumbs();
        t.fadeTo(0, 0), oe.checkImagesLoaded(e, function() {
            w(!0), ne.trigger(ie.events.TILES_FIRST_PLACED), n()
        }, function(e, t) {
            e = jQuery(e);
            var i = jQuery(e).parent();
            se.triggerImageLoadedEvent(i, e)
        })
    }

    function I() {
        var e = r();
        _e.galleryWidth = e, ee = {}, _e.colWidth = ue.tiles_nested_col_width, _e.optimalTileWidth = ue.tiles_nested_optimal_tile_width, _e.currentGap = ue.tiles_space_between_cols, 1 == re.isMobileMode() && (_e.currentGap = ue.tiles_space_between_cols_mobile), null == _e.colWidth ? _e.colWidth = Math.floor(_e.optimalTileWidth / _e.nestedOptimalCols) : _e.optimalTileWidth > _e.colWidth ? _e.nestedOptimalCols = Math.ceil(_e.optimalTileWidth / _e.colWidth) : _e.nestedOptimalCols = 1, _e.maxColumns = oe.getNumItemsInSpace(e, _e.colWidth, _e.currentGap), _e.colWidth = oe.getItemSizeInSpace(e, _e.maxColumns, _e.currentGap), _e.gridY = 0, te = [];
        var t = se.getThumbs();
        switch (t.each(function() {
            var e = jQuery(this),
                t = T(e);
            te.push(t)
        }), _e.optimalTileWidth > _e.colWidth ? _e.nestedOptimalCols = Math.ceil(_e.optimalTileWidth / _e.colWidth) : _e.nestedOptimalCols = 1, _e.totalWidth = _e.maxColumns * (_e.colWidth + _e.currentGap) - _e.currentGap, ue.tiles_align) {
            case "center":
            default:
                _e.addX = Math.round((_e.galleryWidth - _e.totalWidth) / 2);
                break;
            case "left":
                _e.addX = 0;
                break;
            case "right":
                _e.addX = _e.galleryWidth - _e.totalWidth
        }
        _e.maxGridY = 0
    }

    function w(e) {
        var t = r();
        I(), P();
        var i = _e.maxGridY * (_e.colWidth + _e.currentGap) - _e.currentGap;
        J.height(i);
        var n = r();
        n != t && (I(), P()), 0 == ue.tiles_nested_debug && Y(e)
    }

    function T(e) {
        var t, i, n = {},
            r = _e.colWidth,
            o = _e.currentGap,
            a = ae.getTileImageSize(e),
            s = e.index(),
            l = Math.ceil(E(s) * (1 * _e.nestedOptimalCols / 3) + 2 * _e.nestedOptimalCols / 3),
            u = a.width,
            d = a.height,
            _ = u / d;
        return u > d ? (t = l, i = Math.round(t / _), 0 == i && (i = 1)) : (i = l, t = Math.round(i * _), 0 == t && (t = 1)), n.dimWidth = t, n.dimHeight = i, n.width = t * r + o * (t - 1), n.height = i * r + o * (i - 1), n.imgWidth = u, n.imgHeight = d, n.left = 0, n.top = 0, n
    }

    function E(e) {
        return Math.abs(Math.sin(Math.abs(1e3 * Math.sin(e))))
    }

    function S(e, t) {
        if (0 == t) {
            for (var i = _e.currentItem; i < te.length; i++) x(i, !0);
            _e.currentItem = te.length - 1
        } else x(_e.currentItem, !0);
        for (var i = 0; i <= _e.currentItem; i++) U(i, !0);
        _e.currentItem++
    }

    function P(e) {
        if (1 == ue.tiles_nested_debug) return "undefined" == typeof e && (e = !0), S(!0, e), !1;
        for (var t = 0; t < te.length; t++) x(t, !0)
    }

    function x(e, t) {
        if (!t) var t = !1;
        _e.maxColHeight = 0;
        for (var i = oe.getObjectLength(ee), n = _e.gridY; i + 1 >= n; n++) {
            for (var r = 0; r < _e.maxColumns; r++)
                if (0 == Q(_e.gridY) || 0 == F(_e.gridY, r)) {
                    var o = G(r);
                    return void j(e, o, r)
                }
            _e.gridY++
        }
    }

    function j(e, t, i) {
        var n = jQuery.extend(!0, {}, te[e]),
            r = n.dimWidth,
            o = t - n.dimWidth,
            a = _e.nestedOptimalCols,
            s = t <= n.dimWidth || .33 * a >= o || a >= t;
        if (s) H(e, t);
        else if (a >= o) a >= 4 ? 1 == R(Math.floor(t / 2), i) ? H(e, Math.floor(t / 2) + 1) : H(e, Math.floor(t / 2)) : H(objImage, t);
        else if (1 == R(r, i)) switch (r >= a) {
            case !0:
                H(e, r - 1);
                break;
            case !1:
                H(e, r + 1)
        }
        n = jQuery.extend(!0, {}, te[e]);
        var l = O(e, n.dimWidth, i);
        if (_e.columnsValueToEnableHeightResize <= l[0] && _e.maxColumns >= 2 * _e.nestedOptimalCols) {
            var u = L(i, n),
                d = k(e, u.newHeight, !0);
            te[e].dimHeight = d.dimHeight;
            var _ = z(l, d.dimWidth, i),
                g = C(_),
                c = !1;
            g >= 2 && (c = !0), u.newHeight >= n.dimHeight && (n = k(e, u.newHeight, !0));
            var h = A(u.idToResize, u.newHeight, n.dimHeight);
            n.top = _e.gridY, n.left = i, h.push({
                tileID: e,
                sizes: n
            });
            var p = N(h),
                f = N(_);
            return f > p || 1 == c ? void M(h) : void M(_)
        }
        n.left = i, n.top = _e.gridY, te[e] = n, D(e, n, i, _e.gridY), _e.maxGridY = n.top + n.dimHeight
    }

    function C(e) {
        for (var t = 0, i = 0, n = 0; n < e.length - 1; n++) {
            var r = e[n].sizes,
                o = -1,
                a = -1;
            Q(r.top + r.dimHeight) && _e.maxColumns > r.left + r.dimWidth && (o = ee[r.top + r.dimHeight - 1][r.left + r.dimWidth], a = ee[r.top + r.dimHeight][r.left + r.dimWidth]), o != a && t++
        }
        for (var n = 0; n < e.length - 1; n++) {
            var r = e[n].sizes,
                o = -1,
                a = -1;
            Q(r.top + r.dimHeight) && r.left - 1 >= 0 && (o = ee[r.top + r.dimHeight - 1][r.left - 1], a = ee[r.top + r.dimHeight][r.left - 1]), o != a && i++
        }
        return Math.max(i, t)
    }

    function A(e, t, i) {
        var n = te[e],
            r = n.dimHeight,
            o = (n.dimWidth, n.left),
            a = n.top,
            s = (parseInt(a / (_e.colWidth + _e.currentGap)), parseInt(o / (_e.colWidth + _e.currentGap)), r - t + i),
            l = k(e, s, !0),
            u = [];
        return u.push({
            tileID: e,
            sizes: l
        }), u
    }

    function M(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t].sizes,
                n = e[t].tileID;
            te[n] = jQuery.extend(!0, {}, i), D(n, i, i.left, i.top)
        }
    }

    function z(e, t) {
        for (var i = 0, n = 0, r = [], o = 0, a = 0, s = 0; s < e[1].length; s++) {
            var l = e[1][s],
                u = te[e[1][s]];
            if (n += u.dimHeight, 0 != s) i += u.dimHeight, r.push([l, u.dimHeight]);
            else {
                var d = H(l, t, !0);
                i += d.dimHeight, r.push([e[1][s], d.dimHeight])
            }
        }
        o = u.left, a = u.top;
        for (var _ = n, g = [], s = r.length - 1; s >= 0; s--) {
            var c, l = r[s][0];
            0 != s ? (c = Math.max(Math.round(1 * n / 3), Math.floor(r[s][1] * (n / i))), _ -= c, d = k(l, c, !0), d.left = o, d.top = a, g.push({
                tileID: l,
                sizes: d
            }), a += d.dimHeight) : (c = _, d = k(l, c, !0), d.left = o, d.top = a, g.push({
                tileID: l,
                sizes: d
            }))
        }
        return g
    }

    function O(e, t, i) {
        var n = _e.gridY - 1,
            r = 0,
            o = 0,
            a = 1,
            s = [],
            l = [];
        if (s.push(e), n >= 0) {
            for (o = 0; n >= 0;) {
                if (r = ee[n][i], "undefined" != typeof ee[n][i - 1] && ee[n][i - 1] == ee[n][i] || "undefined" != typeof ee[n][i + t] && ee[n][i + t - 1] == ee[n][i + t] || ee[n][i] != ee[n][i + t - 1]) return l.push(a), l.push(s), l;
                o != r && (a++, s.push(r)), n--, o = r
            }
            return l.push(a), l.push(s), l
        }
        return [0, []]
    }

    function L(e, t) {
        var i = 0,
            n = 0,
            r = t.dimWidth,
            o = t.dimHeight,
            a = 0,
            s = 0,
            l = jQuery.map(ee, function(e, t) {
                return [e]
            });
        if ("undefined" == typeof l[_e.gridY] || "undefined" == typeof l[_e.gridY][e - 1]) n = 0;
        else
            for (var u = 0;;) {
                if ("undefined" == typeof ee[_e.gridY + u] || -1 == ee[_e.gridY + u][e - 1]) break;
                a = ee[_e.gridY + u][e - 2], u++, n++
            }
        if ("undefined" == typeof l[_e.gridY] || "undefined" == typeof l[_e.gridY][e + r]) i = 0;
        else
            for (u = 0;;) {
                if ("undefined" == typeof ee[_e.gridY + u] || -1 == ee[_e.gridY + u][e + r]) break;
                s = ee[_e.gridY + u][e + r + 1], u++, i++
            }
        var d = 0,
            _ = 0;
        Math.abs(o - n) < Math.abs(o - i) && 0 != n ? (d = n, _ = a) : 0 != i ? (d = i, _ = s) : d = o;
        var g = {
            newHeight: d,
            idToResize: _
        };
        return g
    }

    function H(e, t, i) {
        i || (i = !1);
        var n = _e.colWidth,
            r = _e.currentGap,
            o = te[e],
            a = o.imgWidth,
            s = o.imgHeight,
            l = a / s;
        if (dimWidth = t, dimHeight = Math.round(dimWidth / l), 1 == i) {
            var u = jQuery.extend(!0, {}, o);
            return u.dimWidth = dimWidth, u.dimHeight = dimHeight, u.width = dimWidth * n + r * (dimWidth - 1), u.height = dimHeight * n + r * (dimHeight - 1), u
        }
        o.dimWidth = dimWidth, o.dimHeight = dimHeight, o.width = dimWidth * n + r * (dimWidth - 1), o.height = dimHeight * n + r * (dimHeight - 1)
    }

    function k(e, t, i) {
        i || (i = !1);
        var n = te[e],
            r = n.dimWidth,
            o = _e.colWidth,
            a = _e.currentGap;
        if (1 == i) {
            var s = jQuery.extend(!0, {}, n);
            return s.dimHeight = t, s.width = r * o + a * (r - 1), s.height = t * o + a * (t - 1), s
        }
        n.dimHeight = t, n.width = r * o + a * (r - 1), n.height = t * o + a * (t - 1)
    }

    function N(e) {
        for (var t = 0, i = 0, n = 0; n < e.length; n++) {
            var r = te[e[n].tileID];
            if (0 == r.dimHeight || 0 == r.height) return;
            resizeVal = r.dimWidth / r.dimHeight / (r.imgWidth / r.imgHeight), resizeVal < 1 && (resizeVal = 1 / resizeVal), t += resizeVal, i++
        }
        return t / i
    }

    function R(e, t) {
        var i = _e.gridY - 1;
        return 0 >= i || 0 == Q(i) ? !1 : ee[i][t + e - 1] != ee[i][t + e] ? !0 : !1
    }

    function G(e) {
        var t = e,
            i = 0;
        if (1 == Q(_e.gridY))
            for (; 0 == F(_e.gridY, t);) i++, t++;
        else i = _e.maxColumns;
        return i
    }

    function Q(e) {
        return "undefined" == typeof ee[e] ? !1 : !0
    }

    function D(e, t, i, n) {
        for (var r = 0; r < t.dimHeight; r++)
            for (var o = 0; o < t.dimWidth; o++) 0 == Q(n + r) && W(n + r), B(n + r, i + o, e)
    }

    function W(e) {
        ee[e] = new Object;
        for (var t = 0; t < _e.maxColumns; t++) ee[e][t] = -1
    }

    function F(e, t) {
        return -1 != ee[e][t]
    }

    function B(e, t, i) {
        ee[e][t] = i
    }

    function Y(e) {
        if (!e) var e = !1;
        o();
        for (var t = 0; t < te.length; t++) U(t, e);
        J.height(_e.maxColHeight), s()
    }

    function U(e, t) {
        var i = se.getThumbByIndex(e),
            n = te[e],
            r = n.top * (_e.colWidth + _e.currentGap),
            o = _e.addX + n.left * (_e.colWidth + _e.currentGap);
        ae.resizeTile(i, n.width, n.height, ae.resizemode.VISIBLE_ELEMENTS), oe.placeElement(i, o, r), r + n.height > _e.maxColHeight && (_e.maxColHeight = r + n.height), 1 == t && i.fadeTo(0, 1)
    }

    function V() {
        if (1 == de.isFirstTimeRun) return !0;
        switch (ue.tiles_type) {
            case "columns":
                g(!1);
                break;
            case "justified":
                v(!1);
                break;
            case "nested":
                var e = re.isMobileMode();
                1 == e ? g(!1) : w(!1)
        }
    }

    function X() {
        q.on(re.events.SIZE_CHANGE, V), ae.initEvents()
    }

    function Z() {
        switch (K.children(".ug-tile").show(), 1 == de.isFirstTimeRun && X(), ae.run(), ue.tiles_type) {
            default:
                case "columns":
                f();
            break;
            case "justified":
                    b();
                break;
            case "nested":
                    y()
        }
        de.isFirstTimeRun = !1
    }
    var q, K, J, $, ee, te, ie = this,
        ne = jQuery(this),
        re = new UniteGalleryMain,
        oe = new UGFunctions,
        ae = new UGTileDesign,
        se = new UGThumbsGeneral,
        le = {},
        ue = {
            tiles_type: "columns",
            tiles_col_width: 250,
            tiles_align: "center",
            tiles_exact_width: !1,
            tiles_space_between_cols: 3,
            tiles_space_between_cols_mobile: 3,
            tiles_include_padding: !0,
            tiles_min_columns: 2,
            tiles_max_columns: 0,
            tiles_keep_order: !1,
            tiles_set_initial_height: !0,
            tiles_justified_row_height: 150,
            tiles_justified_space_between: 3,
            tiles_nested_optimal_tile_width: 250,
            tiles_nested_col_width: null,
            tiles_nested_debug: !1,
            tiles_enable_transition: !0
        };
    this.events = {
        THUMB_SIZE_CHANGE: "thumb_size_change",
        TILES_FIRST_PLACED: "tiles_first_placed"
    };
    var de = {
            isFixedMode: !1,
            isFirstTimeRun: !0,
            handle: null,
            isTransActive: !1,
            isTransInited: !1
        },
        _e = {
            colWidth: null,
            nestedOptimalCols: 5,
            gridY: 0,
            maxColumns: 0,
            columnsValueToEnableHeightResize: 3,
            resizeLeftRightToColumn: !0,
            currentItem: 0,
            currentGap: null,
            optimalTileWidth: null,
            maxGridY: 0
        };
    this.destroy = function() {
        q.off(re.events.SIZE_CHANGE), ae.destroy()
    }, this.setFixedSizeMode = function() {
        de.isFixedMode = !0, ae.setFixedMode()
    }, this.init = function(t, i) {
        e(t, i)
    }, this.setHtml = function(e) {
        i(e)
    }, this.getObjTileDesign = function() {
        return ae
    }, this.run = function() {
        Z()
    }
}

function UGTileDesign() {
    function e(e, n) {
        R = e, z = jQuery(e);
        var r = R.getObjects();
        L = r.g_objWrapper, H = R.getArrItems(), D = jQuery.extend(D, W), D = jQuery.extend(D, n), t(), Q.init(e, D);
        var o = {
                allow_onresize: !1
            },
            a = ["overlay"];
        F.funcCustomTileHtml && (a = []), Q.setCustomThumbs(i, a, o);
        var s = Q.getOptions();
        D = jQuery.extend(D, s), F.ratioByWidth = D.tile_width / D.tile_height, F.ratioByHeight = D.tile_height / D.tile_width, D.tile_size_by == k.sizeby.GLOBAL_RATIO && F.isTextpanelOutside && (F.hasImageContainer = !0)
    }

    function t() {
        if (1 == D.tile_enable_overlay ? (D.thumb_overlay_opacity = D.tile_overlay_opacity, D.thumb_overlay_color = D.tile_overlay_color) : 0 == D.tile_enable_icons ? D.thumb_color_overlay_effect = !1 : D.thumb_overlay_opacity = 0, D.tile_as_link && (D.thumb_wrapper_as_link = !0, D.thumb_link_newpage = D.tile_link_newpage), 1 == D.tile_enable_outline && 0 == D.tile_enable_border && (D.tile_enable_outline = !1), F.tileInnerReduce = 0, D.tile_enable_border && (F.tileInnerReduce = 2 * D.tile_border_width, Q.setThumbInnerReduce(F.tileInnerReduce)), F.isSaparateIcons = !G.isRgbaSupported(), 1 == D.tile_enable_textpanel) {
            switch (D.tile_textpanel_position) {
                case "top":
                    D.tile_textpanel_align = "top";
                case "bottom":
                    F.isTextpanelOutside = !0, D.tile_textpanel_always_on = !0, D.tile_textpanel_offset = 0;
                    break;
                case "inside_top":
                    D.tile_textpanel_align = "top";
                    break;
                case "middle":
                    D.tile_textpanel_align = "middle", D.tile_textpanel_appear_type = "fade"
            }
            0 == D.tile_textpanel_always_on && (F.isSaparateIcons = !0)
        }
        0 != D.tile_textpanel_offset && (D.tile_textpanel_appear_type = "fade", D.tile_textpanel_margin = D.tile_textpanel_offset), "title_and_desc" == D.tile_textpanel_source && (D.tile_textpanel_enable_description = !0, D.tile_textpanel_desc_style_as_title = !0)
    }

    function i(e, t) {
        if (e.addClass("ug-tile"), F.funcCustomTileHtml) return F.funcCustomTileHtml(e, t), !1;
        var i = "";
        1 == F.hasImageContainer && (i += "<div class='ug-image-container ug-trans-enabled'>");
        var n = "ug-thumb-image";
        (0 == D.tile_enable_image_effect || 1 == D.tile_image_effect_reverse) && (n += " ug-trans-enabled");
        var r = G.stripTags(t.title);
        r = G.htmlentitles(r), i += "<img src='" + t.urlThumb + "' alt='" + r + "' class='" + n + "'>", 1 == F.hasImageContainer && (i += "</div>"), e.append(i), D.tile_size_by == k.sizeby.GLOBAL_RATIO && e.fadeTo(0, 0);
        var o = {};
        if (1 == D.tile_enable_background && (o["background-color"] = D.tile_background_color), 1 == D.tile_enable_border && (o["border-width"] = D.tile_border_width + "px", o["border-style"] = "solid", o["border-color"] = D.tile_border_color, D.tile_border_radius && (o["border-radius"] = D.tile_border_radius + "px")), 1 == D.tile_enable_outline && (o.outline = "1px solid " + D.tile_outline_color), 1 == D.tile_enable_shadow) {
            var a = D.tile_shadow_h + "px ";
            a += D.tile_shadow_v + "px ", a += D.tile_shadow_blur + "px ", a += D.tile_shadow_spread + "px ", a += D.tile_shadow_color, o["box-shadow"] = a
        }
        e.css(o);
        var s = "";
        if (D.tile_enable_icons) {
            if (0 == D.tile_as_link && 1 == D.tile_enable_action) {
                var l = "ug-button-play ug-icon-zoom";
                "image" != t.type && (l = "ug-button-play ug-icon-play"), s += "<div class='ug-tile-icon " + l + "' style='display:none'></div>"
            }
            if (t.link && 1 == D.tile_show_link_icon || 1 == D.tile_as_link)
                if (0 == D.tile_as_link) {
                    var d = "";
                    1 == D.tile_link_newpage && (d = " target='_blank'"), s += "<a href='" + t.link + "'" + d + " class='ug-tile-icon ug-icon-link'></a>"
                } else s += "<div class='ug-tile-icon ug-icon-link' style='display:none'></div>";
            var _ = F.isSaparateIcons;
            if (0 == _ && "image" != t.type && 1 == D.tile_videoplay_icon_always_on && (_ = !0), _) var g = e;
            else var g = e.children(".ug-thumb-overlay");
            g.append(s);
            var c = g.children("." + l);
            0 == c.length ? c = null : c.hide();
            var h = g.children(".ug-icon-link");
            0 == h.length ? h = null : h.hide(), h || 1 != D.tile_enable_action || e.addClass("ug-tile-clickable")
        } else 1 == D.tile_enable_action && e.addClass("ug-tile-clickable");
        if (1 == D.tile_enable_image_effect) {
            var p = "";
            0 == D.tile_image_effect_reverse && (p = " ug-trans-enabled");
            var f = "<div class='ug-tile-image-overlay" + p + "' >",
                m = " ug-" + D.tile_image_effect_type + "-effect";
            f += "<img src='" + t.urlThumb + "' alt='" + t.title + "' class='" + m + p + "'>", f += "</div>", e.append(f), 1 == D.tile_image_effect_reverse && e.children(".ug-tile-image-overlay").fadeTo(0, 0)
        }
        if (1 == D.tile_enable_textpanel) {
            var v = new UGTextPanel;
            v.init(R, D, "tile");
            var b = "";
            (1 == D.tile_textpanel_always_on || 1 == F.isTextpanelOutside) && (b = "ug-trans-enabled"), v.appendHTML(e, b);
            var y = t.title,
                I = "";
            switch (D.tile_textpanel_source) {
                case "desc":
                case "description":
                    y = t.description;
                    break;
                case "desc_title":
                    "" != t.description && (y = t.description);
                    break;
                case "title_and_desc":
                    y = t.title, I = t.description
            }
            if (v.setTextPlain(y, I), 0 == D.tile_textpanel_always_on && v.getElement().fadeTo(0, 0), e.data("objTextPanel", v), 1 == D.tile_textpanel_always_on) {
                var w = u(e);
                w.css("z-index", 2)
            }
            if (1 == F.isTextpanelOutside) {
                var T = "<div class='ug-tile-cloneswrapper'></div>";
                e.append(T);
                var E = e.children(".ug-tile-cloneswrapper"),
                    S = new UGTextPanel;
                S.init(R, D, "tile"), S.appendHTML(E), S.setTextPlain(y, I), e.data("objTextPanelClone", S)
            }
        }
        null !== t.addHtml && e.append(t.addHtml)
    }

    function n(e) {
        var t = e.children(".ug-tile-image-overlay");
        return t
    }

    function r(e) {
        var t = e.children(".ug-thumb-overlay");
        return t
    }

    function o(e) {
        if (0 == F.hasImageContainer) return null;
        var t = e.children(".ug-image-container");
        return t
    }

    function a(e) {
        var t = e.find(".ug-tile-image-overlay img");
        return t
    }

    function s(e) {
        var t = e.data("objTextPanel");
        return t
    }

    function l(e) {
        var t = e.data("objTextPanelClone");
        return t
    }

    function u(e) {
        var t = e.children(".ug-textpanel");
        return t
    }

    function d(e) {
        var t = e.find(".ug-tile-cloneswrapper .ug-textpanel");
        if (0 == t.length) throw new Error("text panel cloned element not found");
        return t
    }

    function _(e) {
        if (1 == F.isTextpanelOutside) var t = d(e);
        else var t = u(e);
        if (!t) return 0;
        var i = G.getElementSize(t);
        return i.height
    }

    function g(e) {
        var t = e.find(".ug-icon-link");
        return 0 == t.length ? null : t
    }

    function c(e) {
        var t = F.ratioByHeight;
        switch (D.tile_size_by) {
            default: t = F.ratioByHeight;
            break;
            case k.sizeby.IMAGE_RATIO:
                    if (!e) throw new Error("tile should be given for tile ratio");var i = k.getItemByTile(e);
                if ("undefined" != typeof i.thumbRatioByHeight) {
                    if (0 == i.thumbRatioByHeight) throw trace(i), new Error("the item ratio not inited yet");
                    t = i.thumbRatioByHeight
                }
                break;
            case k.sizeby.CUSTOM:
                    return null
        }
        return t
    }

    function h(e) {
        var t = e.find(".ug-button-play");
        return 0 == t.length ? null : t
    }

    function p(e) {
        return e.hasClass("ug-thumb-over") ? !0 : !1
    }

    function f(e) {
        return e.hasClass("ug-tile-clickable")
    }

    function m(e, t, i, r) {
        var s = n(e),
            l = k.getTileImage(e),
            u = a(e);
        t -= F.tileInnerReduce, i -= F.tileInnerReduce;
        var d = null;
        if (1 == F.isTextpanelOutside) {
            var g = _(e);
            if (i -= g, "top" == D.tile_textpanel_position && (d = g), 1 == F.hasImageContainer) {
                var c = o(e);
                G.setElementSize(c, t, i), null !== d && G.placeElement(c, 0, d)
            }
        }
        if (0 == D.tile_enable_image_effect) G.scaleImageCoverParent(l, t, i), 0 == F.hasImageContainer && null !== d && G.placeElement(l, 0, d);
        else {
            var h = "nothing";
            r === !0 && 0 == F.isTextpanelOutside && (h = 1 == D.tile_image_effect_reverse ? "effect" : "image"), "effect" != h && (G.setElementSize(s, t, i), null !== d && G.placeElement(s, 0, d), G.scaleImageCoverParent(u, t, i)), "image" != h && (1 == F.hasImageContainer ? G.scaleImageCoverParent(l, t, i) : "effect" == h ? (G.scaleImageCoverParent(l, t, i), null !== d && G.placeElement(l, 0, d)) : G.cloneElementSizeAndPos(u, l, !1, null, d))
        }
    }

    function v(e, t, i, n) {
        var r = null;
        if (i && (r = i - F.tileInnerReduce), n && (n -= F.tileInnerReduce), "clone" == t) {
            var o = l(e);
            o.refresh(!0, !0, r);
            var a = k.getItemByTile(e);
            return a.textPanelCloneSizeSet = !0, !1
        }
        var u = s(e);
        if (!u) return !1;
        var d = null;
        1 == F.isTextpanelOutside && (d = _(e)), u.refresh(!1, !0, r, d);
        var g = 1 == D.tile_textpanel_always_on || "fade" == D.tile_textpanel_appear_type;
        if (g)
            if (1 == F.isTextpanelOutside && n && "bottom" == D.tile_textpanel_position) {
                var c = n - d;
                u.positionPanel(c)
            } else u.positionPanel()
    }

    function b(e) {
        var t = (k.getItemByTile(e), h(e)),
            i = g(e),
            n = G.getElementSize(e);
        m(e, n.width, n.height), 1 == D.tile_enable_textpanel && v(e, "regular", n.width, n.height);
        var o = n.width - F.tileInnerReduce,
            a = n.height - F.tileInnerReduce,
            s = 0;
        if (1 == F.isTextpanelOutside) {
            var l = _(e);
            a -= l, "top" == D.tile_textpanel_position && (s = l)
        }
        var d = r(e);
        if (G.setElementSizeAndPosition(d, 0, s, o, a), t || i) {
            var c = 0;
            if (1 == D.tile_enable_textpanel && 0 == F.isTextpanelOutside) {
                var p = u(e),
                    f = G.getElementSize(p);
                f.height > 0 && (c = Math.floor(f.height / 2 * -1))
            }
        }
        if (t && i) {
            var b = G.getElementSize(t),
                y = G.getElementSize(i),
                I = D.tile_space_between_icons,
                w = b.width + I + y.width,
                T = Math.floor((n.width - w) / 2);
            I > T && (I = Math.floor((n.width - b.width - y.width) / 3), w = b.width + I + y.width, T = Math.floor((n.width - w) / 2)), G.placeElement(t, T, "middle", 0, c), G.placeElement(i, T + b.width + I, "middle", 0, c)
        } else t && G.placeElement(t, "center", "middle", 0, c), i && G.placeElement(i, "center", "middle", 0, c);
        t && t.show(), i && i.show()
    }

    function y(e, t) {
        var i = (k.getItemByTile(e), n(e)),
            r = D.thumb_transition_duration;
        if (0 == D.tile_image_effect_reverse) {
            var o = k.getTileImage(e);
            t ? (o.fadeTo(1, 1), i.stop(!0).fadeTo(r, 0)) : i.stop(!0).fadeTo(r, 1)
        } else t ? i.stop(!0).fadeTo(r, 1) : i.stop(!0).fadeTo(r, 0)
    }

    function I(e, t) {
        var i = D.thumb_transition_duration,
            n = u(e);
        if (!n) return !0;
        if ("slide" == D.tile_textpanel_appear_type) {
            var r = G.getElementSize(n);
            if (0 == r.width) return !1;
            var o = -r.height,
                a = 0,
                s = {},
                l = {},
                d = "bottom";
            "inside_top" == D.tile_textpanel_position && (d = "top"), s[d] = o + "px", l[d] = a + "px", 1 == t ? (n.fadeTo(0, 1), 0 == n.is(":animated") && n.css(s), n.stop(!0).animate(l, i)) : n.stop(!0).animate(s, i)
        } else 1 == t ? n.stop(!0).fadeTo(i, 1) : n.stop(!0).fadeTo(i, 0)
    }

    function w(e, t, i) {
        var n = D.thumb_transition_duration;
        i && i === !0 && (n = 0);
        var r = h(e),
            o = g(e),
            a = t ? 1 : 0;
        r && r.stop(!0).fadeTo(n, a), o && o.stop(!0).fadeTo(n, a)
    }

    function T(e, t) {
        if (t = jQuery(t), D.tile_enable_image_effect && y(t, !0), 1 == D.tile_enable_textpanel && 0 == D.tile_textpanel_always_on && I(t, !0), F.isSaparateIcons && 1 == D.tile_enable_icons) {
            var i = 1 == D.thumb_overlay_reverse,
                n = k.getItemByTile(t);
            (1 != D.tile_videoplay_icon_always_on || "image" == n.type) && w(t, i, !1)
        }
    }

    function E(e, t) {
        if (t = jQuery(t), D.tile_enable_image_effect && y(t, !1), 1 == D.tile_enable_textpanel && 0 == D.tile_textpanel_always_on && I(t, !1), 1 == F.isSaparateIcons && 1 == D.tile_enable_icons) {
            var i = 1 == D.thumb_overlay_reverse ? !1 : !0;
            w(t, i, !1)
        }
    }

    function S(e) {
        var t = Q.getThumbs().not(e);
        t.each(function(e, t) {
            Q.setThumbNormalStyle(jQuery(t))
        })
    }

    function P(e, t, i) {
        return t = jQuery(t), 1 == D.tile_visible_before_image && t.data("image_placed") !== !0 && i !== !0 ? !0 : void b(t)
    }

    function x(e, t, i) {
        b(t), i.fadeTo(0, 1), t.data("image_placed", !0)
    }

    function j(e) {
        return 1 == f(e) ? (N.trigger(k.events.TILE_CLICK, e), !0) : void(0 == p(e) && (S(e), Q.setThumbOverStyle(e)))
    }

    function C(e) {
        var t = jQuery(this),
            i = t.prop("tagName").toLowerCase(),
            n = !0;
        if (F.funcParentApproveClick && 0 == F.funcParentApproveClick() && (n = !1), "a" == i) 0 == n && e.preventDefault();
        else if (0 == p(t)) 1 == n && j(t);
        else {
            if (0 == f(t)) return !0;
            1 == n && N.trigger(k.events.TILE_CLICK, t)
        }
    }

    function A(e) {
        e.stopPropagation();
        var t = jQuery(this).parents(".ug-tile"),
            i = !0;
        return F.funcParentApproveClick && 0 == F.funcParentApproveClick() && (i = !1), 0 == p(t) ? (j(t), !0) : 1 == i ? (N.trigger(k.events.TILE_CLICK, t), !1) : void 0
    }

    function M(e) {
        var t = jQuery(this).parents(".ug-tile");
        F.funcParentApproveClick && 0 == F.funcParentApproveClick() && e.preventDefault(), 0 == p(t) && 0 == D.tile_as_link && (e.preventDefault(), j(t))
    }
    var z, O, L, H, k = this,
        N = jQuery(this),
        R = new UniteGalleryMain,
        G = new UGFunctions,
        Q = new UGThumbsGeneral;
    this.resizemode = {
        FULL: "full",
        WRAPPER_ONLY: "wrapper_only",
        VISIBLE_ELEMENTS: "visible_elements"
    }, this.sizeby = {
        GLOBAL_RATIO: "global_ratio",
        TILE_RATIO: "tile_ratio",
        IMAGE_RATIO: "image_ratio",
        CUSTOM: "custom"
    }, this.events = {
        TILE_CLICK: "tile_click"
    };
    var D = {
            tile_width: 250,
            tile_height: 200,
            tile_size_by: k.sizeby.IMAGE_RATIO,
            tile_visible_before_image: !1,
            tile_enable_background: !0,
            tile_background_color: "#F0F0F0",
            tile_enable_border: !1,
            tile_border_width: 3,
            tile_border_color: "#F0F0F0",
            tile_border_radius: 0,
            tile_enable_outline: !1,
            tile_outline_color: "#8B8B8B",
            tile_enable_shadow: !1,
            tile_shadow_h: 1,
            tile_shadow_v: 1,
            tile_shadow_blur: 3,
            tile_shadow_spread: 2,
            tile_shadow_color: "#8B8B8B",
            tile_enable_action: !0,
            tile_as_link: !1,
            tile_link_newpage: !0,
            tile_enable_overlay: !0,
            tile_overlay_opacity: .4,
            tile_overlay_color: "#000000",
            tile_enable_icons: !0,
            tile_show_link_icon: !1,
            tile_videoplay_icon_always_on: !1,
            tile_space_between_icons: 26,
            tile_enable_image_effect: !1,
            tile_image_effect_type: "bw",
            tile_image_effect_reverse: !1,
            tile_enable_textpanel: !1,
            tile_textpanel_source: "title",
            tile_textpanel_always_on: !1,
            tile_textpanel_appear_type: "slide",
            tile_textpanel_position: "inside_bottom",
            tile_textpanel_offset: 0
        },
        W = {
            thumb_color_overlay_effect: !0,
            thumb_overlay_reverse: !0,
            thumb_image_overlay_effect: !1,
            tile_textpanel_enable_description: !1,
            tile_textpanel_bg_opacity: .6,
            tile_textpanel_padding_top: 8,
            tile_textpanel_padding_bottom: 8
        },
        F = {
            ratioByHeight: 0,
            ratioByWidth: 0,
            eventSizeChange: "thumb_size_change",
            funcCustomTileHtml: null,
            funcCustomPositionElements: null,
            funcParentApproveClick: null,
            isSaparateIcons: !1,
            tileInnerReduce: 0,
            isTextpanelOutside: !1,
            hasImageContainer: !1
        };
    this.loadTileImage = function(e) {
        var t = k.getTileImage(e);
        G.checkImagesLoaded(t, null, function(t, i) {
            x(null, e, jQuery(t))
        })
    }, this.setHtml = function(e) {
        O = e, Q.setHtmlThumbs(e)
    }, this.initEvents = function() {
        Q.initEvents(), jQuery(Q).on(Q.events.SETOVERSTYLE, T), jQuery(Q).on(Q.events.SETNORMALSTYLE, E), jQuery(Q).on(Q.events.PLACEIMAGE, x), L.on(F.eventSizeChange, P), O.delegate(".ug-tile .ug-button-play", "click", A), O.delegate(".ug-tile", "click", C), O.delegate(".ug-tile .ug-icon-link", "click", M)
    }, this.destroy = function() {
        if (jQuery(Q).off(Q.events.SETOVERSTYLE), jQuery(Q).off(Q.events.SETNORMALSTYLE), jQuery(Q).off(Q.events.PLACEIMAGE), L.off(F.eventSizeChange), 1 == D.tile_enable_textpanel) {
            var e = Q.getThumbs();
            jQuery.each(e, function(e, t) {
                var i = s(jQuery(t));
                i && i.destroy()
            })
        }
        Q.destroy()
    }, this.init = function(t, i, n) {
        e(t, i, n)
    }, this.setFixedMode = function() {
        D.tile_size_by = k.sizeby.GLOBAL_RATIO, D.tile_visible_before_image = !0
    }, this.setApproveClickFunction = function(e) {
        F.funcParentApproveClick = e
    }, this.resizeTile = function(e, t, i, n) {
        if (1 == F.isTextpanelOutside && v(e, "clone", t), t) {
            if (!i) var i = k.getTileHeightByWidth(t, e)
        } else var t = D.tile_width,
            i = D.tile_height;
        switch (G.setElementSize(e, t, i), n) {
            default:
                case k.resizemode.FULL:
                k.triggerSizeChangeEvent(e, !0);
            break;
            case k.resizemode.WRAPPER_ONLY:
                    return !0;
            case k.resizemode.VISIBLE_ELEMENTS:
                    if (F.funcCustomTileHtml) return k.triggerSizeChangeEvent(e, !0), !0;m(e, t, i, !0),
                1 == D.tile_enable_textpanel && 1 == D.tile_textpanel_always_on && t && v(e, "regular", t, i)
        }
    }, this.resizeAllTiles = function(e, t) {
        var i = null;
        D.tile_size_by == k.sizeby.GLOBAL_RATIO && (i = k.getTileHeightByWidth(e));
        var n = Q.getThumbs();
        n.each(function(n, r) {
            k.resizeTile(jQuery(r), e, i, t)
        })
    }, this.triggerSizeChangeEvent = function(e, t) {
        if (!e) return !1;
        if (!t) var t = !1;
        L.trigger(F.eventSizeChange, [e, t])
    }, this.triggerSizeChangeEventAllTiles = function(e) {
        var t = Q.getThumbs();
        t.each(function() {
            var t = jQuery(this);
            k.triggerSizeChangeEvent(t, e)
        })
    }, this.disableEvents = function() {
        var e = Q.getThumbs();
        e.css("pointer-events", "none")
    }, this.enableEvents = function() {
        var e = Q.getThumbs();
        e.css("pointer-events", "auto")
    }, this.setOptions = function(e) {
        D = jQuery.extend(D, e), Q.setOptions(e)
    }, this.setCustomFunctions = function(e, t) {
        F.funcCustomTileHtml = e, F.funcCustomPositionElements = t
    }, this.run = function() {
        var e = Q.getThumbs();
        D.tile_size_by == k.sizeby.GLOBAL_RATIO && k.resizeAllTiles(D.tile_width, k.resizemode.WRAPPER_ONLY), 1 == D.tile_enable_image_effect && 0 == D.tile_image_effect_reverse && e.children(".ug-thumb-image").fadeTo(0, 0), Q.setHtmlProperties(), 1 == D.tile_visible_before_image && (e.children(".ug-thumb-image").fadeTo(0, 0), Q.loadThumbsImages())
    }, this._____________EXTERNAL_GETTERS____________ = function() {}, this.getObjThumbs = function() {
        return Q
    }, this.getOptions = function() {
        return D
    }, this.getTileImage = function(e) {
        var t = e.find("img.ug-thumb-image");
        return t
    }, this.getItemByTile = function(e) {
        return Q.getItemByThumb(e)
    }, this.getTileHeightByWidth = function(e, t) {
        var i = c(t);
        if (null === i) return null;
        var n = Math.floor((e - F.tileInnerReduce) * i) + F.tileInnerReduce;
        return t && 1 == F.isTextpanelOutside && D.tile_size_by == k.sizeby.IMAGE_RATIO && (n += _(t)), n
    }, this.getTileImageSize = function(e) {
        var t = k.getItemByTile(e);
        if (!t.thumbWidth || !t.thumbHeight) throw new Error("Can't get image size - image not inited.");
        var i = {
            width: t.thumbWidth,
            height: t.thumbHeight
        };
        return i
    }, this.getGlobalTileSize = function() {
        if (D.tile_size_by != k.sizeby.GLOBAL_RATIO) throw new Error("The size has to be global ratio");
        var e = {
            width: D.tile_width,
            height: D.tile_height
        };
        return e
    }
}

function UGAviaControl() {
    function e(e) {
        return 0 == p ? e.pageX : e.pageY
    }

    function t(t) {
        jQuery("body").on("touchstart", function(e) {
            return 0 == f.isControlEnabled ? !0 : void(f.touchEnabled = !0)
        }), jQuery("body").mousemove(function(t) {
            if (0 == f.isControlEnabled) return !0;
            if (1 == f.touchEnabled) return jQuery("body").off("mousemove"), !0;
            f.isMouseInsideStrip = g.ismouseover();
            var i = u.isTouchMotionActive();
            if (1 == f.isMouseInsideStrip && 0 == i) {
                var n = e(t);
                l(n)
            } else a()
        })
    }

    function i(e) {
        var t = h.strip_padding_top,
            i = (h.strip_padding_bottom, g.height()),
            n = c.height();
        if (i > n) return null;
        var r = g.offset(),
            o = r.top,
            a = e - o - t;
        if (0 > a) return null;
        var s = h.thumb_height,
            l = i - h.thumb_height,
            u = l - s;
        s > a && (a = s), a > l && (a = l);
        var d = (a - s) / u,
            _ = (n - i) * d;
        return _ = -1 * Math.round(_) + t
    }

    function n(e) {
        var t = h.strip_padding_left,
            i = h.strip_padding_right,
            n = g.width() - t - i,
            r = c.width();
        if (n > r) return null;
        var o = g.offset(),
            a = o.left,
            s = e - a - t,
            l = h.thumb_width,
            u = n - h.thumb_width,
            d = u - l;
        l > s && (s = l), s > u && (s = u);
        var _ = (s - l) / d,
            p = (r - n) * _;
        return p = -1 * Math.round(p) + t
    }

    function r() {
        if (0 == f.is_strip_moving) return !1;
        var e = u.getInnerStripPos();
        Math.floor(e) == Math.floor(f.strip_finalPos) && a();
        var t, i = Math.abs(f.strip_finalPos - e);
        1 > i ? t = i : (t = i / 4, t > 0 && 1 > t && (t = 1)), f.strip_finalPos < e && (t = -1 * t);
        var n = e + t;
        u.positionInnerStrip(n)
    }

    function o() {
        return 1 == f.isStripMoving ? !1 : (f.isStripMoving = !0, void(f.handle_timeout = setInterval(r, 10)))
    }

    function a() {
        return 0 == f.isStripMoving ? !1 : (f.isStripMoving = !1, void(f.handle_timeout = clearInterval(f.handle_timeout)))
    }

    function s(e) {
        return 0 == p ? n(e) : i(e)
    }

    function l(e) {
        var t = s(e);
        return null === t ? !1 : (f.is_strip_moving = !0, f.strip_finalPos = t, void o())
    }
    var u, d, _, g, c, h, p, f = {
        touchEnabled: !1,
        isMouseInsideStrip: !1,
        strip_finalPos: 0,
        handle_timeout: "",
        isStripMoving: !1,
        isControlEnabled: !0
    };
    this.enable = function() {
        f.isControlEnabled = !0
    }, this.disable = function() {
        f.isControlEnabled = !1
    }, this.init = function(e) {
        u = e, _ = e.getObjects(), d = _.g_gallery, g = _.g_objStrip, c = _.g_objStripInner, h = _.g_options, p = _.isVertical, t()
    }, this.destroy = function() {
        jQuery("body").off("touchstart"), jQuery("body").off("mousemove")
    }
}

function UGSlider() {
    function e(e, t, n) {
        fe = e, n && (ce = n, t = Ie.convertCustomPrefixOptions(t, ce, "slider")), ee = jQuery(e);
        var r = fe.getObjects();
        if (te = r.g_objWrapper, ie = r.g_objThumbs, t.hasOwnProperty("slider_progress_indicator_type") && (Ee.slider_progress_indicator_type = t.slider_progress_indicator_type), "bar" == Ee.slider_progress_indicator_type && (Ee = jQuery.extend(Ee, Se)), t && he.setOptions(t), i(), 1 == Ee.slider_enable_bullets) {
            be = new UGBullets;
            var o = {
                bullets_skin: Ee.slider_bullets_skin,
                bullets_space_between: Ee.slider_bullets_space_between
            };
            be.init(fe, o)
        }
        Ee.slider_enable_text_panel && (Te = new UGTextPanel, Te.init(fe, Ee, "slider")), Ee.slider_enable_zoom_panel && (ge = new UGZoomButtonsPanel, ge.init(he, Ee));
        var a = fe.getGalleryID();
        ye.init(Ee, !1, a)
    }

    function t() {
        if (1 == Pe.isRunOnce) return !1;
        if (Pe.isRunOnce = !0, Ee.slider_background_color) {
            var e = Ee.slider_background_color;
            1 != Ee.slider_background_opacity && (e = Ie.convertHexToRGB(e, Ee.slider_background_opacity)), ne.css("background-color", e)
        } else 1 != Ee.slider_background_opacity && (e = Ie.convertHexToRGB("#000000", Ee.slider_background_opacity), ne.css("background-color", e));
        1 == Ee.slider_control_swipe && (de = new UGTouchSliderControl, de.init(he, Ee)), 1 == Ee.slider_control_zoom && (_e = new UGZoomSliderControl, _e.init(he, Ee)), Te && Te.run(), V()
    }

    function i() {
        var e = fe.getOptions(),
            t = e.gallery_skin;
        "" == Ee.slider_bullets_skin && (Ee.slider_bullets_skin = t), "" == Ee.slider_arrows_skin && (Ee.slider_arrows_skin = t), "" == Ee.slider_zoompanel_skin && (Ee.slider_zoompanel_skin = t), "" == Ee.slider_play_button_skin && (Ee.slider_play_button_skin = t), "" == Ee.slider_fullscreen_button_skin && (Ee.slider_fullscreen_button_skin = t), Ee.video_enable_closebutton = Ee.slider_video_enable_closebutton, "zoom" != e.gallery_mousewheel_role && (Ee.slider_zoom_mousewheel = !1)
    }

    function n(e, t) {
        var i = "ug-type-square";
        return "round" == Ee.slider_videoplay_button_type && (i = "ug-type-round"), html = "", html += "<div class='ug-slide-wrapper ug-slide" + t + "'>", html += "<div class='ug-item-wrapper'></div>", html += "<div class='ug-slider-preloader " + e + "'></div>", html += "<div class='ug-button-videoplay " + i + "' style='display:none'></div>", html += "</div>", html
    }

    function r(e) {
        e && (te = e);
        var t = X(),
            i = (fe.getOptions(), "<div class='ug-slider-wrapper'>");
        if (i += "<div class='ug-slider-inner'>", i += n(t, 1), i += n(t, 2), i += n(t, 3), i += "</div>", 1 == Ee.slider_enable_arrows && (i += "<div class='ug-slider-control ug-arrow-left ug-skin-" + Ee.slider_arrows_skin + "'></div>", i += "<div class='ug-slider-control ug-arrow-right ug-skin-" + Ee.slider_arrows_skin + "'></div>"), 1 == Ee.slider_enable_play_button && (i += "<div class='ug-slider-control ug-button-play ug-skin-" + Ee.slider_play_button_skin + "'></div>"), 1 == Ee.slider_enable_fullscreen_button && (i += "<div class='ug-slider-control ug-button-fullscreen ug-skin-" + Ee.slider_fullscreen_button_skin + "'></div>"), i += "</div>", te.append(i), ne = te.children(".ug-slider-wrapper"), re = ne.children(".ug-slider-inner"), oe = re.children(".ug-slide1"), ae = re.children(".ug-slide2"), se = re.children(".ug-slide3"), oe.data("slidenum", 1), ae.data("slidenum", 2), se.data("slidenum", 3), be && be.appendHTML(ne), 1 == Ee.slider_enable_arrows && (le = ne.children(".ug-arrow-left"), ue = ne.children(".ug-arrow-right")), 1 == Ee.slider_enable_play_button && (me = ne.children(".ug-button-play")), 1 == Ee.slider_enable_fullscreen_button && (ve = ne.children(".ug-button-fullscreen")), 1 == Ee.slider_enable_progress_indicator) {
            we = Ie.initProgressIndicator(Ee.slider_progress_indicator_type, Ee, ne);
            var r = we.getType();
            "bar" == r && "pie" == Ee.slider_progress_indicator_type && (Ee.slider_progress_indicator_type = "bar", Ee = jQuery.extend(Ee, Se)), fe.setProgressIndicator(we)
        }
        if (1 == Ee.slider_enable_text_panel && (Te.appendHTML(ne), 0 == Ee.slider_textpanel_always_on)) {
            var o = Te.getElement();
            o.hide().data("isHidden", !0), Pe.isTextPanelSaparateHover = !0
        }
        1 == Ee.slider_enable_zoom_panel && ge.appendHTML(ne), ye.setHtml(re)
    }

    function o(e) {
        var t = K(e);
        Ie.placeElementInParentCenter(t);
        var i = J(e);
        Ie.placeElementInParentCenter(i)
    }

    function a() {
        if (be && (objBullets = be.getElement(), Ie.placeElement(objBullets, Ee.slider_bullets_align_hor, Ee.slider_bullets_align_vert, Ee.slider_bullets_offset_hor, Ee.slider_bullets_offset_vert), Ie.placeElement(objBullets, Ee.slider_bullets_align_hor, Ee.slider_bullets_align_vert, Ee.slider_bullets_offset_hor, Ee.slider_bullets_offset_vert)), 1 == Ee.slider_enable_arrows && (Ie.placeElement(le, Ee.slider_arrow_left_align_hor, Ee.slider_arrow_left_align_vert, Ee.slider_arrow_left_offset_hor, Ee.slider_arrow_left_offset_vert), Ie.placeElement(ue, Ee.slider_arrow_right_align_hor, Ee.slider_arrow_left_align_vert, Ee.slider_arrow_right_offset_hor, Ee.slider_arrow_right_offset_vert)), 0 == Ee.slider_controls_always_on && A(!0), we) {
            var e = we.getElement();
            if ("bar" == Ee.slider_progress_indicator_type) {
                var t = ne.width();
                we.setSize(t), Ie.placeElement(e, "left", Ee.slider_progress_indicator_align_vert, 0, Ee.slider_progress_indicator_offset_vert)
            } else Ie.placeElement(e, Ee.slider_progress_indicator_align_hor, Ee.slider_progress_indicator_align_vert, Ee.slider_progress_indicator_offset_hor, Ee.slider_progress_indicator_offset_vert)
        }
        Te && Te.positionPanel(), s(), o(oe), o(ae), o(se), j()
    }

    function s() {
        if (me && Ie.placeElement(me, Ee.slider_play_button_align_hor, Ee.slider_play_button_align_vert, Ee.slider_play_button_offset_hor, Ee.slider_play_button_offset_vert), ve && Ie.placeElement(ve, Ee.slider_fullscreen_button_align_hor, Ee.slider_fullscreen_button_align_vert, Ee.slider_fullscreen_button_offset_hor, Ee.slider_fullscreen_button_offset_vert), ge) {
            var e = ge.getElement();
            Ie.placeElement(e, Ee.slider_zoompanel_align_hor, Ee.slider_zoompanel_align_vert, Ee.slider_zoompanel_offset_hor, Ee.slider_zoompanel_offset_vert)
        }
    }

    function l() {
        var e, t, i, n, r = he.getSlidesReference(),
            o = 0,
            a = 0,
            s = 0;
        i = he.isSlideHasItem(r.objNextSlide), n = he.isSlideHasItem(r.objPrevSlide), n ? (s = r.objPrevSlide.outerWidth(), r.objPrevSlide.css("z-index", 1)) : r.objPrevSlide.hide(), t = s + r.objCurrentSlide.outerWidth(), e = t, i ? (e = t + r.objNextSlide.outerWidth(), r.objPrevSlide.css("z-index", 2)) : r.objNextSlide.hide(), r.objCurrentSlide.css("z-index", 3), Ie.placeElement(r.objCurrentSlide, s, o), re.css({
            left: -s + "px",
            width: e + "px"
        }), n && (Ie.placeElement(r.objPrevSlide, a, o), Ie.showElement(r.objPrevSlide)), i && (Ie.showElement(r.objNextSlide), Ie.placeElement(r.objNextSlide, t, o))
    }

    function u(e) {
        var t = e.data("index");
        if (void 0 === t || null == t) return !1;
        var i = fe.getItem(t);
        return i ? void p(e, i) : !1
    }

    function d(e) {
        e.stop(!0).show(100)
    }

    function _(e) {
        e.stop(!0).hide(100)
    }

    function g(e, t) {
        var i = {};
        1 == Ee.slider_image_border && (i["border-style"] = "solid", i["border-width"] = Ee.slider_image_border_width + "px", i["border-color"] = Ee.slider_image_border_color, i["border-radius"] = Ee.slider_image_border_radius), "image" != t && 1 == Ee.slider_video_constantsize && (i["background-color"] = "#000000"), 1 == Ee.slider_image_shadow && (i["box-shadow"] = "3px 3px 10px 0px #353535"), e.css(i)
    }

    function c(e, t) {
        var i = Ee.slider_video_constantsize_width,
            n = Ee.slider_video_constantsize_height,
            r = Ee.slider_video_constantsize_scalemode;
        Ie.scaleImageExactSizeInParent(e, t.imageWidth, t.imageHeight, i, n, r)
    }

    function h(e, t, i) {
        var n = e.children(".ug-item-wrapper"),
            r = K(e);
        if ("undefined" == typeof t.urlImage || "" == t.urlImage) throw new Error("The slide don't have big image defined ( data-image='imageurl' ). Please check gallery items.", "showbig");
        var o = t.urlImage,
            a = e.data("urlImage");
        e.data("urlImage", o);
        var s = he.getScaleMode(e),
            l = he.getSlideType(e);
        if (objPadding = he.getObjImagePadding(), a == o && i !== !0) {
            var u = n.children("img");
            (0 == t.imageWidth || 0 == t.imageHeight) && fe.checkFillImageSize(u, t), "image" != l && 1 == Ee.slider_video_constantsize ? c(u, t) : Ie.scaleImageFitParent(u, t.imageWidth, t.imageHeight, s, objPadding), pe.trigger(he.events.AFTER_PUT_IMAGE, e)
        } else u = Ie.placeImageInsideParent(o, n, t.imageWidth, t.imageHeight, s, objPadding), 1 == t.isBigImageLoaded ? (u.fadeTo(0, 1), _(r), "image" != l && 1 == Ee.slider_video_constantsize && c(u, t), pe.trigger(he.events.AFTER_PUT_IMAGE, e)) : (u.fadeTo(0, 0), d(r), e.data("isLoading", !0), he.isSlideCurrent(e) && pe.trigger(he.events.CURRENTSLIDE_LOAD_START), u.data("itemIndex", t.index), u.on("load", function() {
            var e = jQuery(this),
                t = e.data("itemIndex");
            e.fadeTo(0, 1);
            var i = e.parent().parent(),
                n = he.getSlideType(i),
                r = K(i),
                o = he.getObjImagePadding(),
                a = he.getScaleMode(i);
            _(r), i.data("isLoading", !1), he.isSlideCurrent(i) && pe.trigger(he.events.CURRENTSLIDE_LOAD_END), fe.onItemBigImageLoaded(null, e);
            var s = fe.getItem(t);
            "image" != n && 1 == Ee.slider_video_constantsize ? c(e, s) : Ie.scaleImageFitParent(e, s.imageWidth, s.imageHeight, a, o), e.fadeTo(0, 1), pe.trigger(he.events.AFTER_PUT_IMAGE, i)
        }));
        u && g(u, l)
    }

    function p(e, t) {
        try {
            var i = e.children(".ug-item-wrapper");
            if (null == t) return i.html(""), e.removeData("index"), e.removeData("type"), e.removeData("urlImage"), !1;
            e.data("index");
            e.data("index", t.index), e.data("type", t.type), 1 == Ee.slider_enable_links && "image" == t.type && (t.link ? e.addClass("ug-slide-clickable") : e.removeClass("ug-slide-clickable")), h(e, t);
            var n = J(e);
            switch (t.type) {
                case "image":
                    n.hide();
                    break;
                default:
                    n.show()
            }
        } catch (r) {
            throw "undefined" != typeof r.fileName && "showbig" == r.fileName && fe.showErrorMessageReplaceGallery(r.message), i.html(""), new Error(r)
        }
    }

    function f() {
        if (!Te) return !1;
        if (1 == v()) return !1;
        var e = Te.getElement(),
            t = 0;
        (1 == Pe.isTextPanelSaparateHover || 1 == Ee.slider_textpanel_always_on) && (t = Ee.slider_controls_appear_duration), e.stop().fadeTo(t, 0), e.data("isHidden", !0)
    }

    function m() {
        if (!Te) return !1;
        if (0 == v()) return !1;
        var e = Te.getElement(),
            t = 0;
        (1 == Pe.isTextPanelSaparateHover || 1 == Ee.slider_textpanel_always_on) && (e.show(), Te.positionElements(), t = Ee.slider_controls_appear_duration), e.stop().show().fadeTo(t, 1), e.data("isHidden", !1)
    }

    function v() {
        var e = Te.getElement(),
            t = e.data("isHidden");
        return t === !1 ? !1 : !0
    }

    function b(e, t) {
        if (void 0 == t) var t = he.getCurrentSlide();
        var i = he.getSlideType(t);
        if (i != e) throw new Error("Wrong slide type: " + i + ", should be: " + e);
        return !0
    }

    function y() {
        var e = he.getCurrentSlide(),
            t = he.getSlideImage(e),
            i = Ie.getElementSize(e),
            n = i.left,
            r = i.top;
        if (1 == Ee.slider_video_constantsize) {
            var o = Ie.getElementSize(t);
            n += o.left, r += o.top
        } else n += Ee.slider_video_padding_left, r += Ee.slider_video_padding_top;
        ye.setPosition(n, r)
    }

    function I() {
        var e = Ee.slider_video_constantsize_width,
            t = Ee.slider_video_constantsize_height;
        ye.setSize(e, t);
        var i = ye.getObject();
        g(i)
    }

    function w(e, t, i) {
        pe.trigger(he.events.TRANSITION_START);
        var n = Ee.slider_transition;
        switch (i && (n = i), he.stopSlideAction(null, !0), n) {
            default:
                case "fade":
                S(t);
            break;
            case "slide":
                    T(e, t);
                break;
            case "lightbox_open":
                    S(t, !1, !0)
        }
    }

    function T(e, t) {
        var i = he.isAnimating();
        if (1 == i) return Pe.itemWaiting = t, !0;
        null != Pe.itemWaiting && (Pe.itemWaiting = null);
        var n = he.getSlidesReference();
        switch (e) {
            case "right":
                p(n.objPrevSlide, t), l();
                var r = Ie.getElementSize(n.objPrevSlide),
                    o = -r.left;
                he.switchSlideNums("right");
                break;
            case "left":
                p(n.objNextSlide, t), l();
                var a = Ie.getElementSize(n.objNextSlide),
                    o = -a.left;
                he.switchSlideNums("left");
                break;
            default:
                throw new Error("wrong direction: " + e)
        }
        var s = Ee.slider_transition_speed,
            u = Ee.slider_transition_easing,
            d = {
                duration: s,
                easing: u,
                queue: !1,
                always: function() {
                    if (he.stopSlideAction(), ye.hide(), null != Pe.itemWaiting) {
                        var e = q(Pe.itemWaiting);
                        T(e, Pe.itemWaiting)
                    } else he.placeNabourItems(), pe.trigger(he.events.TRANSITION_END)
                }
            };
        re.animate({
            left: o + "px"
        }, d)
    }

    function E(e, t, i) {
        i ? e.fadeTo(Ee.slider_transition_speed, t, i) : e.fadeTo(Ee.slider_transition_speed, t)
    }

    function S(e, t, i) {
        if (!t) var t = !1;
        var n = he.getSlidesReference();
        p(n.objNextSlide, e);
        var r = Ie.getElementSize(n.objCurrentSlide);
        Ie.placeElement(n.objNextSlide, r.left, r.top);
        var o = Pe.numCurrent;
        if (Pe.numCurrent = Pe.numNext, Pe.numNext = o, pe.trigger(he.events.ITEM_CHANGED), n.objNextSlide.stop(!0), n.objCurrentSlide.stop(!0), 1 == t) n.objCurrentSlide.fadeTo(0, 0), n.objNextSlide.fadeTo(0, 1), he.placeNabourItems(), pe.trigger(he.events.TRANSITION_END), i !== !0 && ye.hide();
        else {
            if (n.objNextSlide.fadeTo(0, 0), E(n.objCurrentSlide, 0, function() {
                    he.placeNabourItems(), pe.trigger(he.events.TRANSITION_END), i !== !0 && ye.hide()
                }), 1 == ye.isVisible()) {
                var a = ye.getObject();
                E(a, 0)
            }
            E(n.objNextSlide, 1)
        }
    }

    function P() {
        1 == Ee.slider_fullscreen_button_mobilehide && ve && ve.hide(), 1 == Ee.slider_play_button_mobilehide && me && me.hide(), 1 == Ee.slider_zoompanel_mobilehide && ge && ge.getElement().hide()
    }

    function x() {
        1 == Ee.slider_fullscreen_button_mobilehide && ve && ve.show(), 1 == Ee.slider_play_button_mobilehide && me && me.show(), 1 == Ee.slider_zoompanel_mobilehide && ge && ge.getElement().show()
    }

    function j() {
        var e = fe.isMobileMode();
        e ? P() : x()
    }

    function C() {
        var e = ne.children(".ug-slider-control");
        return e
    }

    function A(e) {
        if (0 == Ie.isTimePassed("sliderControlsToggle")) return !1;
        if (0 == Pe.isControlsVisible) return !1;
        if (!e) var e = !1;
        var t = C();
        e === !0 ? t.stop().fadeTo(0, 0).hide() : t.stop().fadeTo(Ee.slider_controls_appear_duration, 0, function() {
            t.hide()
        }), Pe.isControlsVisible = !1
    }

    function M(e) {
        if (0 == Ie.isTimePassed("sliderControlsToggle")) return !1;
        if (1 == Pe.isControlsVisible) return !0;
        if (!e) var e = !1;
        var t = C();
        e === !0 ? t.stop().show() : (t.stop().show().fadeTo(0, 0), t.fadeTo(Ee.slider_controls_appear_duration, 1)), Pe.isControlsVisible = !0
    }

    function z() {
        0 == Pe.isControlsVisible ? M() : A()
    }

    function O(e) {
        if (e == Pe.currentControlsMode) return !1;
        switch (e) {
            case "image":
                ge && ge.getElement().show();
                break;
            case "video":
                ge && ge.getElement().hide();
                break;
            default:
                throw new Error("wrong controld mode: " + e)
        }
        Pe.currentControlsMode = e
    }

    function L(e, t, i) {
        var n = fe.getSelectedItem();
        he.setItem(n, !1, i);
        var r = n.index;
        be && be.setActive(r), Te && 0 == Pe.isTextPanelSaparateHover && m(), O("image" == n.type ? "image" : "video")
    }

    function H(e, t) {
        fe.selectItem(t)
    }

    function k(e) {
        return de && 0 == de.isTapEventOccured(e) ? !0 : void pe.trigger(he.events.CLICK, e)
    }

    function N() {
        var e = he.getCurrentSlide(),
            t = e.hasClass("ug-slide-clickable"),
            i = he.getCurrentItem();
        return t ? (0 == Ee.slider_links_newpage ? location.href = i.link : window.open(i.link, "_blank"), !0) : void(0 == Ee.slider_controls_always_on && 1 == Ee.slider_controls_appear_ontap && 1 == he.isCurrentSlideType("image") && (z(), Te && 1 == Ee.slider_textpanel_always_on && he.isCurrentSlideType("image") && he.isCurrentSlideImageFit() && m()))
    }

    function R(e) {
        Te && he.isCurrentSlideType("image") && 0 == he.isCurrentSlideImageFit() && f()
    }

    function G() {
        M()
    }

    function Q() {
        A()
    }

    function D(e) {
        var t = e.parent();
        he.startSlideAction(t)
    }

    function W() {
        fe.isPlayMode() && fe.pausePlaying(), pe.trigger(he.events.ACTION_START)
    }

    function F() {
        fe.isPlayMode() && fe.continuePlaying(), pe.trigger(he.events.ACTION_END)
    }

    function B(e, t, i) {
        oe.data("index") == t && (objItem = fe.getItem(t), h(oe, objItem, !0)), ae.data("index") == t && (objItem = fe.getItem(t), h(ae, objItem, !0)), se.data("index") == t && (objItem = fe.getItem(t), h(se, objItem, !0))
    }

    function Y(e, t) {
        t = jQuery(t);
        var i = he.getSlideImage(t),
            n = J(t),
            r = Ie.getElementSize(i);
        Ie.placeElement(n, "center", "middle", r.left, r.top, i)
    }

    function U(e) {
        var t = J(e);
        Ie.addClassOnHover(t), Ie.setButtonOnClick(t, D)
    }

    function V() {
        ee.on(fe.events.ITEM_IMAGE_UPDATED, B), ee.on(fe.events.ITEM_CHANGE, L), be && jQuery(be).on(be.events.BULLET_CLICK, H), 1 == Ee.slider_enable_arrows && (Ie.addClassOnHover(ue, "ug-arrow-hover"), Ie.addClassOnHover(le, "ug-arrow-hover"), fe.setNextButton(ue), fe.setPrevButton(le)), 0 == Ee.slider_controls_always_on && ne.hover(G, Q), ne.on("touchend click", k), pe.on(he.events.CLICK, N), Te && 1 == Pe.isTextPanelSaparateHover && ne.hover(m, f), me && (Ie.addClassOnHover(me, "ug-button-hover"), fe.setPlayButton(me)), ve && (Ie.addClassOnHover(ve, "ug-button-hover"), fe.setFullScreenToggleButton(ve)), _e && pe.on(he.events.ZOOM_CHANGE, R), ge && ge.initEvents(), ye.initEvents(), jQuery(ye).on(ye.events.SHOW, W), jQuery(ye).on(ye.events.HIDE, F), U(oe), U(ae), U(se), pe.on(he.events.AFTER_PUT_IMAGE, Y), ne.delegate(".ug-item-wrapper img", "mouseenter", function(e) {
            pe.trigger(he.events.IMAGE_MOUSEENTER)
        }), ne.delegate(".ug-item-wrapper img", "mouseleave", function(e) {
            var t = he.isMouseInsideSlideImage(e);
            0 == t && pe.trigger(he.events.IMAGE_MOUSELEAVE)
        })
    }

    function X() {
        var e;
        switch (Ee.slider_loader_type) {
            default:
                case 1:
                e = "ug-loader1";
            break;
            case 2:
                    e = "ug-loader2";
                break;
            case 3:
                    e = "ug-loader3";
                break;
            case 4:
                    e = "ug-loader4";
                break;
            case 5:
                    e = "ug-loader5";
                break;
            case 6:
                    e = "ug-loader6";
                break;
            case 7:
                    e = "ug-loader7";
                break;
            case 8:
                    e = "ug-loader8";
                break;
            case 9:
                    e = "ug-loader9"
        }
        return "black" == Ee.slider_loader_color && (e += " ug-loader-black"), e
    }

    function Z(e) {
        switch (e) {
            case 1:
                return oe;
            case 2:
                return ae;
            case 3:
                return se;
            default:
                throw new Error("wrong num: " + e)
        }
    }

    function q(e) {
        var t = he.getSlidesReference(),
            i = t.objCurrentSlide.data("index"),
            n = e.index,
            r = "left";
        return i > n && (r = "right"), r
    }

    function K(e) {
        if (!e) var e = he.getCurrentSlide();
        var t = e.children(".ug-slider-preloader");
        return t
    }

    function J(e) {
        var t = e.children(".ug-button-videoplay");
        return t
    }

    function $(e) {
        if (!e) var e = he.getCurrentSlide();
        var t = e.data("index");
        if (void 0 == t) return null;
        var i = fe.getItem(t);
        return i
    }
    var ee, te, ie, ne, re, oe, ae, se, le, ue, de, _e, ge, ce, he = this,
        pe = jQuery(he),
        fe = new UniteGalleryMain,
        me = null,
        ve = null,
        be = null,
        ye = new UGVideoPlayer,
        Ie = new UGFunctions,
        we = null,
        Te = null;
    this.events = {
        ITEM_CHANGED: "item_changed",
        BEFORE_SWITCH_SLIDES: "before_switch",
        BEFORE_RETURN: "before_return",
        AFTER_RETURN: "after_return",
        ZOOM_START: "slider_zoom_start",
        ZOOM_END: "slider_zoom_end",
        ZOOMING: "slider_zooming",
        ZOOM_CHANGE: "slider_zoom_change",
        START_DRAG: "start_drag",
        AFTER_DRAG_CHANGE: "after_drag_change",
        ACTION_START: "action_start",
        ACTION_END: "action_end",
        CLICK: "slider_click",
        TRANSITION_START: "slider_transition_start",
        TRANSITION_END: "slider_transition_end",
        AFTER_PUT_IMAGE: "after_put_image",
        IMAGE_MOUSEENTER: "slider_image_mouseenter",
        IMAGE_MOUSELEAVE: "slider_image_mouseleave",
        CURRENTSLIDE_LOAD_START: "slider_current_loadstart",
        CURRENTSLIDE_LOAD_END: "slider_current_loadend"
    };
    var Ee = {
            slider_scale_mode: "fill",
            slider_scale_mode_media: "fill",
            slider_scale_mode_fullscreen: "down",
            slider_item_padding_top: 0,
            slider_item_padding_bottom: 0,
            slider_item_padding_left: 0,
            slider_item_padding_right: 0,
            slider_background_color: "",
            slider_background_opacity: 1,
            slider_image_padding_top: 0,
            slider_image_padding_bottom: 0,
            slider_image_padding_left: 0,
            slider_image_padding_right: 0,
            slider_image_border: !1,
            slider_image_border_width: 10,
            slider_image_border_color: "#ffffff",
            slider_image_border_radius: 0,
            slider_image_shadow: !1,
            slider_video_constantsize: !1,
            slider_video_constantsize_scalemode: "fit",
            slider_video_constantsize_width: 854,
            slider_video_constantsize_height: 480,
            slider_video_padding_top: 0,
            slider_video_padding_bottom: 0,
            slider_video_padding_left: 0,
            slider_video_padding_right: 0,
            slider_video_enable_closebutton: !0,
            slider_transition: "slide",
            slider_transition_speed: 300,
            slider_transition_easing: "easeInOutQuad",
            slider_control_swipe: !0,
            slider_control_zoom: !0,
            slider_zoom_mousewheel: !0,
            slider_vertical_scroll_ondrag: !1,
            slider_loader_type: 1,
            slider_loader_color: "white",
            slider_enable_links: !0,
            slider_links_newpage: !1,
            slider_enable_bullets: !1,
            slider_bullets_skin: "",
            slider_bullets_space_between: -1,
            slider_bullets_align_hor: "center",
            slider_bullets_align_vert: "bottom",
            slider_bullets_offset_hor: 0,
            slider_bullets_offset_vert: 10,
            slider_enable_arrows: !0,
            slider_arrows_skin: "",
            slider_arrow_left_align_hor: "left",
            slider_arrow_left_align_vert: "middle",
            slider_arrow_left_offset_hor: 20,
            slider_arrow_left_offset_vert: 0,
            slider_arrow_right_align_hor: "right",
            slider_arrow_right_align_vert: "middle",
            slider_arrow_right_offset_hor: 20,
            slider_arrow_right_offset_vert: 0,
            slider_enable_progress_indicator: !0,
            slider_progress_indicator_type: "pie",
            slider_progress_indicator_align_hor: "right",
            slider_progress_indicator_align_vert: "top",
            slider_progress_indicator_offset_hor: 10,
            slider_progress_indicator_offset_vert: 10,
            slider_enable_play_button: !0,
            slider_play_button_skin: "",
            slider_play_button_align_hor: "left",
            slider_play_button_align_vert: "top",
            slider_play_button_offset_hor: 50,
            slider_play_button_offset_vert: 9,
            slider_play_button_mobilehide: !1,
            slider_enable_fullscreen_button: !0,
            slider_fullscreen_button_skin: "",
            slider_fullscreen_button_align_hor: "left",
            slider_fullscreen_button_align_vert: "top",
            slider_fullscreen_button_offset_hor: 11,
            slider_fullscreen_button_offset_vert: 9,
            slider_fullscreen_button_mobilehide: !1,
            slider_enable_zoom_panel: !0,
            slider_zoompanel_skin: "",
            slider_zoompanel_align_hor: "left",
            slider_zoompanel_align_vert: "top",
            slider_zoompanel_offset_hor: 12,
            slider_zoompanel_offset_vert: 92,
            slider_zoompanel_mobilehide: !1,
            slider_controls_always_on: !1,
            slider_controls_appear_ontap: !0,
            slider_controls_appear_duration: 300,
            slider_enable_text_panel: !0,
            slider_textpanel_always_on: !0,
            slider_videoplay_button_type: "square"
        },
        Se = {
            slider_progress_indicator_align_hor: "left",
            slider_progress_indicator_align_vert: "bottom",
            slider_progress_indicator_offset_hor: 0,
            slider_progress_indicator_offset_vert: 0
        },
        Pe = {
            isRunOnce: !1,
            isTextPanelSaparateHover: !1,
            numPrev: 1,
            numCurrent: 2,
            numNext: 3,
            isControlsVisible: !0,
            currentControlsMode: "image"
        };
    this.switchSlideNums = function(e) {
        switch (pe.trigger(he.events.BEFORE_SWITCH_SLIDES), e) {
            case "left":
                var t = Pe.numCurrent;
                Pe.numCurrent = Pe.numNext, Pe.numNext = Pe.numPrev, Pe.numPrev = t;
                break;
            case "right":
                var t = Pe.numCurrent;
                Pe.numCurrent = Pe.numPrev, Pe.numPrev = Pe.numNext, Pe.numNext = t;
                break;
            default:
                throw new Error("wrong direction: " + e)
        }
        pe.trigger(he.events.ITEM_CHANGED)
    }, this.destroy = function() {
        pe.off(he.events.AFTER_PUT_IMAGE), ee.off(fe.events.ITEM_IMAGE_UPDATED), ee.off(fe.events.ITEM_CHANGE), be && jQuery(be).on(be.events.BULLET_CLICK), ne.off("mouseenter"), ne.off("mouseleave"), ne.off("touchend"), ne.off("click"), pe.off(he.events.CLICK), _e && pe.off(he.events.ZOOM_CHANGE), pe.off(he.events.BEFORE_SWITCH_SLIDES), jQuery(ye).off(ye.events.SHOW), jQuery(ye).off(ye.events.HIDE), ye.destroy(), ne.undelegate(".ug-item-wrapper img", "mouseenter"), ne.undelegate(".ug-item-wrapper img", "mouseleave")
    }, this.________EXTERNAL_GENERAL___________ = function() {}, this.init = function(t, i, n) {
        e(t, i, n)
    }, this.getSlideImage = function(e) {
        if (!e) var e = he.getCurrentSlide();
        var t = e.find(".ug-item-wrapper img");
        return t
    }, this.setHtml = function(e) {
        r(e)
    }, this.run = function() {
        t()
    }, this.isInnerInPlace = function() {
        var e = he.getSlidesReference(),
            t = Ie.getElementSize(e.objCurrentSlide),
            i = -t.left,
            n = Ie.getElementSize(re);
        return i == n.left ? !0 : !1
    }, this.isAnimating = function() {
        var e = re.is(":animated");
        return e
    }, this.isSlideCurrent = function(e) {
        var t = e.data("slidenum");
        return Pe.numCurrent == t ? !0 : !1
    }, this.isSlideHasItem = function(e) {
        var t = e.data("index");
        return void 0 === t || null === t ? !1 : !0
    }, this.getObjImagePadding = function() {
        var e = {
            padding_top: Ee.slider_image_padding_top,
            padding_bottom: Ee.slider_image_padding_bottom,
            padding_left: Ee.slider_image_padding_left,
            padding_right: Ee.slider_image_padding_right
        };
        return e
    }, this.getSlidesReference = function() {
        var e = {
            objPrevSlide: Z(Pe.numPrev),
            objNextSlide: Z(Pe.numNext),
            objCurrentSlide: Z(Pe.numCurrent)
        };
        return e
    }, this.getCurrentSlide = function() {
        var e = he.getSlidesReference();
        return e.objCurrentSlide
    }, this.getCurrentItemIndex = function() {
        var e = he.getSlidesReference(),
            t = e.objCurrentSlide.data("index");
        return (null === t || void 0 === t) && (t = -1), t
    }, this.getCurrentItem = function() {
        var e = he.getCurrentItemIndex();
        if (-1 == e) return null;
        var t = fe.getItem(e);
        return t
    }, this.getSlideType = function(e) {
        void 0 == e && (e = he.getCurrentSlide());
        var t = e.data("type");
        return t
    }, this.isMouseInsideSlideImage = function(e) {
        var t = he.getSlideImage(),
            i = Ie.getMousePosition(e);
        void 0 === i.pageX && (i = de.getLastMousePos());
        var n = Ie.getMouseElementPoint(i, t),
            r = Ie.getElementSize(t);
        return isMouseInside = Ie.isPointInsideElement(n, r), isMouseInside
    }, this.isCurrentSlideType = function(e) {
        var t = he.getSlideType();
        return t == e ? !0 : !1
    }, this.isCurrentSlideLoadingImage = function() {
        var e = he.getCurrentSlide(),
            t = e.data("isLoading");
        return t === !0 ? !0 : !1
    }, this.setItem = function(e, t, i) {
        var n = he.getSlidesReference(),
            r = n.objCurrentSlide.data("index"),
            o = e.index;
        if (o == r) return !0;
        var a = void 0 == r;
        if (a) p(n.objCurrentSlide, e), he.placeNabourItems();
        else {
            var s = "left";
            fe.getNumItems();
            "next" == i ? s = "left" : "prev" == i || r > o ? s = "right" : r > o && (s = "right"), w(s, e, t)
        }
    }, this.placeNabourItems = function() {
        var e = he.getSlidesReference(),
            t = e.objCurrentSlide.data("index"),
            i = fe.getPrevItem(t),
            n = fe.getNextItem(t);
        p(e.objNextSlide, n), p(e.objPrevSlide, i), l()
    }, this.________EXTERNAL_API___________ = function() {}, this.stopSlideAction = function(e, t) {
        e || (e = he.getCurrentSlide()), t === !0 ? ye.pause() : ye.hide()
    }, this.startSlideAction = function(e) {
        e || (e = he.getCurrentSlide());
        var t = $(e);
        if ("image" == t.type) return !0;
        switch (1 == Ee.slider_video_constantsize && I(), y(), ye.show(), t.type) {
            case "youtube":
                ye.playYoutube(t.videoid);
                break;
            case "vimeo":
                ye.playVimeo(t.videoid);
                break;
            case "html5video":
                ye.playHtml5Video(t.videoogv, t.videowebm, t.videomp4, t.urlImage);
                break;
            case "soundcloud":
                ye.playSoundCloud(t.trackid);
                break;
            case "wistia":
                ye.playWistia(t.videoid)
        }
    }, this.getScaleMode = function(e) {
        if (!e) var e = he.getCurrentSlide();
        var t = he.getSlideType(e);
        return "image" != t ? Ee.slider_scale_mode_media : Ee.slider_scale_mode == Ee.slider_scale_mode_fullscreen ? Ee.slider_scale_mode : 1 == fe.isFullScreen() ? Ee.slider_scale_mode_fullscreen : Ee.slider_scale_mode
    }, this.getObjects = function() {
        var e = {
            g_objSlider: ne,
            g_objInner: re,
            g_options: Ee,
            g_objZoomSlider: _e
        };
        return e
    }, this.getObjZoom = function() {
        return _e
    }, this.getOptions = function() {
        return Ee
    }, this.getElement = function() {
        return ne
    }, this.getVideoObject = function() {
        return ye
    }, this.isCurrentSlideImageFit = function() {
        var e = he.getCurrentSlide();
        he.getSlideType(e);
        b("image", e);
        var t = he.getSlideImage(e);
        if (0 == t.length) return !1;
        var i = Ie.isImageFitParent(t);
        return i
    }, this.isCurrentImageInPlace = function() {
        var e = he.getSlideImage();
        if (0 == e.length) return !1;
        var t = he.getScaleMode(),
            i = he.getObjImagePadding(),
            n = $(),
            r = e.parent(),
            o = Ie.getImageInsideParentData(r, n.imageWidth, n.imageHeight, t, i),
            a = Ie.getElementSize(e);
        return o.imageWidth == a.width ? !0 : !1
    }, this.isSlideActionActive = function() {
        return ye.isVisible()
    }, this.isSwiping = function() {
        if (!de) return !1;
        var e = de.isTouchActive();
        return e
    }, this.isPreloading = function() {
        var e = K();
        return e.is(":visible") ? !0 : !1
    }, this.setOptions = function(e) {
        ce && (e = Ie.convertCustomPrefixOptions(e, ce, "slider")), Ee = jQuery.extend(Ee, e)
    }, this.setSize = function(e, t) {
        if (0 > e || 0 > t) return !0;
        var i = {};
        i.width = e + "px", i.height = t + "px", ne.css(i);
        var n = {};
        n.height = t + "px", n.top = "0px", n.left = "0px", re.css(n);
        var r = {};
        r.height = t + "px", r.width = e + "px", oe.css(r), ae.css(r), se.css(r);
        var o = e - Ee.slider_item_padding_left - Ee.slider_item_padding_right,
            s = t - Ee.slider_item_padding_top - Ee.slider_item_padding_bottom,
            d = {};
        d.width = o + "px", d.height = s + "px", d.top = Ee.slider_item_padding_top + "px", d.left = Ee.slider_item_padding_left + "px", ne.find(".ug-item-wrapper").css(d), Te && Te.setSizeByParent(), a(), u(oe), u(ae), u(se), l();
        var _ = he.getSlideType();
        if ("image" != _ && 1 == Ee.slider_video_constantsize) I(), y();
        else {
            var g = e - Ee.slider_video_padding_left - Ee.slider_video_padding_right,
                c = t - Ee.slider_video_padding_top - Ee.slider_video_padding_bottom;
            ye.setSize(g, c)
        }
    }, this.refreshSlideItems = function() {
        return 1 == he.isAnimating() ? !0 : (u(oe), u(ae), u(se), void l())
    }, this.isMouseOver = function() {
        return ne.ismouseover()
    }, this.setPosition = function(e, t) {
        Ie.placeElement(ne, e, t)
    }, this.zoomIn = function() {
        return _e ? void _e.zoomIn() : !0
    }, this.zoomOut = function() {
        return _e ? void _e.zoomOut() : !0
    }, this.zoomBack = function() {
        return _e ? void _e.zoomBack() : !0
    }
}

function UGTextPanel() {
    function e(e, t) {
        if (!t) var t = v.textpanel_padding_top;
        var i = t;
        if (d) {
            var n = i;
            f.placeElement(d, 0, n);
            var o = f.getElementSize(d),
                i = o.bottom
        }
        var a = "";
        if (_ && (a = jQuery.trim(_.text())), "" != a) {
            var s = i;
            d && (s += v.textpanel_padding_title_description), f.placeElement(_, 0, s);
            var l = f.getElementSize(_);
            i = l.bottom
        }
        if (!v.textpanel_height && 1 == b.setInternalHeight) {
            var u = i + v.textpanel_padding_bottom;
            r(u, e)
        }
    }

    function t() {
        var e = 0;
        if (d && (e += d.outerHeight()), _) {
            var t = "";
            _ && (t = jQuery.trim(_.text())), "" != t && (d && (e += v.textpanel_padding_title_description), e += _.outerHeight())
        }
        return e
    }

    function i() {
        var i = t(),
            n = (c.height() - i) / 2;
        e(!1, n)
    }

    function n() {
        var i = t(),
            n = c.height() - i - v.textpanel_padding_bottom;
        e(!1, n)
    }

    function r(e, t) {
        if (!t) var t = !1;
        if (1 == t) {
            if (g) {
                var i = g.height();
                e > i && g.height(e)
            }
            var n = {
                height: e + "px"
            };
            l.add(c).animate(n, v.textpanel_fade_duration)
        } else g && g.height(e), l.add(c).height(e)
    }

    function o() {
        if (1 == v.textpanel_enable_bg) {
            g = l.children(".ug-textpanel-bg"), g.fadeTo(0, v.textpanel_bg_opacity);
            var e = {
                "background-color": v.textpanel_bg_color
            };
            e = jQuery.extend(e, v.textpanel_bg_css), g.css(e)
        }
        if (1 == v.textpanel_enable_title) {
            d = c.children(".ug-textpanel-title");
            var t = {};
            null !== v.textpanel_title_color && (t.color = v.textpanel_title_color), null !== v.textpanel_title_font_family && (t["font-family"] = v.textpanel_title_font_family), null !== v.textpanel_title_text_align && (t["text-align"] = v.textpanel_title_text_align), null !== v.textpanel_title_font_size && (t["font-size"] = v.textpanel_title_font_size + "px"), null !== v.textpanel_title_bold && (v.textpanel_title_bold === !0 ? t["font-weight"] = "bold" : t["font-weight"] = "normal"), v.textpanel_css_title && (t = jQuery.extend(t, v.textpanel_css_title)), d.css(t)
        }
        if (1 == v.textpanel_enable_description) {
            _ = c.children(".ug-textpanel-description");
            var i = {};
            null !== v.textpanel_desc_color && (i.color = v.textpanel_desc_color), null !== v.textpanel_desc_font_family && (i["font-family"] = v.textpanel_desc_font_family), null !== v.textpanel_desc_text_align && (i["text-align"] = v.textpanel_desc_text_align), null !== v.textpanel_desc_font_size && (i["font-size"] = v.textpanel_desc_font_size + "px"), null !== v.textpanel_desc_bold && (v.textpanel_desc_bold === !0 ? i["font-weight"] = "bold" : i["font-weight"] = "normal"), v.textpanel_css_title && (i = jQuery.extend(i, v.textpanel_css_description)), _.css(i)
        }
    }

    function a() {
        var e = h.getSelectedItem();
        p.setText(e.title, e.description)
    }

    function s() {
        jQuery(h).on(h.events.ITEM_CHANGE, a)
    }
    var l, u, d, _, g, c, h, p = this,
        f = new UGFunctions,
        m = "",
        v = {
            textpanel_align: "bottom",
            textpanel_margin: 0,
            textpanel_text_valign: "middle",
            textpanel_padding_top: 10,
            textpanel_padding_bottom: 10,
            textpanel_height: null,
            textpanel_padding_title_description: 5,
            textpanel_padding_right: 11,
            textpanel_padding_left: 11,
            textpanel_fade_duration: 200,
            textpanel_enable_title: !0,
            textpanel_enable_description: !0,
            textpanel_enable_bg: !0,
            textpanel_bg_color: "#000000",
            textpanel_bg_opacity: .4,
            textpanel_title_color: null,
            textpanel_title_font_family: null,
            textpanel_title_text_align: null,
            textpanel_title_font_size: null,
            textpanel_title_bold: null,
            textpanel_css_title: {},
            textpanel_desc_color: null,
            textpanel_desc_font_family: null,
            textpanel_desc_text_align: null,
            textpanel_desc_font_size: null,
            textpanel_desc_bold: null,
            textpanel_css_description: {},
            textpanel_desc_style_as_title: !1,
            textpanel_bg_css: {}
        },
        b = {
            isFirstTime: !0,
            setInternalHeight: !0
        };
    this.positionElements = function(t) {
        if (!v.textpanel_height || "top" == v.textpanel_text_valign) return e(t), !1;
        switch (v.textpanel_text_valign) {
            default:
                case "top":
                e(!1);
            break;
            case "bottom":
                    n();
                break;
            case "center":
                    case "middle":
                    i()
        }
    }, this.init = function(e, t, i) {
        if (h = e, i && (m = i, t = f.convertCustomPrefixOptions(t, m, "textpanel")), t && (v = jQuery.extend(v, t)), 0 == v.textpanel_enable_title && 0 == v.textpanel_enable_description) throw new Error("Textpanel Error: The title or description must be enabled");
        v.textpanel_height && v.textpanel_height < 0 && (v.textpanel_height = null), 1 == v.textpanel_desc_style_as_title && (v.textpanel_desc_color || (v.textpanel_desc_color = v.textpanel_title_color), v.textpanel_desc_bold || (v.textpanel_desc_bold = v.textpanel_title_bold), v.textpanel_desc_font_family || (v.textpanel_desc_font_family = v.textpanel_title_font_family), v.textpanel_desc_font_size || (v.textpanel_desc_font_size = v.textpanel_title_font_size), v.textpanel_desc_text_align || (v.textpanel_desc_text_align = v.textpanel_title_text_align))
    }, this.appendHTML = function(e, t) {
        u = e, t = t ? " " + t : "";
        var i = "<div class='ug-textpanel" + t + "'>";
        1 == v.textpanel_enable_bg && (i += "<div class='ug-textpanel-bg" + t + "'></div>"), i += "<div class='ug-textpanel-textwrapper" + t + "'>", 1 == v.textpanel_enable_title && (i += "<div class='ug-textpanel-title" + t + "'></div>"), 1 == v.textpanel_enable_description && (i += "<div class='ug-textpanel-description" + t + "'></div>"), i += "</div></div>", e.append(i), l = e.children(".ug-textpanel"), c = l.children(".ug-textpanel-textwrapper"), o()
    }, this.destroy = function() {
        jQuery(h).off(h.events.ITEM_CHANGE)
    }, this.run = function() {
        p.setSizeByParent(), s()
    }, this.setPanelSize = function(e, t) {
        if (b.setInternalHeight = !0, t) b.setInternalHeight = !1;
        else var t = 80;
        v.textpanel_height && (t = v.textpanel_height), l.width(e), l.height(t), g && (g.width(e), g.height(t));
        var i = e - v.textpanel_padding_left - v.textpanel_padding_right,
            n = v.textpanel_padding_left;
        f.setElementSizeAndPosition(c, n, 0, i, t), d && d.width(i), _ && _.width(i), 0 == b.isFirstTime && p.positionElements(!1)
    }, this.setSizeByParent = function() {
        var e = f.getElementSize(u);
        p.setPanelSize(e.width)
    }, this.setTextPlain = function(e, t) {
        d && d.html(e), _ && _.html(t)
    }, this.setText = function(e, t) {
        1 == b.isFirstTime ? (p.setTextPlain(e, t), b.isFirstTime = !1, p.positionElements(!1)) : c.stop().fadeTo(v.textpanel_fade_duration, 0, function() {
            p.setTextPlain(e, t), p.positionElements(!0), jQuery(this).fadeTo(v.textpanel_fade_duration, 1)
        })
    }, this.positionPanel = function(e, t) {
        var i = {};
        if (void 0 !== e && null !== e) i.top = e, i.bottom = "auto";
        else switch (v.textpanel_align) {
            case "top":
                i.top = v.textpanel_margin + "px";
                break;
            case "bottom":
                i.top = "auto", i.bottom = v.textpanel_margin + "px";
                break;
            case "middle":
                i.top = f.getElementRelativePos(l, "middle", v.textpanel_margin)
        }
        void 0 !== t && null !== t && (i.left = t), l.css(i)
    }, this.setOptions = function(e) {
        m && (e = f.convertCustomPrefixOptions(e, m, "textpanel")), v = jQuery.extend(v, e)
    }, this.getElement = function() {
        return l
    }, this.getSize = function() {
        var e = f.getElementSize(l);
        return e
    }, this.refresh = function(e, t, i, n) {
        o(), i ? p.setPanelSize(i, n) : p.setSizeByParent(), p.positionElements(!1), t !== !0 && p.positionPanel(), e === !0 && p.show()
    }, this.hide = function() {
        l.hide()
    }, this.show = function() {
        l.show()
    }, this.getOptions = function() {
        return v
    }, this.getOption = function(e) {
        return 0 == v.hasOwnProperty(e) ? null : v[e]
    }
}

function UGZoomButtonsPanel() {
    function e(e) {
        return e ? e.hasClass("ug-zoompanel-button-disabled") ? !0 : !1 : !0
    }

    function t(e) {
        e && e.addClass("ug-zoompanel-button-disabled")
    }

    function i(e) {
        e && e.removeClass("ug-zoompanel-button-disabled")
    }

    function n() {
        if (0 == d.isCurrentSlideType("image")) return !0;
        var n = d.isCurrentSlideImageFit();
        1 == n ? 0 == e(s) && (t(s), t(l)) : 1 == e(s) && (i(s), i(l))
    }
    var r, o, a, s, l, u = this,
        d = new UGSlider,
        _ = new UGFunctions,
        g = {
            slider_zoompanel_skin: ""
        };
    this.init = function(e, t) {
        d = e, t && (g = jQuery.extend(g, t))
    }, this.appendHTML = function(e) {
        o = e;
        var t = "<div class='ug-slider-control ug-zoompanel ug-skin-" + g.slider_zoompanel_skin + "'>";
        t += "<div class='ug-zoompanel-button ug-zoompanel-plus'></div>", t += "<div class='ug-zoompanel-button ug-zoompanel-minus ug-zoompanel-button-disabled'></div>", t += "<div class='ug-zoompanel-button ug-zoompanel-return ug-zoompanel-button-disabled'></div>", t += "</div>", e.append(t), r = e.children(".ug-zoompanel"), a = r.children(".ug-zoompanel-plus"), s = r.children(".ug-zoompanel-minus"), l = r.children(".ug-zoompanel-return")
    }, this.setObjects = function(e, t, i) {
        a = e, s = t, l = i, s && s.addClass("ug-zoompanel-button-disabled"), l && l.addClass("ug-zoompanel-button-disabled")
    }, this.getElement = function() {
        return r
    }, u.initEvents = function() {
        _.addClassOnHover(a, "ug-button-hover"), _.addClassOnHover(s, "ug-button-hover"), _.addClassOnHover(l, "ug-button-hover"), _.setButtonOnClick(a, function() {
            return 1 == e(a) ? !0 : void d.zoomIn()
        }), _.setButtonOnClick(s, function() {
            return 1 == e(s) ? !0 : void d.zoomOut()
        }), _.setButtonOnClick(l, function() {
            return 1 == e(l) ? !0 : void d.zoomBack()
        }), jQuery(d).on(d.events.ZOOM_CHANGE, n), jQuery(d).on(d.events.ITEM_CHANGED, n)
    }
}

function UGBullets() {
    function e() {
        var e = "",
            t = ""; - 1 != c.bullets_space_between && (t = " style='margin-left:" + c.bullets_space_between + "px'");
        for (var i = 0; l > i; i++) e += 0 == i ? "<div class='ug-bullet'></div>" : "<div class='ug-bullet'" + t + "></div>";
        o.html(e)
    }

    function t(e) {
        if (1 == s.isActive(e)) return !0;
        var t = e.index();
        jQuery(s).trigger(s.events.BULLET_CLICK, t)
    }

    function i() {
        var e = o.children(".ug-bullet");
        _.setButtonOnClick(e, t), e.on("mousedown mouseup", function(e) {
            return !1
        })
    }

    function n(e) {
        if (0 > e || e >= l) throw new Error("wrong bullet index: " + e)
    }

    function r() {
        if (1 == g.isInited) return !0;
        throw new Error("The bullets are not inited!")
    }
    var o, a, s = this,
        l = 0,
        u = new UniteGalleryMain,
        d = -1,
        _ = new UGFunctions,
        g = {
            isInited: !1
        },
        c = {
            bullets_skin: "",
            bullets_addclass: "",
            bullets_space_between: -1
        };
    this.events = {
        BULLET_CLICK: "bullet_click"
    }, this.init = function(e, t, i) {
        u = e, l = i ? i : u.getNumItems(), g.isInited = !0, c = jQuery.extend(c, t), "" == c.bullets_skin && (c.bullets_skin = c.gallery_skin)
    }, this.appendHTML = function(t) {
        a = t, r();
        var n = "";
        "" != c.bullets_addclass && (n = " " + c.bullets_addclass);
        var s = "<div class='ug-slider-control ug-bullets ug-skin-" + c.bullets_skin + n + "'>";
        s += "</div>", o = jQuery(s), t.append(o), e(), i()
    }, this.updateNumBullets = function(t) {
        l = t, e(), i()
    }, this.getElement = function() {
        return o
    }, this.setActive = function(e) {
        r(), n(e);
        var t = o.children(".ug-bullet");
        t.removeClass("ug-bullet-active");
        var i = jQuery(t[e]);
        i.addClass("ug-bullet-active"), d = e
    }, this.isActive = function(e) {
        if (n(e), "number" != typeof e) var t = e;
        else var t = o.children(".ug-bullet")[e];
        return t.hasClass("ug-bullet-active") ? !0 : !1
    }
}

function UGProgressBar() {
    var e, t, i = this,
        n = 0,
        r = new UGFunctions,
        o = {
            slider_progressbar_color: "#ffffff",
            slider_progressbar_opacity: .6,
            slider_progressbar_line_width: 5
        };
    this.put = function(i, n) {
        n && (o = jQuery.extend(o, n)), i.append("<div class='ug-progress-bar'><div class='ug-progress-bar-inner'></div></div>"), e = i.children(".ug-progress-bar"), t = e.children(".ug-progress-bar-inner"), t.css("background-color", o.slider_progressbar_color), e.height(o.slider_progressbar_line_width), t.height(o.slider_progressbar_line_width), t.width("0%");
        var r = o.slider_progressbar_opacity,
            a = t[0];
        a.style.opacity = r, a.style.filter = "alpha(opacity=" + 100 * r + ")"
    }, this.putHidden = function(t, n) {
        i.put(t, n), e.hide()
    }, this.getElement = function() {
        return e
    }, this.setSize = function(n) {
        e.width(n), t.width(n), i.draw()
    }, this.setPosition = function(t, i, n, o) {
        r.placeElement(e, t, i, n, o)
    }, this.draw = function() {
        var e = 100 * n;
        t.width(e + "%")
    }, this.setProgress = function(e) {
        n = r.normalizePercent(e), i.draw()
    }, this.getType = function() {
        return "bar"
    }
}

function UGProgressPie() {
    function e(e) {
        if (!e) var e = 0;
        var t = Math.min(a.slider_progresspie_width, a.slider_progresspie_height) / 2,
            n = i[0].getContext("2d");
        0 == r && (r = !0, n.rotate(1.5 * Math.PI), n.translate(-2 * t, 0)), n.clearRect(0, 0, a.slider_progresspie_width, a.slider_progresspie_height);
        var o = a.slider_progresspie_width / 2,
            s = a.slider_progresspie_height / 2,
            l = 0,
            u = e * Math.PI * 2;
        if (1 == a.slider_progresspie_type_fill) n.beginPath(), n.moveTo(o, s), n.arc(o, s, t, l, u), n.lineTo(o, s), n.fillStyle = a.slider_progresspie_color1, n.fill(), n.closePath();
        else {
            n.globalCompositeOperation = "source-over", n.beginPath(), n.moveTo(o, s), n.arc(o, s, t, l, u), n.lineTo(o, s), n.fillStyle = a.slider_progresspie_color1, n.fill(), n.closePath(), n.globalCompositeOperation = "destination-out";
            var d = t - a.slider_progresspie_stroke_width;
            n.beginPath(), n.moveTo(o, s), n.arc(o, s, d, l, u), n.lineTo(o, s), n.fillStyle = a.slider_progresspie_color1, n.fill(), n.closePath()
        }
        1 == a.slider_progresspie_type_fill && (l = u, u = 2 * Math.PI, n.beginPath(), n.arc(o, s, t, l, u), n.lineTo(o, s), n.fillStyle = a.slider_progresspie_color2, n.fill(), n.closePath())
    }
    var t, i, n = this,
        r = !1,
        o = new UGFunctions,
        a = {
            slider_progresspie_type_fill: !1,
            slider_progresspie_color1: "#B5B5B5",
            slider_progresspie_color2: "#E5E5E5",
            slider_progresspie_stroke_width: 6,
            slider_progresspie_width: 30,
            slider_progresspie_height: 30
        };
    this.put = function(e, t) {
        t && (a = jQuery.extend(a, t)), e.append("<canvas class='ug-canvas-pie' width='" + a.slider_progresspie_width + "' height='" + a.slider_progresspie_height + "'></canvas>"), i = e.children(".ug-canvas-pie")
    }, this.putHidden = function(t, r) {
        n.put(t, r), e(.1), i.hide()
    }, this.getElement = function() {
        return i
    }, this.setPosition = function(e, t) {
        o.placeElement(i, e, t)
    }, this.getSize = function() {
        var e = {
            width: a.slider_progresspie_width,
            height: a.slider_progresspie_height
        };
        return e
    }, this.setProgress = function(i) {
        i = o.normalizePercent(i), t = i, e(i)
    }, this.getType = function() {
        return "pie"
    }
}

function UGTouchSliderControl() {
    function e(e) {
        if (!e) var e = m.getSlidesReference();
        var t = v.getElementSize(e.objCurrentSlide),
            i = -t.left,
            n = v.getElementSize(h),
            r = i - n.left;
        return r
    }

    function t() {
        var t = m.getSlidesReference(),
            i = e(t),
            n = Math.round(3 * t.objCurrentSlide.width() / 8);
        if (Math.abs(i) >= n) return !0;
        var r = Math.abs(b.lastMouseX - b.startMouseX);
        Math.abs(b.lastMouseY - b.startMouseY);
        if (20 > r) return !1;
        var o = jQuery.now(),
            a = o - b.startTime;
        return 500 > a ? !0 : !1
    }

    function i(e) {
        if (1 == m.isInnerInPlace()) return !1;
        if (p.trigger(m.events.BEFORE_RETURN), !e) var e = m.getSlidesReference();
        var t = v.getElementSize(e.objCurrentSlide),
            i = -t.left;
        h.animate({
            left: i + "px"
        }, {
            duration: f.slider_transition_return_speed,
            easing: f.slider_transition_continuedrag_easing,
            queue: !1,
            progress: function(e, t, n) {
                if (1 == b.isDragVideo) {
                    var r = v.getElementSize(h),
                        o = r.left,
                        a = o - i,
                        s = b.videoStartX + a;
                    b.videoObject.css("left", s)
                }
            },
            complete: function() {
                p.trigger(m.events.AFTER_RETURN)
            }
        })
    }

    function n(e) {
        m.getVideoObject().hide(), m.switchSlideNums(e), m.placeNabourItems()
    }

    function r() {
        var t = m.getSlidesReference(),
            r = e(t);
        if (0 == r) return !1;
        var o = r > 0 ? "left" : "right",
            a = !1;
        switch (o) {
            case "right":
                if (m.isSlideHasItem(t.objPrevSlide)) var s = v.getElementSize(t.objPrevSlide),
                    l = -s.left;
                else a = !0;
                break;
            case "left":
                if (m.isSlideHasItem(t.objNextSlide)) var u = v.getElementSize(t.objNextSlide),
                    l = -u.left;
                else a = !0
        }
        1 == a ? i(t) : h.stop().animate({
            left: l + "px"
        }, {
            duration: f.slider_transition_continuedrag_speed,
            easing: f.slider_transition_continuedrag_easing,
            queue: !1,
            progress: function() {
                if (1 == b.isDragVideo) {
                    var e = v.getElementSize(h),
                        t = e.left,
                        i = t - b.startPosx,
                        n = b.videoStartX + i;
                    b.videoObject.css("left", n)
                }
            },
            always: function() {
                n(o), p.trigger(m.events.AFTER_DRAG_CHANGE)
            }
        })
    }

    function o(e) {
        var t = b.lastMouseX - b.startMouseX;
        if (0 == t) return !0;
        var i = 0 > t ? "left" : "right",
            n = m.getObjZoom();
        if (n) {
            var r = n.isPanEnabled(e, i);
            if (1 == r) return b.isInitDataValid = !1, !0;
            if (0 == b.isInitDataValid) return a(e), !0
        }
        var o = b.startPosx + t;
        if (t > 0 && o > 0) o /= 3;
        else if (0 > t) {
            var s = o + h.width(),
                l = c.width();
            l > s && (o = b.startPosx + t / 3)
        }
        if (0 == b.isDragging && (b.isDragging = !0, p.trigger(m.events.START_DRAG)), h.css("left", o + "px"), 1 == b.isDragVideo) {
            var u = o - b.startPosx,
                d = b.videoStartX + u;
            b.videoObject.css("left", d)
        }
    }

    function a(e) {
        var t = v.getMousePosition(e);
        b.startMouseX = t.pageX, b.startMouseY = t.pageY, b.lastMouseX = b.startMouseX, b.lastMouseY = b.startMouseY, b.startTime = jQuery.now();
        var i = v.getArrTouches(e);
        b.startArrTouches = v.getArrTouchPositions(i);
        var n = v.getElementSize(h);
        b.startPosx = n.left, b.isInitDataValid = !0, b.isDragVideo = !1, v.storeEventData(e, b.storedEventID)
    }

    function s(e) {
        b.touch_active = !1
    }

    function l(e, t) {
        b.touch_active = !0, a(t)
    }

    function u(e) {
        e.preventDefault(), b.isDragging = !1, 1 == m.isAnimating() && h.stop(!0, !0);
        var t = v.getArrTouches(e);
        return t.length > 1 ? (1 == b.touch_active && s("1"), !0) : 1 == b.touch_active ? !0 : void l("1", e)
    }

    function d(e) {
        if (0 == b.touch_active) return !0;
        if (0 == e.buttons) return s("2"), r(), !0;
        v.updateStoredEventData(e, b.storedEventID), e.preventDefault();
        var t = v.getMousePosition(e);
        b.lastMouseX = t.pageX, b.lastMouseY = t.pageY;
        var i = null;
        1 == f.slider_vertical_scroll_ondrag && (i = v.handleScrollTop(b.storedEventID)), "vert" !== i && o(e)
    }

    function _(e) {
        var n = v.getArrTouches(e),
            o = n.length,
            a = m.isInnerInPlace();
        if (1 == a && 0 == b.touch_active && 0 == o) return !0;
        if (0 == o && 1 == b.touch_active) {
            s("3");
            var u = !1,
                d = v.wasVerticalScroll(b.storedEventID);
            0 == d && (u = t()), 1 == u ? r() : i()
        } else 1 == o && 0 == b.touch_active && l("2", e)
    }

    function g() {
        c.bind("mousedown touchstart", u), jQuery("body").bind("mousemove touchmove", d), jQuery(window).add("body").bind("mouseup touchend", _)
    }
    var c, h, p, f, m = new UGSlider,
        v = new UGFunctions,
        f = {
            slider_transition_continuedrag_speed: 250,
            slider_transition_continuedrag_easing: "linear",
            slider_transition_return_speed: 300,
            slider_transition_return_easing: "easeInOutQuad"
        },
        b = {
            touch_active: !1,
            startMouseX: 0,
            startMouseY: 0,
            lastMouseX: 0,
            lastMouseY: 0,
            startPosx: 0,
            startTime: 0,
            isInitDataValid: !1,
            slides: null,
            lastNumTouches: 0,
            isDragging: !1,
            storedEventID: "touchSlider",
            videoStartX: 0,
            isDragVideo: !1,
            videoObject: null
        };
    this.isTapEventOccured = function(t) {
        var i = v.getArrTouches(t),
            n = i.length;
        if (0 != n || 0 != b.lastNumTouches) return b.lastNumTouches = n, !1;
        b.lastNumTouches = n;
        var r = m.getSlidesReference(),
            o = (e(r), Math.abs(b.lastMouseX - b.startMouseX)),
            a = Math.abs(b.lastMouseY - b.startMouseY),
            s = jQuery.now(),
            l = s - b.startTime;
        return 20 > o && 50 > a && 500 > l ? !0 : !1
    }, this.init = function(e, t) {
        m = e, p = jQuery(m), g_objects = e.getObjects(), c = g_objects.g_objSlider, h = g_objects.g_objInner, f = jQuery.extend(f, t), g()
    }, this.getLastMousePos = function() {
        var e = {
            pageX: b.lastMouseX,
            pageY: b.lastMouseY
        };
        return e
    }, this.isTouchActive = function() {
        return b.touch_active
    }
}

function UGZoomSliderControl() {
    function e(e, t) {
        T = e, w = jQuery(T), g_objects = e.getObjects(), y = g_objects.g_objSlider, I = g_objects.g_objInner, S = jQuery.extend(S, t), b()
    }

    function t() {
        var e = T.getScaleMode();
        return "down" != e && (e = "fit"), e
    }

    function i() {
        var e = jQuery.now(),
            i = e - P.storeImageLastTime;
        if (20 > i) return !1;
        var n = T.getSlidesReference();
        if (P.objSlide = n.objCurrentSlide, P.objImage = n.objCurrentSlide.find("img"), 0 == P.objImage.length) return !1;
        P.objImageSize = E.getElementSize(P.objImage), P.objParent = P.objImage.parent(), P.objParentSize = E.getElementSize(P.objParent);
        var r = t();
        objPadding = T.getObjImagePadding(), P.objFitImageSize = E.getImageInsideParentDataByImage(P.objImage, r, objPadding);
        var e = jQuery.now();
        return P.storeImageLastTime = e, !0
    }

    function n(e, i) {
        var n = T.getSlidesReference(),
            r = n.objCurrentSlide.find("img"),
            o = t();
        w.trigger(T.events.ZOOM_START);
        var a = !0,
            s = T.getObjImagePadding();
        if ("back" == e) {
            var l = E.getImageOriginalSize(r);
            E.scaleImageFitParent(r, l.width, l.height, o, s)
        } else {
            var u = "in" == e ? !0 : !1;
            a = E.zoomImageInsideParent(r, u, S.slider_zoom_step, i, o, S.slider_zoom_max_ratio, s)
        }
        1 == a && (w.trigger(T.events.ZOOMING), w.trigger(T.events.ZOOM_CHANGE), w.trigger(T.events.ZOOM_END))
    }

    function r(e, t, i) {
        var n = E.getArrTouches(t);
        if (i === !0) {
            if (1 != n.length) return !1
        } else if (n.length > 1) return !1;
        return E.isElementBiggerThenParent(e) ? !0 : !1
    }

    function o(e) {
        var t = E.getMousePosition(e);
        P.startMouseX = t.pageX, P.startMouseY = t.pageY, P.lastMouseX = P.startMouseX, P.lastMouseY = P.startMouseY, P.startImageX = P.objImageSize.left, P.startImageY = P.objImageSize.top, P.panXActive = P.objImageSize.width > P.objParentSize.width, P.panYActive = P.objImageSize.height > P.objParentSize.height
    }

    function a(e) {
        P.isPanActive = !0, o(e)
    }

    function s(e) {
        if (void 0 == P.objImage || 0 == P.objImage.length) return !0;
        var t = E.getMousePosition(e),
            i = (t.pageX - P.startMouseX, t.pageY - P.startMouseY, t.pageX - P.lastMouseX),
            n = t.pageY - P.lastMouseY,
            r = 0 > i ? "left" : "right",
            o = 0 > n ? "up" : "down";
        P.lastMouseX = t.pageX, P.lastMouseY = t.pageY;
        var a = E.getElementSize(P.objImage);
        0 == P.panYActive ? n = 0 : "down" == o && a.top > 0 ? n /= 3 : "up" == o && a.bottom < P.objParentSize.height && (n /= 3), 0 == P.panXActive || 0 == T.isInnerInPlace() ? i = 0 : "right" == r && a.left > 0 ? i /= 3 : "left" == r && a.right < P.objParentSize.width && (i /= 3);
        var s = a.left + i,
            l = a.top + n;
        E.placeElement(P.objImage, s, l)
    }

    function l() {
        var e = !1,
            t = !1,
            i = 0,
            n = 0,
            r = E.getElementSize(P.objImage),
            o = T.getObjImagePadding(),
            a = E.getElementCenterPosition(P.objImage, o);
        P.panXActive = P.objImageSize.width > P.objParentSize.width, P.panYActive = P.objImageSize.height > P.objParentSize.height, 1 == P.panYActive ? r.top > 0 ? (n = 0, t = !0) : r.bottom < P.objParentSize.height && (n = P.objParentSize.height - r.height, t = !0) : r.top != a.top && (t = !0, n = a.top), 1 == P.panXActive ? r.left > 0 ? (i = 0, e = !0) : r.right < P.objParentSize.width && (i = P.objParentSize.width - r.width, e = !0) : r.left != a.left && (e = !0, i = a.left);
        var s = {};
        1 == t && (s.top = n + "px"), 1 == e && (s.left = i + "px"), (1 == t || 1 == e) && P.objImage.animate(s, {
            duration: S.slider_zoom_return_pan_duration,
            easing: S.slider_zoom_return_pan_easing,
            queue: !1
        })
    }

    function u() {
        return P.objImage && P.objImage.is(":animated") ? !0 : !1
    }

    function d(e) {
        P.isZoomActive = !0, P.startDistance = E.getDistance(e[0].pageX, e[0].pageY, e[1].pageX, e[1].pageY), 0 == P.startDistance && (P.startDistance = 1), P.startMiddlePoint = E.getMiddlePoint(e[0].pageX, e[0].pageY, e[1].pageX, e[1].pageY), P.objImageSize = E.getElementSize(P.objImage), P.startImageX = P.objImageSize.left, P.startImageY = P.objImageSize.top, P.imageOrientPoint = E.getElementLocalPoint(P.startMiddlePoint, P.objImage);
        var t = E.isPointInsideElement(P.imageOrientPoint, P.objImageSize);
        0 == t && (P.imageOrientPoint = E.getElementCenterPoint(P.objImage)), w.trigger(T.events.ZOOM_START)
    }

    function _(e) {
        if (0 == P.isZoomActive) return !1;
        var t = E.getArrTouches(e);
        2 != t.length && (P.isZoomActive = !1, w.trigger(T.events.ZOOM_END))
    }

    function g(e) {
        if (1 == P.isZoomActive) return !0;
        var t = E.getArrTouches(e);
        return 2 != t.length ? !0 : void d(t)
    }

    function c(e) {
        var t = E.getArrTouches(e),
            i = E.getDistance(t[0].pageX, t[0].pageY, t[1].pageX, t[1].pageY),
            n = i / P.startDistance,
            r = E.getMiddlePoint(t[0].pageX, t[0].pageY, t[1].pageX, t[1].pageY),
            o = P.objImageSize.width * n,
            a = P.objImageSize.height * n,
            s = E.getImageOriginalSize(P.objImage),
            l = 1;
        if (s.width > 0 && (l = o / s.width), l > S.slider_zoom_max_ratio) return !0;
        panX = -(P.imageOrientPoint.x * n - P.imageOrientPoint.x), panY = -(P.imageOrientPoint.y * n - P.imageOrientPoint.y);
        var u = r.x - P.startMiddlePoint.x,
            d = r.y - P.startMiddlePoint.y,
            _ = P.startImageX + panX + u,
            g = P.startImageY + panY + d;
        E.setElementSizeAndPosition(P.objImage, _, g, o, a), w.trigger(T.events.ZOOMING), w.trigger(T.events.ZOOM_CHANGE)
    }

    function h() {
        if (void 0 == P.objImage || 0 == P.objImage.length) return !0;
        var e = E.getElementSize(P.objImage);
        if (e.width < P.objFitImageSize.imageWidth) {
            P.objImage.css({
                position: "absolute",
                margin: "none"
            });
            var t = {
                top: P.objFitImageSize.imageTop + "px",
                left: P.objFitImageSize.imageLeft + "px",
                width: P.objFitImageSize.imageWidth + "px",
                height: P.objFitImageSize.imageHeight + "px"
            };
            P.objImage.animate(t, {
                duration: S.slider_zoom_return_pan_duration,
                easing: S.slider_zoom_return_pan_easing,
                queue: !1
            })
        } else l()
    }

    function p(e) {
        if (0 == T.isCurrentSlideType("image")) return !0;
        i();
        return void 0 == P.objImage || 0 == P.objImage.length ? !0 : (e.preventDefault(), 1 == u() && P.objImage.stop(!0), 1 == P.isZoomActive ? _(e) : g(e), void(1 == P.isZoomActive ? P.isPanActive = !1 : 1 == r(P.objImage, e) && 1 == P.isZoomedOnce && a(e)))
    }

    function f(e) {
        if (0 == T.isCurrentSlideType("image")) return !0;
        var t = jQuery(e.target);
        if (1 == t.data("ug-button")) return !1;
        i();
        if (void 0 == P.objImage || 0 == P.objImage.length) return !0;
        var n = P.isPanActive,
            o = P.isZoomActive;
        if (0 == T.isInnerInPlace()) return P.isZoomActive = !1, P.isPanActive = !1, !0;
        if (1 == P.isZoomActive ? _(e) : g(e), 1 == P.isZoomActive) P.isPanActive = !1;
        else {
            var s = r(P.objImage, e, !0);
            1 == P.isPanActive ? P.isPanActive = !1 : 1 == s && a(e)
        }(n || o) && 0 == P.isZoomActive && 0 == P.isPanActive && h()
    }

    function m(e) {
        return 0 == T.isCurrentSlideType("image") ? !0 : void(1 == P.isZoomActive ? c(e) : 1 == P.isPanActive && s(e))
    }

    function v(e, t, i, r) {
        if (0 == S.slider_zoom_mousewheel) return !0;
        if (0 == T.isCurrentSlideType("image")) return !0;
        e.preventDefault();
        var o = t > 0,
            a = E.getMousePosition(e),
            s = 1 == o ? "in" : "out";
        n(s, a)
    }

    function b() {
        y.on("mousewheel", v), y.bind("mousedown touchstart", p), jQuery("body").bind("mousemove touchmove", m), jQuery(window).add("body").bind("mouseup touchend", f), w.bind(T.events.BEFORE_RETURN, function() {
            h()
        }), w.bind(T.events.ITEM_CHANGED, function() {
            P.isZoomedOnce = !1
        }), w.bind(T.events.ZOOM_CHANGE, function() {
            P.isZoomedOnce = !0
        })
    }
    var y, I, w, T = new UGSlider,
        E = new UGFunctions,
        S = {
            slider_zoom_step: 1.2,
            slider_zoom_max_ratio: 6,
            slider_zoom_return_pan_duration: 400,
            slider_zoom_return_pan_easing: "easeOutCubic"
        },
        P = {
            isPanActive: !1,
            startMouseX: 0,
            startMouseY: 0,
            lastMouseX: 0,
            lastMouseY: 0,
            startImageX: 0,
            startImageY: 0,
            panXActive: !1,
            panYActive: !1,
            objImage: null,
            objImageSize: null,
            objParent: null,
            objParentSize: null,
            objSlide: null,
            storeImageLastTime: 0,
            isZoomActive: !1,
            startDistance: 0,
            startMiddlePoint: null,
            imageOrientPoint: null,
            objFitImageSize: null,
            isZoomedOnce: !1
        };
    this.________EXTERNAL_____________ = function() {}, this.isPanEnabled = function(e, t) {
        if (i(), void 0 == P.objImage || 0 == P.objImage.length) return !1;
        if (0 == P.isZoomedOnce) return !1;
        if (0 == r(P.objImage, e)) return !1;
        if (0 == T.isInnerInPlace()) return !1;
        if ("left" == t) {
            if (P.objImageSize.right <= P.objParentSize.width) return !1
        } else if (P.objImageSize.left >= 0) return !1;
        return !0
    }, this.init = function(t, i) {
        e(t, i)
    }, this.zoomIn = function() {
        n("in")
    }, this.zoomOut = function() {
        n("out")
    }, this.zoomBack = function() {
        n("back")
    }
}

function UGWistiaAPI() {
    function e() {
        return "undefined" != typeof Wistia
    }

    function t(e, t, n, o, a) {
        r = null, s = !1;
        var l = e + "_video",
            u = "<div id='" + l + "' class='wistia_embed' style='width:" + n + ";height:" + o + ";' data-video-width='" + n + "' data-video-height='" + o + "'>&nbsp;</div>";
        jQuery("#" + e).html(u), r = Wistia.embed(t, {
            version: "v1",
            videoWidth: n,
            videoHeight: o,
            container: l,
            autoPlay: a
        }), s = !0, i()
    }

    function i() {
        r.bind("play", function() {
            a.trigger(o.events.START_PLAYING)
        }), r.bind("pause", function() {
            a.trigger(o.events.STOP_PLAYING)
        }), r.bind("end", function() {
            a.trigger(o.events.STOP_PLAYING)
        })
    }
    this.isAPILoaded = !1;
    var n, r, o = this,
        a = jQuery(this),
        s = !1;
    this.events = {
        START_PLAYING: "start_playing",
        STOP_PLAYING: "stop_playing"
    }, this.loadAPI = function() {
        return 1 == g_ugWistiaAPI.isAPILoaded ? !0 : e() ? (g_ugWistiaAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("fast.wistia.com/assets/external/E-v1.js", !0), void(g_ugWistiaAPI.isAPILoaded = !0))
    }, this.doCommand = function(e) {
        if (null == r) return !1;
        if (0 == s) return !1;
        switch (e) {
            case "play":
                r.play();
                break;
            case "pause":
                r.pause()
        }
    }, this.pause = function() {
        o.doCommand("pause")
    }, this.play = function() {
        o.doCommand("play")
    }, this.putVideo = function(i, r, o, a, s) {
        return e() ? (t(i, r, o, a, s), !0) : (this.loadAPI(), void(n = setInterval(function() {
            e() && (t(i, r, o, a, s), clearInterval(n))
        }, 500)))
    }, this.isPlayerReady = function() {
        return s && r ? !0 : !1
    }
}

function UGSoundCloudAPI() {
    function e() {
        return "undefined" != typeof SC
    }

    function t(e, t, n, a, s) {
        r = null, g_isPlayerReady = !1;
        var l = e + "_iframe",
            u = location.protocol + "//w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/" + t;
        u += "&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;show_artwork=true&show_comments=false&amp;show_playcount=true&amp;show_user=false&amp;hide_related=true&amp;visual=true&amp;start_track=0&amp;callback=true", u += s === !0 ? "&amp;auto_play=true" : "&amp;auto_play=false";
        var d = "<iframe id='" + l + "' src=" + u + " width='" + n + "' height='" + a + "' frameborder='0' scrolling='no' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
        jQuery("#" + e).html(d), r = SC.Widget(l), r.bind(SC.Widget.Events.READY, function() {
            r && (g_isPlayerReady = !0, i())
        }), o = e
    }

    function i() {
        r.bind(SC.Widget.Events.PLAY, function() {
            s.trigger(a.events.START_PLAYING)
        }), r.bind(SC.Widget.Events.PAUSE, function() {
            s.trigger(a.events.STOP_PLAYING)
        }), r.bind(SC.Widget.Events.FINISH, function() {
            s.trigger(a.events.STOP_PLAYING)
        })
    }
    this.isAPILoaded = !1;
    var n, r, o, a = this,
        s = jQuery(this);
    this.events = {
        START_PLAYING: "start_playing",
        STOP_PLAYING: "stop_playing"
    }, this.loadAPI = function() {
        return 1 == g_ugSoundCloudAPI.isAPILoaded ? !0 : e() ? (g_ugSoundCloudAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("w.soundcloud.com/player/api.js", !0), void(g_ugSoundCloudAPI.isAPILoaded = !0))
    }, this.putSound = function(i, r, o, a, s) {
        return e() ? (t(i, r, o, a, s), !0) : (this.loadAPI(), void(n = setInterval(function() {
            e() && (t(i, r, o, a, s), clearInterval(n))
        }, 500)))
    }, this.doCommand = function(e) {
        if (null == r) return !1;
        if (0 == g_isPlayerReady) return !1;
        switch (e) {
            case "play":
                r.play();
                break;
            case "pause":
                r.pause()
        }
    }, this.pause = function() {
        a.doCommand("pause")
    }, this.play = function() {
        a.doCommand("play")
    }, this.destroy = function() {
        g_isPlayerReady = !1, r = null, o && (jQuery("#" + o).html(""), o = null)
    }
}

function UGHtml5MediaAPI() {
    function e() {
        return "undefined" != typeof mejs
    }

    function t(e, t, n, o, a) {
        r = null, g_isPlayerReady = !1;
        var s = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/flashmediaelement-cdn.swf",
            l = location.protocol + "//cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/silverlightmediaelement.xap",
            u = e + "_video",
            d = "";
        a && a === !0 && (d = "autoplay='autoplay'");
        var _ = "";
        t.posterImage && (_ = "poster='" + t.posterImage + "'");
        var g = "<video id='" + u + "' width='" + n + "' height='" + o + "'  controls='controls' preload='none' " + d + " " + _ + ">";
        "" != t.mp4 && (g += "<source type='video/mp4' src='" + t.mp4 + "' />"), "" != t.webm && (g += "<source type='video/webm' src='" + t.webm + "' />"), "" != t.ogv && (g += "<source type='video/ogg' src='" + t.ogv + "' />"), g += "<object width='" + n + "' height='" + o + "' type='application/x-shockwave-flash' data='" + s + "'>", g += "<param name='movie' value='" + s + "' />", g += "<param name='flashvars' value='controls=true&file=" + t.mp4 + "' />", g += "</object>", g += "</video>", jQuery("#" + e).html(g), new MediaElement(u, {
            enablePluginDebug: !1,
            flashName: s,
            silverlightName: l,
            success: function(e, t) {
                g_isPlayerReady = !0, r = e, 0 == a && r.pause(), i()
            },
            error: function(e) {
                trace(e)
            }
        })
    }

    function i() {
        g_ugFunctions.addEvent(r, "play", function() {
            a.trigger(o.events.START_PLAYING)
        }), g_ugFunctions.addEvent(r, "pause", function() {
            a.trigger(o.events.STOP_PLAYING)
        }), g_ugFunctions.addEvent(r, "ended", function() {
            a.trigger(o.events.STOP_PLAYING)
        })
    }
    this.isAPILoaded = !1;
    var n, r, o = this,
        a = jQuery(this);
    this.events = {
        START_PLAYING: "start_playing",
        STOP_PLAYING: "stop_playing"
    }, this.loadAPI = function() {
        return 1 == g_ugHtml5MediaAPI.isAPILoaded ? !0 : e() ? (g_ugHtml5MediaAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelement.min.js", !0), g_ugFunctions.loadCss("cdnjs.cloudflare.com/ajax/libs/mediaelement/2.18.1/mediaelementplayer.min.css", !0), void(g_ugHtml5MediaAPI.isAPILoaded = !0))
    }, this.putVideo = function(i, r, o, a, s) {
        return e() ? (t(i, r, o, a, s), !0) : (this.loadAPI(), void(n = setInterval(function() {
            e() && (t(i, r, o, a, s), clearInterval(n))
        }, 500)))
    }, this.doCommand = function(e) {
        if (null == r) return !1;
        if (0 == g_isPlayerReady) return !1;
        switch (e) {
            case "play":
                r.play();
                break;
            case "pause":
                r.pause()
        }
    }, this.pause = function() {
        o.doCommand("pause")
    }, this.play = function() {
        o.doCommand("play")
    }
}

function UGVimeoAPI() {
    function e() {
        return "undefined" != typeof Froogaloop
    }

    function t(e, t, n, o, a) {
        s = null, l = !1;
        var u = location.protocol + "//player.vimeo.com/video/" + t + "?api=1";
        a === !0 && (u += "&amp;byline=0&amp;autoplay=1&amp;title=0&amp;portrait=0");
        var d = "<iframe src=" + u + " width='" + n + "' height='" + o + "' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
        jQuery("#" + e).html(d);
        var _ = jQuery("#" + e + " iframe")[0];
        s = Froogaloop(_), s.addEvent("ready", function() {
            s && (l = !0, i())
        }), r = e
    }

    function i() {
        return s ? (s.addEvent("cuechange", function() {
            1 == u && o.play()
        }), s.addEvent("play", function() {
            a.trigger(o.events.START_PLAYING)
        }), s.addEvent("pause", function() {
            a.trigger(o.events.STOP_PLAYING)
        }), void s.addEvent("finish", function() {
            a.trigger(o.events.STOP_PLAYING)
        })) : !1
    }
    this.isAPILoaded = !1;
    var n, r, o = this,
        a = jQuery(this),
        s = null,
        l = !1,
        u = !1;
    this.events = {
        START_PLAYING: "start_playing",
        STOP_PLAYING: "stop_playing"
    }, this.loadAPI = function() {
        return 1 == g_ugVimeoAPI.isAPILoaded ? !0 : e() ? (g_ugVimeoAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("f.vimeocdn.com/js/froogaloop2.min.js", !0), void(g_ugVimeoAPI.isAPILoaded = !0))
    }, this.doCommand = function(e) {
        if (null == s) return !1;
        if (0 == l) return !1;
        switch (e) {
            default: s.api(e)
        }
    }, this.pause = function() {
        o.doCommand("pause")
    }, this.play = function() {
        o.doCommand("play")
    }, this.destroy = function() {
        s && (s.api("unload"), s = null, l = !1), r && jQuery("#" + r).html("")
    }, this.putVideo = function(i, r, o, a, s) {
        return e() ? (t(i, r, o, a, s), !0) : (this.loadAPI(), void(n = setInterval(function() {
            e() && (t(i, r, o, a, s), clearInterval(n))
        }, 500)))
    }, this.isPlayerReady = function() {
        return l && s ? !0 : !1
    }, this.changeVideo = function(e, t) {
        return 0 == o.isPlayerReady() ? !1 : (u = t, void s.api("loadVideo", e))
    }, this.getVideoImages = function(e, t, i) {
        var n = location.protocol + "//vimeo.com/api/v2/video/" + e + ".json";
        jQuery.get(n, {}, function(e) {
            var n = {};
            n.preview = e[0].thumbnail_large, n.thumb = e[0].thumbnail_medium, i(t, n)
        })
    }
}

function UGYoutubeAPI() {
    function e(e, t, r, a, u) {
        s && l && s.destroy();
        var d = {
            controls: 2,
            showinfo: _.video_youtube_showinfo,
            rel: 0
        };
        u === !0 && (d.autoplay = 1), l = !1, s = new YT.Player(e, {
            height: a,
            width: r,
            videoId: t,
            playerVars: d,
            events: {
                onReady: i,
                onStateChange: n
            }
        }), o = e
    }

    function t() {
        return "undefined" != typeof YT && "undefined" != typeof YT.Player ? !0 : !1
    }

    function i() {
        l = !0
    }

    function n() {
        if ("function" != typeof s.getPlayerState) return trace("Youtube API error: can't get player state"), !1;
        var e = s.getPlayerState();
        switch (e) {
            case YT.PlayerState.PLAYING:
                u.trigger(a.events.START_PLAYING);
                break;
            default:
                d == YT.PlayerState.PLAYING && u.trigger(a.events.STOP_PLAYING)
        }
        d = e
    }
    this.isAPILoaded = !1;
    var r, o, a = this,
        s = null,
        l = !1,
        u = jQuery(this),
        d = -1,
        _ = {
            video_youtube_showinfo: !0
        };
    this.events = {
        START_PLAYING: "start_playing",
        STOP_PLAYING: "stop_playing"
    }, this.setOptions = function(e) {
        _ = jQuery.extend(_, e)
    }, this.putVideo = function(i, n, o, a, s) {
        return t() ? (e(i, n, o, a, s), !0) : (this.loadAPI(), void(r = setInterval(function() {
            t() && (e(i, n, o, a, s), clearInterval(r))
        }, 500)))
    }, this.loadAPI = function() {
        return 1 == g_ugYoutubeAPI.isAPILoaded ? !0 : "undefined" != typeof YT ? (g_ugYoutubeAPI.isAPILoaded = !0, !0) : (g_ugFunctions.loadJs("www.youtube.com/player_api", !0), void(g_ugYoutubeAPI.isAPILoaded = !0))
    }, this.doCommand = function(e, t) {
        if (!s) return !0;
        if (0 == l) return !1;
        switch (e) {
            case "play":
                if ("function" != typeof s.playVideo) return !1;
                s.playVideo();
                break;
            case "pause":
                if ("function" != typeof s.pauseVideo) return !1;
                s.pauseVideo();
                break;
            case "seek":
                if ("function" != typeof s.seekTo) return !1;
                s.seekTo(t);
                break;
            case "stopToBeginning":
                var i = s.getPlayerState();
                switch (s.pauseVideo(), i) {
                    case YT.PlayerState.PLAYING:
                    case YT.PlayerState.ENDED:
                    case YT.PlayerState.PAUSED:
                        s.seekTo(0)
                }
        }
    }, this.play = function() {
        a.doCommand("play")
    }, this.pause = function() {
        a.doCommand("pause")
    }, this.destroy = function() {
        s && (l = !1, s.destroy())
    }, this.stopToBeginning = function() {
        a.doCommand("stopToBeginning")
    }, this.changeVideo = function(e, t) {
        return 0 == a.isPlayerReady() ? !1 : void(t && 1 == t ? s.loadVideoById(e, 0, "large") : s.cueVideoById(e, 0, "large"))
    }, this.isPlayerReady = function() {
        return l && s ? !0 : !1
    }, this.getVideoImages = function(e) {
        var t = {};
        return t.preview = "https://i.ytimg.com/vi/" + e + "/sddefault.jpg", t.thumb = "https://i.ytimg.com/vi/" + e + "/default.jpg", t
    }
}

function UGVideoPlayer() {
    function e() {
        c.hide()
    }

    function t() {
        h.trigger(c.events.PLAY_START), d && d.hide()
    }

    function i() {
        h.trigger(c.events.PLAY_STOP), d && d.show()
    }

    function n() {
        d && (p.setButtonMobileReady(d), p.setButtonOnClick(d, e)), jQuery(f).on(f.events.START_PLAYING, t), jQuery(f).on(f.events.STOP_PLAYING, i), jQuery(m).on(m.events.START_PLAYING, t), jQuery(m).on(m.events.STOP_PLAYING, i), jQuery(v).on(v.events.START_PLAYING, t), jQuery(v).on(v.events.STOP_PLAYING, i), jQuery(b).on(b.events.START_PLAYING, t), jQuery(b).on(b.events.STOP_PLAYING, i), jQuery(y).on(y.events.START_PLAYING, t), jQuery(y).on(y.events.STOP_PLAYING, i)
    }

    function r(e) {
        var t = ["youtube", "vimeo", "html5", "soundcloud", "wistia"];
        for (var i in t) {
            var n = t[i];
            if (n != e) switch (n) {
                case "youtube":
                    f.pause(), f.destroy(), s.hide();
                    break;
                case "vimeo":
                    m.pause(), m.destroy(), l.hide();
                    break;
                case "html5":
                    v.pause(), u.hide();
                    break;
                case "soundcloud":
                    b.pause(), b.destroy(), _.hide();
                    break;
                case "wistia":
                    y.pause(), g.hide()
            }
        }
    }
    var o, a, s, l, u, d, _, g, c = this,
        h = jQuery(this),
        p = new UGFunctions,
        f = new UGYoutubeAPI,
        m = new UGVimeoAPI,
        v = new UGHtml5MediaAPI,
        b = new UGSoundCloudAPI,
        y = new UGWistiaAPI,
        I = null,
        w = {
            video_enable_closebutton: !0
        };
    this.events = {
        SHOW: "video_show",
        HIDE: "video_hide",
        PLAY_START: "video_play_start",
        PLAY_STOP: "video_play_stop"
    };
    var T = {
        standAloneMode: !1,
        youtubeInnerID: "",
        vimeoPlayerID: "",
        html5PlayerID: "",
        wistiaPlayerID: "",
        soundCloudPlayerID: ""
    };
    this.init = function(e, t, i) {
        if (o = i, !o) throw new Error("missing gallery ID for video player, it's a must!");
        w = jQuery.extend(w, e), f.setOptions(w), t && 1 == t && (T.standAloneMode = !0)
    }, this.setHtml = function(e) {
        T.youtubeInnerID = o + "_youtube_inner", T.vimeoPlayerID = o + "_videoplayer_vimeo", T.html5PlayerID = o + "_videoplayer_html5", T.wistiaPlayerID = o + "_videoplayer_wistia", T.soundCloudPlayerID = o + "_videoplayer_soundcloud";
        var t = "<div class='ug-videoplayer' style='display:none'>";
        t += "<div class='ug-videoplayer-wrapper ug-videoplayer-youtube' style='display:none'><div id='" + T.youtubeInnerID + "'></div></div>", t += "<div id='" + T.vimeoPlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-vimeo' style='display:none'></div>", t += "<div id='" + T.html5PlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-html5'></div>", t += "<div id='" + T.soundCloudPlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-soundcloud'></div>", t += "<div id='" + T.wistiaPlayerID + "' class='ug-videoplayer-wrapper ug-videoplayer-wistia'></div>", 0 == T.standAloneMode && 1 == w.video_enable_closebutton && (t += "<div class='ug-videoplayer-button-close'></div>"), t += "</div>", e.append(t), a = e.children(".ug-videoplayer"), s = a.children(".ug-videoplayer-youtube"), l = a.children(".ug-videoplayer-vimeo"), u = a.children(".ug-videoplayer-html5"), _ = a.children(".ug-videoplayer-soundcloud"), g = a.children(".ug-videoplayer-wistia"), 0 == T.standAloneMode && 1 == w.video_enable_closebutton && (d = a.children(".ug-videoplayer-button-close"))
    }, this.destroy = function() {
        d && (d.off("click"), d.off("touchend")), jQuery(f).off(f.events.START_PLAYING), jQuery(f).off(f.events.STOP_PLAYING), jQuery(m).off(m.events.START_PLAYING), jQuery(m).off(m.events.STOP_PLAYING), jQuery(v).off(v.events.START_PLAYING), jQuery(v).off(v.events.STOP_PLAYING), jQuery(b).off(b.events.START_PLAYING, t), jQuery(b).off(b.events.STOP_PLAYING, i), jQuery(y).off(y.events.START_PLAYING, t), jQuery(y).off(y.events.STOP_PLAYING, i), I = null
    }, this.initEvents = function() {
        n()
    }, this.setSize = function(e, t) {
        p.setElementSize(a, e, t), d && p.placeElement(d, "right", "top")
    }, this.setPosition = function(e, t) {
        p.placeElement(a, e, t)
    }, this.getObject = function() {
        return a
    }, this.show = function() {
        return 1 == c.isVisible() ? !0 : (a.show(), a.fadeTo(0, 1), d && d.show(), void h.trigger(c.events.SHOW))
    }, this.hide = function() {
        return 0 == c.isVisible() ? !0 : (r(), I = null, a.hide(), void h.trigger(c.events.HIDE))
    }, this.getActiveAPI = function() {
        switch (I) {
            case "youtube":
                return f;
            case "vimeo":
                return m;
            case "wistia":
                return y;
            case "soundcloud":
                return b;
            case "html5":
                return v;
            default:
                return null
        }
    }, this.pause = function() {
        var e = c.getActiveAPI();
        return null == e ? !1 : void("function" == typeof e.pause && e.pause())
    }, this.isVisible = function() {
        return a.is(":visible")
    }, this.playYoutube = function(e, t) {
        if ("undefined" == typeof t) var t = !0;
        r("youtube"), s.show();
        var i = s.children("#" + T.youtubeInnerID);
        0 == i.length && s.append("<div id='" + T.youtubeInnerID + "'></div>"), 1 == f.isPlayerReady() && 1 == T.standAloneMode ? f.changeVideo(e, t) : f.putVideo(T.youtubeInnerID, e, "100%", "100%", t), I = "youtube"
    }, this.playVimeo = function(e, t) {
        if ("undefined" == typeof t) var t = !0;
        r("vimeo"), l.show(), m.isPlayerReady() && 1 == T.standAloneMode ? m.changeVideo(e, t) : m.putVideo(T.vimeoPlayerID, e, "100%", "100%", t), I = "vimeo"
    }, this.playHtml5Video = function(e, t, i, n, o) {
        if ("undefined" == typeof o) var o = !0;
        r("html5"), u.show();
        var a = {
            ogv: e,
            webm: t,
            mp4: i,
            posterImage: n
        };
        v.putVideo(T.html5PlayerID, a, "100%", "100%", o), I = "html5"
    }, this.playSoundCloud = function(e, t) {
        if ("undefined" == typeof t) var t = !0;
        r("soundcloud"), _.show(), b.putSound(T.soundCloudPlayerID, e, "100%", "100%", t), I = "soundcloud"
    }, this.playWistia = function(e, t) {
        if ("undefined" == typeof t) var t = !0;
        r("wistia"), g.show(), y.putVideo(T.wistiaPlayerID, e, "100%", "100%", t), I = "wistia"
    }
}

function ugCheckForMinJQueryVersion() {
    var e = g_ugFunctions.checkMinJqueryVersion("1.8.0");
    if (0 == e) throw new Error("The gallery can run from jquery 1.8 You have jQuery " + jQuery.fn.jquery + " Please update your jQuery library.")
}

function ugCheckForErrors(e, t) {
    function i() {
        if ("undefined" == typeof jQuery) throw new Error("jQuery library not included")
    }

    function n() {
        if ("function" == typeof jQuery.fn.unitegallery) return !0;
        var e = "You have some jquery.js library include that comes after the gallery files js include.";
        throw e += "<br> This include eliminates the gallery libraries, and make it not work.", "cms" == t ? (e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Gallery Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.") : e += "<br><br> Please find and remove this jquery.js include and the gallery will work. <br> * There should be only one jquery.js include before all other js includes in the page.", new Error(e)
    }
    try {
        "jquery" == t ? (i(), ugCheckForMinJQueryVersion()) : (ugCheckForMinJQueryVersion(), n())
    } catch (r) {
        var o = r.message;
        if (o = "Unite Gallery Error: " + o, o = "<div style='font-size:16px;color:#BC0C06;max-width:900px;border:1px solid red;padding:10px;'>" + o + "</div>", "jquery" == t) {
            var a = document.getElementById(e);
            a.innerHTML = o, a.style.display = "block"
        } else jQuery(e).show().html(o);
        return !1
    }
    return !0
}

function UniteGalleryMain() {
    function __________INIT_GALLERY_______() {}

    function getThemeFunction(e) {
        var t = e;
        return -1 == t.indexOf("UGTheme_") && (t = "UGTheme_" + t), t
    }

    function initTheme(objCustomOptions) {
        if (objCustomOptions.hasOwnProperty("gallery_theme")) g_options.gallery_theme = objCustomOptions.gallery_theme;
        else {
            var defaultTheme = g_options.gallery_theme;
            0 == g_ugFunctions.isThemeRegistered(defaultTheme) && (g_options.gallery_theme = g_ugFunctions.getFirstRegisteredTheme())
        }
        var themeFunction = getThemeFunction(g_options.gallery_theme);
        try {
            g_options.gallery_theme = eval(themeFunction)
        } catch (e) {}
        g_options.gallery_theme = eval(themeFunction), g_objTheme = new g_options.gallery_theme, g_objTheme.init(t, objCustomOptions)
    }

    function resetOptions() {
        g_options = jQuery.extend({}, g_temp.originalOptions), g_selectedItemIndex = -1, g_selectedItem = null, g_objSlider = void 0, g_objThumbs = void 0, g_objSlider = void 0
    }

    function checkForStartupErrors() {
        try {
            ugCheckForMinJQueryVersion()
        } catch (e) {
            throwErrorShowMessage(e.message)
        }
        "object" == typeof g_objWrapper.outerWidth() && throwErrorShowMessage("You have some buggy script. most chances jquery-ui.js that destroy jquery outerWidth, outerHeight functions. The gallery can't run. Please update jquery-ui.js to latest version."), setTimeout(function() {
            ugCheckForErrors(g_galleryID, "cms")
        }, 5e3)
    }

    function runGallery(e, i, n, r) {
        var o = "object" == typeof i;
        if (o && (g_temp.objCustomOptions = i), 1 == g_temp.isRunFirstTime) {
            if (g_galleryID = e, g_objWrapper = jQuery(g_galleryID), 0 == g_objWrapper.length) return trace("div with id: " + g_galleryID + " not found"), !1;
            g_objParent = g_objWrapper.parent(), checkForStartupErrors(), g_temp.originalOptions = jQuery.extend({}, g_options), o && (g_options = jQuery.extend(g_options, i)), 1 == g_options.gallery_enable_cache && g_options.gallery_initial_catid && cacheItems(g_options.gallery_initial_catid);
            var a = g_objWrapper.children();
            fillItemsArray(a), loadAPIs(), g_objWrapper.find("img").fadeTo(0, 0).hide(), g_objWrapper.show(), clearInitData()
        } else if (t.destroy(), resetOptions(), g_options = jQuery.extend(g_options, g_temp.objCustomOptions), n) {
            if (r && 1 == g_options.gallery_enable_cache && cacheItems(r, n), "noitems" == n) return showErrorMessage("No items in this category", ""), !1;
            g_objWrapper.html(n);
            var a = g_objWrapper.children();
            fillItemsArray(a), loadAPIs(), g_objWrapper.children().fadeTo(0, 0).hide(), g_objWrapper.show(), clearInitData()
        }
        1 == g_temp.isRunFirstTime && 1 == g_options.gallery_enable_tabs && (g_objTabs = new UGTabs, g_objTabs.init(t, g_options)), o && modifyInitParams(g_temp.objCustomOptions), validateParams(), 1 == g_options.gallery_shuffle && t.shuffleItems(), initTheme(g_temp.objCustomOptions), setGalleryHtml(), setHtmlObjectsProperties();
        var s = g_objWrapper.width();
        0 == s ? g_functions.waitForWidth(g_objWrapper, runGalleryActually) : runGalleryActually()
    }

    function runGalleryActually() {
        t.setSizeClass(), 0 == g_temp.isFreestyleMode && 1 == g_options.gallery_preserve_ratio && setHeightByOriginalRatio(), g_objTheme.run(), g_objTabs && g_temp.isRunFirstTime && g_objTabs.run(), preloadBigImages(), initEvents(), g_numItems > 0 && t.selectItem(0), 1 == g_options.gallery_autoplay && t.startPlayMode(), g_temp.isRunFirstTime = !1
    }

    function showErrorMessage(e, t) {
        if ("undefined" == typeof t) var t = "<b>Unite Gallery Error: </b>";
        e = t + e;
        var i = "<div class='ug-error-message-wrapper'><div class='ug-error-message'>" + e + "</div></div>";
        g_objWrapper.children().remove(), g_objWrapper.html(i), g_objWrapper.show()
    }

    function throwErrorShowMessage(e) {
        throw showErrorMessage(e), new Error(e)
    }

    function modifyInitParams() {
        g_options.gallery_images_preload_type || (g_options.gallery_images_preload_type = "minimal"), (void 0 == g_options.gallery_min_height || g_options.gallery_height < g_options.gallery_min_height) && (g_options.gallery_min_height = 0), (void 0 == g_options.gallery_min_width || g_options.gallery_width < g_options.gallery_min_width) && (g_options.gallery_min_width = 0)
    }

    function validateParams() {
        if (!g_options.gallery_theme) throw new Error("The gallery can't run without theme");
        if (jQuery.isNumeric(g_options.gallery_height) && g_options.gallery_height < g_options.gallery_min_height) throw new Error("The <b>gallery_height</b> option must be bigger then <b>gallery_min_height option</b>");
        if (g_options.gallery_width < g_options.gallery_min_width) throw new Error("The <b>gallery_width</b> option must be bigger then <b>gallery_min_width option</b>")
    }

    function setGalleryHtml() {
        g_objWrapper.addClass("ug-gallery-wrapper"), g_objWrapper.append("<div class='ug-overlay-disabled' style='display:none'></div>"), t.setSizeClass()
    }

    function clearInitData() {
        g_objWrapper.children().remove()
    }

    function storeLastSize() {
        var e = t.getSize();
        g_temp.lastWidth = e.width, g_temp.lastHeight = e.height
    }

    function setHeightByOriginalRatio() {
        var e = t.getSize(),
            i = e.width / e.height;
        if (i != e.orig_ratio) {
            var n = e.width / e.orig_ratio;
            n = Math.round(n), n < g_options.gallery_min_height && (n = g_options.gallery_min_height), g_objWrapper.height(n)
        }
    }

    function setHtmlObjectsProperties() {
        var e = g_functions.getCssSizeParam(g_options.gallery_width),
            t = {
                "max-width": e,
                "min-width": g_functions.getCssSizeParam(g_options.gallery_min_width)
            };
        if (0 == g_temp.isFreestyleMode) {
            var i = g_functions.getCssSizeParam(g_options.gallery_height);
            t.height = i
        } else t.overflow = "visible";
        g_options.gallery_background_color && (t["background-color"] = g_options.gallery_background_color), g_objWrapper.css(t)
    }

    function fillItemsArray(e) {
        g_arrItems = [];
        for (var t = 0, i = 0; i < e.length; i++) {
            var n = jQuery(e[i]),
                r = n.prop("tagName").toLowerCase(),
                o = "";
            if ("a" == r) {
                o = n.attr("href"), n = n.children();
                var r = n.prop("tagName").toLowerCase()
            }
            var a = n.data("type");
            void 0 == a && (a = "image");
            var s = {};
            if (s.type = a, "img" == r) {
                var l = n.data("lazyload-src");
                l && "" != l && (n.attr("src", l), jQuery.removeData(n, "lazyload-src"));
                var u = n.attr("src"),
                    d = n.data("thumb");
                "undefined" != typeof d && "" != d ? (s.urlThumb = d, s.urlImage = u, n.attr("src", d)) : (s.urlThumb = u, s.urlImage = n.data("image")), s.title = n.attr("alt"), s.objThumbImage = n
            } else {
                if ("image" == a) throw new Error("The item should not be image type");
                s.urlThumb = n.data("thumb"), s.title = n.data("title"), s.objThumbImage = null, s.urlImage = n.data("image")
            }
            s.link = o, s.description = n.attr("title"), s.description || (s.description = n.data("description")), s.description || (s.description = ""), s.isLoaded = !1, s.isThumbImageLoaded = !1, s.objPreloadImage = null, s.isBigImageLoadStarted = !1, s.isBigImageLoaded = !1, s.isBigImageLoadError = !1, s.imageWidth = 0, s.imageHeight = 0, s.thumbWidth = 0, s.thumbHeight = 0, s.thumbRatioByWidth = 0, s.thumbRatioByHeight = 0, s.addHtml = null;
            var _ = void 0 == s.urlImage || "" == s.urlImage,
                g = void 0 == s.urlThumb || "" == s.urlThumb;
            switch (s.type) {
                case "youtube":
                    if (s.videoid = n.data("videoid"), _ || g) {
                        var c = g_ugYoutubeAPI.getVideoImages(s.videoid);
                        _ && (s.urlImage = c.preview), g && (s.urlThumb = c.thumb, "img" == r && n.attr("src", s.urlThumb))
                    }
                    g_temp.isYoutubePresent = !0;
                    break;
                case "vimeo":
                    s.videoid = n.data("videoid"), g_temp.isVimeoPresent = !0;
                    break;
                case "html5video":
                    s.videoogv = n.data("videoogv"), s.videowebm = n.data("videowebm"), s.videomp4 = n.data("videomp4"), g_temp.isHtml5VideoPresent = !0;
                    break;
                case "soundcloud":
                    s.trackid = n.data("trackid"), g_temp.isSoundCloudPresent = !0;
                    break;
                case "wistia":
                    s.videoid = n.data("videoid"), g_temp.isWistiaPresent = !0;
                    break;
                case "custom":
                    var h = n.children("img");
                    h.length && (h = jQuery(h[0]), s.urlThumb = h.attr("src"), s.title = h.attr("alt"), s.objThumbImage = h);
                    var p = n.children().not("img:first-child");
                    p.length && (s.addHtml = p.clone())
            }
            s.objThumbImage && (s.objThumbImage.removeAttr("data-description", ""), s.objThumbImage.removeAttr("data-image", ""), s.objThumbImage.removeAttr("data-thumb", ""), s.objThumbImage.removeAttr("title", "")), s.index = t, g_arrItems.push(s), t++
        }
        g_numItems = g_arrItems.length
    }

    function loadAPIs() {
        g_temp.isYoutubePresent && g_ugYoutubeAPI.loadAPI(), g_temp.isVimeoPresent && g_ugVimeoAPI.loadAPI(), g_temp.isHtml5VideoPresent && g_ugHtml5MediaAPI.loadAPI(), g_temp.isSoundCloudPresent && g_ugSoundCloudAPI.loadAPI(), g_temp.isWistiaPresent && g_ugWistiaAPI.loadAPI()
    }

    function preloadBigImages() {
        if ("visible" != g_options.gallery_images_preload_type || g_objThumbs || (g_options.gallery_images_preload_type = "minimal"), 1 == g_temp.isAllItemsPreloaded) return !0;
        switch (g_options.gallery_images_preload_type) {
            default:
                case "minimal":
                break;
            case "all":
                    jQuery(g_arrItems).each(function() {
                    preloadItemImage(this)
                });
                break;
            case "visible":
                    jQuery(g_arrItems).each(function() {
                    var e = this,
                        t = g_objThumbs.isItemThumbVisible(e);
                    1 == t && preloadItemImage(e)
                })
        }
    }

    function checkPreloadItemImage(e) {
        if (1 == e.isBigImageLoadStarted || 1 == e.isBigImageLoaded || 1 == e.isBigImageLoadError) return !1;
        switch (g_options.gallery_images_preload_type) {
            default:
                case "minimal":
                break;
            case "all":
                    preloadItemImage(e);
                break;
            case "visible":
                    var t = g_objThumbs.isItemThumbVisible(e);1 == t && preloadItemImage(e)
        }
    }

    function preloadItemImage(e) {
        if (1 == e.isBigImageLoadStarted || 1 == e.isBigImageLoaded || 1 == e.isBigImageLoadError) return !0;
        var i = e.urlImage;
        return "" == i || void 0 == i ? (e.isBigImageLoadError = !0, !1) : (e.isBigImageLoadStarted = !0, e.objPreloadImage = jQuery("<img/>").attr("src", i), e.objPreloadImage.data("itemIndex", e.index), e.objPreloadImage.on("load", t.onItemBigImageLoaded), e.objPreloadImage.on("error", function() {
            var e = jQuery(this),
                i = e.data("itemIndex"),
                n = g_arrItems[i];
            n.isBigImageLoadError = !0, n.isBigImageLoaded = !1;
            var r = jQuery(this).attr("src");
            console.log("Can't load image: " + r), g_objGallery.trigger(t.events.ITEM_IMAGE_UPDATED, [i, n.urlImage]), n.objThumbImage.attr("src", n.urlThumb)
        }), void checkAllItemsStartedPreloading())
    }

    function preloadNearBigImages(e) {
        if (1 == g_temp.isAllItemsPreloaded) return !1;
        if (!e) var e = g_selectedItem;
        if (!e) return !0;
        var t = e.index,
            i = t - 1,
            n = t + 1;
        i > 0 && preloadItemImage(g_arrItems[i]), g_numItems > n && preloadItemImage(g_arrItems[n])
    }

    function checkAllItemsStartedPreloading() {
        if (1 == g_temp.isAllItemsPreloaded) return !1;
        for (var e in g_arrItems)
            if (0 == g_arrItems[e].isBigImageLoadStarted) return !1;
        g_temp.isAllItemsPreloaded = !0
    }

    function __________END_INIT_GALLERY_______() {}

    function __________EVENTS_____________() {}

    function onSliderMouseEnter(e) {
        1 == g_options.gallery_pause_on_mouseover && 0 == t.isFullScreen() && 1 == g_temp.isPlayMode && g_objSlider && 0 == g_objSlider.isSlideActionActive() && t.pausePlaying()
    }

    function onSliderMouseLeave(e) {
        if (1 == g_options.gallery_pause_on_mouseover && 1 == g_temp.isPlayMode && g_objSlider && 0 == g_objSlider.isSlideActionActive()) {
            var i = g_objSlider.isCurrentSlideLoadingImage();
            0 == i && t.continuePlaying()
        }
    }

    function onKeyPress(e) {
        var i = jQuery(e.target);
        if (i.is("textarea") || i.is("select") || i.is("input")) return !0;
        var n = e.charCode ? e.charCode : e.keyCode ? e.keyCode : e.which ? e.which : 0;
        switch (n) {
            case 39:
                t.nextItem(), e.preventDefault();
                break;
            case 37:
                t.prevItem(), e.preventDefault()
        }
        g_objGallery.trigger(t.events.GALLERY_KEYPRESS, n)
    }

    function onGalleryResized() {
        var e = t.getSize();
        if (0 == e.width) return !0;
        t.setSizeClass();
        var e = t.getSize();
        (e.width != g_temp.lastWidth || e.height != g_temp.lastHeight) && (1 == g_options.gallery_preserve_ratio && 0 == g_temp.isFreestyleMode && setHeightByOriginalRatio(), storeLastSize(), g_objGallery.trigger(t.events.SIZE_CHANGE))
    }

    function onThumbsChange(e) {
        "visible" == g_options.gallery_images_preload_type && 0 == g_temp.isAllItemsPreloaded && preloadBigImages()
    }

    function onFullScreenChange() {
        var e = g_functions.isFullScreen(),
            i = e ? t.events.ENTER_FULLSCREEN : t.events.EXIT_FULLSCREEN,
            n = g_functions.getGlobalData("fullscreenID");
        return g_galleryID !== n ? !0 : (e ? g_objWrapper.addClass("ug-fullscreen") : g_objWrapper.removeClass("ug-fullscreen"), g_objGallery.trigger(i), void onGalleryResized())
    }

    function onItemImageUpdated(e, i) {
        var n = t.getItem(i);
        checkPreloadItemImage(n)
    }

    function onCurrentSlideImageLoadEnd() {
        1 == t.isPlayMode() && t.continuePlaying()
    }

    function initEvents() {
        if (g_objWrapper.on("dragstart", function(e) {
                e.preventDefault()
            }), g_objGallery.on(t.events.ITEM_IMAGE_UPDATED, onItemImageUpdated), g_objThumbs) switch (g_temp.thumbsType) {
            case "strip":
                jQuery(g_objThumbs).on(g_objThumbs.events.STRIP_MOVE, onThumbsChange);
                break;
            case "grid":
                jQuery(g_objThumbs).on(g_objThumbs.events.PANE_CHANGE, onThumbsChange)
        }
        if ("advance" == g_options.gallery_mousewheel_role && 0 == g_temp.isFreestyleMode && g_objWrapper.on("mousewheel", t.onGalleryMouseWheel), storeLastSize(), jQuery(window).resize(function() {
                g_objWrapper.css("width", "auto"), g_functions.whenContiniousEventOver("gallery_resize", onGalleryResized, g_temp.resizeDelay)
            }), g_functions.addFullScreenChangeEvent(onFullScreenChange), g_objSlider) {
            if (jQuery(g_objSlider).on(g_objSlider.events.ITEM_CHANGED, function() {
                    var e = g_objSlider.getCurrentItemIndex(); - 1 != e && t.selectItem(e)
                }), 1 == g_options.gallery_pause_on_mouseover) {
                var e = g_objSlider.getElement();
                e.hover(onSliderMouseEnter, onSliderMouseLeave), g_objGallery.on(t.events.ENTER_FULLSCREEN, function() {
                    onSliderMouseLeave()
                })
            }
            retriggerEvent(g_objSlider, g_objSlider.events.ACTION_START, t.events.SLIDER_ACTION_START), retriggerEvent(g_objSlider, g_objSlider.events.ACTION_END, t.events.SLIDER_ACTION_END), jQuery(g_objSlider).on(g_objSlider.events.CURRENTSLIDE_LOAD_END, onCurrentSlideImageLoadEnd)
        }
        1 == g_options.gallery_control_keyboard && jQuery(document).keydown(onKeyPress)
    }

    function __________GENERAL_______() {}

    function cacheItems(e, t) {
        if (t) {
            var i = t;
            "noitems" != i && (i = jQuery(t).clone())
        } else var i = g_objWrapper.children().clone();
        g_objCache[e] = i
    }

    function removeAllSizeClasses(e) {
        e || (e = g_objWrapper), e.removeClass("ug-under-480"), e.removeClass("ug-under-780"), e.removeClass("ug-under-960")
    }

    function retriggerEvent(e, t, i) {
        jQuery(e).on(t, function(e) {
            g_objGallery.trigger(i, [this])
        })
    }

    function advanceNextStep() {
        var e = jQuery.now(),
            i = e - g_temp.playTimeLastStep;
        if (g_temp.playTimePassed += i, g_temp.playTimeLastStep = e, g_temp.objProgress) {
            var n = g_temp.playTimePassed / g_options.gallery_play_interval;
            g_temp.objProgress.setProgress(n)
        }
        g_temp.playTimePassed >= g_options.gallery_play_interval && (t.nextItem(), g_temp.playTimePassed = 0)
    }

    function unselectSeletedItem() {
        return null == g_selectedItem ? !0 : (g_objThumbs && g_objThumbs.setThumbUnselected(g_selectedItem.objThumbWrapper), g_selectedItem = null, void(g_selectedItemIndex = -1))
    }

    function toFakeFullScreen() {
        jQuery("body").addClass("ug-body-fullscreen"), g_objWrapper.addClass("ug-fake-fullscreen"), g_temp.isFakeFullscreen = !0, g_objGallery.trigger(t.events.ENTER_FULLSCREEN), g_objGallery.trigger(t.events.SIZE_CHANGE)
    }

    function exitFakeFullscreen() {
        jQuery("body").removeClass("ug-body-fullscreen"), g_objWrapper.removeClass("ug-fake-fullscreen"), g_temp.isFakeFullscreen = !1, g_objGallery.trigger(t.events.EXIT_FULLSCREEN), g_objGallery.trigger(t.events.SIZE_CHANGE)
    }
    var t = this,
        g_galleryID, g_objGallery = jQuery(t),
        g_objWrapper, g_objParent, g_objThumbs, g_objSlider, g_functions = new UGFunctions,
        g_objTabs, g_arrItems = [],
        g_numItems, g_selectedItem = null,
        g_selectedItemIndex = -1,
        g_objTheme, g_objCache = {};
    this.events = {
        ITEM_CHANGE: "item_change",
        SIZE_CHANGE: "size_change",
        ENTER_FULLSCREEN: "enter_fullscreen",
        EXIT_FULLSCREEN: "exit_fullscreen",
        START_PLAY: "start_play",
        STOP_PLAY: "stop_play",
        PAUSE_PLAYING: "pause_playing",
        CONTINUE_PLAYING: "continue_playing",
        SLIDER_ACTION_START: "slider_action_start",
        SLIDER_ACTION_END: "slider_action_end",
        ITEM_IMAGE_UPDATED: "item_image_updated",
        GALLERY_KEYPRESS: "gallery_keypress",
        GALLERY_BEFORE_REQUEST_ITEMS: "gallery_before_request_items"
    };
    var g_options = {
            gallery_width: 900,
            gallery_height: 500,
            gallery_min_width: 150,
            gallery_min_height: 100,
            gallery_theme: "default",
            gallery_skin: "default",
            gallery_images_preload_type: "minimal",
            gallery_autoplay: !1,
            gallery_play_interval: 3e3,
            gallery_pause_on_mouseover: !0,
            gallery_mousewheel_role: "zoom",
            gallery_control_keyboard: !0,
            gallery_carousel: !0,
            gallery_preserve_ratio: !0,
            gallery_background_color: "",
            gallery_debug_errors: !1,
            gallery_shuffle: !1,
            gallery_urlajax: null,
            gallery_enable_tabs: !1,
            gallery_enable_cache: !0,
            gallery_initial_catid: ""
        },
        g_temp = {
            objCustomOptions: {},
            isAllItemsPreloaded: !1,
            isFreestyleMode: !1,
            lastWidth: 0,
            lastHeigh: 0,
            handleResize: null,
            isInited: !1,
            isPlayMode: !1,
            isPlayModePaused: !1,
            playTimePassed: 0,
            playTimeLastStep: 0,
            playHandle: "",
            playStepInterval: 33,
            objProgress: null,
            isFakeFullscreen: !1,
            thumbsType: null,
            isYoutubePresent: !1,
            isVimeoPresent: !1,
            isHtml5VideoPresent: !1,
            isSoundCloudPresent: !1,
            isWistiaPresent: !1,
            resizeDelay: 100,
            isRunFirstTime: !0,
            originalOptions: {}
        };
    this.onItemBigImageLoaded = function(e, t) {
        if (!t) var t = jQuery(this);
        var i = t.data("itemIndex"),
            n = g_arrItems[i];
        n.isBigImageLoaded = !0;
        var r = g_functions.getImageOriginalSize(t);
        n.imageWidth = r.width, n.imageHeight = r.height
    }, this.checkFillImageSize = function(e, t) {
        if (!t) {
            var i = e.data("itemIndex");
            if (void 0 === i) throw new Error("Wrong image given to gallery.checkFillImageSize");
            var t = g_arrItems[i]
        }
        var n = g_functions.getImageOriginalSize(e);
        t.imageWidth = n.width, t.imageHeight = n.height
    }, this.setFreestyleMode = function() {
        g_temp.isFreestyleMode = !0
    }, this.attachThumbsPanel = function(e, t) {
        g_temp.thumbsType = e, g_objThumbs = t
    }, this.initSlider = function(e, i) {
        if (!e) var e = {};
        e = jQuery.extend(e, g_temp.objCustomOptions), g_objSlider = new UGSlider, g_objSlider.init(t, e, i)
    }, this.onGalleryMouseWheel = function(e, i, n, r) {
        e.preventDefault(), i > 0 ? t.prevItem() : t.nextItem()
    }, this.destroy = function() {
        if (g_objWrapper.off("dragstart"), g_objGallery.off(t.events.ITEM_IMAGE_UPDATED), g_objThumbs) switch (g_temp.thumbsType) {
            case "strip":
                jQuery(g_objThumbs).off(g_objThumbs.events.STRIP_MOVE);
                break;
            case "grid":
                jQuery(g_objThumbs).off(g_objThumbs.events.PANE_CHANGE)
        }
        if (g_objWrapper.off("mousewheel"), jQuery(window).off("resize"), g_functions.destroyFullScreenChangeEvent(), g_objSlider) {
            jQuery(g_objSlider).off(g_objSlider.events.ITEM_CHANGED);
            var e = g_objSlider.getElement();
            e.off("mouseenter"), e.off("mouseleave"), g_objGallery.off(t.events.ENTER_FULLSCREEN), jQuery(g_objSlider).off(g_objSlider.events.ACTION_START), jQuery(g_objSlider).off(g_objSlider.events.ACTION_END), jQuery(g_objSlider).off(g_objSlider.events.CURRENTSLIDE_LOAD_END)
        }
        1 == g_options.gallery_control_keyboard && jQuery(document).off("keydown"), g_objTheme && "function" == typeof g_objTheme.destroy && g_objTheme.destroy(), g_objWrapper.html("")
    }, this.getArrItems = function() {
        return g_arrItems
    }, this.getObjects = function() {
        var e = {
            g_galleryID: g_galleryID,
            g_objWrapper: g_objWrapper,
            g_objThumbs: g_objThumbs,
            g_objSlider: g_objSlider,
            g_options: g_options,
            g_arrItems: g_arrItems,
            g_numItems: g_numItems
        };
        return e
    }, this.getObjSlider = function() {
        return g_objSlider
    }, this.getItem = function(e) {
        if (0 > e) throw new Error("item with index: " + e + " not found");
        if (e >= g_numItems) throw new Error("item with index: " + e + " not found");
        return g_arrItems[e]
    }, this.getWidth = function() {
        var e = t.getSize();
        return e.width
    }, this.getHeight = function() {
        var e = t.getSize();
        return e.height
    }, this.getSize = function() {
        var e = g_functions.getElementSize(g_objWrapper);
        return e.orig_width = g_options.gallery_width, e.orig_height = g_options.gallery_height, e.orig_ratio = e.orig_width / e.orig_height, e
    }, this.getGalleryID = function() {
        var e = g_galleryID.replace("#", "");
        return e
    }, this.getNextItem = function(e, t) {
        "object" == typeof e && (e = e.index);
        var i = e + 1;
        if (t !== !0 && 1 == g_numItems) return null;
        if (i >= g_numItems) {
            if (1 != g_options.gallery_carousel && t !== !0) return null;
            i = 0
        }
        var n = g_arrItems[i];
        return n
    }, this.getPrevItem = function(e) {
        "object" == typeof e && (e = e.index);
        var t = e - 1;
        if (0 > t) {
            if (1 != g_options.gallery_carousel && forceCarousel !== !0) return null;
            t = g_numItems - 1
        }
        var i = g_arrItems[t];
        return i
    }, this.getSelectedItem = function() {
        return g_selectedItem
    }, this.getSelectedItemIndex = function() {
        return g_selectedItemIndex
    }, this.getNumItems = function() {
        return g_numItems
    }, this.isLastItem = function() {
        return g_selectedItemIndex == g_numItems - 1 ? !0 : !1
    }, this.isFirstItem = function() {
        return 0 == g_selectedItemIndex ? !0 : !1
    }, this.getOptions = function() {
        return g_options
    }, this.getElement = function() {
        return g_objWrapper
    }, this.___________SET_CONTROLS___________ = function() {}, this.setNextButton = function(e) {
        e.data("ug-button", !0), g_functions.setButtonOnClick(e, t.nextItem)
    }, this.setPrevButton = function(e) {
        e.data("ug-button", !0), g_functions.setButtonOnClick(e, t.prevItem)
    }, this.setFullScreenToggleButton = function(e) {
        e.data("ug-button", !0), g_functions.setButtonOnClick(e, t.toggleFullscreen), g_objGallery.on(t.events.ENTER_FULLSCREEN, function() {
            e.addClass("ug-fullscreenmode")
        }), g_objGallery.on(t.events.EXIT_FULLSCREEN, function() {
            e.removeClass("ug-fullscreenmode")
        })
    }, this.destroyFullscreenButton = function(e) {
        g_functions.destroyButton(e), g_objGallery.off(t.events.ENTER_FULLSCREEN), g_objGallery.off(t.events.EXIT_FULLSCREEN)
    }, this.setPlayButton = function(e) {
        e.data("ug-button", !0), g_functions.setButtonOnClick(e, t.togglePlayMode), g_objGallery.on(t.events.START_PLAY, function() {
            e.addClass("ug-stop-mode")
        }), g_objGallery.on(t.events.STOP_PLAY, function() {
            e.removeClass("ug-stop-mode")
        })
    }, this.destroyPlayButton = function(e) {
        g_functions.destroyButton(e), g_objGallery.off(t.events.START_PLAY), g_objGallery.off(t.events.STOP_PLAY)
    }, this.setProgressIndicator = function(e) {
        g_temp.objProgress = e
    }, this.setTextContainers = function(e, i) {
        g_objGallery.on(t.events.ITEM_CHANGE, function() {
            var n = t.getSelectedItem();
            e.html(n.title), i.html(n.description)
        })
    }, this.showDisabledOverlay = function() {
        g_objWrapper.children(".ug-overlay-disabled").show()
    }, this.hideDisabledOverlay = function() {
        g_objWrapper.children(".ug-overlay-disabled").hide()
    }, this.___________END_SET_CONTROLS___________ = function() {}, this.___________PLAY_MODE___________ = function() {}, this.startPlayMode = function() {
        if (g_temp.isPlayMode = !0, g_temp.isPlayModePaused = !1, g_temp.playTimePassed = 0, g_temp.playTimeLastStep = jQuery.now(), g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval), g_temp.objProgress) {
            var e = g_temp.objProgress.getElement();
            g_temp.objProgress.setProgress(0), e.show()
        }
        g_objGallery.trigger(t.events.START_PLAY), g_objSlider && 1 == g_objSlider.isCurrentSlideLoadingImage() && t.pausePlaying()
    }, this.resetPlaying = function() {
        return 0 == g_temp.isPlayMode ? !0 : (g_temp.playTimePassed = 0, void(g_temp.playTimeLastStep = jQuery.now()))
    }, this.pausePlaying = function() {
        return 1 == g_temp.isPlayModePaused ? !0 : (g_temp.isPlayModePaused = !0, clearInterval(g_temp.playHandle), void g_objGallery.trigger(t.events.PAUSE_PLAYING))
    }, this.continuePlaying = function() {
        return 0 == g_temp.isPlayModePaused ? !0 : (g_temp.isPlayModePaused = !1, g_temp.playTimeLastStep = jQuery.now(), void(g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval)))
    }, this.stopPlayMode = function() {
        if (g_temp.isPlayMode = !1, clearInterval(g_temp.playHandle), g_temp.playTimePassed = 0, g_temp.objProgress) {
            var e = g_temp.objProgress.getElement();
            e.hide()
        }
        g_objGallery.trigger(t.events.STOP_PLAY)
    }, this.isPlayMode = function() {
        return g_temp.isPlayMode
    }, this.togglePlayMode = function() {
        0 == t.isPlayMode() ? t.startPlayMode() : t.stopPlayMode()
    }, this.___________GENERAL_EXTERNAL___________ = function() {}, this.shuffleItems = function() {
        g_arrItems = g_functions.arrayShuffle(g_arrItems);
        for (var e in g_arrItems) g_arrItems[e].index = parseInt(e)
    }, this.setOptions = function(e) {
        g_options = jQuery.extend(g_options, e)
    }, this.selectItem = function(e, i) {
        "number" == typeof e && (e = t.getItem(e));
        var n = e.index;
        if (n == g_selectedItemIndex) return !0;
        if (unselectSeletedItem(), g_selectedItem = e, g_selectedItemIndex = n, g_objGallery.trigger(t.events.ITEM_CHANGE, [e, i]), 1 == g_temp.isPlayMode) {
            t.resetPlaying();
            var r = g_objSlider.isCurrentSlideLoadingImage();
            1 == r && t.pausePlaying()
        }
    }, this.nextItem = function() {
        var e = g_selectedItemIndex + 1;
        return 0 == g_numItems ? !0 : 0 == g_options.gallery_carousel && e >= g_numItems ? !0 : (e >= g_numItems && (e = 0), void t.selectItem(e, "next"))
    }, this.prevItem = function() {
        var e = g_selectedItemIndex - 1;
        return -1 == g_selectedItemIndex && (e = 0), 0 == g_numItems ? !0 : 0 == g_options.gallery_carousel && 0 > e ? !0 : (0 > e && (e = g_numItems - 1), void t.selectItem(e, "prev"))
    }, this.isFullScreen = function() {
        return 1 == g_temp.isFakeFullscreen ? !0 : 1 == g_functions.isFullScreen() ? !0 : !1
    }, this.isFakeFullscreen = function() {
        return g_temp.isFakeFullscreen
    }, this.toFullScreen = function() {
        g_functions.setGlobalData("fullscreenID", g_galleryID);
        var e = g_objWrapper.get(0),
            t = g_functions.toFullscreen(e);
        0 == t && toFakeFullScreen()
    }, this.exitFullScreen = function() {
        1 == g_temp.isFakeFullscreen ? exitFakeFullscreen() : g_functions.exitFullscreen()
    }, this.toggleFullscreen = function() {
        0 == t.isFullScreen() ? t.toFullScreen() : t.exitFullScreen()
    }, this.resize = function(e, t, i) {
        g_objWrapper.css("width", "auto"), g_objWrapper.css("max-width", e + "px"), t && g_objWrapper.height(t), i || i === !0 || onGalleryResized()
    }, this.setSizeClass = function(e, i) {
        if (!e) var e = g_objWrapper;
        if (!i) var n = t.getSize(),
            i = n.width;
        var r = "";
        return 480 >= i ? r = "ug-under-480" : 780 >= i ? r = "ug-under-780" : 960 > i && (r = "ug-under-960"), 1 == e.hasClass(r) ? !0 : (removeAllSizeClasses(e), void("" != r && e.addClass(r)))
    }, this.isMobileMode = function() {
        return g_objWrapper.hasClass("ug-under-480") ? !0 : !1
    }, this.changeItems = function(e, t) {
        if (!e) var e = "noitems";
        runGallery(g_galleryID, "nochange", e, t)
    }, this.showErrorMessageReplaceGallery = function(e) {
        showErrorMessage(e)
    }, this.__________AJAX_REQUEST_______ = function() {}, this.ajaxRequest = function(e, t, i, n) {
        var r = "html";
        if (1 == i && (r = "json"), !n || "function" != typeof n) throw new Error("ajaxRequest error: success function should be passed");
        var o = g_options.gallery_urlajax;
        if ("" == o) throw new Error("ajaxRequest error: Ajax url don't passed");
        if ("undefined" == typeof t) var t = {};
        var a = {
            action: "unitegallery_ajax_action",
            client_action: e,
            galleryID: g_galleryID,
            data: t
        };
        jQuery.ajax({
            type: "post",
            url: g_options.gallery_urlajax,
            dataType: "json",
            data: a,
            success: function(e) {
                return e ? -1 == e || 0 === e ? (showErrorMessage("ajax error!!!"), !1) : "undefined" == typeof e.success ? (showErrorMessage("The 'success' param is a must!"), !1) : 0 == e.success ? (showErrorMessage(e.message), !1) : void n(e) : (showErrorMessage("Empty ajax response!", "Ajax Error"), !1)
            },
            error: function(e, t, i) {
                console.log("Ajax Error!!! " + t)
            }
        })
    }, this.requestNewItems = function(e, i, n) {
        var r = g_options.gallery_enable_cache;
        if (n || (n = e), 1 == i && (r = !1), 1 == r && g_objCache.hasOwnProperty(n)) {
            var o = g_objCache[n];
            t.changeItems(o, n)
        } else g_objGallery.trigger(t.events.GALLERY_BEFORE_REQUEST_ITEMS), t.ajaxRequest("front_get_cat_items", {
            catid: e
        }, !0, function(e) {
            var i = e.html;
            t.changeItems(i, n)
        })
    }, this.run = function(e, t) {
        g_options.gallery_debug_errors;
        if (t && t.hasOwnProperty("gallery_debug_errors") && (g_options.gallery_debug_errors = t.gallery_debug_errors), 1 == g_options.gallery_debug_errors) try {
            runGallery(e, t)
        } catch (i) {
            if ("object" == typeof i) {
                var n = i.message,
                    r = i.lineNumber,
                    o = i.fileName;
                i.stack;
                n += " <br><br> in file: " + o, n += " <b> line " + r + "</b>", trace(i)
            } else var n = i;
            n = n.replace("Error:", ""), showErrorMessage(n)
        } else runGallery(e, t)
    }
}

function UGLightbox() {
    function e(e, i) {
        ee = e, B = jQuery(e), re = jQuery.extend(re, ae), re = jQuery.extend(re, i), oe.originalOptions = jQuery.extend({}, re), "compact" == re.lightbox_type && (oe.isCompact = !0, re = jQuery.extend(re, se), re = jQuery.extend(re, i)), t(), 1 == oe.putSlider ? (ee.initSlider(re, "lightbox"), g_objects = e.getObjects(), te = g_objects.g_objSlider) : te = null, 1 == re.lightbox_show_textpanel ? ne.init(ee, re, "lightbox") : ne = null
    }

    function t() {
        1 == oe.isCompact && 1 == re.lightbox_show_textpanel && (re.lightbox_slider_image_padding_bottom = oe.initTextPanelHeight), 1 == oe.isCompact && "inside" == re.lightbox_arrows_position && (oe.isArrowsInside = !0), 1 == oe.isArrowsInside && 0 == re.lightbox_arrows_inside_alwayson && (oe.isArrowsOnHoverMode = !0)
    }

    function i() {
        var e = "",
            t = "";
        1 == oe.isCompact && (t = " ug-lightbox-compact"), e += "<div class='ug-gallery-wrapper ug-lightbox" + t + "'>", e += "<div class='ug-lightbox-overlay'></div>", 0 == oe.isCompact && (e += "<div class='ug-lightbox-top-panel'>"), e += "<div class='ug-lightbox-top-panel-overlay'></div>", e += "<div class='ug-lightbox-button-close'></div>", re.lightbox_show_numbers && (e += "<div class='ug-lightbox-numbers'></div>"), 0 == oe.isCompact && (e += "</div>"), e += "<div class='ug-lightbox-arrow-left'></div>", e += "<div class='ug-lightbox-arrow-right'></div>", e += "</div>", Y = jQuery(e), jQuery("body").append(Y), te && te.setHtml(Y), U = Y.children(".ug-lightbox-overlay"), 0 == oe.isCompact && (K = Y.children(".ug-lightbox-top-panel")), Z = Y.find(".ug-lightbox-button-close"), re.lightbox_show_numbers && (q = Y.find(".ug-lightbox-numbers")), V = Y.children(".ug-lightbox-arrow-left"), X = Y.children(".ug-lightbox-arrow-right"), ne && (K ? ne.appendHTML(K) : ne.appendHTML(Y))
    }

    function n() {
        if (null !== re.lightbox_overlay_color && U.css("background-color", re.lightbox_overlay_color), null !== re.lightbox_overlay_opacity && U.fadeTo(0, re.lightbox_overlay_opacity), K && null !== re.lightbox_top_panel_opacity && K.children(".ug-lightbox-top-panel-overlay").fadeTo(0, re.lightbox_top_panel_opacity), q) {
            var e = {};
            null !== re.lightbox_numbers_size && (e["font-size"] = re.lightbox_numbers_size + "px"), re.lightbox_numbers_color && (e.color = re.lightbox_numbers_color), null !== re.lightbox_numbers_padding_right && (e["padding-right"] = re.lightbox_numbers_padding_right + "px"), null !== re.lightbox_numbers_padding_top && (e["padding-top"] = re.lightbox_numbers_padding_top + "px"), q.css(e)
        }
    }

    function r(e) {
        if (!te) return !0;
        var t = {
            slider_image_padding_top: e,
            slider_video_padding_top: e
        };
        te.setOptions(t), te.refreshSlideItems()
    }

    function o() {
        if (!K) return !1;
        if (!ne) return !1;
        var e = K.height();
        if (0 == e) return !1;
        var t = e,
            i = ne.getSize().height;
        e != oe.topPanelHeight && (t = oe.topPanelHeight), i > t && (t = i), e != t && (K.height(t), te && 0 == te.isAnimating() && r(t))
    }

    function a(e) {
        var t = {},
            i = re.lightbox_textpanel_width,
            n = 47,
            r = 40,
            a = e.width - n - r;
        i > a ? (t.textpanel_padding_left = n, t.textpanel_padding_right = r, t.textpanel_title_text_align = "center", t.textpanel_desc_text_align = "center") : (t.textpanel_padding_left = Math.floor((e.width - i) / 2), t.textpanel_padding_right = t.textpanel_padding_left, t.textpanel_title_text_align = "left", t.textpanel_desc_text_align = "left", re.lightbox_textpanel_title_text_align && (t.textpanel_title_text_align = re.lightbox_textpanel_desc_text_align), re.lightbox_textpanel_desc_text_align && (t.textpanel_desc_text_align = re.lightbox_textpanel_desc_text_align)), ne.setOptions(t), ne.refresh(!0, !0), o(), ne.positionPanel()
    }

    function s(e) {
        if (0 == oe.isOpened) return !1;
        if (!ne) return !1;
        if (!te) return !1;
        var t = ie.getElementSize(Y),
            i = ne.getSize();
        if (0 == i.width || i.height > 120) return !1;
        if (!e) var n = te.getSlideImage(),
            e = ie.getElementSize(n);
        if (0 == e.height || 0 == e.width) return !1;
        var r = e.bottom + i.height;
        if (r < t.height) return !1;
        var o = te.getOptions(),
            a = i.height;
        if (a != o.slider_image_padding_bottom) {
            var s = {
                slider_image_padding_bottom: a
            };
            if (0 == te.isAnimating()) return te.setOptions(s), te.refreshSlideItems(), !0
        }
        return !1
    }

    function l(e, t) {
        if (!e) var i = te.getSlideImage(),
            e = ie.getElementSize(i);
        oe.textPanelTop = e.bottom, t === !0 && ne.positionPanel(oe.textPanelTop, oe.textPanelLeft)
    }

    function u(e) {
        var t = (ie.getElementSize(Y), te.getSlideImage()),
            i = ie.getElementSize(t);
        if (0 == i.width) return !1;
        oe.textPanelLeft = i.left, oe.textPanelTop = i.bottom;
        var n = i.width;
        if (q) {
            var r = ie.getElementSize(q);
            n -= r.width;
            var o = i.right - r.width;
            ie.placeElement(q, o, oe.textPanelTop)
        }
        ne && (ne.show(), ne.refresh(!0, !0, n), l(i));
        var a = s(i);
        0 == a && (oe.positionFrom = "handleCompactTextpanelSizes", ne && (ne.positionPanel(oe.textPanelTop, oe.textPanelLeft), e === !0 && (e(), P())))
    }

    function d() {
        if (0 == te.isCurrentSlideType("image")) return !0;
        var e = 1 == te.isCurrentImageInPlace();
        return e
    }

    function _(e, t) {
        if (0 == oe.isArrowsInside) return !1;
        if (!V) return !1;
        var i = d();
        if (V.show(), X.show(), oe.positionFrom = "positionArrowsInside", 1 == oe.isArrowsOnHoverMode && 1 == i && 0 == v() && b(!0), 0 == i) var n = ie.getElementRelativePos(V, "left", re.lightbox_arrows_offset),
            r = ie.getElementRelativePos(V, "middle"),
            o = ie.getElementRelativePos(X, "right", re.lightbox_arrows_offset),
            a = r;
        else var s = te.getSlideImage(),
            l = ie.getElementSize(s),
            n = (ie.getElementSize(te.getElement()), ie.getElementRelativePos(V, "left", 0, s) + l.left + re.lightbox_arrows_inside_offset),
            r = ie.getElementRelativePos(V, "middle", 0, s) + l.top,
            o = ie.getElementRelativePos(V, "right", 0, s) + l.left - re.lightbox_arrows_inside_offset,
            a = r;
        if (t === !0) {
            var u = {
                    left: n,
                    top: r
                },
                _ = {
                    left: o,
                    top: a
                };
            V.stop().animate(u, {
                duration: oe.fadeDuration
            }), X.stop().animate(_, {
                duration: oe.fadeDuration
            })
        } else V.stop(), X.stop(), ie.placeElement(V, n, r), ie.placeElement(X, o, a);
        1 == e && I(t)
    }

    function g(e, t) {
        oe.positionFrom = null;
        var i = d(),
            n = 2,
            r = ie.getElementRelativePos(Z, "right", 2, Y);
        if (0 == i) var o = n,
            a = r;
        else {
            var s = te.getSlideImage(),
                l = ie.getElementSize(s),
                u = ie.getElementSize(te.getElement()),
                _ = ie.getElementSize(Z);
            u.top == u.height && (u.top = 0);
            var a = u.left + l.right - _.width / 2 + re.lightbox_compact_closebutton_offsetx,
                o = u.top + l.top - _.height / 2 - re.lightbox_compact_closebutton_offsety;
            n > o && (o = n), a > r && (a = r)
        }
        if (t === !0) {
            var g = {
                left: a,
                top: o
            };
            Z.stop().animate(g, {
                duration: oe.fadeDuration
            })
        } else Z.stop(), ie.placeElement(Z, a, o);
        e === !0 && w(t)
    }

    function c() {
        Z && Z.stop().fadeTo(oe.fadeDuration, 0), f(), m(), oe.positionFrom = "hideCompactElements", 1 == oe.isArrowsInside && b()
    }

    function h() {
        Z && Z.hide(), V && 1 == oe.isArrowsInside && (V.hide(), X.hide()), q && q.hide(), ne && ne.hide()
    }

    function p() {
        var e = ie.getElementSize(Y);
        K && ie.setElementSizeAndPosition(K, 0, 0, e.width, oe.topPanelHeight), V && 0 == oe.isArrowsInside && (1 == re.lightbox_hide_arrows_onvideoplay && (V.show(), X.show()), ie.placeElement(V, "left", "middle", re.lightbox_arrows_offset), ie.placeElement(X, "right", "middle", re.lightbox_arrows_offset)), 0 == oe.isCompact && ie.placeElement(Z, "right", "top", 2, 2), ne && (oe.positionFrom = "positionElements", 0 == oe.isCompact ? a(e) : (S(), P()));
        var t = e.width,
            i = e.height,
            n = 0,
            r = 0;
        if (te) {
            if (K) {
                var o = K.height(),
                    s = {
                        slider_image_padding_top: o,
                        slider_video_padding_top: o
                    };
                te.setOptions(s)
            }
            te.setSize(t, i), te.setPosition(r, n)
        }
    }

    function f() {
        ne && ne.getElement().stop().fadeTo(oe.fadeDuration, 0)
    }

    function m() {
        q && q.stop().fadeTo(oe.fadeDuration, 0)
    }

    function v() {
        if (!oe.lastMouseX) return !0;
        var e = {
                pageX: oe.lastMouseX,
                pageY: oe.lastMouseY
            },
            t = te.isMouseInsideSlideImage(e);
        return t
    }

    function b(e, t) {
        return V ? 1 == oe.isArrowsOnHoverMode && t === !1 ? (1 == v(), !0) : void(e === !0 ? (V.stop().fadeTo(0, 0), X.stop().fadeTo(0, 0)) : (V.stop().fadeTo(oe.fadeDuration, 0), X.stop().fadeTo(oe.fadeDuration, 0))) : !1
    }

    function y() {
        if (!V) return !0;
        if (0 == V.is(":visible")) return !0;
        var e = V.css("opacity");
        return 1 != e ? !0 : !1
    }

    function I(e, t) {
        return V ? 1 == oe.isArrowsOnHoverMode && t !== !0 && 1 == d() ? !0 : 1 == te.isSwiping() ? !0 : (e !== !0 && (V.stop(), X.stop()), V.fadeTo(oe.fadeDuration, 1), void X.fadeTo(oe.fadeDuration, 1)) : !1
    }

    function w(e) {
        e !== !0 && Z.stop(), Z.fadeTo(oe.fadeDuration, 1)
    }

    function T(e) {
        if (!ne) return !1;
        if (!e) var e = te.getCurrentItem();
        ne.setTextPlain(e.title, e.description)
    }

    function E(e) {
        if (!q) return !1;
        if (!e) var e = te.getCurrentItem();
        var t = ee.getNumItems(),
            i = e.index + 1;
        q.html(i + " / " + t)
    }

    function S() {
        return ne ? void ne.getElement().show().stop().fadeTo(oe.fadeDuration, 1) : !1
    }

    function P() {
        q && q.stop().fadeTo(oe.fadeDuration, 1)
    }

    function x() {
        return 0 == oe.isCompact ? !0 : void c()
    }

    function j() {
        if (0 == oe.isCompact) return !0;
        if (oe.positionFrom = "onZoomChange", g(!1, !0), _(!1, !0), 1 == oe.isCompact) {
            var e = te.isCurrentSlideType("image") && 1 == te.isCurrentImageInPlace();
            0 == e ? (f(), m()) : (oe.positionFrom = "onZoomChange", S(), P())
        }
    }

    function C() {
        if (0 == oe.isCompact) return !0;
        oe.positionFrom = "onSliderAfterReturn", g(!0), _(!0);
        var e = s();
        0 == e && u(), S(), P()
    }

    function A(e, t) {
        return t = jQuery(t), 0 == oe.isCompact ? !0 : 0 == te.isSlideCurrent(t) ? !0 : (oe.positionFrom = "onSliderAfterPutImage", g(!0), _(!0), void u())
    }

    function M() {
        var e = te.getOptions(),
            t = e.slider_image_padding_top;
        if (K) {
            var i = K.height();
            i != t && r(i)
        }
        if (1 == oe.isCompact && (T(), E(), oe.positionFrom = "onSliderTransitionEnd", g(!0), _(!0), 0 == te.isSlideActionActive())) {
            var n = s();
            0 == n && u(), S(), P()
        }
    }

    function z(e, t) {
        0 == oe.isCompact ? (q && E(t), ne && (T(t), ne.positionElements(!1), o(), ne.positionPanel())) : 0 == te.isAnimating() && (ne && T(t), q && E(t)), 0 == oe.isSliderChangedOnce && (oe.isSliderChangedOnce = !0, $.trigger(J.events.LIGHTBOX_INIT))
    }

    function O(e, t) {
        var i = te.getSlideType();
        if ("image" != i && 0 == oe.isCompact && te.isSlideActionActive()) return !0;
        var n = te.isPreloading();
        if (1 == n) return J.close("slider"), !0;
        var r = te.isMouseInsideSlideImage(t);
        0 == r && J.close("slider_inside")
    }

    function L() {
        p()
    }

    function H() {
        V && 1 == re.lightbox_hide_arrows_onvideoplay && (V.hide(), X.hide())
    }

    function k() {
        V && 1 == re.lightbox_hide_arrows_onvideoplay && (V.show(), X.show())
    }

    function N(e, t) {
        switch (t) {
            case 27:
                1 == oe.isOpened && J.close("keypress")
        }
    }

    function R() {
        1 == oe.isArrowsOnHoverMode && I(!1, !0)
    }

    function G(e) {
        oe.positionFrom = "hideCompactElements", 1 == oe.isArrowsOnHoverMode && 1 == d() && b(!1, !0)
    }

    function Q(e) {
        oe.lastMouseX = e.pageX, oe.lastMouseY = e.pageY;
        var t = y();
        1 == t && v() && 0 == te.isAnimating() && (oe.positionFrom = "onMouseMove", V && 0 == V.is(":animated") && I(!1, !0))
    }

    function D(e, t, i, n) {
        if (0 == oe.isOpened) return !0;
        switch (re.gallery_mousewheel_role) {
            default:
                case "zoom":
                var r = te.getSlideType();
            "image" != r && e.preventDefault();
            break;
            case "none":
                    e.preventDefault();
                break;
            case "advance":
                    ee.onGalleryMouseWheel(e, t, i, n)
        }
    }

    function W() {
        if (U.on("touchstart", function(e) {
                e.preventDefault()
            }), U.on("touchend", function(e) {
                J.close("overlay")
            }), ie.addClassOnHover(X, "ug-arrow-hover"), ie.addClassOnHover(V, "ug-arrow-hover"), ie.addClassOnHover(Z), ee.setNextButton(X), ee.setPrevButton(V), Z.click(function() {
                J.close("button")
            }), B.on(ee.events.ITEM_CHANGE, z), te) {
            jQuery(te).on(te.events.TRANSITION_END, M), jQuery(te).on(te.events.CLICK, O);
            var e = te.getVideoObject();
            jQuery(e).on(e.events.PLAY_START, H), jQuery(e).on(e.events.PLAY_STOP, k), jQuery(te).on(te.events.START_DRAG, x), jQuery(te).on(te.events.TRANSITION_START, x), jQuery(te).on(te.events.AFTER_DRAG_CHANGE, C), jQuery(te).on(te.events.AFTER_RETURN, C), jQuery(te).on(te.events.AFTER_PUT_IMAGE, A), jQuery(te).on(te.events.ZOOM_CHANGE, j), jQuery(te).on(te.events.IMAGE_MOUSEENTER, R), jQuery(te).on(te.events.IMAGE_MOUSELEAVE, G)
        }
        jQuery(window).resize(function() {
            return 0 == oe.isOpened ? !0 : void ie.whenContiniousEventOver("lightbox_resize", L, 100)
        }), B.on(ee.events.GALLERY_KEYPRESS, N), 1 == oe.isArrowsOnHoverMode && jQuery(document).bind("mousemove", Q), Y.on("mousewheel", D)
    }

    function F() {
        oe.isCompact = !1, t(), re = jQuery.extend({}, oe.originalOptions), trace(re), te.setOptions(re)
    }
    var B, Y, U, V, X, Z, q, K, J = this,
        $ = jQuery(this),
        ee = new UniteGalleryMain,
        te = new UGSlider,
        ie = new UGFunctions,
        ne = new UGTextPanel,
        re = {
            lightbox_type: "wide",
            lightbox_show_textpanel: !0,
            lightbox_textpanel_width: 550,
            lightbox_hide_arrows_onvideoplay: !0,
            lightbox_arrows_position: "sides",
            lightbox_arrows_offset: 10,
            lightbox_arrows_inside_offset: 10,
            lightbox_arrows_inside_alwayson: !1,
            lightbox_overlay_color: null,
            lightbox_overlay_opacity: 1,
            lightbox_top_panel_opacity: null,
            lightbox_show_numbers: !0,
            lightbox_numbers_size: null,
            lightbox_numbers_color: null,
            lightbox_numbers_padding_top: null,
            lightbox_numbers_padding_right: null,
            lightbox_compact_closebutton_offsetx: 1,
            lightbox_compact_closebutton_offsety: 1
        };
    this.events = {
        LIGHTBOX_INIT: "lightbox_init"
    };
    var oe = {
            topPanelHeight: 44,
            initTextPanelHeight: 26,
            isOpened: !1,
            putSlider: !0,
            isCompact: !1,
            fadeDuration: 300,
            positionFrom: null,
            textPanelTop: null,
            textPanelLeft: null,
            isArrowsInside: !1,
            isArrowsOnHoverMode: !1,
            lastMouseX: null,
            lastMouseY: null,
            originalOptions: null,
            isSliderChangedOnce: !1
        },
        ae = {
            lightbox_slider_controls_always_on: !0,
            lightbox_slider_enable_bullets: !1,
            lightbox_slider_enable_arrows: !1,
            lightbox_slider_enable_progress_indicator: !1,
            lightbox_slider_enable_play_button: !1,
            lightbox_slider_enable_fullscreen_button: !1,
            lightbox_slider_enable_zoom_panel: !1,
            lightbox_slider_enable_text_panel: !1,
            lightbox_slider_scale_mode_media: "down",
            lightbox_slider_scale_mode: "down",
            lightbox_slider_loader_type: 3,
            lightbox_slider_loader_color: "black",
            lightbox_slider_transition: "fade",
            lightbox_slider_image_padding_top: oe.topPanelHeight,
            lightbox_slider_image_padding_bottom: 10,
            lightbox_slider_video_padding_top: oe.topPanelHeight,
            lightbox_slider_video_padding_bottom: 0,
            lightbox_textpanel_align: "middle",
            lightbox_textpanel_padding_top: 5,
            lightbox_textpanel_padding_bottom: 5,
            slider_video_constantsize: !1,
            lightbox_slider_image_border: !1,
            lightbox_textpanel_enable_title: !0,
            lightbox_textpanel_enable_description: !1,
            lightbox_textpanel_desc_style_as_title: !0,
            lightbox_textpanel_enable_bg: !1,
            video_enable_closebutton: !1,
            lightbox_slider_video_enable_closebutton: !1,
            video_youtube_showinfo: !1,
            lightbox_slider_enable_links: !1
        },
        se = {
            lightbox_overlay_opacity: .6,
            lightbox_slider_image_border: !0,
            lightbox_slider_image_shadow: !0,
            lightbox_slider_image_padding_top: 30,
            lightbox_slider_image_padding_bottom: 30,
            slider_video_constantsize: !0,
            lightbox_textpanel_align: "bottom",
            lightbox_textpanel_title_text_align: "left",
            lightbox_textpanel_desc_text_align: "left",
            lightbox_textpanel_padding_left: 10,
            lightbox_textpanel_padding_right: 10
        };
    this.destroy = function() {
        if (jQuery(document).unbind("mousemove"), U.off("touchstart"), U.off("touchend"), Z.off("click"), B.off(ee.events.ITEM_CHANGE), te) {
            jQuery(te).off(te.events.TRANSITION_END), jQuery(te).off(te.events.CLICK), jQuery(te).off(te.events.START_DRAG), jQuery(te).off(te.events.TRANSITION_START), jQuery(te).off(te.events.AFTER_DRAG_CHANGE), jQuery(te).off(te.events.AFTER_RETURN);
            var e = te.getVideoObject();
            jQuery(e).off(e.events.PLAY_START), jQuery(e).off(e.events.PLAY_STOP), jQuery(te).on(te.events.IMAGE_MOUSEENTER, R), jQuery(te).on(te.events.IMAGE_MOUSELEAVE, G), te.destroy()
        }
        jQuery(window).unbind("resize"), B.off(ee.events.GALLERY_KEYPRESS, N), Y.off("mousewheel"), Y.remove()
    }, this.open = function(e) {
        var t = ee.getItem(e);
        if (oe.isOpened = !0, te && te.setItem(t, "lightbox_open"), ne && ne.setTextPlain(t.title, t.description), U.stop().fadeTo(0, 0), Y.show(), Y.fadeTo(0, 1), U.stop().fadeTo(oe.fadeDuration, re.lightbox_overlay_opacity), p(), 1 == oe.isCompact) {
            var i = te.isPreloading();
            1 == i ? h() : 1 == oe.isArrowsInside && (V.hide(), X.hide())
        }
        te && te.startSlideAction()
    }, this.close = function(e) {
        oe.isOpened = !1, 1 == oe.isCompact && c(), te && te.stopSlideAction();
        var t = te.getSlideType();
        "image" != t ? Y.hide() : Y.fadeTo(oe.fadeDuration, 0, function() {
            Y.hide()
        })
    }, this.init = function(t, i) {
        e(t, i)
    }, this.putHtml = function() {
        var e = ee.isMobileMode();
        e && 1 == oe.isCompact && F(), i()
    }, this.run = function() {
        n(), te && te.run(), W()
    }
}

function UGCarousel() {
    function e(e, t) {
        g_objects = e.getObjects(), W = e, H = jQuery(e), k = g_objects.g_objWrapper, N = g_objects.g_arrItems, U = jQuery.extend(U, t), B.setFixedMode(), B.setApproveClickFunction(L), B.init(e, U), Y = B.getObjThumbs(), U = B.getOptions(), V.initTileWidth = U.tile_width, V.initTileHeight = U.tile_height, V.tileWidth = U.tile_width
    }

    function t(e) {
        if (!e) var e = k;
        var t = "<div class='ug-carousel-wrapper'><div class='ug-carousel-inner'></div></div>";
        k.append(t), R = k.children(".ug-carousel-wrapper"), G = R.children(".ug-carousel-inner"), B.setHtml(G), Y.getThumbs().fadeTo(0, 1)
    }

    function i(e, t) {
        if (!t) var t = V.initTileHeight / V.initTileWidth * e;
        V.tileWidth = e;
        var i = {
            tile_width: e,
            tile_height: t
        };
        B.setOptions(i), U.tile_width = e, U.tile_height = t, B.resizeAllTiles(e), m(!0)
    }

    function n() {
        if (null === V.carouselMaxWidth) throw new Error("The carousel width not set");
        if (V.tileWidth < V.initTileWidth) {
            var e = V.carouselMaxWidth - 2 * U.carousel_padding;
            e > V.initTileWidth && (e = V.initTileWidth), i(e);
            var t = F.getNumItemsInSpace(V.carouselMaxWidth, e, U.carousel_space_between_tiles)
        } else {
            var t = F.getNumItemsInSpace(V.carouselMaxWidth, V.tileWidth, U.carousel_space_between_tiles);
            if (0 >= t) {
                t = 1;
                var e = V.carouselMaxWidth - 2 * U.carousel_padding;
                i(e)
            }
        }
        var n = F.getSpaceByNumItems(t, V.tileWidth, U.carousel_space_between_tiles);
        n += 2 * U.carousel_padding, R.width(n), 1 == V.isFirstTimeRun ? (O(), B.run(), jQuery.each(N, function(e, t) {
            t.objThumbWrapper.data("index", e), k.trigger(V.eventSizeChange, [t.objThumbWrapper, !0]), t.objTileOriginal = t.objThumbWrapper.clone(!0, !0)
        }), m(!0), 1 == U.carousel_autoplay && Q.startAutoplay()) : (1 == U.carousel_autoplay && Q.pauseAutoplay(), w(0, !1), 1 == U.carousel_autoplay && Q.startAutoplay()), P(), V.isFirstTimeRun = !1
    }

    function r() {
        return F.getElementSize(G).left
    }

    function o(e) {
        return F.getMousePosition(e).pageX
    }

    function a() {
        var e = G.children(".ug-thumb-wrapper");
        return e
    }

    function s(e) {
        var t = F.getNumItemsInSpace(e, V.tileWidth, U.carousel_space_between_tiles);
        return t
    }

    function l() {
        return a().length
    }

    function u(e) {
        v(e);
        var t = a(),
            i = jQuery(t[e]);
        return i
    }

    function d() {
        return G.children(".ug-thumb-wrapper").first()
    }

    function _() {
        return G.children(".ug-thumb-wrapper").last()
    }

    function g(e, t, i) {
        var n = e.data("index");
        if (void 0 == n) throw new Error("every tile should have index!");
        for (var r = [], o = 0; t > o; o++) {
            if ("prev" == i) var a = W.getPrevItem(n, !0);
            else var a = W.getNextItem(n, !0);
            if (!a) throw new Error("the item to add is empty");
            var s = a.objTileOriginal.clone(!0, !0);
            n = a.index, s.addClass("cloned"), r.push(s)
        }
        return r
    }

    function c() {
        var e = F.getElementSize(R),
            t = F.getElementSize(G),
            i = t.width - e.width + t.left,
            n = V.sideSpace - i;
        return n
    }

    function h() {
        var e = -r(),
            t = V.sideSpace - e;
        return t
    }

    function p() {
        var e = F.getElementSize(R);
        return e.width
    }

    function f() {
        var e = p(),
            t = s(e);
        return t
    }

    function m(e) {
        if (!e) var e = !1;
        var t, i = a(),
            n = 0,
            r = 0;
        return jQuery.each(i, function(e, o) {
            o = jQuery(o), F.placeElement(o, n, 0);
            var a = F.getElementSize(o);
            n += a.width + U.carousel_space_between_tiles, r = Math.max(r, a.height), e == i.length - 1 && (t = a.right)
        }), G.width(t), r += 2 * U.carousel_padding, e === !0 && (G.height(r), R.height(r)), w(V.numCurrent, !1), t
    }

    function v(e) {
        if (e > a().length - 1) throw new Error("Wrogn tile number: " + e)
    }

    function b(e, t) {
        if ("left" == t) var i = d();
        else var i = _();
        var n = "left" == t ? "prev" : "next",
            r = g(i, e, n);
        jQuery.each(r, function(e, i) {
            "left" == t ? G.prepend(i) : G.append(i), k.trigger(V.eventSizeChange, i), B.loadTileImage(i)
        })
    }

    function y(e, t) {
        v(n);
        for (var i = a(), n = i.length, r = 0; e > r; r++) "left" == t ? jQuery(i[r]).remove() : jQuery(i[n - 1 - r]).remove()
    }

    function I(e) {
        var t = {
            left: e + "px"
        };
        G.css(t)
    }

    function w(e, t, i) {
        if (void 0 === t) {
            var t = !0;
            if (G.is(":animated")) return !0
        }
        var n = u(e),
            r = F.getElementSize(n),
            o = -r.left + U.carousel_padding,
            a = {
                left: o + "px"
            };
        if (t === !0) {
            var s = U.carousel_scroll_duration,
                l = U.carousel_scroll_easing;
            i === !0 && (s = V.scrollShortDuration, l = V.scrollShortEasing), G.stop(!0).animate(a, {
                duration: s,
                easing: l,
                queue: !1,
                complete: function() {
                    V.numCurrent = e, S(!0)
                }
            })
        } else V.numCurrent = e, G.css(a)
    }

    function T() {
        var e = -r(),
            t = s(e),
            i = F.getElementSize(u(t)).left,
            n = F.getElementSize(u(t + 1)).left;
        return Math.abs(i - e) < Math.abs(n - e) ? t : t + 1
    }

    function E() {
        var e = T();
        w(e, !0, !0)
    }

    function S() {
        var e = h(),
            t = c(),
            i = 0,
            n = 0,
            r = 0,
            o = 0,
            a = l();
        if (e > V.spaceActionSize) i = s(e), b(i, "left"), V.numCurrent += i;
        else if (e < -V.spaceActionSize) {
            var r = s(Math.abs(e));
            y(r, "left"), V.numCurrent -= r
        }
        if (t > V.spaceActionSize ? (n = s(t), b(n, "right")) : t < -V.spaceActionSize && (o = s(Math.abs(t)), y(o, "right")), o > a) throw new Error("Can't remove more then num tiles");
        var u = !1;
        return (i || n || r || o) && (m(), u = !0), u
    }

    function P(e) {
        F.placeElement(G, 0, U.carousel_padding), S()
    }

    function x() {
        "left" == U.carousel_autoplay_direction ? Q.scrollRight(1) : Q.scrollLeft(1)
    }

    function j(e) {
        return 1 == V.touchActive ? !0 : (V.touchActive = !0, Q.pauseAutoplay(), V.startTime = jQuery.now(), V.startMousePos = o(e), V.startInnerPos = r(), V.lastTime = V.startTime, V.lastMousePos = V.startMousePos, void F.storeEventData(e, V.storedEventID))
    }

    function C(e) {
        if (0 == V.touchActive) return !0;
        F.updateStoredEventData(e, V.storedEventID), e.preventDefault();
        var t = null;
        if (1 == U.carousel_vertical_scroll_ondrag && (t = F.handleScrollTop(V.storedEventID)), "vert" === t) return !0;
        V.lastMousePos = o(e);
        var i = V.lastMousePos - V.startMousePos,
            n = V.startInnerPos + i,
            r = i > 0 ? "prev" : "next",
            a = F.getElementSize(G).width;
        n > 0 && "prev" == r && (n /= 3), -a > n && "next" == r && (n = V.startInnerPos + i / 3), I(n)
    }

    function A(e) {
        return 0 == V.touchActive ? !0 : (V.touchActive = !1, E(), void Q.unpauseAutoplay())
    }

    function M(e) {
        return 0 == U.carousel_autoplay_pause_onhover ? !0 : void(1 == V.isPlayMode && 0 == V.isPaused && Q.pauseAutoplay())
    }

    function z(e) {
        return 0 == U.carousel_autoplay_pause_onhover ? !0 : void Q.unpauseAutoplay()
    }

    function O() {
        B.initEvents(), R.bind("mousedown touchstart", j), jQuery("body").bind("mousemove touchmove", C), jQuery(window).add("body").bind("mouseup touchend", A), R.hover(M, z)
    }

    function L() {
        var e = V.lastTime - V.startTime,
            t = Math.abs(V.lastMousePos - V.startMousePos);
        return e > 300 ? !1 : t > 30 ? !1 : !0
    }
    var H, k, N, R, G, Q = this,
        D = jQuery(this),
        W = new UniteGalleryMain,
        F = new UGFunctions,
        B = new UGTileDesign,
        Y = new UGThumbsGeneral,
        U = {
            carousel_padding: 8,
            carousel_space_between_tiles: 20,
            carousel_navigation_numtiles: 3,
            carousel_scroll_duration: 500,
            carousel_scroll_easing: "easeOutCubic",
            carousel_autoplay: !0,
            carousel_autoplay_timeout: 3e3,
            carousel_autoplay_direction: "right",
            carousel_autoplay_pause_onhover: !0,
            carousel_vertical_scroll_ondrag: !1
        };
    this.events = {
        START_PLAY: "carousel_start_play",
        PAUSE_PLAY: "carousel_pause_play",
        STOP_PLAY: "carousel_stop_play"
    };
    var V = {
        eventSizeChange: "thumb_size_change",
        isFirstTimeRun: !0,
        carouselMaxWidth: null,
        tileWidth: 0,
        initTileWidth: 0,
        initTileHeight: 0,
        sideSpace: 1500,
        spaceActionSize: 500,
        numCurrent: 0,
        touchActive: !1,
        startInnerPos: 0,
        lastTime: 0,
        startTime: 0,
        startMousePos: 0,
        lastMousePos: 0,
        scrollShortDuration: 200,
        scrollShortEasing: "easeOutQuad",
        handle: null,
        isPlayMode: !1,
        isPaused: !1,
        storedEventID: "carousel"
    };
    this.startAutoplay = function() {
        V.isPlayMode = !0, V.isPaused = !1, D.trigger(Q.events.START_PLAY), V.handle && clearInterval(V.handle), V.handle = setInterval(x, U.carousel_autoplay_timeout)
    }, this.unpauseAutoplay = function() {
        return 0 == V.isPlayMode ? !0 : 0 == V.isPaused ? !0 : void Q.startAutoplay()
    }, this.pauseAutoplay = function() {
        return 0 == V.isPlayMode ? !0 : (V.isPaused = !0, V.handle && clearInterval(V.handle), void D.trigger(Q.events.PAUSE_PLAY))
    }, this.stopAutoplay = function() {
        return 0 == V.isPlayMode ? !0 : (V.isPaused = !1, V.isPlayMode = !1, V.handle && clearInterval(V.handle), void D.trigger(Q.events.STOP_PLAY))
    }, this.destroy = function() {
        V.handle && clearInterval(V.handle), D.off(Q.events.START_PLAY), D.off(Q.events.STOP_PLAY), R.unbind("mousedown"), R.unbind("touchstart"), jQuery("body").unbind("mousemove"), jQuery("body").unbind("touchmove"), jQuery(window).add("body").unbind("mouseup").unbind("touchend"), R.off("mouseenter").off("mouseleave"), B.destroy()
    }, this.init = function(t, i, n) {
        n && this.setMaxWidth(n), e(t, i)
    }, this.setMaxWidth = function(e) {
        V.carouselMaxWidth = e
    }, this.setHtml = function(e) {
        t(e)
    }, this.getElement = function() {
        return R
    }, this.getObjTileDesign = function() {
        return B
    }, this.getEstimatedHeight = function() {
        var e = U.tile_height + 2 * U.carousel_padding;
        return e
    }, this.run = function() {
        n()
    }, this.scrollRight = function(e) {
        if (!e || "object" == typeof e) var e = U.carousel_navigation_numtiles;
        var t = f();
        e > t && (e = t);
        var i = V.numCurrent - e;
        0 >= i && (i = 0), w(i)
    }, this.scrollLeft = function(e) {
        if (!e || "object" == typeof e) var e = U.carousel_navigation_numtiles;
        var t = f();
        e > t && (e = t);
        var i = l(),
            n = V.numCurrent + e;
        n >= i && (n = i - 1), w(n)
    }, this.setScrollLeftButton = function(e) {
        F.setButtonMobileReady(e), F.setButtonOnClick(e, Q.scrollLeft)
    }, this.setScrollRightButton = function(e) {
        F.setButtonMobileReady(e), F.setButtonOnClick(e, Q.scrollRight)
    }, this.setPlayPauseButton = function(e) {
        F.setButtonMobileReady(e), 1 == V.isPlayMode && 0 == V.isPaused && e.addClass("ug-pause-icon"), D.on(Q.events.START_PLAY, function() {
            e.addClass("ug-pause-icon")
        }), D.on(Q.events.STOP_PLAY, function() {
            e.removeClass("ug-pause-icon")
        }), F.setButtonOnClick(e, function() {
            0 == V.isPlayMode || 1 == V.isPaused ? Q.startAutoplay() : Q.stopAutoplay()
        })
    }
}

function UGTabs() {
    function e(e, t) {
        u = e, a = jQuery(u), d = jQuery.extend(d, t), "select" == d.tabs_type ? l = jQuery(d.tabs_container) : s = jQuery(d.tabs_container + " .ug-tab")
    }

    function t() {
        o()
    }

    function i(e) {
        u.requestNewItems(e)
    }

    function n() {
        var e = d.tabs_class_selected,
            t = jQuery(this);
        if (t.hasClass(e)) return !0;
        s.not(t).removeClass(e), t.addClass(e);
        var n = t.data("catid");
        return n ? void i(n) : !0
    }

    function r() {
        var e = jQuery(this),
            t = e.val();
        return t ? void i(t) : !0
    }

    function o() {
        "select" == d.tabs_type ? l.change(r) : s.click(n)
    }
    var a, s, l, u = (jQuery(this), new UniteGalleryMain),
        d = (new UGFunctions, {
            tabs_type: "tabs",
            tabs_container: "#ug_tabs",
            tabs_class_selected: "ug-tab-selected"
        });
    this.events = {}, this.destroy = function() {
        l && l.off("change"), s && s.off("click")
    }, this.init = function(t, i) {
        e(t, i)
    }, this.run = function() {
        t()
    }
}

function UG_API(e) {
    function t(e) {
        var t = {
                index: e.index,
                title: e.title,
                description: e.description,
                urlImage: e.urlImage,
                urlThumb: e.urlThumb
            },
            i = e.objThumbImage.data();
        for (var n in i) {
            switch (n) {
                case "image":
                case "description":
                    continue
            }
            t[n] = i[n]
        }
        return t
    }
    var i, n = this,
        r = (jQuery(n), new UniteGalleryMain);
    r = e, i = jQuery(e), this.events = {
        API_INIT_FUNCTIONS: "api_init",
        API_ON_EVENT: "api_on_event"
    }, this.on = function(e, o) {
        switch (e) {
            case "item_change":
                i.on(r.events.ITEM_CHANGE, function() {
                    var e = r.getSelectedItem(),
                        i = t(e);
                    o(i.index, i)
                });
                break;
            case "resize":
                i.on(r.events.SIZE_CHANGE, o);
                break;
            case "enter_fullscreen":
                i.on(r.events.ENTER_FULLSCREEN, o);
                break;
            case "exit_fullscreen":
                i.on(r.events.EXIT_FULLSCREEN, o);
                break;
            case "play":
                i.on(r.events.START_PLAY, o);
                break;
            case "stop":
                i.on(r.events.STOP_PLAY, o);
                break;
            case "pause":
                i.on(r.events.PAUSE_PLAYING, o);
                break;
            case "continue":
                i.on(r.events.CONTINUE_PLAYING, o);
                break;
            default:
                console && console.log("wrong api event: " + e)
        }
        i.trigger(n.events.API_ON_EVENT, [e, o])
    }, this.play = function() {
        r.startPlayMode()
    }, this.stop = function() {
        r.stopPlayMode()
    }, this.togglePlay = function() {
        r.togglePlayMode()
    }, this.enterFullscreen = function() {
        r.toFullScreen()
    }, this.exitFullscreen = function() {
        r.exitFullScreen()
    }, this.toggleFullscreen = function() {
        r.toggleFullscreen()
    }, this.resetZoom = function() {
        var e = r.getObjSlider();
        return e ? void e.zoomBack() : !1
    }, this.zoomIn = function() {
        var e = r.getObjSlider();
        return e ? void e.zoomIn() : !1
    }, this.zoomOut = function() {
        var e = r.getObjSlider();
        return e ? void e.zoomOut() : !1
    }, this.nextItem = function() {
        r.nextItem()
    }, this.prevItem = function() {
        r.prevItem()
    }, this.selectItem = function(e) {
        r.selectItem(e)
    }, this.resize = function(e, t) {
        t ? r.resize(e, t) : r.resize(e)
    }, this.getItem = function(e) {
        var i = r.getItem(e),
            n = t(i);
        return n
    }, this.getNumItems = function() {
        var e = r.getNumItems();
        return e
    }, this.reloadGallery = function(e) {
        if (!e) var e = {};
        r.run(null, e)
    }, this.destroy = function() {
        r.destroy()
    }, i.trigger(n.events.API_INIT_FUNCTIONS, n)
}
var g_ugFunctions = new UGFunctions;
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var a = t || window.event,
            s = l.call(arguments, 1),
            u = 0,
            d = 0,
            _ = 0,
            g = 0;
        if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (_ = -1 * a.detail), "wheelDelta" in a && (_ = a.wheelDelta), "wheelDeltaY" in a && (_ = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * _, _ = 0), u = 0 === _ ? d : _, "deltaY" in a && (_ = -1 * a.deltaY, u = _), "deltaX" in a && (d = a.deltaX, 0 === _ && (u = -1 * d)), 0 !== _ || 0 !== d) {
            if (1 === a.deltaMode) {
                var c = e.data(this, "mousewheel-line-height");
                u *= c, _ *= c, d *= c
            } else if (2 === a.deltaMode) {
                var h = e.data(this, "mousewheel-page-height");
                u *= h, _ *= h, d *= h
            }
            return g = Math.max(Math.abs(_), Math.abs(d)), (!o || o > g) && (o = g, n(a, g) && (o /= 40)), n(a, g) && (u /= 40, d /= 40, _ /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), _ = Math[_ >= 1 ? "floor" : "ceil"](_ / o), t.deltaX = d, t.deltaY = _, t.deltaFactor = o, t.deltaMode = 0, s.unshift(t, u, d, _), r && clearTimeout(r), r = setTimeout(i, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }

    function i() {
        o = null
    }

    function n(e, t) {
        return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var r, o, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var u = a.length; u;) e.event.fixHooks[a[--u]] = e.event.mouseHooks;
    var d = e.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener)
                for (var i = s.length; i;) this.addEventListener(s[--i], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = s.length; e;) this.removeEventListener(s[--e], t, !1);
            else this.onmousewheel = null
        },
        getLineHeight: function(t) {
            return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, i, n, r) {
        return jQuery.easing[jQuery.easing.def](e, t, i, n, r)
    },
    easeInQuad: function(e, t, i, n, r) {
        return n * (t /= r) * t + i
    },
    easeOutQuad: function(e, t, i, n, r) {
        return -n * (t /= r) * (t - 2) + i
    },
    easeInOutQuad: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(e, t, i, n, r) {
        return n * (t /= r) * t * t + i
    },
    easeOutCubic: function(e, t, i, n, r) {
        return n * ((t = t / r - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(e, t, i, n, r) {
        return n * (t /= r) * t * t * t + i
    },
    easeOutQuart: function(e, t, i, n, r) {
        return -n * ((t = t / r - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(e, t, i, n, r) {
        return n * (t /= r) * t * t * t * t + i
    },
    easeOutQuint: function(e, t, i, n, r) {
        return n * ((t = t / r - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(e, t, i, n, r) {
        return -n * Math.cos(t / r * (Math.PI / 2)) + n + i
    },
    easeOutSine: function(e, t, i, n, r) {
        return n * Math.sin(t / r * (Math.PI / 2)) + i
    },
    easeInOutSine: function(e, t, i, n, r) {
        return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + i
    },
    easeInExpo: function(e, t, i, n, r) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / r - 1)) + i
    },
    easeOutExpo: function(e, t, i, n, r) {
        return t == r ? i + n : n * (-Math.pow(2, -10 * t / r) + 1) + i
    },
    easeInOutExpo: function(e, t, i, n, r) {
        return 0 == t ? i : t == r ? i + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function(e, t, i, n, r) {
        return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + i
    },
    easeOutCirc: function(e, t, i, n, r) {
        return n * Math.sqrt(1 - (t = t / r - 1) * t) + i
    },
    easeInOutCirc: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(e, t, i, n, r) {
        var o = 1.70158,
            a = 0,
            s = n;
        if (0 == t) return i;
        if (1 == (t /= r)) return i + n;
        if (a || (a = .3 * r), s < Math.abs(n)) {
            s = n;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(n / s);
        return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / a)) + i
    },
    easeOutElastic: function(e, t, i, n, r) {
        var o = 1.70158,
            a = 0,
            s = n;
        if (0 == t) return i;
        if (1 == (t /= r)) return i + n;
        if (a || (a = .3 * r), s < Math.abs(n)) {
            s = n;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(n / s);
        return s * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - o) * Math.PI / a) + n + i
    },
    easeInOutElastic: function(e, t, i, n, r) {
        var o = 1.70158,
            a = 0,
            s = n;
        if (0 == t) return i;
        if (2 == (t /= r / 2)) return i + n;
        if (a || (a = .3 * r * 1.5), s < Math.abs(n)) {
            s = n;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(n / s);
        return 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / a) + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / a) * .5 + n + i
    },
    easeInBack: function(e, t, i, n, r, o) {
        return void 0 == o && (o = 1.70158), n * (t /= r) * t * ((o + 1) * t - o) + i
    },
    easeOutBack: function(e, t, i, n, r, o) {
        return void 0 == o && (o = 1.70158), n * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + i
    },
    easeInOutBack: function(e, t, i, n, r, o) {
        return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * (((o *= 1.525) + 1) * t - o) + i : n / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + i
    },
    easeInBounce: function(e, t, i, n, r) {
        return n - jQuery.easing.easeOutBounce(e, r - t, 0, n, r) + i
    },
    easeOutBounce: function(e, t, i, n, r) {
        return (t /= r) < 1 / 2.75 ? 7.5625 * n * t * t + i : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(e, t, i, n, r) {
        return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, n, r) + .5 * n + i
    }
}), ! function(e, t) {
    function i(e, t, i) {
        var n = _[t.type] || {};
        return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e)
    }

    function n(t) {
        var i = u(),
            n = i._rgba = [];
        return t = t.toLowerCase(), h(l, function(e, r) {
            var o, a = r.re.exec(t),
                s = a && r.parse(a),
                l = r.space || "rgba";
            return s ? (o = i[l](s), i[d[l].cache] = o[d[l].cache], n = i._rgba = o._rgba, !1) : void 0
        }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, o.transparent), i) : o[t]
    }

    function r(e, t, i) {
        return i = (i + 1) % 1, 1 > 6 * i ? e + (t - e) * i * 6 : 1 > 2 * i ? t : 2 > 3 * i ? e + (t - e) * (2 / 3 - i) * 6 : e
    }
    if ("undefined" == typeof e.cssHooks) return !1;
    var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        s = /^([\-+])=\s*(\d+\.?\d*)/,
        l = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }],
        u = e.Color = function(t, i, n, r) {
            return new e.Color.fn.parse(t, i, n, r)
        },
        d = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        _ = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        },
        g = u.support = {},
        c = e("<p>")[0],
        h = e.each;
    c.style.cssText = "background-color:rgba(1,1,1,.5)", g.rgba = c.style.backgroundColor.indexOf("rgba") > -1, h(d, function(e, t) {
        t.cache = "_" + e, t.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }), u.fn = e.extend(u.prototype, {
        parse: function(r, a, s, l) {
            if (r === t) return this._rgba = [null, null, null, null], this;
            (r.jquery || r.nodeType) && (r = e(r).css(a), a = t);
            var _ = this,
                g = e.type(r),
                c = this._rgba = [];
            return a !== t && (r = [r, a, s, l], g = "array"), "string" === g ? this.parse(n(r) || o._default) : "array" === g ? (h(d.rgba.props, function(e, t) {
                c[t.idx] = i(r[t.idx], t)
            }), this) : "object" === g ? (r instanceof u ? h(d, function(e, t) {
                r[t.cache] && (_[t.cache] = r[t.cache].slice())
            }) : h(d, function(t, n) {
                var o = n.cache;
                h(n.props, function(e, t) {
                    if (!_[o] && n.to) {
                        if ("alpha" === e || null == r[e]) return;
                        _[o] = n.to(_._rgba)
                    }
                    _[o][t.idx] = i(r[e], t, !0)
                }), _[o] && e.inArray(null, _[o].slice(0, 3)) < 0 && (_[o][3] = 1, n.from && (_._rgba = n.from(_[o])))
            }), this) : void 0
        },
        is: function(e) {
            var t = u(e),
                i = !0,
                n = this;
            return h(d, function(e, r) {
                var o, a = t[r.cache];
                return a && (o = n[r.cache] || r.to && r.to(n._rgba) || [], h(r.props, function(e, t) {
                    return null != a[t.idx] ? i = a[t.idx] === o[t.idx] : void 0
                })), i
            }), i
        },
        _space: function() {
            var e = [],
                t = this;
            return h(d, function(i, n) {
                t[n.cache] && e.push(i)
            }), e.pop()
        },
        transition: function(e, t) {
            var n = u(e),
                r = n._space(),
                o = d[r],
                a = 0 === this.alpha() ? u("transparent") : this,
                s = a[o.cache] || o.to(a._rgba),
                l = s.slice();
            return n = n[o.cache], h(o.props, function(e, r) {
                var o = r.idx,
                    a = s[o],
                    u = n[o],
                    d = _[r.type] || {};
                null !== u && (null === a ? l[o] = u : (d.mod && (u - a > d.mod / 2 ? a += d.mod : a - u > d.mod / 2 && (a -= d.mod)), l[o] = i((u - a) * t + a, r)))
            }), this[r](l)
        },
        blend: function(t) {
            if (1 === this._rgba[3]) return this;
            var i = this._rgba.slice(),
                n = i.pop(),
                r = u(t)._rgba;
            return u(e.map(i, function(e, t) {
                return (1 - n) * r[t] + n * e
            }))
        },
        toRgbaString: function() {
            var t = "rgba(",
                i = e.map(this._rgba, function(e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
            return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
        },
        toHslaString: function() {
            var t = "hsla(",
                i = e.map(this.hsla(), function(e, t) {
                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                });
            return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
        },
        toHexString: function(t) {
            var i = this._rgba.slice(),
                n = i.pop();
            return t && i.push(~~(255 * n)), "#" + e.map(i, function(e) {
                return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
            }).join("")
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    }), u.fn.parse.prototype = u.fn, d.hsla.to = function(e) {
        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
        var t, i, n = e[0] / 255,
            r = e[1] / 255,
            o = e[2] / 255,
            a = e[3],
            s = Math.max(n, r, o),
            l = Math.min(n, r, o),
            u = s - l,
            d = s + l,
            _ = .5 * d;
        return t = l === s ? 0 : n === s ? 60 * (r - o) / u + 360 : r === s ? 60 * (o - n) / u + 120 : 60 * (n - r) / u + 240, i = 0 === u ? 0 : .5 >= _ ? u / d : u / (2 - d), [Math.round(t) % 360, i, _, null == a ? 1 : a]
    }, d.hsla.from = function(e) {
        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
        var t = e[0] / 360,
            i = e[1],
            n = e[2],
            o = e[3],
            a = .5 >= n ? n * (1 + i) : n + i - n * i,
            s = 2 * n - a;
        return [Math.round(255 * r(s, a, t + 1 / 3)), Math.round(255 * r(s, a, t)), Math.round(255 * r(s, a, t - 1 / 3)), o]
    }, h(d, function(n, r) {
        var o = r.props,
            a = r.cache,
            l = r.to,
            d = r.from;
        u.fn[n] = function(n) {
            if (l && !this[a] && (this[a] = l(this._rgba)), n === t) return this[a].slice();
            var r, s = e.type(n),
                _ = "array" === s || "object" === s ? n : arguments,
                g = this[a].slice();
            return h(o, function(e, t) {
                var n = _["object" === s ? e : t.idx];
                null == n && (n = g[t.idx]), g[t.idx] = i(n, t)
            }), d ? (r = u(d(g)), r[a] = g, r) : u(g)
        }, h(o, function(t, i) {
            u.fn[t] || (u.fn[t] = function(r) {
                var o, a = e.type(r),
                    l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : n,
                    u = this[l](),
                    d = u[i.idx];
                return "undefined" === a ? d : ("function" === a && (r = r.call(this, d), a = e.type(r)), null == r && i.empty ? this : ("string" === a && (o = s.exec(r), o && (r = d + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), u[i.idx] = r, this[l](u)))
            })
        })
    }), u.hook = function(t) {
        var i = t.split(" ");
        h(i, function(t, i) {
            e.cssHooks[i] = {
                set: function(t, r) {
                    var o, a, s = "";
                    if ("transparent" !== r && ("string" !== e.type(r) || (o = n(r)))) {
                        if (r = u(o || r), !g.rgba && 1 !== r._rgba[3]) {
                            for (a = "backgroundColor" === i ? t.parentNode : t;
                                ("" === s || "transparent" === s) && a && a.style;) try {
                                s = e.css(a, "backgroundColor"), a = a.parentNode
                            } catch (l) {}
                            r = r.blend(s && "transparent" !== s ? s : "_default")
                        }
                        r = r.toRgbaString()
                    }
                    try {
                        t.style[i] = r
                    } catch (l) {}
                }
            }, e.fx.step[i] = function(t) {
                t.colorInit || (t.start = u(t.elem, i), t.end = u(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }, u.hook(a), e.cssHooks.borderColor = {
        expand: function(e) {
            var t = {};
            return h(["Top", "Right", "Bottom", "Left"], function(i, n) {
                t["border" + n + "Color"] = e
            }), t
        }
    }, o = e.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
}(jQuery), ! function(e) {
    function t() {
        var i = this === document ? e(this) : e(this).contents();
        i.mousemove(function(t) {
            e.mlp = {
                x: t.pageX,
                y: t.pageY
            }
        }), i.find("iframe").load(t)
    }
    e.mlp = {
        x: 0,
        y: 0
    }, e(t), e.fn.ismouseover = function() {
        var t = !1;
        return this.eq(0).each(function() {
            var i = e(this).is("iframe") ? e(this).contents().find("body") : e(this),
                n = i.offset();
            t = n.left <= e.mlp.x && n.left + i.outerWidth() > e.mlp.x && n.top <= e.mlp.y && n.top + i.outerHeight() > e.mlp.y
        }), t
    }
}(jQuery);
var g_ugYoutubeAPI = new UGYoutubeAPI,
    g_ugVimeoAPI = new UGVimeoAPI,
    g_ugHtml5MediaAPI = new UGHtml5MediaAPI,
    g_ugSoundCloudAPI = new UGSoundCloudAPI,
    g_ugWistiaAPI = new UGWistiaAPI;
jQuery.fn.unitegallery = function(e) {
    var t = jQuery(this),
        i = "#" + t.attr("id");
    if (!e) var e = {};
    var n = new UniteGalleryMain;
    n.run(i, e);
    var r = new UG_API(n);
    return r
};