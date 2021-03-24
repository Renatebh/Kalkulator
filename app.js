// En enkel kalkulator


var gangeKnapp = document.getElementById("gangeKnapp");
var resultat = document.getElementById("resultat");
var deleKnapp = document.getElementById("deleKnapp");
var plussKnapp = document.getElementById("plussKnapp");
var minusKnapp = document.getElementById("minusKnapp");

//addEventListener

gangeKnapp.addEventListener("click", function(){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  gangeResultat = tall1 * tall2;
  resultat.textContent = "Resultatet er " + gangeResultat;
  });

deleKnapp.addEventListener("click", function(){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  deleResultat = tall1 / tall2;
  resultat.textContent = "Resultatet er " + deleResultat;
});

plussKnapp.addEventListener("click", function(){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  plussResultat = parseInt(tall1) + parseInt(tall2);
  resultat.textContent = "Resultatet er " + plussResultat;
});

minusKnapp.addEventListener("click", function(){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  minusResultat = tall1 - tall2;
  resultat.textContent = "Resultatet er " + minusResultat;
});
