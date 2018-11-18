'use strict';!function(require,directRequire){async function a(a,b){let c,d=2;return c=r.isGameApp(a)?await p(a):await o(a),d=c.subPackages?b.setting.MaxSubpackageFullCodeSize||b.setting.MaxCodeSize:b.setting.MaxCodeSize,d}async function b(b){let d,i,o;b.tempProject?(d=b.tempProject.attr,i=b.tempProject):(d=r.getCurrentConfig(),i=r.getCurrent());try{o=await a(i,d)}catch(a){try{o=d.setting.MaxCodeSize}catch(a){o=2}}const p=1024*o,s=b.onProgressUpdate||B,t=b.onFilesMissing||B;s('buildstart',q.config.COMPILING_CODE);const A=await l(i,{noCompile:!0,onProgressUpdate:s,onFilesIgnored:b.onFilesIgnored});s('globfiles',q.config.COMPARING_FILE_LIST);const D=['**/.git/**','.git/**/*','**/.svn/**','.svn/**/*','.DS_Store','**/.DS_Store'];'plugin'===i.compileType&&D.push('doc/**/*');let E=await C('**',{nodir:!0,ignore:D,nosort:!0,strict:!1,silent:!0,cwd:A,absolute:!1,mark:!0,dot:!0});const F=y.getFileNameMapping(),G=z.invert(F);E=E.map((a)=>{return'string'==typeof G[a]?G[a]:a});let H=(i.packOptions||{}).ignore||[];b.remoteDebug&&b.noMaps&&(H=[...H,{type:'suffix',value:'.map'}]);const I=[];for(const a of E){const b=e.posix.join(i.miniprogramRoot||'',a);if(!x.isFileIgnored(a,H)&&!x.isIngoreByProjectConfig(i,b))I.push(a);else try{const b='string'==typeof F[a]?F[a]:a;c.unlinkSync(e.join(A,b))}catch(a){console.error(a)}}E=I;let J=i.projectpath;'plugin'===i.compileType?J=i.projectpath:i.miniprogramRoot&&(J=e.posix.join(i.projectpath,i.miniprogramRoot));const K=await C('**',{nodir:!0,ignore:D,nosort:!0,strict:!1,silent:!0,cwd:J,absolute:!1,mark:!0,dot:!0}),L=K.filter((a)=>0>E.findIndex((b)=>b===a))||[],M=(await C('**/node_modules/',{nosort:!0,strict:!1,silent:!0,cwd:J,absolute:!1,mark:!0,dot:!0}))||[];L.push(...M),t(L),s('buildend',q.config.CODE_COMPILATION_COMPLETED),s('packstart',q.config.PACKING);const N=e.join(u,`${+new Date}.wx`),O=await m(A,N);c.unlink(N,()=>{}),s('packend',q.config.PACK_COMPLETED),s('uploadstart',q.config.UPLOADING);const P=O.data,Q=O.pDestPath;g(A,()=>{});const R=parseInt(O.totalSize/1024);if(R>p){const a=new Error(q.config.CODE_SIZE_EXCEED.format([R,p]));throw a.code=k.CODE_SIZE_EXCEED,a}let S;const T=global.appConfig.isBeta;if(b.test){if(n[`last-up-test-${i.projectid}`]=R,S=T?`${j.testSourceNewFeatureURL}?gzip=1`:`${j.testSourceURL}?gzip=1`,b.remoteDebug){let a=b.cdpEnabled?4:1;'ios'===b.remoteDebugLocal?a=2:'android'===b.remoteDebugLocal&&(a=3);const c=b.remoteProxyPort||0,d=b.disableUrlCheck?1:0;S=`${j.testSourceURL}?gzip=1&open_remote=yes&remote_network_type=${a}&remote_proxy_port=${c}&disable_url_check=${d}&remote_support_compress_algo=1`}b.autoPreview&&!b.remoteDebug&&(S+='&hot_update=yes');const{page:a,query:c,searchQuery:d,boxQI:e}=b;if(a){const b=encodeURIComponent(`${a}?${c}`);S=`${S}&path=${b}`}if(i.attr.gameApp&&c){const a=encodeURIComponent(`?${c}`);S=`${S}&path=${a}`}if(d&&(S=`${S}&search_query=${encodeURIComponent(d)}`),e){S=`${S}&search_extInfo=${encodeURIComponent(JSON.stringify({box_qi:e}))}`}}else{n[`last-up-load-${i.projectid}`]=R;const a=encodeURIComponent(b.desc),c=encodeURIComponent(b.version),d=encodeURIComponent(b.uuid);S=T?`${j.commitSourceNewFeatureURL}?user-version=${c}&user-desc=${a}&uuid=${d}&gzip=1`:`${j.commitSourceURL}?user-version=${c}&user-desc=${a}&uuid=${d}&gzip=1`}const U=f.gzipSync(P),V=1*new Date,W=b.tempProject?{url:`${S}&appid=${b.tempProject.appid}&devplugin=${i.compileType==w.plugin?1:0}`,method:'post',body:U,needToken:1}:{url:`${S}&devplugin=${i.compileType==w.plugin?1:0}`,method:'post',body:U,needToken:1,needAppID:1};b.tempProject&&b.tempProject.attr&&b.tempProject.attr.platform&&(W.url+='&platform=1',b.tempProject.runtimeAttr&&b.tempProject.runtimeAttr.isExtAppId&&(W.url+=`&ext_appid=${b.tempProject.runtimeAttr.appid||''}`));const{body:X}=await h(W),Y=1*new Date;return v(b.test?'client_test_source_time':'client_commit_source_time',i.appid,`${Y-V}`),s('uploadend',q.config.UPLOAD_COMPLETED),X}const c=require('fs'),d=require('glob'),e=require('path'),f=require('zlib'),g=require('rmdir'),h=require('./15ba1827c7f6564a45df6bd44da3a977.js'),i=require('./92320c1386e6db6a6f2556736a9bc280.js'),j=require('./f171257bbcaef547a3cf27266ccb0db2.js'),k=require('./949d8235c744ced2a80121e4dba34c28.js'),l=require('./911222a6723da8db7ca8a8e3689591e1.js'),m=require('./e5fa35c3c8e81bc6466b4b8eb436113b.js'),n=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),o=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),p=require('./1bd2563d13db26950ae47494b2c34454.js'),q=require('./common/locales/index.js'),r=require('./3bfffbe88b3d923921f851c0697974fe.js'),s=require('./72653d4b93cdd7443296229431a7aa9a.js'),t=require('./d28a711224425b00101635efe1034c99.js'),u=i.Weappdest,v=require('./da7c31daaf542cf1796023d8e344b98a.js'),w=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),x=require('./1c8a8c710417d102ab574145dc51b4b0.js'),y=require('./890791d99e6d0eadf6a5a73d8d797338.js'),z=require('lodash'),A=require('./a932aac82ac84fc9c6c92194bd88204e.js'),B=()=>{},C=function(a,b){return new Promise((c)=>{d(a,b,(a,b)=>{a?c([]):c(b)})})};module.exports=async function(a){return A.enqueueBuildTask(b.bind(null,a),A.buildType.upload)}}(require('lazyload'),require);