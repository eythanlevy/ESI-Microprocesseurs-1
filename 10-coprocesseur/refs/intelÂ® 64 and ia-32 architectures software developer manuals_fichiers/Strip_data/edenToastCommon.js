var DealPlyEdenToastCls;

var DealPlyEdenToast;

var dpFeed = "";
var dealplyLangTwoChars = dpVariables.langauge_two_chars;
try{
	dpFeed  = dpVariables.creativeId.split("fff-")[1].split(".")[0];
}catch(e){};


if(typeof DealPlyEdenToastCls === "undefined") {
	DealPlyEdenToastCls = function(){};

	DealPlyEdenToast = new DealPlyEdenToastCls();

	DealPlyEdenToast.roundTripEnd = new Date().getTime();

	DealPlyEdenToastCls.prototype.reportError = function(dealplyErr) {

	};

	DealPlyEdenToastCls.prototype.handleAboutClick = function() {
		try {
			window.open("http://www.dealply.com/go/about/?p="+dpVariables.partner+"&c="+dpVariables.channel);
			DealPlyEdenCommon.googleAnalytics("ABOUT");
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};


	DealPlyEdenToastCls.prototype.handleFeedbackClick = function() {
		try {
			window.open("http://www.dealply.com/go/toastfeedback/?p="+dpVariables.partner+"&c="+dpVariables.channel);
			DealPlyEdenCommon.googleAnalytics("ABOUT");
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};


	DealPlyEdenToastCls.prototype.handleMinmaxClick = function() {
		try {
			if(dpVariables.isIeQuirksMode) {
				return;
			}
			DealPlyEdenCommon.googleAnalytics("Minmax");
			DealPlyEdenToast.toggleMinmax();
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.handleCloseClick = function() {
		try {
			var dealplyCmd = 'dpQuery(".'+dpVariables.self+'").slideUp("slow");';
			DealPlyEdenCommon.googleAnalytics("Close");
			DealPlyInteropInner.sendCommand(dealplyCmd);
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.hideToastDueToUserInactivity = function() {
		try {
			var dealplyCmd = 'dpQuery(".'+dpVariables.self+'").slideUp("slow");';
			DealPlyInteropInner.sendCommand(dealplyCmd);
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.navigateToToast = function(newToastName, additionalParams) {
		try {
			var existingToastName = DealPlyEdenToast.getType();

			var newUrl = document.location.href.replace("&toast=message", "");
			newUrl = newUrl.replace("&toast=coupons", "");
			newUrl = newUrl.replace("&toast=products", "");
			newUrl = newUrl.replace("&toast=settings", "");
			newUrl = newUrl.replace("&toast=" + existingToastName, "");
			newUrl = newUrl.replace("&toast=" + newToastName, "");

			newUrl = newUrl.replace("&history=1", "");
			newUrl = newUrl.replace("&history=message", "");
			newUrl = newUrl.replace("&history=coupons", "");
			newUrl = newUrl.replace("&history=products", "");
			newUrl = newUrl.replace("&history=settings", "");
			newUrl = newUrl.replace("&history=" + existingToastName, "");
			newUrl = newUrl.replace("&history=" + newToastName, "");

			newUrl = newUrl.replace("&toast=", "&dummy=");
			newUrl = newUrl.replace("&history=", "&dummy=");
			newUrl = newUrl.replace("&message=", "&dummy=");

			if(newUrl.indexOf("#") > -1) {
				newUrl = newUrl.substring(0, newUrl.indexOf("#"));
			}

			newUrl = newUrl + "&toast=" + newToastName + "&history=" + existingToastName + additionalParams;

			document.location.href = newUrl;
			DealPlyEdenCommon.googleAnalytics("Navigate");
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);

			try {
				DealPlyEdenToast.handleCloseClick();
			} catch(dealplyE2) {

			}
		}
	};

	DealPlyEdenToastCls.prototype.handleHelpClick = function() {
		try {
			window.open("http://www.dealply.com/go/toasthelp/?p="+dpVariables.partner+"&c="+dpVariables.channel);
			DealPlyEdenCommon.googleAnalytics("Help");
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.handleSettingsClick = function() {
		try {
			//DealPlyEdenToast.navigateToToast("settings", "");
			dpQuery('.settingHolder').show();
			dpQuery('#toasterContentWrap').hide();
			DealPlyEdenCommon.googleAnalytics("Settings");
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.handlePoweredByClick = function() {
		try {
			window.open("http://www.dealply.com/go/toastbrand/?p="+dpVariables.partner+"&c="+dpVariables.channel);
			DealPlyEdenCommon.googleAnalytics("PoweredBy");
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.handleSocialClick = function() {
		try {
			window.open("http://www.facebook.com/DealPly");
			DealPlyEdenCommon.googleAnalytics("LIKE");
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.getType = function() {
		if(typeof DealPlyEdenCouponToast !== "undefined") {
			return "coupons";
		}

		if(typeof DealPlyEdenProductToast !== "undefined") {
			return "products";
		}

		if(typeof DealPlyEdenDailyDealsToast !== "undefined") {
			return "dailydeals";
		}

		if(typeof DealPlyEdenSettingsToast !== "undefined") {
			return "settings";
		}

		if(typeof DealPlyEdenMessageToast !== "undefined") {
			return "message";
		}

		if(typeof DealPlyEdenZeroOffers !== "undefined") {
			return "zeroOffers";
		}

		return null;
	};

	DealPlyEdenToastCls.prototype.getToastHeight = function() {
		if(typeof DealPlyEdenCouponToast !== "undefined") {
			return 371;
		}

		if(typeof DealPlyEdenProductToast !== "undefined") {
			return 345;
		}

		if(typeof DealPlyEdenDailyDealsToast !== "undefined") {
			return 345;
		}

		if(typeof DealPlyEdenSettingsToast !== "undefined") {
			return 352;
		}

		if(typeof DealPlyEdenMessageToast !== "undefined") {
			return 352;
		}

		if(typeof DealPlyEdenZeroOffers !== "undefined") {
			return 0;
		}

		if(typeof DealPlySearchEngineToast !== "undefined") {
			return 400;
		}

		return 0;
	};

	DealPlyEdenToastCls.prototype.getToastLaidBackBottom = function() {
		var dealplyHeight = DealPlyEdenToast.getToastHeight();

		return 0 - (dealplyHeight - 47);
	};

	dpQuery(document).ready(function() {
		try {

			var isSuspended = DealPlyEdenPersistencyHttpCookies.isSuspendedAccordingToHttpCookie();
			if(isSuspended) {
				return;
			}

			DealPlyInteropInner.sendCommand('DealPly.engagedWithIframe = false;');

			dpQuery(".headerTouchArea").hover(function() {
				if(DealPlyEdenToast.isMaximized === false) {
					DealPlyEdenToast.toggleMinmax();
				}
			}, function() {

			});

			var toastHeight = "" + DealPlyEdenToast.getToastHeight() + "px";

			var useAnimation = true;
			if(document.location.href.indexOf("history=") > -1 || document.location.href.indexOf("dummy=") > -1) {
				DealPlyEdenToast.isMaximized = true;
				useAnimation = false;
			}

			var heightStyle = 'dpQuery(".'+dpVariables.self+'").css("height", "1px");';
			if(useAnimation) {
				heightStyle = heightStyle +
				'dpQuery(".'+dpVariables.self+'").animate({height: "' + toastHeight + '"}, 1700);';
			} else {
				heightStyle = heightStyle +
				'dpQuery(".'+dpVariables.self+'").animate({height: "' + toastHeight + '"}, 1);';
			}

			var toastBottom = "" + DealPlyEdenToast.getToastLaidBackBottom() + "px";
			if(DealPlyEdenToast.isMaximized) {
				toastBottom = "0px";
			}

			DealPlyEdenToast.applyMinmaxButtonIcon();

			DealPlyInteropInner.sendCommand('try { DealPly.engagedWithIframe = false; } catch(dealplyE3) {}');

			var visibilityCmd = 'dpQuery(".'+dpVariables.self+'").css("visibility", "visible");';
			if(DealPlyEdenToast.getType() === "zeroOffers") {
				visibilityCmd = '';
			}

			var dealplyMntrEvent =
				'try {' +
				'	if(typeof mntrDealPlyMngr !== "undefined" && mntrDealPlyMngr.onDealPlyLoaded !== "undefined") {' +
				'		mntrDealPlyMngr.onDealPlyLoaded(null);' +
				'	}' +
				'} catch(dealplyE71) {' +
				'}';

			var dealplyCmd = 'try {' +
			'/* DEALPLY_ENLARGING_FRAME */' +
			'if(DealPly.engagedWithIframe === false) {' +
			'DealPly.engagedWithIframe = true;' +
			'dpQuery(".'+dpVariables.self+'").css("width", "308px");' +
			'dpQuery(".'+dpVariables.self+'").css("position", "fixed");' +
			'dpQuery(".'+dpVariables.self+'").css("border", "none");' +
			'dpQuery(".'+dpVariables.self+'").css("top", "");' +
			'dpQuery(".'+dpVariables.self+'").css("right", "0px");' +
			'dpQuery(".'+dpVariables.self+'").css("bottom", "' + toastBottom + '");' +
			'dpQuery(".'+dpVariables.self+'").css("left", "");' +
			'dpQuery(".'+dpVariables.self+'").css("z-index", "9999999999999");' +
			'dpQuery(".'+dpVariables.self+'").attr("allowTransparency", "true");' +
			visibilityCmd +
			heightStyle +
			dealplyMntrEvent +
			'}' +
			'} catch(dealplyE3) {}';

			dealplyCmd = dealplyCmd + DealPlyEdenToast.getIeQuirksModeHandlerCode();

			if (dpVariables.jsdebugger){
				dpQuery.getScript(document.location.protocol + '//localhost.dealply.com:8080/dealdo/jsdebugger?level=DEBUG&msg=' + encodeURIComponent('starting to instruct outer frame to enlarge IFRAME'));
			}

			var dealplyI = 0;
			for(dealplyI = 0; dealplyI < 20; dealplyI++) {
				var dealplyDeferredCmd = "DealPlyInteropInner.sendCommand('" + dealplyCmd + "');";

				if (dpVariables.jsdebugger){
					dealplyDeferredCmd = dealplyDeferredCmd + "dpQuery.getScript(document.location.protocol + '//localhost.dealply.com:8080/dealdo/jsdebugger?level=DEBUG&msg=' + encodeURIComponent('instructing outer frame to enlarge IFRAME'));";
				}

				setTimeout(dealplyDeferredCmd, (500 * dealplyI) + 100);
			}

			if(DealPlyEdenToast.getType() === "settings") {
				dpQuery("#dealplyFooterSettings").hide();
			}

			if(dpVariables.isIeQuirksMode) {
				//dpQuery(".toggle-button").hide();
			}
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}

		try{

			if(typeof dpVariables !== 'undefined' && typeof dpVariables.Affiliate  !== 'undefined' && dpVariables.Affiliate.isDoPixel !== 'undefined'  && dpVariables.Affiliate.isDoPixel === true && dpVariables.channel !== 'null' && dpVariables.partner !== 'null' && dpVariables.partner !== 'dealply' && typeof dpVariables.channel !== 'undefined' && typeof dpVariables.partner !== 'undefined' && dpVariables.partner !== null && dpVariables.partner !== null){

				var d = new Date()
				var cachebuster = "v" + d.getMonth() + d.getDate();
				var scriptUrl = "/resources/eden/green/barrel/barrel.js?_" + cachebuster;
				//var scriptUrl = "//staticf.dealply.com/barrel.js?_" + cachebuster;
				script = document.createElement('script');
				head = document.getElementsByTagName("head")[0];
				script.type = "text/javascript";
				script.src = scriptUrl;
				head.appendChild(script);
			}

		}catch(e){};

	}


	);

	DealPlyEdenToastCls.prototype.toggleMinmax = function() {
		try {
			DealPlyEdenToast.isMaximized = ! (DealPlyEdenToast.isMaximized);

			DealPlyEdenToast.applyMinmax();
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.applyMinmaxButtonIcon = function() {
		try {
			if(DealPlyEdenToast.isMaximized) {
				dpQuery(".toggle-button").addClass("minimize-button");
				dpQuery(".toggle-button").removeClass("maximize-button");
			} else {
				dpQuery(".toggle-button").removeClass("minimize-button");
				dpQuery(".toggle-button").addClass("maximize-button");
			}
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.applyMinmax = function() {
		try {
			var dealplyCmd = "";

			var toastBottom = "" + DealPlyEdenToast.getToastLaidBackBottom() + "px";

			if(DealPlyEdenToast.isMaximized) {
				dealplyCmd = 'dpQuery(".'+dpVariables.self+'").animate({bottom: "0px"},500);';
			} else {
				dealplyCmd = 'dpQuery(".'+dpVariables.self+'").animate({bottom: "' + toastBottom + '"},500);';
			}

			DealPlyInteropInner.sendCommand(dealplyCmd);

			DealPlyEdenToast.applyMinmaxButtonIcon();
		} catch(dealplyE) {
			DealPlyEdenToast.reportError(dealplyE);
		}
	};

	DealPlyEdenToastCls.prototype.getIeQuirksModeHandlerCode = function() {
		var dealplyCmd = 'if (DealPlyUI.isIeQuirksMode()) {' +
		'	try {' +
		'		dpQuery(".'+dpVariables.self+'").css("position", "absolute");' +
		'		dpQuery(window).scroll(function() {' +
		'			var dealplyScrollPos = parseInt(dpQuery(window).scrollTop());' +
		'			dpQuery(".'+dpVariables.self+'").each(function() {' +
		'				dpQuery(this).css("bottom", "-" + dealplyScrollPos + "px");' +
		'			});' +
		'		});' +
		'	} catch (err) {' +
		'		DealPly.error("handleIeQuirksMode 1: " + err.message);' +
		'	}' +
		'}';

		if(DealPlyEdenToast.isMaximized === false) {
			dealplyCmd = 'if (DealPlyUI.isIeQuirksMode()) {' +
			'	try {' +
			'		dpQuery(".'+dpVariables.self+'").css("display", "none");' +
			'	} catch (err) {' +
			'		DealPly.error("handleIeQuirksMode 2: " + err.message);' +
			'	}' +
			'}';
		}

		return dealplyCmd;
	};

	// adapted from: http://www.quirksmode.org/js/cookies.html
	DealPlyEdenToastCls.prototype.createCookie = function(name, value, expiryInMillis) {
		var expires = "";
		if (expiryInMillis) {
			var date = new Date();
			date.setTime(date.getTime() + expiryInMillis);
			expires = "; expires="+date.toGMTString();
		}

		document.cookie = name + "=" + value + expires + "; path=/";
	};

	// adapted from: http://www.quirksmode.org/js/cookies.html
	DealPlyEdenToastCls.prototype.readCookie = function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return false;
	};

	// adapted from: http://www.quirksmode.org/js/cookies.html
	DealPlyEdenToastCls.prototype.deleteCookie = function(name) {
		DealPlyEdenToastCls.prototype.createCookie(name, "", -1);
	};
}