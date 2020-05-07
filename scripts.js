function newGame() {
    var countryNameMessage = "What is the name of your country?";
    var countryName = promptForInput(countryNameMessage, "Example Country");
    alert("Your country is " + countryName);
    //showColorPicker('colorPicker');
    var canvas = document.createElement('canvas');
    canvas.setAttribute("width", "1500");
    canvas.setAttribute("height", "750");
    canvas.setAttribute("style", "border:2px solid #c3c3c3");
    document.body.appendChild(canvas);
}
// Function that prompts the user for input
function promptForInput (promptMessage, startValue) {
    var output;
    var  falseInput = false;
    do {
        try {
            output = prompt(promptMessage, startValue);
            if (output != null) {
                falseInput = false;
            }
        } catch (error) {
            alert(error);
            falseInput = true;
        }
    } while (falseInput == true);
    return output;
}
// Starts the game
function startGame() {
}
function showColorPicker(id) {
    document.getElementById(id).style.visibility = "visible";
}
function addElement() {
    var newObject = document.createElement("canvas");
}
//var main = document.getElementById("object");
//var render = main.getContext("2d");
