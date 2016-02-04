/**
 * Created by Michael on 12/11/2015.
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

function makeEetLijst(data){
  console.log(data);
  var divX = document.getElementsByClassName("eetlijst");
  var title = document.createElement("h1");
  title.align = "center";

  title.width = "100%";
  title.innerHTML = "<span style='color: #8DB600;'>Eetlijst</span>";

  divX[0].appendChild(title);
  var eetTable = document.createElement("table");
  eetTable.id = 'voedingsdagboek';
  var x;
  var y;
  var previousDate = "none";
  for (x in data){
    var innertr = document.createElement("tr");

    for (y in data[x]){
      if (y==0){
        if (data[x][y] !=previousDate){
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          td.colSpan = "2";
          td.align = "center";
          td.innerHTML = "<b>"+data[x][y]+"</b>";
          tr.appendChild(td);
          eetTable.appendChild(tr);
          previousDate= data[x][y];
        }else{

        }
      }else{

        var td = document.createElement("td");
        td.innerHTML = data[x][y];

        innertr.appendChild(td);
        var clickHandler = function(myrow){
          return function(){createDialog(myrow);};
        };

        innertr.onclick = clickHandler(innertr);

        eetTable.appendChild(innertr);
      }
      //divX[0].innerHTML="";
      divX[0].appendChild(eetTable);

    }


  }console.log(divX);

}
