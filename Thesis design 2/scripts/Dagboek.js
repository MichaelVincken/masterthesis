/**
 * Created by Wander on 14/02/2016.
 */
function createDialog(row){
    var dialogBck = document.createElement('div');
    dialogBck.id = 'dialog-bck';

    var dialog = document.createElement('div');
    dialog.id = 'dialog';

    var textContainer = document.createElement('div');
    textContainer.className = 'textcontainer';
    textContainer.innerHTML = 'Maak een keuze...';

    var buttonRow = document.createElement('div');
    buttonRow.className = 'dialog-buttonrow';

    var buttonContainer1 = document.createElement('div');
    buttonContainer1.className = 'buttoncontainer';

    var buttonContainer2 = document.createElement('div');
    buttonContainer2.className = 'buttoncontainer';

    var alternatiefButton = document.createElement('button');
    alternatiefButton.innerHTML = 'Alternatief';
    alternatiefButton.onclick = getAlternatief(row, dialogBck);

    var verwijderButton = document.createElement('button');
    verwijderButton.innerHTML = 'Verwijder';
    verwijderButton.onclick = getVerwijder(row, dialogBck);

    buttonContainer1.appendChild(alternatiefButton);
    buttonContainer2.appendChild(verwijderButton);

    buttonRow.appendChild(buttonContainer1);
    buttonRow.appendChild(buttonContainer2);

    dialog.appendChild(textContainer);
    dialog.appendChild(buttonRow);

    dialogBck.appendChild(dialog);
    document.body.appendChild(dialogBck);
}

function getVerwijder(row, dialog) {
    return function(){
        document.body.removeChild(dialog);
        row.parentNode.removeChild(row);

    }
}

function getAlternatief(row, dialog) {
    return function(){
        document.body.removeChild(dialog);
        var myText = prompt('Vul een vervangerecht in:');
        row.cells[1].innerHTML = myText;

    }
}

var previousDate = "none";
var trID=0;
function makeEetLijst(data, divID, titlebool, n){

    var divX = document.getElementById(divID);
    /* if(titlebool) {
     var title = document.createElement("h1");
     title.align = "center";

     title.width = "100%";
     title.innerHTML = "<span style='color: #8DB600;'>"+data[0] +"</span>";

     divX.appendChild(title);
     }*/
    var eetTable = document.createElement("table");
    eetTable.id = 'voedingsdagboek';
    var x;
    var y;

    var innertr = document.createElement("tr");
    innertr.id = "trtest"+trID;
    for (x in data){



        if (x==0){
            if (data[x] !=previousDate){
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                td.colSpan = "2";
                td.align = "center";
                td.innerHTML = "<b>"+data[x]+"</b>";
                tr.appendChild(td);
                eetTable.appendChild(tr);
                previousDate= data[x];
            }else{

            }
        }else{

            var td = document.createElement("td");
            td.innerHTML = data[x];

            innertr.appendChild(td);
            var clickHandler = function(myrow){
                return function(){createDialog(myrow);};
            };

            innertr.onclick = clickHandler(innertr);

            eetTable.appendChild(innertr);
        }
        //divX[0].innerHTML="";


    }
    divX.appendChild(eetTable);
    d3.select("#trtest"+trID)
        .on("mouseover", function(d){return mouseHover(d3.select(this))})
        .on("mousemove", function(d,i){return showTableInfo(data,i,(event.pageX+20),(event.pageY-45));})
        .on("mouseout", function(){return mouseLeave(d3.select(this))
        });

    function mouseHover(obj){
        obj.style("background-color","#68A8E5");
        tooltip.style("visibility", "visible");




    }
    function mouseLeave(obj){
        obj.style("background-color","white");
        tooltip.style("visibility", "hidden");
    }
    function showTableInfo(data, index, x,y){
        tooltip.style("top", y+"px")
            .style("left",x+"px")
            .text("naam:" +data[2]);//+ "\n\r"+ "Waarde:"+ vals[index]+ "\n\r"+ "D.A.H.:" + DailyDose[index] + "\n\rPercentage:" + Math.floor(percentages[index])+"%");
    }
    trID++;
}

