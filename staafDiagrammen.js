/**
 * Created by Wander on 9/11/2015.
 */
$(document).ready(function(){

    function testFunction(){
        $(".doel").hide();

    };

});
var isSelected=0;
function selectAlgemeen(){
    if(isSelected==1){
        moveBarChartRight();
    }else if(isSelected==2){
        moveBarChartRight();
        moveBarChartRight();
    }
    isSelected=$('input[name="voedingswaarde"]:checked').val();
};

function selectVitamines(){
    if(isSelected==0){
        moveBarChartLeft();
    }else if(isSelected==2){
        moveBarChartRight();
    }
    isSelected=$('input[name="voedingswaarde"]:checked').val();
}

function selectMineralen(){
    if(isSelected==0){
        moveBarChartLeft();
        moveBarChartLeft();
    }else if(isSelected==1){
        moveBarChartLeft();
    }
    isSelected=$('input[name="voedingswaarde"]:checked').val();

}
/*
function getSize(d) {
    var bbox = d3.select(this).node().getBBox(),
        cbbox = d3.select(this).node().parentNode.getBBox(),
        scale = Math.min(cbbox.width/bbox.width, cbbox.height/bbox.height);
    d.scale = scale;
};*/
function scaleHeight(dataArray){

    return d3.scale.linear()
        .domain([Math.min(0,Math.min.apply(Math,dataArray)),Math.max.apply(Math,dataArray)])
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
    d3.selectAll(".staafjeZelf").each(function(d,i){

        d3.select(this).attr("x",""+(parseFloat(d3.select(this).style("x"))-width)+"");

    });

    d3.selectAll(".staafjeStandaard").each(function(d,i){

        d3.select(this).attr("x",""+(parseFloat(d3.select(this).style("x"))-width)+"");

    });

    d3.selectAll(".staafaxis").each(function(d,i){

        var move = d3.transform(d3.select(this).attr("transform")).translate[0] - width;
        d3.select(this).attr("transform","translate("+move+",0)");

    });

    d3.selectAll(".staaftekst").each(function(d,i){

        d3.select(this).attr("x",""+(parseFloat(d3.select(this).attr("x"))-width)+"");

    });

};

function moveBarChartRight(){
    d3.selectAll(".staafjeZelf").each(function(d,i){

        d3.select(this).attr("x",""+(parseFloat(d3.select(this).style("x"))+width)+"");

    });

    d3.selectAll(".staafjeStandaard").each(function(d,i){

        d3.select(this).attr("x",""+(parseFloat(d3.select(this).style("x"))+width)+"");

    });

    d3.selectAll(".staafaxis").each(function(d,i){

        var move = d3.transform(d3.select(this).attr("transform")).translate[0] + width;
        d3.select(this).attr("transform","translate("+move+",0)");

    });

    d3.selectAll(".staaftekst").each(function(d,i){

        d3.select(this).attr("x",""+(parseFloat(d3.select(this).attr("x"))+width)+"");

    });
};
function getTransWidth(){

    return Math.round(width/34);
}

function drawBar(dataArray, transExtra, bottomText) {

    var staafBottomHeight;
    var trans;
    var axis1;
    var scaleHeight1;
    var staaf2;
    var staaf1;
    var staafTopHeight;
    var staafLength;

    scaleHeight1 = scaleHeight(dataArray);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = transExtra + getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class", "staafaxis")
        .attr("transform", "translate(" + trans + ",0)")
        .style({'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({'font-size': '12px'});

    canvas.append("text")
        .attr("class", "staaftekst")
        .attr("x", function () {
            return trans + width / 100 + 0.5 * width / 20
        })
        .attr("y", function () {
            return d3.select("#staaftest").node().getBoundingClientRect().height - d3.select("#staaftest").node().getBoundingClientRect().height / 10
        })
        .text(bottomText)
        .attr("font-size", "" + getFontSize() + "")
        .style("text-anchor", "middle");

    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height - d3.select("#staaftest").node().getBoundingClientRect().height / 5;
    staafTopHeight = d3.select("#staaftest").node().getBoundingClientRect().height / 20;
    staafLength = staafBottomHeight - staafTopHeight;
    staaf1 = canvas.append("rect")
        .attr("class", "staafjeZelf")
        .attr("x", function () {
            return trans + width / 100
        })
        .attr("y", "" + (staafTopHeight + (staafLength - calculateHeightOfBar(0, dataArray, staafLength))) + "")
        .attr("width", "" + width / 20 + "")
        .attr("height", "" + calculateHeightOfBar(0, dataArray, staafLength) + "")
        .attr("fill", "pink");

    staaf2 = canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x", function () {
            return trans + width / 100 + 0.5 * width / 20
        })
        .attr("y", "" + (staafTopHeight + (staafLength - calculateHeightOfBar(1, dataArray, staafLength))) + "")
        .attr("width", "" + width / 20 + "")
        .attr("height", "" + calculateHeightOfBar(1, dataArray, staafLength) + "")
        .attr("fill", "red");
};

