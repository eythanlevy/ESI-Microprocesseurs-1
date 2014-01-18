var dealplyMainImageSelector = dpVariables.mainImageSelector;
var dealplyToastWidthInteger;
var dpFreshAB = 0;
dealPlyUtils.productId = 456;

var dealplyNumOfProducts = dealPlyUtils.deals.length;
if(dealplyNumOfProducts > 4){
	dealplyNumOfProducts = 4;
}

DealPlyUtilsCls.prototype.setHoverImage = function(){}


var removeBr = dpVariables.strings.MORE_DEALS2;
removeBr = removeBr.replace("<BR/>",'');

var dealplyKeysEncodes = dpVariables.keyWordsEncoded;
var toastHeight = "143px";
var botLeftBorderRad = 0;
var dealplyToastWidthInteger = 29;

var dealplyToastWidth = dealplyToastWidthInteger + dealplyNumOfProducts*223;

var heightStyle = 'dpQuery("'+ dpFrameId +'").css("height", "1px");';
heightStyle = heightStyle + 'dpQuery("'+ dpFrameId +'").animate({height: "' + toastHeight + '"}, 170);';

var domLocationToInsertTheIframe = '';

var strCssPos = 'dpQuery("'+ dpFrameId +'").css({"width":"'+dealplyToastWidth +'px" , "bottom":"0px" , "overflow-x":"hidden" , "display" : "block" , "border-bottom" :"solid 0px #ccc" , '+
'			"position":"fixed" , "border-top-left-radius" : "10px", "-webkit-border-top-left-radius":"10px","-webkit-border-bottom-left-radius":"'+botLeftBorderRad+'px","-moz-border-radius-topleft":"10px",'+
'			"-moz-border-radius-bottomleft":"'+botLeftBorderRad+'px","border-top-left-radius":"10px","border-bottom-left-radius":"'+botLeftBorderRad+'px" , "right" :"0px"  , "z-index" :"9999999999999",'+
'			"margin-bottom": "0px" , "margin-top": "-22px" , "visibility":"visible" }).attr("allowTransparency","true");' ;

var langTwoChars = dpVariables.langauge_two_chars;

var shouldExtendFrameHeight = false;
if(langTwoChars.search("it")!==-1 || langTwoChars.search("de")!==-1){
	shouldExtendFrameHeight = true;
}

var shouldExtendFrameWidth = false;
if(langTwoChars.search("pt")!==-1){
	shouldExtendFrameWidth = true;
}


var dealplyIframeStyleToManipulate ='dpQuery("'+ dpFrameId +'").removeAttr("style");'+ strCssPos + heightStyle + domLocationToInsertTheIframe;
DealPlyUtilsCls.prototype.dealplyCmd = dealPlyUtils.iframeManipulation(dealplyIframeStyleToManipulate);

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
	dealPlyUtils.openDialogWindow(dpVariables.poweredByFinal+' - Legal',legalHtmlString,460,450);
}

DealPlyUtilsCls.prototype.insert_content = function(){
	var obj = this;
	var deals = this.deals;
	var sub_desc = this.sub_desc;
	if(deals.length==0 || !deals){
		dpQuery('.dealply_container').hide();
	}
	var itter_max = Math.min(4, deals.length);
	var template = dpQuery('#dpDealBoxTmplt'),
		liElement;
	for(var i=0;i<itter_max;i++){
		liElement = dpQuery('<li></li>');
		liElement.append(template.html());		
		dpQuery('.offer_block', liElement).addClass('offer_block'+i);
		if (i === itter_max-1) dpQuery('.offer_block', liElement).addClass('last_offer');
		dpQuery('.offer_block', liElement).attr('rel',i);
		var hotelNameMaxLength = 30;
		var hotelLocMaxLength = 23;
		if (typeof deals[i].faviconUrl !== 'undefined' && deals[i].faviconUrl.trim() !== '' && deals[i].faviconUrl !== 'na'){
			dpQuery('.prod_image', liElement).attr('src',deals[i].faviconUrl);
		} else {
			dpQuery('.offer_block', liElement).addClass('noImg');
			hotelNameMaxLength = 50;
			hotelLocMaxLength = 33;
		}
		dpQuery('.prod_desc a', liElement).html(sub_desc(deals[i].productTitle, hotelNameMaxLength));
		dpQuery('.hotelLocation', liElement).html(sub_desc(deals[i].additionalData.LOCATION, hotelLocMaxLength));
		dpQuery('.price', liElement).html(deals[i].productPriceWithCurrencySymbol);
		dpQuery('a', liElement).attr('linkto',deals[i].url);
		if (typeof deals[i].rating === 'undefined' || deals[i].rating === 0){
			dpQuery('.starsWrap', liElement).remove();
		} else {
			var rating = Math.min(deals[i].rating,5);
			var fullStars = Math.floor(rating);
			var isHalfStar = Math.round(rating) > fullStars;
			var emptyStarsStart = isHalfStar ? fullStars + 1 : fullStars;
			var starsEl = dpQuery('.star', liElement);
			for (var j=0;j<fullStars;j++){
				dpQuery(starsEl[j]).show();
			}
			if (isHalfStar) {
				dpQuery(starsEl[fullStars]).addClass('star_half');
			}
			for (var j=emptyStarsStart;j<5;j++){
				dpQuery(starsEl[j]).addClass('star_empty');
			}
		}	
		
		dpQuery('ul.offers_ul').append(liElement);
		liElement.show();
	}
	
	obj.handleDynamicPoweredBy();

	dealPlyUtils.listenToClick();
};

	
dpQuery(document).ready(function(){
	
	dealPlyUtils.insert_content();
	
	// changes according to dpVariables
	var greenBGSupportedLangs = {pt:true,fr:true};
	if (greenBGSupportedLangs[langTwoChars]){ 
		dpQuery('#flach #dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/hotels/ttls/'+langTwoChars+'.png)');
	}else{
		dpQuery('#flach #dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/hotels/ttls/en.png)');
	}
	dpQuery('.dealply_container').addClass(langTwoChars+'lang');
	if (dpFreshAB <= 0){
		if (langTwoChars === 'en' && dpVariables.poweredByTextForAffiliate.length > 13){
			dpQuery('.powered_by_link').prepend('by ');
		} else {
			dpQuery('.powered_by_link').prepend(dpVariables.strings.TOAST_POWERED_BY_PREFIX+' ');
		}
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
	
	
	dpQuery("#dealplyWidgetControlPanel").click(function(){
		dealPlyUtils.goto999();
	});
	
	dpQuery("#xSpan").hover(function(){
			dpQuery(this).css("font-weight","bold");
	},
	function(){
		dpQuery(this).css("font-weight","normal");
	});
	
	if(dpVariables.Affiliate.getPoweredByTextUnderlineElem.style.search("underline")!=-1){
		
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
			var dealPlyUtils = this;
			var defaultWidth = "53px";
			if(dealplyLangTwoChars.search("pt") !== -1){
				defaultWidth = "60px";
			}
		};
			
		dealPlyUtils.hoverProductImage();
		
		dealPlyUtils.handleDynamicPoweredBy();

});//end of ready 