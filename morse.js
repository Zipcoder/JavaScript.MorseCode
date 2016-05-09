var text = prompt("Please enter a sentence to be converted into morse code:").toUpperCase();
var entry = document.getElementById('result');

var morseList = {
A:	".-",
B: "-...",
C:	"-.-.",
D:	"-..",
E:	".",
F:	"..-.",
G:	"--.",
H:	"....",
I:	"..",
J:	".---",
K:	"-.-",
L:	".-..",
M:	"--",
N:	"-.",
O:	"---",
P:	".--.",
Q:	"--.-",
R:	".-.",
S:	"...",
T:	"-",
U:	"..-",
V:	"...-",
W:	".--",
X:	"-..-",
Y:	"-.--",
Z:	"--..",
"?": "..--..",
"/": "	-..-.",
".": ".-.-.-",
",": "--..--",
":": "---...",
"'": ".----.",
"-": "-....-",
'"': ".-..-.",
"@": ".--.-.",
"=": "-...-",
0: "-----",
1: ".----",
2: "..---",
3: "...--",
4: "....-",
5: ".....",
6: "-....",
7: "--...",
8: "---..",
9: "----.",
" ": "|"
};

var translatedText = "";

for(var i = 0; i < text.length;i++){
  if(morseList.hasOwnProperty(text.charAt(i))){
    translatedText = translatedText + morseList[text.charAt(i)] + " ";
  }
}

entry.innerHTML = translatedText;
