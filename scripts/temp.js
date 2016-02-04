/**
 * Created by Wander on 10/11/2015.
 */



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


 //VINCKEN CRAP :p

 <table id="voedingsdagboek">

 <tr>
 <td colspan="2"  align="center"><b>1 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>2 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>3 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>4 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>5 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>6 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>7 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>8 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u30</td>
 <td>Rijstkoek (5 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u35</td>
 <td>Bicky Burger (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>16u00</td>
 <td>Twix (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>19u10</td>
 <td>Friet met mosselen (1kg) en mayonnaise</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>9 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u30</td>
 <td>Boterham met Nutella chocopasta (3 stuks) </td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u35</td>
 <td>Tomatensoep met balletjes (1 bord)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u35</td>
 <td>Crock Monsieur (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>18u15</td>
 <td>Medium friet met curryworst (2 stuks)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>10 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>08u30</td>
 <td>Cornflakes Kellogs Tresor (1 kom) </td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>13u00</td>
 <td>Rijst met kip en currysaus (1 portie)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>19u35</td>
 <td>Sandwish met kaas en hesp (4 stuks)</td>
 </tr>



 <tr>
 <td colspan="2"  align="center"><b>11 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>06u50</td>
 <td>Boterham met Tonijnsla (5 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u20</td>
 <td>Ovenschotel puree, spinazie en gehakt</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pizza Margherita</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>12 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>13 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>14 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>15 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>16 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>17 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>18 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u15</td>
 <td>Havermout (2 kommen)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u10</td>
 <td>Wraps met zalm (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>17u45</td>
 <td>Pasta met kaassaus (2 porties)</td>
 </tr>

 <tr>
 <td colspan="2"  align="center"><b>19 NOVEMBER 2015</b></td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>07u30</td>
 <td>Rijstkoek (5 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>12u35</td>
 <td>Bicky Burger (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>16u00</td>
 <td>Twix (2 stuks)</td>
 </tr>
 <tr onClick='createDialog(this)'>
 <td>19u10</td>
 <td>Friet met mosselen (1kg) en mayonnaise</td>
 </tr>
 </table>



 */