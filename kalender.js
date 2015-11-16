/**
 * Created by Wander on 15/11/2015.
 */
$(document).ready(function(){



});


$(function(){
    $('.kalenderFrom').datepicker({

        showOtherMonths: true,
        dayNamesMin: [ 'Zon', 'Ma', 'Di', 'Woe', 'Don', 'Vrij', 'Zat'],

    });

    $('.kalenderTo').datepicker({

        showOtherMonths: true,
        dayNamesMin: [ 'Zon', 'Ma', 'Di', 'Woe', 'Don', 'Vrij', 'Zat']

    });
});




function testResize (){
    /*$(".kalender").css({'background': 'none'});

    $(".kalender").datepicker({
        onSelect: function(dateText, inst) {

            alert('on select triggered');


        }

    });
    var test = $(".kalender").datepicker("widget");
   console.log(test);*/


}