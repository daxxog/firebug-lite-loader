/* FirebugLiteLoader
 * jQuery loader for Firebug Lite
 * (c) 2014 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.FirebugLiteLoader = factory();
  }
}(this, function() {
    var FirebugLiteLoader;
    
    FirebugLiteLoader = function() {
        (function(F, i, r, e, b, u, g, L, I, T, E) {
            if (F.getElementById(b)) return;
            E = F[i + 'NS'] && F.documentElement.namespaceURI;
            E = E ? F[i + 'NS'](E, 'script') : F[i]('script');
            E[r]('id', b);
            E[r]('src', I + g + T);
            E[r](b, u);
            (F[e]('head')[0] || F[e]('body')[0]).appendChild(E);
            E = new Image();
            E[r]('src', I + L);
        })(document, 'createElement', 'setAttribute', 'getElementsByTagName', 'FirebugLite', '4', 'firebug-lite.js', 'releases/lite/latest/skin/xp/sprite.png', 'https://getfirebug.com/', '#startOpened');
    };

    if(typeof(jQuery) !== 'undefined') {
        (function($) {
            $.fn.FirebugLiteLoader = function() {
                $(this).click(function() {
                    new FirebugLiteLoader();
                });
            };

            $(function() {
                $('a[href="#firebug"]').FirebugLiteLoader();
            });
        }(jQuery));
    }

    return FirebugLiteLoader;
}));
