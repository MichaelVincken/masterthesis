/**
 * Created by Wander on 15/11/2015.
 */
$(document).ready(function(){



});

$(function(){
    $('#kalenderDiv').datepicker({

        showOtherMonths: true,
        dayNamesMin: [ 'Ma', 'Di', 'Woe', 'Don', 'Vrij', 'Zat','Zon'],

    });
});



function testResize (){
    $(".kalender").css({'background': 'none'});

    $(".kalender").datepicker({
        onSelect: function(dateText, inst) {

            alert('on select triggered');


        }

    });
    $(".kalender").datepicker({
        onShow: function(){
            $(".ui-datepicker").css('height', 50)
        }
    });
}