function joinArray(data){
    var result = [];
    data.forEach(function(entry1,i){
        var entry = entry1.slice(5,13);
        if(result.length==0){
            result = entry;
        }else{
            entry.forEach(function(item,d){
                result[d] = parseFloat(result[d])+parseFloat(item);
            })
        }

    });

    return result;

}
var tooltip;
function draw1Day(data, day, xdata){
    n = n+1;
    var divIDFullDay = "dag"+day;
    var divIDEetLijst = "lijst"+day;
    var divIDSport = "sport"+day;
    var divIDOpmerking = "opmerking"+day;
    var divIDFoodChart = "food"+day;
    var width = window.innerWidth;
    var height = window.innerHeight;

    var paddingLeft = width*0.05;
    var paddingRight = height*0.05;

    tooltip = d3.select("body")
        .append("div")
        .attr("class","tooltip")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("background-color","white")
        .style("width","150px")
        .style("height","100px")
        .style()
        .text("a simple tooltip");

    var daycanvas = d3.select(".chart")
        .append("div")
        .attr("id",divIDFullDay)
        .attr("class","daglijst")
        .attr("float", "left");

    var barcanvas = daycanvas.append("div")
        .attr("class", "dagfood")
        .attr("id", divIDEetLijst)
        .style("overflow-y","auto");
    daycanvas.append("div")
        .attr("class","dagsport")
        .attr("id",divIDSport)
        .html("&nbsp"+data[0][3]);
    daycanvas.append("div")
        .attr("class","dagopmerking")
        .attr("id",divIDOpmerking)
        .html("&nbsp"+data[0][4]);
    var barcanvas = daycanvas.append("div")
        .attr("class", "dagchart")
        .attr("id", divIDFoodChart);


    document.getElementById(divIDFoodChart).data = data;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    xdata = xdata.slice(5,13);
    var values = joinArray(data);
    var percentages=[];
    values.forEach(function(entry,i){
        percentages[i] = entry/DailyDose[i]*100;


    });

    var divHeight= d3.select("#"+divIDFoodChart).node().getBoundingClientRect().height;
    var divWidth = d3.select("#"+divIDFoodChart).node().getBoundingClientRect().width;
    var yScale = d3.scale.linear()
        .domain([0,d3.max(percentages)])
        .range([divHeight-30,0 ]);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(8);

    barcanvas = barcanvas.append("svg")
        .attr("width","100%")
        .attr("height","100%");

    barcanvas.append("g")
        .attr("class", "axis")
        .attr("transform", "scale(1) translate(30," + 10 + ")")
        .call(yAxis);

    //Kcal,Koolhydraten,Eiwitten,Suikers,Vetten,Cholesterol,Magnesium,Vezels
    var xScale = d3.scale.ordinal()
        .domain(["kcal","KH","EIW","S","VET","CH","Ma", "VEZ"])
        .rangeRoundBands([30, divWidth-5], .3);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");



    barcanvas.selectAll(".bar"+day)
        .data(percentages)
        .enter().append("rect")
        .attr("fill","lightblue")
        .attr("class", "bar"+day)
        .attr("x", function(d,i) { return xScale(ShortNames[i]); })
        .attr("y", function(d,i) { return yScale(d) +10; })
        .attr("height", function(d) { return divHeight-30 - yScale(d); })
        .attr("width", xScale.rangeBand())
        .on("mouseover", function(d){return mouseHover(d3.select(this))})
        .on("mousemove", function(d,i){return showInfo(tooltip,data,i,(event.pageX+20),(event.pageY-45),values,percentages);})
        .on("mouseout", function(){return mouseLeave(d3.select(this))
        });

    function mouseHover(obj){
        obj.attr("fill","#68A8E5");
        tooltip.style("visibility", "visible");
    }
    function mouseLeave(obj){
        obj.attr("fill","lightblue");
        tooltip.style("visibility", "hidden");
    }
    //d3.selectAll(".chart").selectAll("*").style("opacity", "0.5");
    barcanvas.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (divHeight-20) + ")")
        .call(xAxis);

    data.forEach(function(entry,i){
        if(i==0){makeEetLijst(entry.slice(0,3),divIDEetLijst,true);}else{
            makeEetLijst(entry.slice(0,3),divIDEetLijst,false,day);
        }


    });


}
var n = 0;
function drawTotalDiary(data){

    var dayArray = [];
    var previousdate= "nothing";

    for( i=1; i<data.length;i++){
        var entry = data[i];

        if (entry[0] != previousdate){
            if (previousdate!="nothing" && dayArray.length>0){
                draw1Day(dayArray, n,data[0]);
            }

            dayArray = [];
            dayArray[0] = entry.slice(0,entry.length);
            if(i == data.length-1){
                draw1Day(dayArray,n,data[0]);}

        }else{
            dayArray[dayArray.length] = entry.slice(0,entry.length);
            if(i == data.length-1){
                draw1Day(dayArray,n,data[0]);}
        };
        previousdate = entry[0];


    }
    /*
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     draw1Day(data[1], n, data[0]);
     */
    /* d3.select(".chart")
     .transition()
     .style("transform","translate(0,100px)");
     */
}
var globalopmerkingenlist = [];
function opmerkingenFilter(){
    if(globalopmerkingenlist==0) {
        var currentPosition = [];
        var opmerkingenlist = [];
        var legeLijst = [];
        for (i = 0; i < 14; i++) {

            if (document.getElementById("opmerking" + i).innerHTML === "&nbsp;") {
                legeLijst.push(i);
            } else {
                opmerkingenlist.push(i);
            }
        }
        opmerkingenlist = opmerkingenlist.concat(legeLijst);
        console.log(opmerkingenlist);
        transitionDiary(opmerkingenlist);
        globalopmerkingenlist=opmerkingenlist;
    }
}


