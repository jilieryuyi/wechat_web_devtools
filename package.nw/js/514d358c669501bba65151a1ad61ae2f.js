'use strict';!function(require,directRequire){function a(a){return a.slice(g,h).readInt32BE()}function b(a){return a.slice(i,j).readInt32BE()}function c(c){let d=a(c),e=b(c),f=c.slice(k,k+d),g=[],h=k;for(let a=0;a<e;a++){let a={},b=c.slice(h,h+4).readInt32BE();h+=4,a.fileName=c.slice(h,h+b).toString(),h+=b,a.offset=c.slice(h,h+4).readInt32BE(),h+=4,a.length=c.slice(h,h+4).readInt32BE(),h+=4,g.push(a)}return g}const d=require('fs'),e=require('mkdir-p'),f=require('path'),g=5,h=9,i=14,j=18,k=18;module.exports=function(a,b){let g=c(a);for(var h={},j=0;j<g.length;j++){let b=g[j],c=b.fileName,d=b.offset,e=b.length,f=a.slice(d,d+e);h[c]=f}if(b)for(var i in h){const a=f.join(b,i);e.sync(f.dirname(a)),d.writeFileSync(a,h[i])}return h}}(require('lazyload'),require);