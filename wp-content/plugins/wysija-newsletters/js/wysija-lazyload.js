var wysijaLazyLoad={options:{data:[],task:null,successCallback:null,errorCallback:null,targetContainer:null,filter:null,spinner:".spinner"},jqXHR:null,init:function(a,o){options=wysijaLazyLoad.options,"undefined"!=typeof options.data&&"undefined"!=typeof options.task&&jQuery.isArray(options.data)&&("undefined"!=typeof options.filter&&null!==options.filter&&(wysijaAJAX.filter=options.filter),wysijaAJAX.task=options.task,blockNames=wysijaLazyLoad.options.data.splice(0,1),0<parseInt(blockNames.length)&&(wysijaAJAX.block=blockNames[0],wysijaLazyLoad.lazyLoad(a,o,function(){})))},lazyLoad:function(o){wysijaLazyLoad.jqXHR=jQuery.ajax({type:"POST",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,dataType:"json",beforeSend:function(){jQuery(wysijaLazyLoad.options.spinner).show()},success:function(a){blockNames=wysijaLazyLoad.options.data.splice(0,1),0<parseInt(blockNames.length)?(wysijaAJAX.block=blockNames[0],wysijaLazyLoad.lazyLoad(o)):jQuery(wysijaLazyLoad.options.spinner).hide(),o(a,parseInt(blockNames.length))},error:function(){blockNames=wysijaLazyLoad.options.data.splice(0,1),0<parseInt(blockNames.length)&&(wysijaAJAX.block=blockNames[0],wysijaLazyLoad.lazyLoad(o))}})},terminate:function(){try{wysijaLazyLoad.options.data=new Array,wysijaLazyLoad.jqXHR.abort()}catch(a){}}};