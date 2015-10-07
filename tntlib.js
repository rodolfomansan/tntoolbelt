    var DELL = DELL || {};
    DELL.tnt = DELL.tnt || {};

    DELL.tnt.Test = function (id, name, recipe, mbox, code) {
        // adds console and log to DELL.tnt, set debug vars
        DELL.tnt.debug = DELL.tnt.debug || []; DELL.tnt.extCount = ++DELL.tnt.extCount || 1; DELL.tnt.globalStart = DELL.tnt.globalStart || (new Date).getTime(); DELL.tnt.localStart = (new Date).getTime(); DELL.tnt.console = function (a, c) { try { var b = DELL.tnt.log(a); if ("undefined" != typeof console) switch (c) { case "info": "undefined" != typeof console.info && console.info(b); break; case "warn": "undefined" != typeof console.warn && console.warn(b); break; case "error": "undefined" != typeof console.error && console.error(b); break; case "dir": "undefined" != typeof console.dir && "undefined" != typeof console.log && (console.log(b), console.dir(a)); break; default: "undefined" != typeof console.log && console.log(b) } } catch (d) { } }; DELL.tnt.log = function (a) { var c = (new Date).getTime(); a = a + " local:[" + (c - this.localStart) + "] global:{" + (c - this.globalStart) + "}"; this.debug.push(a); return a };

        // mainly tntbuild options for now
        this.options = {
            version: '0.1'
        };

        // campaign specific info
        this.campaign = {
            mbox: mbox,
            number: (name.split(' ')[0]).replace('#', ''),
            id: id,
            name: name,
            recipe: {
                id: recipe.charAt(0),
                name: recipe
            }
        };

        /*##################################################################################################################*/

        // write headers commonly used for tntbuild and info extensions
        this.writeHeaders = function () {
            'use strict';

            $('body').prepend('<input type="hidden" class="tt_info" value="' + this.campaign.number + ' - cid: ' + this.campaign.id + ' - ' + this.campaign.recipe.name + '" />');
        };

        // extend method without using jquery
        this.extend = function (obj) {
            for (var key in obj)
                if (obj.hasOwnProperty(key))
                    this[key] = obj[key];

            return this;
        };

        // load plugins commonly used on tests
        this.loadPlugins = function () {
            'use strict';

            //tryCatch Plugin 4.0 (date released - 08/18/2015)
            ; (function (e) { e.fn.EmailnDeactivate = function (t, cId, o, r, a, s) { var f, x, tntBrowser, tntTraceStack, tntIE89 = "no", tntDocumentMode; var win = window.location.href, winProt = window.location.protocol; var isOpera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0; var isFirefox = typeof InstallTrigger !== "undefined"; var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0; var isChrome = !!window.chrome && !isOpera; var isIE =/*@cc_on!@*/false || !!document.documentMode; if (isIE === true) { isIE = "IE " + document.documentMode; tntBrowser = isIE; tntDocumentMode = document.documentMode.toString(); if (tntDocumentMode === "8" || tntDocumentMode === "9") { tntIE89 = "yes"; } else { tntIE89 = "no"; } } else { if (isChrome === true) { tntBrowser = "Chrome"; } else { if (isSafari === true) { tntBrowser = "Safari"; } else { if (isFirefox === true) { tntBrowser = "Firefox"; } else { if (isOpera === true) { tntBrowser = "Opera"; } else { tntBrowser = "Browser not detected"; } } } } } if (a.stack !== undefined) { tntTraceStack = a.stack; } else { tntTraceStack = "Stack Trace not found"; } if (t !== undefined && t !== "" && t !== null && cId !== undefined && cId !== "" && cId !== null) { DELL.tnt.console("We have cName & cId values, go for the new plugin"); DELL.tnt.console("***value of QA is:--" + s); if (s !== undefined && s === true) { DELL.tnt.console("QA in progress, don't send emails or deactivate the camapign"); if (o === true) { DELL.tnt.console("iFrame bailout"); f = window.parent.location; t = f.search ? "&" : "?"; window.parent.location.replace(f.protocol + "//" + f.host + f.pathname + f.search + t + "ref=" + r + f.hash); } else { DELL.tnt.console("NON iFrame bailout"); f = window.location; t = f.search ? "&" : "?"; window.location.replace(f.protocol + "//" + f.host + f.pathname + f.search + t + "ref=" + r + f.hash); } } else { if (s !== undefined && s === false) { DELL.tnt.console("Live Campaign, Got to send an email, no QA in progress"); if (a.name !== "" && a.message !== "") { if (win.indexOf("file://") > -1) { DELL.tnt.console("someone is trying to save the webpage, ignore and dont do anything"); } else { if (tntIE89 === "yes") { DELL.tnt.console("IE8 or IE9, use the plugin and change the ajax call. the protocol of webhook has to match the page protcol and contentType is added"); e.getScript("http://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js", function () { DELL.tnt.console("LOAD COMPLETED-0"); e.ajax({ type: "POST", url: winProt + "//worker-aws-us-east-1.iron.io/2/projects/538d336e3ba6c60085000044/tasks/webhook?code_name=tryCatch1&oauth=mCOpmqgfBPQwn2jGZZkLH2FI3wE", contentType: "text/plain", dataType: "json", data: { t: t, cId: cId, win: win, aMes: a.message, aNam: a.name, tntBrowser: tntBrowser, r: r, tntTraceStack: tntTraceStack }, error: function (tntErr) { DELL.tnt.console("Ajax call has this error-if else if"); DELL.tnt.console(tntErr); } }).always(function () { DELL.tnt.console("Recipe has this Error:--" + a.name + ":" + a.message, "error"); if (o === true) { DELL.tnt.console("iFrame bailout"); x = window.parent.location; t = x.search ? "&" : "?"; window.parent.location.replace(x.protocol + "//" + x.host + x.pathname + x.search + t + "ref=" + r + x.hash); } else { DELL.tnt.console("NON iFrame bailout"); x = window.location; t = x.search ? "&" : "?"; window.location.replace(x.protocol + "//" + x.host + x.pathname + x.search + t + "ref=" + r + x.hash); } }); }); } else { if (tntIE89 === "no") { DELL.tnt.console("not IE8 or IE9, so normal ajax calls"); e.ajax({ type: "POST", url: "https://worker-aws-us-east-1.iron.io/2/projects/538d336e3ba6c60085000044/tasks/webhook?code_name=tryCatch1&oauth=mCOpmqgfBPQwn2jGZZkLH2FI3wE", dataType: "json", data: { t: t, cId: cId, win: win, aMes: a.message, aNam: a.name, tntBrowser: tntBrowser, r: r, tntTraceStack: tntTraceStack }, error: function (tntErr) { DELL.tnt.console("Ajax call has this error-if else if"); DELL.tnt.console(tntErr); } }).always(function () { DELL.tnt.console("Recipe has this Error:--" + a.name + ":" + a.message, "error"); if (o === true) { DELL.tnt.console("iFrame bailout"); x = window.parent.location; t = x.search ? "&" : "?"; window.parent.location.replace(x.protocol + "//" + x.host + x.pathname + x.search + t + "ref=" + r + x.hash); } else { DELL.tnt.console("NON iFrame bailout"); x = window.location; t = x.search ? "&" : "?"; window.location.replace(x.protocol + "//" + x.host + x.pathname + x.search + t + "ref=" + r + x.hash); } }); } } } } else { if (tntIE89 === "yes") { DELL.tnt.console("IE8 or IE9, use the plugin and change the ajax call. the protocol of webhook has to match the page protcol and contentType is added"); e.getScript("http://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js", function () { DELL.tnt.console("LOAD COMPLETED-1"); e.ajax({ type: "POST", url: winProt + "//worker-aws-us-east-1.iron.io/2/projects/538d336e3ba6c60085000044/tasks/webhook?code_name=tryCatch1&oauth=mCOpmqgfBPQwn2jGZZkLH2FI3wE", contentType: "text/plain", dataType: "json", data: { t: t, cId: cId, tntBrowser: tntBrowser, r: r, tntTraceStack: tntTraceStack }, error: function () { DELL.tnt.console("Ajax call has this error-else else if"); } }).always(function () { DELL.tnt.console("Recipe has this Error:--" + a.name + ":" + a.message, "error"); if (o === true) { DELL.tnt.console("iFrame bailout"); x = window.parent.location; t = x.search ? "&" : "?"; window.parent.location.replace(x.protocol + "//" + x.host + x.pathname + x.search + t + "ref=" + r + x.hash); } else { DELL.tnt.console("NON iFrame bailout"); x = window.location; t = x.search ? "&" : "?"; window.location.replace(x.protocol + "//" + x.host + x.pathname + x.search + t + "ref=" + r + x.hash); } }); }); } else { if (tntIE89 === "no") { DELL.tnt.console("not IE8 or IE9, so normal ajax calls"); e.ajax({ type: "POST", url: "https://worker-aws-us-east-1.iron.io/2/projects/538d336e3ba6c60085000044/tasks/webhook?code_name=tryCatch1&oauth=mCOpmqgfBPQwn2jGZZkLH2FI3wE", dataType: "json", data: { t: t, cId: cId, tntBrowser: tntBrowser, r: r, tntTraceStack: tntTraceStack }, error: function () { DELL.tnt.console("Ajax call has this error-else else if"); } }).always(function () { DELL.tnt.console("Recipe has this Error:--" + a.name + ":" + a.message, "error"); if (o === true) { DELL.tnt.console("iFrame bailout"); x = window.parent.location; t = x.search ? "&" : "?"; window.parent.location.replace(x.protocol + "//" + x.host + x.pathname + x.search + t + "ref=" + r + x.hash); } else { DELL.tnt.console("NON iFrame bailout"); x = window.location; t = x.search ? "&" : "?"; window.location.replace(x.protocol + "//" + x.host + x.pathname + x.search + t + "ref=" + r + x.hash); } }); } } } } } } else { DELL.tnt.console("We don't have cName or cId values, so go for the convetinal reload"); f = window.location; t = f.search ? "&" : "?"; window.location.replace(f.protocol + "//" + f.host + f.pathname + f.search + t + "ref=" + r + f.hash); } }; })(jQuery);

            // jQuery available Plugin 1.7.0 (20121201)
            // By John Terenzio | http://terenz.io | MIT License
            ; (function ($) { var i, queue = [], check = function () { for (i = 0; i < queue.length; ++i) { if ($(queue[i][0])[0] && (queue[i][2] || ($(queue[i][0]).next()[0] || $.isReady))) { try { queue[i][1].apply($(queue[i][0]).eq(0)); } catch (e) { if (typeof window.console !== "undefined") { window.console.log(e); } } queue.splice(i, 1); --i; } } if (queue.length && !$.isReady) { window.setTimeout(check, 10); } }; $.fn.available = function (fn, turbo) { turbo = turbo || false; queue.push([this.selector, fn, turbo]); check(); return this; }; })(jQuery);
        };

        // bailout function for errors
        this.bailOut = function (e) {
            'use strict';

            var name = this.campaign.name,
                cname = '"' + name + '"',
                cId = this.campaign.id,
                iframe = false,
                ref = this.campaign.number + 'x' + this.campaign.recipe.id + '&x=1', //ONLY CHANGE REF. PARAMETER
                qa = true,
                $ = jQuery;

            if (cname.toLowerCase().indexOf('qa') < 0) { qa = false; }
            DELL.tnt.console(e.name + ':' + e.message, "error");
            //$().EmailnDeactivate(cname, cId, iframe, ref, e, qa);
        };

        // placeholder initialization function
        this.init = function() { };

        // main execute function, makes the magic happen
        this.execute = function (context) {
            'use strict';

            var _this = context || this;

            if (typeof jQuery == "function") {
                if (typeof $ !== "function") {
                    window.$ = jQuery;
                }

                DELL.tnt.console("running");
                this.loadPlugins();

                try {
                    this.writeHeaders();
                    this.init();

                    DELL.tnt.console('RUNNING #' + this.campaign.number + ' ' + this.campaign.recipe.id + ', mbox: ' + this.campaign.mbox, 'warn');
                } catch (e) {
                    this.bailOut(e);
                }
            } else {
                DELL.tnt.console("no JQ yet");
                setTimeout(function () { _this.execute(_this); }, 10);
            }

            return _this;
        };

        /*##################################################################################################################*/

        // cookie management functions
        this.cookie = {
            get: function (cookieName) {
                'use strict';

                var results = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');
                if (results) {
                    return (unescape(results[2]));
                } else {
                    return null;
                }
            },

            set: function (name, value, exp_y, exp_m, exp_d, path, domain, secure) {
                'use strict';

                var cookie_string = name + "=" + window.escape(value);
                if (exp_y) {
                    var expires = new Date(exp_y, exp_m, exp_d);
                    cookie_string += '; expires=' + expires.toGMTString();
                }
                if (path) {
                    cookie_string += '; path=' + window.escape(path);
                }
                if (domain) {
                    cookie_string += '; domain=' + window.escape(domain);
                }
                if (secure) {
                    cookie_string += '; secure';
                }
                document.cookie = cookie_string;
            }
        };
        

        /*##################################################################################################################*/

        // main clicktrack function
        this.clickTrack = function (clicked, callback) {
            'use strict';

            var mbox = mboxFactoryDefault.getMboxes()._mboxes.filter(function (mbox) {
                return (mbox._name === 'MboxClicktrack');
            });

            if (!mbox.length) {
                mboxDefine("MboxClicktrack", "MboxClicktrack").setFetcher(new mboxAjaxFetcher());
            }

            DELL.tnt.console("clicked=" + clicked);

            if (callback) {
                if (!$('#MboxClicktrack').length) {
                    $('body').append('<div id="MboxClicktrack"/>');
                }

                mboxUpdate("MboxClicktrack", "clicked=" + clicked, "callback=" + callback);
            } else {
                mboxUpdate("MboxClicktrack", "clicked=" + clicked);
            }
        };

        this.addRef = function (el, param) {
            'use strict';

            var ref, elemHref, $t;

            el.each(function () {
                $t = $(this);
                elemHref = $t.attr('href');
                ref = "ref=" + param;
                if (elemHref.indexOf("?") > -1) {
                    elemHref = elemHref.replace("?", '?' + ref + "&");
                } else if (elemHref.indexOf("#") > -1 && elemHref.indexOf("&") > -1) {
                    elemHref = elemHref.replace("#", '&' + ref + "#");
                } else if (elemHref.indexOf("#") > -1) {
                    elemHref = elemHref.replace("#", '?' + ref + "#");
                } else {
                    elemHref = elemHref + '?' + ref;
                }

                $t.attr('href', elemHref);
            });
        };

        /*##################################################################################################################*/

        this.apiCall = function (type, id, params, fn, e) {
            var _this = this;

            $.getScript(window.location.protocol + '//www.dell.com/html/global/tnt/tntapi.js', function () {
                try {
                    DELL.tnt.api.get(type, id, params, _this.wrapFunction(fn, data), e);
                } catch (e) {
                    _this.bailOut(e);
                }
            });
        };

        /*##################################################################################################################*/

        this.wrapFunction = function (fn, args) {
            var _this = this,
            newFn = function (args) {
                try {
                    fn();
                } catch (e) {
                    _this.bailOut(e);
                }
            };

            return newFn;
        };

        this.setTimeout = function (fn, timer) {
            window.setTimeout(this.wrapFunction(fn), timer);
        };

        this.available = function (selector, fn, turbo) {
            $(selector).available(this.wrapFunction(fn), turbo);
        }

        this.domReady = function (fn) {
            $(document).ready(this.wrapFunction(fn));
        }

        /*##################################################################################################################*/

        // if there's any test specific code, add it to the object
        if (code) {
            this.extend(code);
        }

        // returns object so there can be chaining
        return this;
    };

    /*##################################################################################################################*/
