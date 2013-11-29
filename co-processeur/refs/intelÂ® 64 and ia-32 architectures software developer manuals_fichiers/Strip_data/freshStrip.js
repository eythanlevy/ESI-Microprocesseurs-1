var dealplyMainImageSelector = dpVariables.mainImageSelector;
var dealplyToastWidthInteger;

var dpFreshABPartners = {amaz:true,dcab:true,gets:true,atom:true,sugg:true};
var dpFreshAB = -1;
var dpBigFlach = 0;
dealPlyUtils.productId = 42;
if (dpFreshABPartners[dpVariables.partner.toLowerCase()]){
	dpFreshAB = 1;
	dealPlyUtils.productId = 4333;
} else if (screen.width === 1366 && screen.height === 768){
	dpBigFlach = dealPlyUtils.getABTestNum('lrgrStripAB',4);
	dealPlyUtils.productId = 4302 + dpBigFlach;
}

var dealplyNumOfProducts = dealPlyUtils.deals.length;
if(dealplyNumOfProducts > 4){
	dealplyNumOfProducts = 4;
}

//var isSkyLighterVertical = true;
var dealplySkyLighterType = dpVariables.skyLighterType;
var isSkyLighterVertical = true;
if(dealplySkyLighterType === "horizontal"){
	isSkyLighterVertical = false;
}

DealPlyUtilsCls.prototype.setHoverImage = function(){}

function isDpPartnerAllowedForSkyLighter(partner){
		return true;
		var partnerArr = ["c2s","stuner" ,"bcool","fsave","wxd","bflix","codecc","saveas","saven","spsave","fbcolor","savebc"];
		for(var  i = 0 ; i < partnerArr.length ; i++ ){
			if(partner == partnerArr[i]){
				return true;
			}
		}
		return false;
	}
	
	
	function isSkyLighterAllowedByPage(){
		if(dealplyMainImageSelector !== "") {
			return true;
		}
		return false;
	}
	
	function isSkyLighterAllowedByWidth(){
		if ( isSkyLighterVertical  === false ){
			return true
		}
		if(screen.width < 1124 ){
			return false;
		}
		return true;
	}
	
	var skyLighterAB = -1;
	
	//flachon/sky-lighter creation!! 
	
	if(isSkyLighterAllowedByPage() && isDpPartnerAllowedForSkyLighter(dpVariables.partner) && isSkyLighterAllowedByWidth()){
		
		if (dealplyLangTwoChars == 'fr'){
			dealPlyUtils.productId = '4447';//'4007';
			skyLighterAB = 2; 
		} else {
			dealPlyUtils.productId = '4445';//'4004';
		}
		if(document.URL.search("#additionaliframe")==-1  ){
			
			dealPlyUtils.injectAdditionalFrameToThePage();	
		}else{
			dealplyChosenIframe = "additional";
			dpQuery(document).ready(function(){
				dpQuery("body").removeAttr("id");
				dpQuery("body").attr("id","addit");
				if(isSkyLighterVertical == true ){
					dpQuery("body").attr("class","vert");
				}else{
					dpQuery("body").attr("class","hori");
				}
			});
			
		}	
	}
	
	
	


var removeBr = dpVariables.strings.MORE_DEALS2;
removeBr = removeBr.replace("<BR/>",'');

var dealplyKeysEncodes = dpVariables.keyWordsEncoded;
var toastHeights = ['143px','153px','149px','143px'];
var toastHeight = toastHeights[dpBigFlach];
var botLeftBorderRad = 0;
var dealplyToastWidthInteger = 29;
var toastWidths = [dealplyToastWidthInteger + dealplyNumOfProducts*230,1061,1029,997];
var dealplyToastWidth = toastWidths[dpBigFlach];

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

var strCssPos = 'dpQuery("'+ dpFrameId +'").css({"width":"'+dealplyToastWidth +'px" , "bottom":"0px" , "overflow-x":"hidden" , "display" : "block" , "border-bottom" :"solid 0px #ccc" , '+
'			"position":"fixed" , "border-top-left-radius" : "10px", "-webkit-border-top-left-radius":"10px","-webkit-border-bottom-left-radius":"'+botLeftBorderRad+'px","-moz-border-radius-topleft":"10px",'+
'			"-moz-border-radius-bottomleft":"'+botLeftBorderRad+'px","border-top-left-radius":"10px","border-bottom-left-radius":"'+botLeftBorderRad+'px" , "right" :"0px"  , "z-index" :"9999999999999",'+
'			"margin-bottom": "0px" , "margin-top": "-22px" , "visibility":"visible" }).attr("allowTransparency","true");' ;

