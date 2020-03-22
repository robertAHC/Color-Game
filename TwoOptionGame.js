// January 3, 2020
// Part of the project that deals with most of the functionality of each section

// Generating amount of colors

var numSquares = 6;
var colors = generatingRandomColors(numSquares);

// Selecting the different ids into variables
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

// Sectiong that deals with the condition of the program
for(var i = 0; i < squares.length; i++){
	// adding initial colors to squares
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {

		//grabing color of clicked squares
		var clickedColor = this.style.background;
	
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "CORRECT!";
            reset.textContent = "PLAY AGAIN?";
			changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            
		} else {
			this.style.background = "dimgray";
			messageDisplay.textContent = "TRY AGAIN";
		}
	});
}

// Section that resets the game
reset.addEventListener("click", function(){
    colors = generatingRandomColors(numSquares); // generating new colors
    pickedColor = pickColor(); //picking new color
    colorDisplay.textContent = pickedColor;   
    // Updating all the colors 
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    // reseting the h1 color to the original mode
    h1.style.backgroundColor = "lightslategrey";
    messageDisplay.textContent = ""; 
    this.textContent = "NEW GAME";

});

// Function that changes the color to the pickedColor 
function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

// Function that chooses the random color
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Function that generates the random colors
function generatingRandomColors(num) {
	var arr = [];
	//add num random colors to arr, then push it
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

// Function that generates the random colors numbers
function randomColor() {
	//pick a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}


// Sections that change to easy, medium, and hard
easy.addEventListener("click", function() {
	easy.classList.add("selectedOption");
    hard.classList.remove("selectedOption");
    
	numSquares = 3;
	colors = generatingRandomColors(numSquares);
	pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click", function() {
	hard.classList.add("selectedOption");
    easy.classList.remove("selectedOption");
    
    numSquares = 6;
    
	colors = generatingRandomColors(numSquares);
	pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});
