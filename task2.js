// Task 11- compulsory Task 2

// creating a function which will display the dropdown menu and remove it
function subMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    // creating a map with student name and grade.

var guessName = new Map();
guessName.set("1", "Couple Past Panzu");
guessName.set("2", "Couple Past Gaby");
guessName.set("3", "Couple Past Gedeon");
guessName.set("4", "Couple Modeste");
guessName.set("5", "Couple Balu");
guessName.set("6", "Couple Phillipe Lotshaka");
guessName.set("7", "Couple Peter Djamba");
guessName.set("8", "Couple Erick Nganda");
guessName.set("9", "Couple Edmon");
guessName.set("10", "Couple Goerge Njadi");
guessName.set("11", "Couple Elie Mundala");
guessName.set("12", "couple JC Mulaj");
guessName.set("13", "Couple Antoine");
guessName.set("14", "Couple JC Kazadi");
guessName.set("15", "Couple Guieny Bukasa");
guessName.set("16", "Couple Luamba Ngoy");
guessName.set("17", "Couple Pericle Mbumu");
guessName.set("18", "Olga Rizikising");
guessName.set("19", "Couple Serge Kiala");
guessName.set("20", "Bro Caleb");
guessName.set("21", "Alia & Krizia");
guessName.set("table3", "Peter22");
guessName.set("table3", "Peter23");
guessName.set("table3", "Peter24");
guessName.set("table3", "Peter25");
guessName.set("table3", "Peter26");
guessName.set("table3", "Peter27");
guessName.set("table3", "Peter28");
guessName.set("table3", "Peter29");
guessName.set("table3", "Peter30");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");
guessName.set("table", "Peter");

var tableName = new Map();
tableName.set("WMB", "Minister");
tableName.set("Isaac", "Family");
tableName.set("Jacob", "Family");
tableName.set("Esther", "Family");
tableName.set("King David", "Family");
tableName.set("table6", 15.00);
tableName.set("table7", 10.00);
tableName.set("table8", 15.00);
tableName.set("table9", 35.00);
tableName.set("table10", 25.00);



//  assigning different variable with the to retrieved each food  as value.
var key = Array.from(tableName.keys())[0];
var valKey = tableName.get(Array.from(tableName.keys())[0]);
var key1 = Array.from(tableName.keys())[1];
var key2 = Array.from(tableName.keys())[2];
var key3 = Array.from(tableName.keys())[3];
var key4 = Array.from(tableName.keys())[4];
var key5 = Array.from(tableName.keys())[5];
var key6 = Array.from(tableName.keys())[6];
var key7 = Array.from(tableName.keys())[7];
var key8 = Array.from(tableName.keys())[8];
var key10 = Array.from(tableName.keys())[9];

//  assigning different variable to the  retrieved the price of each food
var val = guessName.get(Array.from(guessName.keys())[0]);
var val1 = guessName.get(Array.from(guessName.keys())[1]);
var val2 = guessName.get(Array.from(guessName.keys())[2]);
var val3 = guessName.get(Array.from(guessName.keys())[3]);
var val4 = guessName.get(Array.from(guessName.keys())[4]);
var val5 = guessName.get(Array.from(guessName.keys())[5]);
var val6 = guessName.get(Array.from(guessName.keys())[6]);
var val7 = guessName.get(Array.from(guessName.keys())[7]);
var val8 = guessName.get(Array.from(guessName.keys())[8]);
var val9 = guessName.get(Array.from(guessName.keys())[9]);

// creating a function that will display the dropmenu content
function dropMenu() {
    // the menu content
    document.getElementById("menu1").innerHTML = "Guess Table";

}


// creating the prompt message which gives an option the user to choose the deink of their choice

//  prompt message for burger with different drinks
function menu1() {
    var text;

    var favDrink = prompt("Kindly enter the invitation number  : eg: 1/2/20");
    var favDrink1 = favDrink.toLowerCase();
    switch (favDrink1) {
        case "1":
            text = "Table : " + (key) + "   (" + (valKey) + ")" + "<br/><br/>Name: " + (val);
            break;
        case "2":
            text = "Table : " + (key) + "<br/><br/>Name:" + (val1);
            break;
        case "3":
            text = "Table : " + (key) + "<br/><br/>Name: " + (val2);
            break;
        case "4":
            text = "Table : " + (key) + "<br/><br/>Name:" + (val3);
            break;
        case "5":
            text = "Table : " + (key1) + "<br/><br/>Name: " + (val4);
            break;
        case "6":
            text = "Table : " + (key1) + "<br/><br/>Name: " + (val5);
            break;
        case "7":
            text = "Table : " + (key1) + "<br/><br/>Name: " + (val6);
            break;
        case "8":
            text = "Table : " + (key1) + "<br/><br/>Name: " + (val7);
            break;
        case "9":
            text = "Table : " + (key1) + "<br/><br/>Name: " + (val8);
            break;
        case "10":
            text = "Table : " + (key1) + "<br/><br/>Name: " + (val9);
            break;
        default:
            text = "I have never heard of that one..";
    }
    document.getElementById("result").innerHTML = text;
}
ss