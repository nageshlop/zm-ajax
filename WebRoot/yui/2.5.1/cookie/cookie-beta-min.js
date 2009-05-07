/*
 * ***** BEGIN LICENSE BLOCK *****
 * 
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2008 Zimbra, Inc.
 * 
 * The contents of this file are subject to the Yahoo! Public License
 * Version 1.0 ("License"); you may not use this file except in
 * compliance with the License.  You may obtain a copy of the License at
 * http://www.zimbra.com/license.
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * 
 * ***** END LICENSE BLOCK *****
 */
/*
Copyright (c) 2008, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 2.5.1
*/
YAHOO.namespace("util");YAHOO.util.Cookie={_createCookieString:function(B,D,C,A){var F=YAHOO.lang;var E=encodeURIComponent(B)+"="+(C?encodeURIComponent(D):D);if(F.isObject(A)){if(A.expires instanceof Date){E+="; expires="+A.expires.toGMTString();}if(F.isString(A.path)&&A.path!=""){E+="; path="+A.path;}if(F.isString(A.domain)&&A.domain!=""){E+="; domain="+A.domain;}if(A.secure===true){E+="; secure";}}return E;},_createCookieHashString:function(B){var D=YAHOO.lang;if(!D.isObject(B)){throw new TypeError("Cookie._createCookieHashString(): Argument must be an object.");}var C=new Array();for(var A in B){if(D.hasOwnProperty(B,A)&&!D.isFunction(B[A])&&!D.isUndefined(B[A])){C.push(encodeURIComponent(A)+"="+encodeURIComponent(String(B[A])));}}return C.join("&");},_parseCookieHash:function(E){var D=E.split("&");var F=null;var C=new Object();for(var B=0,A=D.length;B<A;B++){F=D[B].split("=");C[decodeURIComponent(F[0])]=decodeURIComponent(F[1]);}return C;},_parseCookieString:function(I,A){var J=new Object();if(YAHOO.lang.isString(I)&&I.length>0){var B=(A===false?function(K){return K;}:decodeURIComponent);if(/[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(I)){var G=I.split(/;\s/g);var H=null;var C=null;var E=null;for(var D=0,F=G.length;D<F;D++){E=G[D].match(/([^=]+)=/i);if(E instanceof Array){H=decodeURIComponent(E[1]);C=B(G[D].substring(H.length+1));}else{H=decodeURIComponent(G[D]);C=H;}J[H]=C;}}}return J;},get:function(A,B){var D=YAHOO.lang;var C=this._parseCookieString(document.cookie);if(!D.isString(A)||A===""){throw new TypeError("Cookie.get(): Cookie name must be a non-empty string.");}if(D.isUndefined(C[A])){return null;}if(!D.isFunction(B)){return C[A];}else{return B(C[A]);}},getSub:function(A,C,B){var E=YAHOO.lang;var D=this.getSubs(A);if(D!==null){if(!E.isString(C)||C===""){throw new TypeError("Cookie.getSub(): Subcookie name must be a non-empty string.");}if(E.isUndefined(D[C])){return null;}if(!E.isFunction(B)){return D[C];}else{return B(D[C]);}}else{return null;}},getSubs:function(A){if(!YAHOO.lang.isString(A)||A===""){throw new TypeError("Cookie.getSubs(): Cookie name must be a non-empty string.");}var B=this._parseCookieString(document.cookie,false);if(YAHOO.lang.isString(B[A])){return this._parseCookieHash(B[A]);}return null;},remove:function(B,A){if(!YAHOO.lang.isString(B)||B===""){throw new TypeError("Cookie.remove(): Cookie name must be a non-empty string.");}A=A||{};A.expires=new Date(0);return this.set(B,"",A);},set:function(B,C,A){var E=YAHOO.lang;if(!E.isString(B)){throw new TypeError("Cookie.set(): Cookie name must be a string.");}if(E.isUndefined(C)){throw new TypeError("Cookie.set(): Value cannot be undefined.");}var D=this._createCookieString(B,C,true,A);document.cookie=D;return D;},setSub:function(B,D,C,A){var F=YAHOO.lang;if(!F.isString(B)||B===""){throw new TypeError("Cookie.setSub(): Cookie name must be a non-empty string.");}if(!F.isString(D)||D===""){throw new TypeError("Cookie.setSub(): Subcookie name must be a non-empty string.");}if(F.isUndefined(C)){throw new TypeError("Cookie.setSub(): Subcookie value cannot be undefined.");}var E=this.getSubs(B);if(!F.isObject(E)){E=new Object();}E[D]=C;return this.setSubs(B,E,A);},setSubs:function(B,C,A){var E=YAHOO.lang;if(!E.isString(B)){throw new TypeError("Cookie.setSubs(): Cookie name must be a string.");}if(!E.isObject(C)){throw new TypeError("Cookie.setSubs(): Cookie value must be an object.");}var D=this._createCookieString(B,this._createCookieHashString(C),false,A);document.cookie=D;return D;}};YAHOO.register("cookie",YAHOO.util.Cookie,{version:"2.5.1",build:"984"});