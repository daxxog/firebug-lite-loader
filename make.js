/* FirebugLiteLoader / make.js
 * echo 'make script for FirebugLiteLoader' && node make
 * (c) 2014 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var bitfactory = require('bitfactory'),
    UglifyJS = require("uglify-js"),
    stoptime = require('stoptime'),
    fs = require('fs');

var watch = stoptime(),
    header = '';

bitfactory.make({ //routes
    "": function(err, results) {
        console.log('built FirebugLiteLoader in ' + watch.elapsed() + 'ms.');
    }
}, { //dependencies
    "*": { //wildcard
        "header": function(cb) {
            fs.readFile('firebug-lite-loader.h', 'utf8', function(err, data) {
                header = data;
                cb(err);
            });
        },
        "firebug-lite-loader.min.js": ["header", function(cb) {
            fs.writeFileSync('firebug-lite-loader.min.js', header + UglifyJS.minify('firebug-lite-loader.js').code);
            cb();
        }]
    }
});