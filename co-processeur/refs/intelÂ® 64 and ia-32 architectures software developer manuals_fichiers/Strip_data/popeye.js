DealPlyUtilsCls.prototype.discountAndRating = function() {
	var itter_max = 3;
	if (dealPlyUtils.deals.length < itter_max) {
		itter_max = dealPlyUtils.deals.length;
	}

	var curDeal;
	for ( var i = 0; i < itter_max; i++) {
		child_index = i + 2;
		curDeal = dealPlyUtils.deals[i];
		// check if there's rating
		if (typeof curDeal.rating === 'undefined' || curDeal.rating < 4) {
			dpQuery('li:nth-child(' + child_index + ') .starsWrap').remove();
		} else {
			dpQuery('li:nth-child(' + child_index + ')').addClass("withRating");
			var rating = curDeal.rating;
			var fullStars = Math.floor(rating);

			var isHalfStar = Math.round(rating) > fullStars;
			var emptyStarsStart = isHalfStar ? fullStars + 1 : fullStars;
			var starsEl = dpQuery('li:nth-child(' + child_index + ') .star');
			for ( var j = 0; j < fullStars; j++) {
				dpQuery(starsEl[j]).show();
			}
			if (isHalfStar) {
				dpQuery(starsEl[fullStars]).addClass('star_half').show();
			}
			for ( var j = emptyStarsStart; j < 5; j++) {
				dpQuery(starsEl[j]).addClass('star_empty').show();
			}
			// set number of reviews if possible, otherwise - remove element
			if (typeof curDeal.numOfProductRaters !== 'undefined' && curDeal.numOfProductRaters > 0 && curDeal.numOfProductRaters < 10000) {
				dpQuery('li:nth-child(' + child_index + ') .ratersAmount').text('(' + curDeal.numOfProductRaters + ')');
			} else {
				dpQuery('li:nth-child(' + child_index + ') .numOfRaters').remove();
			}
		}
		// set discount badge or featured banner

		if (curDeal.discountPercentage > 0) {
			dpQuery('li:nth-child(' + child_index + ')').addClass("withDiscount");
			dpQuery('li:nth-child(' + child_index + ') .dealDiscount').text('-' + curDeal.discountPercentage + '%');
			var priceBefore = (100 * curDeal.productPrice) / (100 - curDeal.discountPercentage);
			priceBefore = Math.floor(priceBefore * 100) / 100;
			if (/[0-9.,]$/.test(curDeal.productPriceWithCurrencySymbol)) {
				dpQuery('li:nth-child(' + child_index + ') .priceBefore').text(curDeal.productPriceCurrencySymbol + priceBefore);
			} else {
				dpQuery('li:nth-child(' + child_index + ') .priceBefore').text(priceBefore + curDeal.productPriceCurrencySymbol);
			}
			dpQuery('li:nth-child(' + child_index + ') .dealDiscount').show();
			dpQuery('li:nth-child(' + child_index + ') .priceBefore').show();

		} else if (curDeal.isFeatured) {
			dpQuery('li:nth-child(' + child_index + ') .featuredBan').show();

			dpQuery('li:nth-child(' + child_index + ') .priceBefore').show();
		}
		//		// set additional notes
		//		if (curDeal.dealNotes !== "") {
		//			dpQuery('li:nth-child(' + child_index + ') .offerMoreData').text(
		//					dealPlyUtils.sub_desc(curDeal.dealNotes, 100));
		//			dpQuery('li:nth-child(' + child_index + ') .offerMoreDataContainer')
		//					.addClass("hasMoreData");
		//		}

	}

	dpQuery('li .numOfRaters span.numOfRatersTxt').text(dpVariables.strings.REVIEWS_TEXT);
	dpQuery('#header_txt').text("Deals");
	//	dpQuery('#header_txt').text(dpVariables.strings.TOAST_TITLE_DEALS);

	// *********************end of add ratings, featured and additional data to
	// deals

};
DealPlyUtilsCls.prototype.closeWidget = function() {
	dpQuery('#dealplyCloseButton')
			.live(
					'click',
					function() {
						dpQuery("#dealplyItemsList").animate({
							"right" : "-800px"
						}, 400);
						var dealplyCmd = 'DealPly.reportClose();dpQuery("' + dpFrameId + '").hide();';
						DealPlyInteropInner.sendCommand(dealplyCmd);
						DealPlyEdenCommon.googleAnalytics("Close");
						var url = "http://qck.dpstack.com/dealdo/event-report?type=quick&topic=closeWidget&interactionId=" + dpVariables.interactionId;
						var cmd = "var dpiframe=document.createElement(\"iframe\");dpQuery(dpiframe).attr(\"width\",\"1\");dpQuery(dpiframe).attr(\"height\",\"1\");dpQuery(dpiframe).css(\"top\",\"-10000px\");dpQuery(dpiframe).css(\"left\",\"-10000px\");dpQuery(dpiframe).css(\"position\",\"absolute\");dpQuery(dpiframe).css(\"visibility\",\"visible\");dpQuery(\"body\").append(dpiframe);dpQuery(dpiframe).attr(\"src\",\""
								+ url + "\");";
						DealPlyInteropInner.sendCommand(cmd);
					});

};

