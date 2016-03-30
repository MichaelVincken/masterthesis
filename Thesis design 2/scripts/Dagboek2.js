/**
 * Created by Wander on 14/02/2016.
 */

var colahs = ["#f9c7a8", "#f39a9b", "#ec6e8d", "#d74a88", "#a93790","#7b2397", "#5c1886", "#461266"];

function createDialog(row,n){
    var dialogBck = document.createElement('div');
    dialogBck.id = 'dialog-bck';

    var dialog = document.createElement('div');
    dialog.id = 'dialog';

    var clickHandler = function(bckg,dialog){
        return function(){removeForeGround(bckg,dialog);};
    };
    dialogBck.onclick = clickHandler(dialogBck,dialog);

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
    alternatiefButton.onclick = getAlternatief(row, dialogBck,dialog,n);

    var verwijderButton = document.createElement('button');
    verwijderButton.innerHTML = 'Verwijder';
    verwijderButton.onclick = getVerwijder(row, dialogBck,dialog);

    buttonContainer1.appendChild(alternatiefButton);
    buttonContainer2.appendChild(verwijderButton);

    buttonRow.appendChild(buttonContainer1);
    buttonRow.appendChild(buttonContainer2);

    dialog.appendChild(textContainer);
    dialog.appendChild(buttonRow);

    //dialogBck.appendChild(dialog);
    document.body.appendChild(dialogBck);
    document.body.appendChild(dialog);
}


function removeForeGround(dialog,dia){
    try{
    document.body.removeChild(dialog);
    }catch(err){
    }
    try{
        document.body.removeChild(document.getElementById('drop-it'));
    }catch(err){
    }
    try{
        document.body.removeChild(dia);
    }catch(err){
    }



}
var removedList = [];
function getVerwijder(row, dialog,dia) {
    return function(){
        document.body.removeChild(dialog);
        document.body.removeChild(dia);

        var totalindex=parseInt(row.id.slice(6,row.id.length))+1;

        dataArray = dataArray.slice(0,totalindex).concat(dataArray.slice(totalindex+1,dataArray.length));
        d3.select(".chart").selectAll("*").remove();
        d3.select(".parcoordss").selectAll("*").remove();
        d3.select(".parcoordss").remove();
        removedList = removedList.concat([totalindex-1]);
        n=0;
        trID=0;
        previousDate = "none";
        globalopmerkingenlist = [];
        drawTotalDiary(dataArray);


        var l = replacementList.length;
        for(i=0;i<l;i++){
            try {
                if (replacementList[i][0] > totalindex - 1) {
                    replacementList[i][0] = replacementList[i][0] - 1;
                } else if (replacementList[i][0] == totalindex - 1) {
                    replacementList = replacementList.slice(0, i).concat(replacementList.slice(i + 1, replacementList.length));
                    i--;
                }
            }catch(err){}
        }
        drawParCoo(removedList,replacementList);
        toggleView();
        currentPar=0;
        dropSelection="Dagen";
        dropIt();

    }
}
var replacementList = [];
function processInput(options,day,dialog,divX,row){
        d3.selectAll(".tooltip").style('visibility', "hidden");

        document.body.removeChild(dialog);
        document.body.removeChild(divX);
        var index = 0;
        vervangGerechten.forEach(function(entry,i){
            if(entry[0] ==options){
                index = i;
            }else{

            }
        });

        var prev = "none";
    var totalindex=parseInt(row.id.slice(6,row.id.length))+1;
    var dataRow = dataArray[totalindex];
    var replacement =  dataRow.slice(0,2).concat(vervangGerechten[index][0]).concat(dataRow.slice(3,5)).concat(vervangGerechten[index].slice(1,9));
    replacementList = replacementList.concat([[totalindex-1,replacement]]);
    dataArray[totalindex] = replacement;
    d3.select(".chart").selectAll("*").remove();
    d3.select(".parcoordss").selectAll("*").remove();
    d3.select(".parcoordss").remove();
    n=0;
    trID=0;
    previousDate = "none";
    globalopmerkingenlist = [];
    drawTotalDiary(dataArray);
    drawParCoo(removedList,replacementList);
    toggleView();
currentPar = 0;
    dropSelection="Dagen";
    dropIt();
}

