/**
 * Created by Wander on 15/11/2015.
 */
$(document).ready(function(){



});

$(function(){
    $('#kalenderDiv').datepicker({

        showOtherMonths: true,
        dayNamesMin: [ 'Ma', 'Di', 'Woe', 'Don', 'Vrij', 'Zat','Zon']

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
    $("[class*=ui-state-default]").css("background","blue");
    $(".kalender").datepicker({


    });
}