var langTwoChars = dpVariables.langauge_two_chars;
var greenBGSupportedLangs = {de:true,dk:true,en:true,es:true,fr:true,it:true,jp:true,nl:true,no:true,pt:true,ru:true,se:true,tr:true,pl:true};
var dpGetDealText = dpVariables.strings.GET_DEAL+">>";
if(langTwoChars.search("ru")!== -1){
	dpGetDealText = dealPlyUtils.sub_desc(dpVariables.strings.GET_DEAL,22);
	dpGetDealText +=">>";
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
		dpQuery("#flach .sideControls#dealplySettings").toggleClass('open');

		dpQuery("#closeSuspendWidget").click(function(e){
			//dpQuery("#dealplySettingButton").css("display","block");
			dpQuery("#dealplySuspend").hide();
			dpQuery("#flach .sideControls#dealplySettings").removeClass('open');
		});
	});

};

DealPlyUtilsCls.prototype.quickEventJsonData = function(topic){
	return {
		topic:topic,
		interactionId:dpVariables.interactionId,
		partner:dpVariables.partner,
		channel:dpVariables.channel,
		hid:dpVariables.hid
	};
}

DealPlyUtilsCls.prototype.goto999 = function(){
	dealPlyUtils.gotoDeal(0 ,999);
	var url = dpQuery(".prod_desc > a" ).last().attr("linkto");
	window.open(url, '_blank');
}

