/**
 * Created by Wander on 9/11/2015.
 */
$(document).ready(function(){

    function testFunction(){
        $(".doel").hide();

    };
});

function scaleHeight(dataArray){

    return d3.scale.linear()
        .domain([0,Math.max.apply(Math,dataArray)])
        .range([ d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5,parseFloat(canvas.style("height"),10)/20]);
};

function calculateHeightOfBar(i, dataArray, barHeight){
    var maxValue = Math.max.apply(Math,dataArray);
    console.log(dataArray[i]);
    if(dataArray[i] < maxValue){
        return (barHeight * (dataArray[i]/maxValue));
    }else{
        return barHeight;
    }

};