function transitionDiary (opmerkingenlist){

    for (i = 0; i < 14; i++) {
        var dag = d3.select("#dag" + i);
        var box = dag.node().getBoundingClientRect();
        var dagToGo = d3.select("#dag" + opmerkingenlist.indexOf(i));
        var box2 = dagToGo.node().getBoundingClientRect();

        var differenceX = box2.left - box.left;
        var differenceY = box2.top - box.top;

        var duration = 5000;
        if (differenceX == 0 && differenceY == 0) {
            duration = 0;
        }

        d3.select("#dag" + i).transition()
            .duration(duration)
            .each("start", function () {
                d3.select(this).style("transform", "translate(0px,0px)");
            })
            .style("transform", "translate(" + (differenceX) + "px," + (differenceY) + "px)");


    }


}

function resetDiary(){

    for(i=0;i<14;i++) {
        // var trans = d3.transform(d3.select("#dag"+i).attr("transform"));


        //d3.select("#dag"+i).style("transform","translate("+(differenceX)+"px,"+(differenceY)+"px)");

        d3.select("#dag"+i).transition()

            //.each("start",function() { d3.select(this).style("transform","translate("+(differenceX)+"px,"+(differenceY)+"px)"); })
            .style("transform","translate(0px,0px)");

    }
    globalopmerkingenlist=[];

}

function kcalfilter(){
    if(globalopmerkingenlist.length==0) {
        var totalIndexes = [];
        for (i = 0; i < 14; i++) {

            var divX = document.getElementById("food" + i);

            var total = getTotalkcal(divX.data);
            totalIndexes.push([total, i]);

        }
        console.log(totalIndexes);
        totalIndexes.sort(sortFunction);

        function sortFunction(a, b) {
            if (a[0] === b[0]  && a[1] >b[1]) {
                return 1;
            }
            else {
                return (a[0] >= b[0]) ? -1 : 1;
            }
        }

        var opmerkingenlist = [];
        totalIndexes.forEach(function (entry, i) {
            opmerkingenlist.push(entry[1]);
        })

        transitionDiary(opmerkingenlist);
        globalopmerkingenlist = opmerkingenlist;
    }

}
function getTotalkcal(data){
    var total =0;
    var indexes = [];
    data.forEach(function(entry,i){
        total = total+parseFloat(entry[5]);

    })
    return total;

}


function showInfo(tooltip, data, index, x, y,vals,percentages){
    tooltip.style("top", y+"px")
        .style("left",x+"px")
        .text("naam:" +dataArray[0][index+5]+ "\n\r"+ "Waarde:"+ vals[index]+ "\n\r"+ "D.A.H.:" + DailyDose[index] + "\n\rPercentage:" + Math.floor(percentages[index])+"%");
    //var name = data[][index];
    //var height = "Height: " + data[3][index] + " cm";
    //var shoe = "Shoe Size: " + data[2][index];

}
