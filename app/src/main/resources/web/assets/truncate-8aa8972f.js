import{b1 as j,b2 as A,b3 as b,b4 as z,b5 as L,ax as M,b6 as v,b7 as x}from"./index-400f4a7b.js";import{h as m,s as N,c as F}from"./stringToArray-21332271.js";import{a as _}from"./toInteger-66ec8fce.js";var k="[object RegExp]";function $(e){return j(e)&&A(e)==k}var R=b&&b.isRegExp,p=R?z(R):$;const w=p;var y=L("length");const D=y;var E="\\ud800-\\udfff",G="\\u0300-\\u036f",H="\\ufe20-\\ufe2f",J="\\u20d0-\\u20ff",P=G+H+J,V="\\ufe0e\\ufe0f",q="["+E+"]",d="["+P+"]",c="\\ud83c[\\udffb-\\udfff]",W="(?:"+d+"|"+c+")",S="[^"+E+"]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",T="[\\ud800-\\udbff][\\udc00-\\udfff]",Z="\\u200d",I=W+"?",U="["+V+"]?",B="(?:"+Z+"(?:"+[S,O,T].join("|")+")"+U+I+")*",K=U+I+B,Q="(?:"+[S+d+"?",d,O,T,q].join("|")+")",h=RegExp(c+"(?="+c+")|"+Q+K,"g");function X(e){for(var i=h.lastIndex=0;h.test(e);)++i;return i}function Y(e){return m(e)?X(e):D(e)}var ee=30,re="...",ie=/\w*$/;function ne(e,i){var n=ee,s=re;if(M(i)){var r="separator"in i?i.separator:r;n="length"in i?_(i.length):n,s="omission"in i?v(i.omission):s}e=x(e);var o=e.length;if(m(e)){var u=N(e);o=u.length}if(n>=o)return e;var a=n-Y(s);if(a<1)return s;var f=u?F(u,0,a).join(""):e.slice(0,a);if(r===void 0)return f+s;if(u&&(a+=f.length-a),w(r)){if(e.slice(a).search(r)){var t,C=f;for(r.global||(r=RegExp(r.source,x(ie.exec(r))+"g")),r.lastIndex=0;t=r.exec(C);)var l=t.index;f=f.slice(0,l===void 0?a:l)}}else if(e.indexOf(v(r),a)!=a){var g=f.lastIndexOf(r);g>-1&&(f=f.slice(0,g))}return f+s}export{ne as t};
