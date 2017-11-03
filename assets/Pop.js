
      jQuery(document).ready(function(){
        var check;
        var getPage = __st.p;
        if(getPage == 'home') {
          getPage == 'home';
        } else {
          getPage = __st.rid;
        }
        jQuery('script').each(function(){
          var scripts = jQuery(this).attr('src');
          if(scripts != undefined) {
            scripts = scripts.search('bootstrap');
            if(scripts > 0) {
              check = scripts;
              return false;
            } 
            else {
              check = 0;
              return false;
            }
          }
        }); 
        if(check <= 0) {
          var script = '<link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css><script src=https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js></script><script src=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js></script>';
          jQuery('head').append(script);
        }
//          jQuery('header').find('form').addClass('suggestionbox');
//          jQuery('.suggestionbox').find('input[type="search"]').addClass('mylatestsearchbox');
// 		 jQuery('<div class=nesermain onload=loadingAjax(myDiv);><center class=loadercent><div id=mydiv><div class=loader style=display:none;></div></div></center><div class=serch><span class = prod><p>Products:</p><ul class=results></ul></span><ul class=count></ul><span class = colle><p>Collections:</p><ul class=newcollection></ul></span></div></div>').insertAfter('.mylatestsearchbox');
// 		 jQuery(document).mouseup(function(e) {
// 		     var container = jQuery('.serch, .prod, .colle, .count');
// 		     if (!container.is(e.target) && container.has(e.target).length === 0){
// 		         container.hide();
// 		     }
// 		 });		
// 		jQuery('.serch, .prod, .colle, .count').hide();
 //        jQuery('.mylatestsearchbox').click(function(){
  //       	var searchClass = jQuery(this).attr('class');
 //        	var relt = searchClass.split(' ');
//			 var newSearchClass = '';
	//		 for(var k=0; k < relt.length; k++){
//			 	newSearchClass += '.'+relt[k];
//			 }
// 			 var delay = (function(){
// 			   var timer = 0;
// 			   return function(callback, ms){
// 			   	clearTimeout (timer);
// 			   	timer = setTimeout(callback, ms);
// 			   };
// 			 })();			
// 	         jQuery(newSearchClass).on('keyup',function loadingAjax(e){
// 	         	var thiss = jQuery(this);
// 	         	delay(function(){
// 		         var searchValue = thiss.val();
// 		        	if(searchValue != '' && searchValue.length >= 4){
// 		        		jQuery.ajax({
// 		             	type:'GET',
// 		             	url:'https://eprofitanalyzer.com/SearchApp/app/newsearch.php',
// 		             	data:{
// 		               		'title':searchValue
// 		             	},
// 		             	beforeSend: function(){
// 		             		jQuery('.loader').show();
// 		             		jQuery('.prod').attr('style','padding-top:35px');
// 		             	},
// 			             success:function(data){
// 			 				jQuery('.prod').attr('style','padding-top:0px');
// 			 				jQuery('.loader').hide();
// 			               	var obj = jQuery.parseJSON(data);
// 			               	var html = '';
// 			               	var newcoll = '';
// 			               	var arr = obj.products;			        		  
// 			               	if(arr != ''){
// 			 	              	for (var i = 0; i < arr.length; i++) {
// 			 					  	var title = arr[i].title;		 					  	
// 			 					  	var res = title.substr(0,50);
// 			 					  	var handle = arr[i].handle;
// 			 					  	var variants = arr[i].variants;
// 			 					  	var rate = '';
// 			 					  	var image = arr[i].image;
// 			 					  	var source = '';
// 			 					  	for(var img in image){
// 			 					  		source = image.src;			 					  		
// 			 					  	}
// 			 					  	for (var vari in variants) {
// 			 					    	rate = variants[vari].price;
// 			 					  	}
// 									var tags = arr[i].tags;
// 			 					  	var tagsTrim = tags.trim();
//         							var tagsSplit = tags.split(',');
        							
// 									html += '<li><a href=https://autosearchapp.myshopify.com/products/'+handle+'><span class=thumbnail><img src='+source+' width=50px; height=50px /></span><span class=title>'+res+'....</span><span class=price>Dhs.'+rate+'</span></a></li>';
			 						
// 			 					}
// 			 				}
// 			 				else{
// 			 					html += '<li>No Results</li>';
// 			 				}
// 			 				if(obj.collection != ''){
// 			 					for(var coll in obj.collection){
// 			 						var coltextlimit = obj.collection[coll].title;
// 			 						var reslt = coltextlimit.substr(0,50);
// 			 						newcoll += '<li><a href=https://autosearchapp.myshopify.com/collections/'+obj.collection[coll].handle+'><span class=title>'+reslt+'....</span></a></li>';
// 			 					}
// 			 				}
// 			 				else{
// 			 					newcoll += '<li>No Results</li>';
// 			 				}	
// 			 				var textValue = jQuery('.mylatestsearchbox').val();
// 			 				jQuery('.serch, .prod, .colle, .count').show(); 
// 			 				jQuery('.results').html(html);
// 			 				jQuery('.newcollection').html(newcoll);	
// 			 				jQuery('.count').html('<li><a href=https://autosearchapp.myshopify.com/pages/mysearch?q='+textValue+'>See all results</a><li>');
			 				
// 			             }
// 		         	});
// 		        	}
// 		        	else{
// 		        		jQuery('.serch, .prod, .colle, .count').attr('style','display:none');
// 		        	}

// 			 	},500);
// 	         });  
 //        });         
      });
      