
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

        jQuery.ajax({
          type:'GET',
          url:'https://eprofitanalyzer.com/AddtoCart/app/statusoff_product.php',  
          data:{
            'title':jQuery('[itemprop="name"]').text(),
            'shop': 'autosearchapp.myshopify.com'
          },        
          success:function(data){
            var mydata = jQuery.trim(data);
            var obj = jQuery.parseJSON(mydata);
            if(obj.query == 1){
              jQuery('form[action="/cart/add"]').addClass('my-app-form');
              var cartButton = jQuery('.my-app-form button').attr('class');
                  var buttonText = jQuery('.my-app-form button').text();
                  if(jQuery('[itemtype="http://schema.org/Product"]:eq(0)')){
                    if(obj.sett == 1){
                      jQuery('<center><button style=margin-top:20px;width:50%; id=custom-add-to-cart-btn>'+buttonText+'</button></center>').insertAfter(jQuery('[itemtype="http://schema.org/Product"]:eq(0)'));
                    }
                    else{
                      jQuery('<center><button style=margin-top:20px; id=custom-add-to-cart-btn>'+buttonText+'</button></center>').insertAfter(jQuery('[itemtype="http://schema.org/Product"]:eq(0)'));
                    }
                  }
                  else{
                    jQuery('<button style=margin-top:20px;id=custom-add-to-cart-btn>'+buttonText+'</button>').insertAfter(jQuery('[itemprop="description"]'));
                  }
                  jQuery('#custom-add-to-cart-btn').addClass(cartButton);
                  jQuery('#custom-add-to-cart-btn').click(function(){
                  jQuery('.my-app-form button').trigger('click');
                  });
            }
            else{
              console.log('bye');
            }
          }
        });                         
        

      });
      