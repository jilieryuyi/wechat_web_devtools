'use strict';!function(require,directRequire){function a(a,h={}){return new Promise(async(m,n)=>{const o=await e(a),p=o.srcPath;let q=o.getAllWXMLFiles();const{type:r}=h,s=o.getAllWXSFiles();s&&0<s.length&&(q=q.concat(s));let t;try{t=await f.getCompileConfig(a)}catch(a){return n(a)}q=q.map((a)=>`./${a}`);const u=`$gwx_${h.pluginId}`;if(!q||0==q.length)return m({code:'',name:u});const v='>_<>_<'+Date.now(),w=['-d',r,t.join(v),'--split',v].concat(q).concat(['-p','-gn',u]),x=a.setting&&a.setting.newFeature,y=b.join(j.Weappdest,i.random());c.writeFileSync(y,w.join('\n'));const z=d.getWXMLParsePath(x),A=l(z,['--config-path',i.normalizePath(y)],{cwd:p}),B=[],C=[];A.on('close',(a)=>{if(c.unlinkSync(y),0===a){const a=Buffer.concat(B).toString();return m({code:a,name:u})}const b=Buffer.concat(C).toString(),d=new Error(g.config.COMPILE_WXML_ERROR_CONSOLE);return d.code=k,d.msgForConsole=b,n(d)}),A.stdout.on('data',(a)=>{B.push(a)}),A.stderr.on('data',(a)=>{C.push(a)})})}const b=require('path'),c=require('fs'),d=require('./d28a711224425b00101635efe1034c99.js'),e=require('./a63026ab5a5a3c59a61a9749a18aa2ca.js'),f=require('./e53dfc2b83456f986002c49964f30fbf.js'),g=require('./common/locales/index.js'),h=require('./2e9637e8a0816a626f7db9a0dee5efe8.js'),i=require('./84b183688a46c9e2626d3e6f83365e13.js'),j=require('./92320c1386e6db6a6f2556736a9bc280.js'),{PLUGIN_TRANS_WXML_JS_ERR:k}=require('./949d8235c744ced2a80121e4dba34c28.js'),{spawn:l}=require('child_process');module.exports=async function(b,c={}){await h.init(b);const d=h.CACHE_KEYS.WXML_PLUGIN,e=c.cut?'-xc':'-cc';let f=h.get(d,e);return f||(f=await a(b,{pluginId:c.pluginId,version:c.version,type:c.cut?'-xc':'-cc'}),h.set(d,e,f)),f}}(require('lazyload'),require);