function getAlternatief(row, dialog,dia,n) {
    return function(){
        var dropDownDiv = document.createElement('div');
        dropDownDiv.id = 'drop-it';

        var selection = document.createElement('select');
        selection.size ="10";
        selection.className = "selectClass";
        vervangGerechten.forEach(function(entry,i){
            var opt = document.createElement('option');
            opt.className = "optionClass";
            opt.value = entry[0];
            opt.innerHTML = entry[0];
            opt.onmouseover = function(){
                tooltip.style("visibility", "visible")
                    .style("width","auto")
                    .style("height","auto");

            };


            opt.onmousemove = function() {
                tooltip.style("top", (event.pageY-45)+"px")
                    .style("left",(event.pageX+20)+"px")
                    .text("Maaltijd.:" + vervangGerechten[i][0] + "\n\rKcal:" +vervangGerechten[i][1]+""+ "\n\rKoolhydraten:" + vervangGerechten[i][2]+""+ "\n\rEiwitten:" + vervangGerechten[i][3]+""+ "\n\rSuikers:" + vervangGerechten[i][4]+""+ "\n\rVetten:" + vervangGerechten[i][5]+""+ "\n\rCholesterol:" + vervangGerechten[i][6]+""+ "\n\rMagnesium:" + vervangGerechten[i][7]+""+ "\n\rVezels:" + vervangGerechten[i][8]+"");

            };
            opt.onmouseout = function(){
                tooltip.style("visibility", "hidden");
            };


            var clickHandler = function(optionz,n){
                return function(){processInput(optionz,n,dialog,dropDownDiv,row);};
            };
            opt.onclick =clickHandler(opt.value,n);


            selection.appendChild(opt);
        });




        dropDownDiv.appendChild(selection);

        document.body.appendChild(dropDownDiv);
        document.body.removeChild(dia);
        //document.body.removeChild(dialog);
        //var myText = prompt('Vul een vervangerecht in:');
        //row.cells[1].innerHTML = myText;

    }
}

var previousDate = "none";
var trID=0;
function makeEetLijst(data, divID, titlebool, n, datainfo){

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
            var clickHandler = function(myrow,n){
                return function(){createDialog(myrow,n);};
            };

            innertr.onclick = clickHandler(innertr,n);

            eetTable.appendChild(innertr);
        }
        //divX[0].innerHTML="";


    }
    divX.appendChild(eetTable);
    d3.select("#trtest"+trID)
        .on("mouseover", function(d){return mouseHover(d3.select(this))})
        .on("mousemove", function(d,i){return showTableInfo(data,i,(event.pageX+20),(event.pageY-45),datainfo);})
        .on("mouseout", function(){return mouseLeave(d3.select(this))
        });

    function mouseHover(obj){
        obj.style("background-color","#ec6e8d");
        tooltip.style("visibility", "visible")
            .style("width","auto")
            .style("height","auto");

        drawStackedBars(datainfo,n);


    }
    function mouseLeave(obj){
        obj.style("background-color","white");
        tooltip.style("visibility", "hidden");

        removeStackedBars(n);
    }
    function showTableInfo(data, index, x,y,datainfo){

        tooltip.style("top", y+"px")
            .style("left",x+"px")
            .text("Dag:" +data[0]+ "\n\r"+ "Uur:"+ data[1]+ "\n\r"+ "Maaltijd.:" + data[2] + "\n\rKcal:" + datainfo[0]+""+ "\n\rKoolhydraten:" + datainfo[1]+" (g)"+ "\n\rEiwitten:" + datainfo[2]+" (g)"+ "\n\rSuikers:" + datainfo[3]+" (g)"+ "\n\rVetten:" + datainfo[4]+" (g)"+ "\n\rCholesterol:" + datainfo[5]+" (mg)"+ "\n\rMagnesium:" + datainfo[6]+" (mg)"+ "\n\rVezels:" + datainfo[7]+" (g)");

        // .text("Maaltijd:" +data[2]);//+ "\n\r"+ "Waarde:"+ vals[index]+ "\n\r"+ "D.A.H.:" + DailyDose[index] + "\n\rPercentage:" + Math.floor(percentages[index])+"%");
    }
    trID++;
}

