var allthemes={};displaychange=0,jQuery(function(c){function a(a,e){wysijaAJAX.task="install_theme";var t=allthemes[a];if(wysijaAJAX.theme_id=t.id,wysijaAJAX.theme_key=t.key,wysijaAJAX.premium=parseInt(t.is_premium),wysijaAJAX.theme_name=t.name,e&&!confirm(wysijatrans.reinstallwarning.replace("%1$s",t.key)))return!1;wysijaAJAX._wpnonce=wysijanonces.campaigns.install_theme,jQuery("#overlay").show(),jQuery.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(a){d("search-view"),jQuery("#overlay").hide(),jQuery.WYSIJA_HANDLE_RESPONSE(a),window.parent.jQuery("#wj_themes_list").html(a.result.themes),window.parent.handleSwitchTheme(),window.parent.handleRemoveTheme()},error:function(a){jQuery.WYSIJA_HANDLE_RESPONSE(a),jQuery("#overlay").hide(),d("search-view")},dataType:"json"})}function d(a,e){c(".panel").hide(),c("#"+a).show(),e!==undefined&&!0===e&&setTimeout(function(){window.parent.WysijaPopup.setDimensions()},1)}function e(){t()}function t(a){var e='<li><img class="loading" title="Loading" alt="loading" src="../wp-content/plugins/wysija-newsletters/img/wpspin_light.gif" /></li>';c("#themes-list").html(e);var t="";if(a===undefined)a={is_premium:0};else a.is_premium===undefined&&(a.is_premium=0);t="&"+jQuery.param(a),c.getJSON("//api.mailpoet.com/theme/search?domain="+wysijatrans.domainname+t+"&callback=?",function(a){var r="";if(a){var i="";jQuery.each(a.themes,function(a,e){allthemes[e.id]=e,i="",(a+1)%5==0&&(i+=" last");var t=wysijatrans.install;-1!==jQuery.inArray(e.key,wysijatrans.installedthemes)&&(i+=" installed",t=wysijatrans.reinstall),1===parseInt(e.is_premium)&&(i+=" premium",1!==parseInt(wysijatrans.ispremium)&&(t=wysijatrans.premiumonly)),r+='<li class="theme'+i+'">',r+='<div class="thumbnail">',r+='<img src="'+e.thumbnail_large+'" alt="'+e.name+'" title="'+e.name+'" />',r+='<a class="button-primary install'+i+'" href="javascript:;" data-id="'+e.id+'">'+t+"</a>",r+="</div>",r+='<a class="infos" href="javascript:;" data-id="'+e.id+'">'+wysijatrans.viewinfos+"</a>",r+="</li>"})}else{r="<div>";r+="<strong>"+wysijatrans.errorconnecting+"</strong>",r+="</div>"}c("#themes-list").html(r)})}function u(a,e){if(null==a)return"http://www.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s="+e;e=e||80;return"http://www.gravatar.com/avatar/"+function(a){function o(a,e){return a<<e|a>>>32-e}function l(a,e){var t,r,i,s,n;return i=2147483648&a,s=2147483648&e,n=(1073741823&a)+(1073741823&e),(t=1073741824&a)&(r=1073741824&e)?2147483648^n^i^s:t|r?1073741824&n?3221225472^n^i^s:1073741824^n^i^s:n^i^s}function m(a,e,t){return a&e|~a&t}function c(a,e,t){return a&t|e&~t}function d(a,e,t){return a^e^t}function u(a,e,t){return e^(a|~t)}function e(a,e,t,r,i,s,n){return l(o(a=l(a,l(l(m(e,t,r),i),n)),s),e)}function t(a,e,t,r,i,s,n){return l(o(a=l(a,l(l(c(e,t,r),i),n)),s),e)}function r(a,e,t,r,i,s,n){return l(o(a=l(a,l(l(d(e,t,r),i),n)),s),e)}function i(a,e,t,r,i,s,n){return l(o(a=l(a,l(l(u(e,t,r),i),n)),s),e)}function s(a){for(var e,t=a.length,r=t+8,i=16*((r-r%64)/64+1),s=Array(i-1),n=0,o=0;o<t;)n=o%4*8,s[e=(o-o%4)/4]=s[e]|a.charCodeAt(o)<<n,o++;return n=o%4*8,s[e=(o-o%4)/4]=s[e]|128<<n,s[i-2]=t<<3,s[i-1]=t>>>29,s}function n(a){var e,t="",r="";for(e=0;e<=3;e++)t+=(r="0"+(a>>>8*e&255).toString(16)).substr(r.length-2,2);return t}function h(a){a=a.replace(/rn/g,"n");for(var e="",t=0;t<a.length;t++){var r=a.charCodeAt(t);r<128?e+=String.fromCharCode(r):(127<r&&r<2048?e+=String.fromCharCode(r>>6|192):(e+=String.fromCharCode(r>>12|224),e+=String.fromCharCode(r>>6&63|128)),e+=String.fromCharCode(63&r|128))}return e}var p,w,v,f,y,j,g,_,A,C=Array(),k=7,b=12,S=17,I=22,J=5,Q=9,X=14,x=20,T=4,$=11,E=16,N=23,O=6,P=10,L=15,R=21;for(C=s(a=h(a)),j=1732584193,g=4023233417,_=2562383102,A=271733878,p=0;p<C.length;p+=16)g=i(g=i(g=i(g=i(g=r(g=r(g=r(g=r(g=t(g=t(g=t(g=t(g=e(g=e(g=e(g=e(v=g,_=e(f=_,A=e(y=A,j=e(w=j,g,_,A,C[p+0],k,3614090360),g,_,C[p+1],b,3905402710),j,g,C[p+2],S,606105819),A,j,C[p+3],I,3250441966),_=e(_,A=e(A,j=e(j,g,_,A,C[p+4],k,4118548399),g,_,C[p+5],b,1200080426),j,g,C[p+6],S,2821735955),A,j,C[p+7],I,4249261313),_=e(_,A=e(A,j=e(j,g,_,A,C[p+8],k,1770035416),g,_,C[p+9],b,2336552879),j,g,C[p+10],S,4294925233),A,j,C[p+11],I,2304563134),_=e(_,A=e(A,j=e(j,g,_,A,C[p+12],k,1804603682),g,_,C[p+13],b,4254626195),j,g,C[p+14],S,2792965006),A,j,C[p+15],I,1236535329),_=t(_,A=t(A,j=t(j,g,_,A,C[p+1],J,4129170786),g,_,C[p+6],Q,3225465664),j,g,C[p+11],X,643717713),A,j,C[p+0],x,3921069994),_=t(_,A=t(A,j=t(j,g,_,A,C[p+5],J,3593408605),g,_,C[p+10],Q,38016083),j,g,C[p+15],X,3634488961),A,j,C[p+4],x,3889429448),_=t(_,A=t(A,j=t(j,g,_,A,C[p+9],J,568446438),g,_,C[p+14],Q,3275163606),j,g,C[p+3],X,4107603335),A,j,C[p+8],x,1163531501),_=t(_,A=t(A,j=t(j,g,_,A,C[p+13],J,2850285829),g,_,C[p+2],Q,4243563512),j,g,C[p+7],X,1735328473),A,j,C[p+12],x,2368359562),_=r(_,A=r(A,j=r(j,g,_,A,C[p+5],T,4294588738),g,_,C[p+8],$,2272392833),j,g,C[p+11],E,1839030562),A,j,C[p+14],N,4259657740),_=r(_,A=r(A,j=r(j,g,_,A,C[p+1],T,2763975236),g,_,C[p+4],$,1272893353),j,g,C[p+7],E,4139469664),A,j,C[p+10],N,3200236656),_=r(_,A=r(A,j=r(j,g,_,A,C[p+13],T,681279174),g,_,C[p+0],$,3936430074),j,g,C[p+3],E,3572445317),A,j,C[p+6],N,76029189),_=r(_,A=r(A,j=r(j,g,_,A,C[p+9],T,3654602809),g,_,C[p+12],$,3873151461),j,g,C[p+15],E,530742520),A,j,C[p+2],N,3299628645),_=i(_,A=i(A,j=i(j,g,_,A,C[p+0],O,4096336452),g,_,C[p+7],P,1126891415),j,g,C[p+14],L,2878612391),A,j,C[p+5],R,4237533241),_=i(_,A=i(A,j=i(j,g,_,A,C[p+12],O,1700485571),g,_,C[p+3],P,2399980690),j,g,C[p+10],L,4293915773),A,j,C[p+1],R,2240044497),_=i(_,A=i(A,j=i(j,g,_,A,C[p+8],O,1873313359),g,_,C[p+15],P,4264355552),j,g,C[p+6],L,2734768916),A,j,C[p+13],R,1309151649),_=i(_,A=i(A,j=i(j,g,_,A,C[p+4],O,4149444226),g,_,C[p+11],P,3174756917),j,g,C[p+2],L,718787259),A,j,C[p+9],R,3951481745),j=l(j,w),g=l(g,v),_=l(_,f),A=l(A,y);return(n(j)+n(g)+n(_)+n(A)).toLowerCase()}(a)+".jpg?s="+e}c(function(){0<c("#themes-reload").length&&(wysijaAJAX.task="refresh_themes",jQuery.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(a){window.parent.jQuery("#wj_themes_list").html(a.result.themes),window.parent.handleSwitchTheme(),window.parent.handleRemoveTheme()},error:function(){},dataType:"json"}))}),c(document).on("click",".install",function(){return a(c(this).data("id"),c(this).hasClass("installed")),!1}),c(document).on("click",".infos",function(){var a=allthemes[c(this).data("id")],e="",t=wysijatrans.install;if(a!==undefined){-1!==c.inArray(a.key,wysijatrans.installedthemes)&&(e=" installed",t=wysijatrans.reinstall),1===parseInt(a.is_premium)&&(e+=" premium",1!==parseInt(wysijatrans.ispremium)&&(t=wysijatrans.premiumonly));for(var r='<div class="theme-screenshot"><img src="'+a.screenshot+'" alt="'+a.name+'" /></div>',i='<img src="'+u(a.author_email,80)+'" class="avatar" width="80px"/>'+"<h2>"+a.name+'</h2><p><input type="button" value="'+t+'" data-id="'+a.id+'" class="button-primary install'+e+'" /></p>',s='<div class="stars"><div id="average-vote" class="star-rating" style="width:'+95*a.rating/5+'px;"></div></div>',n='<div class="stars my-rating clearfix" data-theme="'+parseInt(a.id)+'">',o=0;o<5;o++)parseInt(a.user_rating)>o?n+='<a href="javascript:;" class="active" data-value="'+(o+1)+'"></a>':n+='<a href="javascript:;" data-value="'+(o+1)+'"></a>';n+="</div>",i+='<div class="paragraph"><strong>'+wysijatrans.stars.replace("%1$s","</strong> "+wysijatrans.totalvotes.replace("%1$s",'<span id="total-votes">'+a.votes+"</span>")+s)+"</div>",i+='<div class="paragraph"><strong>'+wysijatrans.starsyr.replace("%1$s","</strong>"+n)+"</div>",i+="<p><strong>"+wysijatrans.downloads.replace("%1$s","</strong>"+a.downloads_zip)+"</p>",i+="<p><strong>"+wysijatrans.lastupdated.replace("%1$s","</strong>"+a.updated_at)+"</p>",i+="<p>"+wysijatrans.viewallthemes.replace("%1$s",'<a href="javascript:;" class="author-id-filter" id="author-id-filter'+a.author_id+'">'+a.author_name+"</a>")+"</p>",i+='<p><a href="//api.mailpoet.com/download/zip/'+a.id+"?domain="+wysijatrans.domainname+'">'+wysijatrans.downloadzip+"</a></p>";var l="";1==a.has_psd&&(l='<p><a href="//api.mailpoet.com/download/psd/'+a.id+"?domain="+wysijatrans.domainname+'" class="downpsd">'+wysijatrans.downloadpsd+"</a></p>",1===parseInt(a.is_premium)&&1!==parseInt(wysijatrans.ispremium)&&(l="<p><strong>"+wysijatrans.premiumfiles+"</strong></p>")),i+=l,i+='<p><a href="'+a.author_url+'" target="_blank">'+wysijatrans.viewauthorsite+"</a></p>";var m='<div class="wrap actions"><a class="button-secondary2 theme-view-back" href="javascript:;">'+wysijatrans.viewback+'</a></div><div class="theme-infos clearfix"><div class="preview">'+r+'</div><div class="infos">'+i+"</div></div>";return c("#theme-view").html(m),d("theme-view",!0),!1}}),c(document).on("click",".theme-view-back",function(){return d("search-view",!0),!1}),c("#gallery-form").submit(function(){return e(),!1}),c(document).on("click",".my-rating a",function(){for(var e=parseInt(c(this).data("value")),a=0;a<5;a++)a<e?c(c(".my-rating a")[a]).addClass("active"):c(c(".my-rating a")[a]).removeClass("active");var t=parseInt(c(this).parent().data("theme"));return c.getJSON("//api.mailpoet.com/theme/rate/"+t+"?rating="+e+"&domain="+wysijatrans.domainname+"&callback=?",function(a){a&&(c("#average-vote").css("width",parseInt(95*a.rating/5)),c("#total-votes").html(a.votes),allthemes[t].votes=a.votes,allthemes[t].user_rating=e,allthemes[t].rating=a.rating)}),!1}),c(document).on("hover",".my-rating a",function(){var a=parseInt(c(this).data("value"));c(".my-rating a").removeClass("on").removeClass("off");for(var e=0;e<5;e++)e<a?c(c(".my-rating a")[e]).addClass("on"):c(c(".my-rating a")[e]).addClass("off")}),c(document).on("mouseout",".my-rating a",function(){c(".my-rating a").removeClass("on").removeClass("off")}),c("#sub-theme-box").click(function(){d("theme-upload",!0)}),c(document).on("click","a.author-id-filter",function(){return c("#filter-selection").html('<a href="javascript:;" class="button-secondary2 filter-none">'+wysijatrans.showallthemes+"</a>"),t({author_id:parseInt(c(this).attr("id").replace("author-id-filter",""))}),d("search-view",!0),!1}),c(document).on("click","a.filter-none",function(){return c("#filter-selection").html(""),t(),!1}),c("#wj_paginator").on("click","a",function(){return c("#filter-selection").html(""),c(this).hasClass("selected")||(t({is_premium:"premium"===c(this).data("type")?1:0}),c("#wj_paginator a").removeClass("selected"),c(this).addClass("selected")),!1}),t()});