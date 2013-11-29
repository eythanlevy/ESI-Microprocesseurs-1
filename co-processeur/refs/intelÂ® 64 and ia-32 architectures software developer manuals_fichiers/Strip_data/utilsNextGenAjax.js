var DealPlyEdenSettingsToastCls = function(){};
var DealPlyEdenSettingsToast = new DealPlyEdenSettingsToastCls();
var dealplyOneOrZero = parseInt(Math.random()*10000)%2;
var dealplyZeroOneOrTwo = parseInt(Math.random()*10000)%3;
var dealplyChosenIframe = "flach";
var dpFeed = "";
var dealplyLangTwoChars = dpVariables.langauge_two_chars;
try{
	dpVariables.mainImageSelector = '';
	dpFeed  = dpVariables.creativeId.split("fff-")[1].split(".")[0];
}catch(e){};

if(typeof dpVariables.documentUri !== 'undefined' && dpVariables.documentUri.match(/ebay\./)!== null ){
	
	dpVariables.mainImageSelector = "";
	
}

var dpFrameId = '.'+dpVariables.self;
if(document.URL.search("#additionaliframe")!=-1){

	dpFrameId = "#dpAdditionalFrame";
}

DealPlyEdenSettingsToastCls.prototype.suspendByInterval = function(interval) {
	try {
		var intervalInt = parseInt(interval);

		DealPlyEdenPersistencyHttpCookies.suspendAccordingToHttpCookie(intervalInt, "app_settings");
		var dealplyCmd ='dpQuery("'+ dpFrameId +'").remove();';
		DealPlyInteropInner.sendCommand(dealplyCmd);
	} catch(dealplyE) {
		DealPlyEdenToast.reportError(dealplyE);
	}
};

DealPlyEdenSettingsToastCls.prototype.suspendForever = function() {
	try {
		var dealplyMntrEvent2 =
			'try {' +
			'	if(typeof mntrDealPlyMngr !== "undefined" && mntrDealPlyMngr.userDisabledPrefs !== "undefined") {' +
			'		mntrDealPlyMngr.userDisabledPrefs();' +
			'	}' +
			'} catch(dealplyE71) {' +
			'}';

		DealPlyInteropInner.sendCommand(dealplyMntrEvent2);
	} catch(dealplyE4) {
		DealPlyEdenToast.reportError(dealplyE4);
	}

	try {
		DealPlyEdenPersistencyHttpCookies.suspendForeverAccordingToHttpCookie("app_settings");
		var dealplyCmd ='dpQuery("'+ dpFrameId +'").remove();';
		DealPlyInteropInner.sendCommand(dealplyCmd);
	} catch(dealplyE) {
		DealPlyEdenToast.reportError(dealplyE);
	}
};






var DealPlyUtilsCls = function(){};
var dealPlyUtils = new DealPlyUtilsCls();
dealPlyUtils.roundTripEnd = new Date().getTime();
dealPlyUtils.templateGroup = "Flach";
var isSuspendBoxOpen = false;
var isWidgetMaximizied = true;



DealPlyUtilsCls.prototype.slideToMinimize=function(){
	var dealplyCmdMin = 'dpQuery("'+ dpFrameId +'").css("width", "120px");';
	var dealplyCmdMinWhenSuspendBoxIsOpen = 'dpQuery("'+ dpFrameId +'").css("width", "240px");';
	var dealPlyUtils = this;

	dpQuery("#dealplyMinimizeButton").click(function(){
		if(isWidgetMaximizied == true ){
			isWidgetMaximizied = false;

			dpQuery("#dealplyItemsList").animate({"right":"-800px"},500,function(){
				if(isSuspendBoxOpen == true){
					DealPlyInteropInner.sendCommand(dealplyCmdMinWhenSuspendBoxIsOpen);
				}else{
					DealPlyInteropInner.sendCommand(dealplyCmdMin);
				}

			});
			//dpQuery(this).fadeOut(500);
			dpQuery(this).css("background-image","url('/resources/eden/green/ngen/O.png')");

		}else{

			dealPlyUtils.maximize();
		}


	});

};

