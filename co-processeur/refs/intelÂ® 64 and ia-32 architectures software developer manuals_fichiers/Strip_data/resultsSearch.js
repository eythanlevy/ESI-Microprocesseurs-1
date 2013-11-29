DealPlyUtilsCls.prototype.insert_content_in_results = function(){
	var obj = this;
	var deals = this.deals;
	var sub_desc = this.sub_desc;
	if(deals.length==0 || !deals)
	{
		dpQuery('.dealply_container').hide();

	}
	
	var itter_max = Math.min(4, deals.length);

	var fbShareBaseUrl = 'http://fid.dpstack.com/dealdo/fbslanding';
	var fbShareTrackUrl = 'http://clk.clickply.com/dealdo/event-report?redirUrl=@URL@&type=click&uid=USER_UID_MAGIC&cb=@RANDOMNUMBER@&product=@PRODID@&offerPrice=@OFFERPRICE@';
	
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
		dpQuery('.prod_desc a', liElement).html(deals[i].productTitle);
		dpQuery('.price', liElement).html(deals[i].productPriceWithCurrencySymbol);
		if (dpQuery('.getDealText').length !== 0) dpQuery('.getDealText', liElement).text(dpGetDealText);

		if (typeof isToUseLinkedTo !== 'undefined' && isToUseLinkedTo) {
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