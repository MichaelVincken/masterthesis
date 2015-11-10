/**
 * Created by Wander on 9/11/2015.
 */
$(document).ready(function(){

    function testFunction(){
        $(".doel").hide();

    };
});
function getSize(d) {
    var bbox = d3.select(this).node().getBBox(),
        cbbox = d3.select(this).node().parentNode.getBBox(),
        scale = Math.min(cbbox.width/bbox.width, cbbox.height/bbox.height);
    d.scale = scale;
};
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

function moveBarChartLeft(){
    d3.selectAll(".staafje").each(function(d,i){
        console.log(this);
        d3.select(this).attr("x",""+(parseFloat(d3.select(this).style("x"))+100)+"");

    });

};

function getTransWidth(){
    return 40;
    return Math.round(width/34);
}

var staafBottomHeight;
var trans;
var axis1;
var scaleHeight1;
var staaf2;
var staaf1;
var staafTopHeight;
var staafLength;
function drawOriginalBars(){

    scaleHeight1 = scaleHeight(dataArray);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("kcal")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");

    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafje")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArray,staafLength)+"")
        .attr("fill","pink");

    staaf2 =canvas.append("rect")
        .attr("class", "staafje")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArray,staafLength)+"")
        .attr("fill","red");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArray);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("koolhydraten")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafje")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArray,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafje")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArray,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArray);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("koolhydraten")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafje")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArray,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafje")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArray,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArray);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("koolhydraten")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafje")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArray,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafje")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArray,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArray);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("koolhydraten")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafje")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArray,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafje")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArray,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArray);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("koolhydraten")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafje")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArray,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafje")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArray,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArray);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("koolhydraten")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafje")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArray,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafje")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArray,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArray);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("koolhydraten")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafje")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArray,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafje")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArray,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArray,staafLength)+"")
        .attr("fill","orange");

};

function getFontSize(){
    return Math.min(width,height)/9;
}