DealPlyUtilsCls.prototype.hoverProductImage = function(){
	var dealplyCmdMin = 'dpQuery("'+ dpFrameId +'").css("width", "120px");';
	var dealplyCmdMinWhenSuspendBoxIsOpen = 'dpQuery("'+ dpFrameId +'").css("width", "240px");';
	var dealPlyUtils = this;

	dpQuery("#dealplyMinimizeButton").click(function(){
		if(isWidgetMaximizied == true ){
			isWidgetMaximizied = false;

			dpQuery("#dealplyItemsList").animate({"right":"-800px"},500,function(){
				if(isSuspendBoxOpen == true){
					DealPlyInteropInner.sendCommand(dealplyCmdMinWhenSuspendBoxIsOpen);
				}else{
					DealPlyInteropInner.sendCommand(dealplyCmdMin);
				}

			});
			//dpQuery(this).fadeOut(500);
			dpQuery(this).css("background-image","url('/resources/eden/green/ngen/O.png')");

		}else{

			dealPlyUtils.maximize();
		}


	});

};


DealPlyUtilsCls.prototype.maximize = function(){
	isWidgetMaximizied = true ;
	var dealplyCmdMax = 'dpQuery("'+ dpFrameId +'").css("width", "510px");';
	dpQuery("#dealplyItemsList").animate({"right":"0"},200, function(){
		DealPlyInteropInner.sendCommand(dealplyCmdMax);
	});
	dpQuery("#dealplyMinimizeButton").css("background-image","url('/resources/eden/green/ngen/x.png')");

};


DealPlyUtilsCls.prototype.slideToMaximize= function(){
	var dealPlyUtils = this;

	dpQuery("#dealplyWidgetControlPanel").mouseenter(function(){
		dealPlyUtils.maximize();

	});


};

DealPlyUtilsCls.prototype.setHoverImage = function(selectorStringForImage,imageSourceHover,width,height,bottom,right){

	var originalSource = dpQuery(selectorStringForImage).attr("src");
	var originalWidth;
	var originalHeight;
	var originalBottom;
	var originalRight;
	originalWidth = dpQuery(selectorStringForImage).css("width");
	originalHeight = dpQuery(selectorStringForImage).css("height");
	originalBottom = dpQuery(selectorStringForImage).css("bottom");
	originalRight = dpQuery(selectorStringForImage).css("right");

	dpQuery(selectorStringForImage).hover(function(){
		dpQuery(this).attr("src",imageSourceHover);
		if(width){
			dpQuery(this).css("width",width);
		}
		if(height){
			dpQuery(this).css("height",height);
		}
		if(bottom){
			dpQuery(this).css("bottom",bottom);
		}
		if(right){
			dpQuery(this).css("right",right);
		}
	},function(){
		dpQuery(this).attr("src",originalSource);
		dpQuery(this).css("width",originalWidth);
		dpQuery(this).css("height",originalHeight);
		dpQuery(this).css("bottom",originalBottom);
		dpQuery(this).css("right",originalRight);

	});


};

DealPlyUtilsCls.prototype.closeSuspendBox = function(){

	dpQuery("#dealplySettingHoverIcon").click(function(){
		isSuspendBoxOpen = false;
		dpQuery("#dealplySettingButton").css("display","block");
		dpQuery("#dealplySuspend").css("display","none");

	});

};

DealPlyUtilsCls.prototype.openSuspendBox = function(){
	var obj = this;
	dpQuery("#dealplySettingButton").click(function(){

		dpQuery("#dealplySuspend").css("display","block");



		dpQuery("#closeSuspendWidget").click(function(e){

			isSuspendBoxOpen = false;
			dpQuery("#dealplySettingButton").css("display","block");
			dpQuery("#dealplySuspend").fadeOut(400);
		});
	});

};


DealPlyUtilsCls.prototype.closeWidget= function(){
	dpQuery('#dealplyCloseButton').live('click',function()
			{
			
				dpQuery("#dealplyItemsList").animate({"right":"-800px"},400);
				var dealplyCmd ='dpQuery("'+ dpFrameId +'").slideUp(400);';
				DealPlyInteropInner.sendCommand(dealplyCmd);
				DealPlyEdenCommon.googleAnalytics("Close");
				var url = "http://qck.dpstack.com/dealdo/event-report?type=quick&topic=closeWidget&interactionId="+dpVariables.interactionId;
				var cmd = "var dpiframe=document.createElement(\"iframe\");dpQuery(dpiframe).attr(\"width\",\"1\");dpQuery(dpiframe).attr(\"height\",\"1\");dpQuery(dpiframe).css(\"top\",\"-10000px\");dpQuery(dpiframe).css(\"left\",\"-10000px\");dpQuery(dpiframe).css(\"position\",\"absolute\");dpQuery(dpiframe).css(\"visibility\",\"visible\");dpQuery(\"body\").append(dpiframe);dpQuery(dpiframe).attr(\"src\",\""+url+"\");"
				DealPlyInteropInner.sendCommand(cmd);
			}
	);

};



