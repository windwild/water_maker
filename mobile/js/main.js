!function (e, t) {
    "use strict";
    var n, o, a, i, c, r, l, u, s, d, h, m, g, f, v = document.getElementsByTagName("body")[0], p = document.getElementsByClassName("img")[0], w = document.getElementsByClassName("upload")[0], I = document.getElementById("image_file"), y = document.getElementById("type_a"), b = document.getElementById("type_b"), C = document.getElementById("boy"), k = document.getElementById("girl"), E = document.getElementById("obj"), R = document.getElementsByClassName("dec")[0], _ = document.getElementsByClassName("dec_text"), x = document.getElementsByClassName("color"), B = document.getElementsByClassName("gender")[0], U = document.getElementsByClassName("gender_list")[0], T = document.getElementById("generate_btn"), M = document.getElementById("image_x"), N = document.getElementById("image_y"), P = document.getElementById("image_width"), $ = document.getElementById("image_height"), X = document.getElementById("workplace"), L = document.getElementsByClassName("reload")[0], S = document.getElementsByClassName("edit")[0], H = (document.getElementsByTagName("form")[0], document.getElementsByClassName("loading_layer")[0]), D = document.getElementById("submit_loading"), z = document.getElementById("crop_workplace"), Y = (document.getElementById("img_sample"), document.getElementById("img_crop_zoom_bg")), J = document.getElementById("img_crop_zoom_handle"), j = 0, q = "?QXJ0aGFz" === location.search, W = {}, O = X.getContext("2d"), A = z.getContext("2d"), F = 1, G = 1, Q = [["能", "能", "能", "能", "能", "能", "能", "能", "还能", ""], ["会", "会", "会", "会", "会", "会", "会", "会", "还会", ""]], K = {
        style: 1,
        img_file: null,
        dec: [],
        color: null,
        gender: 1,
        x: null,
        y: null,
        width: null,
        height: null
    }, V = [], Z = ["能", "能", "能", "能", "能", "能", "能", "能", "还能"], ee = [], te = innerWidth, ne = innerHeight, oe = "", ae = function (e, t) {
        var n, o = e.className.split(" ");
        for (n = 0; n < o.length; n++)if (o[n] === t)return;
        e.className += " " + t
    }, ie = function (e, t) {
        var n, o = e.className.split(" ");
        for (n = 0; n < o.length; n++)o[n] === t && (o.splice(n, 1), n--);
        e.className = o.join(" ")
    }, ce = function (e, t) {
        var n, o = e.className.split(" ");
        for (n = 0; n < o.length; n++)if (o[n] === t)return !0;
        return !1
    }, re = function (e) {
        for (var t, n, o = [], t = 0; 9 > t; t++)if (x[t].checked) {
            n = t + 1;
            break
        }
        for (t = 0; 8 > t; t++)o[t] = /^能\s*$/.test(_[t].value) || /^会\s*$/.test(_[t].value) || /^\s*$/.test(_[t].value) ? "" : _[t].value;
        o[8] = /^还能\s*$/.test(_[8].value) || /^还会\s*$/.test(_[8].value) || /^\s*$/.test(_[8].value) ? "" : _[8].value, o[9] = /^\s*$/.test(_[9].value) ? "" : _[9].value, f = new Image, f.src = "http://piaoliang.smartisan.com/proud/getMask.php?color=" + n + "&word[]=" + encodeURIComponent(o[0]) + "&word[]=" + encodeURIComponent(o[1]) + "&word[]=" + encodeURIComponent(o[2]) + "&word[]=" + encodeURIComponent(o[3]) + "&word[]=" + encodeURIComponent(o[4]) + "&word[]=" + encodeURIComponent(o[5]) + "&word[]=" + encodeURIComponent(o[6]) + "&gender=" + F + "&identity=" + encodeURIComponent(o[7]), f.onload = e
    }, le = function (e) {
        u = i + c / 2 - (i + c / 2 - u) * e * n.width / s, l = a + r / 2 - (a + r / 2 - l) * e * n.height / d, s = n.width * e, d = n.height * e, s = Math.round(s), d = Math.round(d), l > a ? l = a : a + r - d > l && (l = a + r - d), u > i ? u = i : i + c - s > u && (u = i + c - s), u = Math.round(u), l = Math.round(l), he()
    }, ue = function () {
        var e = devicePixelRatio;
        A.drawImage(Y, 0, 0, 45, 177, 12 * e, (ne - 71) * e, 15 * e, 59 * e), A.drawImage(Y, 45, 0, 255, 177, (te - 97) * e, (ne - 71) * e, 85 * e, 59 * e), A.drawImage(Y, 43, 0, 1, 177, 27 * e, (ne - 71) * e, (o - 27) * e, 59 * e), A.drawImage(Y, 46, 0, 1, 177, o * e, (ne - 71) * e, (te - o - 97) * e, 59 * e), A.drawImage(J, 0, 0, 116, 177, (o - 19) * e, (ne - 71) * e, 38 * e, 59 * e)
    }, se = function (e) {
        var t = (e.naturalWidth, e.naturalHeight), n = document.createElement("canvas");
        n.width = 1, n.height = t;
        var o = n.getContext("2d");
        o.drawImage(e, 0, 0);
        for (var a = o.getImageData(0, 0, 1, t).data, i = 0, c = t, r = t; r > i;) {
            var l = a[4 * (r - 1) + 3];
            0 === l ? c = r : i = r, r = c + i >> 1
        }
        var u = r / t;
        return 0 === u ? 1 : u
    }, de = function (e, t, n, o, a, i, c, r, l, u) {
        var s = se(t);
        e.drawImage(t, n * s, o * s, a * s, i * s, c, r, l, u)
    }, he = function () {
        var e = devicePixelRatio;
        A.fillStyle = "black", A.beginPath(), A.rect(0, 0, z.width, z.height), A.fill(), A.fillStyle = "red", A.beginPath(), A.rect(u * e, l * e, s * e, d * e), A.fill(), de(A, n, 0, 0, n.width, n.height, u * e, l * e, s * e, d * e), A.beginPath(), A.fillStyle = "rgba(0, 0, 0, 0.8)", A.rect(0, 0, te * e, a * e), A.rect(0, (a + r) * e, te * e, (ne - a - r) * e), A.rect(0, a * e, i * e, r * e), A.rect((i + c) * e, a * e, (te - i - c) * e, r * e), A.fill(), A.drawImage(f, i * e, a * e, c * e, r * e), A.beginPath(), A.strokeStyle = "rgba(255, 255, 255, 0.6)", A.lineWidth = 1, A.rect((i + .5) * e, (a + .5) * e, c * e, r * e), A.stroke(), ue()
    }, me = function () {
        var e = devicePixelRatio;
        z.width = te * e, z.height = ne * e, o = 27, r = ne - 134, c = Math.round(r / 162 * 99), a = 31, i = Math.round((te - c) / 2), oe += "sw" + te + "sh" + ne + "dpr" + e + "zp" + o + "cw" + c + "ch" + r + "cl" + i + "ct" + a
    }, ge = function () {
        alert("ge==============");
        alert(JSON.stringify(X));

        {
            var e, t, a, i, c, r, g;
            devicePixelRatio
        }

        X.width = n.width,
        X.height = n.height,
        O.drawImage(n, 0, 0);

        g = O.getImageData(0, 0, n.width, n.height);
        alert(JSON.stringify(g));
        for (
            s = Math.round(n.width * h),
            d = Math.round(n.height * h),
            u = (te - s) / 2,
            l = (ne - 71 - d) / 2,
            oe += "mnz" + h + "mxz" + m + "fw" + s + "fh" + d + "fl" + u + "ft" + l + "iw" + n.width + "ih" + n.height,
            q && alert(oe),
            X.width = n.width,
            X.height = n.height,
            O.drawImage(n, 0, 0),
            g = O.getImageData(0, 0, n.width, n.height),
            t = g.data.length, e = 0; t > e; e += 4)


            a = g.data[e], i = g.data[e + 1], c = g.data[e + 2],

            r = .299 * a + .587 * i + .114 * c, g.data[e] = g.data[e + 1] = g.data[e + 2] = Math.round(r);

        O.putImageData(g, 0, 0), n = new Image, n.src = X.toDataURL(), n.onload = function () {
            re(function () {
                ie(z, "hidden"), ie(w, "loading"), o = 27, le(h)
            })
        }
    }, fe = function () {
        var e = (devicePixelRatio, n.width / n.height), t = 99 / 162;
        h = e > t ? r / n.height : c / n.width, m = 4 * h
    }, ve = function (e) {
        //alert(e.image_url);
        n = new Image, n.src = e.image_url, n.onload = function () {
            I.value = e.image_file, fe(), ge()
        }
    }, pe = function (e, t) {
        var n = l + t, o = u + e;
        (n > a || a + r - d > n) && (n = l), (o > i || i + c - s > o) && (o = u), u = o, l = n, he()
    }, we = function () {
        var e = (a - l) * (n.height / d), t = (i - u) * (n.width / s), o = c * (n.width / s), h = r * (n.height / d);
        X.width = 60, X.height = 98, de(O, n, t, e, o, h, 0, 0, 60, 98), O.drawImage(f, 0, 0, 60, 98), M.value = Math.round(t), N.value = Math.round(e), P.value = Math.round(o), $.value = Math.round(h), w.style.backgroundImage = "url(" + X.toDataURL() + ")", ae(w, "uploaded"), ae(z, "hidden")
    }, Ie = function () {
        for (var e = 0; 8 > e; e++)/^能\s*$/.test(_[e].value) || /^会\s*$/.test(_[e].value) ? ae(_[e], "default") : ie(_[e], "default");
        /^还能\s*$/.test(_[8].value) || /^还会\s*$/.test(_[8].value) ? ae(_[8], "default") : ie(_[8], "default")
    }, ye = function () {
        var e = !0;
        ie(R, "error");
        for (var t = 0; 9 > t; t++)_[t].value.length > 18 ? (ae(R, "error"), _e(200), e = !1) : ie(_[t], "error");
        return _[9].value.length > 13 ? (ae(R, "error"), _e(200), e = !1) : ie(_[9], "error"), I.value || (ae(p, "error"), _e(0), e = !1), e
    }, be = function (e) {

        var t = new XMLHttpRequest;
        t.onload = function () {
            var e;
            try {
                e = JSON.parse(t.responseText);
            } catch (n) {
                alert("服务端返回数据格式异常，请稍后再试。3")
            }
            0 === e.code ? ve(e.data) : (ie(w, "uploaded"), alert(e.errInfo.msg))
        }, t.open("get", "https://api.speedx.com/api/html_v1/getWxImg?media_id=" + e, !0), t.send()
    }, Ce = function (e) {
        wx.uploadImage({
            localId: e,
            isShowProgressTips: 1,
            success: function (e) {
                //console.log(e);
                var t = e.serverId;
                be(t)
            }
        })
    }, ke = function (e) {
        // alert("bhdsbjhbscj");
        ce(w, "loading") || (ie(p, "error"), wx.chooseImage({
            count: 1,
            sizeType: ["compressed"],
            sourceType: ["album", "camera"],
            success: function (e) {
                console.log(e);
                w.style.backgroundImage = "", ie(w, "uploaded"), ae(w, "loading"), Ce(e.localIds[0])
            }
        }), e.stopPropagation())
    }, Ee = function (e) {
        wx.config({
            debug: q,
            appId: e.appid,
            nonceStr: e.noncestr,
            timestamp: e.timestamp,
            signature: e.sign,
            jsApiList: ["chooseImage", "uploadImage"]
        }), wx.ready(function () {
            //alert('readyldmsjkdsn');
            me(), w.onclick = ke, L.onclick = ke
        })
    }, Re = function () {
        var e = new XMLHttpRequest;
        e.onload = function () {
            var t;
            try {
                t = JSON.parse(e.responseText)
                console.log(t);
            } catch (n) {
                alert("服务端返回数据格式异常，请稍后再试。1"+ e.responseText);
            }
            0 === t.code ? Ee(t.result) : alert(t.message)
        }, e.open("post", "https://api.speedx.com/wx/js_sign", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send("url="+encodeURIComponent(location.href.split("#")[0]))
    }, _e = function (e, t) {
        e = Math.min(e, v.scrollHeight), v.scrollTop = e
    }, xe = function () {
        v.onclick = function () {
            ie(U, "on")
        }, T.onclick = function () {
            if (ye()) {
                var e = [];
                ae(T, "hidden"), ie(H, "hidden"), ie(D, "hidden"), K.image_file = I.value, K.x = M.value, K.y = N.value, K.width = P.value, K.height = $.value, K.gender = F, K.style = y.checked ? 1 : 2;
                for (var t = 0; 7 > t; t++)if (x[t].checked) {
                    K.color = t + 1;
                    break
                }
                for (var t = 0; 8 > t; t++)e[t] = /^能\s*$/.test(_[t].value) || /^会\s*$/.test(_[t].value) ? "" : _[t].value;
                e[8] = /^还能\s*$/.test(_[8].value) || /^还会\s*$/.test(_[8].value) ? "" : _[8].value, e[9] = _[9].value;
                for (var t = 0; 10 > t; t++)K.dec[t] = e[t];
                var n, o = new XMLHttpRequest;
                n = "style=" + K.style + "&word[]=" + encodeURIComponent(K.dec[0]) + "&word[]=" + encodeURIComponent(K.dec[1]) + "&word[]=" + encodeURIComponent(K.dec[2]) + "&word[]=" + encodeURIComponent(K.dec[3]) + "&word[]=" + encodeURIComponent(K.dec[4]) + "&word[]=" + encodeURIComponent(K.dec[5]) + "&word[]=" + encodeURIComponent(K.dec[6]) + "&word[]=" + encodeURIComponent(K.dec[7]) + "&word[]=" + encodeURIComponent(K.dec[8]) + "&identity=" + encodeURIComponent(K.dec[9]) + "&gender=" + K.gender + "&color=" + K.color + "&image_file=" + encodeURIComponent(K.image_file) + "&x=" + K.x + "&y=" + K.y + "&width=" + K.width + "&height=" + K.height, o.onload = function () {
                    var e;
                    ie(T, "hidden"), ae(H, "hidden"), ae(D, "hidden");
                    try {
                        e = JSON.parse(o.responseText)
                    } catch (t) {
                        alert("服务端返回数据格式异常，请稍后再试。2")
                    }
                    0 === e.code ? location.href = e.data.weixinUrl + "#no_bottom_btn" : alert(e.errInfo.msg)
                }, o.open("post", "http://piaoliang.smartisan.com/proudm/getInfo.php", !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send(n)
            }
        }, y.onclick = function () {
            for (var e = 0; 9 > e; e++)_[e].value = Q[0][e];
            Ie()
        }, b.onclick = function () {
            for (var e = 0; 9 > e; e++)_[e].value = Q[1][e];
            Ie()
        }, B.onclick = function (e) {
            ce(U, "on") ? ie(U, "on") : ae(U, "on"), e.stopPropagation()
        }, C.onclick = function (e) {
            B.innerHTML = "他", F = 1, setTimeout(function () {
                ie(U, "on")
            }, 200), e.stopPropagation()
        }, k.onclick = function (e) {
            B.innerHTML = "她", F = 2, setTimeout(function () {
                ie(U, "on")
            }, 200), e.stopPropagation()
        }, E.onclick = function (e) {
            B.innerHTML = "它", F = 3, setTimeout(function () {
                ie(U, "on")
            }, 200), e.stopPropagation()
        }, z.ontouchstart = function (e) {
            if (e.touches[0].clientY < ne - 71)W = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            }; else if (e.touches[0].clientY >= ne - 71 && e.touches[0].clientX < te - 83) {
                W = {}, o = e.touches[0].clientX, 27 > o ? o = 27 : o > te - 97 && (o = te - 97);
                var t = (o - 27) / (te - 124) * (m - h) + h;
                le(t)
            } else W = {}, we();
            e.stopPropagation(), e.preventDefault()
        }, z.ontouchmove = function (e) {
            if (W.x !== t && W.y !== t) {
                var n = e.touches[0].clientX - W.x, a = e.touches[0].clientY - W.y;
                W = {x: e.touches[0].clientX, y: e.touches[0].clientY}, pe(n, a)
            } else if (e.touches[0].clientY >= ne - 71 && e.touches[0].clientX < te - 83) {
                o = e.touches[0].clientX, 27 > o ? o = 27 : o > te - 97 && (o = te - 97);
                var i = (o - 27) / (te - 124) * (m - h) + h;
                le(i)
            }
            e.stopPropagation(), e.preventDefault()
        }, z.ontouchend = function (e) {
            W = {}, e.stopPropagation(), e.preventDefault()
        }, S.onclick = function (e) {
            re(function () {
                he(), ie(z, "hidden")
            }), e.stopPropagation()
        };
        for (var e = 0; 10 > e; e++)!function (e) {
            _[e].compositionstart = function () {
                V[e] = !0
            }, _[e].compositionend = function () {
                V[e] = !1
            }, _[e].onfocus = function (t) {
                /iPhone/.test(navigator.userAgent) && ae(T, "hidden"), setTimeout(function () {
                    _e(300 + 40 * e)
                }, 500)
            }, _[e].onblur = function (t) {
                ie(T, "hidden"), 8 > e && /^\s*$/.test(this.value) ? (this.value = y.checked ? "能" : "会", Q[0][e] = "能", Q[1][e] = "会") : 8 === e && /^\s*$/.test(this.value) && (this.value = y.checked ? "还能" : "还会", Q[0][e] = "还能", Q[1][e] = "还会"), Ie()
            }, _[e].oninput = function (t) {
                V[e] || (y.checked ? (clearTimeout(ee[e]), ee[e] = setTimeout(function () {
                    Z[e] = this.value
                }.bind(this), 100), 8 > e ? "能" !== Z[e] && "" !== Z[e] && "" === this.value && (this.value = "能") : 8 === e && "还能" !== Z[e] && "还" !== Z[e] && "" !== Z[e] && "" === this.value && (this.value = "还能"), Q[0][e] = this.value, "能" === this.value.substr(0, 1) && 8 > e ? Q[1][e] = "会" + this.value.substr(1) : "还能" === this.value.substr(0, 2) && 8 === e && (Q[1][e] = "还会" + this.value.substr(2))) : (clearTimeout(ee[e]), ee[e] = setTimeout(function () {
                    Z[e] = this.value
                }.bind(this), 100), 8 > e ? "会" !== Z[e] && "" !== Z[e] && "" === this.value && (this.value = "会") : 8 === e && "还会" !== Z[e] && "还" !== Z[e] && "" !== Z[e] && "" === this.value && (this.value = "还会"), Q[1][e] = this.value, "会" === this.value.substr(0, 1) && 8 > e ? Q[0][e] = "能" + this.value.substr(1) : "还会" === this.value.substr(0, 2) && 8 === e && (Q[0][e] = "还能" + this.value.substr(2))), Ie())
            }, _[e].onpaste = function () {
                y.checked ? (Q[0][e] = this.value, "能" === this.value.substr(0, 1) && 8 > e ? Q[1][e] = "会" + this.value.substr(1) : "还能" === this.value.substr(0, 2) && 8 === e && (Q[1][e] = "还会" + this.value.substr(2))) : (Q[1][e] = this.value, "会" === this.value.substr(0, 1) && 8 > e ? Q[0][e] = "能" + this.value.substr(1) : "还会" === this.value.substr(0, 2) && 5 === e && (Q[0][e] = "还能" + this.value.substr(2))), Ie()
            }
        }(e);
        for (var e = 0; 7 > e; e++)!function (e) {
            x[e].onclick = function () {
                if (G = e + 1, !q && 4 === G) {
                    if (clearTimeout(g), j++, j >= 15)return void(location.href = "?QXJ0aGFz");
                    g = setTimeout(function () {
                        j = 0
                    }, 1e3)
                }
                if (ce(w, "uploaded")) {
                    var t = (a - l) * (n.height / d), o = (i - u) * (n.width / s), h = c * (n.width / s), m = r * (n.height / d);
                    q && alert("st" + t + "sl" + o + "sw" + h + "sh" + m), re(function () {
                        q && alert("iw" + n.width + "ih" + n.height), X.width = 60, X.height = 98, de(O, n, o, t, h, m, 0, 0, 60, 98), O.drawImage(f, 0, 0, 60, 98), w.style.backgroundImage = "url(" + X.toDataURL() + ")"
                    })
                }
            }
        }(e)
    }, Be = function () {
        xe(), Re()
    };
    e.init = Be, q && (e.onerror = function (e, t, n, o, a) {
        alert("Error: " + e + " Script: " + t + " Line: " + n)
    })
}(window), init();

