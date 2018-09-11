function et_escape(param)
{
	return encodeURIComponent(param);
}

function et_unescape(param)
{
	return decodeURIComponent(param);
}

// ================================= TP-26715 ======
// Remove this code block after some days after release of TP-26715.
// This is needed if e.js is asynchronous with the t.js (because of caching) and the t.js uses some functions
// that are only in the new version of e.js.
var et_disableTrackingTemporary = function(remove)
{
	if (typeof(sessionStorage) !== 'undefined')
	{
		try
		{
			if (remove)
			{
				sessionStorage.removeItem('et_tmp_oi_v2');
			}
			else
			{
				sessionStorage.setItem('et_tmp_oi_v2', 'no');
			}
		}
		catch(e) {}
	}
};

var et_checkOptInCookie = function()
{
	var optInCookieValue = et_getOptInCookieValue();
	if (optInCookieValue && (optInCookieValue === 'yes' || optInCookieValue === 'no'))
	{
		return optInCookieValue === 'yes';
	}

	if(et_OptInType & 1)
	{
		if(et_OptInType == 1)
		{
			et_showOptIn();
		}
		return false;
	}

	// respect "old"-disagreement if there is no new cookie
	return et_getOptInCookieValue('et_oi') !== 'no';
};
// ==================================


// ================================= TP-26716 ======
// Remove when TP-26716 is released
if(typeof(window._etracker.disableTrackingForSession) !== 'function')
{
	window._etracker.disableTrackingForSession = et_disableTrackingTemporary;
}	
if(typeof(window._etracker.isOptInDialogExpected) !== 'function')
{
	window._etracker.isOptInDialogExpected = function()
	{
		return !et_getOptInCookieValue();
	};
}	

var et_easy = 1;
var et_wa_active = 1;
var et_wa_tracking = 1;

function et_eC(param)
{
		et_secureId = param;

	et_imageSrc = et_server + '/' + et_cntScript + '?'+et_parameter() + et_addFpcParams();
	et_imageSrc = et_imageSrc.substr(0, et_maxUrlLength);

	if(et_first && !(false || true || et_optInActive) && !document.getElementById('et_image'))
	{
		document.write('<p id="et_image" style="display:none;"></p>');
	}

	et_createScriptTag(et_imageSrc);
}

function et_createCntImage(imgSrc, href)
{
	if(et_first)
	{
		et_first = false;

		var et_anchor = document.createElement('a');
		et_anchor.href = href;
		et_anchor.target = '_blank';
		et_anchor.innerHTML = '<img style="border:0px;" alt="" src="'+imgSrc+'">';

		et_appendCntImage(et_anchor);
	}
	else
	{
		var et_image=new Image();
		et_image.src = et_imageSrc;
	}
}
        var arrOfLinksToPrepare = [
    {
        "name": "Twitter",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*twitter\\.com"
    },
    {
        "name": "Xing",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*xing\\.com"
    },
    {
        "name": "LinkedIn",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*linkedin\\.com"
    },
    {
        "name": "YouTube",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*youtube\\.com"
    },
    {
        "name": "Facebook",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*de-de\\.facebook\\.com"
    },
    {
        "name": "Instagram",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*instagram\\.com"
    },
    {
        "name": "Pinterest",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*de\\.pinterest\\.com"
    },
    {
        "name": "Tumblr",
        "type": "et_LinkEvent",
        "pattern": "^(https?:)?(\/\/)?[^\/]*tumblr\\.com"
    },
    {
        "name": "pdf",
        "type": "et_DownloadEvent",
        "pattern": "\\.pdf$"
    }
];

