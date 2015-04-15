var output;

function buttonClick(button) {
	var edit = document.getElementById("calc_input");
	var buttonValue = button.firstChild.nodeValue;
	if (buttonValue == "=") {
		if(output == true) {
			if( (edit.value.indexOf("+") > -1) || (edit.value.indexOf("-") > -1) ) { 
				document.open();
				document.write("<h1>" + eval(edit.value) + "</h1>");
				document.close();
				return;
			}
			if( (edit.value.indexOf("*") > -1) || (edit.value.indexOf("/") > -1) ) {
				alert("Answer: " + eval(edit.value));
				return;
			}
		} else {
			edit.value = eval(edit.value);
		}
	} else {
		edit.value += buttonValue; 
		if (buttonValue == "c") edit.value = "";
		if (buttonValue == "<") edit.value = edit.value.slice(0,-2); 
	}	
}

function changeOutput(checkBox) {
	if(checkBox.checked == false) {
		output = true;
	} else {
		output = false;
	}
}