DealPlyUtilsCls.prototype.setHoverImage = function() {

};
if(typeof dpVariables.strings != 'undefined'){
var removeBr = dpVariables.strings.MORE_DEALS2;
removeBr = removeBr.replace("<BR/>", '');

var dealplyKeysEncodes = dpVariables.keyWordsEncoded;
var toastHeight = "150px";
var dealplyToastWidthInteger = 26;

var dealplyToastWidth = '"width" :  256px"';

var useAnimation = true;

var heightStyle = 'dpQuery("' + dpFrameId + '").css("height", "1px");';
heightStyle = heightStyle + 'dpQuery("' + dpFrameId + '").animate({height: "' + toastHeight + '"}, 170);';

var domLocationToInsertTheIframe = '';
var dpGetDealText = dpVariables.strings.PRICE_STARTS_FROM;

var strCssPos = 'dpQuery("'
	+ dpFrameId
	+ '").css({'
	+ dealplyToastWidth
	+ ' , "bottom": "3px" , "overflow-x":"hidden" , "display" : "block" , "border-bottom" :"solid 0px #ccc" , '
	+ '			"position":"fixed" , "border-top-left-radius" : "10px", "border-bottom-left-radius" : "10px" , "right" :"0px"  , "z-index" :"9999999999999" , "margin-bottom": "2px" , "margin-top": "-22px" , "visibility":"visible"})'
	+ '			.attr("allowTransparency","true");';

var dealplyIframeStyleToManipulate = 'dpQuery("' + dpFrameId + '").removeAttr("style");' + strCssPos + heightStyle + domLocationToInsertTheIframe;

if ("#dpAdditionalFrame" === dpFrameId) {
	DealPlyUtilsCls.prototype.dealplyCmd = dealPlyUtils.iframeManipulation(dealplyIframeStyleToManipulate, dpFrameId);
} else {
	DealPlyUtilsCls.prototype.dealplyCmd = dealPlyUtils.iframeManipulation(dealplyIframeStyleToManipulate);
}
}

DealPlyUtilsCls.prototype.closeSuspendBox = function() {
	// cancel out existing function
};
DealPlyUtilsCls.prototype.openSuspendBox = function() {
	var obj = this;
	dpQuery("#dealplySettings").click(function() {
		dpQuery("#dealplySuspend").toggle();
		dpQuery(".sideControls#dealplySettings").toggleClass('open');

		dpQuery("#closeSuspendWidget").click(function(e) {
			dpQuery("#dealplySuspend").hide();
			dpQuery(".sideControls#dealplySettings").removeClass('open');
		});
	});

};

DealPlyUtilsCls.prototype.sendWhenDone = function(message) {
	try {
		var msg = {
			"dealplyOrigin" : "POPEYE",
			"dealplyEval" : message,
			"dealplyInteractionId" : dpVariables.interactionId
		};
		var msgStr = DealPlyJSON.stringify(msg);
		var dealplyEncodedMsgStr = "d=" + DealPlyBase64.encode(msgStr);
		parent.postMessage(dealplyEncodedMsgStr, '*');
	} catch (err) {
		
	}
};

