'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('redux'),b=require('./d559680a1a0c2551cbce1a9fb152cb99.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),d=require('./f95c72a853f9f39f52b19b1f02806d98.js'),e=require('./a1dd553cc059d528bb0ef56afed53968.js'),f=require('./c4190a2430506f3602ca550e1e75d620.js'),g=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),h=require('./5b7e808cbfe14a62c21959fb1771749d.js'),{connect:i}=require('react-redux');module.exports=i((a)=>{const b=a.simulator.currentWebviewID,c=a.simulator.webviewInfos[b],d=c&&c.navigationBar||{},e=a.toolbar.deviceInfo,f=c&&c.htmlwebviewInfo||{},g=a.simulator.anyHtmlWebviewInfo||{},i=(a.project.current||{}).libVersion,j=a.simulator.appConfig||{},k=i&&(170<=parseInt(i.replace(/\./g,''))||/^[a-zA-Z]+$/.test(i)),l=((j.global||{}).window||{}).navigationStyle||'default',m=((j.global||{}).window||{}).enableFullScreen||!1;let n,o='rgba(255,255,255,1)';try{n=h.fromHex(d.backgroundColor||'#ffffff'),n.a=null==d.alpha||d.alpha==void 0?1:d.alpha,m||'custom'===l||(n.a=1),o=n.toRGBA()}catch(a){o='rgba(255,255,255,1)'}return _extends({navigationBar:d,frontColor:'#ffffff'},d,{useCapsuleNavigationBar:k,customNavigationBar:k&&'custom'===l,backgroundColor:o,showLeftBtn:g.url||d.showLeftBtn,title:g.documentTitle||f.documentTitle||d.title,height:e.navigationbarHeight,webviewID:b,baseURL:`http://127.0.0.1:${global.proxyPort}/__pageframe__/`})},(a)=>({onLeftBtnClick:g.bindActionCreators(()=>(a,b)=>{const c=b(),e=c.simulator.currentWebviewID,g=c.simulator.webviewInfos[e],h=g.htmlwebviewInfo;return h&&h.cangoback&&!h.forceRedirect?void a(f.setActions('back')):void d.navigateBack(a,{api:'navigateBack',args:{delta:1},callbackID:-1})},a),onRightBtnClick:()=>{a(c.setRightBtnActionSheet({show:!0})),e.triggerOnEvent({eventName:'onTapNavigationBarRightButton',data:{}})},setBackground:(b)=>{a(c.setBackground(b))},onHomeClick:()=>{a(c.reLaunchToIndexPage())},onCustomRightClick(){e.triggerOnEvent({eventName:'onTapNavigationBarRightButton',data:{}})}}))(b)}(require('lazyload'),require);