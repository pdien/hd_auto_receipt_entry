$(function(){
    
   $('input').bind('keyup', function(e){
       
        var $p = $(this).parent().closest('p');

        if(e.keyCode == 38){
            $p.prev().find('input:text').focus();
        }
        else if(e.keyCode == 40){
            $p.next().find('input:text').focus();
        }
        else if(e.keyCode == 13){
            addEntry();
        }
    }
  );
});