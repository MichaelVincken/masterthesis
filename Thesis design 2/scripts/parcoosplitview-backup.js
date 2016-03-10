/**
 * Created by Wander on 4/03/2016.
 */
/**
 * Created by Wander on 1/03/2016.
 */



var visi=false;
function drawParCoo(removalList,replacementList){
    d3.select(".display").style("visibility","visible");
    var divX = d3.select("body").append("div")
        .attr("id","parcoorddiv")
        .attr("class","parcoordss")
        .style("position", "absolute")
        .style("z-index", "8")
        .style("visibility", "hidden")
        .style("background-color","white")
        .style("top",""+(d3.select(".chart").node().getBoundingClientRect().top+10)+"px")
        .style("left",""+(d3.select(".chart").node().getBoundingClientRect().left)+"px")
        .style("width","95%")
        .style("height","80%");
    //padding en canvasgrootte
    var m = [30, 10, 10, 50],
        w = window.innerWidth*0.85 - m[1] - m[3],
        h = window.innerHeight*0.75 - m[0] - m[2];
    //var color = d3.scale.category20();


    var x = d3.scale.ordinal().rangePoints([0, w], 1),
        y = {},
        dragging = {};

    var line = d3.svg.line().defined(function(d) { return d[1] != null; }),
        axis = d3.svg.axis().orient("left"),
        background,
        foreground;


    var svg = divX.append("svg:svg")
        .attr("class", "parcoordSVG")
        .append("svg:g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
//resources/parcoo/parcoo.csv
    //resources/testCSV.csv
    d3.csv("resources/testCSV.csv", function(parcoo) {

        var l = removalList.length;
        for(i=0;i<l;i++){
            parcoo.splice(removalList[i],1);
            try {
                //       for(k=i;k<l;k++){
                //         removalList[k+1] = removalList[k+1] - 1;
                //   }

            }catch (err){}

        }
        console.log(replacementList);
        console.log(parcoo);
        for(i= 0;i<replacementList.length;i++){
            parcoo[replacementList[i][0]].Maaltijd = replacementList[i][1][2];
            parcoo[replacementList[i][0]].Kcal =replacementList[i][1][5];
            parcoo[replacementList[i][0]].Suikers = replacementList[i][1][8];
            parcoo[replacementList[i][0]].Vetten = replacementList[i][1][9];
            parcoo[replacementList[i][0]].Magnesium = replacementList[i][1][11];
            parcoo[replacementList[i][0]].Vezels = replacementList[i][1][12];
            parcoo[replacementList[i][0]].Cholesterol = replacementList[i][1][10];
            parcoo[replacementList[i][0]].Koolhydraten =replacementList[i][1][6];
            parcoo[replacementList[i][0]].Eiwitten =replacementList[i][1][7];
        }

        for(i=0;i<parcoo.length;i++){
            delete parcoo[i].Sport;
            delete parcoo[i].Opmerkingen;

        }
        var doseObject = {Dag:"15 FEBRUARI",Uur:"12u00",Maaltijd:"Vlees",Kcal:"3300",Koolhydraten:"340",Eiwitten:"1000",Suikers:"60",Vetten:"100",Cholesterol:"230",Magnesium:"350",Vezels:"30"};
        // Extract the list of dimensions and create a scale for each.
        x.domain(dimensions = d3.keys(parcoo[0]).filter(function(d) {
            if(d == "Dag" || d == "Uur" || d == "Maaltijd") {

                y[d] = d3.scale.ordinal()
                    .domain([doseObject[d]].concat(parcoo.map(function(p) {return p[d];})))
                    .rangePoints([h,0]);
            }
            else {(y[d] = d3.scale.linear()
                .domain(d3.extent(parcoo.concat(doseObject), function(p) { return parseFloat(p[d]); }))
                .range([h, 0]));

            }

            return true;
        }));

        //    dimensions = dimensions.slice(0,3).concat(dimensions.slice(5,dimensions.length));

        // Add grey background lines for context.
        background = svg.append("svg:g")
            .attr("class", "background")
            .selectAll("path")
            .data(parcoo)
            .enter().append("svg:path")
            .attr("d", path)
            .attr("id",function(d,i){ return "background"+i;})
            .on("click", function(d){return mouseClick(d3.select(this))});

        // Add blue foreground lines for focus.

        foreground = svg.append("svg:g")
            .attr("class", "foreground")
            .selectAll("path")
            .data(parcoo)
            .enter().append("svg:path")
            .attr("d", path)
            .attr("id",function(d,i){ return "foreground"+i;})
            .on("mouseover", function(d){return mouseHover(d3.select(this))})
            .on("mousemove", function(d,i){return showTableInfo(d,i,(event.pageX+20),(event.pageY-45));})
            .on("mouseout", function(){return mouseLeave(d3.select(this))})
            .on("click", function(d){return mouseClick(d3.select(this))});



        //var doseObject = {Dag:"15 FEBRUARI",Uur:"8u40",Maaltijd:"Vlees",Kcal:"3300",Koolhydraten:"340",Eiwitten:"60",Suikers:"60",Vetten:"100",Cholesterol:"230",Magnesium:"350",Vezels:"30"};
        console.log(doseObject);
        console.log(parcoo[0])
        var dailyDose = svg.append("svg:g")
            .attr("class", "DAH")
            .selectAll("path")
            .data([doseObject])
            .enter().append("svg:path")
            .attr("d", path)
            .on("mouseover", function(d){return mouseHover(d3.select(this))})
            .on("mousemove", function(d,i){return showTableInfo(d,i,(event.pageX+20),(event.pageY-45));})
            .on("mouseout", function(){return mouseLeave(d3.select(this))});


        function mouseClick(path){
            var succes = false;
            var index = -1;


            foreground.style("display", function (d,i) {
                if(path.attr("id") == "foreground"+i || path.attr("id") == "background"+i  ){
                    succes = true;
                    index = i;
                    return  null;
                }else{
                    return "none";
                }
            });
            if(succes ==false){
                foreground.style("display", function (d,i) {
                    return null;
                })
            }
            if(index != -1){

                var selectedDag = parseInt(document.getElementById("trtest"+index).parentNode.parentNode.id.slice(5,7));

                highLightDays([selectedDag]);
            }

        }





        function mouseHover(obj){
            obj.style("background-color","#68A8E5");
            tooltip.style("visibility", "visible")
                .style("width","200px")
                .style("height","200px");



        }
        function mouseLeave(obj){
            obj.style("background-color","white");
            tooltip.style("visibility", "hidden");

        }
        function showTableInfo(data, index, x,y){

            tooltip.style("top", y+"px")
                .style("left",x+"px")
                .text("Dag:" +data.Dag+ "\n\r"+ "Uur:"+ data.Uur+ "\n\r"+ "Maaltijd.:" + data.Maaltijd + "\n\rKcal:" + data.Kcal+""+ "\n\rKoolhydraten:" + data.Koolhydraten+""+ "\n\rEiwitten:" + data.Eiwitten+""+ "\n\rSuikers:" + data.Suikers+""+ "\n\rVetten:" + data.Vetten+""+ "\n\rCholesterol:" + data.Cholesterol+""+ "\n\rMagnesium:" + data.Magnesium+""+ "\n\rVezels:" + data.Vezels+"");
        }


        // Add a group element for each dimension.
        var g = svg.selectAll(".dimension")
            .data(dimensions)
            .enter().append("svg:g")
            .attr("class", "dimension")
            .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
            .call(d3.behavior.drag()
                .on("dragstart", function(d) {
                    dragging[d] = this.__origin__ = x(d);
                    // background.attr("visibility", "hidden");
                })
                .on("drag", function(d) {
                    dragging[d] = Math.min(w, Math.max(0, this.__origin__ += d3.event.dx));
                    foreground.attr("d", path);
                    background.attr("d", path);
                    dimensions.sort(function(a, b) { return position(a) - position(b); });
                    x.domain(dimensions);
                    g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
                })
                .on("dragend", function(d) {
                    delete this.__origin__;
                    delete dragging[d];
                    transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
                    transition(foreground)
                        .attr("d", path);
                    background
                        .attr("d", path)
                        .transition()
                        .delay(500)
                        .duration(0);
                    //.attr("visibility", null);
                }));

        // Add an axis and title.
        g.append("svg:g")
            .attr("class", "axis")
            .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
            .append("svg:text")
            .attr("text-anchor", "middle")
            .attr("y", -9)
            .text(String);

        // Add and store a brush for each axis.
        g.append("svg:g")
            .attr("class", "brush")
            .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brush", brush)); })
            .selectAll("rect")
            .attr("x", -8)
            .attr("width", 16);

    });

    function position(d) {
        var v = dragging[d];
        return v == null ? x(d) : v;
    }

    function transition(g) {
        return g.transition().duration(500);
    }

    // Returns the path for a given data point.
    //function path(d) {
    //    return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
    //}
    function path(d) {
        return line(dimensions.map(function(p) {
            // check for undefined values
            if (d[p] == " "||d[p]=="NULL"||d[p]==null) return [x(p), null];

            return [x(p), y[p](d[p])];
        }));
    }


    // Handles a brush event, toggling the display of foreground lines.
    function brush(selected) {
        var selectedString = selected.toString();
        //if(selectedString== "Uur" || selectedString == "Dag" || selectedString == "Maaltijd"){
        // if(Math.abs(y[selectedString].brush.extent()[0] - y[selectedString].brush.extent()[1]) <20){return;}
        highLightDays([]);
        var actives = dimensions.filter(function (p) {
                return !y[p].brush.empty();
            }),
            extents = actives.map(function (p) {
                return y[p].brush.extent();
            });
        //console.log(actives);
        var objectContainer = [];
        foreground.style("display", function (d) {

            if( actives.every(function (p, i) {
                    if(actives[i] =="Uur" || actives[i] =="Dag" || actives[i] =="Maaltijd"){
                        return extents[i][0] <= y[actives[i]](d[p]) && y[actives[i]](d[p]) <= extents[i][1];
                    }else{
                        return extents[i][0] <= d[p] && d[p] <= extents[i][1];
                    }
                    // console.log(y[selectedString](d[p]));
                    //   console.log("extend: "+extents[i][0] )
                    // return extents[i][0] <= y[actives[i]](d[p]) && y[actives[i]](d[p]) <= extents[i][1];
                })){
                objectContainer = objectContainer.concat(d3.select(this)[0]);
                return null;
            }else {
                return "none";
            }
        });
        highLightDays(getAllDays(objectContainer));


        console.log(objectContainer);
        //var chosen =  y[selectedString].domain().filter(function(d){console.log(y[selectedString](d));return (y[selectedString].brush.extent()[0] <= y[selectedString](d)) && (y[selectedString](d) <= y[selectedString].brush.extent()[1])});

        //console.log(chosen);
        /*  //}else {
         var actives = dimensions.filter(function (p) {
         return !y[p].brush.empty();
         }),
         extents = actives.map(function (p) {
         return y[p].brush.extent();
         });
         // console.log(actives);
         foreground.style("display", function (d) {

         return actives.every(function (p, i) {
         //       console.log(d[p]);
         //     console.log("extend: "+extents[i][0] )
         return extents[i][0] <= d[p] && d[p] <= extents[i][1];
         }) ? null : "none";
         });*/

    }

    function getAllDays(paths){
        var returnArray = [];
        for(i = 0 ;i<paths.length;i++){
            var x =parseInt(document.getElementById("trtest"+paths[i].id.slice(10,12)).parentNode.parentNode.id.slice(5,7));
            returnArray = returnArray.concat([x]);
        }

        if(returnArray.length == 0){
            return [-1];
        }

        return returnArray;
    }

    function highLightDays(days){
        for(i  =0 ;i<n;i++){



            if(days.indexOf(i) != -1){
                d3.select("#dag"+i)
                    .style("opacity", "1");
            }else{
                d3.select("#dag"+i)
                    .style("opacity", "0.3");
            }
            if(days.length == 0){
                d3.select("#dag"+i)
                    .style("opacity", "1");
            }


        }

    }



}

function toggleView(){

    var visString = function(){if(!visi){return "hidden";}else{return "visible";}};

    visi = !visi;
    d3.select(".parcoordss").style("visibility",""+visString());

}
