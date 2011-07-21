/** 
 * require.js
 * vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 0.14.5 Copyright (c) 2010, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
var require,define;(
function(){var N="0.14.5+",a={},G,M,w="_",J=[],n,f,Q,v,K,q,h={},H,P=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,O=/require\(["']([\w\-_\.\/]+)["']\)/g,e,C=!!(typeof window!=="undefined"&&navigator&&document),E=!C&&typeof importScripts!=="undefined",L=C&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,x=Object.prototype.toString,g=Array.prototype,b=g.slice,B,A,d,z=[],y=false,D;function r(i){return x.call(i)==="[object Function]"}if(typeof require!=="undefined"){if(r(require)){return}else{h=require}}function c(s,i,R){var m=G.plugins.defined[s],S;if(m){m[R.name].apply(null,R.args)}else{S=G.plugins.waiting[s]||(G.plugins.waiting[s]=[]);S.push(R);A(["require/"+s],i.contextName)}}function j(W,R,Z){var m=W[0],S=R.contextName,s=Z?"":A.nameToUrl(m,null,S),Y=m+"|"+s,T,V,i,U,X;if(!Z&&!G.defineCache[Y]){G.defineCache[Y]=W}e.apply(A,W);R.loaded[W[0]]=true;if(!Z){V=G.contexts;for(T in V){if(!(T in a)&&T!==S){i=V[T];if(m in i.loaded&&!i.loaded[m]){U=A.nameToUrl(m,null,i.contextName);if(s===U){X=W.slice(0);X.splice(4,1,i.contextName);j(X,i,true)}}}}}}function p(T,s,R){var S,m,U;for(S=0;(U=s[S]);S++){U=typeof U==="string"?{name:U}:U;m=U.location;if(R&&(!m||(m.indexOf("/")!==0&&m.indexOf(":")===-1))){U.location=R+"/"+(U.location||U.name)}U.location=U.location||U.name;U.lib=U.lib||"lib";U.main=U.main||"main";T[U.name]=U}}function l(R){var T=true,S=R.config.priorityWait,m,s;if(S){for(s=0;(m=S[s]);s++){if(!R.loaded[m]){T=false;break}}if(T){delete R.config.priorityWait}}return T}function k(S){var m,R,s=G.paused;if(S.scriptCount<=0){S.scriptCount=0;while(z.length){m=z.shift();if(m[0]===null){A.onError(new Error("Mismatched anonymous require.def modules"))}else{j(m,S)}}if(S.config.priorityWait&&!l(S)){return}if(s.length){for(R=0;(m=s[R]);R++){A.checkDeps.apply(A,m)}}A.checkLoaded(G.ctxName)}}require=function(S,T,R,i){var s,m;if(typeof S==="string"&&!r(T)){return require.get(S,T,R,i)}if(!require.isArray(S)){m=S;if(require.isArray(T)){S=T;T=R;R=i;i=arguments[4]}else{S=[]}}e(null,S,T,m,R,i);s=G.contexts[(R||(m&&m.context)||G.ctxName)];if(s&&s.scriptCount===0){k(s)}return undefined};A=require;A.onError=function(i){throw i};define=A.def=function(R,V,W,U){var S,m,s,T=D;if(typeof R!=="string"){U=W;W=V;V=R;R=null}if(!A.isArray(V)){U=W;W=V;V=[]}if(!R&&!V.length&&A.isFunction(W)){W.toString().replace(P,"").replace(O,function(i,X){V.push(X)});V=["require","exports","module"].concat(V)}if(!R&&y){m=document.getElementsByTagName("script");for(S=m.length-1;S>-1&&(s=m[S]);S--){if(s.readyState==="interactive"){T=s;break}}if(!T){A.onError(new Error("ERROR: No matching script interactive for "+W))}R=T.getAttribute("data-requiremodule")}if(typeof R==="string"){G.contexts[G.ctxName].jQueryDef=(R==="jquery")}z.push([R,V,W,null,U])};e=function(am,Y,U,ak,aj,ai){var s,S,af,X,aa,R,V,Z,T,ae,W,ag,ac,m,ab,ah,ad,al;aj=aj?aj:(ak&&ak.context?ak.context:G.ctxName);s=G.contexts[aj];if(am){W=am.indexOf("!");if(W!==-1){X=am.substring(0,W);am=am.substring(W+1,am.length)}else{X=s.defPlugin[am]}ah=s.waiting[am];if(s&&(s.defined[am]||(ah&&ah!==g[am]))){return}}if(aj!==G.ctxName){af=(G.contexts[G.ctxName]&&G.contexts[G.ctxName].loaded);aa=true;if(af){for(R in af){if(!(R in a)){if(!af[R]){aa=false;break}}}}if(aa){G.ctxName=aj}}if(!s){S={contextName:aj,config:{waitSeconds:7,baseUrl:G.baseUrl||"./",paths:{},packages:{}},waiting:[],specified:{require:true,exports:true,module:true},loaded:{},scriptCount:0,defPlugin:{},defined:{},modifiers:{}};if(G.plugins.newContext){G.plugins.newContext(S)}s=G.contexts[aj]=S}if(ak){if(ak.baseUrl){if(ak.baseUrl.charAt(ak.baseUrl.length-1)!=="/"){ak.baseUrl+="/"}}ae=s.config.paths;ad=s.config.packages;A.mixin(s.config,ak,true);if(ak.paths){for(R in ak.paths){if(!(R in a)){ae[R]=ak.paths[R]}}s.config.paths=ae}al=ak.packagePaths;if(al||ak.packages){if(al){for(R in al){if(!(R in a)){p(ad,al[R],R)}}}if(ak.packages){p(ad,ak.packages)}s.config.packages=ad}if(ak.priority){A(ak.priority);s.config.priorityWait=ak.priority}if(ak.deps||ak.callback){A(ak.deps||[],ak.callback)}if(ak.ready){A.ready(ak.ready)}if(!Y){return}}if(Y){Z=Y;Y=[];for(ag=0;ag<Z.length;ag++){Y[ag]=A.splitPrefix(Z[ag],(am||ai),s)}}V=s.waiting.push({name:am,deps:Y,callback:U});if(am){s.waiting[am]=V-1;s.specified[am]=true;T=s.modifiers[am];if(T){A(T,aj);ac=T.__deferMods;if(ac){for(ag=0;ag<ac.length;ag++){m=ac[ag];ab=m[m.length-1];if(ab===undefined){m[m.length-1]=aj}else{if(typeof ab==="string"){ac.push(aj)}}require.def.apply(require,m)}}}}if(am&&U&&!A.isFunction(U)){s.defined[am]=U}if(X){c(X,s,{name:"require",args:[am,Y,U,s]})}G.paused.push([X,am,Y,s]);if(am){s.loaded[am]=true;s.jQueryDef=(am==="jquery")}};A.mixin=function(s,m,i){for(var R in m){if(!(R in a)&&(!(R in s)||i)){s[R]=m[R]}}return A};A.version=N;G=A.s={ctxName:w,contexts:{},paused:[],plugins:{defined:{},callbacks:{},waiting:{}},skipAsync:{},urlFetched:{},defineCache:{},isBrowser:C,isPageLoaded:!C,readyCalls:[],doc:C?document:null};A.isBrowser=G.isBrowser;if(C){G.head=document.getElementsByTagName("head")[0];d=document.getElementsByTagName("base")[0];if(d){G.head=d.parentNode}}function F(m,s){var i=G.plugins.callbacks[m]=[];G.plugins[m]=function(){for(var S=0,R;(R=i[S]);S++){if(R.apply(null,arguments)===true&&s){return true}}return false}}A.plugin=function(T){var U,m,Z,W=T.prefix,V=G.plugins.callbacks,Y=G.plugins.waiting[W],X,R=G.plugins.defined,S=G.contexts,s;if(R[W]){return A}R[W]=T;X=["newContext","isWaiting","orderDeps"];for(U=0;(m=X[U]);U++){if(!G.plugins[m]){F(m,m==="isWaiting")}V[m].push(T[m])}if(T.newContext){for(m in S){if(!(m in a)){s=S[m];T.newContext(s)}}}if(Y){for(U=0;(Z=Y[U]);U++){if(T[Z.name]){T[Z.name].apply(null,Z.args)}}delete G.plugins.waiting[W]}return A};function I(i,s){if(!i.jQuery){var m=s||(typeof jQuery!=="undefined"?jQuery:null);if(m&&"readyWait"in m){i.jQuery=m;if(!i.defined.jquery&&!i.jQueryDef){i.defined.jquery=m}if(i.scriptCount){m.readyWait+=1;i.jQueryIncremented=true}}}}A.completeLoad=function(m,s){var i;while(z.length){i=z.shift();if(i[0]===null){i[0]=m;break}else{if(i[0]===m){break}else{j(i,s)}}}if(i){j(i,s)}s.loaded[m]=true;I(s);s.scriptCount-=1;k(s)};A.pause=A.resume=function(){};A.checkDeps=function(m,s,U,S){var R,T;if(m){c(m,S,{name:"checkDeps",args:[s,U,S]})}else{for(R=0;(T=U[R]);R++){if(!S.specified[T.fullName]){S.specified[T.fullName]=true;S.startTime=(new Date()).getTime();if(T.prefix){c(T.prefix,S,{name:"load",args:[T.name,S.contextName]})}else{A.load(T.name,S.contextName)}}}}};A.modify=function(T,m,Y,X,S){var i,R,U,V=(typeof T==="string"?S:m)||G.ctxName,s=G.contexts[V],W=s.modifiers;if(typeof T==="string"){U=W[T]||(W[T]=[]);if(!U[m]){U.push(m);U[m]=true}if(s.specified[T]){A.def(m,Y,X,S)}else{(U.__deferMods||(U.__deferMods=[])).push([m,Y,X,S])}}else{for(i in T){if(!(i in a)){R=T[i];U=W[i]||(s.modifiers[i]=[]);if(!U[R]){U.push(R);U[R]=true;if(s.specified[i]){A([R],V)}}}}}};A.isArray=function(i){return x.call(i)==="[object Array]"};A.isFunction=r;A.get=function(s,S,i){if(s==="require"||s==="exports"||s==="module"){A.onError(new Error("Explicit require of "+s+" is not allowed."))}S=S||G.ctxName;var m,R=G.contexts[S];s=A.normalizeName(s,i,R);m=R.defined[s];if(m===undefined){A.onError(new Error("require: module name '"+s+"' has not been loaded yet for context: "+S))}return m};A.load=function(s,V){var S=G.contexts[V],T=G.urlFetched,m=S.loaded,i,U,R;G.isDone=false;if(!m[s]){m[s]=false}if(V!==G.ctxName){J.push(arguments)}else{i=A.nameToUrl(s,null,V);if(!T[i]){S.scriptCount+=1;A.attach(i,V,s);T[i]=true;if(S.jQuery&&!S.jQueryIncremented){S.jQuery.readyWait+=1;S.jQueryIncremented=true}}else{U=s+"|"+i;if(G.defineCache[U]){R=G.defineCache[U].slice(0);R.splice(4,1,V);j(R,S,true)}}}};A.jsExtRegExp=/\.js$/;A.normalizeName=function(m,R,s){var i;if(m.charAt(0)==="."){if(R){if(s.config.packages[R]){R=[R]}else{R=R.split("/");R=R.slice(0,R.length-1)}m=R.concat(m.split("/"));for(M=0;(i=m[M]);M++){if(i==="."){m.splice(M,1);M-=1}else{if(i===".."){if(M===1){break}else{if(M>1){m.splice(M-1,2);M-=2}}}}}m=m.join("/")}}return m};A.splitPrefix=function(m,R,s){var i=m.indexOf("!"),S=null;if(i!==-1){S=m.substring(0,i);m=m.substring(i+1,m.length)}m=A.normalizeName(m,R,s);return{prefix:S,name:m,fullName:S?S+"!"+m:m}};A.nameToUrl=function(s,S,U,X){var ac,Y,Z,ab,V,W,aa,m,R=G.contexts[U],T=R.config;s=A.normalizeName(s,X,R);if(s.indexOf(":")!==-1||s.charAt(0)==="/"||A.jsExtRegExp.test(s)){m=s+(S?S:"")}else{ac=T.paths;Y=T.packages;V=s.split("/");for(W=V.length;W>0;W--){aa=V.slice(0,W).join("/");if(ac[aa]){V.splice(0,W,ac[aa]);break}else{if((Z=Y[aa])){ab=Z.location+"/"+Z.lib;if(s===Z.name){ab+="/"+Z.main}V.splice(0,W,ab);break}}}m=V.join("/")+(S||".js");m=(m.charAt(0)==="/"||m.match(/^\w+:/)?"":T.baseUrl)+m}return T.urlArgs?m+((m.indexOf("?")===-1?"?":"&")+T.urlArgs):m};A.blockCheckLoaded=true;A.checkLoaded=function(ai){var U=G.contexts[ai||G.ctxName],X=U.config.waitSeconds*1000,Z=X&&(U.startTime+X)<new Date().getTime(),ag,S=U.defined,m=U.modifiers,s,af="",ad=false,R=false,V,ac=G.plugins.isWaiting,ae=G.plugins.orderDeps,ah,T,ab,aa,W,Y;if(U.isCheckLoaded){return}if(U.config.priorityWait){if(l(U)){k(U)}else{return}}U.isCheckLoaded=A.blockCheckLoaded;s=U.waiting;ag=U.loaded;for(V in ag){if(!(V in a)){ad=true;if(!ag[V]){if(Z){af+=V+" "}else{R=true;break}}}}if(!ad&&!s.length&&(!ac||!ac(U))){U.isCheckLoaded=false;return}if(Z&&af){Y=new Error("require.js load timeout for modules: "+af);Y.requireType="timeout";Y.requireModules=af;A.onError(Y)}if(R){U.isCheckLoaded=false;if(C||E){setTimeout(function(){A.checkLoaded(ai)},50)}return}U.waiting=[];U.loaded={};if(ae){ae(U)}for(V in m){if(!(V in a)){if(S[V]){A.execModifiers(V,{},s,U)}}}for(ah=0;(T=s[ah]);ah++){A.exec(T,{},s,U)}U.isCheckLoaded=false;if(U.waiting.length||(ac&&ac(U))){A.checkLoaded(ai)}else{if(J.length){ag=U.loaded;ab=true;for(V in ag){if(!(V in a)){if(!ag[V]){ab=false;break}}}if(ab){G.ctxName=J[0][1];aa=J;J=[];for(ah=0;(W=aa[ah]);ah++){A.load.apply(A,W)}}}else{G.ctxName=w;G.isDone=true;if(A.callReady){A.callReady()}}}};function t(i){return function(m){i.exports=m}}function u(m,s,i){return function(){var R=[].concat(b.call(arguments,0));R.push(s,i);return(m?require[m]:require).apply(null,R)}}function o(m,i){var s=m.contextName,R=u(null,s,i);A.mixin(R,{modify:u("modify",s,i),def:u("def",s,i),get:u("get",s,i),nameToUrl:u("nameToUrl",s,i),ready:A.ready,context:m,config:m.config,isBrowser:G.isBrowser});return R}A.exec=function(s,U,ad,m){if(!s){return undefined}var i=s.name,S=s.callback,ac=s.deps,V,aa,T=m.defined,X,Y=[],R,W,Z=false,ab;if(i){if(U[i]||i in T){return T[i]}U[i]=true}if(ac){for(V=0;(aa=ac[V]);V++){ab=aa.name;if(ab==="require"){R=o(m,i)}else{if(ab==="exports"){R=T[i]={};Z=true}else{if(ab==="module"){W=R={id:i,uri:i?A.nameToUrl(i,null,m.contextName):undefined};W.setExports=t(W)}else{R=ab in T?T[ab]:(U[ab]?undefined:A.exec(ad[ad[ab]],U,ad,m))}}}Y.push(R)}}S=s.callback;if(S&&A.isFunction(S)){X=A.execCb(i,S,Y);if(i){if(Z&&X===undefined&&(!W||!("exports"in W))){X=T[i]}else{if(W&&"exports"in W){X=T[i]=W.exports}else{if(i in T&&!Z){A.onError(new Error(i+" has already been defined"))}T[i]=X}}}}A.execModifiers(i,U,ad,m);return X};A.execCb=function(s,i,m){return i.apply(null,m)};A.execModifiers=function(V,U,W,S){var m=S.modifiers,T=m[V],R,s;if(T){for(s=0;s<T.length;s++){R=T[s];if(R in W){A.exec(W[W[R]],U,W,S)}}delete m[V]}};A.onScriptLoad=function(i){var R=i.currentTarget||i.srcElement,S,m,s;if(i.type==="load"||L.test(R.readyState)){S=R.getAttribute("data-requirecontext");m=R.getAttribute("data-requiremodule");s=G.contexts[S];A.completeLoad(m,s);if(R.removeEventListener){R.removeEventListener("load",A.onScriptLoad,false)}else{R.detachEvent("onreadystatechange",A.onScriptLoad)}}};A.attach=function(s,U,m,V,S){var T,i,R;if(C){V=V||A.onScriptLoad;T=document.createElement("script");T.type=S||"text/javascript";T.charset="utf-8";if(!G.skipAsync[s]){T.async=true}T.setAttribute("data-requirecontext",U);T.setAttribute("data-requiremodule",m);if(T.addEventListener){T.addEventListener("load",V,false)}else{y=true;T.attachEvent("onreadystatechange",V)}T.src=s;D=T;if(d){G.head.insertBefore(T,d)}else{G.head.appendChild(T)}D=null;return T}else{if(E){R=G.contexts[U];i=R.loaded;i[m]=false;importScripts(s);A.completeLoad(m,R)}}return null};G.baseUrl=h.baseUrl;if(C&&(!G.baseUrl||!G.head)){n=document.getElementsByTagName("script");if(h.baseUrlMatch){Q=h.baseUrlMatch}else{Q=/(requireplugins-|require-)?jquery[\-\d\.]*(min)?\.js(\W|$)/i;Q=/dojo\.js(\W|$)/i;Q=/(allplugins-)?require\.js(\W|$)/i}for(M=n.length-1;M>-1&&(f=n[M]);M--){if(!G.head){G.head=f.parentNode}if(!h.deps){q=f.getAttribute("data-main");if(q){h.deps=[q]}}v=f.src;if(v&&!G.baseUrl){K=v.match(Q);if(K){G.baseUrl=v.substring(0,K.index);break}}}}A.pageLoaded=function(){if(!G.isPageLoaded){G.isPageLoaded=true;if(B){clearInterval(B)}if(H){document.readyState="complete"}A.callReady()}};A.callReady=function(){var R=G.readyCalls,s,U,T,m,S;if(G.isPageLoaded&&G.isDone){if(R.length){G.readyCalls=[];for(s=0;(U=R[s]);s++){U()}}T=G.contexts;for(S in T){if(!(S in a)){m=T[S];if(m.jQueryIncremented){m.jQuery.readyWait-=1;m.jQueryIncremented=false}}}}};A.ready=function(i){if(G.isPageLoaded&&G.isDone){i()}else{G.readyCalls.push(i)}return A};if(C){if(document.addEventListener){document.addEventListener("DOMContentLoaded",A.pageLoaded,false);window.addEventListener("load",A.pageLoaded,false);if(!document.readyState){H=true;document.readyState="loading"}}else{if(window.attachEvent){window.attachEvent("onload",A.pageLoaded);if(self===self.top){B=setInterval(function(){try{if(document.body){document.documentElement.doScroll("left");A.pageLoaded()}}catch(i){}},30)}}}if(document.readyState==="complete"){A.pageLoaded()}}A(h);if(typeof setTimeout!=="undefined"){setTimeout(function(){var i=G.contexts[(h.context||w)];I(i);k(i)},0)}}());

/**
 * Less
 *
 */
