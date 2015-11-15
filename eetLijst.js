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