function drawStackedBars(datainfo,n){

    var divX =d3.select("#food"+n);
    var divHeight= divX.node().getBoundingClientRect().height;
    var divWidth = divX.node().getBoundingClientRect().width;
    var yScale = document.getElementById("food"+n).yScale;
    var xScale = document.getElementById("food"+n).xScale;

    var values = datainfo;
    var percentages=[];
    values.forEach(function(entry,i){
        percentages[i] = entry/DailyDose[i]*100;
    });
    d3.select("#foodSVG"+n).selectAll(".Stackedbar"+n)
        .data(percentages)
        .enter().append("rect")
        .attr("fill",function(d,i){return ""+colahs[i];})
        //.attr('fill',"blue")
        .attr("opacity","1")
        .attr("class", "Stackedbar"+n)
        .attr("x", function(d,i) { return xScale(ShortNames[i]); })
        .attr("y", function(d,i) { return yScale(d) +10; })
        .attr("height", function(d) { return divHeight-30 - yScale(d); })
        .attr("width", xScale.rangeBand());

    for(i=8*n;i<8*(n+1);i++){
        d3.select("#rechthoek"+i).attr("opacity","0.5");
    }

}

function removeStackedBars(n){
    d3.select("#foodSVG"+n).selectAll(".Stackedbar"+n).remove();

    highlightRechthoeken();
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
var selection=[];
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

    var colah = "white";
    if (data[0][3] != ""){
        colah = "#ededed";
    }
    daycanvas.append("div")
        .attr("class","dagsport")
        .attr("id",divIDSport)
        .html("&nbsp"+data[0][3])
        .style("background-color",colah)
        .on("mouseover", function(d){return mouseHoverSport(d3.select(this))})
        .on("mousemove", function(d,i){return showInfoSport(tooltip,data[0][3],i,(event.pageX+20),(event.pageY-45));})
        .on("mouseout", function(){return mouseLeaveSport(d3.select(this))});
    if (data[0][4] != ""){
        colah = "#ededed";
    }else {
        colah = "white";
    }
    daycanvas.append("div")
        .attr("class","dagopmerking")
        .attr("id",divIDOpmerking)
        .html("&nbsp"+data[0][4])
        .style("background-color",colah)
        .on("mouseover", function(d){return mouseHoverSport(d3.select(this))})
        .on("mousemove", function(d,i){return showInfoSport(tooltip,data[0][4],i,(event.pageX+20),(event.pageY-45));})
        .on("mouseout", function(){return mouseLeaveSport(d3.select(this))});
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
        .domain([0,200])
        .range([divHeight-30,0 ]);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(8);

    barcanvas = barcanvas.append("svg")
        .attr("id","foodSVG"+day)
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

    document.getElementById(divIDFoodChart).xScale = xScale;
    document.getElementById(divIDFoodChart).yScale = yScale;

    barcanvas.selectAll(".bar"+day)
        .data(percentages)
        .enter().append("rect")
        .attr("fill",function(d,i){return colahs[i];})
        .attr("class", "bar"+day)
        .attr("id",function(d,i){return "rechthoek"+(i + day*8);})
        .attr("x", function(d,i) { return xScale(ShortNames[i]); })
        .attr("y", function(d,i) { return yScale(d) +10; })
        .attr("height", function(d) { return divHeight-30 - yScale(d); })
        .attr("width", xScale.rangeBand())
        .on("mouseover", function(d){return mouseHover(d3.select(this))})
        .on("mousemove", function(d,i){return showInfo(tooltip,data,i,(event.pageX+20),(event.pageY-45),values,percentages);})
        .on("mouseout", function(){return mouseLeave(d3.select(this))})
        .on("click", function(d){return mouseClick(d3.select(this))
        });


    var xScale2 = d3.scale.ordinal()
        .domain(["kcal","KH","EIW","S","VET","CH","Ma", "VEZ"])
        .rangeRoundBands([30, divWidth-5], 0);
    var line = d3.svg.line()
        .x(function(d, i) {
            return xScale2(ShortNames[i])+2*i ; })
        //.y(function(d, i) { return (divHeight-yScale(100)-20); })
        .y(function(d, i) { return yScale(100)+10; }) ;

    barcanvas.append("path")
        .datum(percentages)
        .attr("class", "dagBoekLine")
        .attr("d", line);

    /*#f9c7a8
#f39a9b
#ec6e8d
#d74a88
#a93790
#7b2397
#5c1886
#461266
#300c46*/

   // var colahs = ["#f9c7a8", "#f39a9b", "#ec6e8d", "#d74a88", "#a93790","#7b2397", "#5c1886", "#461266"];
    function mouseClick(rechthoek){
        var idea = +rechthoek.attr("id").slice(9,12);
        while(idea>=8){
            idea = idea-8;
        }
        var original = idea;
        addToSelection(original);
        highlightRechthoeken();
        //var boolie = true;
        //while(idea<150){
        //
        //        d3.select("#rechthoek"+idea).attr("fill", colahs[original]).attr('opacity',"1");
        //        idea +=8;
        //
        //
        //}

    }


    function mouseHover(obj){
        if(obj.attr("fill") == "lightblue"){
            obj.attr("fill","#68A8E5");
        }

        tooltip.style("visibility", "visible")
            .style("width","150px")
            .style("height","80px");
    }
    function mouseLeave(obj){
        if(obj.attr("fill") == "#68A8E5") {
            obj.attr("fill", "lightblue");
        }
        tooltip.style("visibility", "hidden");
    }
    //d3.selectAll(".chart").selectAll("*").style("opacity", "0.5");
    barcanvas.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (divHeight-20) + ")")
        .call(xAxis);

    data.forEach(function(entry,i){
        if(i==0){makeEetLijst(entry.slice(0,3),divIDEetLijst,true,day, entry.slice(5,13));}else{
            makeEetLijst(entry.slice(0,3),divIDEetLijst,false,day,entry.slice(5,13));
        }


    });


}

