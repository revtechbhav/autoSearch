

						(function(){

							window.FacebookPixel = undefined;

							var loadScript = function(url, callback){

								var script = document.createElement('script');

								script.type = 'text/javascript';



    // If the browser is Internet Explorer.

								if (script.readyState){

									script.onreadystatechange = function(){

										if (script.readyState == 'loaded' || script.readyState == 'complete'){

											script.onreadystatechange = null;

											callback();

										}

									};

    // For any other browser.

								} else {

									script.onload = function(){

										callback();

									};

								}



								script.src = url;

								document.getElementsByTagName('head')[0].appendChild(script);

							};

							

							

							

							if(typeof fbq === 'undefined') {

								var myAppJavaScript = function($){

									!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?

										n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;

										n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;

										t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,

										document,'script','//connect.facebook.net/en_US/fbevents.js');



										window.FacebookPixel = fbq;



										$(document).ready(function() {



											var str = JSON.stringify();

											var newArr = JSON.parse(str);

											



											for(var i=0; i < newArr.length; i++){

												FacebookPixel('init', newArr[i]); 



											}

											



											FacebookPixel('track', 'PageView');



											



											var addedToCart = false;

											var addToCart = function() {

												if(!addedToCart) {

													FacebookPixel('track', 'AddToCart');

													addedToCart = true;

												}

											};



											if (location.pathname.match(/\/products\/.+/)) {

												FacebookPixel('track', 'ViewContent');



												$('form[action="/cart/add"]').submit(function() {

													addToCart()

												});



												$(document).ajaxComplete(function(e, xhr, settings) {

													if (settings.url.match(/^\/cart\/add/)) {

														addToCart()

													}

												});

											}



											if (location.pathname.match(/^\/cart/)) {

												$('form[action="/cart"]').submit(function(e) {

													FacebookPixel('track', 'InitiateCheckout');

												});

											}



											if (Shopify.Checkout && Shopify.Checkout.page == 'thank_you') {

												var getOrderID=localStorage.getItem('order_id');

												var orderID=Shopify.checkout.order_id;

												if(getOrderID != orderID){

													var checkout = Shopify.checkout

													FacebookPixel('track', 'Purchase', {

														value: checkout.total_price, 

														currency: checkout.currency

													});	

													localStorage.setItem('order_id', orderID);					

												}

												else

												{



												}

											}

											

										});

									};



									

									





									if (typeof jQuery === 'undefined') {

										loadScript('//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js', function(){

											jQuery220 = jQuery.noConflict(true);

											myAppJavaScript(jQuery220);

										});

									} else {

										myAppJavaScript(jQuery);

									}

									

								}





								

							})()