function _et_vm_ct()
{
	
	return true;
}
(function () {var et_sso_server='https'+'://'+'ws.etracker.com';var et_application_server='https'+'://'+'newapp.etracker.com';
_etracker.EtDashboardOverlay=EtDashboardOverlay;_etracker.EtDashboardLocationWatcher=EtDashboardLocationWatcher;
var EtDashboardErrors=(function(){'use strict';var ET_DASHBOARD_PREFIX='etracker Dashboard Overlay:';var showError=function(msg){return ET_DASHBOARD_PREFIX+msg;};return{none:'',invalidUsernameOrPassword:showError('username or password incorrect'),invalidDeveloperTokenOrEmail:showError('developer token or email address incorrect'),authenticationTimeout:showError('a timeout occurred during authentication'),notAValidEtrackerUrl:showError('the retrieved url is not a valid etracker dashboard url'),invalidPosition:showError('invalid number for top or left given'),instanceHasBeenDestroyed:showError('this instance has been destroyed')};})();
function XhrPromise(xhr){'use strict';var xhrPromise=this;xhrPromise.then=_addCallbackTo('onload');xhrPromise.catchError=_addCallbackTo('onerror');xhrPromise.catchTimeout=_addCallbackTo('ontimeout');function _addCallbackTo(event){return function _then(callback){var currentCallback=xhr[event];xhr[event]=function(){if(typeof  currentCallback==='function'){currentCallback(xhr.responseText);}callback(xhr.responseText);};return xhrPromise;};}}
function EtDashboardLocationChecker(){'use strict';var ET_DASHBOARD_PATTERN=new RegExp('[?&#]et_db_overlay=('+_serverToRegExp(et_application_server)+'%2F%23%2F[^&#]+)');this.isDashboardRequest=isDashboardRequest;this.getDashboardUrl=getDashboardUrl;function isDashboardRequest(location){location=location||'';var matches=location.match(ET_DASHBOARD_PATTERN);return !!matches&&matches.length===2;}function getDashboardUrl(location){var matches=location.match(ET_DASHBOARD_PATTERN);return decodeURIComponent(matches[1]);}function _serverToRegExp(serverName){var ret=serverName||'';ret=encodeURIComponent(ret);ret=ret.replace(/\./g,'\\.');return ret;}}
function EtDashboardElement(document,url,top,left){'use strict';var etDashboardElement=this;var UNDEF;var ET_URL_PATTERN=new RegExp(et_application_server+'\\/#\\/.*');var OVERLAY_STYLES={position:'absolute',width:'600px',height:'750px','z-index':'99999','background-color':'#666',border:'1px solid #333','box-shadow':'5px 5px 5px #333','border-top-left-radius':'25px','border-top-right-radius':'25px','box-sizing':'border-box'};var IFRAME_STYLES={width:'100%',height:'725px',border:'none','box-sizing':'border-box'};var CLOSE_BUTTON_STYLES={width:'25px',height:'25px','margin-right':'7px',float:'right',transform:'rotate(45deg)','font-family':'Arial,Helvetica,sans-serif','font-weight':'100','font-size':'25px','text-align':'center',color:'#333',cursor:'pointer'};var _dashboardElement,_etrackerUrl,_isDestroyed=false;etDashboardElement.getUrl=getUrl;etDashboardElement.setUrl=setUrl;etDashboardElement.addCloseListener=addCloseListener;etDashboardElement.destroy=destroy;_initialize(document,url,top,left);function setUrl(url){if(_isDestroyed){throw  EtDashboardErrors.instanceHasBeenDestroyed;}if(!_isEtrackerUrl(url)){throw EtDashboardErrors.notAValidEtrackerUrl;}var iframe=_dashboardElement.getElementsByTagName('IFRAME')[0];if(iframe){iframe.setAttribute('src',url);_etrackerUrl=url;}}function getUrl(){if(_isDestroyed){throw  EtDashboardErrors.instanceHasBeenDestroyed;}return _etrackerUrl;}function destroy(){_etrackerUrl=UNDEF;if(_dashboardElement){_dashboardElement.remove();}_isDestroyed=true;}function addCloseListener(callback){if(_dashboardElement&&_dashboardElement.addEventListener){_dashboardElement.addEventListener('close',callback);}}function _initialize(document,url,top,left){if(!_isEtrackerUrl(url)){throw EtDashboardErrors.notAValidEtrackerUrl;}if(typeof top!=='number'||typeof left!=='number'){throw EtDashboardErrors.invalidPosition;}var overlay=document.createElement('div');overlay.setAttribute('id','et_db_overlay');overlay.style['top']=top+'px';overlay.style['left']=left+'px';overlay=_addCloseButton(overlay);overlay=_addIFrame(overlay,url);overlay=_applyStyles(overlay,OVERLAY_STYLES);document.body.appendChild(overlay);_dashboardElement=overlay;addCloseListener(destroy);_etrackerUrl=url;}function _isEtrackerUrl(url){url=url||'';var matches=url.match(ET_URL_PATTERN);return !!matches&&matches.length===1;}function _addCloseButton(overlay){var closeButton=document.createElement('div');closeButton.innerHTML='+';closeButton=_applyStyles(closeButton,CLOSE_BUTTON_STYLES);closeButton.mouseenter=function(){closeButton.style.color='black';};closeButton.mouseleave=function(){closeButton.style.color='#333';};closeButton.onclick=function(){var event=document.createEvent('Event');event.initEvent('close',true,true);_dashboardElement.dispatchEvent(event);};overlay.appendChild(closeButton);return overlay;}function _addIFrame(overlay,url){var iFrame=document.createElement('iframe');iFrame.setAttribute('src',url);iFrame=_applyStyles(iFrame,IFRAME_STYLES);overlay.appendChild(iFrame);return overlay;}function _applyStyles(element,styles){for(var styleName in styles){if(styles.hasOwnProperty(styleName)){element.style[styleName]=styles[styleName];}}return element;}}
function EtDashboardOverlay(window,document,configuration){'use strict';var etDashboardOverlay=this;var STATES={error:'error',loading:'loading',ready:'ready'};var _state=STATES.loading;var _error=EtDashboardErrors.none;var _closeListeners=[];var _etDashboardElement,_pagename;var _top=_setTop(configuration.top);var _left=_setLeft(configuration.left);etDashboardOverlay.setPagename=setPagename;etDashboardOverlay.getState=getState;etDashboardOverlay.getErrorReason=getErrorReason;etDashboardOverlay.addCloseListener=addCloseListener;_setTop(configuration);_setLeft(configuration);setPagename(configuration);_initialize(configuration);function setPagename(pagenameOrConfig){var tmpPagename=pagenameOrConfig||et_pagename;if(typeof tmpPagename==='object'){tmpPagename=tmpPagename.pagename||et_pagename;}_pagename=tmpPagename;if(_etDashboardElement){var currentUrl=_etDashboardElement.getUrl();var newUrl=currentUrl.replace(/#\/.*/,'#/dashboard/'+encodeURIComponent(_pagename));try{_etDashboardElement.setUrl(newUrl);}catch(error){_state=STATES.error;_error=error;}}}function getState(){return _state;}function getErrorReason(){return _error;}function addCloseListener(callback){_closeListeners.push(callback);}function _setTop(top){var ret;if(typeof top==='string'){top=parseInt(top);}if(typeof top!=='number'||isNaN(top)){ret=window.innerHeight-40-750;ret=ret > 0 ? ret:0;}else{ret=top;}return ret;}function _setLeft(left){var ret;if(typeof left==='string'){left=parseInt(left);}if(typeof left!=='number'||isNaN(left)){ret=window.innerWidth-40-600;ret=ret > 0 ? ret:0;}else{ret=left;}return ret;}function _initialize(configuration){if(!_isSet(configuration.developerToken)||!_isSet(configuration.email)){_state=STATES.error;_error=EtDashboardErrors.invalidDeveloperTokenOrEmail;return;}if(!_isValidUsername(configuration.username)||!_isSet(configuration.password)){_state=STATES.error;_error=EtDashboardErrors.invalidUsernameOrPassword;return;}_authenticateUser(configuration,_pagename).then(_showDashboard).catchError(_handleAuthenticationFailure).catchTimeout(_handleAuthenticationTimeout);}function _isValidUsername(username){return/^\d{3,6}(-\d{1-2})?/.test(username);}function _isSet(value){return !!value&&value!=='';}function _authenticateUser(configuration,pagename){var xhr=new XMLHttpRequest();xhr.open('POST',_getSSOUrl());xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');var parameters='username='+configuration.username;parameters+='&password='+configuration.password;parameters+='&developerToken='+configuration.developerToken;parameters+='&email='+configuration.email;parameters+='&targetUrl=dashboard/'+encodeURIComponent(pagename);xhr.send(parameters);return new XhrPromise(xhr);}function _showDashboard(response){_state=STATES.ready;try{_etDashboardElement=new EtDashboardElement(document,response,_top,_left);_etDashboardElement.addCloseListener(_onClose);}catch(error){_state=STATES.error;_error=EtDashboardErrors.notAValidEtrackerUrl;}}function _handleAuthenticationFailure(){_state=STATES.error;_error=EtDashboardErrors.invalidUsernameOrPassword;}function _handleAuthenticationTimeout(){_state=STATES.error;_error=EtDashboardErrors.authenticationTimeout;}function _getSSOUrl(){return et_sso_server+'/api/rest/v3/account/login/challenge';}function _onClose(){_closeListeners.forEach(function(callback){if(typeof callback==='function'){callback();}});}}
function EtDashboardLocationWatcher(window,document,top,left){'use strict';var UPDATE_INTERVAL=500;var etDashboardLocationWatcher=this;var _etDashboardLocationChecker=new EtDashboardLocationChecker();var _etDashboardElement=false;var _previousLocation;var _closeListeners=[];etDashboardLocationWatcher.isDOMReady=isDOMReady;etDashboardLocationWatcher.destroy=destroy;etDashboardLocationWatcher.addCloseListener=addCloseListener;var _top=_setTop(top);var _left=_setLeft(left);var _interval=setInterval(_checkUrlAndUpdate,UPDATE_INTERVAL);function isDOMReady(){return document.readyState==='complete'||document.readyState==='loaded'||document.readyState==='interactive';}function destroy(){if(_etDashboardElement){_etDashboardElement.destroy();_etDashboardElement=false;}clearInterval(_interval);}function addCloseListener(callback){_closeListeners.push(callback);}function _checkUrlAndUpdate(){var currentLocation=window.location.href;if(etDashboardLocationWatcher.isDOMReady()&&currentLocation!==_previousLocation){_updateDashboardOverlay(currentLocation);_previousLocation=currentLocation;}}function _setTop(top){var ret;if(typeof top!=='number'){ret=window.innerHeight-40-750;ret=ret > 0 ? ret:0;}else{ret=top;}return ret;}function _setLeft(left){var ret;if(typeof left!=='number'){ret=window.innerWidth-40-600;ret=ret > 0 ? ret:0;}else{ret=left;}return ret;}function _updateDashboardOverlay(location){var url;if(!_etDashboardElement&&!_etDashboardLocationChecker.isDashboardRequest(location)){}else if(_etDashboardElement&&!_etDashboardLocationChecker.isDashboardRequest(location)){_etDashboardElement.destroy();_etDashboardElement=false;}else if(!_etDashboardElement&&_etDashboardLocationChecker.isDashboardRequest(location)){url=_etDashboardLocationChecker.getDashboardUrl(location);_etDashboardElement=new EtDashboardElement(document,url,_top,_left);_etDashboardElement.addCloseListener(_onClose);}else if(_etDashboardElement&&_etDashboardLocationChecker.isDashboardRequest(location)){url=_etDashboardLocationChecker.getDashboardUrl(location);_etDashboardElement.setUrl(url);}}function _onClose(){_closeListeners.forEach(function(callback){if(typeof callback==='function'){callback();}});}}
})();
(function () {'use strict';window.et_ScrollDepthUtils={getPageName:function(){return window.cc_pagename||window.et_pagename||document.title||document.location.href.split('?')[0];},isInIframe:function(){try{return window.self!==window.top;}catch(e){return true;}}};
'use strict';function ScrollPositionsContainer(timestamp){var _this=this;_this.buckets=_createNewBuckets();_this.tm=timestamp;_this.bucketChangeEvent=undefined;_this.lastBuckets=[];ScrollPositionsContainer.prototype.getPositions=function(){return _this.buckets;};ScrollPositionsContainer.prototype.reset=function(){_this.buckets=_createNewBuckets();};ScrollPositionsContainer.prototype.addStayTime=function(positionFrom,positionTo,timeMs){if(positionFrom < 0||positionTo < 0){return;}_this.tm=new Date().getTime();positionFrom=Math.floor(positionFrom);positionTo=Math.floor(positionTo);if(positionFrom > positionTo){var originalTo=positionTo;positionTo=positionFrom;positionFrom=originalTo;}var currentBuckets=[];for(var key in _this.buckets){if(positionFrom <=_this.buckets[key].to&&positionTo >=_this.buckets[key].from){_this.buckets[key].stayTime+=timeMs;currentBuckets.push(key);}}if(_bucketsChanged(currentBuckets,_this.lastBuckets)&&typeof _this.bucketChangeEvent==='function'){_this.bucketChangeEvent();}_this.lastBuckets=currentBuckets;};function _bucketsChanged(arr1,arr2){if(arr1.length===0||arr2.length===0){return false;}if(arr1.length!==arr2.length){return true;}for(var i=0;i < arr1.length;i++){if(arr1[i]!==arr2[i]){return true;}}return false;}ScrollPositionsContainer.prototype.subscribeToBucketChange=function(callback){_this.bucketChangeEvent=callback;};function _createNewBuckets(){var buckets={0:{stayTime:0},10:{stayTime:0},25:{stayTime:0},50:{stayTime:0},75:{stayTime:0},101:{stayTime:0}};var previousKey=0;for(var key in buckets){key=parseInt(key);buckets[previousKey].to=key-1;buckets[key].from=key;buckets[key].to=1000000;previousKey=key;}return buckets;}}
'use strict';var et_ScrollDepthEvent=function(eventObject,pageName){if(!(this instanceof et_ScrollDepthEvent)){return new et_ScrollDepthEvent(eventObject,pageName);}this.name='scrollDepth';this.pagename=pageName;this.version=1;this.eventData={'object':eventObject};};et_ScrollDepthEvent.prototype=new et_GenericEvent();et_ScrollDepthEvent.prototype.constructor=et_ScrollDepthEvent;et_ScrollDepthEvent.prototype.getEvent=function(){var originalObject=et_GenericEvent.prototype.getEvent.call(this)[0];originalObject[this.name]['pagename']=this.pagename;return[originalObject];};function ScrollDepthTracker(currentTm){var _this=this;_this.REFRESH_TIME_MS=1000;_this.STORAGE_KEY='et_scroll_depth';_this.STORAGE_MAX_AGE_MS=1*60*60*1000;_this.THROTTLING_TIME=5000;_this.STORAGE=localStorage;_this.lastUpdateTm=currentTm;_this.lastFlushedTm=undefined;_this.siteHeight=1;_this.scrollPositions=new ScrollPositionsContainer(currentTm);_this.startTracking=startTracking;_this.getScrollPositions=getScrollPositions;_this.getPageName=getPageName;_this.save=save;_this.load=load;_this.reset=reset;_this.sendStoredBuckets=sendStoredBuckets;function startTracking(){_this.scrollPositions.subscribeToBucketChange(_onScrollingBucketChange);var body=document.body;var html=document.documentElement||document.body;_this.siteHeight=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);_this.load();et_addEvent(window,'scroll',_updateScrollPositions);setInterval(_updateScrollPositions,_this.REFRESH_TIME_MS);setInterval(save,_this.REFRESH_TIME_MS);}function _onScrollingBucketChange(){var nowTm=new Date().getTime();if(!_this.lastFlushedTm||nowTm-_this.lastFlushedTm >=_this.THROTTLING_TIME){_sendScrollDepthEventEvent();_this.lastFlushedTm=nowTm;}}function sendStoredBuckets(){_deleteExpiredEntries();var storedJson=_readJsonFromStorage();for(var key in storedJson){var bucketsToSend=_createBucketsArrayToSend(storedJson[key].buckets);_sendScrollDepthEventEvent(key,bucketsToSend);}_this.STORAGE.clear();}function _sendScrollDepthEventEvent(pageName,buckets){if(!_etracker.isTrackingEnabled()){return;}pageName=pageName||getPageName();if(!buckets){buckets=_createBucketsArrayToSend(_this.scrollPositions.buckets);}_etracker.sendEvent(et_ScrollDepthEvent(encodeURIComponent(JSON.stringify(buckets)),pageName));_this.reset();}function _createBucketsArrayToSend(bucketsObj){var buckets=[];for(var bucketKey in bucketsObj){buckets.push({from:bucketsObj[bucketKey].from,to:bucketsObj[bucketKey].to,stayTime:bucketsObj[bucketKey].stayTime});}return buckets;}function reset(){_this.scrollPositions.reset();_this.save();}function _updateScrollPositions(){var currentPositions=_this.getScrollPositions();var newTm=new Date().getTime();var stayTime=newTm-_this.lastUpdateTm;_this.scrollPositions.addStayTime(currentPositions.from,currentPositions.to,stayTime);_this.lastUpdateTm=newTm;}function getPageName(){return window.et_ScrollDepthUtils.getPageName();}function save(){var pageName=_this.getPageName();if(pageName===undefined||!_this.scrollPositions||!_this.STORAGE){return;}_this.scrollPositions.tm=new Date().getTime();var storedJson=_readJsonFromStorage();storedJson[pageName]=_this.scrollPositions;_this.STORAGE.setItem(_this.STORAGE_KEY,JSON.stringify(storedJson));}function _deleteExpiredEntries(){var storedJson=_readJsonFromStorage();var now=new Date().getTime();for(var key in storedJson){if(now-storedJson[key].tm > _this.STORAGE_MAX_AGE_MS){delete storedJson[key];}}_this.STORAGE.setItem(_this.STORAGE_KEY,JSON.stringify(storedJson));}function load(){if(!_this.STORAGE){return;}_deleteExpiredEntries();var storedContent=_readJsonFromStorage();var pageName=_this.getPageName();if(storedContent[pageName]&&storedContent[pageName].buckets){var storedContentForPage=storedContent[pageName];if(storedContentForPage.buckets){for(var key in storedContentForPage.buckets){if(_this.scrollPositions.buckets[key]!==undefined){_this.scrollPositions.buckets[key].stayTime=storedContentForPage.buckets[key].stayTime;}}}}}function _readJsonFromStorage(){if(!_this.STORAGE){return{};}var storedContent=_this.STORAGE.getItem(_this.STORAGE_KEY);if(!storedContent){return{};}try{return JSON.parse(storedContent);}catch(e){return{};}}function getScrollPositions(){var scrollX=0,scrollY=0;if(typeof(window.pageYOffset)==='number'){scrollY=window.pageYOffset;scrollX=window.pageXOffset;}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){scrollY=document.body.scrollTop;scrollX=document.body.scrollLeft;}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){scrollY=document.documentElement.scrollTop;scrollX=document.documentElement.scrollLeft;}return{from:scrollY/_this.siteHeight*100,to:(scrollY+_getViewportSize()['height'])/_this.siteHeight*100};}/***Gets the viewport size depending of browser capabilities *@returns{{width:*,height:*}}*/function _getViewportSize(){var viewPortWidth;var viewPortHeight;if(typeof window.innerWidth!=='undefined'){viewPortWidth=window.innerWidth;viewPortHeight=window.innerHeight;}else if(typeof document.documentElement!=='undefined'&&typeof document.documentElement.clientWidth!=='undefined'&&document.documentElement.clientWidth!==0){viewPortWidth=document.documentElement.clientWidth;viewPortHeight=document.documentElement.clientHeight;}else{viewPortWidth=document.getElementsByTagName('body')[0].clientWidth;viewPortHeight=document.getElementsByTagName('body')[0].clientHeight;}return{width:viewPortWidth,height:viewPortHeight};}}
'use strict';var SAMPLING_RATE=0.01;var shouldScrollDepthBeActive=false;if(_isCookieSet()){shouldScrollDepthBeActive=_isCookieTrue();}else{shouldScrollDepthBeActive=Math.random()<=SAMPLING_RATE;_setCookie(shouldScrollDepthBeActive);}if(shouldScrollDepthBeActive&&!window.et_ScrollDepthUtils.isInIframe()){var scrollDepth=new ScrollDepthTracker(new Date().getTime());scrollDepth.sendStoredBuckets();_etracker.addOnLoad(scrollDepth.startTracking);}function _isCookieSet(){return !!document.cookie.match(/isSdEnabled=/);}function _isCookieTrue(){return !!document.cookie.match(/isSdEnabled=true/);}function _setCookie(isTrue){document.cookie='isSdEnabled='+isTrue+';expires='+new Date(new Date().getTime()+60*60*1000*24).toGMTString();}
'use strict';(function(){if(window.et_ScrollDepthUtils.isInIframe()){var currentHeight=0;et_addEvent(window,'beforeunload',function(){_sendMessage('page-unloaded');});_etracker.addOnLoad(function(){currentHeight=_getPageHeight();var message={height:currentHeight,};_sendMessage('page-loaded',message);});et_addEvent(window,'resize',function(){var newPageHeight=_getPageHeight();if(newPageHeight!==currentHeight){currentHeight=newPageHeight;var message={height:currentHeight,};_sendMessage('height-changed',message);}});}function _sendMessage(type,payload){var message={type:type,payload:payload,url:window.location.href,pageName:window.et_ScrollDepthUtils.getPageName(),};parent.postMessage(JSON.stringify(message),'*');}function _getPageHeight(){var body=document.body;var html=document.documentElement;return Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);}})();
})();
var et_protocol = window._etracker.getConfigValue('protocol') || '//';