function addToSelection(numb){
    if($.inArray(numb,selection)==-1){
        selection.push(numb);

    }else{
        var index = selection.indexOf(numb);
        selection.splice(index, 1);
    }
}

function highlightRechthoeken(){
    if(selection.length==0){
        for(i=0;i<n*8;i++){
            d3.select("#rechthoek"+i).attr("opacity","1");
        }
    }else if(selection.length==8){
        selection = [];
        highlightRechthoeken();
    }else{
        for(i=0;i<n*8;i++){
            d3.select("#rechthoek"+i).attr("opacity","0.25");
        }
        for(i=0;i<selection.length;i++){
            for(k=selection[i];k<n*8;k+=8){
                d3.select("#rechthoek"+k).attr("opacity","1");
            }
        }
    }

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
    resetDagboekSelectie();
    if(globalopmerkingenlist==0) {
        var currentPosition = [];
        var opmerkingenlist = [];
        var legeLijst = [];
        for (i = 0; i < n; i++) {

            if (document.getElementById("opmerking" + i).innerHTML === "&nbsp;") {
                legeLijst.push(i);
            } else {
                opmerkingenlist.push(i);
            }
        }
        opmerkingenlist = opmerkingenlist.concat(legeLijst);

        transitionDiary(opmerkingenlist);
        globalopmerkingenlist=opmerkingenlist;
    }
}
function Sportfilter(){
    resetDagboekSelectie();
    if(globalopmerkingenlist==0) {
        var currentPosition = [];
        var opmerkingenlist = [];
        var legeLijst = [];
        for (i = 0; i < n; i++) {

            if (document.getElementById("sport" + i).innerHTML === "&nbsp;") {
                legeLijst.push(i);
            } else {
                opmerkingenlist.push(i);
            }
        }
        opmerkingenlist = opmerkingenlist.concat(legeLijst);

        transitionDiary(opmerkingenlist);
        globalopmerkingenlist=opmerkingenlist;
    }
}


