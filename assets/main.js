var toHit = (7-document.getElementById("chanceToHit").value)/6;
var toWound = (7-document.getElementById("chanceToWound").value)/6;
//var toSave = (7-document.getElementById("chanceToSave").value)/6;

function answer(hit, wound) {
    doctument.getElementById("toKill").innerHTML = hit * wound + "%"
}

document.getElementById("btnSubmit").onClick(answer(toHit, toWound));