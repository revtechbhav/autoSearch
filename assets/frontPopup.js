
    jQuery(document).ready(function(){
      var check;
      
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
      var page = jQuery('body').attr('class');
      var storeName = window.location.hostname; 
      var current_page = window.location.href;
      jQuery.ajax({
        type:'GET',
        url:'https://eprofitanalyzer.com/GiftBox/app/FrontPopUp.php',
        data:'storeName='+storeName+'&width='+screen.width+'&page='+current_page,
        success:function(data){
          console.log(data);
          jQuery('body').append(data);
        }
      });

    });
    