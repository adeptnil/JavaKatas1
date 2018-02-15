
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
// for(i = 0; i < sampleArray.length; i++) {
//     hit = sampleArray + " ";
//     // putInHtml(sampleArray[i] + ' ');
// }
// putInHtml(hit, 'div11');

// //#12
// document.write('<br>');
// for(i = 0; i < sampleArray.length; i++) {
//     if ((i % 2) === 0)
//     document.write(sampleArray[i] + ' ');
// }
// //#13
// document.write('<br>');
// //#14

// //#15
var deeDuh = "";
for(i = 1; i < 21; i++) {
    deeDuh = deeDuh + i + " ";
 }
 putInHtml(deeDuh, 'div15');
// //#16
// document.write('<br>');
// for(var i = 0; i < sampleArray.length; i++){
//     total = (total + sampleArray[i])
//     document.write(total);
// }
//#17
// var fud = Math.min(sampleArray.every);
// putInHtml(fud, 'div17');

// //#18
// var duf = Math.max(sampleArray.every);
// putInHtml(duf, 'div18');

//#19

//#20