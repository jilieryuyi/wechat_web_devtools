'use strict';!function(require,directRequire){function a(a){return{debugShow:a.window.debug&&a.window.debug.show,debugPopup:a.window.debug&&a.window.debug.popup,simulatorShow:a.window.simulator&&a.window.simulator.show,simulatorPopup:a.window.simulator&&'popup'===a.window.simulator.position,editorShow:a.window.mainWindow!==e.MAIN_WINDOW_TYPE.WEB_DEBUGGER&&a.window.editor&&a.window.editor.show,editorPopup:a.window.mainWindow!==e.MAIN_WINDOW_TYPE.WEB_DEBUGGER&&a.window.editor&&a.window.editor.popup}}function b(a){return(b,d)=>{b(a),c(d)}}function c(a){try{if(global.devInfo&&global.devInfo.projectid){let b=a().window;b={editor:b.editor,debug:b.debug,simulator:b.simulator},l.setWindowForProject(global.devInfo.projectid,b)}}catch(a){}}function b(a){return(b,d)=>{b(a),c(d)}}function c(a){try{if(global.devInfo&&global.devInfo.projectid){let b=a().window;b={editor:b.editor,debug:b.debug,simulator:b.simulator},l.setWindowForProject(global.devInfo.projectid,b)}}catch(a){}}const d=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),e=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),f=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),g=require('./db2217eb4cff896bdcbc50abe005058f.js'),h=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),i=require('./da7c31daaf542cf1796023d8e344b98a.js'),j=require('./3bfffbe88b3d923921f851c0697974fe.js'),k=require('./a78e6d6a87de1708226375ca4c320d76.js'),l=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),m=(b)=>(e,f)=>{const g=f(),h=a(g);(h.simulatorPopup||'popup'!==b||h.debugShow&&!h.debugPopup||h.editorShow&&!h.editorPopup)&&(e({type:d.WINDOW_SET_SIMULATOR_POSITION,position:b}),c(f))};module.exports={appMax:()=>(a)=>{global.Win.maximize(),a({type:d.WINDOW_MAXIMIZE})},appMin:()=>(a,b)=>{try{if(b().window.windowStatus.mode===e.WINDOW_MODE.MIN)return}catch(a){}global.Win.minimize(),a({type:d.WINDOW_MINIMIZE})},appFullscreen:()=>(a)=>{a({type:d.WINDOW_FULLSCREEN})},appResize:(a)=>(b)=>{b({type:d.WINDOW_RESIZE,position:a})},recordFocus:(a)=>(b,c)=>{const e=c();a!==e.window.focus&&b({type:d.WINDOW_RECORD_FOCUS,focus:a})},setMask:(a,b=e.MASK_TYPE.GLOBAL_BLOCKING)=>({type:d.WINDOW_SET_MASK,maskType:b,show:a}),setMainWindow:(a)=>(b)=>{(a!==e.MAIN_WINDOW_TYPE.WEB_DEBUGGER||a!==e.MAIN_WINDOW_TYPE.DEV)&&(f.lastSelect=null),b({type:d.WINDOW_SET_MAIN_WINDOW,mainWindow:a})},setAboutWindow:(a)=>({type:d.WINDOW_SET_ABOUT,data:a}),setDebuggerWindow:(b)=>(e,f)=>{const g=f(),h=a(g);h.debugPopup||i(b.show?'weapp_open_devtools':'weapp_close_devtools',!0);!h.debugPopup&&(!1===b.show||b.popup)&&(!h.simulatorShow||h.simulatorPopup)&&(!h.editorShow||h.editorPopup)||(e({type:d.WINDOW_SET_DEBUGGER,data:b}),c(f))},setSimulator:(b={})=>(e,f)=>{const g=f(),h=a(g);h.simulatorPopup||i(b.show?'weapp_open_simulator':'weapp_close_simulator',!0);(h.simulatorPopup||!1!==b.show||'popup'!==b.position||h.debugShow&&!h.debugPopup||h.editorShow&&!h.editorPopup)&&(e({type:d.WINDOW_SET_SIMULATOR,data:b}),c(f))},setCustomCompile:(a)=>({type:d.WINDOW_SET_CUSTOMCOMPILE,data:a}),setCloud:(a)=>{let b;return a.console&&a.console.show?b=g.get(e.WINDOW_REGISTRY.CLOUD_CONSOLE):a.fnaction&&a.fnaction.show&&(b=g.get(e.WINDOW_REGISTRY.CLOUD_SCF_ACTION)),b&&b.focus(),{type:d.WINDOW_SET_CLOUD,data:a}},setQCloud:(a)=>({type:d.WINDOW_SET_QCLOUD,data:a}),setProjectManagement:(a)=>async(b,c)=>{if(a.show){const a=c();if(a.window.projectManagement.show)try{const a=await g.onWindowRegistered(e.WINDOW_REGISTRY.PROJECT_MANAGEMENT);return void a.window.focus()}catch(a){}}b({type:d.WINDOW_SET_PROJECT_MANAGEMENT,data:a})},setRemoteDebugWindow:(a)=>async(b,c)=>{if(a.show){const a=c();if(a.window.remoteDebugWindow.show)try{const a=await g.onWindowRegistered(e.WINDOW_REGISTRY.REMOTE_DEBUG_WINDOW);return void a.window.focus()}catch(a){}}b({type:d.WINDOW_SET_REMOTE_DEBUG_WINDOW,data:a})},setQCloudDebugWindow:(a)=>async(b,c)=>{if(a.show){const a=c();if(a.window.qcloudDebugWindow.show)try{const a=await g.onWindowRegistered(e.WINDOW_REGISTRY.QCLOUD_DEBUG_WINDOW);return void a.window.focus()}catch(a){}}b({type:d.WINDOW_SET_QCLOUD_DEBUG_WINDOW,data:a})},setEditor:(a)=>b({type:d.WINDOW_SET_EDITOR,data:a}),toggleDebugWindow:()=>(b,e)=>{const f=e(),g=a(f);g.debugPopup||i(g.debugShow?'weapp_close_devtools':'weapp_open_devtools',!0);global.isSimple&&g.debugShow&&!g.debugPopup&&(!g.simulatorShow||g.simulatorPopup)||g.debugShow&&!g.debugPopup&&(!g.simulatorShow||g.simulatorPopup)&&(!g.editorShow||g.editorPopup)||(b({type:d.WINDOW_TOGGLE_DEBUGGER}),c(e))},toggleSimulatorWindow:()=>(b,e)=>{const f=e(),g=a(f);g.simulatorPopup||i(g.simulatorShow?'weapp_close_simulator':'weapp_open_simulator',!0);global.isSimple&&g.simulatorShow&&!g.simulatorPopup&&(!g.debugShow||g.debugPopup)||g.simulatorShow&&!g.simulatorPopup&&(!g.debugShow||g.debugPopup)&&(!g.editorShow||g.editorPopup)||(b({type:d.WINDOW_TOGGLE_SIMULATOR}),c(e))},toggleSimulatorPosition:()=>({type:d.WINDOW_TOGGLE_SIMULATOR_POSITION}),toggleSimulatorPopup:()=>(a,b)=>{const c=b();k.disableAllAttached('simulator').then(()=>{'popup'===c.window.simulator.position?a(m('left')):a(m('popup'))})},setSimulatorPosition:m,toggleEditorWindow:()=>{const a=h.getState(),c=a.window.editor&&a.window.editor.show;return i(c?'weapp_close_editor':'weapp_open_editor',!0),b({type:d.WINDOW_TOGGLE_EDITOR})},toggleMiniMode:()=>({type:d.WINDOW_TOGGLE_MINI_MODE}),setQCloudActionType:(a)=>({type:d.WINDOW_SET_QCLOUD_ACTION,data:a}),toggleToolbar:()=>({type:d.WINDOW_TOGGLE_TOOLBAR}),clearMiniCodeOptions:()=>({type:d.WINDOW_CLEAR_MINICODE_OPTIONS}),syncWindow:(a={},b)=>(c)=>{c({type:d.WINDOW_SYNC_STORE,data:a,syncTime:b})},setToolbarConfig:(a)=>({type:d.WINDOW_TOOLBAR_CONFIG,data:a}),setMultiAccountBox:(a)=>({type:d.WINDOW_SET_MULTI_ACCOUNT,data:a}),setAdditionLogin:(a)=>({type:d.WINDOW_SET_ADDITION_LOGIN,data:a}),setPluginPopUpWindow:(a)=>{if(a.show){let b=g.get(`${e.WINDOW_REGISTRY.IDE_PLUGIN}_${a.pluginId}`);b&&b.focus()}return{type:d.WINDOW_SET_PLUGIN_POPUP,data:a}}}}(require('lazyload'),require);