function transitionDiary (opmerkingenlist){

    for (i = 0; i < n; i++) {
        var dag = d3.select("#dag" + i);
        var box = dag.node().getBoundingClientRect();
        var dagToGo = d3.select("#dag" + opmerkingenlist.indexOf(i));
        var box2 = dagToGo.node().getBoundingClientRect();

        var differenceX = box2.left - box.left;
        var differenceY = box2.top - box.top;

        var duration = 1000;
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
    //d3.selectAll(".brush").each(function(d){ d3.select(this).call(y[d].brush.clear());console.log(y[d].brush.on("brush")) ;});

        d3.selectAll(".brush").each(function(d){ d3.select(this).call(y[d].brush.clear());y[d].brush.on("brush").call(this) ;});

    selection=[];
    highlightRechthoeken();




   // d3.selectAll(".brush").call(this.clear());
    for(i=0;i<n;i++) {
        // var trans = d3.transform(d3.select("#dag"+i).attr("transform"));


        //d3.select("#dag"+i).style("transform","translate("+(differenceX)+"px,"+(differenceY)+"px)");

        d3.select("#dag"+i).transition()

            //.each("start",function() { d3.select(this).style("transform","translate("+(differenceX)+"px,"+(differenceY)+"px)"); })
            .style("transform","translate(0px,0px)");

    }
    globalopmerkingenlist=[];
    dropSelection="Dagen";
    dropIt();
}

function resetDagboekSelectie(inputs){
    //d3.selectAll(".brush").each(function(d){ d3.select(this).call(y[d].brush.clear());console.log(y[d].brush.on("brush")) ;});
    setTimeout(inputs, 50);
    // d3.selectAll(".brush").call(this.clear());
    for(i=0;i<n;i++) {
        // var trans = d3.transform(d3.select("#dag"+i).attr("transform"));


        //d3.select("#dag"+i).style("transform","translate("+(differenceX)+"px,"+(differenceY)+"px)");

        d3.select("#dag"+i).transition()

            //.each("start",function() { d3.select(this).style("transform","translate("+(differenceX)+"px,"+(differenceY)+"px)"); })
            .style("transform","translate(0px,0px)");

    }
    globalopmerkingenlist=[];
    dropIt();
}




function showInfo(tooltip, data, index, x, y,vals,percentages){
    var eenheidString = " (g)";
    if(dataArray[0][index+5]=="Cholesterol" || dataArray[0][index+5]=="Magnesium")
        eenheidString= " (mg)";

    tooltip.style("top", y+"px")
        .style("left",x+"px")
        .text("naam:" +dataArray[0][index+5]+"\n\r"+ "Waarde:"+ Math.round(vals[index])+ eenheidString+"\n\r"+ "D.A.H.:" + DailyDose[index] +eenheidString+ "\n\rPercentage:" + Math.floor(percentages[index])+"%");
    //var name = data[][index];
    //var height = "Height: " + data[3][index] + " cm";
    //var shoe = "Shoe Size: " + data[2][index];

}

////////Mouse Hover van sport en opmerkingen
function mouseHoverSport(obj){

    obj.attr("fill","#68A8E5");
    tooltip.style("visibility", "visible")
        .style("width","auto")
        .style("height","auto");
}
function mouseLeaveSport(obj){
    obj.attr("fill","#d74a88");
    tooltip.style("visibility", "hidden");
}
function showInfoSport(tooltip, data, index, x, y,vals){
    if( data==""){
        tooltip.style("visibility", "hidden")
    }
    tooltip.style("top", y+"px")
        .style("left",x+"px")
        .text(""+data);
    //var name = data[][index];
    //var height = "Height: " + data[3][index] + " cm";
    //var shoe = "Shoe Size: " + data[2][index];

}

var currentPar = 0;
function toggleView(){

    visiTotal = false;
    visiMaaltijd = false;
    d3.select(".parcoordss").style("visibility","hidden").style("width","0%");

}