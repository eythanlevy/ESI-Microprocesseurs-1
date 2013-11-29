var DealPlyOpDom;

if(typeof DealPlyOpDomCls === "undefined") {
	DealPlyOpDomCls = function() {};
	
	DealPlyOpDom = new DealPlyOpDomCls();
	
	DealPlyOpDomCls.prototype.getBaseDomain = function() {
		try {
			if(typeof DealPlyDomParams !== "undefined" && typeof DealPlyDomParams.dom !== "undefined" && DealPlyDomParams.dom != null && DealPlyDomParams.dom != "" && DealPlyDomParams.dom.indexOf("Magic") < 0) {
				return DealPlyDomParams.dom;
			} else if(top.location === window.location) {
				if(typeof JavaScriptJsTagUrl !== "undefined" && JavaScriptJsTagUrl != null) {
					//In case of Injection install with recognized domain
					//JavaScriptJsTagUrl = "http://i.examplejs.info/example/javascript.js&countryCode=IL";
					
				    var l = document.createElement("a");
				    l.href = JavaScriptJsTagUrl;
				    var hostname = l.hostname;
				    
					if(hostname.replace(".", "-").indexOf(".") >= 0) {
						hostname = hostname.substring(hostname.indexOf(".") + 1);
					}
					
					return hostname;
				}
				
				return DealPlyOpDom.getLocalConfigDom();
			} else {
				//Probably inside Flach
				var hostname = document.location.hostname;
				
				if(hostname.replace(".", "-").indexOf(".") >= 0) {
					hostname = hostname.substring(hostname.indexOf(".") + 1);
				}
						
				return hostname;
			}
		} catch(e82) {
			
		}	
		
		return DealPlyOpDom.getLocalConfigDom();
	};
	
	DealPlyOpDomCls.prototype.getLocalConfigDom = function() {
		var defaultDom = "dealply.com";
		
		if(typeof DealPlyConfigLocal !== "undefined" && DealPlyConfigLocal != null && typeof DealPlyConfigLocal.getDom !== "undefined" && DealPlyConfigLocal.getDom() != null && DealPlyConfigLocal.getDom() !== "") {
			return DealPlyConfigLocal.getDom();
		}
		
		return defaultDom;
	};
	
	DealPlyOpDomCls.prototype.getStaticfDomain = function() {
		return "f." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getServedbyDomain = function() {	
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "s." + domain;
	};
	
	DealPlyOpDomCls.prototype.getCrownDomain = function() {
		return "c." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getImpressionDomain = function() {
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}

		return "m." + domain;
	};
	
	DealPlyOpDomCls.prototype.getAccessDomain = function() {
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "x." + domain;
	};
	
	DealPlyOpDomCls.prototype.getClickDomain = function() {
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "l." + domain;
	};
	
	DealPlyOpDomCls.prototype.getHeartbitDomain = function() {
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "h." + domain;
	};
	
	DealPlyOpDomCls.prototype.getQuickDomain = function() {
		var domain = DealPlyOpDom.getBaseDomain();
		
		if(domain.toLowerCase() === "tlscdn.com") {
			domain = "apollocdn.com";
		}
		
		return "q." + domain;
	};
	
	DealPlyOpDomCls.prototype.getEdgeDomain = function() {
		return "d." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getIeDomain = function() {
		return "ie." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getFirefoxDomain = function() {
		return "ff." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getChromeDomain = function() {
		return "ch." + DealPlyOpDom.getBaseDomain();
	};
	
	DealPlyOpDomCls.prototype.getOptDomain = function() {
		return "i." + DealPlyOpDom.getBaseDomain();
	};
}
