document.getElementById("goToPage2").onclick = function() {
    window.location.href = 'index (1).html';
};

var d = new Date();
var n = d.getFullYear();
var p = d.getDate();
var days = ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"];
var months = ["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris"];
document.getElementById("diena").innerHTML = days[d.getDay()];
document.getElementById("gads").innerHTML = n;
document.getElementById("datums").innerHTML = p;
document.getElementById("menesis").innerHTML = months[d.getMonth()];


function addName() {
    var userInput = document.getElementById("titleCreator").value;
    var outputText = document.getElementById("press_text");
    outputText.textContent +=  userInput + " , Hey!" ;
}
