function berekenBMI() {
  var lengte = Number(document.getElementById("lengte").value);
  var gewicht = Number(document.getElementById("gewicht").value);

  var BMI = Math.round(gewicht / Math.pow(lengte, 2) * 10000);

  document.getElementById("resultaat").innerText = Math.round(BMI * 100) / 100;

  var resultaat = Math.round(BMI * 100) / 100
  if (resultaat < 18.5)
    document.getElementById("comment").innerText = "Ondergewicht";
  else if (resultaat >= 18.5 && resultaat <= 25)
    document.getElementById("comment").innerText = "Normaal";
  else if (resultaat >= 25 && resultaat <= 30)
    document.getElementById("comment").innerText = "Obese";
  else if (resultaat > 30)
    document.getElementById("comment").innerText = "Overgewicht";
}