function drawOriginalBarChart(){

    var dataArrayKcal;
    var dataArrayKoolhydraten;
    var dataArrayEiwitten ;
    var dataArrayWater;
    var dataArraySuikers ;
    var dataArrayVetten ;
    var dataArrayCholesterol ;
    var dataArrayVezels ;

    var dataArrayVitA ;
    var dataArrayVitB1 ;
    var dataArrayVitB2 ;
    var dataArrayVitB6;
    var dataArrayVitB11;
    var dataArrayVitB12 ;
    var dataArrayVitC ;
    var dataArrayVitD ;

    var dataArrayNatrium ;
    var dataArrayKalium ;
    var dataArrayCalcium ;
    var dataArrayFosfor ;
    var dataArrayIjzer ;
    var dataArrayMagnesium ;
    var dataArrayKoper;
    var dataArrayZink ;
    var trans = 0;
    drawBar(dataArrayKcal,trans,"kcal");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayKoolhydraten,trans,"Koolhydraten (g)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayEiwitten,trans,"Eiwitten (g)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayWater,trans,"Water (g)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArraySuikers,trans,"Suikers (g)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayVetten,trans,"Vetten (g)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayCholesterol,trans,"Cholesterol (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayVezels,trans,"Vezels (g)");
    trans = width;
    drawBar(dataArrayVitA,trans,"A (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayVitB1,trans,"B1 (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayVitB2,trans,"B2 (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayVitB6,trans,"B6 (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayVitB11,trans,"B11 (\xB5g)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayVitB12,trans,"B12 (\xB5g)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayVitC,trans,"C (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayVitD,trans,"D (\xB5g)");
    trans = 2*width;
    drawBar(dataArrayNatrium,trans,"Natrium (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayKalium,trans,"Kalium (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayCalcium,trans,"Calcium (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayFosfor,trans,"Fosfor (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayIjzer,trans,"Ijzer (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayMagnesium,trans,"Magnesium (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayKoper,trans,"Koper (mg)");
    trans = trans+width/100+1.5*width/20;
    drawBar(dataArrayZink,trans,"Zink (mg)");

};

/*
function drawOriginalBars(){

    scaleHeight1 = scaleHeight(dataArrayKcal);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
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
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayKcal,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayKcal,staafLength)+"")
        .attr("fill","pink");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayKcal,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayKcal,staafLength)+"")
        .attr("fill","red");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayKoolhydraten);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("koolhydraten (g)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayKoolhydraten,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayKoolhydraten,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayKoolhydraten,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayKoolhydraten,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram3////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayEiwitten);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("eiwitten (g)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayEiwitten,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayEiwitten,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayEiwitten,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayEiwitten,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram4////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayWater );

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("water (g)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayWater ,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayWater ,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayWater ,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayWater ,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram5////////////////////////////////
    scaleHeight1 = scaleHeight(dataArraySuikers);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("suikers (g)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArraySuikers,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArraySuikers,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArraySuikers,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArraySuikers,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram6////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayVetten);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("vetten (g)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVetten,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVetten,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVetten,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVetten,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram7////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayCholesterol);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("cholesterol (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayCholesterol,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayCholesterol,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayCholesterol,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayCholesterol,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram8////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayVezels);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("vezels (g)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVezels,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVezels,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVezels,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVezels,staafLength)+"")
        .attr("fill","orange");

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////DEEEEEEL 2//////////////////////////////////////////////////////



    scaleHeight1 = scaleHeight(dataArrayVitA );

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = width+getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("A (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");

    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVitA ,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVitA ,staafLength)+"")
        .attr("fill","pink");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVitA ,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVitA ,staafLength)+"")
        .attr("fill","red");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayVitB1);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("B1 (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVitB1,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVitB1,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVitB1,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVitB1,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram3////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayVitB2);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("B2 (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVitB2,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVitB2,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVitB2,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVitB2,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram4////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayVitB6);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("B6 (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVitB6,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVitB6,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVitB6,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVitB6,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram5////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayVitB11);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("B11 (\xB5g)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVitB11,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVitB11,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVitB11,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVitB11,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram6////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayVitB12);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("B12 (\xB5g)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVitB12,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVitB12,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVitB12,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVitB12,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram7////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayVitC);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("C (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVitC,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVitC,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVitC,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVitC,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram8////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayVitD);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("D (\xB5g)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayVitD,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayVitD,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayVitD,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayVitD,staafLength)+"")
        .attr("fill","orange");


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////DEEL 3//////////////////////////////////////////////////////



    scaleHeight1 = scaleHeight(dataArrayNatrium);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = 2*width+getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("Natrium (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");

    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayNatrium,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayNatrium,staafLength)+"")
        .attr("fill","pink");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayNatrium,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayNatrium,staafLength)+"")
        .attr("fill","red");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram2////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayKalium);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("Kalium (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayKalium,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayKalium,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayKalium,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayKalium,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram3////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayCalcium);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("Calcium (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayCalcium,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayCalcium,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayCalcium,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayCalcium,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram4////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayFosfor);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("Fosfor (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayFosfor,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayFosfor,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayFosfor,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayFosfor,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram5////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayIjzer);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("Ijzer (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayIjzer,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayIjzer,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayIjzer,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayIjzer,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram6////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayMagnesium);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("Magnesium (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayMagnesium,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayMagnesium,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayMagnesium,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayMagnesium,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram7////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayKoper);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("Koper (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayKoper,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayKoper,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayKoper,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayKoper,staafLength)+"")
        .attr("fill","orange");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Staafdiagram8////////////////////////////////
    scaleHeight1 = scaleHeight(dataArrayZink);

    axis1 = d3.svg.axis()
        .scale(scaleHeight1)
        .orient("left")
        .ticks(5);
    trans = trans+width/100+1.5*width/20 +getTransWidth();
    console.log(trans);
    canvas.append("g")
        .attr("class","staafaxis")
        .attr("transform","translate("+trans+",0)")
        .style({ 'stroke': 'Black', 'fill': 'none', 'stroke-width': '1.5'})
        .call(axis1)
        .selectAll('.tick > text').style({ 'font-size': '12px'});

    canvas.append("text")
        .attr("class","staaftekst")
        .attr("x", function(){return trans+width/100+0.5*width/20 })
        .attr("y", function(){return d3.select("#staaftest").node().getBoundingClientRect().height -d3.select("#staaftest").node().getBoundingClientRect().height/10})
        .text("Zink (mg)")
        .attr("font-size", ""+getFontSize()+"")
        .style("text-anchor", "middle");


    staafBottomHeight = d3.select("#staaftest").node().getBoundingClientRect().height-d3.select("#staaftest").node().getBoundingClientRect().height/5;
    staafTopHeight =  d3.select("#staaftest").node().getBoundingClientRect().height/20;
    staafLength = staafBottomHeight-staafTopHeight;
    staaf1 =canvas.append("rect")
        .attr("class","staafjeZelf")
        .attr("x",function (){return trans+width/100})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(0,dataArrayZink,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+ calculateHeightOfBar(0,dataArrayZink,staafLength)+"")
        .attr("fill","blue");

    staaf2 =canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x",function (){return trans+width/100+0.5*width/20})
        .attr("y", ""+(staafTopHeight+(staafLength-calculateHeightOfBar(1,dataArrayZink,staafLength)))+"")
        .attr("width",""+width/20+"")
        .attr("height",""+calculateHeightOfBar(1,dataArrayZink,staafLength)+"")
        .attr("fill","orange");

};
*/
function getFontSize(){
    return 13.5;
    //return Math.max(18,(width+height)/ )
    return Math.min(width,height)/9;
}

