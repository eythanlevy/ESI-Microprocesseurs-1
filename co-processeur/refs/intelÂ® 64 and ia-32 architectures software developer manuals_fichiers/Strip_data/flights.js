var dealplyToastWidthInteger;
//var blueSkin = false;

//AB TEST
DealPlyEdenPersistencyHttpCookies.deleteCookie("sky_layout");
DealPlyEdenPersistencyHttpCookies.deleteCookie("blue");

/*var blueSkin=false;
var blueSkinCookie = DealPlyEdenPersistencyHttpCookies.getCookie("blue");

if(typeof blueSkinCookie === "undefined" || blueSkinCookie === null) {
	randomNumber = parseInt(Math.random()*2);
	if(randomNumber>0){
		blueSkinCookie = "true";
	}else{
		blueSkinCookie = "false";
	}
	
	DealPlyEdenPersistencyHttpCookies.setCookie("blue", blueSkinCookie);
if(blueSkinCookie.indexOf("true")==-1){
	blueSkin=false;
}else{
	dealPlyUtils.productId = '302';
	blueSkin=true;
}
}
*/

dealPlyUtils.productId = '301';
	
	
var dealplyNumOfProducts = dealPlyUtils.deals.length;
if(dealplyNumOfProducts > 4){
	dealplyNumOfProducts = 4;
}



DealPlyUtilsCls.prototype.closeWidget= function(){
	dpQuery('#dealplyCloseButton').live('click',function()
			{
			
				dpQuery("#dealplyItemsList").animate({"right":"-800px"},400);
				var dealplyCmd ='dpQuery("'+ dpFrameId +'").hide();';
				DealPlyInteropInner.sendCommand(dealplyCmd);
				DealPlyEdenCommon.googleAnalytics("Close");
				var url = "http://qck.dpstack.com/dealdo/event-report?type=quick&topic=closeWidget&interactionId="+dpVariables.interactionId;
				var cmd = "var dpiframe=document.createElement(\"iframe\");dpQuery(dpiframe).attr(\"width\",\"1\");dpQuery(dpiframe).attr(\"height\",\"1\");dpQuery(dpiframe).css(\"top\",\"-10000px\");dpQuery(dpiframe).css(\"left\",\"-10000px\");dpQuery(dpiframe).css(\"position\",\"absolute\");dpQuery(dpiframe).css(\"visibility\",\"visible\");dpQuery(\"body\").append(dpiframe);dpQuery(dpiframe).attr(\"src\",\""+url+"\");"
				DealPlyInteropInner.sendCommand(cmd);
			}
	);

};


DealPlyUtilsCls.prototype.setHoverImage = function(){
	
};

var removeBr = dpVariables.strings.MORE_DEALS2;
removeBr = removeBr.replace("<BR/>",'');

var dealplyKeysEncodes = dpVariables.keyWordsEncoded;
var toastHeight = "136px";
var dealplyToastWidthInteger = 26;

var offerWidth = 230;

var dealplyToastWidth = '"width" : "'+ (dealplyToastWidthInteger + (dealplyNumOfProducts)*offerWidth)  +'px"';

var useAnimation = true;

var heightStyle = 'dpQuery("'+ dpFrameId +'").css("height", "1px");';
if(useAnimation) {
	
	heightStyle = heightStyle +
		'dpQuery("'+ dpFrameId +'").animate({height: "' + toastHeight + '"}, 170);';
} else {
	heightStyle = heightStyle +
		'dpQuery("'+ dpFrameId +'").animate({height: "' + toastHeight + '"}, 170);';
}

var domLocationToInsertTheIframe = '';

var strCssPos = 'dpQuery("'+ dpFrameId +'").css({'+dealplyToastWidth +' , "bottom": "3px" , "overflow-x":"hidden" , "display" : "block" , "border-bottom" :"solid 0px #ccc" , '+
'			"position":"fixed" , "border-top-left-radius" : "10px", "border-bottom-left-radius" : "10px" , "right" :"0px"  , "z-index" :"9999999999999" , "margin-bottom": "2px" , "margin-top": "-22px" , "visibility":"visible" })'+
'			.attr("allowTransparency","true");' ;

var langTwoChars = dpVariables.langauge_two_chars;
var flightSupportedLangs = {de:false,dk:false,en:false,es:false,fr:false,it:false,jp:false,nl:false,no:false,pt:true,ru:false,se:false,tr:false,pl:false};
var dpGetDealText = dpVariables.strings.PRICE_STARTS_FROM;
if(langTwoChars.search("br")== -1){
	dpGetDealText = "";
}

var shouldExtendFrameHeight = false;
if(langTwoChars.search("it")!==-1 || langTwoChars.search("de")!==-1){
	shouldExtendFrameHeight = true;
}

var shouldExtendFrameWidth = false;
if(langTwoChars.search("pt")!==-1){
	shouldExtendFrameWidth = true;
}