DealPlyUtilsCls.prototype.attachDealIndexToLinks = function(){
	dpQuery("#dealplyItemsList li").each(function(){
		var index = dpQuery(this).index();
		dpQuery(this).find(".productLink").each(function(){
			dpQuery(this).attr("dealindex",index);

		});
	});
};

DealPlyUtilsCls.prototype.langFixes = function(){
	if(dealplyChosenIframe == "additional"){
		dpQuery("body").removeAttr("id");
		dpQuery("body").attr("id","addit");
	}

	var pathToGetDealImage = "/resources/eden/green/getdealimages/";
	var defaultGetDealImageName = "get_deal_tit_en.png";
	var GetDealImageName = "get_deal_tit_"+ dpVariables.langauge_two_chars +".png";
	var defaultFullPathToGetDealImage = pathToGetDealImage + defaultGetDealImageName ;
	var fullPathToGetDealImage = pathToGetDealImage +  GetDealImageName;

	dpQuery("#dealplyRelatedOfferTextPanel").html(dpVariables.strings.TOAST_TITLE_DEALS);

	if(dealplyLangTwoChars.search('pt')!=-1){
		dpQuery("#dealplyRelatedOfferTextPanel").css({"font-size":" 25px", "line-height":"45px" , "right":"15px"});
		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage ).css("margin-top","15px");
		dpQuery("#addit .price").css("width","61px");
		dpQuery("#addit .prod_image").css("width","60px");
		dpQuery("#addit .offer_block").css("width","60px");
	}
	else if(dealplyLangTwoChars.search('es' )!=-1){
		dpQuery("#flach #dealplyRelatedOfferTextPanel").css({"font-size":" 25px", "line-height":"42px" ,"right":"17px"});
		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage ).css({"top":"10px","left":"-4px"});


	}
	else if(dealplyLangTwoChars.search('ru' )!=-1){
		dpQuery("#dealplyRelatedOfferTextPanel").css({"font-size":" 28px", "line-height":"42px"});

		dpQuery("#getDealImage").attr("src" ,defaultFullPathToGetDealImage ).css("left","4px");

	}
	else if(dealplyLangTwoChars.search('dk' )!=-1){
		dpQuery("#dealplyRelatedOfferTextPanel").css({"font-size":" 30px", "line-height":"44px"});

		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage ).css("top","10px");
	}
	else if(dealplyLangTwoChars.search('de' )!=-1){
		dpQuery('body').addClass('lang_de');
		dpQuery("#dealplyRelatedOfferTextPanel").css({"font-size":" 33px", "line-height":"42px"});


		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage ).css("top","10px");
		dpQuery("#closeAddit").css({ "left":"57px"});

	}
	else if(dealplyLangTwoChars.search('nl' )!=-1){
		dpQuery("#dealplyRelatedOfferTextPanel").css({"font-size":" 33px", "line-height":"42px"});

		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage ).css("margin-top","15px")
		.css("left","-2px");
		dpQuery("#closeAddit").css({ "left":"57px"});
	}
	else if(dealplyLangTwoChars.search('it' )!=-1){
		dpQuery("#flach #dealplyRelatedOfferTextPanel").css({"font-size":" 27px", "line-height":"44px","right":"21px"});
		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage );
		dpQuery("#closeAddit").css({"top":"0px", "left":"46px"});
	}
	else if(dealplyLangTwoChars.search('fr' )!=-1){
		dpQuery("#flach #dealplyRelatedOfferTextPanel").css({"font-size":" 23px", "line-height":"24px","right":"7px","width":"125px"});
		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage );
		dpQuery("#addit .getDealText").css("font-size" ,"9px" );
	}
	else if(dealplyLangTwoChars.search('pl' )!=-1){
		dpQuery("#flach #dealplyRelatedOfferTextPanel").css({"font-size":" 22px", "line-height":"45px","right":"17px"});
		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage );

	}
	else if(dealplyLangTwoChars.search('en' )!=-1){
		dpQuery("#dealplyRelatedOfferTextPanel").css({"font-size":" 33px", "line-height":"42px"});

		dpQuery("#getDealImage").attr("src" ,defaultFullPathToGetDealImage ).css("left","4px");

	}
	else if(dealplyLangTwoChars.search('jp' )!=-1){
		dpQuery("#dealplyRelatedOfferTextPanel").css({"font-size":" 35px", "line-height":"52px"});

		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage ).css("top","10px");
	}
	else if(dealplyLangTwoChars.search('se' )!=-1){
		dpQuery("#flach #dealplyRelatedOfferTextPanel").css({"font-size":" 18px", "line-height":"47px","right":"26px"});
		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage ).css("margin-top","15px");
		dpQuery("#closeAddit").css({ "left":"57px"});
	}
	else if(dealplyLangTwoChars.search('no' )!=-1){
		dpQuery("#dealplyRelatedOfferTextPanel").css({"font-size":" 30px", "line-height":"44px"});
		dpQuery("#getDealImage").attr("src" ,fullPathToGetDealImage );
	}else{

		dpQuery("#getDealImage").attr("src" ,defaultFullPathToGetDealImage ).css("left","4px");;
	}
	return 'Related results';

}

