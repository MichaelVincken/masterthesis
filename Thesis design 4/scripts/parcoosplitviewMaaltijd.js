/**
 * Created by Wander on 4/03/2016.
 */
/**
 * Created by Wander on 1/03/2016.
 */


var y = {};

function drawParCoo(removalList,replacementList){
    d3.select(".display").style("visibility","visible");
    var divX = d3.select("body").append("div")
        .attr("id","parcoorddiv")
        .attr("class","parcoordss")
        .style("position", "absolute")
        //.style("z-index", "8")
        .style("visibility", "hidden")
        .style("background-color","white")
        .style("top",""+(d3.select(".chart").node().getBoundingClientRect().top+10)+"px")
        .style("left",""+(d3.select(".chart").node().getBoundingClientRect().left)+"px")
        .style("width","95%")
        .style("height","90%");
    //padding en canvasgrootte
    var m = [30, 10, 10, 50],
        w = window.innerWidth*0.85 - m[1] - m[3],
        h = window.innerHeight*0.85 - m[0] - m[2];
    //var color = d3.scale.category20();


    var x = d3.scale.ordinal().rangePoints([0, w], 1),

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
    d3.csv("resources/testCSV.csv", function(parcoo2) {
        var l = removalList.length;
        for(i=0;i<l;i++){
            parcoo2.splice(removalList[i],1);
            try {
                //       for(k=i;k<l;k++){
                //         removalList[k+1] = removalList[k+1] - 1;
                //   }

            }catch (err){}

        }

        for(i= 0;i<replacementList.length;i++){
            parcoo2[replacementList[i][0]].Maaltijd = replacementList[i][1][2];
            parcoo2[replacementList[i][0]].Kcal =replacementList[i][1][5];
            parcoo2[replacementList[i][0]].Suikers = replacementList[i][1][8];
            parcoo2[replacementList[i][0]].Vetten = replacementList[i][1][9];
            parcoo2[replacementList[i][0]].Magnesium = replacementList[i][1][11];
            parcoo2[replacementList[i][0]].Vezels = replacementList[i][1][12];
            parcoo2[replacementList[i][0]].Cholesterol = replacementList[i][1][10];
            parcoo2[replacementList[i][0]].Koolhydraten =replacementList[i][1][6];
            parcoo2[replacementList[i][0]].Eiwitten =replacementList[i][1][7];
        }
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
            delete parcoo[i].Dag;
            delete parcoo[i].Uur;

        }
        //var doseObject = {Dag:"15 FEBRUARI",Uur:"12u00",Maaltijd:"Vlees",Kcal:"3300",Koolhydraten:"340",Eiwitten:"1000",Suikers:"60",Vetten:"100",Cholesterol:"230",Magnesium:"350",Vezels:"30"};
        // Extract the list of dimensions and create a scale for each.
        x.domain(dimensions = d3.keys(parcoo[0]).filter(function(d) {
            if(d == "Dag" || d == "Uur" || d == "Maaltijd") {

                y[d] = d3.scale.ordinal()
                    .domain(parcoo.map(function(p) {return p[d];}).sort())
                    .rangePoints([h,0]);
            }
            else {(y[d] = d3.scale.linear()
                .domain([0,(d3.max(parcoo, function(p) { return parseFloat(p[d]); })+(d3.max(parcoo, function(p) { return parseFloat(p[d]); })/10))])
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
            .on("click", function(d){return mouseClick(d3.select(this))})
            .style("display",function(d,i){
                var l = getTheDays();
                for(k = 0;k< l.length;k++){
                    var dag = document.getElementById("food"+l[k]).data[0][0];
                    if(parcoo2[i].Dag == dag){
                        return null;
                    }
                }
                return "none";
            });



        //var doseObject = {Dag:"15 FEBRUARI",Uur:"8u40",Maaltijd:"Vlees",Kcal:"3300",Koolhydraten:"340",Eiwitten:"60",Suikers:"60",Vetten:"100",Cholesterol:"230",Magnesium:"350",Vezels:"30"};
        //console.log(doseObject);
        /*console.log(parcoo[0])
        var dailyDose = svg.append("svg:g")
            .attr("class", "DAH")
            .selectAll("path")
            .data([doseObject])
            .enter().append("svg:path")
            .attr("d", path)
            .on("mouseover", function(d){return mouseHover(d3.select(this))})
            .on("mousemove", function(d,i){return showTableInfo(d,i,(event.pageX+20),(event.pageY-45));})
            .on("mouseout", function(){return mouseLeave(d3.select(this))});
*/

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
            var colorOfLine = obj.style("stroke");
            tooltip.style("visibility", "visible")
                .style("width","auto")
                .style("height","200px");
            foreground.style("stroke","white");
            obj.style("background-color","blue");
            obj.style("stroke",colorOfLine);


        }
        function mouseLeave(obj){
            obj.style("background-color","white");
            tooltip.style("visibility", "hidden");
            foreground.style("stroke","blue");
        }
        function showTableInfo(data, index, x,y){

            tooltip.style("top", y+"px")
                .style("left",x+"px")
                .text("Dag:" +parcoo2[index].Dag+ "\n\r"+ "Uur:"+ parcoo2[index].Uur+ "\n\r"+ "Maaltijd.:" + data.Maaltijd + "\n\rKcal:" + data.Kcal+""+ "\n\rKoolhydraten:" + data.Koolhydraten+" (g)"+ "\n\rEiwitten:" + data.Eiwitten+" (g)"+ "\n\rSuikers:" + data.Suikers+" (g)"+ "\n\rVetten:" + data.Vetten+" (g)"+ "\n\rCholesterol:" + data.Cholesterol+" (mg)"+ "\n\rMagnesium:" + data.Magnesium+" (mg)"+ "\n\rVezels:" + data.Vezels+" (g)");
        }


        // Add a group element for each dimension.
        var g = svg.selectAll(".dimension")
            .data(dimensions)
            .enter().append("svg:g")
            .attr("class", "dimension")
            .attr("transform", function(d) { return "translate(" +( x(d)+150) + ")"; })
           ;


        /*

         .call(d3.behavior.drag()
         .on("dragstart", function(d) {
         dragging[d] = this.__origin__ = ( x(d)+150);
         // background.attr("visibility", "hidden");
         })
         .on("drag", function(d) {
         dragging[d] = Math.min(w, Math.max(0, this.__origin__ += d3.event.dx));
         foreground.attr("d", path);
         background.attr("d", path);
         dimensions.sort(function(a, b) { return position(a) - position(b) });
         x.domain(dimensions);
         g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
         })
         .on("dragend", function(d) {
         delete this.__origin__;
         delete dragging[d];
         transition(d3.select(this)).attr("transform", "translate(" + ( x(d)+150) + ")");
         transition(foreground)
         .attr("d", path);
         background
         .attr("d", path)
         .transition()
         .delay(500)
         .duration(0);
         //.attr("visibility", null);
         }))
         */
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

    })
    });

    function position(d) {

        var v = dragging[d];
        return v == null ? ( x(d)+150) : v;
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
            if (d[p] == " "||d[p]=="NULL"||d[p]==null) return [( x(p)+150), null];

            return [( x(p)+150), y[p](d[p])];
        }));
    }


    // Handles a brush event, toggling the display of foreground lines.
    function brush() {

        //if(selectedString== "Uur" || selectedString == "Dag" || selectedString == "Maaltijd"){
        // if(Math.abs(y[selectedString].brush.extent()[0] - y[selectedString].brush.extent()[1]) <20){return;}
        highLightDays([]);
        var actives = dimensions.filter(function (p) {
                return !y[p].brush.empty();
            }),
            extents = actives.map(function (p) {
                var ext;
                var ex1;
                var ex2;
                try{
                    ext = y[p].brush.y().rangeExtent()[1]-y[p].brush.y().rangeExtent()[0];
                    ex1 = y[p].brush.y().rangeExtent()[1];
                    ex2= y[p].brush.y().rangeExtent()[0];
                }catch(err){
                    ext = y[p].brush.y().domain()[1]- y[p].brush.y().domain()[0];
                    ex1 = y[p].brush.y().domain()[1];
                    ex2= y[p].brush.y().domain()[0]
                }
                if(y[p].brush.extent()[1]-y[p].brush.extent()[0]>= ext*0.03)
                    return y[p].brush.extent();
                else
                    return [ex2,ex1];
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
            return [];
        }

        return returnArray;
    }





}

var visiMaaltijd=false;
function toggleView3(){

    if (currentPar==0){
        visiMaaltijd = true;
        d3.select(".parcoordss").style("visibility","visible").style("width","95%");
    }else {
        visiMaaltijd = true;
        currentPar = 0;
        d3.select(".parcoordss").selectAll("*").remove();
        d3.select(".parcoordss").remove();
        drawParCoo(removedList,replacementList);
        d3.select(".parcoordss").style("visibility","visible").style("width","95%");
        highLightDays(getTheDays());
    }


    //var visString = function(){if(!visiMaaltijd){return "hidden";}else{return "visible";}};
    //
    //visiMaaltijd = !visiMaaltijd;
    //d3.select(".parcoordss").style("visibility",""+visString());

}

function getTheDays(){
    var returnList = [];
    for(i  =0 ;i<n;i++){



        if(d3.select("#dag"+i).style("opacity") =="1"){
            returnList.push(i);
        }else{

        }

    }

    return returnList;
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
