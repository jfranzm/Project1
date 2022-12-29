/*---- state variables -----*/
let playerUnit, enemyUnit;
// Unit class
class Unit {
    constructor(unitName, totalHP, HP, totalStamina, stamina, atkStat, defStat, isDefending) {
        this.unitName = unitName;
        this.totalHP = totalHP;
        this.HP = HP;
        this.totalStamina = totalStamina;
        this.stamina = stamina;
        this.atkStat = atkStat;
        this.defStat = defStat;
        this.isDefending = isDefending;
    }
}

// playerUnit stats
playerUnit = new Unit('Monkey', 30, 30, 15, 15, 10, 8, false)

// enemyUnit stats
enemyUnit = new Unit('Frog', 40, 40, 15, 15, 6, 10, false)
// turn counter
let turn = 1

/*----- functions -----*/
// enable player buttons upon start up
function enableButtons() {
    buttons.disabled = false;
}
// Displays text of what happened during round
function addLog(Text){
    let textBox = document.getElementById('text-box');
    newLog = document.createElement('label');
    newLog.classList.add('Logs');
    newLog.innerHTML = Text;
    textBox.appendChild(newLog);
    textBox.scrollTop = textBox.scrollHeight;
}










