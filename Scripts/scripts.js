// JAVASCRIPT FOR GAME

// CALLED ON BUTTON CLICK FOR STARTING THE GAME
function newGame() {
    var countryNameMessage = "What is the name of your country?";
    var countryName = promptForInput(countryNameMessage, "");
    if (countryName == null) {
        return;
    }
    var new_game_button = document.getElementById("new_game_button");
    new_game_button.remove();
    var country_label = document.createElement("country_name");
    country_label.innerHTML = countryName;
    addElement(country_label);
    alert("Your country is " + countryName);
    canvas  = createCanvas();
    addElement(canvas);
}

// FUNCTION THAT PROMPTS THE USER FOR INPUT
function promptForInput (promptMessage, startValue) {
    var output;
    var valid = false;
    do {
        try {
            output = prompt(promptMessage, startValue);
            if (output == "") {
                valid = false;
                alert("Please enter a country name");
            } else if (output == null) {
                return null;
            } else {
                valid = true;
            }
        } catch (error) {
            alert(error);
            falseInput = true;
        }
    } while (valid == false);
    return output;
}

// CREATES THE CANVAS AND SETS ITS ATTRIBUTES
function createCanvas() {
    var canvas = document.createElement('canvas');
    canvas.setAttribute("width", "1500");
    canvas.setAttribute("height", "750");
    canvas.setAttribute("style", "border:2px solid #c3c3c3");
    return canvas;
}

// CREATES AN ELEMENT BASED ON THE
function createElement(name_of_class) {
    var elem = document.createElement(name_of_class);
    return elem;
}

// ADDS THE PASSED IN ELEMENT TO THE DOCUMENT
function addElement(element) {
    document.body.appendChild(element);
}
//var main = document.getElementById("object");
//var render = main.getContext("2d");
