var DealPlyEdenPersistencyHttpCookiesCls;

var DealPlyEdenPersistencyHttpCookies;

if(typeof DealPlyEdenPersistencyHttpCookiesCls === "undefined") {
	
	var DealPlyEdenPersistencyHttpCookiesCls = function() {};

	var DealPlyEdenPersistencyHttpCookies = new DealPlyEdenPersistencyHttpCookiesCls();
	
	DealPlyEdenPersistencyHttpCookies.USER_INDUCTION_FIRST_ENCOUNTER = "";
	
	DealPlyEdenPersistencyHttpCookies.USER_INDUCTION_COOKIE_CHECK_REQUIRED = "cookie-ping";
	
	DealPlyEdenPersistencyHttpCookies.USER_INDUCTION_COOKIE_CHECK_PROVEN_SYNC_REQUIRED = "cookie-pong";
	
	DealPlyEdenPersistencyHttpCookies.USER_INDUCTION_POST_CHECKS = "post-checks";
	
	DealPlyEdenPersistencyHttpCookies.USER_INDUCTION_USER_AUTHORIZATION_REQUIRED = "opt-screen";
	
	DealPlyEdenPersistencyHttpCookies.USER_INDUCTION_DISPLAY_OFFERS = "display-offers";
	
	DealPlyEdenPersistencyHttpCookies.SUSPEND_PERIOD_1_HOUR = 3600000;
	
	DealPlyEdenPersistencyHttpCookies.SUSPEND_PERIOD_1_DAY = 86400000;
	
	DealPlyEdenPersistencyHttpCookies.SUSPEND_PERIOD_1_WEEK = 604800000;
	
	DealPlyEdenPersistencyHttpCookies.SUSPEND_PERIOD_FOREVER = 60480000000;
	
	//Start of Cookie Plugin
	dpQuery.cookie = function (key, value, options) {
	
	    // key and at least value given, set cookie...
	    if (arguments.length > 1 && String(value) !== "[object Object]") {
	        options = dpQuery.extend({}, options);
	
	        if (value === null || value === undefined) {
	            options.expires = -1;
	        }
	
	        if (typeof options.expires === 'number') {
	            var days = options.expires, t = options.expires = new Date();
	            t.setDate(t.getDate() + days);
	        }
	
	        value = String(value);
	
	        return (document.cookie = [
	            encodeURIComponent(key), '=',
	            options.raw ? value : encodeURIComponent(value),
	            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
	            options.path ? '; path=' + options.path : '',
	            options.domain ? '; domain=' + options.domain : '',
	            options.secure ? '; secure' : ''
	        ].join(''));
	    }
	
	    // key and possibly options given, get cookie...
	    options = value || {};
	    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
	    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.setCookie = function(dealplyKey, dealplyVal) {
		/*var dpQueryCookieData = {
				expires : new Date(new Date().getTime() + 473040000000),
				path : "/"
		};
		if (typeof dpVariables.cookieDomainName !== undefined && dpVariables.cookieDomainName !== null && dpVariables.cookieDomainName.trim() !== ''){
			dpQueryCookieData.domain = dpVariables.cookieDomainName;
		}
		dpQuery.cookie(dealplyKey, dealplyVal, dpQueryCookieData);*/
		var url = null;
		if(typeof DealPlyOpDom === "undefined") {
			url = '//servedby.dealply.com/dealdo/setcck?key0='+encodeURIComponent(dealplyKey)+'&value0='+encodeURIComponent(dealplyVal);
		} else {
			url = '//' + DealPlyOpDom.getServedbyDomain() + '/dealdo/setcck?key0='+encodeURIComponent(dealplyKey)+'&value0='+encodeURIComponent(dealplyVal);
		}
		
		var sendCommandStr = "dpQuery.ajax({type: 'GET',url:'"+url+"',crossDomain: true,	dataType : 'jsonp',headers : {'Access-Control-Allow-Origin' : '*'}});";
		DealPlyInteropInner.sendCommand(sendCommandStr);
	};
		
	DealPlyEdenPersistencyHttpCookiesCls.prototype.deleteCookie = function(dealplyKey, dealplyVal) {
		var dpQueryCookieData = {
				expires : new Date(new Date().getTime() - 60480000000),
				path : "/"
		};
		if (typeof dpVariables.cookieDomainName !== undefined && dpVariables.cookieDomainName !== null && dpVariables.cookieDomainName.trim() !== ''){
			dpQueryCookieData.domain = dpVariables.cookieDomainName;
		}
		dpQuery.cookie(dealplyKey, dealplyVal, dpQueryCookieData);
	};
		
	DealPlyEdenPersistencyHttpCookiesCls.prototype.getCookie = function(dealplyKey) {
		return dpQuery.cookie(dealplyKey);
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.isSuspendedAccordingToHttpCookie = function() {
		try{
			var instance = new DealPlyEdenPersistencyHttpCookiesCls();
			
			var on1 = instance.getCookie("__dealply_on");
			
			if (on1 === 'no') {
				var maxSuspensionTime = instance.getCookie("__dealply_suspend_time__");
				if (isNaN(maxSuspensionTime) || Number(maxSuspensionTime) == 0){
					return true;
				}
				var currentDate = Number(new Date());
				if (currentDate > Number(maxSuspensionTime)){
					instance.setCookie("__dealply_on","yes");
					return false;
				}
				return true;
			}else{
				return false;
			}	
		}catch(e){
			
		}
		
		// if fails to check return suspended.
		return true; 
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.suspendAccordingToHttpCookie = function(duration, suspendedFromUi) {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var time = Number(new Date().getTime()) + Number(duration);
		
		var dealply_suspend_time = instance.setCookie("__dealply_suspend_time__", time);
		var dealply_on = instance.setCookie("__dealply_on", "no");
		
		var suspended_forever_at = instance.setCookie("suspended_forever_at", "" + new Date().getTime());
		var suspended_forever_ui = instance.setCookie("suspended_forever_ui", "" + suspendedFromUi);
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.suspendForeverAccordingToHttpCookie = function(suspendedFromUi) {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var time = Number(new Date().getTime()) + Number(DealPlyEdenPersistencyHttpCookies.SUSPEND_PERIOD_FOREVER);
		
		var dealply_suspend_time = instance.setCookie("__dealply_suspend_time__", time);
		var dealply_on = instance.setCookie("__dealply_on", "no");
		
		var suspended_forever_at = instance.setCookie("suspended_forever_at", "" + new Date().getTime());
		var suspended_forever_ui = instance.setCookie("suspended_forever_ui", "" + suspendedFromUi);
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.isHttpCookiesSupported = function(duration) {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var pingVal = instance.getCookie("induction", null);
		
		if(pingVal !== null) {
			return true;
		}
		
		return false;
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.alertIsHttpCookiesSupported = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var isSupported = instance.isHttpCookiesSupported();
		
		alert("is HTTP cookies supported? " + isSupported);
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.alertHttpCookies = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		var s = instance.getHttpCookiesDumpAsString();
		
		alert(s);
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.getHttpCookiesDumpAsString = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var induction = instance.getCookie("induction");
		
		var dealply_suspend_time = instance.getCookie("__dealply_suspend_time__");
		var dealply_on = instance.getCookie("__dealply_on");

		var partner = instance.getCookie("partner");
		var channel = instance.getCookie("channel");
		
		var suspended_forever_at = instance.getCookie("suspended_forever_at");
		var suspended_forever_ui = instance.getCookie("suspended_forever_ui");
		
		var DealPlyPersistentId = instance.getPersistentIdAccordingToHttpCookies();
		

		var s = "";
		s += "C induction: " + induction + "\n";
		s += "C __dealply_suspend_time__: " + dealply_suspend_time + "\n";
		s += "C __dealply_on: " + dealply_on + "\n";

		s += "C partner: " + partner + "\n";
		s += "C channel: " + channel + "\n";

		s += "C suspended_forever_at: " + suspended_forever_at + "\n";
		s += "C suspended_forever_ui: " + suspended_forever_ui + "\n";
		s += "C DealPlyPersistentId: " + DealPlyPersistentId + "\n";
				
		return s;
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.deleteExistingHttpCookies = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		instance.deleteCookie("induction");
		instance.deleteCookie("__dealply_suspend_time__");
		instance.deleteCookie("__dealply_on");
		instance.deleteCookie("suspended_forever_at");
		instance.deleteCookie("suspended_forever_ui");
		instance.deleteCookie("DealPlyPersistentId");
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.suspendAccordingToHttpCookie = function(duration) {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var time = Number(new Date().getTime()) + Number(duration);
		
		var dealply_suspend_time = instance.setCookie("__dealply_suspend_time__", time);
		var dealply_on = instance.setCookie("__dealply_on", "no");
		
		var suspended_forever_at = instance.setCookie("suspended_forever_at", "" + new Date().getTime());
		var suspended_forever_ui = instance.setCookie("suspended_forever_ui", "persistency_sync");
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.isHttpCookiesSupported = function(duration) {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var pingVal = instance.getCookie("ping", "bad_robot");
		
		if(pingVal === "ok") {
			return true;
		}
		
		return false;
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.alertIsHttpCookiesSupported = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var isSupported = instance.isHttpCookiesSupported();
		
		alert("is HTTP cookies supported? " + isSupported);
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.alertIsSuspendedAccordingToHttpCookie = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var isSuspendedHttpCookie = instance.isSuspendedAccordingToHttpCookie();
		
		alert("Is suspended according to HTTP cookie? "  + isSuspendedHttpCookie);
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.getPersistentIdAccordingToHttpCookies = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var persistentId = instance.getCookie("DealPlyPersistentId", null);
		
		return persistentId;
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.alertPersistentIdAccordingToHttpCookies = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var persistentId = DealPlyEdenPersistencyHttpCookies.getPersistentIdAccordingToHttpCookies();
		
		alert("Persistent ID according to HTTP cookies is: " + persistentId);
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.getRandomGuid = function() {
		dealplyRandId = "";
		var dealplyI = 0;
		for(dealplyI = 0; dealplyI < 18; dealplyI++) {
			dealplyRandDigit = Math.floor(Math.random() * 10);
			
			dealplyRandId = dealplyRandId + dealplyRandDigit;
		}
		
		return dealplyRandId;
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.assignPersistentIdIfNecessary = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var persistentId = instance.getPersistentIdAccordingToHttpCookies();
		
		if(typeof persistentId === "undefined" || persistentId === null || persistentId === false || persistentId === "null" || persistentId === "false" || persistentId === "" || persistentId.length < 6) {
			persistentId = DealPlyEdenPersistencyHttpCookies.getRandomGuid();
			
			instance.setCookie("DealPlyPersistentId", persistentId);
			
			var newPersistentId = instance.getCookie("DealPlyPersistentId", null);
			
			if(typeof newPersistentId === "undefined" || newPersistentId === null || newPersistentId === false || newPersistentId === "null" || newPersistentId === "false") {
				return false;
			}
			
			return true;
		}
		
		return false;
	};

	DealPlyEdenPersistencyHttpCookiesCls.prototype.handleUserOptScreenAgree = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var inductionVal = DealPlyEdenPersistencyHttpCookies.getCookie("induction");
		
		if(typeof inductionVal === "undefined" || inductionVal === null || inductionVal === false || inductionVal === "null" || inductionVal === "false") {
			inductionVal = "";
		}
		
		if(inductionVal === DealPlyEdenPersistencyHttpCookies.USER_INDUCTION_USER_AUTHORIZATION_REQUIRED) {
			DealPlyEdenPersistencyHttpCookies.setCookie("induction", DealPlyEdenPersistencyHttpCookies.USER_INDUCTION_DISPLAY_OFFERS);
			return;
		}

		return false;
	};
	
	DealPlyEdenPersistencyHttpCookiesCls.prototype.handleUserOptScreenDisagree = function() {
		var instance = new DealPlyEdenPersistencyHttpCookiesCls();
		
		var inductionVal = DealPlyEdenPersistencyHttpCookies.getCookie("induction");
		
		if(typeof inductionVal === "undefined" || inductionVal === null || inductionVal === false || inductionVal === "null" || inductionVal === "false") {
			inductionVal = "";
		}
		
		if(inductionVal === DealPlyEdenPersistencyHttpCookies.USER_INDUCTION_USER_AUTHORIZATION_REQUIRED) {
			DealPlyEdenPersistencyHttpCookies.suspendAccordingToHttpCookie(DealPlyEdenPersistencyHttpCookies.SUSPEND_PERIOD_FOREVER, "opt_screen");
			return;
		}

		return false;
	};	
}
