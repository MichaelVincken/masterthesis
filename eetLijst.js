/**
 * Created by Michael on 12/11/2015.
 */
function verwijder(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function alternatief(btn) {
  var row = btn.parentNode.parentNode.cells;
  my_text=prompt('Geef een vervangerecht op:');
  row[1].innerHTML = "<td>" + my_text + "</td>";
}