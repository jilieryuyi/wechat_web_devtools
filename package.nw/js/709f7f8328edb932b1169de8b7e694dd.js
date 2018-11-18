;!function(require, directRequire){;"use strict";const path=require("path"),child_process=require("child_process"),checkAppConfig=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),vendorManager=require('./d28a711224425b00101635efe1034c99.js'),apperrcodeConfig=require('./949d8235c744ced2a80121e4dba34c28.js'),contentWatcher=require('./162bf2ee28b76d3b3d95b685cede4146.js'),checkCustomComponent=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),tools=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),locales=require('./common/locales/index.js'),compileCache=require('./2e9637e8a0816a626f7db9a0dee5efe8.js'),fileRules=require('./1c8a8c710417d102ab574145dc51b4b0.js'),filterFiles=(a,b,c,d)=>{const e=a.packOptions&&a.packOptions.ignore||[];let f=b.getAllWXSSFiles().filter((a)=>!fileRules.isFileIgnored(a,e));if(c.subPackages){const a=f.filter((a)=>{let b=!0;return c.subPackages.forEach((c)=>{0===a.indexOf(c.root)&&(b=!1)}),b});f=d?a.concat(f.filter((a)=>0===a.indexOf(d.root))):a}return f};function wxssToJS(a,b,c){return new Promise(async(d,e)=>{const f=await contentWatcher(a),g=filterFiles(a,f,b,c),h=c&&c.pages.map((a)=>path.posix.join(c.root,a))||b.pages,i=[],j={};g.forEach((a)=>{j[a]=!0});let k=0;h.forEach((a)=>{j[`${a}.wxss`]&&(k++,i.push(`./${a}.wxss`),delete j[`${a}.wxss`])});let l=[];try{l=await checkCustomComponent.getFileList(a,b,c)}catch(a){return e(a)}for(const a in l.forEach((a)=>{j[`${a}.wxss`]&&(k++,i.push(`./${a}.wxss`),delete j[`${a}.wxss`])}),j)i.push(`./${a}`);const m=["-db","-pc",k].concat(i),n=vendorManager.getWXSSParsePath(),o=child_process.spawn(n,m,{cwd:f.srcPath}),p=[],q=[];o.on("close",(a)=>{if(0===a){const a=Buffer.concat(p).toString(),b=a.split("="),c={};for(let a=0,d=b.length;a<d&&b[a+1];a+=2)c[b[a]]=b[a+1];return d(c)}const b=Buffer.concat(q).toString(),c=new Error(locales.config.COMPILE_WXSS_ERROR_CONSOLE);return c.code=apperrcodeConfig.TRANS_WXSS_JS_ERR,c.msgForConsole=b,e(c)}),o.stdout.on("data",(a)=>{p.push(a)}),o.stderr.on("data",(a)=>{q.push(a)})})}async function transWXSSToJS(a,b={}){const{page:c}=b;await compileCache.init(a);const d=await checkAppConfig(a);if(b.app){const b=compileCache.CACHE_KEYS.WXSS_MAIN;let c=compileCache.get(b);return c&&void 0!==c.comm||(c=await wxssToJS(a,d),compileCache.set(b,c)),c&&c.comm||""}const e=`./${c}.wxss`,f=tools.checkIsInSubPackage(d,c);if(!f){const a=compileCache.CACHE_KEYS.WXSS_MAIN,b=compileCache.get(a);return{page:b&&b[e]||""}}const g=compileCache.CACHE_KEYS.WXSS_SUBPACKAGE;let h=compileCache.get(g,f.root);return h||(h=await wxssToJS(a,d,f),compileCache.set(g,f.root,h)),{comm:h&&h.comm||"",page:h&&h[e]||""}}module.exports=transWXSSToJS;
;}(require("lazyload"), require);