if(typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '')
{
	var et_server = et_protocol + 'www.etracker.de';
	var et_vm_server = et_protocol + 'www.etracker.de/vm';
	var et_vv_server = et_protocol + 'visitorvoice.etracker.com/';
	var et_code_server = et_protocol + 'code.etracker.com';
}
else
{
	var et_server = et_proxy_redirect;
	var et_vm_server = et_proxy_redirect + '/vm';
	var et_vv_server = et_proxy_redirect + '/vv/';
	var et_code_server = et_proxy_redirect;
}

var et_ver = '4.0';
var et_panelLink      = et_server + '/app?et=';
var et_cntScript    = 'cnt_js.php';
var et_secureId     = '0hszzE';
var et_maxUrlLength = 8190;
var et_deliveryHash = "wqIko8o3OT5GG2n63IFqgefrv1N0WZ3M";
var et_pd_etpl, et_pd_i, et_pd_k, et_pd_s,
	et_pd_maxfl	= 15,
	et_pd_maxsh	= 15,
	et_pd_maxqt	= 15,
	et_pd_maxsl = 4,
	et_pd_v		= 1.0,
	et_pd_js	= 0,
	et_pd_ag	= navigator.userAgent.toLowerCase(),
	et_pd_z		= 0,
	et_pd_a		= [30],
	et_pd_eta	= "Adobe Acrobat ",
	et_pd_eti	= " Plug-in",
	et_pd_etm	= "Windows Media Video",
	et_pd_etp	= "PDF.PdfCtrl.",
	et_pd_etq	= "QuickTime",
	et_pd_etr	= "RealPlayer(tm)",
	et_pl	    = "Shockwave",
	et_pd_ud	= "undefined",
	et_blockPlugin  = et_blockPlugin ||false;var et_host		= et_protocol + 'application.etracker.com/';