if(dealplyChosenIframe == "additional"){
		//var domLocationToInsertTheIframe = 'dpQuery("body").append("'+ dpFrameId +'")';
		toastHeight = (132 + (dealplyNumOfProducts - 1)*71) +'px';
		if(shouldExtendFrameHeight){
			toastHeight = (147 + (dealplyNumOfProducts - 1)*71) +'px';
			}
		
		if(isSkyLighterVertical == false){
			
			toastHeight = "72px";
			if(shouldExtendFrameHeight){
				toastHeight = "97px";
				}
			}

	
		
		
		useAnimation = true;

		heightStyle = 'dpQuery("'+ dpFrameId +'").css("height", "1px");';
		if(useAnimation) {
			
			heightStyle = heightStyle +
				'dpQuery("'+ dpFrameId +'").animate({height: "' + toastHeight + '"}, 170);';
		} else {
			heightStyle = heightStyle +
				'dpQuery("'+ dpFrameId +'").animate({height: "' + toastHeight + '"}, 170);';
		}
		
		
		
		
		dealplyToastWidthInteger = 70;
		if(isSkyLighterVertical == false){			
			dealplyToastWidthInteger = 70 + 61*dealplyNumOfProducts;
			if(shouldExtendFrameWidth){
				dealplyToastWidthInteger = 70 + 68*dealplyNumOfProducts;
			}
		}
	
		dealplyToastWidth = '"width": "'+ dealplyToastWidthInteger +'px"';
		
		strCssPos = 'dpQuery("'+ dpFrameId +'").css({'+ dealplyToastWidth +' , "top": dpQuery("'+ dealplyMainImageSelector + '").offset().top  , "overflow-x":"hidden" , "display" : "block" , "border-bottom" :"solid 0px #ccc" , '+
		'			"position":"absolute" , "left" :  dpQuery("'+ dealplyMainImageSelector + '").offset().left - '+ dealplyToastWidthInteger*1 +' , "z-index" :"9999999999999" , "margin-bottom": "2px"  , "visibility":"visible" ,"background-color":"transparent"});' ;
		
		
		if(isSkyLighterVertical == false){
			strCssPos = 'dpQuery("'+ dpFrameId +'").css({'+ dealplyToastWidth +' , "top": dpQuery("'+ dealplyMainImageSelector + '").offset().top  , "overflow-x":"hidden" , "display" : "block" , "border-bottom" :"solid 0px #ccc" , '+
			'			"position":"absolute" , "left" :  dpQuery("'+ dealplyMainImageSelector + '").offset().left + 5 , "z-index" :"9999999999999" , "margin-bottom": "2px"  , "visibility":"visible" ,"background-color":"transparent"});' ;
			
		}
	}




var dealplyIframeStyleToManipulate ='dpQuery("'+ dpFrameId +'").removeAttr("style");'+ strCssPos + heightStyle + domLocationToInsertTheIframe;

if("#dpAdditionalFrame" === dpFrameId){
	DealPlyUtilsCls.prototype.dealplyCmd = dealPlyUtils.iframeManipulation(dealplyIframeStyleToManipulate,dpFrameId);
}else{
	DealPlyUtilsCls.prototype.dealplyCmd = dealPlyUtils.iframeManipulation(dealplyIframeStyleToManipulate);
}


