/**
 * Created by Wander on 9/11/2015.
 */
$(document).ready(function(){

    function testFunction(){
        $(".doel").hide();

    };

});
var isSelected=0;
var divId = "#staaftest";
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
        .range([ d3.select(divId).node().getBoundingClientRect().height-d3.select(divId).node().getBoundingClientRect().height/5,parseFloat(canvas.style("height"),10)/20]);
};

function calculateHeightOfBar(i, dataArray, barHeight){
    var maxValue = Math.max.apply(Math,dataArray);

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
    d3.selectAll(".staafjestandaardtekst").each(function(d,i){

        d3.select(this).attr("x",""+(parseFloat(d3.select(this).attr("x"))-width)+"");

    });

    d3.selectAll(".staafjezelftekst").each(function(d,i){

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
    d3.selectAll(".staafjestandaardtekst").each(function(d,i){

        d3.select(this).attr("x",""+(parseFloat(d3.select(this).attr("x"))+width)+"");

    });
    d3.selectAll(".staafjezelftekst").each(function(d,i){

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
    trans = transExtra;

    canvas.append("g")
        .attr("class", "staafaxis")
        .attr("transform", "translate(" + trans + ",0)")
        .style({'stroke': 'Black', 'fill': 'none', 'stroke-width': '1'})
        .call(axis1)
        .selectAll('.tick > text').style({'font-size': '12px'});

    var tekst = canvas.append("text")
        .attr("class", "staaftekst")
        .attr("x", function () {
            return trans + width / 100 + 0.5 * width / 20
        })
        .attr("y", function () {
            return d3.select(divId).node().getBoundingClientRect().height - d3.select(divId).node().getBoundingClientRect().height / 10
        })
        .text(bottomText)
        .attr("font-size", "" + getFontSize() + "")
        .style("text-anchor", "middle");







    staafBottomHeight = d3.select(divId).node().getBoundingClientRect().height - d3.select(divId).node().getBoundingClientRect().height / 5;
    staafTopHeight = d3.select(divId).node().getBoundingClientRect().height / 20;
    staafLength = staafBottomHeight - staafTopHeight;





    staaf2 = canvas.append("rect")
        .attr("class", "staafjeStandaard")
        .attr("x", function () {
            return trans + width / 100 + 0.5 * width / 20
        })
        .attr("y", "" + (staafTopHeight + (staafLength - calculateHeightOfBar(1, dataArray, staafLength))) + "")
        .attr("width", "" + width / 20 + "")
        .attr("height", "" + calculateHeightOfBar(1, dataArray, staafLength) + "")
        .attr("fill", "red");


    staaf1 = canvas.append("rect")
        .attr("class", "staafjeZelf")
        .attr("x", function () {
            return trans + width / 100
        })
        .attr("y", "" + (staafTopHeight + (staafLength - calculateHeightOfBar(0, dataArray, staafLength))) + "")
        .attr("width", "" + width / 20 + "")
        .attr("height", "" + calculateHeightOfBar(0, dataArray, staafLength) + "")
        .attr("fill", "pink");

    canvas.append("text")
        .attr("class", "staafjezelftekst")
        .attr("x", function () {
            return trans + width / 100 + 0.5 * width / 20;
        })
        .attr("y", "" + (staafTopHeight + (staafLength - calculateHeightOfBar(0, dataArray, staafLength)) +getFontSize()) + "")
        .text(dataArray[0])
        .attr("font-size", "" + getFontSize() + "")
        .style("text-anchor","middle")
        .attr("fill","white")
        .style("visibility","visible");

    canvas.append("text")
        .attr("class", "staafjestandaardtekst")
        .attr("x", function () {
            return trans + width / 100 + 1 * width / 20;
        })
        .attr("y", "" + (staafTopHeight + (staafLength - calculateHeightOfBar(1, dataArray, staafLength)) +getFontSize()) + "")
        .text(dataArray[1])
        .attr("font-size", "" + getFontSize() + "")
        .style("text-anchor","left")
        .attr("fill","white")
        .style("visibility","visible");


};
var width;
var height;
var canvas;
var lineSegment;
function drawOriginalBarChart(){
    d3.select(divId).selectAll("*").remove();
    
    width= d3.select(divId).node().getBoundingClientRect().width;
    height = d3.select(divId).node().getBoundingClientRect().height;

    canvas = d3.select(divId)
        .append("svg")
        .attr("width","100%")
        .attr("height", "100%")
        .attr("fill", "black");



    lineSegment= canvas.append("line")
        .attr("x1", function(){return d3.select(divId).node().getBoundingClientRect().width/50 })
        .attr("x2", function(){return d3.select(divId).node().getBoundingClientRect().width - d3.select(divId).node().getBoundingClientRect().width/50 })
        .attr("y1", function(){return d3.select(divId).node().getBoundingClientRect().height-d3.select(divId).node().getBoundingClientRect().height/5 })
        .attr("y2", function(){return d3.select(divId).node().getBoundingClientRect().height-d3.select(divId).node().getBoundingClientRect().height/5 })
        .attr("stroke-width", "2")
        .attr("stroke", "black");


    var trans = getTransWidth();
    drawBar(dataArrayKcal,trans,"kcal");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayKoolhydraten,trans,"Koolhydraten (g)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayEiwitten,trans,"Eiwitten (g)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayWater,trans,"Water (g)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArraySuikers,trans,"Suikers (g)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayVetten,trans,"Vetten (g)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayCholesterol,trans,"Cholesterol (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayVezels,trans,"Vezels (g)");
    trans = width+getTransWidth();
    drawBar(dataArrayVitA,trans,"A (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayVitB1,trans,"B1 (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayVitB2,trans,"B2 (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayVitB6,trans,"B6 (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayVitB11,trans,"B11 (\xB5g)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayVitB12,trans,"B12 (\xB5g)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayVitC,trans,"C (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayVitD,trans,"D (\xB5g)");
    trans = 2*width+getTransWidth();
    drawBar(dataArrayNatrium,trans,"Natrium (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayKalium,trans,"Kalium (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayCalcium,trans,"Calcium (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayFosfor,trans,"Fosfor (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayIjzer,trans,"Ijzer (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayMagnesium,trans,"Magnesium (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayKoper,trans,"Koper (mg)");
    trans = trans+width/100+1.5*width/20 + getTransWidth();
    drawBar(dataArrayZink,trans,"Zink (mg)");
    //appendHoverFunctionality();

    if(document.getElementById("voed2").checked){
        isSelected=0;
        $('#voed1').attr("checked","true");
        selectVitamines();
    }
    if(document.getElementById("voed3").checked){
        isSelected=0;
        $('#voed1').attr("checked","true");
        selectMineralen();
    }
};

function appendHoverFunctionality(){


    d3.selectAll(".staafjeZelf").each(function(d,i){

        d3.select(this).on("mouseover", function(k)
            {
                d3.selectAll(".staafjezelftekst").each(function(m,l){
                    if (i==l ) {

                        d3.select(this).style("visibility", "visible");
                    }
                });
            })
            .on("mouseout", function(d)
            {
                d3.selectAll(".staafjezelftekst").each(function(m,l){
                    if (i==l ) {

                        d3.select(this).style("visibility", "hidden");
                    }
                });
            })

    });

    d3.selectAll(".staafjeStandaard").each(function(d,i){

        d3.select(this).on("mouseover", function(k)
            {
                d3.selectAll(".staafjestandaardtekst").each(function(m,l){
                    if (i==l ) {

                        d3.select(this).style("visibility", "visible");
                    }
                });
            })
            .on("mouseout", function(d)
            {
                d3.selectAll(".staafjestandaardtekst").each(function(m,l){
                    if (i==l ) {

                        d3.select(this).style("visibility", "hidden");
                    }
                });
            })

    });




}



function getFontSize(){
    return 13.5;
    //return Math.max(18,(width+height)/ )
    return Math.min(width,height)/9;
}