function OnMessage(event) {
	var popEyeMsg = event;
	if (typeof popEyeMsg !== "function" && typeof popEyeMsg !== "object") {
		return;
	}
	popEyeMsgPub = popEyeMsg;
	if (popEyeMsg === null) {
		return;
	}

	var popEyeMsgObj = popEyeMsg.data;
	if (typeof popEyeMsgObj === "string" && popEyeMsgObj != null) {
		try {
			if (popEyeMsgObj.indexOf("d=") === 0) {
				popEyeMsgObj = popEyeMsgObj.substring(2);

				popEyeMsgObj = DealPlyBase64.decode(popEyeMsgObj);
			} else {
				return;
			}
		} catch (dealplyE43) {
			
		}

		try {
			popEyeMsgObj = DealPlyJSON.parse(popEyeMsgObj);
		} catch (dealplyE6) {
			
		}
	}

	if (typeof popEyeMsgObj.dealplyOrigin === "undefined" || popEyeMsgObj.dealplyOrigin === null || popEyeMsgObj.dealplyOrigin !== "POPEYE-TOP") {
		return;
	}

	if (typeof popEyeMsgObj.dealplyEval === "string" && popEyeMsgObj.dealplyEval !== null && popEyeMsgObj.dealplyEval==="OK") {
		if(typeof this.noImpReport === 'undefined'){
			dealPlyUtils.reportImpression();
		}
		
		clearInterval(intervalID);
	}
}

DealPlyUtilsCls.prototype.changeHeight = function(message) {
	dpQuery(".offer_block.selected .rightRightDiv .price").each(function() {
		origFontSize = 18;
		while (dpQuery(this).height() > 25) {
			origFontSize--;
			dpQuery(this).css("font-size", origFontSize + "px");
		}
	});
	dpQuery(".offer_block.selected .prod_desc").each(function(){
		while(dpQuery(this).height()<dpQuery(this).find("a").height()){
			var tempText = dpQuery(this).find("a").text();
			tempText = tempText.substring(0, tempText.lastIndexOf(" "));
			 dpQuery(this).find("a").text(tempText);
		}
			 
	});
};

DealPlyUtilsCls.prototype.handleSuspendSelectedOption = function() {
	try {

		var dealplySuspendVal = dpQuery('input[name=suspendOp]:checked').val();
		if (dealplySuspendVal === "") {
			return;
		}

		if (dealplySuspendVal === "60480000000") {
			DealPlyEdenSettingsToast.suspendForever();

			var suspendData = {
				"product" : this.productId,
				"placement" : document.domain,
				"md" : "" + dealplySuspendVal
			};

			DealPlyEdenCommon.googleAnalytics("suspend");
			var wvdpwhiteLable = dpVariables.poweredByTextForAffiliate.toLowerCase();
			wvdpwhiteLable = wvdpwhiteLable.trim();
			if (wvdpwhiteLable == 'dealply') {
				window.open("http://www.dealply.com/uninstall-autodetect/");
			}
		} else {
			DealPlyEdenSettingsToast.suspendByInterval(dealplySuspendVal);

			var suspendData = {
				"product" : this.productId,
				"placement" : document.domain,
				"md" : "" + dealplySuspendVal
			};

			DealPlyEdenCommon.googleAnalytics("suspend");
		}
	} catch (dealplyE) {
		//DealPlyEdenToast.reportError(dealplyE);
	}
};

