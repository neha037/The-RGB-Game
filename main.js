var colors = genramColourArr(6);
var squares = document.querySelectorAll(".square");
var pickedColor = ranColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// To set color
	squares[i].style.backgroundColor = colors[i];
	// To react on the user click
	squares[i].addEventListener("click", function () {
		// identify the clicked color
		var clickedColor = this.style.backgroundColor;
		// compare the clicked color
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = " Well done  ";
			resetbutton.textContent = "another round?  " ;
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			messageDisplay.style.color = clickedColor;
		} else {
			this.style.backgroundColor = "#000000";
			messageDisplay.textContent = "Try again!";
		}
	});
}


easybtn.addEventListener("click", function () {
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	colors = genramColourArr(3);
	pickedColor = ranColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < 3; i++) {
		// To set color
		squares[i].style.backgroundColor = colors[i];
	}
	for (var i = 3; i < 6; i++) {
		// To set color
		squares[i].style.backgroundColor = "#000000";
	}
})

hardbtn.addEventListener("click", hardreset)

// Function to change all square colour to correct answer
function changeColors(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

// Function to select random colour
function ranColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Function to generate random colour array
function genramColourArr(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(ranColorGen());
	}
	return arr;
}

// Function to generate random color
function ranColorGen() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Function to reset the Palettes
resetbutton.addEventListener("click", function () {
	resetbutton.textContent = "Different Palette!" ;
	hardreset();
	h1.style.backgroundColor = "red" ;
	messageDisplay.style.color = "red";
});

function hardreset () {
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	colors = genramColourArr(6);
	pickedColor = ranColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < 6; i++) {
		// To set color
		squares[i].style.backgroundColor = colors[i];
	}
	messageDisplay.textContent = "";

}