DealPlyUtilsCls.prototype.closeSuspendBox = function(){
	//cancel out existing function
};
DealPlyUtilsCls.prototype.openSuspendBox = function(){
	var obj = this;
	dpQuery("#dealplySettings").click(function(){
		dpQuery("#dealplySuspend").toggle();
		dpQuery(".sideControls#dealplySettings").toggleClass('open');

		dpQuery("#closeSuspendWidget").click(function(e){
			//dpQuery("#dealplySettingButton").css("display","block");
			dpQuery("#dealplySuspend").hide();
			dpQuery("#flach .sideControls#dealplySettings").removeClass('open');
		});
	});

};


	
dpQuery(document).ready(function(){
	dealPlyUtils.insert_content();
		
	
	// changes according to dpVariables
	if(langTwoChars.search("pt")>=0){
		dpQuery('#dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/flights/ttls/pt_flts_ttl.png)');
	}else if(langTwoChars.search("fr")>=0){
		dpQuery('#dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/flights/ttls/fr_flts_ttl.png)');
	}else if(langTwoChars.search("dk")>=0){
		dpQuery('#dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/flights/ttls/dk_flts_ttl.png)') ;
	}else if(langTwoChars.search("no")>=0){
		dpQuery('#dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/flights/ttls/no_flts_ttl.png)') ;;
	}else if(langTwoChars.search("it")>=0){
		dpQuery('#dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/flights/ttls/it_flts_ttl.png)') ;;
	}else if(langTwoChars.search("es")>=0){
		dpQuery('#dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/flights/ttls/es_flts_ttl.png)') ;;
	}else if(langTwoChars.search("se")>=0){
		dpQuery('#dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/flights/ttls/se_flts_ttl.png)') ;;
	}else {
		dpQuery('#dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/flights/ttls/uk_flts_ttl.png)') ;
	}
	
	dpQuery('.dealply_container').addClass(langTwoChars+'lang');
	if (langTwoChars === 'en' && dpVariables.poweredByTextForAffiliate.length > 13){
		dpQuery('.powered_by_link').prepend('by ');
	} else {
		dpQuery('.powered_by_link').prepend(dpVariables.strings.TOAST_POWERED_BY_PREFIX+' ');
	}
	var old_width = dpQuery('.powered_by_link').width();
	dpQuery('.powered_by_link').attr('style', dpVariables.Affiliate.getPoweredByElem.style);
	dpQuery('.powered_by_link').css("width",old_width);
	dpQuery('.powered_by_link').attr('href', dpVariables.Affiliate.getPoweredByElem.href);
	if(dpVariables.Affiliate.getPoweredByElem.href.search("javascript:void(0)")!== -1){
		
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
	if (dpVariables.Affiliate.getHelpElem.href === 'javascript:DealPlyEdenToast.handleHelpClick();void(0);'){
		dpQuery('#dealplyFaqLink').attr('href', 'http://www.dealply.com/faq/');
	} else {
		dpQuery('#dealplyFaqLink').attr('href', dpVariables.Affiliate.getHelpElem.href);
	}
	if (dpVariables.partner.indexOf('ctmamf')===0){
		dpQuery('#dealplySettings').hide();
		dpQuery('#dealplySettingButton').hide();
		dpQuery('#dealplyWhatsThisLink').show();
	}
	// end changes according to dpVariables
	/*if(typeof dpVariables !== 'undefined' && typeof dpVariables.Affiliate  !== 'undefined' && dpVariables.Affiliate.isDoPixel !== 'undefined'  && dpVariables.Affiliate.isDoPixel === true && dpVariables.channel !== 'null' && dpVariables.partner !== 'null' && dpVariables.partner !== 'dealply' && typeof dpVariables.channel !== 'undefined' && typeof dpVariables.partner !== 'undefined' && dpVariables.partner !== null && dpVariables.partner !== null){
		dpQuery('#rmSecondImg').attr('src','http://ad.yieldmanager.com/pixel?id='+dpVariables.dpRMXPixelRegionId+'&t=2');
	}*/
	
	
	dpQuery("#dealplyWidgetControlPanel").click(function(){
		dealPlyUtils.gotoDeal(0 ,999);
		var url = dpQuery(".prod_desc > a" ).last().attr("linkto");
		window.open(url, '_blank');
	});
	/*dpQuery("#dealplyRelatedOfferTextPanel").css("cursor","pointer").click(function(){
		dpQuery("#greenAreaClickable").click();
	});*/
	
	dpQuery("#xSpan").hover(function(){
			dpQuery(this).css("font-weight","bold");
	},
	function(){
		dpQuery(this).css("font-weight","normal");
	});
	
	if(dpVariables.Affiliate.getPoweredByTextUnderlineElem.style.search("underline")!=-1 ){
		
		dpQuery(".powered_by span").hover(function(){
			dpQuery(this).css("text-decoration","underline");
		},
		function(){
			dpQuery(this).css("text-decoration","none");
		});
	}else{
		dpQuery(".powered_by span").css("cursor","default");
	}
	
	str= '<span style = "text-decoration:none; position:absolute; top:35px; " ><< </span><span style ="position:absolute; left:25px;">'+dpVariables.strings.MORE_DEALS2+'</span> ';
	dpQuery("#dpShopNoStar").html(str);
	if(dpVariables.langauge_two_chars == 'fr' || dpVariables.langauge_two_chars == 'jp'){
		dpQuery("#dpShopNoStar span").eq(1).css({"bottom": "-32px"});
	}
	
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
					wvdpwhiteLable =  wvdpwhiteLable.trim();
					if(wvdpwhiteLable == 'dealply'){
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
		} catch(dealplyE) {
			//DealPlyEdenToast.reportError(dealplyE);
		}
	};
	
	
	
		dpQuery("#addit .getDealText").html(dpGetDealText);
		
		
		
		dealPlyUtils.handleDynamicPoweredBy();
		var width = -dpQuery("#dealplyWidgetControlPanel").width();
		dpQuery("li .offer_block").each(function(){width+=dpQuery(this).outerWidth();});
		dpQuery("#crossStripSplash").css("width",width);
		if(dpQuery("li .offer_block").length==3){
			dpQuery("#crossStripSplash").css("margin-top","8px");
		}else if(dpQuery("li .offer_block").length==4){
			dpQuery("#crossStripSplash").css("margin-top","1px");
			dpQuery(".powered_by_border").css("left","32px");			
		}else if(dpQuery("li .offer_block").length==2){
			dpQuery("#crossStripSplash").css("margin-top","17px");
			dpQuery(".powered_by_border").css("left","28px");			
		}
		
		
});//end of ready 




