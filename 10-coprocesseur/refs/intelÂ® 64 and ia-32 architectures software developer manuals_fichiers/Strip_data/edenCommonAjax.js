var DealPlyEdenCommonCls;

var DealPlyEdenCommon;

if (typeof DealPlyEdenCommonCls === "undefined") {
	DealPlyEdenCommonCls = function() {
	};

	DealPlyEdenCommon = new DealPlyEdenCommonCls();

	/*
		convert time offset from UTC to millis and invert since getTimezoneOffset() is negative if local time zone is after UTC, which is counter  intuitive
	*/
	DealPlyEdenCommonCls.prototype.LocalOffsetInMillis = new Date().getTimezoneOffset() * 60 * 1000 * -1;
	
	
	/*
		this function accepts a utc 
	*/
	DealPlyEdenCommonCls.prototype.toLocalTimeInMillis = function(timeSinceEpochInMillis, timezone) {
			if (timezone > 14 || timezone < -12)
				throw "illegal timezone: " + timezone;
				
			var otherOffset = timezone * 60 * 60 * 1000;
			
			return timeSinceEpochInMillis + (this.LocalOffsetInMillis - otherOffset);
	};
	
	DealPlyEdenCommonCls.prototype.reportError = function(dealplyErr) {

	};

	DealPlyEdenCommonCls.prototype.htmlspecialchars = function(dealplyHtml) {
		try {
			return dealplyHtml.replace(/&/g, "&amp;").replace(/</g, "&lt;")
					.replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(
							/'/g, "&#039;");
		} catch (dealplyE) {
			DealPlyEdenCommon.reportError(dealplyE);
			return dealplyHtml;
		}
	};

	DealPlyEdenCommonCls.prototype.openWindowEx = function(dealplyUrl,
			dealplyWindowName) {
		try {
			var dealplyWin = null;

			if (typeof dealplyWindowName === "undefined"
					|| dealplyWindowName === null) {
				dealplyWin = window.open(dealplyUrl);
			} else {
				dealplyWin = window.open(dealplyUrl, dealplyWindowName);
			}
		} catch (dealplyE) {
			DealPlyEdenCommon.reportError(dealplyE);

			try {
				window.open(dealplyUrl);
			} catch (dealplyE2) {

			}
		}
	};

	DealPlyEdenCommonCls.prototype.getJsonObjectAsHttpParameters = function(
			dealplyObj) {
		try {
			var dealplyParams = "";

			for (dealplyProp in dealplyObj) {
				if (!dealplyObj.hasOwnProperty(dealplyProp)) {
					continue;
				}

				if (typeof dealplyObj[dealplyProp] === "undefined") {
					continue;
				}

				var dealplyVal = encodeURIComponent(dealplyObj[dealplyProp]);

				if (dealplyParams.length !== 0) {
					dealplyParams = dealplyParams + "&";
				}

				dealplyParams = dealplyParams + encodeURIComponent(dealplyProp)
						+ "=" + dealplyVal;
			}

			return dealplyParams;
		} catch (dealplyE) {
			DealPlyEdenCommon.reportError(dealplyE);
			return null;
		}
	};
	
		DealPlyEdenCommonCls.prototype.timeQuickEvent = function(roundTripTime) {
			var rdrctParam = isNaN(dpTimes.rdrct) ? '' : ',rdrct='+dpTimes.rdrct;
			var timeParam = encodeURIComponent('start='+dpTimes.start+',js4='+dpTimes.js4+ rdrctParam +',rndtrp='+roundTripTime);
			var eventHandler = document.createElement("img");
			eventHandler.setAttribute("src","http://qck.dpstack.com/dealdo/event-report?type=quick&topic=ajaxtime&scountry="+dpVariables.country+"&domain="+encodeURIComponent(dpVariables.documentHostName)+'&time='+timeParam);
		};

		DealPlyEdenCommonCls.prototype.addCommonEventData = function(dealplyJsonObj) {
		try {
			
			dealplyJsonObj["cb"] = "" + Math.random();

			dealplyJsonObj["localDate"] = "" + new Date().getTime();

			if (typeof dpVariables.ltime !== "undefined") {
				
				var roundTripStart = dpVariables.ltime+"";
				var roundTripEnd = "" + new Date().getTime();

				var roundTripTime = parseInt(roundTripEnd)
						- parseInt(roundTripStart);

				dealplyJsonObj["roundTripTime"] = roundTripTime;
				
				return;
			}
			
		} catch (dealplyE) {
			
			DealPlyEdenCommon.reportError(dealplyE);
			return null;
		}
	};
	
	DealPlyEdenCommonCls.prototype.reportQuick = function(jsonData){
		
		try {
			
			var url = DealPlyEdenCommon.getQuickURL(jsonData);
			
			DealPlyEdenCommon.reportEventUrl(url);
			
			
		} catch (dealplyE) {
			DealPlyEdenCommon.reportError(dealplyE);
		}
	}
	
	DealPlyEdenCommonCls.prototype.getQuickURL = function(jsonData){
		var baseTrackingUrl = "";
		var eventName = "quick"
		baseTrackingUrl = DealPlyOpDom.getQuickDomain();

		var url = "//" + baseTrackingUrl + "/dealdo/event-report?type=quick&sessionid="+dpVariables.sessionid+"&"

		var dealplyParams = DealPlyEdenCommon
				.getJsonObjectAsHttpParameters(jsonData);

		var cb = Math.random();
		
		url += dealplyParams +"&cb="+ cb;
		
		return url;
	}
	
	DealPlyEdenCommonCls.prototype.reportEventEx = function(eventName,
			dealplyJsonObj) {
		try {
			var baseTrackingUrl = "";
			if (eventName === "click") {
				if(typeof DealPlyEdenPersistencyHttpCookies !== "undefined") {
					try {
						DealPlyEdenPersistencyHttpCookies
								.assignPersistentIdIfNecessary();
					} catch (dealplyE7) {
	
					}
				}
				
				baseTrackingUrl = dpVariables.baseTrackingUrlClick;
			} else if (eventName === "impression") {
				if(typeof DealPlyEdenPersistencyHttpCookies !== "undefined") {
					try {
						DealPlyEdenPersistencyHttpCookies
								.assignPersistentIdIfNecessary();
					} catch (dealplyE7) {
	
					}
	
					// Skip impression if currently in Suspend mode - this should
					// never happen due to supression in ShoppingJS
					var isSuspended = DealPlyEdenPersistencyHttpCookies
							.isSuspendedAccordingToHttpCookie();
					if (isSuspended) {
						return;
					}
				}
				
				baseTrackingUrl = dpVariables.baseTrackingUrlImpression;
			} else if (eventName === "access") {
				if(typeof DealPlyEdenPersistencyHttpCookies !== "undefined") {
					try {
						DealPlyEdenPersistencyHttpCookies
								.assignPersistentIdIfNecessary();
					} catch (dealplyE7) {
	
					}
				}
				
				baseTrackingUrl = dpVariables.baseTrackingUrlAccess;
			} else if (eventName === "suspend") {
				baseTrackingUrl = dpVariables.baseTrackingUrlSuspend;
			} else if (eventName === "quick") {
				if(typeof DealPlyEdenPersistencyHttpCookies !== "undefined") {
					try {
						DealPlyEdenPersistencyHttpCookies
								.assignPersistentIdIfNecessary();
					} catch (dealplyE7) {
	
					}
				}
				
				baseTrackingUrl = dpVariables.baseTrackingUrlQuick;
			}

			DealPlyEdenCommon.addCommonEventData(dealplyJsonObj);

			var dealplyParams = DealPlyEdenCommon
					.getJsonObjectAsHttpParameters(dealplyJsonObj);

			var cb = Math.random();

			var url = baseTrackingUrl + "&cb=" + cb + "&" + dealplyParams;

			if(typeof DealPlyEdenPersistencyHttpCookies === "undefined") {
				url = url.replace("%USER_UID%", "99");
			} else {
				url = url.replace("%USER_UID%", DealPlyEdenPersistencyHttpCookies
						.getPersistentIdAccordingToHttpCookies());
			}
			
			DealPlyEdenCommon.reportEventUrl(url);
			
			// timing quick event
			if (eventName === "impression" &&  typeof dealplyJsonObj["roundTripTime"] !== 'undefined') { 
				DealPlyEdenCommon.timeQuickEvent(dealplyJsonObj["roundTripTime"]);
			}
		} catch (dealplyE) {
			DealPlyEdenCommon.reportError(dealplyE);
		}
		
		setTimeout(function(){DealPlyEdenCommon.googleAnalytics(eventName);},1500);
	};
	
	var _gaq;
	
/*	try {
		_gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-21242672-5']);
		_gaq.push(['_trackPageview']);
	} catch(dealplyEee6) {
		
	}	*/
	
	DealPlyEdenCommonCls.prototype.googleAnalytics = function(event ) {
		
		try {
			
		    _gaq.push(['_setAccount', 'UA-21242672-9']);
			var firstUseDate = DealPlyEdenPersistencyHttpCookies.getCookie("firstUseDate");
			if(typeof firstUseDate === "undefined" || firstUseDate === null || firstUseDate === false) {
				firstUseDate = "undef";
			}
			
			if(typeof dealPlyUtils === "undefined"){
				var templateGroup = "Green";
				
			}else{
				var templateGroup = dealPlyUtils.templateGroup;
			
			}
			
			
			var fud_long = new Date(parseInt(firstUseDate));
			var day = fud_long.getDate();
			var month = fud_long.getMonth() + 1; //months are zero based
			var year = fud_long.getFullYear();
			var fud =  day+ "-" + month + "-" + year;
			
/*			var today_long = new Date();
			var today_day = today_long.getDate();
			var today_month = today_long.getMonth() + 1; //months are zero based
			var today_year = today_long.getFullYear();
			var today_fud =  today_day+ "-" + today_month + "-" + today_year;*/
			if (event === "click" )
				_gaq.push(['_trackEvent', "event_"+event+"_"+templateGroup , event, fud]);
			else if (Math.random()*10000 <= 10)
				
				_gaq.push(['_trackEvent', "event_"+event+"_"+templateGroup , event, fud]);
		} catch (ee) {
			
		}
	};
	
	DealPlyEdenCommonCls.prototype.reportEventUrl = function(url) {
		
		try {
			if(url.match(/impression/) == null ){
				
				var dpiframe = document.createElement("iframe");
				dpQuery(dpiframe).attr("width", "1");
				dpQuery(dpiframe).attr("height", "1");
				dpQuery(dpiframe).css("top", "-10000px");
				dpQuery(dpiframe).css("left", "-10000px");
				dpQuery(dpiframe).css("position", "absolute");
				dpQuery(dpiframe).css("visibility", "visible");
				dpQuery("body").append(dpiframe);

				dpQuery(dpiframe).attr("src", url);
			}else{
				if(typeof dpFrameId === 'undefined'){
					var dpFrameId = "."+dpVariables.self
				}
				var cmd = "var dpiframe=document.createElement(\"iframe\");dpQuery(dpiframe).attr(\"width\",\"1\");dpQuery(dpiframe).attr(\"height\",\"1\");dpQuery(dpiframe).css(\"top\",\"-10000px\");dpQuery(dpiframe).css(\"left\",\"-10000px\");dpQuery(dpiframe).css(\"position\",\"absolute\");dpQuery(dpiframe).css(\"visibility\",\"visible\");dpQuery(\"body\").append(dpiframe);dpQuery(dpiframe).attr(\"src\",\""+url+"\");"
				var randStr = ""+ Math.random();
				if(dpFrameId.indexOf("popeye")<0){
					cmd = 'if(typeof dpQuery("'+dpFrameId+'").attr("a'+randStr+'") ==="undefined") { dpQuery("'+dpFrameId+'").attr("a'+randStr+'","1");'+
					' if(typeof DealPly.impinjected === "undefined" || DealPly.impinjected == false  ) {'  + cmd + 'DealPly.impinjected = true;}}';
				}else{
					cmd = 'if(typeof dpQuery("'+dpFrameId+'").attr("a'+randStr+'") ==="undefined") { dpQuery("'+dpFrameId+'").attr("a'+randStr+'","1");'+
					' if(typeof dpQuery("'+dpFrameId+'").attr("ii") != "undefined" && dpQuery("'+dpFrameId+'").attr("ii") != impressionInjected  ) {'  + cmd + 'DealPly.impinjected = true;}}';
				}
				dpVariables.debug = cmd;
				var count = 0;
				var t = setInterval(function(){
					count++;
					DealPlyInteropInner.sendCommand(cmd);
					
					if(count > 40){
						clearInterval(t);
					}
					
				},300);
			
			
			}
			
		} catch (dealplyE) {
			DealPlyEdenCommon.reportError(dealplyE);
		}
	};

	DealPlyEdenCommonCls.prototype.ellipsis = function(s, maxLength) {
		try {
			if (maxLength < 4) {
				return null;
			}

			if (s.length <= maxLength) {
				return s;
			} else {
				return s.substring(0, (maxLength - 3)) + "...";
			}
		} catch (dealplyE) {
			DealPlyEdenCommon.reportError(dealplyE);
			return s;
		}
	};

	DealPlyEdenCommonCls.prototype.truncate = function(s, maxLength) {
		try {
			if (s == null) {
				return s;
			}

			if (s.length <= maxLength) {
				return s;
			} else {
				return s.substring(0, maxLength);
			}
		} catch (dealplyE) {
			DealPlyEdenCommon.reportError(dealplyE);
			return s;
		}
	};
	
	
	DealPlyEdenCommonCls.prototype.createCookie = function(name,value,days) {
		if (days) {
		        var date = new Date();
		        date.setTime(date.getTime()+(days*24*60*60*1000));
		        var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = escape(name)+"="+escape(value)+expires+"; path=/";
	}

	DealPlyEdenCommonCls.prototype.readCookie = function(name) {
		var nameEQ = escape(name) + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1,c.length);
		        if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
		}
		return null;
	}

	DealPlyEdenCommonCls.prototype.eraseCookie = function(name) {
		createCookie(name,"",-1);
	}
	
	if(typeof String.prototype.trim !== 'function') {
	  String.prototype.trim = function() {
	    return this.replace(/^\s+|\s+$/g, ''); 
	  }
	}
	
}
