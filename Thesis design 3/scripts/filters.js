/**
 * Created by Wander on 30/03/2016.
 */
function kcalfilter(){



    if(globalopmerkingenlist.length==0) {
        var totalIndexes = [];
        for (i = 0; i < n; i++) {

            var divX = document.getElementById("food" + i);

            var total = getTotalkcal(divX.data,5);
            totalIndexes.push([total, i]);

        }

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

function Koolhydratenfilter(){



    if(globalopmerkingenlist.length==0) {
        var totalIndexes = [];
        for (i = 0; i < n; i++) {

            var divX = document.getElementById("food" + i);
            console.log(divX.data)
            var total = getTotalkcal(divX.data,6);
            totalIndexes.push([total, i]);

        }

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
function Eiwittenfilter(){



    if(globalopmerkingenlist.length==0) {
        var totalIndexes = [];
        for (i = 0; i < n; i++) {

            var divX = document.getElementById("food" + i);

            var total = getTotalkcal(divX.data,7);
            totalIndexes.push([total, i]);

        }

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
function Suikersfilter(){



    if(globalopmerkingenlist.length==0) {
        var totalIndexes = [];
        for (i = 0; i < n; i++) {

            var divX = document.getElementById("food" + i);

            var total = getTotalkcal(divX.data,8);
            totalIndexes.push([total, i]);

        }

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
function Vettenfilter(){



    if(globalopmerkingenlist.length==0) {
        var totalIndexes = [];
        for (i = 0; i < n; i++) {

            var divX = document.getElementById("food" + i);

            var total = getTotalkcal(divX.data,9);
            totalIndexes.push([total, i]);

        }

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
function Cholesterolfilter(){



    if(globalopmerkingenlist.length==0) {
        var totalIndexes = [];
        for (i = 0; i < n; i++) {

            var divX = document.getElementById("food" + i);

            var total = getTotalkcal(divX.data,10);
            totalIndexes.push([total, i]);

        }

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
function Magnesiumfilter(){



    if(globalopmerkingenlist.length==0) {
        var totalIndexes = [];
        for (i = 0; i < n; i++) {

            var divX = document.getElementById("food" + i);

            var total = getTotalkcal(divX.data,11);
            totalIndexes.push([total, i]);

        }

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
function Vezelsfilter(){



    if(globalopmerkingenlist.length==0) {
        var totalIndexes = [];
        for (i = 0; i < n; i++) {

            var divX = document.getElementById("food" + i);

            var total = getTotalkcal(divX.data,12);
            totalIndexes.push([total, i]);

        }

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




function getTotalkcal(data, ind){
    var total =0;
    var indexes = [];
    data.forEach(function(entry,i){
        total = total+parseFloat(entry[ind]);

    })
    return total;

}