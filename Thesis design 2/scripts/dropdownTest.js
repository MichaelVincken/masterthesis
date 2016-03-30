/**
 * Created by Wander on 30/03/2016.
 */
var dropSelection="Dagen"
function dropIt() {
    document.getElementById('demo').innerHTML="";
    d3.element.dropdownmenu('#demo')
        .add({
            /*'Option 1': {
                '0': {
                    'a': {
                        'i': null,
                    },
                },
            },*/
            '&#x021F5 Sorteer': {
                'Opmerkingen': null,
                'Sport': null,
                'kcal': null,
                'Koolhydraten': null,
                'Eiwitten': null,
                'Suikers': null,
                'Vetten': null,
                'Cholesterol': null,
                'Magnesium': null,
                'Vezels': null,
            }/*,
            'Option 3': {
                '0': null,
                '1': null,
                '<span id="option3-2">2</span>': null,
            },
            'Option 4': {
                '0': {
                    'a': null,
                    'b': null,
                    'c': null,
                },
                '1': null,
                '2': null,
                '3': null,
            },
            '<a href="#">Test Link</a>': {
                '<a href="#">Child Link</a>': null,
            },
            'Images': {
                '<img src="img1.jpg" width="100px" height="100px"/>': null,
                '<img src="img2.jpg" width="100px" height="100px"/>': null,
                '<img src="img3.jpg" width="100px" height="100px"/>': null,
            }*/
        })
        .show() // basic menu has been created
        // example of tree traversal
        /*.firstChildNode() // Option 1
        .nextSiblingNode() // Option 2
        .lastChildNode() // 1
        .add({
            'New Option 1': null,
            'New Option 2': null,
        })
        .add({
            'New Option 3': null,
        })
        .lastChildNode()
        .add({
            'Option 2.1.3.A': null,
            'Option 2.1.3.B': null,
        })*/
        .root() // get back to the root
        // and use d3 methods as well

        .call(applyStyling) // defined in header
        .call(function (root) {
            root.childLink().horizontal() // make top level horizontal
        })
        .call(function (root) {
            var option = root.firstChildNode();
            for (var i = 0; option != null; option = option.firstChildNode()) {
                option.style('color', '#0' + (i % 10) + (i % 10));
                i += 3;
            }
        })
        // center it
        .call(function (root) {
            root.style('position', 'relative');
                //.style('left', '20%')
                //.style('margin-left', -parseInt(root.childLink().style('width')) / 2 + 'px');
        })
console.log(document.getElementById('gesorteerdHeader').innerHTML)
    document.getElementById('gesorteerdHeader').innerHTML = "Gesorteerd op: "+dropSelection;
    d3.select('#gesorteerdHeader').attr('id','gesorteerdHeader');
   //var divX = document.getElementById("demo");
    //document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + "Gesorteerd opzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz: " + dropSelection+"";
    //var content = document.createTextNode("Gesorteerd opzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz:");
    //divX.appendChild(content);
}
function applyStyling(root) {
    root.nodes()
        .style('border', '1px solid #ddd')
        .style('padding', '4px 8px')
        .style('background', '#eee')
        .style('width', '150px')
        .on('mouseenter', function() {
            d3.select(this).transition() // 'this' is a DOM element
                .style('background', '#ccc')
        })
        .on('mouseleave', function() {
            d3.select(this).transition()
                .style('background', '#ededed')
        })
        .on("click", function(d){return mouseClick(d3.select(this))});


    root.childNodes() // make top level a little different
        .style('background', '#ededed')
        .style('border', '1px solid grey')
        .style('width', '150px')
        .style('text-align',"center")
        .on('mouseenter', function() {
            d3.select(this).transition()
                .style('background', '#ccc')
        })
        .on('mouseleave', function() {
            d3.select(this).transition()
                .style('background', '#ededed')
        })

    function mouseClick(data){
       var sel = ""+data[0][0]["__data__"];
        if(sel == "&#x021F5 Sorteer"){

        }else{
            switch (sel) {
                case "Opmerkingen":
                    dropSelection = "Opmerkingen";
                    resetDagboekSelectie(opmerkingenFilter);

                    break;
                case 'kcal':
                    dropSelection = "kcal";
                    resetDagboekSelectie(kcalfilter);

                    break;
                case 'Sport':
                    dropSelection = "Sport";
                    resetDagboekSelectie(Sportfilter);

                    break;
                case 'Koolhydraten':
                    dropSelection = "Koolhydraten";
                    resetDagboekSelectie(Koolhydratenfilter);

                    break;
                case 'Eiwitten':
                    dropSelection = "Eiwitten";
                    resetDagboekSelectie(Eiwittenfilter);

                    break;
                case 'Suikers':
                    dropSelection = "Suikers";
                    resetDagboekSelectie(Suikersfilter);

                    break;
                case 'Vetten':
                    dropSelection = "Vetten";
                    resetDagboekSelectie(Vettenfilter);

                    break;
                case 'Cholesterol':
                    dropSelection = "Cholesterol";
                    resetDagboekSelectie(Cholesterolfilter);

                    break;
                case 'Magnesium':
                    dropSelection = "Magnesium";
                    resetDagboekSelectie(Magnesiumfilter);

                    break;
                case 'Vezels':
                    dropSelection = "Vezels";
                    resetDagboekSelectie(Vezelsfilter);

                    break;
            }
        }
        //'Opmerkingen': null,
        //    'Sport': null,
        //    'kcal': null,
        //    'Koolhydraten': null,
        //    'Eiwitten': null,
        //    'Suikers': null,
        //    'Vetten': null,
        //    'Cholesterol': null,
        //    'Magnesium': null,
        //    'Vezels': null,
    }
}