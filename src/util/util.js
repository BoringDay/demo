export function isFunction (obj) {
    return Object.prototype.toString.call(obj) === "[object Function]";
}

//异步加载js
export function getScript (url, callback) {
    var head = document.getElementsByTagName("head")[0] || document.documentElement;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.charset = "utf-8";
    script.src = url;
    script.onload = script.onreadystatechange = function () {
        if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            if (Util.isFunction(callback)) {
                callback();
            }
            script.onload = script.onreadystatechange = null;
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        }
    };
    head.insertBefore(script, null);
}