DealPlyUtilsCls.prototype.handleClickOnProduct= function(){
	var dealplyUtils = this;
	dpQuery('.productLink').click(function(event){
		event.stopImmediatePropagation();
		dealplyUtils.reportClickEvent(dpQuery(this).attr('dealindex'));

	});	
};

DealPlyUtilsCls.prototype.forEverSelection = function(){
	dpQuery("#suspend").change(function(){
		var dealplySuspendVal = dpQuery("#suspend").val();
		if (dealplySuspendVal === "60480000000") {
			dpQuery("#dealplySuspendForEverMessage").show();
			if(document.documentMode !== undefined && document.documentMode ==5){

			}
		}	
		else{
			dpQuery("#dealplySuspendForEverMessage").hide();
		}

	});


};












DealPlyUtilsCls.prototype.getIeQuirksModeHandlerCode = function() {
	var dealplyCmd = 'if (document.documentMode !== undefined && document.documentMode ==5) {' +
	'	try {' +
	'		dpQuery("'+ dpFrameId +'").css("position", "absolute");' +
	'		dpQuery(window).scroll(function() {' +
	'			var dealplyScrollPos = parseInt(dpQuery(window).scrollTop());' +
	'			dpQuery("'+ dpFrameId +'").each(function() {' +
	'				dpQuery(this).css("bottom", "-" + dealplyScrollPos + "px");' +
	'			});' +
	'		});' +
	'	} catch (err) {' +
	'		DealPly.error("handleIeQuirksMode 1: " + err.message);' +
	'	}' +
	'}';

	return dealplyCmd;
};

DealPlyUtilsCls.prototype.deals = dpVariables.dealsJson;
DealPlyUtilsCls.prototype.sub_desc = function(str, length) {
	if (typeof length === 'undefined' ) length = 45;
	if(str.length<length){
		return str;

	}
	else
	{

		str=str.substring(0,length-2)+'...';
		return str;
	}
};

DealPlyUtilsCls.prototype.handleSuspendClick = function(){
	var dealPlyUtils = this;

	dpQuery("#dealplySuspendButton").click(function(){

		dealPlyUtils.handleSuspendSelectedOption();

	});


};