var Less = (function(){

    var req = function(scripts, onload){
        require(scripts, onload);
    };
    
    
    /**
     * The ContentLoader provides some method to manage ajax connections,
     *
     */
    var ContentLoader = function(){
        var _self = this;
        
        _self.curUrl = "";
        _self.method = "GET";
		_self.cached = true;
		
        var _handleTimeout = function(res){
            throw new Error("fetch response timeout, url:" + _self.curUrl);
        };
        
		this.handleFailure = function(){};
        
        this.parseResponse = function(res){
        };
        
        this.setProcressing = function(flag){
        };
        
        var _handleSuccess = function(res){
            _self.parseResponse(res);
            _self.setProcressing(false);
            _self.onLoad();
        };
        
        this.asyncRequest = function(method, url, callback){
        
        };
        
        var _getAsyncManager = function(){
            return {
                asyncRequest: _self.asyncRequest
            }
        };
        
        this.loadContent = function(module){
            _self.setProcressing(true);
            
            _self.curUrl = module.source;
            _self.container = module.target;
            
			var url = (_self.method == "GET" && module.queryData) ? 
						_self.curUrl + "?"+ (module.queryData + (_self.cached ? ("&r=" + Math.random()) : "") )
						: (_self.curUrl + (_self.cached ? ("?r=" + Math.random()) : ""));

            _getAsyncManager().asyncRequest(_self.method, url , {
                success: _handleSuccess,
                failure: this.handleFailure,
                timeout: 5000
            },_self.queryData);
        };
        
    };
	
    /**
     * merge properties of two objects
     * @param {Object} obj1
     * @param {Object} obj2
     */
    function merge(obj1, obj2){
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor == Object) {
                    obj1[p] = MergeRecursive(obj1[p], obj2[p]);
                    
                }
                else {
                    obj1[p] = obj2[p];
                }
            } 
            catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }
    
    
    /** 
     * @method _getHash
     * @return {string} The hash portion of the document's location
     * @private
     */
    var _getHash = function(){
        var i, href;
        href = top.location.href;
        i = href.indexOf("#");
        return i >= 0 ? href.substr(i + 1) : null;
    };
    
    var HistoryManager = (function(){
        var documentMode = document.documentMode,        
		/**
         * onStateChange will be called whenever hash changed
         *
         * @Method onStateChange
         * @type Function
         * @private
         */
        onStateChange = function(){
        },        
		/**
         * current location hash
         *
         * @property hash
         * @type string
         * @default ''
         * @private
         */
        hash,        
		/**
         * check whether the hash changed
         *
         * @Method checkStateChange
         * @type Function
         * @private
         */
        _checkStateChange = function(state){
            if (state != hash) {
                hash = state;
                onStateChange(hash);
            }
        },        /**
         * Flag used to tell whether History.init has been called.
         *
         * @property _initialized
         * @type boolean
         * @default false
         * @private
         */
        _initialized = false,        
		/**
         * hidden IFrame used to store the browsing history.
         *
         * @property _histFrame
         * @type HTMLIFrameElement
         * @default null
         * @private
         */
        _histFrame,        
		/**
         * Update the IFrame with new state.
         *
         * @method _updateIFrame
         * @private
         * @return {boolean} true if successful. throw an error otherwise.
         */
        _updateIFrame = function(newState){
            if (!newState) {
                return;
            }
            var html, doc;
            
            html = '<html><title>' +
            newState.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") +
            '</title><body></body></html>';
            
            try {
                doc = _histFrame.contentWindow.document;
                doc.open();
                doc.write(html);
                doc.close();
                return true;
            } 
            catch (e) {
                throw new Error("update _histFrame faliure(in IE7 and below), browser error :" + e.message);
            }
        },        
		/**
         * Used by Internet Explorer 7 and below to set up an iframe that keeps track of history changes
         * Periodically checks whether our internal IFrame is ready to be used of
         *
         * @method _setUpIframe
         * @private
         */
        _setUpIframe = function(){
       
            var doc, data;
            
            //Don't run until access to the iframe is allowed.
            try {
                doc = _histFrame.contentWindow.document;
            } 
            catch (e) {
                setTimeout(_setUpIframe, 10);
                return;
            }
            
            //Create a history entry for the initial state. 
            _updateIFrame(hash);
            data = hash;
            
            setInterval(function(){
                var currentData, currentHash;    
                try {
					currentData = _histFrame.contentWindow.document.title;	
                    if (currentData !== data) {
                        data = currentData;
                        _checkStateChange(data);
                        top.location.hash = hash = currentData;
                    }
                    else {
                        currentHash = _getHash();
                        if (currentHash != hash) {
							_updateIFrame(currentHash);
						}
                    }
                }catch (e) {
                    throw new Error("set up iframe error");
                }
            }, 50);
        };
        
        return {
            /**
             * Initializes the Browser History Manager. Call this method
             * from a script block located right after the opening body tag.
             *
             * @method init
             * @param {Object} config
             * 		config.histFrame : <input type="hidden"> used to store application states. Must be in the static markup.
             * 		config.onStateChange : callback for hash changing\
             * 		config.rotationTime : rotation time in sec
             * @public
             */
            init: function(config){
                config = config || {};
                
                if (_initialized) 
                    return;
                
                _initialized = true;
                onStateChange = config.onStateChange || onStateChange;
                
                //Keep track of the hash value.
                hash = _getHash();
                if (hash) {
                    onStateChange(hash);
                }
                
                //specific code for IE.
                if (window.ActiveXObject) {
                    if (!documentMode || documentMode < 8) {
                        // IE 5.5/6/7 need an iframe for history support.
                        _histFrame = document.getElementById(config.histFrame);
                        if (!_histFrame) {
                            throw new Error("can not find the hidden iframe[" + config.histFrame + "] in IE7 and below");
                        }
                        _setUpIframe();
                    }
                    else {
                        // IE 8 has onhashchange event.
                        window.attachEvent("onhashchange", function(){							
							_checkStateChange(_getHash());
						});
                    }
                }
                else {
                    // Change Opera navigation mode to improve history support.
                    if (history.navigationMode) 
                        history.navigationMode = "compatible";
                    
                    setInterval(function(){
						_checkStateChange(_getHash());	
					}, config.rotationTime || 500);
                }
                
                return this;
            },
            
            /**
             * Cancel if the new hash is the same as the current one, since there
             * is no cross-browser way to keep track of navigation to the exact
             * same hash multiple times in a row. A wrapper can handle this by
             * adding an incrementing counter to the end of the hash.
             * @param {string} newHash
             */
            go: function(newHash, flag){
                if (newHash == hash) 
                    return;
                if (_histFrame) {
                    _updateIFrame(newHash);
                }
                else {
                    location.hash = hash = newHash;
                    if (!flag) {
                        onStateChange(newHash);
                    }
                }
            },
			getState : function(){
				return _getHash();
			}
			
        };
    })();
    
    
    /**
     * Module  single module
     *
     * @param {String} name
     * @param {Object} args
     */
    var Module = function(name, args){
    
        this.name = name;
        
        this.queryData = "";
		
        this.onLoad = function(){
        
        };
        
        this.autoLoad = [];
        
        for (var x in args) {
            this[x] = args[x];
        }
        
        this.garbageCollection = function(){
			
		};
    };
    
    /**
     * 模块集合
     */
    var Modules = function(){
    
        var _self = this,        
		/**
         * modules's base infomation, for example: scriptPath, stylePath
         *
         * @property baseInfo
         * @type Object
         * @private
         */
        baseInfo,        
		/**
         * module entities
         *
         * @property entities
         * @type Array
         * @private
         */
        entities,        
		/**
         * module's count
         *
         * @property entities
         * @type Array
         * @private
         */
        count,        
		/**
         * import style files
         *
         * @param {Module} module
         */
        importStyle = function(module){
        
            var styles = module.styles;
            
            if (!styles) {
                return;
            }
            
            for (var i = styles.length; i--;) {
            
                var styleId = module.name + "-" + i;
                if (document.getElementById(styleId)) {
                    continue;
                }
                
                var styleEl = document.createElement("link");
                styleEl.id = styleId;
                styleEl.rel = "stylesheet";
                styleEl.href = styles[i];
                
                var wrapper = document.getElementsByTagName("head")[0] || document.body;
                wrapper.appendChild(styleEl);
            }
        },
		gc = function(){
			var que = _self.modulesQue;
			for(var x = que.length ; x--;){
				que[x].garbageCollection();
			}
		};
        
        
        /**
         *
         */
        this.modulesQue = [];
        
        /**
         * get a module form module queue by name
         *
         * @param {Object} name
         */
        this.get = function(name){
            var que = _self.modulesQue;
            for (var i = que.length; i--;) {
                if (que[i].name == name) {
                    return que[i];
                }
            }
            return null;
        };
        
        /**
         * add a module to the modules array
         * @param {Object} module
         */
        this.add = function(module){
            this.modulesQue.push(module);
        };
        
        
        /**
         * Prepare a file used to describe modules
         *
         * @param {Object} args
         */
        this.loadModuleMaps = function(args){
            var _self = this, moduleMaps = args.moduleMaps, onFinish = args.onFinish;
            
            req([moduleMaps], function(){
                if (typeof modules == "undefined" || !modules) {
                    throw new Error("no modules found. Check the module maps file");
                }
                
                baseInfo = modules.base, entities = modules.entities;
                count = entities.length;
                
                for (var x in entities) {
                    var entity = entities[x];
                    _self.add(new Module(x, entity));
                    
                    scripts = entity.scripts || [];
                    styles = entity.styles || [];
                    
                    for (var i = scripts.length; i--;) {
                        scripts[i] = scripts[i].indexOf("/")>=0 ? scripts[i] : baseInfo.scriptPath + scripts[i];
                    }
                    
                    for (var i = styles.length; i--;) {
                        styles[i] = baseInfo.cssPath + styles[i];
                    }
                }
                onFinish.call(_self);
            });
        };
        
        /**
         * remove a module from the modules array
         * @param {Object} module
         */
        this.remove = function(moduleName){
            var _self = this;
            _self.modules.sort(function(a, b){
                a = a.name === moduleName ? 2 : 1;
                b = b.name === moduleName ? 2 : 1;
                return a - b;
            });
            
            _self.modulesQue[_self.modulesQue.lenght - 1].garbageCollection();
            _self.modulesQue.pop();
        };
        
        this.setContentLoader = function(contentLoader){
            this.contentLoader = contentLoader;
        };
        
        this.getCrawlerAllowed = function(){
            return baseInfo.crawlerAllowed;
        };
        
        this.getModuleName = function(hash){
            if (!hash) 
                return "";
            return this.getCrawlerAllowed() ? hash.replace(/(\!)/g, "") : hash;
        }
        
        this.state = "";
        
        this.setState = function(state){
            this.state = state;
			_historyManager.go(state , false);
        }
        
        function isArray(a){
            return Object.prototype.toString.call(a) === '[object Array]';
        }
        
		this.dispatch = function(states){
			var name = isArray(states) ? states[0] : states;			
			if (name == this.state || typeof name == undefined || !name || typeof name != "string") {
                return;
            }
           
			var queryStr = name.split("?")[1]|| "";			
			name = name.split("?")[0];
			
            var moduleName = this.getModuleName(name);
            if (moduleName === ""){
				return;
			} 
			
            var moduleEntity = this.get(moduleName);
			
            if (moduleEntity == null) {
                return;
            }
            var _self = this;
            
            this.setState(name + (queryStr && !moduleEntity.stateless ? ( "?" + queryStr ): ""));
			
            if (moduleEntity.target) {
                this.contentLoader.onLoad = function(){
					gc();
                    req(moduleEntity.scripts, function(){
                        moduleEntity.onLoad();
                        
						if(isArray(states) && states[1]){
							states.shift();
							_self.dispatch(states);	
						}else{
							if (moduleEntity.autoLoad) {
								_self.dispatch(moduleEntity.autoLoad);
							}	
						}                       
                    });
                }
				
				moduleEntity.queryData = queryStr;
                this.contentLoader.loadContent(moduleEntity);
            }
            importStyle(moduleEntity);
			
		}		
		
        this.onStateChange = function(){
        };
		
        this.sniff = function(state){
            if (!state) {
                return;
            }
			
            if (_self.state == "") {
                var states = state.split("/"), statesTemp = [];
                for (var x = 0, y = states.length; x < y; x++) {
                    var result = "";
                    for (var z = 0; z <= x; z++) {
                        result = result + "/" + states[z];
                    }
                    if (result != "") {
                        statesTemp.push(result.substr(1));
                    }
                }
               	_self.dispatch(statesTemp);
                _self.onStateChange(statesTemp[0]);
            }
            else {
                _self.dispatch(state);
                _self.onStateChange(state);
            }
        };
    };
    Modules.getInstance = function(){
        if (Modules.instance == undefined) {
            Modules.instance = new Modules();
        }
        return Modules.instance;
    };
    
    
    
    var ModulesManager = (function(){
    
        var modules = Modules.getInstance(), procressing = false;
        
        return {
            getModules: function(){
                return modules;
            },
            init: function(args){
				
				if(!args || args === undefined){
					return this;
				}
				
                modules.setContentLoader(args.contentLoader);
                modules.loadModuleMaps(args);
                if (args.onStateChange) {
                    modules.onStateChange = args.onStateChange;
                }
                return this;
            },
            getStateName: function(state){
                return (modules.getCrawlerAllowed() ? "!" : "") + state
            },
            addModule: function(name, entity){
                var module = new Module(name, entity);
                if (entity.autoLoad) {
                    var que = modules.modulesQue;
                    for (var i = que.length; i--;) {
                        if (name.indexOf(que[i].name) >= 0) {
                            que[i].autoLoad.push(name);
                        }
                    }
                }
                modules.add(module);
            },
			modifyModule : function(moduleName ,type, target){
				var moduleEntity = modules.get(moduleName);
				if(moduleEntity === null){
					return false;
				}
				
				moduleEntity[type] = target;
			}
            
        };
    })();
    
    
    
    
    /**
     * @see HistoryManager._histFrame
     */
    var HISTFRAME = "hist-frame";
    
    /**
     * default hash  manager
     * @see historyManager.js
     * @type Object
     * @private
     */
    var _historyManager,    /**
     * default moudules manager
     * @type Object
     * @private
     */
    _modulesManager,    /**
     * Flag used to tell whether Less.init has been called.
     *
     * @property _initialized
     * @type boolean
     * @default false
     * @private
     */
    _initialized, _initialize = function(args, less){
        args = args || {};
        
        //get script loader		
        if (typeof req == "undefined") {
            _initialized = false;
            throw new Error("load scriptloader failure");
        }
        
        //get modules
        _modulesManager = args.modulesManager;
        
        args.onFinish = function(){
        
            _t = this;
            //get history manager 
            _historyManager = args.historyManager;
            
            _historyManager.init({
                onStateChange: _t.sniff,
                histFrame: args.histFrame || HISTFRAME
            });
            
           
            var hash = _getHash() || args.defaultModule;
            _historyManager.go(_modulesManager.getStateName(hash));
            if (args.onInit) {
                args.onInit.call(less);
            }
            
            _initialized = true;
        };
        
        _modulesManager.init(args);
        
        
    },    
	
    
	/**
	 * use jquery ajax connection manager as content loader
	 */
	jqueryLoader = {
		asyncRequest : function(method , url ,callback){
			$.ajax({		
				 url: url,
				 success : callback.success
			});
		},
		parseResponse : function(res){
			var _t = this;
			$("#" + _t.container).html(res);
		}
	},
	
	/**
     * some default setting for less
     *
     * @property _defaultArgs
     * @type Object
     * @private
     */
    _defaultArgs = {
        contentLoader: jqueryLoader,
        historyManager: HistoryManager,
        modulesManager: ModulesManager,
        histFrame: HISTFRAME
    };
    
    this.contentLoader = ContentLoader;
    
    return {
        /**
         * Finish up the initialization of 'Less'.
         *
         * @method init
         * @private
         */
        init: function(args){
            //less hash already been initialized
            if (_initialized) {
                return;
            }
            if (args.contentLoader) {
                var cl = new ContentLoader();
                cl = merge(cl, args.contentLoader);
                args.contentLoader = cl;
            }
            
            if (args.loadscript) {
                req = args.loadscript;
            }
            
            args = merge(_defaultArgs, args);
            _initialize(args, this);
            
            this.args = args;
            
            return this;
        },
        getState: function(){	
            return _historyManager.getState();
        },
        go: function(state){
            _historyManager.go(_modulesManager.getStateName(state));
			return this;
        },
        add: function(name, entity){
            _modulesManager.addModule(name, entity);
            return this;
        },
		onModuleLoad : function(moduleName , onload){
			_modulesManager.modifyModule(moduleName ,"onLoad", onload);
			return this;
		},
		GC : function(module , callback){
			_modulesManager.modifyModule(module , "garbageCollection" , callback);
		},
		require : function(scripts , callback){
			req(scripts,callback || function(){});
			return this;
		}
    };
    
})();

