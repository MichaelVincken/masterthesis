/**
 * Created by Wander on 15/11/2015.
 */
$(document).ready(function(){



});

var kal1=false;
var kal2=false;
$(function(){
    $('.kalenderFrom').datepicker({
        maxDate:"0",
        dateFormat: 'dd-mm-yy',
        showOtherMonths: true,
        dayNamesMin: [ 'Zon', 'Ma', 'Di', 'Woe', 'Don', 'Vrij', 'Zat'],
        onSelect: function(dateText, inst) {

            if(inst.selectedDay==2){
                kal1=true;
                if(kal1 && kal2) {
                    dataArrayIjzer=[7,9];
                    drawOriginalBarChart();
                }
            }else{
                if(kal1 && kal2) {
                    dataArrayIjzer=[5,9];
                    drawOriginalBarChart();
                }
                kal1=false;
            }

        }
    });

    $('.kalenderTo').datepicker({
        maxDate:"0",
        dateFormat: 'dd-mm-yy',
        showOtherMonths: true,
        dayNamesMin: [ 'Zon', 'Ma', 'Di', 'Woe', 'Don', 'Vrij', 'Zat'],
        onSelect: function(dateText, inst) {
            console.log(dateText);
            console.log(inst.selectedDay);
            if(inst.selectedDay==2){
                kal2=true;
                if(kal1 && kal2) {
                    dataArrayIjzer=[7,9];
                    drawOriginalBarChart();
                }
            }else{
                if(kal1 && kal2) {
                    dataArrayIjzer=[5,9];
                    drawOriginalBarChart();
                }
                kal2=false;
            }
            var toDate = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);//Date one month after selected date
            var oneDay = new Date(toDate.getTime() + 86400000);
            console.log(oneDay);
        }

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