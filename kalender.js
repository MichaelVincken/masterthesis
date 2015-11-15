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

    $(".datepicker").width("100px");
}