DealPlyUtilsCls.prototype.handleSuspendSelectedOption = function() {
	try {

		var dealplySuspendVal = dpQuery("#suspend").val();

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

DealPlyUtilsCls.prototype.extractInteractionOffer = function(url,index){
	url = decodeURIComponent(url);
	var extracted  = url.match(/trackingID=(.*?)?&/);
	if(extracted !== null ){
		return extracted[1];
	}
	
	return dpVariables.interactionId +""+index;
	
	
	
}


DealPlyUtilsCls.prototype.insert_content = function(){
	var obj = this;
	var deals = this.deals;
	var sub_desc = this.sub_desc;
	if(deals.length==0 || !deals)
	{
		dpQuery('.dealply_container').hide();

	}
	//dpQuery('li').hide();


	var itter_max = Math.min(4, deals.length);

	var fbShareBaseUrl = 'http://fid.dpstack.com/dealdo/fbslanding';
	var fbShareTrackUrl = 'http://clk.clickply.com/dealdo/event-report?redirUrl=@URL@&type=click&uid=USER_UID_MAGIC&cb=@RANDOMNUMBER@&product=@PRODID@&offerPrice=@OFFERPRICE@';
	/*var indexer = 1 ;
		if (dpQuery("#flach #starDiv").length > 0 || dpQuery("#flach #dpShopNoStar").length > 0) {
				indexer = 2;
				dpQuery('li:nth-child(1)').show();	
		}*/

	var template = dpQuery('#dpDealBoxTmplt'),
	liElement;
	
	var retailerNameFeeds = {
		pgu:true,
		pgb:true,
		pmx:true,
		pca:true,
		pbr:true
	};

	for(var i=0;i<itter_max;i++){

		liElement = dpQuery('<li></li>');
		liElement.append(template.html());		
		dpQuery('.offer_block', liElement).addClass('offer_block'+i);
		if (i === itter_max-1) dpQuery('.offer_block', liElement).addClass('last_offer');
		dpQuery('.offer_block', liElement).attr('rel',i);
		dpQuery('.prod_image', liElement).attr('src',deals[i].faviconUrl);
		if(typeof deals[i].retailerLogoUrl === 'undefined' || deals[i].retailerLogoUrl==="" || deals[i].retailerLogoUrl==="_"){
			if (retailerNameFeeds[deals[i].sourceFeed] && typeof isFlach !== 'undefined' && isFlach && typeof deals[i].retailerTitle !== 'undefined' && deals[i].retailerTitle.length > 0){
				dpQuery('.retailerTitle', liElement).text(sub_desc(deals[i].retailerTitle,13));
				dpQuery('.retailerTitle', liElement).addClass('show');
				dpQuery('.logo', liElement).remove();
			} else {
				dpQuery('.logo', liElement).attr('src','/resources/retailers/placeholder1.jpg');
			}
		}else{
			dpQuery('.logo', liElement).attr('src',deals[i].retailerLogoUrl);
		}
		dpQuery('.prod_desc a', liElement).html(sub_desc(deals[i].productTitle, typeof maxDescLength !== 'undefined' ? maxDescLength : 42));
		dpQuery('.price', liElement).html(deals[i].productPriceWithCurrencySymbol);
		if (dpQuery('.getDealText').length !== 0) dpQuery('.getDealText', liElement).text(dpGetDealText);
		
		if ((typeof isFlach !== 'undefined' && isFlach) || (typeof isToUseLinkedTo !== 'undefined' && isToUseLinkedTo)) {
			dpQuery('a', liElement).attr('linkto',deals[i].url);
			
		} else {
			
			dpQuery('a', liElement).attr('href',deals[i].url);
			
		}

		var rand = Math.floor(Math.random() * 1000000000);
		var productPrice = deals[i].productPrice;
		trackUrl = fbShareTrackUrl.replace('@URL@}', encodeURIComponent(deals[i].url)).replace('@RANDOMNUMBER@', rand).replace('@PRODID@', '54').replace('@OFFERPRICE@', productPrice);

		var shareUrl = fbShareBaseUrl + '?rdUrl=' + encodeURIComponent(encodeURIComponent(trackUrl)) + '&img=' + encodeURIComponent(encodeURIComponent(deals[i].faviconUrl)) + '&ttl=' + deals[i].productTitle + '&desc=' + deals[i].productPriceWithCurrencySymbol;


		(function(finalUrl, prodPrice) {
			dpQuery('.fbShare', liElement).click(function(){
				var eventUrl = fbShareTrackUrl.replace('redirUrl=@URL@&', '').replace('@RANDOMNUMBER@', Math.floor(Math.random() * 1000000000)).replace('@PRODID@', '53').replace('@OFFERPRICE@', prodPrice);
				DealPlyEdenCommon.reportEventUrl(eventUrl);
				window.open('http://www.facebook.com/sharer.php?u='+finalUrl, '', 'height=500,width=1000,modal=yes,alwaysRaised=yes');
				return false;
			});
		})(encodeURIComponent(shareUrl),productPrice);


		dpQuery('ul.offers_ul').append(liElement);
		dpQuery(".feedImage").hide();

		if(dpFeed === 'gau'){
			dpQuery("#flach .feedImage ").show();
		}


		liElement.show();


	}
	obj.handleDynamicPoweredBy();

	dealPlyUtils.listenToClick();

};


DealPlyUtilsCls.prototype.get_lng = function(){

	return dpVariables.strings.RELATEDRRESUALTS;

}
dealPlyUtils.lng = dealPlyUtils.get_lng();

DealPlyUtilsCls.prototype.getStyle = function(oElm, strCssRule){
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle){
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}

DealPlyUtilsCls.prototype.screenRes = "";
try{

	DealPlyUtilsCls.prototype.screenRes = screen.width+"X"+screen.height;

}catch(e){}

DealPlyUtilsCls.prototype.gotoDeal = function(index , hackForGreenArea ) {
	dpVariables.baseTrackingUrlClick = dpVariables.baseTrackingUrlClick.replace(/lpartner=.*?&/g,"").replace(/lchannel=.*?&/g,""); 
	if(!(typeof hackForGreenArea === 'undefined')){

	}	
	if(typeof dpVariables.partnerFromCookie === "undefined" ){
		dpVariables.partnerFromCookie = "";
	}
	
	if(typeof dpVariables.channelFromCookie === "undefined" ){
		dpVariables.channelFromCookie = "";
	}
	
	var clkid = this.extractInteractionOffer(this.deals[index].url, index);
	var tdi = "";
	
	if(typeof this.deals[index].tdi !== "undefined"){
		tdi = this.deals[index].tdi;
	}

	var clickData = {
			"product" : this.productId,
			"placement" : dpVariables.documentHostName,
			"feed" : this.deals[index].sourceFeed,
			"zeroOffers" : "false",
			"creativeId" : dpVariables.creativeId,
			"origOffCount" : dpVariables.origOffCount,
			"productTitle" : this.deals[index].productTitle,
			"offerCount" : "" + this.deals.length,
			"offerPrice" : "",
			"offerPriceMin" : "",
			"offerPriceMax" : "",
			"offerPosition" : index,
			"queryProductPrice" : "",
			"screenRes":this.screenRes,
			"clickedFeedCategory":this.deals[index].clickedFeedCategory,
			"lpartner":dpVariables.partnerFromCookie,
			"lchannel":dpVariables.channelFromCookie,
			"sessionid":dpVariables.sessionid,
			"clkid":clkid,
			"tdi":tdi,
			"lang":dpVariables.langauge_two_chars
	};
	if(!(typeof hackForGreenArea === 'undefined')){
		clickData.offerPosition = hackForGreenArea;
	}	


	DealPlyEdenCommon.reportEventEx("click", clickData);

};

DealPlyUtilsCls.prototype.reportClickEvent = function(index) {
	if(typeof dpVariables.partnerFromCookie === "undefined" ){
		dpVariables.partnerFromCookie = "";
	}
	
	if(typeof dpVariables.channelFromCookie === "undefined" ){
		dpVariables.channelFromCookie = "";
	}
	var clickData = {
			"product" : this.productId,
			"placement" : dpVariables.documentHostName,
			"feed" : this.deals[index].sourceFeed,
			"zeroOffers" : "false",
			"creativeId" : dpVariables.creativeId,
			"origOffCount" : dpVariables.origOffCount,
			"productTitle" : this.deals[index].productTitle,
			"offerCount" : "" + this.deals.length,
			"offerPrice" : "",
			"offerPriceMin" : "",
			"offerPriceMax" : "",
			"offerPosition" : index,
			"queryProductPrice" : "",
			"screenRes":this.screenRes,
			"clickedFeedCategory":this.deals[index].clickedFeedCategory,
			"lpartner":dpVariables.partnerFromCookie , 
			"lchannel":dpVariables.channelFromCookie,
			"sessionid":dpVariables.sessionid,
			"lang":dpVariables.langauge_two_chars
	};

	DealPlyEdenCommon.reportEventEx("click", clickData);

}; 

DealPlyUtilsCls.prototype.lockImpression = false;

DealPlyUtilsCls.prototype.reportImpression = function(){
	
	if(typeof dpVariables.partnerFromCookie === "undefined" ){
		dpVariables.partnerFromCookie = "";
	}
	
	if(typeof dpVariables.channelFromCookie === "undefined" ){
		dpVariables.channelFromCookie = "";
	}
	dpVariables.baseTrackingUrlImpression = dpVariables.baseTrackingUrlImpression.replace(/lpartner=.*?&/,"").replace(/lchannel=.*?&/,"");
	if(this.lockImpression == false && dealplyChosenIframe == "flach" ){
		var exp = new Date().getTime() + 60*1000*60;

		var impressionData = {"product" : this.productId ,"placement" : dpVariables.documentHostName,"feed" : this.deals[0].sourceFeed,"zeroOffers" : "false","creativeId" : dpVariables.creativeId,"origOffCount":dpVariables.origOffCount,"offerCount" : "" + this.deals.length,"offerPrice" : "","offerPriceMin" : "","offerPriceMax" : "","queryProductPrice" : "",
				"screenRes":this.screenRes,"lpartner":dpVariables.partnerFromCookie , "lchannel":dpVariables.channelFromCookie,"sessionid":dpVariables.sessionid,"lang":dpVariables.langauge_two_chars};
		DealPlyEdenCommon.reportEventEx("impression", impressionData);
		this.lockImpression = true;


	}


};

DealPlyUtilsCls.prototype.runToasterProduction = function(dealplyCmd){

	try{
		
		if(!(dpQuery.browser.msie && (dpQuery.browser.version).search('7.')!=-1)  ){
			DealPlyInteropInner.sendCommand('try { DealPly.engagedWithIframe = false; } catch(dealplyE3) {}');

		}

		//dealplyCmd = this.getIeQuirksModeHandlerCode();
		if (dpVariables.jsdebugger){
			dpQuery.getScript('http://localhost.dealply.com:8080/dealdo/jsdebugger?level=DEBUG&msg=' + encodeURIComponent('starting to instruct outer frame to enlarge IFRAME'));
		}

		var dealplyI = 0;
		for(dealplyI = 0; dealplyI <40; dealplyI++) {
			var dealplyDeferredCmd = "DealPlyInteropInner.sendCommand('" + dealplyCmd + dealPlyUtils.getIeQuirksModeHandlerCode()+ "');";

			if (dpVariables.jsdebugger){
				dealplyDeferredCmd = dealplyDeferredCmd + "dpQuery.getScript('http://localhost.dealply.com:8080/dealdo/jsdebugger?level=DEBUG&msg=' + encodeURIComponent('instructing outer frame to enlarge IFRAME'));";
			}

			setTimeout(dealplyDeferredCmd, (500 * dealplyI) + 100);
		}
	}catch(e){}


}





DealPlyUtilsCls.prototype.iframeManipulation = function(dealplyIframeStyleToManipulate , isAddit){
	
	
	
	if(typeof isAddit === 'undefined'){
		var str =' try {' +
		
		'	if(typeof DealPly.injected === "undefined" || DealPly.injected == false  )  {' +
	
	
		'		DealPly.injected = true;'+
		
			dealplyIframeStyleToManipulate +
	
		'	}' +
		'} catch(dealplyE3) { }';

	}else{
		var str =' try {' +
		
		'	if(typeof DealPly.skyLighterInjected === "undefined" || DealPly.skyLighterInjected == false  )  {' +
	
	
		'		DealPly.skyLighterInjected = true;'+
		
			dealplyIframeStyleToManipulate +
	
		'	}' +
		'} catch(dealplyE3) { }';
		
	}

	return str;

};


DealPlyUtilsCls.prototype.closeFrame = function(){
	var miliseconds = 500;
	if(typeof delayClose !== 'undefined' && !delayClose){
		 miliseconds = 0;
	}
	
	dpQuery('#xSpan , #closeAddit').live('click',function(){
		dpQuery('.dealply_container').slideUp(miliseconds);
		var dealplyCmd ='dpQuery("'+ dpFrameId +'").slideUp('+miliseconds+');';
		var dealplyDeferredCmd = "DealPlyInteropInner.sendCommand('" + dealplyCmd + "');";
		setTimeout(dealplyDeferredCmd,  1000);
		DealPlyEdenCommon.googleAnalytics("Close");
		dpQuery("#closeAddit , #getDealImage , .powered_by").fadeOut();
	});


}

DealPlyUtilsCls.prototype.injectAdditionalFrameToThePage = function(){

	
	
	var dealplyCmd ='(function(){try {'+

	'if(dpQuery("'+dpVariables.mainImageSelector+'").length!== 0){ '+
	' var iframe = document.createElement("iframe");'+
	'iframe.setAttribute("allowTransparency","true");'+
	'iframe.setAttribute("src","'+document.URL+'#additionaliframe");'+
	'iframe.setAttribute("frameBorder","0"); iframe.setAttribute("scrolling","no");iframe.setAttribute("id","dpAdditionalFrame"); iframe.setAttribute("border","no");'+
	' iframe.setAttribute("style","overflow:hidden;position:absolute;top:-10000px; filter:alpha(opacity=0);background-color:transparent; ");'+
	'if(dpQuery("#dpAdditionalFrame").length!== 0){return false;} '+
	'document.body.appendChild(iframe)(); '+
	'}}catch(e){}})();';

	//var dealplyDeferredCmd = "DealPlyInteropInner.sendCommand('" + dealplyCmd + "');";
	//setInterval(dealplyDeferredCmd,  1000);
	var dealplyI = 0;
	for(dealplyI = 0; dealplyI <40; dealplyI++) {
		var dealplyDeferredCmd = "DealPlyInteropInner.sendCommand('" + dealplyCmd + "');";



		setTimeout(dealplyDeferredCmd, (500 * dealplyI) + 100);
	}





}


DealPlyUtilsCls.prototype.listenToClick = function(){
	
	dpQuery('.offer_block').click(function(e){
		e.stopImmediatePropagation();
		var rel = dpQuery(this).attr('rel');
		if (typeof hasOverLink !== 'undefined' && hasOverLink && (e.pageY<30 || e.pageY>124)){
			dealPlyUtils.gotoDeal(rel, '888');
		} else {
			dealPlyUtils.gotoDeal(rel);
		}
		if (typeof isToUseLinkedTo !== 'undefined' && isToUseLinkedTo) {
			window.open(dpQuery(this).find('a').eq(0).attr("linkto"),"_blank");
			return false;
		}
		
	});



}

DealPlyUtilsCls.prototype.scrollLock = function(){;
if(dpQuery.browser.mozilla){

	dpQuery(window).scroll(function () { 

		dpQuery(this).scrollTop(0); 
	});
}
}

DealPlyUtilsCls.prototype.handleDynamicPoweredBy =function(){


	try{

		if(dpQuery("#" + dpQuery("body").attr("id") +" .dealplySpan").text().toLowerCase().search("dealply")!== -1 && dpVariables.Affiliate.isDynamicPoweredBy){

			dpQuery("#" + dpQuery("body").attr("id") + " .powered_by a").css("display","none");
			var eventDynamicPoweredByFailed = document.createElement("img");
			var cb = parseInt(Math.random()*1000000);
			var url = "//qck.dpstack.com/dealdo/event-report?type=quick&topic=missing_apptitle&interactionId="+cb+"&partner="+ dpVariables.partner +"&channel="+dpVariables.channel;
			if(document.URL.search('loadAgain=no') ==-1){
				eventDynamicPoweredByFailed.setAttribute("src",url);
			}



		}
	}catch(e){

	}


}

// returns a number between 0 and opAmount-1
DealPlyUtilsCls.prototype.getABTestNum = function(cookieName, opAmount){

	var cookVal = DealPlyEdenPersistencyHttpCookies.getCookie(cookieName);
	if (isNaN(parseInt(cookVal))){
		cookVal = parseInt(Math.random()*opAmount);
		DealPlyEdenPersistencyHttpCookies.setCookie(cookieName, cookVal);
	}
	return parseInt(cookVal);
	
};

DealPlyUtilsCls.prototype.openDialogWindow = function(h1txt, contentHtml, dWidth, dHeight){
	localStorage.setItem('dialogH1txt', h1txt);
	localStorage.setItem('dialogContentHtml', contentHtml);
	DealPlyInteropInner.sendCommand('dpQuery("body").append(\'<iframe id="dialogFrame" src="http://'+DealPlyOpDom.getStaticfDomain()+'/dialog.html#dw='+dWidth+'&dh='+dHeight+'" style="margin: 0;padding: 0;border: 0;position:fixed;top:0; left:0; width:100%;height:100%;z-index:2147483647;"></iframe>\');');
}

/*DealPlyUtilsCls.prototype.clickLocation=function(){
	if (typeof DealPlyEdenCommon !== 'undefined' && typeof dpVariables !== 'undefined') {
		dpQuery(document).click(function(event){
			DealPlyEdenCommon.reportQuick({
				topic:'clk_loc',
				interactionId:dpVariables.interactionId,
				partner:dpVariables.partner,
				channel:dpVariables.channel,
				clkX:event.clientX,
				clkY:event.clientY
			});
		});
	}
}*/


DealPlyUtilsCls.prototype.init = function(){

	this.slideToMinimize();
	this.slideToMaximize();
	this.setHoverImage("#dealplyFaqButton" , "/resources/eden/green/ngen/faq_on.png");
	this.closeWidget();
	this.openSuspendBox();
	this.closeSuspendBox();
	this.langFixes();

	this.handleSuspendClick();
	//dealPlyUtils.forEverSelection();
	if (typeof this.noImpReport === 'undefined' && dpVariables.self !== "Alt-popeye"){
		this.reportImpression();
	}
	this.closeFrame();
	this.runToasterProduction(dealPlyUtils.dealplyCmd);
	this.scrollLock();

	//this.clickLocation();
};


dpQuery(document).ready(function() {

	dealPlyUtils.init();

	//Google Anal.....
	(function() {
		var ga = document.createElement('script');     ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:'   == document.location.protocol ? 'https://ssl'   : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

	})();	

	if(dpFrameId !== "#dpAdditionalFrame" && typeof dpVariables !== 'undefined' && typeof dpVariables.Affiliate  !== 'undefined' && dpVariables.Affiliate.isDoPixel !== 'undefined'  && dpVariables.Affiliate.isDoPixel === true && dpVariables.channel !== 'null' && dpVariables.partner !== 'null' && dpVariables.partner !== 'dealply' && typeof dpVariables.channel !== 'undefined' && typeof dpVariables.partner !== 'undefined' && dpVariables.partner !== null && dpVariables.partner !== null){
		var d = new Date()
		var cachebuster = "v" + d.getMonth() + d.getDate();
		var scriptUrl = "/resources/eden/green/barrel/barrel.js?_" + cachebuster;
		script = document.createElement('script');
		head = document.getElementsByTagName("head")[0];
		script.type = "text/javascript";
		script.src = scriptUrl;
		head.appendChild(script);
	}



});