DealPlyUtilsCls.prototype.updateControls = function() {
	dpQuery('.dealply_container').addClass(langTwoChars + 'lang');
	if (langTwoChars === 'en' && dpVariables.poweredByTextForAffiliate.length > 13) {
		dpQuery('.powered_by_link').prepend('by ');
	} else {
		dpQuery('.powered_by_link').prepend(dpVariables.strings.TOAST_POWERED_BY_PREFIX + ' ');
	}
	var old_width = dpQuery('.powered_by_link').width();
	dpQuery('.powered_by_link').attr('style', dpVariables.Affiliate.getPoweredByElem.style);
	dpQuery('.powered_by_link').css("width", old_width);
	dpQuery('.powered_by_link').attr('href', dpVariables.Affiliate.getPoweredByElem.href);
	if (dpVariables.Affiliate.getPoweredByElem.href.search("javascript:void(0)") !== -1) {

		dpQuery('.powered_by_link').attr('target', "");
	}

	dpQuery('.powered_by span.dealplySpan').text(dpVariables.poweredByTextForAffiliate);
	dpQuery('#dealplySuspandForTextPanel span').append(dpVariables.strings.SETTINGS_TOAST_SUSPEND_DEALPLY);
	dpQuery('#suspendOp1 + label').append(dpVariables.strings.SETTINGS_TOAST_SUSPEND_1_DAY);
	dpQuery('#suspendOp2 + label').append(dpVariables.strings.SETTINGS_TOAST_SUSPEND_1_WEEK);
	dpQuery('#suspendOp3 + label').append(dpVariables.strings.SETTINGS_SUSPEND_FOREVER);
	dpQuery('#closeSuspendWidget span').append(dpVariables.strings.CANCEL);

	dpQuery('#dealplySettingButton').attr('title', dpVariables.strings.SUSPEND);
	dpQuery('#dealplyFaqButton').attr('title', dpVariables.strings.FAQ);
	dpQuery('#dealplyFaqLink').attr('style', dpVariables.Affiliate.getHelpElem.style);
	if (dpVariables.Affiliate.getHelpElem.href === 'javascript:DealPlyEdenToast.handleHelpClick();void(0);') {
		dpQuery('#dealplyFaqLink').attr('href', 'http://www.dealply.com/faq/');
	} else {
		dpQuery('#dealplyFaqLink').attr('href', dpVariables.Affiliate.getHelpElem.href);
	}
	if (dpVariables.partner.indexOf('ctmamf') === 0) {
		dpQuery('#dealplySettings').hide();
		dpQuery('#dealplySettingButton').hide();
		dpQuery('#dealplyWhatsThisLink').show();
	}
	// end changes according to dpVariables
	/*
	 * if(typeof dpVariables !== 'undefined' && typeof
	 * dpVariables.Affiliate !== 'undefined' &&
	 * dpVariables.Affiliate.isDoPixel !== 'undefined' &&
	 * dpVariables.Affiliate.isDoPixel === true &&
	 * dpVariables.channel !== 'null' && dpVariables.partner !==
	 * 'null' && dpVariables.partner !== 'dealply' && typeof
	 * dpVariables.channel !== 'undefined' && typeof
	 * dpVariables.partner !== 'undefined' &&
	 * dpVariables.partner !== null && dpVariables.partner !==
	 * null){
	 * dpQuery('#rmSecondImg').attr('src','http://ad.yieldmanager.com/pixel?id='+dpVariables.dpRMXPixelRegionId+'&t=2'); }
	 */

	dpQuery("#dealplyWidgetControlPanel").click(function() {
		dealPlyUtils.gotoDeal(0, 999);
		var url = dpQuery(".prod_desc > a").last().attr("linkto");
		window.open(url, '_blank');
	});
	/*
	 * dpQuery("#dealplyRelatedOfferTextPanel").css("cursor","pointer").click(function(){
	 * dpQuery("#greenAreaClickable").click(); });
	 */

	dpQuery("#xSpan").hover(function() {
		dpQuery(this).css("font-weight", "bold");
	}, function() {
		dpQuery(this).css("font-weight", "normal");
	});

	if (dpVariables.Affiliate.getPoweredByTextUnderlineElem.style.search("underline") != -1) {

		dpQuery(".powered_by span").hover(function() {
			dpQuery(this).css("text-decoration", "underline");
		}, function() {
			dpQuery(this).css("text-decoration", "none");
		});
	} else {
		dpQuery(".powered_by span").css("cursor", "default");
	}

	str = '<span style = "text-decoration:none; position:absolute; top:35px; " ><< </span><span style ="position:absolute; left:25px;">'
			+ dpVariables.strings.MORE_DEALS2 + '</span> ';
	dpQuery("#dpShopNoStar").html(str);
	if (dpVariables.langauge_two_chars == 'fr' || dpVariables.langauge_two_chars == 'jp') {
		dpQuery("#dpShopNoStar span").eq(1).css({
			"bottom" : "-32px"
		});
	}

	dpQuery("#addit .getDealText").html(dpGetDealText);

	dpQuery(".offer_block0").addClass("selected");
	dealPlyUtils.changeHeight();
	dpQuery(".offer_block .leftDiv").mouseenter(function() {
		if (dpQuery(this).parent().is(".selected")) {
			return;
		}
		dpQuery(".offer_block.selected").removeClass("selected");
		dpQuery(this).parent().addClass("selected");
		dealPlyUtils.changeHeight();
		DealPlyEdenCommon.reportQuick({
			topic:'popOffers',
			interactionId:dpVariables.interactionId,
			partner:dpVariables.partner,
			channel:dpVariables.channel,
			hid:dpVariables.hid,
			product : dealPlyUtils.productId
		});

	});

	dealPlyUtils.handleDynamicPoweredBy();
};

