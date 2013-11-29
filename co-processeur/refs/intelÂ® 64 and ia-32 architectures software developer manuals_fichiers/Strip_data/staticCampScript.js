
		



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
		
		dpVariables.sendCommand = function(cmd){
			var randStr = ""+ Math.random();
			cmd = 'if(typeof dpQuery("'+dpFrameId+'").attr("a'+randStr+'")==="undefined") { dpQuery("'+dpFrameId+'").attr("a'+randStr+'","1");' + cmd + '}';
			dpVariables.debug = cmd;
			var count = 0;
			var t = setInterval(function(){
				count++
				DealPlyInteropInner.sendCommand(cmd);
				
				if(count > 100){
					clearInterval(t);
				}
				
			},300);
			
			
			
		}
		
		dpVariables.hid = document.cookie.match(/hid=(.*?);/);
		dpVariables.hid = dpVariables.hid!==null ? dpVariables.hid[1]:"";
		dpVariables.interactionid = parseInt(Math.random()*10000000000000000);
		
		
		if(typeof dpVariables.dpCampJson.targetUrl === "object"){
			var tempArr = dpVariables.dpCampJson.targetUrl;
			dpVariables.dpCampJson.targetUrl = tempArr[parseInt(Math.random()*tempArr.length)]
		}
		
		dpVariables.lockImpression = false;;
		if(typeof dpVariables.dpCampJson.htmlsrc !== 'undefined' && dpVariables.dpCampJson.htmlsrc !== ""    ){
			dpQuery("body").ready(function(){
					dpQuery("body *").hide();
					var urlHash  = "#" + encodeURIComponent(JSON.stringify(dpVariables));
					dpQuery("body").append('<iframe  frameborder="0" border="no" scrolling="no" width="'+ dpVariables.dpCampJson.x +'" height="'+ dpVariables.dpCampJson.y +'"  src = "'+ dpVariables.dpCampJson.htmlsrc + urlHash + '"></iframe>');
					
				}
			);
			
			
			
		}
		
		dpVariables.feed = "app";
		dpVariables.domain = (DealPlyInteropInner.getBaseInteropUrl() + "/").match(/.*\/\/(.*?)\//);
		dpVariables.domain = dpVariables.domain!==null?dpVariables.domain[1]:"";
		
			dpVariables.handleClick = function(){
				dpQuery("#imgCmp").click(function(e){
					
					dpVariables.reportClickEvent();
					window.open(dpVariables.dpCampJson.targetUrl,'_blank');
					
				});
			}
			
			dpVariables.userLang = (navigator.language) ? navigator.language : navigator.userLanguage;
			if(typeof dpVariables.data.lang !== 'undefined'){
				dpVariables.userLang = dpVariables.data.lang;
			}
			
			
			
			if(typeof dpVariables.userLang == 'undefined' ||  dpVariables.userLang == null || typeof dpVariables.dpCampJson.lang == 'undefined'    ){
				window.location = 'empty.html';
			}else{
				dpVariables.userLang = dpVariables.userLang.substr(0,2);
			}
			
			if(typeof dpVariables.dpCampJson.lang !== 'undefined' ){
				
				if(dpVariables.userLang.match(dpVariables.dpCampJson.lang) == null){
					
					if(dpVariables.dpCampJson.lang.match(/gen/)!== null){
						dpVariables.userLang ="gen";
					}else{
						window.location = 'empty.html';
					}
					
				}
				
			}
			
			if(dpVariables.dpCampJson.campSize === 'big'){
				dpVariables.dpCampJson.x = 280; dpVariables.dpCampJson.y = 200;
			
			}
			else if(dpVariables.dpCampJson.campSize === 'small'){
				dpVariables.dpCampJson.x = 231; dpVariables.dpCampJson.y = 253;
			}
			
			dpVariables.dpCampJson.campDataUrl = '/resources/eden/green/camp/'+dpVariables.userLang+'/'+dpVariables.dpCampJson.campDataFile;
			
			dpVariables.getCookie = function(dealplyKey) {
				return dpQuery.cookie(dealplyKey);
			};
			dpVariables.setCookie = function(dealplyKey, dealplyVal , exp) {
				var expStr = "&exp=";
				if(typeof  exp === "undefined"){
					expStr = "";
				}else{
					expStr += ""+exp;
				}
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
					url = '//servedby.dealply.com/dealdo/setcck?key0='+encodeURIComponent(dealplyKey)+'&value0='+encodeURIComponent(dealplyVal) + expStr;
				} else {
					url = '//' + DealPlyOpDom.getServedbyDomain() + '/dealdo/setcck?key0='+encodeURIComponent(dealplyKey)+'&value0='+encodeURIComponent(dealplyVal) + expStr;
				}
				var sendCommandStr = "dpQuery.ajax({type: 'GET',url:'"+url+"',crossDomain: true,	dataType : 'jsonp',headers : {'Access-Control-Allow-Origin' : '*'}});";
				
				dpVariables.sendCommand(sendCommandStr);
				
			};
			
			
			
			
			
			
			
			dpVariables.capValueFromCookie = (function(){
				
				var cap = dpVariables.getCookie(dpVariables.data.campaign+"cap");
				if(cap === null ){
					dpVariables.setCookie(dpVariables.data.campaign+"cap","1");
					
					return 1;
				}
				
				return  parseInt(cap);
				
				
			})();
			
			if(dpVariables.getCookie(dpVariables.data.campaign+"sus")!== null  || dpVariables.capValueFromCookie > dpVariables.dpCampJson.capping){
				window.location = 'empty.html';
			}
			
			
			
			
			//handle auto-suspend
			(function(){
				
				if(dpVariables.getCookie(dpVariables.data.campaign+"autoSuspendPeriod")!== null  ){
					
					window.location = 'empty.html';
					return false;
				}
				
				
				if(typeof dpVariables.dpCampJson.autoSuspendPeriod !== "undefined"  && dpVariables.dpCampJson.autoSuspendPeriod !== false  ){
					
					dpVariables.setCookie(dpVariables.data.campaign+"autoSuspendPeriod","1",dpVariables.dpCampJson.autoSuspendPeriod + new Date().getTime());
					
					
				}
				
			})();
			
			
			
			
			
			dpVariables.productId = dpVariables.dpCampJson.productId;
			dpVariables.dpTestParam = null;
			if(typeof dpVariables.dpCampJson.abtesting !== 'undefined' &&  dpVariables.getCookie(dpVariables.data.campaign) === null  && dpVariables.dpCampJson.abtesting.isOn && !( Math.random() > dpVariables.dpCampJson.abtesting.testPercentFromWholeTruffic)  ){
				dpVariables.dpTestParam = parseInt(Math.random()*dpVariables.dpCampJson.abtesting.tests.length);
				
				dpVariables.setCookie(dpVariables.data.campaign,""+dpVariables.dpTestParam);
				
				
			}
			if(dpVariables.dpTestParam !== null || dpVariables.getCookie(dpVariables.data.campaign) !== null &&  dpVariables.dpCampJson.abtesting.isOn ){
				var dpTestParam;
				if(dpVariables.dpTestParam !== null){
					//for the first time ...
					dpTestParam = dpVariables.dpTestParam;
				}else{
					dpTestParam = dpVariables.getCookie(dpVariables.data.campaign);
				}
				
				dpVariables.productId +=""+ (parseInt(dpTestParam) + dpVariables.dpCampJson.abtesting.testRound); 
				
				var campDataFile = dpVariables.dpCampJson.abtesting.tests[parseInt(dpTestParam)].campDataFile;
				
				dpVariables.dpCampJson.campDataUrl = '/resources/eden/green/camp/'+dpVariables.userLang+'/'+campDataFile;
				
			}
			
			var cmd = 'dpQuery("'+dpFrameId+'").removeAttr("style").css({"z-index":"99999999","width":"'+dpVariables.dpCampJson.x+'px" , "height":"'+dpVariables.dpCampJson.y+'px"  , "visibility":"visibile", "position":"fixed","display":"block","bottom":"-253px","right":"0px"}).animate({"bottom":"0px"},500);';
			
			dpVariables.cmd = cmd;
			dpVariables.baseTrackingUrlClick = '//'+ DealPlyOpDom.getClickDomain() +'/dealdo/event-report?type=click';
			dpVariables.baseTrackingUrlImpression = '//'+ DealPlyOpDom.getImpressionDomain() +'/dealdo/event-report?type=impression';
			dpVariables.baseTrackingUrlSuspend = '//sus.dpstack.com/dealdo/event-report?type=suspend';
			dpVariables.baseTrackingUrlQuick = '//'+ DealPlyOpDom.getQuickDomain() +'/dealdo/event-report?type=quick';
			dpVariables.screenRes = "";
			try{

				dpVariables.screenRes = screen.width+"X"+screen.height;

			}catch(e){}
			dpVariables.reportClickEvent = function() {
				
				var clickData = {
						"product" : this.productId,
						"placement" : dpVariables.data.url,
						"partner":this.partner,
						"channel":this.channel,
						"screenRes":this.screenRes,
						"feed": this.feed,
						"hid":this.hid,
						"interactionid":this.interactionid,
						"domain":this.domain
						
				};
				
				dpVariables.reportEventEx("click", clickData);

			};
			dpVariables.trackingUrl = "//dealdo/event-report?type=";
			dpVariables.reportImpressionEvent = function() {
				if(dpVariables.lockImpression){
					return;
				}
				var clickData = {
					"product" : this.productId,
					"placement" : dpVariables.data.url,
					"partner":this.partner,
					"channel":this.channel,
					"screenRes":this.screenRes,
					"feed": this.feed,
					"hid":this.hid,
					"interactionid":this.interactionid,
					"domain":this.domain
					
				};
				
				this.reportEventEx("impression", clickData);
				dpVariables.lockImpression = true;

			};
			
			dpVariables.addCommonEventData = function(dealplyJsonObj) {
				try {
					
					dealplyJsonObj["cb"] = "" + Math.random();

					dealplyJsonObj["localDate"] = "" + new Date().getTime();

					var roundTripStart = dpVariables.ltime+"";
					var roundTripEnd = "" + dealplyJsonObj.localDate;

					var roundTripTime = parseInt(roundTripEnd)
							- parseInt(roundTripStart);

					dealplyJsonObj["roundTripTime"] = roundTripTime;
					
					return;
					
				} catch (dealplyE) {
					
					
					return null;
				}
			};
			
			
			dpVariables.getJsonObjectAsHttpParameters = function(
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
					
					return null;
				}
			};
			dpVariables.reportEventUrl = function(url) {
				try {
					
					var image = document.createElement("iframe");
					
					dpQuery(image).attr("src", url);
					dpQuery(image).css({"position":"absolute","left":"-100000000px", "top":"-1000000px"});
					document.body.appendChild(image);
				} catch (dealplyE) {
					
				}
			};
			
			
			
			
			dpVariables.reportEventEx = function(eventName,
					dealplyJsonObj) {
				try {
					var baseTrackingUrl = "";
					if (eventName === "click") {
						
						baseTrackingUrl = dpVariables.baseTrackingUrlClick;
					} else if (eventName === "impression") {
						
						
						baseTrackingUrl = dpVariables.baseTrackingUrlImpression;
					}else if(eventName === "suspend"){
						baseTrackingUrl = dpVariables.baseTrackingUrlSuspend;
					}
					

					dpVariables.addCommonEventData(dealplyJsonObj);

					var dealplyParams = dpVariables
							.getJsonObjectAsHttpParameters(dealplyJsonObj);

					var cb = Math.random();

					var url = baseTrackingUrl + "&cb=" + cb + "&" + dealplyParams;

					
					
					dpVariables.reportEventUrl(url);
					
					
				} catch (dealplyE) {
					
					
				}
				
				
			};
			
			dpVariables.suspend = function(){
				dpVariables.setCookie(dpVariables.data.campaign+"sus","1");
				var cmd = 'dpQuery("'+dpFrameId+'").remove();';
				dpVariables.sendCommand(cmd);
				
				
			}
			
			
			if(!(typeof dpVariables.dpCampJson.htmlsrc !== 'undefined' && dpVariables.dpCampJson.htmlsrc !== ""    )){
				var campImg = document.createElement('img');
				
				campImg.src = dpVariables.dpCampJson.campDataUrl;
			}
			
			
			dpQuery(document).ready(function(){
				
				if(typeof campImg !== "undefined"){
					dpQuery("#imgCmp").attr("src",campImg.src);
				}
				
				
				dpVariables.sendCommand(cmd);
				
				dpVariables.reportImpressionEvent();
				dpVariables.capValueFromCookie++
				dpVariables.setCookie(dpVariables.data.campaign+"cap",dpVariables.capValueFromCookie);
				dpVariables.handleClick();
				
				dpVariables.closeWidget = function(){
					dpQuery('#xClose').click(function(){
						
						var cmd = 'dpQuery("'+dpFrameId+'").remove();';
						dpVariables.sendCommand(cmd);
						
					});
				};
				
				
				
			});
			
		