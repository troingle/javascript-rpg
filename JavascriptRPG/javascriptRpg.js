var gold = 0;

weapons = ["Bare fists", "Club", "Sword", "Mace", "Excalibur", "Meteor hammer", "Jim's hand", "Hell blade idk I'm running out of ideas"];
weaponNum = 0;

enemyList = []

function nextMove(){

    var input = prompt("1) Walk forwards 2) Go to shop 3) Check stats 4) Make sacrifice", "");

    errorMessage = "";

    if (input == "1"){
        walkForwards()
    }
    else if (input == "2"){
        goShop()
    }
    else if (input == "3"){
        checkStats()
    }
    else if (input == "4"){
        makeSacrifice()
    }
    else{
        alert("Please choose a number between 1 and 4.")
        nextMove()
    }
}

function walkForwards(){
    var chosenEnemy = enemyList[Math.floor(Math.random() * 5) + 1]
    alert("You encounter the enemy " + chosenEnemy)
}

function goShop(){
    alert("Welcome to the shop! What would you like to buy?")
    input = prompt("1) ", "")
}

function checkStats(){
    alert("Gold: " + gold + "\nWeapon: " + weapons[weaponNum])
    nextMove()
}

alert("Welcome! To play the game, type the number that corresponds to your choice of action.")

nextMove()
