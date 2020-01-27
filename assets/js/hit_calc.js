document.getElementById("btnSubmit").addEventListener("click", answer);

var chanceToHit = document.getElementById("chanceToHit");
var chanceToWound = document.getElementById("chanceToWound");
var chanceToSave = document.getElementById("chanceToSave");
var bonusChanceToSave = document.getElementById("bonusChanceToSave");
var shots = document.getElementById("shots");

function answer() {
    var calculation = 0;

    var hitChance = function () {
        var _hitChance = 0;
        if (chanceToHit.value !== "") {
            if (chanceToHit.value < 7 && chanceToHit.value > 0) {
                _hitChance = (7 - chanceToHit.value) / 6;
            } else {
                document.getElementById("error-message").innerHTML = "Invalid 'To Hit' value detected";
            }
        } else {
            _hitChance = 1;
        }
        return _hitChance;
    };

    var woundChance = function () {
        var _woundChance = 0;
        if (chanceToWound.value !== "") {
            if (chanceToWound.value < 7 && chanceToWound.value > 0) {
                _woundChance = (7 - chanceToWound.value) / 6;
            } else {
                document.getElementById("error-message").innerHTML = "Invalid 'To Wound' value detected";
            }
        } else {
            _woundChance = 1;
        }
        return _woundChance;
    };

    var saveChance = function () {
        var _saveChance = 0;
        if (chanceToSave.value !== "") {
            if (chanceToSave.value < 7 && chanceToSave.value > 0) {
                _saveChance = (1 - ((7 - chanceToSave.value) / 6));
            } else {
                document.getElementById("error-message").innerHTML = "Invalid 'To Save' value detected";
            }
        } else {
            _saveChance = 1;
        }
        return _saveChance;
    };

    var bonusSave = function () {
        var _bonusSave = 0;
        if (bonusChanceToSave.value !== "") {
            if (bonusChanceToSave.value < 7 && bonusChanceToSave.value > 0) {
                _bonusSave = (1 - ((7 - bonusChanceToSave.value) / 6));
            } else {
                document.getElementById("error-message").innerHTML = "Invalid 'To Save' value detected";
            }
        } else {
            _bonusSave = 1;
        }
        return _bonusSave;
    };

    var shotsCalc = function () {
        var _shotsCalc = 1;
        if (shots.value !== "" && shots.value > 0) {
                _shotsCalc = shots.value;
            }
        return _shotsCalc;
    };

    calculation = hitChance() * woundChance() * saveChance() * bonusSave();

    var calculationShots = calculation * shotsCalc();

    var calculationString = (calculation * 100).toFixed(2) + "%" + " (" + calculationShots.toFixed(2) + " wounds)";

    document.getElementById("modifiedToWound").innerHTML = calculationString;

    var record = function () {
        var submissionRowHtml = "";
        var submissionRow = [
            document.getElementById("target").value || " ",
            shots.value || " ",
            chanceToHit.value || " ",
            chanceToWound.value || " ",
            chanceToSave.value || " ",
            bonusChanceToSave.value || " ",
            calculationString
        ];
        for (var i = 0; i < submissionRow.length; i++) {
            submissionRowHtml += "<td>" + submissionRow[i] + "</td>";
        }
        return submissionRowHtml;
    };

    var write = function (rowData) {
        var insertTr = document.createElement("tr");
        var footer = document.getElementById("footer");
        var parentTable = footer.parentNode;
        parentTable.insertBefore(insertTr, footer);
        insertTr.outerHTML = rowData; 
    };
    
    write(record());


}

