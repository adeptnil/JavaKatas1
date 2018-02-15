
function putInHtml(answer, location) {
    let div = document.createElement("div");
    div.textContent = answer;
    document.getElementById(location).appendChild(div);
}
// putInHtml(name(), 'div2');

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
var total = 0;

//#1
var pmp = "";
for(i = 1; i < 21; i++) {
    pmp = pmp + i + " ";
 }
 putInHtml(pmp, 'div1');

//#2
var pmpT = "";
for (var i = 1; i < 21; i++) {
      if (i % 2 === 0)
      pmpT = pmpT + i + " ";
}
 putInHtml(pmpT, 'div2');

//#3;
var pmpTh = "";
for (var i = 1; i < 21; i++){
      if (i % 2 !== 0)
      pmpTh = pmpTh + i + " ";
}      
 putInHtml(pmpTh, 'div3');

//#4
var pmpTha = "";
for (var i = 0; i < 101; i++){
    if (i % 5 === 0)
    pmpTha = pmpTha + i + " "; 
}
putInHtml(pmpTha, 'div4');

//#5
var pmpThat = "";
for(var i = 1; i < 11; i++) {
    pmpThat = pmpThat + i*i + " ";
}
putInHtml(pmpThat, 'div5');

//#6
var pmpThatL = "";
for(var i = 20; i > 0; i--) {
	pmpThatL = pmpThatL + i + " ";
}
putInHtml(pmpThatL, 'div6');

//#7
var pmpThatLi = "";
for(var i = 20; i > 0; i--) {
    if (i % 2 === 0) 
	pmpThatLi = pmpThatLi + i + " ";
}
putInHtml(pmpThatLi, 'div7');

//#8
var pmpThatLig = "";
for(var i = 20; i > 0; i--) {
    if (i % 2 !== 0) 
	pmpThatLig = pmpThatLig + i + " ";
}
putInHtml(pmpThatLig, 'div8');

//#9
var pTha = "";
for (var i = 101; i > 0; i--){
    if (i % 5 === 0)
    pTha = pTha + i + " "; 
}
putInHtml(pTha, 'div9');

//#10
var phat = "";
for(var i = 10; i > 0; i--) {
    phat = phat + i*i + " ";
	// document.write(i*i + " ");
}
putInHtml(phat, 'div10');



// //#11
for(i = 0; i < sampleArray.length; i++) {
    hit = sampleArray + " ";
    // putInHtml(sampleArray[i] + ' ');
}
putInHtml(hit, 'div11');

// //#12
var ThatLi = "";
for(i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 === 0)
    ThatLi = ThatLi + sampleArray[i] + " ";
    
}
putInHtml(ThatLi, 'div12');

// //#13
var ThatLig = "";
for(i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 !== 0)
    ThatLig = ThatLig + sampleArray[i] + " ";

}
putInHtml(ThatLig, 'div13');

// //#14
var ThatLigh = "";
for(i = 0; i < sampleArray.length; i++) {
    ThatLigh = ThatLigh + (sampleArray[i] * sampleArray[i]) + " ";
}
putInHtml(ThatLigh, 'div14');

// //#15
var fuj = 0;
for(i = 0; i < 21; i++) {
    fuj = fuj + i;
 }
 putInHtml(fuj, 'div15');

// //#16
var ThatLight = 0;
for(i = 0; i < sampleArray.length; i++) {
    ThatLight = ThatLight + sampleArray[i];
}
putInHtml(ThatLight, 'div16');

//#17
function myArrayMin(arr) {
    return Math.min.apply(null,arr);
}
putInHtml(myArrayMin(sampleArray), 'div17');

// //#18
function myArrayMax(arr) {
    return Math.max.apply(null,arr);
}
putInHtml(myArrayMax(sampleArray), 'div18');

//#19
for (i = 0; i <= 20; i++) {
    var newElement = document.createElement("div");
    newElement.className = "box";
    newElement.style.backgroundColor = "grey";
    newElement.style.height = 20 + "px";
    newElement.style.width = 100 + "px";
    var newText = document.createTextNode("box" + i);
    newElement.appendChild(newText);
    var destination = document.getElementById("div19");
    destination.appendChild(newElement);
}
//#20
for (i = 1; i <= 20; i++) {
    var newElement = document.createElement("div");
    newElement.className = "StepTwenty";
    newElement.style.width = 105 + "px";
    newElement.style.height = 20 + "px";
    if (i % 2 == 0) {
        newElement.style.backgroundColor = ("grey");
    }
  
    var newText = document.createTextNode("box");
    newElement.appendChild(newText);
    var destination = document.getElementById("div20");
    destination.appendChild(newElement);
}
//#21
let width = sampleArray[i];
for (i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        newElement.style.backgroundColor = ("grey");
        newElement.style.width = (width + "px");
    }
    var newElement = document.createElement("div");
    newElement.className = "StepTwentyOne";
    var newText = document.createTextNode("box");
    newElement.appendChild(newText);
    var destination = document.getElementById("div21");
    destination.appendChild(newElement);
}
//#22
for (i = 1; i <= 20; i++) {
    wide = sampleArray[i];
    var newElement = document.createElement("div");
    newElement.className = "StepTwentyTwo";
    newElement.style.width = (wide + "px");
    var newText = document.createTextNode("box");
    newElement.appendChild(newText);
    var destination = document.getElementById("div22");
    destination.appendChild(newElement);
    if (i % 2 == 0) {
        newElement.style.backgroundColor = ("red");
    }
    // Add text into the new element //
}
//#23
for (i = 1; i <= 20; i++) {
    wide = sampleArray[i];
    var newElement = document.createElement("div");
    newElement.className = "StepTwentThree";
    newElement.style.width = (wide + "px");
    if (wide % 2 == 0) {
        newElement.style.backgroundColor = ("red");
    }
    var newText = document.createTextNode("box");
    newElement.appendChild(newText);
    var destination = document.getElementById("div23");
    destination.appendChild(newElement);
}