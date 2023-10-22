var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var random = document.querySelector("#random");

var default1 = "#ff0000" //red
var default2 = "#ffff00" //yellow

// if page is opened for the first time use default gradient from red to yellow for the background color
if (sessionStorage.getItem("grad1") === null && sessionStorage.getItem("grad2") === null) {
	body.style.background = "linear-gradient(to right, " + default1 + ", " + default2 + ")";
	css.innerText = "background: linear-gradient(to right, " + default1 + ", " + default2 + ")";

// after reload (not closing the browser tab) use last color picked by a user (or randomly generated) for the background
} else {
	body.style.background = "linear-gradient(to right, " + sessionStorage.getItem("grad1") + ", " + sessionStorage.getItem("grad2") + ")";
	css.innerText = "background: linear-gradient(to right, " + sessionStorage.getItem("grad1") + ", " + sessionStorage.getItem("grad2") + ")";
}

function setBackgroundGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.innerText = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	// to retain color value after page reload
	sessionStorage.setItem("grad1", color1.value);
	sessionStorage.setItem("grad2", color2.value);
	isFirstLoad = false;
}

//we can use 'input' event
color1.addEventListener("input", setBackgroundGradient);

color2.addEventListener("input", setBackgroundGradient);


 
var hexNums = ['a', 'b', 'c', 'd', 'e', 'f'];

function getRandom() {
	var colValue1 = "";
	var colValue2 = "";
	for (var i=0; i < 6; i++) {
		var num = Math.floor(Math.random() * 9); // 0-9
		var numStr = num.toString();
		var numHex = Math.floor(Math.random() * 5); //0-5
		
		// to generate first hex color value
		if (i < 3) {
			colValue1 = colValue1 + numStr + hexNums[numHex];

		// to generate second hex color value
		} else {
			colValue2 = colValue2 + numStr + hexNums[numHex];
		}

	}
	
	return colValue1+colValue2
}


random.addEventListener("click", function() {
	color1.value = "#" + getRandom().slice(0, 6);
	color2.value = "#" + getRandom().slice(6, 13);
	setBackgroundGradient();
})