DealPlyUtilsCls.prototype.removePopEyeListeners = function(elementSelector){
	if (window.addEventListener) { // all browsers except IE before version 9
		window.addEventListener("message", onSuspendMessage, false);
	} else {
		if (window.attachEvent) { // IE before version 9
			window.attachEvent("onmessage", onSuspendMessage);
		}
	}
	var maxMessagesSent = 15;
	
	if (dpQuery(elementSelector).length > 0) {
		
		suspendIntervalId = window.setInterval(function() {
			maxMessagesSent--;
			if (maxMessagesSent == 0) {
				window.clearInterval(suspendIntervalId);
			}
			dealPlyUtils.sendWhenDone("SUSPEND-REQUEST");
		}, 100);
	}
};

function onSuspendMessage(event) {
	var popEyeMsg = event;
	if (typeof popEyeMsg !== "function" && typeof popEyeMsg !== "object") {
		return;
	}
	popEyeMsgPub = popEyeMsg;
	if (popEyeMsg === null) {
		return;
	}

	var popEyeMsgObj = popEyeMsg.data;
	if (typeof popEyeMsgObj === "string" && popEyeMsgObj != null) {
		try {
			if (popEyeMsgObj.indexOf("d=") === 0) {
				popEyeMsgObj = popEyeMsgObj.substring(2);

				popEyeMsgObj = DealPlyBase64.decode(popEyeMsgObj);
			} else {
				return;
			}
		} catch (dealplyE43) {
			
		}

		try {
			popEyeMsgObj = DealPlyJSON.parse(popEyeMsgObj);
		} catch (dealplyE6) {
			
		}
	}

	if (typeof popEyeMsgObj.dealplyOrigin === "undefined" || popEyeMsgObj.dealplyOrigin === null || popEyeMsgObj.dealplyOrigin !== "POPEYE-TOP") {
		return;
	}

	if (typeof popEyeMsgObj.dealplyEval === "string" && popEyeMsgObj.dealplyEval !== null && popEyeMsgObj.dealplyEval==="SUSPEND-OK") {
		clearInterval(suspendIntervalId);
		dealPlyUtils.handleSuspendSelectedOption();
	}
}

DealPlyUtilsCls.prototype.setPopEyeMessages = function(elementSelector){
	if (window.addEventListener) { // all browsers except IE before version 9
		window.addEventListener("message", OnMessage, false);
	} else {
		if (window.attachEvent) { // IE before version 9
			window.attachEvent("onmessage", OnMessage);
		}
	}
	var maxMessagesSent = 15;
	dealPlyUtils.sendWhenDone("popeyeReady");
	if (dpQuery(elementSelector).length > 0) {
		intervalID = window.setInterval(function() {
			maxMessagesSent--;
			if (maxMessagesSent == 0) {
				window.clearInterval(intervalID);
				window.location.replace('no-offers.html?test='+testParam);
			}
			dealPlyUtils.sendWhenDone("popeyeReady");
		}, 10000);
	}
	
};

var langTwoChars = dpVariables.langauge_two_chars;



