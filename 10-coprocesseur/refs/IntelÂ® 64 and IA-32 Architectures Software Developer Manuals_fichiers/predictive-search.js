$(function (){
	var custEnc=function(){
		$('#searchBox').val(custCharRplHps($('#searchBox').val()));
	};
    $('#hpsform').delegate('input','keypress',function(e){
    	var code=(e.keyCode?e.keyCode:e.which);if(code==13){custEnc();}
    });
    
    // moved from jquery.home.js
    $(document).bind('click', function (event) {
    	if ($(event.target).parents("#hpsform, .predictive-search, .background-slider-items").length == 0 && !$(event.target).hasClass("predictive-search") && !$(event.target).hasClass("slider-item")) {
            $('#hpsform .predictive-search').addClass('hideme');
            $('#searchBox').attr('value', $('#searchBox').attr('title'));
            if(searchBoxUserVal !== null){
            	searchBoxUserVal = "";
            }
        }
    });
    
    /* ------------------------------------- start of predictive search keyboard navigation ---------------------------------------------*/
    var searchBoxUserVal;
    $('#searchBox').focusin(function (e) {
        $('#predictive-search ul li').find('a').removeClass('result_hover');
        if (searchBoxUserVal !== null && ($('#searchBox').val() !== '')) {
            $('#searchBox').val(searchBoxUserVal);
        } else {
            $('#searchBox').val('');
        }
    });
    $('#searchBox').keydown(function (e) {
        searchBoxUserVal = $('#searchBox').val();
        if (e.keyCode == 40) {
            e.preventDefault();
            if ($('#bestResults').children().length > 0) {
                $('#bestResults a').focus().addClass('result_hover');
            } else {
                $('#otherResults li:first-child a').focus().addClass('result_hover');
            }
        } else if (e.keyCode == 38) {
            $('#otherResults li:last-child').children('a').focus().addClass('result_hover');
        }
    });
    $(document).delegate('#bestResults a.result_hover', 'keydown', function (e) {
        if (e.keyCode == 40) {
            e.preventDefault();
            $(this).removeClass('result_hover');
            $('#otherResults li:first-child a').focus().addClass('result_hover');
        } else if (e.keyCode == 38) {
            $(this).removeClass('result_hover');
            $('#searchBox').focus();
        }
    });
    $(document).delegate('#otherResults li a.result_hover', 'keydown', function (e) {
        if (e.keyCode == 40) {
            e.preventDefault();
            $(this).removeClass('result_hover');
            $(this).parent('li').next('li').children('a').focus().addClass('result_hover');
            if ($(this).parent('li').next('li').html() == null) {
                $('#searchBox').focus();
            }
        } else if (e.keyCode == 38) {
            $(this).parent('li').prev('li').children('a').focus().addClass('result_hover');
            $(this).removeClass('result_hover');
            if ($(this).parent('li').prev('li').html() == null) {
                if ($('#bestResults').children().length > 0) {
                    $('#bestResults a').focus().addClass('result_hover');
                } else {
                    //$('#otherResults li:last-child a').focus().addClass('result_hover');
                    $('#searchBox').focus();
                }
            }
        }
    });
    // key down

    $(document).delegate('#bestResults', 'mouseover', function (e) {
        searchBoxUserVal = $('#searchBox').val();
        $('#predictive-search ul li').find('a').removeClass('result_hover');
        $(this).children('a').focus().addClass('result_hover');
        if (searchBoxUserVal !== null) {
            $('#searchBox').val(searchBoxUserVal);
        }
    });

    $(document).delegate('#otherResults li', 'mouseover', function (e) {
        searchBoxUserVal = $('#searchBox').val();
        $('#predictive-search ul li').find('a').removeClass('result_hover');
        $(this).children('a').focus().addClass('result_hover');
        if (searchBoxUserVal !== null) {
            $('#searchBox').val(searchBoxUserVal);
        }
    }); /* ------------------------------------- end of predictive search keyboard navigation ---------------------------------------------*/
});


function showHPResult(str, surl, languageRootPath, contentIntelUtilityPath, headingText) {
	
    var timestamp = Number(new Date());
    var xmlhttp;
    if (str.length==0) {
        $(".predictive-search").addClass('hideme');
        return;
    }
    $.ajax({
        type: "GET",
        url: surl,
        dataType: "application/json",
        success: function(result, request) {
            if( xhr.status == 200 ) {
                processHPResult(xhr.responseText, languageRootPath, contentIntelUtilityPath, headingText);
            }
        },
        error: function(xhr) {
            if( xhr.status == 200 ) {
                processHPResult(xhr.responseText, languageRootPath, contentIntelUtilityPath, headingText);
            }
        }
    });
}


