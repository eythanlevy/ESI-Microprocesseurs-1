var dealplyNumOfProducts = dealPlyUtils.deals.length;
if(dealplyNumOfProducts > 3){
	dealplyNumOfProducts = 3;
}

dealPlyUtils.productId = 200;

DealPlyUtilsCls.prototype.setHoverImage = function(){}

//var isFlach = true;

var removeBr = dpVariables.strings.MORE_DEALS2;
removeBr = removeBr.replace("<BR/>",'');

var dealplyKeysEncodes = dpVariables.keyWordsEncoded;
var toastHeight = "112px";
var dealplyToastWidthInteger = 388;

var dealplyToastWidth = '"width" : "'+ (dealplyToastWidthInteger + (dealplyNumOfProducts - 1 )*238)  +'px"';

var useAnimation = true;

var heightStyle = 'dpQuery("'+ dpFrameId +'").css("height", "1px");';
if(useAnimation) {

	heightStyle = heightStyle +
	'dpQuery("'+ dpFrameId +'").animate({height: "' + toastHeight + '"}, 170);';
} else {
	heightStyle = heightStyle +
	'dpQuery("'+ dpFrameId +'").animate({height: "' + toastHeight + '"}, 170);';
}

var toastBottom = "0px";

var domLocationToInsertTheIframe = '';

var strCssPos = 'dpQuery("'+ dpFrameId +'").css({'+dealplyToastWidth +' , "bottom": "0px" , "overflow-x":"hidden" , "display" : "block" , "border-bottom" :"solid 0px #ccc" , '+
'			"position":"fixed" , "border-top-left-radius" : "10px", "border-bottom-left-radius" : "10px" , "right" :"0px"  , "z-index" :"9999999999999" , "margin-bottom": "2px" , "margin-top": "-22px" , "visibility":"visible" })'+
'			.attr("allowTransparency","true");' ;

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


var dealplyIframeStyleToManipulate ='dpQuery("'+ dpFrameId +'").removeAttr("style");'+ strCssPos + heightStyle + domLocationToInsertTheIframe;
DealPlyUtilsCls.prototype.dealplyCmd = dealPlyUtils.iframeManipulation(dealplyIframeStyleToManipulate);

DealPlyUtilsCls.prototype.registerCopyPasteCouponHandlers = function(index, element) {

	var clip = new ZeroClipboard.Client();

	clip.addEventListener('load', function (client) {

		clip.addEventListener('mouseOver', function(client) {
			DealPlyEdenCouponToast.loadDealDetails(index-1);
			var couponCode = dpQuery(element).find('input:hidden').val();	
			clip.setText(couponCode);
			dpQuery(element + ' .clickExp').show();
		});

		clip.addEventListener('onMouseOut', function(client) {
			dpQuery(element + ' .clickExp').hide();
		});

		clip.addEventListener('complete', function (client, text) {
			dealPlyUtils.gotoDeal((index-1));
			var deal = dealPlyUtils.deals[DealPlyEdenCouponToast.selectedIndex];
			window.open(deal.url);
		});
	});

	var id = Math.random().toString().replace('0.', '');
	dpQuery(element).attr('id', id);
	clip.glue(''+id,'mainDeal'+(index-1));

	// for flach right side arrow click event to function like the right most coupon (last one)
	if (index === Math.min(dealPlyUtils.deals.length,3)){

		var clipH = new ZeroClipboard.Client();

		clipH.addEventListener('load', function (client) {

			clipH.addEventListener('mouseOver', function(client) {
				DealPlyEdenCouponToast.loadDealDetails(index-1);
				var couponCode = dpQuery(element).find('input:hidden').val();	
				clipH.setText(couponCode);
			});

			clipH.addEventListener('complete', function (client, text) {
				dealPlyUtils.gotoDeal((index-1));
				var deal = dealPlyUtils.deals[DealPlyEdenCouponToast.selectedIndex];
				window.open(deal.url);
			});
		});

		clipH.glue('dealplyHeaderOnclick','dealplyWidgetControlPanel');
	}
}

DealPlyUtilsCls.prototype.twoDotsEllipsis = function(s, maxLength) {
	try {
		if (maxLength < 2) {
			return null;
		}

		if (s.length <= maxLength) {
			return s;
		} else {
			return s.substring(0, (maxLength - 1)) + "..";
		}
	} catch (dealplyE) {
		DealPlyEdenCommon.reportError(dealplyE);
		return s;
	}		
}


