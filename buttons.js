var password;

function randomPassword() {
	document.getElementById("login_input").value = "";
	/*reset edit text*/
	document.getElementById("calc_input").value = "";
	/*reset edit text*/
	do {
		password = Math.floor(Math.random() * 1000);
		/*getting random number*/
	} while (password < 100);
	var pass = document.getElementById("text_password");
	/*set it to the text value*/
	pass.firstChild.nodeValue = "[" + password + "]";
	/*pass.innerHTML = password;*/
	/*as variant (the same as line above )*/
}

function buttonClick(button) {
	var edit = document.getElementById("calc_input");
	if (button.firstChild.nodeValue != "=") {
		edit.value += button.firstChild.nodeValue; 
		if (button.firstChild.nodeValue == "c") edit.value = "";
		if (button.firstChild.nodeValue == "<") edit.value = edit.value.slice(0,-2); 
	} else {
		edit.value = eval(edit.value);
	}
	
}

function buttonResetClick() {
	var edit = document.getElementById("calc_input");
	edit.value = "";
	randomPassword();
}

function showPopUp() {
	alert("Your login: " + ((login_input.value) ? login_input.value : "is empty") + /*check, if values is available, and output them*/
		"\nYour password: " + ((calc_input.value) ? calc_input.value : "is empty"));
}
