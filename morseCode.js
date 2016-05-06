var reply;
var translatedReply;
var spacedOut;

var display = document.getElementById("result");

var morse = {
	'a' : '.-',
	'b' : '-...',
	'c' : '-.-.',
	'd' : '-..',
	'e' : '.',
	'f' : '..-.',
	'g' : '--.',
	'h' : '....',
	'i' : '..',
	'j' : '.---',
	'k' : '-.-',
	'l' : '.-..',
	'm' : '--',
	'n' : '-.',
	'o' : '---',
	'p' : '.--.',
	'q' : '--.-',
	'r' : '.-.',
	's' : '...',
	't' : '-',
	'u' : '..-',
	'v' : '...-',
	'w' : '.--',
	'x' : '-..-',
	'y' : '-.--',
	'z' : '--..',
	'1' : '.----',
	'2' : '..---',
	'3' : '...--', 
    '4' : '....-',
    '5' : '.....',
    '6' : '-....',
    '7' : '--...',
    '8' : '---..',
    '9' : '----.',
    '0' : '-----',
    '.' : '.-.-.-',
    ',' : '--..--',
    '?' : '..--..',
    '/' : '-..-.',
    ' ' : '|'
};

function prompter(){
	reply = prompt("What text do you want translated?");
}

function translate(spacedOut){
	return morse[spacedOut];
}

function printTranslate(){
	spacedOut = reply.split("").map(translate).join(" ");
	display.innerHTML = spacedOut;
		
}

prompter();
printTranslate();
console.log(reply);
console.log(spacedOut);

