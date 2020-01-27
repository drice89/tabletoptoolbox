var selection = document.getElementById('psyPowSelect');
var spellTable = document.getElementById("spellTable");
var masteryLevel = document.getElementById('masteryLevel');
var psyGen = document.getElementById('psyGen');


var list = [

    {
        num: 0,
        name: "Smite",
        discipline: "biomancy",
        primaris: true,
        warpCharges: 1,
        powerType: "witchfire",
        range: '18"',
        strength: 4,
        ap: 2,
        attackType: "Assault 4",
        fluff: "Lethal bolts of bio-lightning leap from the psyker’s fingertips, tearing his foes apart."
    },

    {
        num: 1,
        name: "Iorn Arm",
        discipline: "biomancy",
        warpCharges: 1,
        powerType: "blessing",
        description: "Iron Arm is a blessing that targets the Psyker. Whilst the power is in effect, the Psyker has +3 to his Strength and Toughness and he gains the Smash special rule.",
        fluff: "By transmuting his flesh into living metal, the biomancer can wade through enemy fire unscathed and pulp skulls with his bare fists."
    },

    {
        num: 2,
        name: "Enfeeble",
        discipline: "biomancy",
        warpCharges: 1,
        powerType: "malediction",
        range: '24"',
        description: "Enfeeble is a malediction that targets a single enemy unit within 24 in. Whilst the poweris in effect, the target unit suffers a -1 penalty to both Strength and Toughness, and treats all terrain (even open ground) as difficult terrain.",
        fluff: "As the psyker channels his powers, tendrils of Warp energy lash over his victims, every caress sapping strength and vitality from their bodies."
    },

    {
        num: 3,
        name: "Life Leech",
        discipline: "biomancy",
        warpCharges: 1,
        powerType: "witchfire",
        range: '18"',
        strength: 6,
        ap: 2,
        attackType: "Assault 2",
        description: "If Life Leech causes at least one unsaved Wound, the Psyker, or one friendly model within 6 in. of the Psyker, immediately regains a Wound lost earlier in the battle (up to their starting number of Wounds).",
        fluff: "With a twist of his gnarled hands, the wrathful psyker rips the life force from his enemy, hoarding the stolen essence and using it to restore the injured flesh of his allies."
    },

    {
        num: 4,
        name: "Warp Speed",
        discipline: "biomancy",
        warpCharges: 1,
        powerType: "blessing",
        range: "Self",
        description: "Warp Speed is a blessing that targets the Psyker. Whilst the power is in effect, the Psyker has +3 to his Initiative and Attacks and he gains the Fleet special rule",
        fluff: "The powers of the Immaterium flow into the psyker, heightening his speed to supernatural levels. He is a blur amongst his enemies, felling the unrighteous with blows too swift to see."
    },

    {
        num: 5,
        name: "Endurance",
        discipline: "biomancy",
        warpCharges: 2,
        powerType: "blessing",
        range: '24"',
        description: "Endurance is a blessing that targets a single friendly unit within 24 in. Whilst the power is in effect, all models in the target unit gain the Eternal Warrior, Feel No Pain (4+) and Relentless special rules.",
        fluff: "eaching into the essence of his allies, the biomancer knits together bones, heals flesh and banishes fatigue so that they carry on the fight."
    },

    {
        num: 6,
        name: "Haemorrhage",
        discipline: "biomancy",
        warpCharges: 2,
        powerType: "focussed witchfire",
        range: '18"',
        description: 'Haemorrhage is a focussed witchfire power with a range of 18". The target must pass two separate Toughness tests or suffer a Wound with no armour or cover saves allowed for each test that was failed. If the target is removed as a casualty, randomly select another model (friend or foe) within 2" of him. That model must pass a single Toughness test or suffer a Wound with no armour or cover saves allowed. If that model is removed as a casualty, continue the process of selecting another model and taking a single Toughness test until a either a model survives or there are no more suitable targets within range.',
        fluff: 'Focussing his mutant mind, the psyker reaches forth and sets a fire within his victim’s flesh. Within moments, the unfortunate foe’s blood begins to boil in its own veins, tearing him asunder as it bursts from every pore.'

    },

    {
        num: 0,
        name: "Summoning",
        discipline: "malefic daemonology",
        primaris: true,
        warpCharges: 3,
        powerType: "conjuration",
        range: '12"',
        description: 'Summoning is a conjuration with a range of 12" that creates one of the following units (your choice): 10 Bloodletters of Khorne, 10 Pink Horrors of Tzeentch, 10 Plaguebearers of Nurgle, 10 Daemonettes of Slaanesh, 5 Flesh Hounds of Khorne, 3 Flamers of Tzeentch, 3 Nurgling swarms or 5 Seekers of Slaanesh. Rules for these units can be found in Codex: Chaos Daemons.',
        fluff: "The psyker completes a vile ritual that echoes through the Immaterium, summoning vile Daemons into the mortal realm."

    },

    {
        num: 1,
        name: "Cursed Earth",
        discipline: "malefic daemonology",
        warpCharges: 1,
        range: '12"',
        powerType: "blessing",
        description: 'Cursed Earth is a blessing that targets the Psyker. Whilst the power is in effect, all models with the Daemon special rule (friend or foe) within 12" of the Psyker have a +1 bonus to their invulnerable save (normally increasing it to 4+). This is cumulative with any other modifiers to a Daemon’s invulnerable save. In addition, whilst the power is in effect, friendly units with the Daemon special rule will not scatter when arriving from Deep Strike Reserve so long as the first model is placed within 12" of the Psyker.',
        fluff: 'The psyker becomes a conduit through which the energies of the Warp flow, tainting the very ground and sustaining the Daemons that walk upon it.'
    },

    {
        num: 2,
        name: "Dark Flame",
        discipline: "malefic daemonology",
        warpCharges: 1,
        powerType: "witchfire",
        range: 'Template',
        strength: 4,
        ap: 5,
        attackType: "Assault 1, Sould Blaze, Torrent",
        fluff: 'The psyker projects a dark ball of psychic flame that immolates his foes’ souls as well as their bodies.'
    },

    {
        num: 3,
        name: "Infernal Gaze",
        discipline: "malefic daemonology",
        warpCharges: 1,
        powerType: "beam",
        range: '18"',
        strength: 3,
        ap: 4,
        attackType: "Assault 1, Armourbane, Fleshbane",
        fluff: 'Unholy power streams forth from the psyker’s eyes, charring and melting all flesh, metal and stone caught in its path.' 
    },

    {
        num: 4,
        name: "Sacrifice",
        discipline: "malefic daemonology",
        warpCharges: 1,
        powerType: "conjuration",
        range: '6"',
        description: 'Sacrifice is a conjuration with a range of 6" that creates one of the following units (your choice): 1 Herald of Khorne, 1 Herald of Tzeentch, 1 Herald of Nurgle or 1 Herald of Slaanesh, with up to 30 points’ worth of options. Rules for these units can be found in Codex: Chaos Daemons. If this power is successfully manifested, one friendly model within 6" of the Psyker (or the Psyker himself) immediately suffers a single Wound with no saves of any kind allowed.',
        fluff: 'The psyker sacrifices one of his followers’ souls to summon forth one of the Chaos Gods’ most trusted servants.' 
    },

    {
        num: 5,
        name: "Incursion",
        discipline: "malefic daemonology",
        warpCharges: 3,
        powerType: "conjuration",
        range: '12"',
        description: 'Incursion is a conjuration with a range of 12" that creates one of the following units (your choice): 3 Bloodcrushers of Khorne, 3 Screamers of Tzeentch, 3 Plague Drones of Nurgle or 3 Fiends of Slaanesh. Rules for these units can be found in Codex: Chaos Daemons.',
        fluff: 'The psyker opens a portal to the Realm of Chaos through which the daemonic legions spill into the mortal plane.' 
    },

    {
        num: 6,
        name: "Possession",
        discipline: "malefic daemonology",
        warpCharges: 3,
        powerType: "conjuration",
        range: '6"',
        description: 'Possession is a conjuration with a range of 6" that creates one of the following new units (your choice): 1 Bloodthirster, 1 Lord of Change, 1 Great Unclean One or 1 Keeper of Secrets. Rules for these units can be found in Codex: Chaos Daemons. If this power is successfully manifested, the Psyker is immediately removed as a casualty (if the Psyker was part of a unit with the Brotherhood of Psykers/Sorcerers special rule, remove the entire unit as casualties). If, when using this power, the Psyker fails his Psychic test, he automatically suffers Perils of the Warp.',
        fluff: 'The psyker sacrifices his own soul and a Greater Daemon of Chaos hungrily possesses him, bursting forth from the host’s body in an explosion of psychic energy.'
    }

];