function processHPResult(resultStr, languageRootPath, contentIntelUtilityPath, headingText){
    var respJson = JSON.parse(resultStr);
    var isBestMatch = respJson[1];
    if(respJson[0].length == 'undefined' || respJson[0].length == 0) {
        $(".other-match").hide();
        $(".best-match").hide();
    }
    document.getElementById("otherResults").innerHTML="";
    document.getElementById("bestResults").innerHTML="";
    var searchResults = respJson[0];
    if (searchResults.length > 0) {
        $(".predictive-search").removeClass('hideme');
        if(isBestMatch) {
            getBestMatchResults(contentIntelUtilityPath, headingText);
            if(searchResults.length > 0) {
                $(".other-match").show();
            }
            else {
                $(".other-match").hide();
            }
        }
        else {
            $(".best-match").hide();
            if(searchResults.length > 0) {
                $(".other-match").show();
            }
        }
        for(k = 0; k < searchResults.length; k++) {
            document.getElementById("otherResults").innerHTML += "<li><a  data-wap='{\"method\":\"typeahead\",\"keyword\":\""+ searchResults[k]+ "\"}' href="+languageRootPath+"/search.html?keyword=" + encodeURI(searchResults[k].replace(/'/g,'\u02B9').replace(/</g,'\u02C2').replace(/>/g,'\u02C3')) + ">" + searchResults[k] + "</a></li>";
        }
    }
    // added this for key board accessability
    replaceVal();
}

function onSubmitHps(searchTxt, languageRootPath, locale) {
    $('#searchBox').val(custCharRplHps($('#searchBox').val()));
    var boxVal = document.getElementById("searchBox").value,
            hpsForm = document.getElementById("hpsform");
    var searchText = searchTxt;
    waTrackSearch(document.getElementById(boxVal, 'text', '')); //analytic tracking - do not remove
    if(boxVal==searchText){
        var action = languageRootPath+'/search.html';
        hpsForm.action = action;
        $('#searchBox').attr('name','');
    }
    else if(boxVal.length==0) {
        hpsForm.action = languageRootPath+'/search.html?advanced=true&locale=' + encodeURI('+locale+');
    }
    else {
        hpsForm.action = languageRootPath+'/search.html?keyword=' + encodeURI(boxVal) + '&locale=' + encodeURI('+locale+');
    }
    return true;
}

function getBestMatchResults(contentIntelUtilityPath, headingText) {
    $.ajax({
        type: "GET",
        url: contentIntelUtilityPath,
        dataType: "application/json",
        success: function(result, request) {
            if( xhr.status == 200 ) {
                processBestMatchResults(xhr.responseText, headingText)
            }
        },
        error: function(xhr) {
            if( xhr.status == 200 ) {
                processBestMatchResults(xhr.responseText, headingText)
            }
        }
    });
}

function processBestMatchResults(bestMatchResult, headingText) {
    var bestResultsDiv = document.getElementById("bestResults");
    var leftColDiv = document.getElementById("leftCol");
    bestResultsDiv.innerHTML = "";
    leftColDiv.innerHTML = "";
    var respJson = JSON.parse(bestMatchResult);
    var resultSetArray = respJson.ResultSet;
    var fieldsList = resultSetArray[0];
    if(fieldsList.IsFeaturedResult){
        if (resultSetArray != null && resultSetArray.length > 0) {
            if (fieldsList != null && fieldsList != 'undefined') {
                leftColDiv.innerHTML += "<h4>"+headingText+"</h4>";
                var filedListArray = fieldsList.FieldList;
                var title = "",
                        description = "",
                        link = "",
                        thumbnailURL = "";
                for(var i = 0; i < filedListArray.length; i++) {
                    if(filedListArray[i].FieldName == "title") {
                        title = filedListArray[i].FieldValue;
                    }
                    else if(filedListArray[i].FieldName == "description") {
                        description = filedListArray[i].FieldValue;
                    }
                    else if(filedListArray[i].FieldName == "url"){
                        link = filedListArray[i].FieldValue;
                    }
                    else if(filedListArray[i].FieldName == "thumbnailurl") {
                        thumbnailURL = filedListArray[i].FieldValue;
                    }
                }
                if(description != null && description.length > 160) {
                    description = description.substring(0, 160);
                }
                bestResultsDiv.innerHTML += "<a data-wap='{\"method\":\"featured\",\"keyword\":\""+document.getElementById("searchBox").value+"\"}' >" + title + "</a>";
                link = (link.indexOf("?") > -1) ? link + "&wapkw="+ document.getElementById("searchBox").value : link + "?wapkw="+ document.getElementById("searchBox").value, //add wapkw querystring
                        $('#bestResults a').attr('href',link );
                if (description != null) {
                    bestResultsDiv.innerHTML +="<p>" + description + "</p>";
                }
                if (thumbnailURL != null) {
                    if(thumbnailURL.indexOf("/content/dam/") > -1) {
                        leftColDiv.innerHTML += "<img src='" + thumbnailURL +".rendition.cq5dam.thumbnail.64.64.png'></img>";
                    }
                    else {
                        leftColDiv.innerHTML += "<img src='" + thumbnailURL +  "'></img>";
                    }
                }
                $(".best-match").show();
            }
        }
    }
}

function custCharRplHps(p){
	return p.replace(/'/g,'\u02B9').replace(/</g,'\u02C2').replace(/>/g,'\u02C3');
}

function replaceVal() {
    $('#predictive-search ul li a').each(function (index) {
        $(this).focusin(function () {
            var myNewVal = $(this).text();
            $('#searchBox').val(myNewVal);
        });
    });
}