DealPlyUtilsCls.prototype.insert_content = function(){
	var obj = this;
	var deals = this.deals;
	var sub_desc = this.sub_desc;
	if(deals.length==0 || !deals){dpQuery('.dealply_container').hide();}
	var itter_max = Math.min(4, deals.length);
	var template = dpQuery('#dpDealBoxTmplt'),
	liElement;
	for(var i=0;i<itter_max;i++){
		if (typeof (deals[i].couponCode) != 'undefined' && deals[i].couponCode != '') {
			liElement = dpQuery('<li></li>');
			liElement.append(template.html());
			dpQuery('.offer_block', liElement).addClass('offer_block'+i);
			dpQuery('.offer_block', liElement).attr('rel',i);
			dpQuery('.prod_image', liElement).attr('src',deals[i].retailerLogoUrl);
			dpQuery('.prod_desc a', liElement).html(sub_desc(deals[i].productTitle, 50));
			dpQuery('.price', liElement).html(deals[i].productPriceWithCurrencySymbol);
			dpQuery('.coupDiscount div', liElement).text(deals[i].discountRate);
			dpQuery('.rightDiv .coupHead .coupCode', liElement).text(sub_desc(deals[i].couponCode,11));
			if (deals[i].discountRate.length > 4) dpQuery('.coupDiscount div', liElement).css('font-size', '21px') 
			if (dpQuery('.getDealText').length !== 0) dpQuery('.getDealText', liElement).text(dpGetDealText);
			dpQuery('.offerMoreData', liElement).text(dpVariables.strings.COUPON_COPY_DESC);
			dpQuery('a', liElement).attr('linkto',deals[i].url);
			dpVariables.strings.COUPON_COPY_DESC
			dpQuery('ul.offers_ul').append(liElement);
			dpQuery(".feedImage").hide();
			if (deals[i].discountRate === '' || deals[i].discountRate.replace(/\D/g, '' ) === '0'){
				dpQuery('.coupDiscount', liElement).text(deals[i].productPriceCurrencySymbol+deals[i].productPriceCurrencySymbol);
				dpQuery('.coupDiscount', liElement).addClass('zeroDiscRate');
			}
			dpQuery('.offer_block', liElement).zclip({
		        afterCopy: function(){},
		        path:'/resources/eden/green/zeroclipboard/ZeroClipboard.swf',
		        copy:deals[i].couponCode
		    });
			liElement.show();
		}
	}
	obj.handleDynamicPoweredBy();
	dealPlyUtils.listenToClick();
};

dpQuery(document).ready(function(){

	dealPlyUtils.insert_content();
	
	// changes according to dpVariables
	if (greenBGSupportedLangs[langTwoChars]){ 
		dpQuery('#flach #dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/coup/blueTtls/'+langTwoChars+'.png)');
	}else{
		dpQuery('#flach #dealplyWidgetControlPanel').css('background-image','url(/resources/eden/green/coup/blueTtls/en.png)');
	}
	dpQuery('.dealply_container').addClass(langTwoChars+'lang');
	dpQuery('.getCode').prepend(dpVariables.strings.COUPON_TOAST_REDEEM);
	if (langTwoChars === 'en' && dpVariables.poweredByTextForAffiliate.length > 13){
		dpQuery('.powered_by_link').prepend('by');
	} else {
		dpQuery('.powered_by_link').prepend(dpVariables.strings.TOAST_POWERED_BY_PREFIX);
	}
	dpQuery('.powered_by_link').attr('style', dpVariables.Affiliate.getPoweredByElem.style);
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
		dpQuery('#dealplySettingButton').hide();
		dpQuery('#dealplyWhatsThisLink').show();
	}
	// end changes according to dpVariables
	if(typeof dpVariables.Affiliate  !== 'undefined' && dpVariables.Affiliate.isDoPixel !== 'undefined'  && dpVariables.Affiliate.isDoPixel === true && dpVariables.channel !== 'null' && dpVariables.partner !== 'null' && dpVariables.partner !== 'dealply' && typeof dpVariables.channel !== 'undefined' && typeof dpVariables.partner !== 'undefined' && dpVariables.partner !== null && dpVariables.partner !== null){
		dpQuery('#rmSecondImg').attr('src','http://ad.yieldmanager.com/pixel?id='+dpVariables.dpRMXPixelRegionId+'&t=2');
	}


	dpQuery("#greenAreaClickable").css("cursor","pointer");
	dpQuery("#greenAreaClickable").click(function(){
		dealPlyUtils.gotoDeal(0 ,999);
		var url = dpQuery(".prod_desc > a" ).last().attr("linkto");
		window.open(url, '_blank');
	});
	dpQuery("#dealplyRelatedOfferTextPanel").css("cursor","pointer").click(function(){
		dpQuery("#greenAreaClickable").click();
	});

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


	dealPlyUtils.handleDynamicPoweredBy();
	
});//end of ready 