var activeSelection = "";
var globalActivePowerArray = [];

selection.addEventListener('change', function () {

    var activePower = selection.options[selection.selectedIndex].value;
    activeSelection = activePower;

    var activePowerArray = [];

    list.forEach(function (list) {
        if (list.discipline === activePower) {
            activePowerArray.push(list);
        }
    globalActivePowerArray = activePowerArray;

    });

    var fullSpellTable = '';

    var forEachFunction = function (activePower) {

        var num = "<td>Number</td><td>" + activePower.num + "</td>"; 
        var name = "<td>Name</td><td>" + activePower.name + "</td>";
        var discipline = "<td>Discipline</td><td>" + activePower.discipline + "</td>";
        var warpCharges = "<td>Warp Charges</td><td>" + activePower.warpCharges + "</td>";
        var powerType = "<td>Power Type</td><td>" + activePower.powerType + "</td>";
        var range = "<td>Range</td><td>" + activePower.range + "</td>";
        var strength = "<td>Strength</td><td>" + activePower.strength + "</td>";
        var ap = "<td>AP</td><td>" + activePower.ap + "</td>";
        var attackType = "<td>Attack Type</td><td>" + activePower.attackType + "</td>";
        var description = "<td>Description</td><td>" + activePower.description + "</td>";
        var fluff = "<td>Fluff</td><td>" + activePower.fluff + "</td>";

        var properties = [num, name, discipline, warpCharges, powerType, range, strength, ap, attackType, description, fluff];

        fullSpellTable += '<div class="container-fluid"><table>';

        properties.forEach(function (properties) {
            if (properties) {
                fullSpellTable += '<tr>' + properties + '</tr>';
            }
        });

        fullSpellTable += '</table></div>';

    };


    activePowerArray.forEach(forEachFunction);


    spellTable.innerHTML = fullSpellTable;
});



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//click the generate button to generate and post powers to page
psyGen.addEventListener('click' , randomArrayAssignment);

    var generateArray = [];

    function randomArrayAssignment() {

    

    for (var i = 0; i < masteryLevel.value; i++) {
        var genRandomPower = getRandomInt(1,6);
        var power = globalActivePowerArray[genRandomPower];
        //prevent duplicate powers from being generated
        // can I change generateArray[0], generateArray[1] to generateArray.forEach?
        if (power === (generateArray[0] || generateArray[1])) {
            genRandomPower = getRandomInt(1, 6);
            power = globalActivePowerArray[genRandomPower];
            
        }
        // opt for primaris power
        var primarisFlag = false;
        if (!primarisFlag) {
            var primarisPowerSelect = confirm("You have selected " + power.name + ". Would you like to switch for the Pimaris Power?");
            if (primarisPowerSelect === true) {
                power = globalActivePowerArray[0];
                primarisFlag = true;
            }
        }
        //push random power to new array
        generateArray.push(power);
    }

    var generatedSpells = '';

    generateArray.forEach(function (generateArray) {

        var genNum = generateArray.num;
        var genName = generateArray.name;
        var genDiscipline = generateArray.discipline;
        var genWarpCharges = generateArray.warpCharges;
        var genPowerType = generateArray.powerType;
        var genRange = generateArray.range;
        var genStrength = generateArray.strength;
        var genAp = generateArray.ap;
        var genAttackType = generateArray.attackType;
        var genDescription = generateArray.description;
        var genFluff = generateArray.fluff;
        var genProperties = [genNum, genName, genDiscipline, genWarpCharges, genPowerType, genRange, genStrength, genAp, genAttackType, genDescription, genFluff];

        generatedSpells += '<div class="container-fluid"><table>';

        genProperties.forEach(function (genProperties) {
            if (genProperties) {
                generatedSpells += '<tr><td>' + genProperties + '</td></tr>';
            }
        });

        generatedSpells += '</table></div>';
    });

    spellTable.innerHTML = generatedSpells;

}