function openLegal(){
	DealPlyEdenCommon.reportQuick({
		topic:'strip_legal',
		interactionId:dpVariables.interactionId,
		partner:dpVariables.partner,
		channel:dpVariables.channel,
		hid:dpVariables.hid,
		product : dealPlyUtils.productId
	});
	dealPlyUtils.openDialogWindow(dpVariables.poweredByFinal+' - Legal',legalHtmlString,460,180);
}

	
dpQuery(document).ready(function(){
	
	dealPlyUtils.insert_content();
		
	// add ratings, featured and additional data to deals
	if (dpQuery('#flach').length>0){
		var itter_max = 4;
		if(dealPlyUtils.deals.length<itter_max){
			itter_max = dealPlyUtils.deals.length;
		}
		var curDeal, hasPayments;
		for(var i=0;i<itter_max;i++){
			child_index=i+2;
			curDeal = dealPlyUtils.deals[i];
			// check if there's rating
			hasPayments = typeof curDeal.payments !== 'undefined' && curDeal.payments.trim() !== ''; 
			if (typeof curDeal.rating === 'undefined' || curDeal.rating<4){
				dpQuery('li:nth-child('+child_index+') .starsWrap').remove();
			} else {
				var rating = curDeal.rating;
				var fullStars = Math.floor(rating);
				var isHalfStar = Math.round(rating) > fullStars;
				var emptyStarsStart = isHalfStar ? fullStars + 1 : fullStars;
				var starsEl = dpQuery('li:nth-child('+child_index+') .star');
				for (var j=0;j<fullStars;j++){
					dpQuery(starsEl[j]).show();
				}
				if (isHalfStar) {
					dpQuery(starsEl[fullStars]).addClass('star_half').show();
				}
				for (var j=emptyStarsStart;j<5;j++){
					dpQuery(starsEl[j]).addClass('star_empty').show();
				}
				// set number of reviews if possible, otherwise - remove element
				if (typeof curDeal.numOfProductRaters !== 'undefined' && curDeal.numOfProductRaters>0 && curDeal.numOfProductRaters<10000){
					dpQuery('li:nth-child('+child_index+') .ratersAmount').text('('+curDeal.numOfProductRaters+')');
				} else {
					dpQuery('li:nth-child('+child_index+') .numOfRaters').remove();
				}
			}	
			// set discount badge and featured banner
			if (curDeal.discountPercentage > 0){
				dpQuery('li:nth-child('+child_index+') .dealDiscount').text('-'+curDeal.discountPercentage+'%');
				dpQuery('li:nth-child('+child_index+') .dealDiscount').show();
				if (!hasPayments){
					var priceBefore = (100*curDeal.productPrice)/(100-curDeal.discountPercentage);
					priceBefore = Math.floor(priceBefore * 100) / 100;

					if(/[0-9.,]$/.test(curDeal.productPriceWithCurrencySymbol)){
						dpQuery('li:nth-child('+child_index+') .priceBefore').text(curDeal.productPriceCurrencySymbol + priceBefore);
					}else{
						dpQuery('li:nth-child('+child_index+') .priceBefore').text(priceBefore + curDeal.productPriceCurrencySymbol);
					}
					
					dpQuery('li:nth-child('+child_index+') .logo').addClass('withDiscount');
					dpQuery('li:nth-child('+child_index+') .retailerTitle').addClass('withDiscount');
					dpQuery('li:nth-child('+child_index+') .priceBefore').css('height','14px');
					//dpQuery('li:nth-child('+child_index+') .priceBefore').show();
				}
			}
			if (curDeal.isFeatured && !hasPayments){
				dpQuery('li:nth-child('+child_index+') .featuredBan').show();
				dpQuery('li:nth-child('+child_index+') .logo').addClass('withDiscount');
				dpQuery('li:nth-child('+child_index+') .retailerTitle').addClass('withDiscount');
				dpQuery('li:nth-child('+child_index+') .priceBefore').css('height','14px');
				//dpQuery('li:nth-child('+child_index+') .priceBefore').show();
			}
			if (hasPayments){
				dpQuery('li:nth-child('+child_index+') .payments').text(dealPlyUtils.sub_desc(curDeal.payments,40));
				dpQuery('li:nth-child('+child_index+') .rightDiv').addClass('withPayments');
				dpQuery('li:nth-child('+child_index+') .priceBefore').hide();
			}
			// set additional notes
			if (curDeal.dealNotes !== ""){
				dpQuery('li:nth-child('+child_index+') .offerMoreData').text(dealPlyUtils.sub_desc(curDeal.dealNotes,100));
				dpQuery('li:nth-child('+child_index+') .offerMoreData').addClass('hasMoreData');
			}
		}
			
		dpQuery('li .numOfRaters span.numOfRatersTxt').text(dpVariables.strings.REVIEWS_TEXT);
	}
	// end of add ratings, featured and additional data to deals		
	
	// changes according to dpVariables
	if (greenBGSupportedLangs[langTwoChars]){ 
		dpQuery('#flach #dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/strip/ttls/green/'+langTwoChars+'_dealsTitle.png)');
	}else{
		dpQuery('#flach #dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/strip/ttls/green/en_dealsTitle.png)');
	}
	dpQuery('.dealply_container').addClass(langTwoChars+'lang');
	if (dpFreshAB <= 0){
		dpQuery('.powered_by_link').prepend(dpVariables.strings.TOAST_POWERED_BY_PREFIX+' ');
		dpQuery('.powered_by_link').attr('style', dpVariables.Affiliate.getPoweredByElem.style);
		if (dpVariables.Affiliate.getPoweredByElem.style.indexOf('display:none') !== -1){
			dpQuery('.powered_by').attr('style', dpVariables.Affiliate.getPoweredByElem.style);
		}
	}
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
		dpQuery('#dealplyFaqButton').attr('title','what\'s this');
		dpQuery('#dealplyFaqLink').attr('target','');
	}
	// end changes according to dpVariables
	/*if(typeof dpVariables !== 'undefined' && typeof dpVariables.Affiliate  !== 'undefined' && dpVariables.Affiliate.isDoPixel !== 'undefined'  && dpVariables.Affiliate.isDoPixel === true && dpVariables.channel !== 'null' && dpVariables.partner !== 'null' && dpVariables.partner !== 'dealply' && typeof dpVariables.channel !== 'undefined' && typeof dpVariables.partner !== 'undefined' && dpVariables.partner !== null && dpVariables.partner !== null){
		dpQuery('#rmSecondImg').attr('src','http://ad.yieldmanager.com/pixel?id='+dpVariables.dpRMXPixelRegionId+'&t=2');
	}*/
	
	
	dpQuery("#dealplyWidgetControlPanel").click(function(){
		dealPlyUtils.goto999();
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
	
	if(dpVariables.Affiliate.getPoweredByTextUnderlineElem.style.search("underline")!=-1 && dpFreshAB <= 0){
		
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
	
	
	DealPlyUtilsCls.prototype.hoverProductImage = function(){
			var dealplyCmdMinWidth = 'dpQuery("'+ dpFrameId +'").css({'+ dealplyToastWidth +' });';
			var dealplyCmdMaxWidth= 'dpQuery("'+ dpFrameId +'").css("width", "215px");';
			if(isSkyLighterVertical == false){
				dealplyCmdMaxWidth= 'dpQuery("'+ dpFrameId +'").css("width", "500px");';
			
			}
			
			var dealPlyUtils = this;
			var defaultWidth = "53px";
			if(dealplyLangTwoChars.search("pt") !== -1){
				defaultWidth = "60px";
			}
			
			dpQuery("#addit .offer_block").hover(function(){
				DealPlyInteropInner.sendCommand(dealplyCmdMaxWidth);
				dpQuery(this).find(".rightDiv").css("visibility","visible");
				
				dpQuery(this).css({"width" : "190px" , "overflow":"hidden"});
				
			
			},
				function(){
					DealPlyInteropInner.sendCommand(dealplyCmdMinWidth);
					dpQuery(this).css({"width" : defaultWidth , "overflow":"hidden"});
					dpQuery(this).find(".rightDiv").css("visibility","hidden");
					dpQuery(this).find(".price").css("visibility","visible");
					//dpQuery(this).find(".rightDiv").hide();
			
			});
					
					
		
			};
			
		dealPlyUtils.hoverProductImage();
		dpQuery("#addit .getDealText").html(dpGetDealText);
		
		//sky lighter AB testing
		if (skyLighterAB != -1){
			dpQuery('#addit').addClass('addit'+skyLighterAB);
			dpQuery("#getDealImage").attr('src', '/resources/eden/green/getdealimages/get_deal_tit_fr_'+skyLighterAB+'.png')
		}
		
		dealPlyUtils.handleDynamicPoweredBy();
		if (dpBigFlach>0){
			dpQuery('#flach').addClass('bigFlach'+dpBigFlach);
		}
		if (dpFreshAB>0){
			dpQuery('#flach').addClass('dpFreshAB');
			dpQuery('.powered_by_link a#powered_by_powered').text(dpVariables.poweredByFinal);
			if (dpVariables.itype === 'i'){
				if (dpVariables.poweredByTextForAffiliate.toLowerCase() !== dpVariables.poweredByFinal.toLowerCase()){
					if (langTwoChars === 'jp'){
						dpQuery('.powered_by_link').prepend('<a target="_blank" href="'+dpVariables.Affiliate.getPoweredByElem.href+'" id="powered_by_brought">'+dpVariables.poweredByTextForAffiliate+'</a>'+dpVariables.strings.BROUGHT_2U_BY+' ');
						dpQuery('.powered_by_link').append(dpVariables.strings.POWERED_BY_BROUGHT+' :: ');
					}else{
						dpQuery('.powered_by_link').prepend(dpVariables.strings.BROUGHT_2U_BY+' <a target="_blank" href="'+dpVariables.Affiliate.getPoweredByElem.href+'" id="powered_by_brought">'+dpVariables.poweredByTextForAffiliate+'</a> :: '+dpVariables.strings.POWERED_BY_BROUGHT+' ');
					}
				} else {
					dpQuery('.powered_by_link').prepend(dpVariables.strings.TOAST_POWERED_BY_PREFIX+' ');
				}
			}
			dpQuery('.powered_by_link a#powered_by_powered').attr('href',dpVariables.poweredByFinalUrl);
			dpQuery('#dpInfoButton').show();
			dpQuery('#dpInfoButton').click(function(){
				var supoprtQckUrl = DealPlyEdenCommon.getQuickURL(dealPlyUtils.quickEventJsonData('suspend_info_sup'));
				var uninstQckUrl = DealPlyEdenCommon.getQuickURL(dealPlyUtils.quickEventJsonData('suspend_info_uninst'));
				dealPlyUtils.openDialogWindow(	dpVariables.poweredByFinal+' Suspend',
												'We are doing our best to bring you the best deals & coupons. '+
												'However, we understand if you are not interested in this service anymore so we allow you to suspend it.<br />'+
												'Don\'t hesitate to contact our support service: <a style="color:#000; text-decoration:underline; cursor:pointer;" onclick="dpQuery.sendQckNRedirect(\''+supoprtQckUrl+'\',\'mailto:'+dpVariables.poweredBySupEmail+'\')">'+dpVariables.poweredBySupEmail+'</a><br />'+
												'If you wish to uninstall the deals service <a style="color:#000; text-decoration:underline; cursor:pointer;" onclick="dpQuery.sendQckNRedirect(\''+uninstQckUrl+'\',\''+dpVariables.poweredByUninstlUrl+'\')">click here</a><br />',
												460,180);
			});
			
		}
});//end of ready 