
          


           if (Shopify.Checkout && Shopify.Checkout.page == 'thank_you') {

                 ProcessThese();
                function ProcessThese()
                {
                    var nodes = document.getElementsByClassName('content');
                    var code=nodes[0].innerHTML;
                    var newCode=code+'<span id=loader style=top:0;text-align:center;position:fixed;height:100%;z-index:999999;left:0px;width:100%;background-color:rgba(122,123,123,0.6);><span style=display:inline-block;font-size:23px;height:240px;width:25%;margin-top:10%><img src=https://www.sanadig.com/img/balls_loading.gif width:auto><p style=color:white>Please wait ...</p></span></span>';
                    nodes[0].innerHTML=newCode;
                }

                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.src = 'https://www.sanadig.com/kk/js.js';
                document.head.appendChild(s);
                  

                setTimeout(function(){
                   jQuery('.map.leaflet-container.leaflet-fade-anim').hide();
                   //jQuery('.total-line-table').after('<span id=loader><img src=https://www.sanadig.com/img/balls_loading.gif id=loader>Loading ...</span>');
                   var order_id= Shopify.checkout.order_id;
                    jQuery.ajax({
                    method:'POST',
                    url:'https://www.sanadig.com/proxy/kksendMail.php',
                    data:{order_id:order_id},
                    success:function(resp){
                         jQuery('.step__footer a').css('display','block');
                         jQuery('#loader').css('display','none');
                    }
                  });

                  jQuery.ajax({
                    method:'POST',
                    url:'https://www.sanadig.com/proxy/demo.php',
                    data:{order_id:order_id},
                    success:function(resp){
                         jQuery('.step__footer a').css('display','block');
                         jQuery('#loader').css('display','none');
                    }
                  });


                  },3000);


           }

      