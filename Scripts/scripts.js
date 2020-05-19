// JAVASCRIPT FOR GAME
// JARED FRANK - JAF216@PITT.EDU - JFRANK1120 ON GITHUB

// CALLED ON BUTTON CLICK FOR STARTING THE GAME
function newGame() {
    var countryNameMessage = "What is the name of your country?";
    var countryName = promptForInput(countryNameMessage, "");
    if (countryName == null) {
        return;
    }
    var new_game_button = getElement("new_game_button");
    new_game_button.remove();
    var country_label = createElement("country_name");
    country_label.innerHTML = countryName;
    addElement(country_label);
    alert("Your country is " + countryName);
    canvas = createCanvas();
    addElement(canvas);

    // Add event listeners for having keyboard interaction
    document.addEventListener('keydown', doKeyDown, true);
    document.addEventListener('keyup', doKeyUp, true);
    document.addEventListener('keyleft', doKeyLeft, true);
    document.addEventListener('keyRight', doKeyRight, true);
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

// GET THE DESIRED ELEMENT BY THE PASSED IN NAME AND RETURN THE OBJECT
function getElement(name) {
    var returnVal = document.getElementById(name);
    return returnVal;
}

// CREATES THE CANVAS AND SETS ITS ATTRIBUTES
function createCanvas() {
    var canvas = document.createElement('canvas');
    canvas.setAttribute("width", "1500");
    canvas.setAttribute("height", "750");
    canvas.setAttribute("style", "border:2px solid #c3c3c3; position: absolute; left: 10%;");
    return canvas;
}

// CREATES AN ELEMENT BASED ON THE NAME OF THE CLASS
function createElement(name_of_class) {
    var elem = document.createElement(name_of_class);
    return elem;
}

// ADDS THE PASSED IN ELEMENT TO THE DOCUMENT
function addElement(element) {
    document.body.appendChild(element);
}

// CALLED WHEN DOWN ARROW KEY IS PRESSED
function doKeyDown() {

}

// CALLED WHEN THE UP ARROW KEY IS PRESSED
function doKeyUp() {

}

// CALLED WHEN THE LEFT ARROW KEY IS PRESSED
function doKeyLeft() {

}

// CALLED WHEN THE RIGHT ARROW KEY IS PRESSED
function doKeyRight() {

}
