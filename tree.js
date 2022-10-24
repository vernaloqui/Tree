//a function that changes the backgroundColor properties of button lights
function sparkling(){
    //gets the button elements from HTML document
    let lights1 = document.getElementById("light1");
    let lights2 = document.getElementById("light2");
    let lights3 = document.getElementById("light3");
    let lights4 = document.getElementById("light4");
    let lights5 = document.getElementById("light5");
    let lights6 = document.getElementById("light6");
    let lights7 = document.getElementById("light7");
    let lights8 = document.getElementById("light8");
    let lights9 = document.getElementById("light9");
    let lights10 = document.getElementById("light10");

    //randomizes the values of red, green and blue via Math.random and Math.floor
    let redIntensity = Math.floor(Math.random()*256);
    let greenIntensity = Math.floor(Math.random()*256);
    let blueIntensity = Math.floor(Math.random()*256);
    
    //concatenates the randomized values for red, green and blue intensity
    let generatedColor = "rgb(" + redIntensity + ", " + 
    greenIntensity + ", " + blueIntensity + ")";

    //displays the generated color in the input box to show the rgb values
    document.getElementById("LightsColor").value = generatedColor;

    //change the backgroundColor property of the buttons using the generated color
    lights1.style.backgroundColor = generatedColor;
    lights2.style.backgroundColor = generatedColor;
    lights3.style.backgroundColor = generatedColor;
    lights4.style.backgroundColor = generatedColor;
    lights5.style.backgroundColor = generatedColor;
    lights6.style.backgroundColor = generatedColor;
    lights7.style.backgroundColor = generatedColor;
    lights8.style.backgroundColor = generatedColor;
    lights9.style.backgroundColor = generatedColor;
    lights10.style.backgroundColor = generatedColor;
    
}

//starts the changing colors of the lights with a given interval from the user
function LightsOn(){
    //collects the input interval from the input box
    let intervalInput = 1000 * document.getElementById("interval2").value;
    
    startLightColor = setInterval(sparkling, intervalInput);
}

//stops the color changing of the lights
function LightsOff(){
    clearInterval(startLightColor);
}
//a function that changes the borderBottomColor properties of the divs for the tree
function forTree(){
    //gets the div elements from HTML document
    let tree = document.getElementById("triangle");
    let tree1 = document.getElementById("trapezoid1");
    let tree2 = document.getElementById("trapezoid2");

    //declaration of the array that contains colors with the shade of green
    let shadesOfGreen = ["lawngreen", "chartreuse", "limegreen", "lime", "forestgreen", "green", "springgreen", "lightgreen", "palegreen", "mediumseagreen", "seagreen", "olivedrab", "darkolivegreen"]
    
    //randomizes the seclection of the index for choosing a color among the defined array
    let generateColor = Math.floor(Math.random()*12);

    //changes the borderBottomColor of each elements based from the chosen color
    tree.style.borderBottomColor = shadesOfGreen[generateColor];
    tree1.style.borderBottomColor = shadesOfGreen[generateColor];
    tree2.style.borderBottomColor = shadesOfGreen[generateColor];

    //displays the values of the selected color in an output box
    document.getElementById("TreeColor").value = shadesOfGreen[generateColor];
}
//starts the changing color of the tree with a given interval from the user
function TreeOn(){
    //collects the input interval from the input box
    let intervalTree = 1000 * document.getElementById("interval1").value;
    startColor = setInterval(forTree, intervalTree);
    
}
    
//stops the color changing of the tree
function TreeOff(){
    clearInterval(startColor);
}

function Reset(){
    location.reload();
}