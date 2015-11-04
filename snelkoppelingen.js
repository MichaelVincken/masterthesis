/**
 * Created by Wander on 3/11/2015.
 */
$(document).ready(function(){

    function testFunction(){
        $(".doel").hide();

    };





});
var x=0;
function backFunction(){
    $(".doel").hide();
    alert("hello x = " + x);

};
function homeFunction() {
    x = x+1;
    //window.history.pushState( ,"state"+x,"state"+x );
    window.location= "#state"+x;
    window.history.pushState(null,null,null);

};
function filterFunction() {
    //$(".doel").hide();
    //window.location.reload(false);
    //window.location.href = window.location.pathname;
    //location.hash = "count:"+x;
    window.onpo



};