var et_cntHost	= et_server + '/';
var et_et   	= '0hszzE';
var et_urlParamLink = [];
var et_ibrowse  = 0;
var et_ibrowsev = 99;
var et_safari   = 0;
var et_o		= 0;
var et_ff	   = 0;



var et_location, et_top, et_sendloc;
try
{
	et_location = top.location.search;
	et_sendloc = top.location.search;
	et_top = top.location;
}
catch(e)
{
}
				
if(typeof(et_location) == 'undefined' || typeof(et_sendloc) == 'undefined')
{
	et_location = window.location.search;
    et_sendloc = window.location.search;
    et_top = window.location;
}
function et_spLink( url ) 
{
	if(!url) return '';
	url = url.replace(/#.*/gi, '');
	url = et_removeUrlParamLink(url);
	url = url.replace(/\?.*/gi, '');
	return url; 
}
function et_spPage( url ) 
{
	return et_spLink( url ); 
}

var et_links		= 1;
var et_toppos		= 0;
var et_leftpos	  	= 0;
var et_overlay		= 0;
var et_gauged		= 0;
var et_px			= 0;
var et_py			= 0;
var et_direction	= 1;
var et_blockOverlay = false;
var et_overlayLimit = 100;ET_Event = new etEvent("0hszzE", et_server);
var cc_cntScript    = 'cntcc';
var cc_genericEventPath = '/api/tracking/v5/webEvents';
var cc_optInPath 	= '/api/tracking/v5/optIn';
var cc_cntCookie	= '/cntcookie.php';
var cc_deltaTime 	= 15313736712250-(new Date().getTime()*10);
var cc_codecVersion	= 1;
var cc_apiVersion	= '1.1.2';
var cc_articleDivider = '|';
var cc_itemDivider	= ';';
var cc_active = true;

etVM = new ETVMRecorder('0hszzE', et_vm_server, 0, false);function _etc_start()
{
	var c = "";

	if(!et_blockPlugin)
		et_pd();		et_eC('0hszzE');
		if (typeof _etracker.setFirstPixelSent == 'function')
			_etracker.setFirstPixelSent();
		if (typeof _etracker.doWrapperCalls == 'function')
			_etracker.doWrapperCalls();	if(!et_blockOverlay)
	{
		_etracker.addOnLoad(et_iO);
	}	et_cc('0hszzE');
	etCommerce.etCommerceLoad('0hszzE');
	etCommerce.doPreparedEvents();
        prepareAnchors = new et_prepareAnchorsForEvents(arrOfLinksToPrepare); 
	window.et_vm_init_retries = 0;
	function et_vm_init()
	{
		if(document.body)
		{
			etVM.initRecorder(_et_vm_ct());
		}
		else if(et_vm_init_retries < 100)
		{
			window.setTimeout(et_vm_init, 10);
			++et_vm_init_retries;
		}
	}
	
	et_vm_init();if(c != '') {var x = document.createElement('div');x.innerHTML = c;var et_bodyInterval = window.setInterval(function(){if(document.body) {window.clearInterval(et_bodyInterval);document.body.appendChild(x);}}, 1);}	}

	var et_OptInType = 0;
	var _etc = function() {
		if(et_checkOptInCookie()) {
			_etc_start();
		}
	};

_etracker.setReady();