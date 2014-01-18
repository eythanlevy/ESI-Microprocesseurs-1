DealPlyBase64 = {
 
	// private property
	_keyStr : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = DealPlyBase64._utf8_encode(input);
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}
 
		output = DealPlyBase64._utf8_decode(output);
 
		return output;
 
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
};
	
//postMessage, etc.
(function(dpQuery){var g,d,j=1,a,b=this,f=!1,h="postMessage",e="addEventListener",c,i=b[h]&&!dpQuery.browser.opera;dpQuery[h]=function(k,l,m){if(!l){return}k=typeof k==="string"?k:dpQuery.param(k);m=m||parent;if(i){m[h](k,l.replace(/([^:]+:\/\/[^\/]+).*/,"dpQuery1"))}else{if(l){m.location=l.replace(/#.*dpQuery/,"")+"#"+(+new Date)+(j++)+"&"+k}}};dpQuery.receiveMessage=c=function(l,m,k){if(i){if(l){a&&c();a=function(n){if((typeof m==="string"&&n.origin!==m)||(dpQuery.isFunction(m)&&m(n.origin)===f)){return f}l(n)}}if(b[e]){b[l?e:"removeEventListener"]("message",a,f)}else{b[l?"attachEvent":"detachEvent"]("onmessage",a)}}else{g&&clearInterval(g);g=null;if(l){k=typeof m==="number"?m:typeof k==="number"?k:100;g=setInterval(function(){var o=document.location.hash,n=/^#?\d+&/;if(o!==d&&n.test(o)){d=o;l({data:o.replace(n,"")})}},k)}}}})(dpQuery);

var DealPlyInteropInnerCls = function(){};

var DealPlyInteropInner = new DealPlyInteropInnerCls();

DealPlyInteropInnerCls.prototype.sendCommand = function(dealplyCmd) {
	var dealplyMsg = {
		"dealplyOrigin" : "NDInner",
		"dealplyEval" : dealplyCmd
	};

	var dealplyMsgStr = DealPlyJSON.stringify(dealplyMsg);
	
	var dealplyEncodedMsgStr = "b=" + DealPlyBase64.encode(dealplyMsgStr);
	
	parent.postMessage(dealplyEncodedMsgStr, '*');
};

DealPlyInteropInnerCls.prototype.sendCommands = function(dealplyCmds) {
	for(var i = 0; i < dealplyCmds.length; i++) {
		var dealplyCmd = dealplyCmds[i];
		
		DealPlyInteropInner.sendCommand(dealplyCmd);
	}
};

DealPlyInteropInnerCls.prototype.getBaseInteropUrl = function() {
	var dealplyUrl = document.location.protocol + "//"+ dpVariables.outerPageHostName;
	
	return dealplyUrl;
};

DealPlyInteropInnerCls.prototype.setupInterop = function() {
	var baseUrlNoEndingSlash = DealPlyInteropInner.getBaseInteropUrl();
	
	dpQuery.receiveMessage(
			function(dealplyMsg){
				if(typeof dealplyMsg !== "function" && typeof dealplyMsg !== "object") {
					return;
				}
				
				if(dealplyMsg === null) {
					return;
				}
				
				var dealplyMsgObj = dealplyMsg.data;
				
				if(typeof dealplyMsgObj.dealplyOrigin === "undefined" || dealplyMsgObj.dealplyOrigin === null || dealplyMsgObj.dealplyOrigin !== "NDOuter") {
					return;
				}
				
				if(typeof dealplyMsgObj.dealplyEval === "string" && dealplyMsgObj.dealplyEval !== null) {
					eval(dealplyMsgObj.dealplyEval);
				}
			},
			baseUrlNoEndingSlash
	);
};

dpQuery(document).ready(function() {	
	DealPlyInteropInner.setupInterop();
	
	var dealplyCmd = 'dpQuery("'+dpVariables.self+'").css("visibility", "");';
	DealPlyInteropInner.sendCommand(dealplyCmd);
});
