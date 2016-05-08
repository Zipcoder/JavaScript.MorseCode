function myFunction() {
    var person = prompt("Please enter strings consisting of A-Z, 0-9").toLowerCase();
    console.log(person);
    var charCodes=new Array(36);
    charCodes["a"]=". _";
    charCodes["b"]="_ . . .";
    charCodes["c"]="_ . _ .";
    charCodes["d"]="_ . .";
    charCodes["e"]=".";
    charCodes["f"]=". . _ .";
    charCodes["g"]="_ _ .";
    charCodes["h"]=". . . .";
    charCodes["i"]=". .";
    charCodes["j"]=". _ _ _";
    charCodes["k"]="_ . _";
    charCodes["l"]=". _ . .";
    charCodes["m"]="_ _";
    charCodes["n"]="_ .";
    charCodes["o"]="_ _ _";
    charCodes["p"]=". _ _ .";
    charCodes["q"]="_ _ . _";
    charCodes["r"]=". _ .";
    charCodes["s"]=". . .";
    charCodes["t"]="_";
    charCodes["u"]=". . _";
    charCodes["v"]=". . . _";
    charCodes["w"]=". _ _";
    charCodes["x"]="_ . . _";
    charCodes["y"]="_ . _ _";
    charCodes["z"]="_ _ . .";
    charCodes["1"]=". _ _ _ _";
    charCodes["2"]=". . _ _ _";
    charCodes["3"]=". . . _ _";
    charCodes["4"]=". . . . _";
    charCodes["5"]=". . . . .";
    charCodes["6"]="_ . . . .";
    charCodes["7"]="_ _ . . .";
    charCodes["8"]="_ _ _ . .";
    charCodes["9"]="_ _ _ _ .";
    charCodes["0"]="_ _ _ _ _";
    var temp='';
    var chars=person.split("");
    var disMorse='';
    for (a=0; a<chars.length; a++) {
      if (chars[a]!=" ") {
        if (charCodes[chars[a]]) {
          disMorse+=charCodes[chars[a]]+"    ";
          
        }
      }
    }

    if (person != null) {
        document.getElementById("result").innerHTML = disMorse;
    }
}
