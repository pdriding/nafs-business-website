// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"blwhm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6090944dc1d8fc0b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8c3OQ":[function(require,module,exports) {
var _ionicons = require("ionicons");
console.log("Hello World!!");

},{"ionicons":"aFqm3"}],"aFqm3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./esm-es5/index.js");
parcelHelpers.exportAll(_indexJs, exports);

},{"./esm-es5/index.js":"1asHu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1asHu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addIcons", ()=>(0, _utilsAaa0769AJs.a));
var _utilsAaa0769AJs = require("./utils-aaa0769a.js");
var _indexC73A3717Js = require("./index-c73a3717.js");

},{"./utils-aaa0769a.js":"jF2ti","./index-c73a3717.js":"67uUR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jF2ti":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>addIcons);
parcelHelpers.export(exports, "b", ()=>inheritAttributes);
parcelHelpers.export(exports, "c", ()=>getName);
parcelHelpers.export(exports, "d", ()=>isRTL);
parcelHelpers.export(exports, "g", ()=>getUrl);
parcelHelpers.export(exports, "i", ()=>isStr);
var _indexC73A3717Js = require("./index-c73a3717.js");
var CACHED_MAP;
var getIconMap = function() {
    if (typeof window === "undefined") return new Map;
    else {
        if (!CACHED_MAP) {
            var t = window;
            t.Ionicons = t.Ionicons || {};
            CACHED_MAP = t.Ionicons.map = t.Ionicons.map || new Map;
        }
        return CACHED_MAP;
    }
};
var addIcons = function(t) {
    Object.keys(t).forEach(function(r) {
        addToIconMap(r, t[r]);
        var e = r.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
        if (r !== e) addToIconMap(e, t[r]);
    });
};
var addToIconMap = function(t, r) {
    var e = getIconMap();
    var n = e.get(t);
    if (n === undefined) e.set(t, r);
    else if (n !== r) console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(t, '". Ensure that multiple icons are not mapped to the same icon name.'));
};
var getUrl = function(t) {
    var r = getSrc(t.src);
    if (r) return r;
    r = getName(t.name, t.icon, t.mode, t.ios, t.md);
    if (r) return getNamedUrl(r);
    if (t.icon) {
        r = getSrc(t.icon);
        if (r) return r;
        r = getSrc(t.icon[t.mode]);
        if (r) return r;
    }
    return null;
};
var getNamedUrl = function(t) {
    var r = getIconMap().get(t);
    if (r) return r;
    return (0, _indexC73A3717Js.g)("svg/".concat(t, ".svg"));
};
var getName = function(t, r, e, n, i) {
    e = (e && toLower(e)) === "ios" ? "ios" : "md";
    if (n && e === "ios") t = toLower(n);
    else if (i && e === "md") t = toLower(i);
    else {
        if (!t && r && !isSrc(r)) t = r;
        if (isStr(t)) t = toLower(t);
    }
    if (!isStr(t) || t.trim() === "") return null;
    var o = t.replace(/[a-z]|-|\d/gi, "");
    if (o !== "") return null;
    return t;
};
var getSrc = function(t) {
    if (isStr(t)) {
        t = t.trim();
        if (isSrc(t)) return t;
    }
    return null;
};
var isSrc = function(t) {
    return t.length > 0 && /(\/|\.)/.test(t);
};
var isStr = function(t) {
    return typeof t === "string";
};
var toLower = function(t) {
    return t.toLowerCase();
};
var inheritAttributes = function(t, r) {
    if (r === void 0) r = [];
    var e = {};
    r.forEach(function(r) {
        if (t.hasAttribute(r)) {
            var n = t.getAttribute(r);
            if (n !== null) e[r] = t.getAttribute(r);
            t.removeAttribute(r);
        }
    });
    return e;
};
var isRTL = function(t) {
    if (t) {
        if (t.dir !== "") return t.dir.toLowerCase() === "rtl";
    }
    return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};

},{"./index-c73a3717.js":"67uUR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67uUR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "H", ()=>Host);
parcelHelpers.export(exports, "a", ()=>getElement);
parcelHelpers.export(exports, "b", ()=>bootstrapLazy);
parcelHelpers.export(exports, "g", ()=>getAssetPath);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "p", ()=>promiseResolve);
parcelHelpers.export(exports, "r", ()=>registerInstance);
parcelHelpers.export(exports, "s", ()=>setNonce);
var __extends = undefined && undefined.__extends || function() {
    var e = function(t, n) {
        e = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for(var n in t)if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
        };
        return e(t, n);
    };
    return function(t, n) {
        if (typeof n !== "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);
        function r() {
            this.constructor = t;
        }
        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r);
    };
}();
var __awaiter = undefined && undefined.__awaiter || function(e, t, n, r) {
    function a(e) {
        return e instanceof n ? e : new n(function(t) {
            t(e);
        });
    }
    return new (n || (n = Promise))(function(n, o) {
        function i(e) {
            try {
                l(r.next(e));
            } catch (e) {
                o(e);
            }
        }
        function s(e) {
            try {
                l(r["throw"](e));
            } catch (e) {
                o(e);
            }
        }
        function l(e) {
            e.done ? n(e.value) : a(e.value).then(i, s);
        }
        l((r = r.apply(e, t || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (o[0] & 1) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    }, r, a, o, i;
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol === "function" && (i[Symbol.iterator] = function() {
        return this;
    }), i;
    function s(e) {
        return function(t) {
            return l([
                e,
                t
            ]);
        };
    }
    function l(s) {
        if (r) throw new TypeError("Generator is already executing.");
        while(i && (i = 0, s[0] && (n = 0)), n)try {
            if (r = 1, a && (o = s[0] & 2 ? a["return"] : s[0] ? a["throw"] || ((o = a["return"]) && o.call(a), 0) : a.next) && !(o = o.call(a, s[1])).done) return o;
            if (a = 0, o) s = [
                s[0] & 2,
                o.value
            ];
            switch(s[0]){
                case 0:
                case 1:
                    o = s;
                    break;
                case 4:
                    n.label++;
                    return {
                        value: s[1],
                        done: false
                    };
                case 5:
                    n.label++;
                    a = s[1];
                    s = [
                        0
                    ];
                    continue;
                case 7:
                    s = n.ops.pop();
                    n.trys.pop();
                    continue;
                default:
                    if (!(o = n.trys, o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                        n = 0;
                        continue;
                    }
                    if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
                        n.label = s[1];
                        break;
                    }
                    if (s[0] === 6 && n.label < o[1]) {
                        n.label = o[1];
                        o = s;
                        break;
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2];
                        n.ops.push(s);
                        break;
                    }
                    if (o[2]) n.ops.pop();
                    n.trys.pop();
                    continue;
            }
            s = t.call(e, n);
        } catch (e) {
            s = [
                6,
                e
            ];
            a = 0;
        } finally{
            r = o = 0;
        }
        if (s[0] & 5) throw s[1];
        return {
            value: s[0] ? s[1] : void 0,
            done: true
        };
    }
};
var __spreadArray = undefined && undefined.__spreadArray || function(e, t, n) {
    if (n || arguments.length === 2) {
        for(var r = 0, a = t.length, o; r < a; r++)if (o || !(r in t)) {
            if (!o) o = Array.prototype.slice.call(t, 0, r);
            o[r] = t[r];
        }
    }
    return e.concat(o || Array.prototype.slice.call(t));
};
var NAMESPACE = "ionicons";
var scopeId;
var hostTagName;
var isSvgMode = false;
var queuePending = false;
var getAssetPath = function(e) {
    var t = new URL(e, plt.$resourcesUrl$);
    return t.origin !== win.location.origin ? t.href : t.pathname;
};
var createTime = function(e, t) {
    if (t === void 0) t = "";
    return function() {
        return;
    };
};
var uniqueTime = function(e, t) {
    return function() {
        return;
    };
};
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var EMPTY_OBJ = {};
var isDef = function(e) {
    return e != null;
};
var isComplexType = function(e) {
    e = typeof e;
    return e === "object" || e === "function";
};
function queryNonceMetaTagContent(e) {
    var t, n, r;
    return (r = (n = (t = e.head) === null || t === void 0 ? void 0 : t.querySelector('meta[name="csp-nonce"]')) === null || n === void 0 ? void 0 : n.getAttribute("content")) !== null && r !== void 0 ? r : undefined;
}
var h = function(e, t) {
    var n = [];
    for(var r = 2; r < arguments.length; r++)n[r - 2] = arguments[r];
    var a = null;
    var o = null;
    var i = false;
    var s = false;
    var l = [];
    var c = function(t) {
        for(var n = 0; n < t.length; n++){
            a = t[n];
            if (Array.isArray(a)) c(a);
            else if (a != null && typeof a !== "boolean") {
                if (i = typeof e !== "function" && !isComplexType(a)) a = String(a);
                if (i && s) l[l.length - 1].$text$ += a;
                else l.push(i ? newVNode(null, a) : a);
                s = i;
            }
        }
    };
    c(n);
    if (t) {
        if (t.key) o = t.key;
        var u = t.className || t.class;
        if (u) t.class = typeof u !== "object" ? u : Object.keys(u).filter(function(e) {
            return u[e];
        }).join(" ");
    }
    var f = newVNode(e, null);
    f.$attrs$ = t;
    if (l.length > 0) f.$children$ = l;
    f.$key$ = o;
    return f;
};
var newVNode = function(e, t) {
    var n = {
        $flags$: 0,
        $tag$: e,
        $text$: t,
        $elm$: null,
        $children$: null
    };
    n.$attrs$ = null;
    n.$key$ = null;
    return n;
};
var Host = {};
var isHost = function(e) {
    return e && e.$tag$ === Host;
};
var parsePropertyValue = function(e, t) {
    if (e != null && !isComplexType(e)) {
        if (t & 4) return e === "false" ? false : e === "" || !!e;
        if (t & 1) return String(e);
        return e;
    }
    return e;
};
var getElement = function(e) {
    return getHostRef(e).$hostElement$;
};
var emitEvent = function(e, t, n) {
    var r = plt.ce(t, n);
    e.dispatchEvent(r);
    return r;
};
var rootAppliedStyles = new WeakMap;
var registerStyle = function(e, t, n) {
    var r = styles.get(e);
    if (supportsConstructableStylesheets && n) {
        r = r || new CSSStyleSheet;
        if (typeof r === "string") r = t;
        else r.replaceSync(t);
    } else r = t;
    styles.set(e, r);
};
var addStyle = function(e, t, n) {
    var r;
    var a = getScopeId(t);
    var o = styles.get(a);
    e = e.nodeType === 11 ? e : doc;
    if (o) {
        if (typeof o === "string") {
            e = e.head || e;
            var i = rootAppliedStyles.get(e);
            var s = void 0;
            if (!i) rootAppliedStyles.set(e, i = new Set);
            if (!i.has(a)) {
                s = doc.createElement("style");
                s.innerHTML = o;
                var l = (r = plt.$nonce$) !== null && r !== void 0 ? r : queryNonceMetaTagContent(doc);
                if (l != null) s.setAttribute("nonce", l);
                e.insertBefore(s, e.querySelector("link"));
                if (i) i.add(a);
            }
        } else if (!e.adoptedStyleSheets.includes(o)) e.adoptedStyleSheets = __spreadArray(__spreadArray([], e.adoptedStyleSheets, true), [
            o
        ], false);
    }
    return a;
};
var attachStyles = function(e) {
    var t = e.$cmpMeta$;
    var n = e.$hostElement$;
    var r = t.$flags$;
    var a = createTime("attachStyles", t.$tagName$);
    var o = addStyle(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
    if (r & 10) {
        n["s-sc"] = o;
        n.classList.add(o + "-h");
    }
    a();
};
var getScopeId = function(e, t) {
    return "sc-" + e.$tagName$;
};
var setAccessor = function(e, t, n, r, a, o) {
    if (n !== r) {
        var i = isMemberInElement(e, t);
        var s = t.toLowerCase();
        if (t === "class") {
            var l = e.classList;
            var c = parseClassList(n);
            var u = parseClassList(r);
            l.remove.apply(l, c.filter(function(e) {
                return e && !u.includes(e);
            }));
            l.add.apply(l, u.filter(function(e) {
                return e && !c.includes(e);
            }));
        } else if (t === "style") {
            for(var f in n)if (!r || r[f] == null) {
                if (f.includes("-")) e.style.removeProperty(f);
                else e.style[f] = "";
            }
            for(var f in r)if (!n || r[f] !== n[f]) {
                if (f.includes("-")) e.style.setProperty(f, r[f]);
                else e.style[f] = r[f];
            }
        } else if (t === "key") ;
        else if (t === "ref") {
            if (r) r(e);
        } else if (!i && t[0] === "o" && t[1] === "n") {
            if (t[2] === "-") t = t.slice(3);
            else if (isMemberInElement(win, s)) t = s.slice(2);
            else t = s[2] + t.slice(3);
            if (n) plt.rel(e, t, n, false);
            if (r) plt.ael(e, t, r, false);
        } else {
            var $ = isComplexType(r);
            if ((i || $ && r !== null) && !a) try {
                if (!e.tagName.includes("-")) {
                    var d = r == null ? "" : r;
                    if (t === "list") i = false;
                    else if (n == null || e[t] != d) e[t] = d;
                } else e[t] = r;
            } catch (e) {}
            var v = false;
            if (s !== (s = s.replace(/^xlink\:?/, ""))) {
                t = s;
                v = true;
            }
            if (r == null || r === false) {
                if (r !== false || e.getAttribute(t) === "") {
                    if (v) e.removeAttributeNS(XLINK_NS, t);
                    else e.removeAttribute(t);
                }
            } else if ((!i || o & 4 || a) && !$) {
                r = r === true ? "" : r;
                if (v) e.setAttributeNS(XLINK_NS, t, r);
                else e.setAttribute(t, r);
            }
        }
    }
};
var parseClassListRegex = /\s/;
var parseClassList = function(e) {
    return !e ? [] : e.split(parseClassListRegex);
};
var updateElement = function(e, t, n, r) {
    var a = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
    var o = e && e.$attrs$ || EMPTY_OBJ;
    var i = t.$attrs$ || EMPTY_OBJ;
    for(r in o)if (!(r in i)) setAccessor(a, r, o[r], undefined, n, t.$flags$);
    for(r in i)setAccessor(a, r, o[r], i[r], n, t.$flags$);
};
var createElm = function(e, t, n, r) {
    var a = t.$children$[n];
    var o = 0;
    var i;
    var s;
    if (a.$text$ !== null) i = a.$elm$ = doc.createTextNode(a.$text$);
    else {
        i = a.$elm$ = doc.createElement(a.$tag$);
        updateElement(null, a, isSvgMode);
        if (isDef(scopeId) && i["s-si"] !== scopeId) i.classList.add(i["s-si"] = scopeId);
        if (a.$children$) for(o = 0; o < a.$children$.length; ++o){
            s = createElm(e, a, o);
            if (s) i.appendChild(s);
        }
    }
    return i;
};
var addVnodes = function(e, t, n, r, a, o) {
    var i = e;
    var s;
    if (i.shadowRoot && i.tagName === hostTagName) i = i.shadowRoot;
    for(; a <= o; ++a)if (r[a]) {
        s = createElm(null, n, a);
        if (s) {
            r[a].$elm$ = s;
            i.insertBefore(s, t);
        }
    }
};
var removeVnodes = function(e, t, n) {
    for(var r = t; r <= n; ++r){
        var a = e[r];
        if (a) {
            var o = a.$elm$;
            nullifyVNodeRefs(a);
            if (o) o.remove();
        }
    }
};
var updateChildren = function(e, t, n, r) {
    var a = 0;
    var o = 0;
    var i = 0;
    var s = 0;
    var l = t.length - 1;
    var c = t[0];
    var u = t[l];
    var f = r.length - 1;
    var $ = r[0];
    var d = r[f];
    var v;
    var p;
    while(a <= l && o <= f){
        if (c == null) c = t[++a];
        else if (u == null) u = t[--l];
        else if ($ == null) $ = r[++o];
        else if (d == null) d = r[--f];
        else if (isSameVnode(c, $)) {
            patch(c, $);
            c = t[++a];
            $ = r[++o];
        } else if (isSameVnode(u, d)) {
            patch(u, d);
            u = t[--l];
            d = r[--f];
        } else if (isSameVnode(c, d)) {
            patch(c, d);
            e.insertBefore(c.$elm$, u.$elm$.nextSibling);
            c = t[++a];
            d = r[--f];
        } else if (isSameVnode(u, $)) {
            patch(u, $);
            e.insertBefore(u.$elm$, c.$elm$);
            u = t[--l];
            $ = r[++o];
        } else {
            i = -1;
            for(s = a; s <= l; ++s)if (t[s] && t[s].$key$ !== null && t[s].$key$ === $.$key$) {
                i = s;
                break;
            }
            if (i >= 0) {
                p = t[i];
                if (p.$tag$ !== $.$tag$) v = createElm(t && t[o], n, i);
                else {
                    patch(p, $);
                    t[i] = undefined;
                    v = p.$elm$;
                }
                $ = r[++o];
            } else {
                v = createElm(t && t[o], n, o);
                $ = r[++o];
            }
            if (v) c.$elm$.parentNode.insertBefore(v, c.$elm$);
        }
    }
    if (a > l) addVnodes(e, r[f + 1] == null ? null : r[f + 1].$elm$, n, r, o, f);
    else if (o > f) removeVnodes(t, a, l);
};
var isSameVnode = function(e, t) {
    if (e.$tag$ === t.$tag$) return e.$key$ === t.$key$;
    return false;
};
var patch = function(e, t) {
    var n = t.$elm$ = e.$elm$;
    var r = e.$children$;
    var a = t.$children$;
    var o = t.$text$;
    if (o === null) {
        updateElement(e, t, isSvgMode);
        if (r !== null && a !== null) updateChildren(n, r, t, a);
        else if (a !== null) {
            if (e.$text$ !== null) n.textContent = "";
            addVnodes(n, null, t, a, 0, a.length - 1);
        } else if (r !== null) removeVnodes(r, 0, r.length - 1);
    } else if (e.$text$ !== o) n.data = o;
};
var nullifyVNodeRefs = function(e) {
    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null);
    e.$children$ && e.$children$.map(nullifyVNodeRefs);
};
var renderVdom = function(e, t, n) {
    if (n === void 0) n = false;
    var r = e.$hostElement$;
    var a = e.$cmpMeta$;
    var o = e.$vnode$ || newVNode(null, null);
    var i = isHost(t) ? t : h(null, null, t);
    hostTagName = r.tagName;
    if (a.$attrsToReflect$) {
        i.$attrs$ = i.$attrs$ || {};
        a.$attrsToReflect$.map(function(e) {
            var t = e[0], n = e[1];
            return i.$attrs$[n] = r[t];
        });
    }
    if (n && i.$attrs$) for(var s = 0, l = Object.keys(i.$attrs$); s < l.length; s++){
        var c = l[s];
        if (r.hasAttribute(c) && ![
            "key",
            "ref",
            "style",
            "class"
        ].includes(c)) i.$attrs$[c] = r[c];
    }
    i.$tag$ = null;
    i.$flags$ |= 4;
    e.$vnode$ = i;
    i.$elm$ = o.$elm$ = r.shadowRoot || r;
    scopeId = r["s-sc"];
    patch(o, i);
};
var attachToAncestor = function(e, t) {
    if (t && !e.$onRenderResolve$ && t["s-p"]) t["s-p"].push(new Promise(function(t) {
        return e.$onRenderResolve$ = t;
    }));
};
var scheduleUpdate = function(e, t) {
    e.$flags$ |= 16;
    if (e.$flags$ & 4) {
        e.$flags$ |= 512;
        return;
    }
    attachToAncestor(e, e.$ancestorComponent$);
    var n = function() {
        return dispatchHooks(e, t);
    };
    return writeTask(n);
};
var dispatchHooks = function(e, t) {
    var n = createTime("scheduleUpdate", e.$cmpMeta$.$tagName$);
    var r = e.$lazyInstance$;
    var a;
    if (t) a = safeCall(r, "componentWillLoad");
    n();
    return enqueue(a, function() {
        return updateComponent(e, r, t);
    });
};
var enqueue = function(e, t) {
    return isPromisey(e) ? e.then(t) : t();
};
var isPromisey = function(e) {
    return e instanceof Promise || e && e.then && typeof e.then === "function";
};
var updateComponent = function(e, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, a, o, i, s, l, c;
        return __generator(this, function(u) {
            a = e.$hostElement$;
            o = createTime("update", e.$cmpMeta$.$tagName$);
            i = a["s-rc"];
            if (n) attachStyles(e);
            s = createTime("render", e.$cmpMeta$.$tagName$);
            callRender(e, t, a, n);
            if (i) {
                i.map(function(e) {
                    return e();
                });
                a["s-rc"] = undefined;
            }
            s();
            o();
            l = (r = a["s-p"]) !== null && r !== void 0 ? r : [];
            c = function() {
                return postUpdateComponent(e);
            };
            if (l.length === 0) c();
            else {
                Promise.all(l).then(c);
                e.$flags$ |= 4;
                l.length = 0;
            }
            return [
                2
            ];
        });
    });
};
var callRender = function(e, t, n, r) {
    try {
        t = t.render();
        e.$flags$ &= -17;
        e.$flags$ |= 2;
        renderVdom(e, t, r);
    } catch (t) {
        consoleError(t, e.$hostElement$);
    }
    return null;
};
var postUpdateComponent = function(e) {
    var t = e.$cmpMeta$.$tagName$;
    var n = e.$hostElement$;
    var r = createTime("postUpdate", t);
    var a = e.$lazyInstance$;
    var o = e.$ancestorComponent$;
    if (!(e.$flags$ & 64)) {
        e.$flags$ |= 64;
        addHydratedFlag(n);
        safeCall(a, "componentDidLoad");
        r();
        e.$onReadyResolve$(n);
        if (!o) appDidLoad();
    } else r();
    if (e.$onRenderResolve$) {
        e.$onRenderResolve$();
        e.$onRenderResolve$ = undefined;
    }
    if (e.$flags$ & 512) nextTick(function() {
        return scheduleUpdate(e, false);
    });
    e.$flags$ &= -517;
};
var appDidLoad = function(e) {
    addHydratedFlag(doc.documentElement);
    nextTick(function() {
        return emitEvent(win, "appload", {
            detail: {
                namespace: NAMESPACE
            }
        });
    });
};
var safeCall = function(e, t, n) {
    if (e && e[t]) try {
        return e[t](n);
    } catch (e) {
        consoleError(e);
    }
    return undefined;
};
var addHydratedFlag = function(e) {
    return e.classList.add("hydrated");
};
var getValue = function(e, t) {
    return getHostRef(e).$instanceValues$.get(t);
};
var setValue = function(e, t, n, r) {
    var a = getHostRef(e);
    var o = a.$hostElement$;
    var i = a.$instanceValues$.get(t);
    var s = a.$flags$;
    var l = a.$lazyInstance$;
    n = parsePropertyValue(n, r.$members$[t][0]);
    var c = Number.isNaN(i) && Number.isNaN(n);
    var u = n !== i && !c;
    if ((!(s & 8) || i === undefined) && u) {
        a.$instanceValues$.set(t, n);
        if (l) {
            if (r.$watchers$ && s & 128) {
                var f = r.$watchers$[t];
                if (f) f.map(function(e) {
                    try {
                        l[e](n, i, t);
                    } catch (e) {
                        consoleError(e, o);
                    }
                });
            }
            if ((s & 18) === 2) scheduleUpdate(a, false);
        }
    }
};
var proxyComponent = function(e, t, n) {
    if (t.$members$) {
        if (e.watchers) t.$watchers$ = e.watchers;
        var r = Object.entries(t.$members$);
        var a = e.prototype;
        r.map(function(e) {
            var r = e[0], o = e[1][0];
            if (o & 31 || n & 2 && o & 32) Object.defineProperty(a, r, {
                get: function() {
                    return getValue(this, r);
                },
                set: function(e) {
                    setValue(this, r, e, t);
                },
                configurable: true,
                enumerable: true
            });
        });
        if (n & 1) {
            var o = new Map;
            a.attributeChangedCallback = function(e, t, n) {
                var r = this;
                plt.jmp(function() {
                    var t = o.get(e);
                    if (r.hasOwnProperty(t)) {
                        n = r[t];
                        delete r[t];
                    } else if (a.hasOwnProperty(t) && typeof r[t] === "number" && r[t] == n) return;
                    r[t] = n === null && typeof r[t] === "boolean" ? false : n;
                });
            };
            e.observedAttributes = r.filter(function(e) {
                var t = e[0], n = e[1];
                return n[0] & 15;
            }).map(function(e) {
                var n = e[0], r = e[1];
                var a = r[1] || n;
                o.set(a, n);
                if (r[0] & 512) t.$attrsToReflect$.push([
                    n,
                    a
                ]);
                return a;
            });
        }
    }
    return e;
};
var initializeComponent = function(e, t, n, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, r, o, i, s, l, c;
        return __generator(this, function(u) {
            switch(u.label){
                case 0:
                    if (!((t.$flags$ & 32) === 0)) return [
                        3,
                        3
                    ];
                    t.$flags$ |= 32;
                    a = loadModule(n);
                    if (!a.then) return [
                        3,
                        2
                    ];
                    e = uniqueTime();
                    return [
                        4,
                        a
                    ];
                case 1:
                    a = u.sent();
                    e();
                    u.label = 2;
                case 2:
                    if (!a.isProxied) {
                        n.$watchers$ = a.watchers;
                        proxyComponent(a, n, 2);
                        a.isProxied = true;
                    }
                    r = createTime("createInstance", n.$tagName$);
                    t.$flags$ |= 8;
                    try {
                        new a(t);
                    } catch (e) {
                        consoleError(e);
                    }
                    t.$flags$ &= -9;
                    t.$flags$ |= 128;
                    r();
                    fireConnectedCallback(t.$lazyInstance$);
                    if (a.style) {
                        o = a.style;
                        i = getScopeId(n);
                        if (!styles.has(i)) {
                            s = createTime("registerStyles", n.$tagName$);
                            registerStyle(i, o, !!(n.$flags$ & 1));
                            s();
                        }
                    }
                    u.label = 3;
                case 3:
                    l = t.$ancestorComponent$;
                    c = function() {
                        return scheduleUpdate(t, true);
                    };
                    if (l && l["s-rc"]) l["s-rc"].push(c);
                    else c();
                    return [
                        2
                    ];
            }
        });
    });
};
var fireConnectedCallback = function(e) {
    safeCall(e, "connectedCallback");
};
var connectedCallback = function(e) {
    if ((plt.$flags$ & 1) === 0) {
        var t = getHostRef(e);
        var n = t.$cmpMeta$;
        var r = createTime("connectedCallback", n.$tagName$);
        if (!(t.$flags$ & 1)) {
            t.$flags$ |= 1;
            var a = e;
            while(a = a.parentNode || a.host)if (a["s-p"]) {
                attachToAncestor(t, t.$ancestorComponent$ = a);
                break;
            }
            if (n.$members$) Object.entries(n.$members$).map(function(t) {
                var n = t[0], r = t[1][0];
                if (r & 31 && e.hasOwnProperty(n)) {
                    var a = e[n];
                    delete e[n];
                    e[n] = a;
                }
            });
            initializeComponent(e, t, n);
        } else {
            if (t === null || t === void 0 ? void 0 : t.$lazyInstance$) fireConnectedCallback(t.$lazyInstance$);
            else if (t === null || t === void 0 ? void 0 : t.$onReadyPromise$) t.$onReadyPromise$.then(function() {
                return fireConnectedCallback(t.$lazyInstance$);
            });
        }
        r();
    }
};
var disconnectInstance = function(e) {
    safeCall(e, "disconnectedCallback");
};
var disconnectedCallback = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            if ((plt.$flags$ & 1) === 0) {
                t = getHostRef(e);
                if (t === null || t === void 0 ? void 0 : t.$lazyInstance$) disconnectInstance(t.$lazyInstance$);
                else if (t === null || t === void 0 ? void 0 : t.$onReadyPromise$) t.$onReadyPromise$.then(function() {
                    return disconnectInstance(t.$lazyInstance$);
                });
            }
            return [
                2
            ];
        });
    });
};
var bootstrapLazy = function(e, t) {
    if (t === void 0) t = {};
    var n;
    var r = createTime();
    var a = [];
    var o = t.exclude || [];
    var i = win.customElements;
    var s = doc.head;
    var l = s.querySelector("meta[charset]");
    var c = doc.createElement("style");
    var u = [];
    var f;
    var $ = true;
    Object.assign(plt, t);
    plt.$resourcesUrl$ = new URL(t.resourcesUrl || "./", doc.baseURI).href;
    e.map(function(e) {
        e[1].map(function(t) {
            var n = {
                $flags$: t[0],
                $tagName$: t[1],
                $members$: t[2],
                $listeners$: t[3]
            };
            n.$members$ = t[2];
            n.$attrsToReflect$ = [];
            n.$watchers$ = {};
            var r = n.$tagName$;
            var s = function(e) {
                __extends(t, e);
                function t(t) {
                    var r = e.call(this, t) || this;
                    t = r;
                    registerHost(t, n);
                    if (n.$flags$ & 1) t.attachShadow({
                        mode: "open"
                    });
                    return r;
                }
                t.prototype.connectedCallback = function() {
                    var e = this;
                    if (f) {
                        clearTimeout(f);
                        f = null;
                    }
                    if ($) u.push(this);
                    else plt.jmp(function() {
                        return connectedCallback(e);
                    });
                };
                t.prototype.disconnectedCallback = function() {
                    var e = this;
                    plt.jmp(function() {
                        return disconnectedCallback(e);
                    });
                };
                t.prototype.componentOnReady = function() {
                    return getHostRef(this).$onReadyPromise$;
                };
                return t;
            }(HTMLElement);
            n.$lazyBundleId$ = e[0];
            if (!o.includes(r) && !i.get(r)) {
                a.push(r);
                i.define(r, proxyComponent(s, n, 1));
            }
        });
    });
    c.innerHTML = a + HYDRATED_CSS;
    c.setAttribute("data-styles", "");
    var d = (n = plt.$nonce$) !== null && n !== void 0 ? n : queryNonceMetaTagContent(doc);
    if (d != null) c.setAttribute("nonce", d);
    s.insertBefore(c, l ? l.nextSibling : s.firstChild);
    $ = false;
    if (u.length) u.map(function(e) {
        return e.connectedCallback();
    });
    else plt.jmp(function() {
        return f = setTimeout(appDidLoad, 30);
    });
    r();
};
var setNonce = function(e) {
    return plt.$nonce$ = e;
};
var hostRefs = new WeakMap;
var getHostRef = function(e) {
    return hostRefs.get(e);
};
var registerInstance = function(e, t) {
    return hostRefs.set(t.$lazyInstance$ = e, t);
};
var registerHost = function(e, t) {
    var n = {
        $flags$: 0,
        $hostElement$: e,
        $cmpMeta$: t,
        $instanceValues$: new Map
    };
    n.$onReadyPromise$ = new Promise(function(e) {
        return n.$onReadyResolve$ = e;
    });
    e["s-p"] = [];
    e["s-rc"] = [];
    return hostRefs.set(e, n);
};
var isMemberInElement = function(e, t) {
    return t in e;
};
var consoleError = function(e, t) {
    return (0, console.error)(e, t);
};
var cmpModules = new Map;
var loadModule = function(e, t, n) {
    var r = e.$tagName$.replace(/-/g, "_");
    var a = e.$lazyBundleId$;
    var o = cmpModules.get(a);
    if (o) return o[r];
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return require("./".concat(a, ".entry.js").concat("")).then(function(e) {
        cmpModules.set(a, e);
        return e[r];
    }, consoleError);
};
var styles = new Map;
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || {
    head: {}
};
var plt = {
    $flags$: 0,
    $resourcesUrl$: "",
    jmp: function(e) {
        return e();
    },
    raf: function(e) {
        return requestAnimationFrame(e);
    },
    ael: function(e, t, n, r) {
        return e.addEventListener(t, n, r);
    },
    rel: function(e, t, n, r) {
        return e.removeEventListener(t, n, r);
    },
    ce: function(e, t) {
        return new CustomEvent(e, t);
    }
};
var promiseResolve = function(e) {
    return Promise.resolve(e);
};
var supportsConstructableStylesheets = function() {
    try {
        new CSSStyleSheet;
        return typeof (new CSSStyleSheet).replaceSync === "function";
    } catch (e) {}
    return false;
}();
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = function(e, t) {
    return function(n) {
        e.push(n);
        if (!queuePending) {
            queuePending = true;
            if (t && plt.$flags$ & 4) nextTick(flush);
            else plt.raf(flush);
        }
    };
};
var consume = function(e) {
    for(var t = 0; t < e.length; t++)try {
        e[t](performance.now());
    } catch (e) {
        consoleError(e);
    }
    e.length = 0;
};
var flush = function() {
    consume(queueDomReads);
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) plt.raf(flush);
};
var nextTick = function(e) {
    return promiseResolve().then(e);
};
var writeTask = queueTask(queueDomWrites, true);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["blwhm","8c3OQ"], "8c3OQ", "parcelRequire47e4")

//# sourceMappingURL=index.c1d8fc0b.js.map
