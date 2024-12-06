function HelloWorld() {
  alert("Hello, world!");
}

function makeTextBigger() {
	document.getElementById("userText").style.fontSize = "24pt";
}

function applyStyle() {
	if (document.getElementById("fancyRadio").checked) {
	  document.getElementById("userText").style.fontWeight = "bold";
	  document.getElementById("userText").style.color = "blue";
	  document.getElementById("userText").style.textDecoration = "underline";
	} else {
	  document.getElementById("userText").style.fontWeight = "normal";
	  document.getElementById("userText").style.color = "black";
	  document.getElementById("userText").style.textDecoration = "none";
	}
}  

function makeTextMoo() {
	document.getElementById("userText").value = document.getElementById("userText").value
	  .toUpperCase()
	  .split(".") 
	  .map(sentence => sentence.trim() !== "" ? sentence.trim() + "-Moo" : "") 
	  .join(". "); 
}

//document.getElementById("biggerButton").onclick = HelloWorld;
document.getElementById("biggerButton").onclick = makeTextBigger;
document.getElementById("fancyRadio").onchange = applyStyle;
document.getElementById("boringRadio").onchange = applyStyle;
document.getElementById("mooButton").onclick = makeTextMoo;