#!/bin/sh
# FirebugLiteLoader / prepublish.sh
# prepublish script for FirebugLiteLoader
# (c) 2014 David (daXXog) Volm ><> + + + <><
# Released under Apache License, Version 2.0:
# http://www.apache.org/licenses/LICENSE-2.0.html  
#################################################

if [ ! -f com-npm-install ]; then
	node make
	rm npm-debug.log >> /dev/null
	mv firebug-lite-loader.js ../.tmp.js
	mv firebug-lite-loader.h ../.tmp.h
else
	rm com-npm-install
fi