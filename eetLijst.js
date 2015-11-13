/**
 * Created by Michael on 12/11/2015.
 */
$(document).ready(function(){

    function testFunction(){
        $(".doel").hide();

    };
    
$("#voedingsdagboek tr").click(function(){
   $(this).addClass('selected').siblings().removeClass('selected');    
   var value=$(this).find('td:nth-child(2)').html();
   alert(value);    
});

$('.ok').on('click', function(e){
    alert($("#voedingsdagboek tr.selected td:nth-child(3)").html());
});

});