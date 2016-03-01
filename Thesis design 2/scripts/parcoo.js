/**
 * Created by Wander on 1/03/2016.
 */

function drawParCoo(removalList){
    var divX = d3.select("body").append("div")
        .attr("id","parcoorddiv")
        .attr("class","parcoordss")
       ;
    //padding en canvasgrootte
    var m = [30, 10, 10, 50],
        w = window.innerWidth*0.8 - m[1] - m[3],
        h = window.innerHeight*0.6 - m[0] - m[2];
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
        console.log(parcoo);
        var l = removalList.length;
        for(i=0;i<l;i++){
            parcoo.splice(removalList[i],1);
            try {
                for(k=i;k<l;k++){
                    removalList[k+1] = removalList[k+1] - 1;
                }

            }catch (err){}

        }

        console.log(parcoo);
        for(i=0;i<parcoo.length;i++){
            delete parcoo[i].Sport;
            delete parcoo[i].Opmerkingen;

        }

        // Extract the list of dimensions and create a scale for each.
        x.domain(dimensions = d3.keys(parcoo[0]).filter(function(d) {
            if(d == "Dag" || d == "Uur" || d == "Maaltijd") {
                y[d] = d3.scale.ordinal()
                    .domain(parcoo.map(function(p) {return p[d];}))
                    .rangePoints([h,0]);
            }
            else {(y[d] = d3.scale.linear()
                .domain(d3.extent(parcoo, function(p) { return parseFloat(p[d]); }))
                .range([h, 0]));
            }

            return true;
        }));
        console.log(dimensions)
    //    dimensions = dimensions.slice(0,3).concat(dimensions.slice(5,dimensions.length));
        console.log(x);
        // Add grey background lines for context.
        background = svg.append("svg:g")
            .attr("class", "background")
            .selectAll("path")
            .data(parcoo)
            .enter().append("svg:path")
            .attr("d", path);

        // Add blue foreground lines for focus.
        foreground = svg.append("svg:g")
            .attr("class", "foreground")
            .selectAll("path")
            .data(parcoo)
            .enter().append("svg:path")
            .attr("d", path);

        foreground.forEach(function(d,i){
            console.log(d);
        })

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

           var actives = dimensions.filter(function (p) {
                   return !y[p].brush.empty();
               }),
               extents = actives.map(function (p) {
                   return y[p].brush.extent();
               });
           //console.log(actives);
           foreground.style("display", function (d) {

               return actives.every(function (p, i) {
                   if(actives[i] =="Uur" || actives[i] =="Dag" || actives[i] =="Maaltijd"){
                       return extents[i][0] <= y[actives[i]](d[p]) && y[actives[i]](d[p]) <= extents[i][1];
                   }else{
                       return extents[i][0] <= d[p] && d[p] <= extents[i][1];
                   }
                  // console.log(y[selectedString](d[p]));
                //   console.log("extend: "+extents[i][0] )
                  // return extents[i][0] <= y[actives[i]](d[p]) && y[actives[i]](d[p]) <= extents[i][1];
               }) ? null : "none";
           });
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


}