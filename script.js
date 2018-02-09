const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
var total = 0;




//#1
for(var i = 1; i < 21; i++) {
	document.write(i + " ");
}
//#2
document.write('<br>');
for (var i = 1; i < 21; i++){
      if (i % 2 === 0) 
      document. write(i + ' ');
    }

//#3
document.write('<br>');
for (var i = 1; i < 21; i++){
      if (i % 2 !== 0) 
      document. write(i + ' ');
    }
//#4
// document.write('<br>');
// for (var i = 0; i < 100; i++){
//     if ((i * 5) !== 1) 
//     document. write(i + ' ');
//   }
//#5


//#6
document.write('<br>');
for(var i = 20; i > 0; i--) {
	document.write(i + " ");
}
//#7
document.write('<br>');
for(var i = 20; i > 0; i--) {
    if ((i % 2) === 0) 
	document.write(i + " ");
}
//#8
document.write('<br>');
for(var i = 20; i > 0; i--) {
    if ((i % 2) !== 0) 
	document.write(i + " ");
}
//#9

//#10


//#11
document.write('<br>');
for(i = 0; i < sampleArray.length; i++) {
    document.write(sampleArray[i] + ' ');
}
//#12
document.write('<br>');
for(i = 0; i < sampleArray.length; i++) {
    if ((i % 2) === 0)
    document.write(sampleArray[i] + ' ');
}
//#13
document.write('<br>');

//#16
document.write('<br>');
for(var i = 0; i < sampleArray.length; i++){
    total = (total + sampleArray[i])
    document.write(total);
}






// let alpha = [1];

// for (var i = 0; i < alpha.length; i++){
//     console.log(alpha[i]);
// }














       // var color_td;
        //document.write("<table border='1px'>");
        // let 
        // for(var i = 1; i < 21; i++) {
        //     document.write( i );
        // }
        // document.write("<br>");
        // // Line Break
        
        // document.write("<br>");
        // // Line Break
        // for(var i = 1; i < 21; i++) {
        //     if ()
        //     document.write( i );
        // }
        // document.write("<br>");


            //document.write("<tr style='height:30px;'>");
           // for(var j = 1; j < 11; j++) {
                // if(j == 1 || i == 1) {
                //     color_td = "#cbcdfb";
                // }
                // else {
                //     color_td = "#fff";
                // }
              //  document.write( i );

                // document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
           // }
           // document.write("</tr>");
       // }
        //document.write("</table>");


//     for (var i= 0; i < 21; i++){
//     document.write("<tr style='height:30px;'>")
//    // let kata = document.createElement("div")
//     console.log(i);
// }

     // for(i=1; i<=1; i++) {
    //     // Create a div, with class "bar", and set the width to 100px.
    //     var newElement = document.createElement("div");
    //     newElement.className = "bar";
    //     newElement.style.width = i*100 + "px";

    //     // Place a text label inside the new div.
    //     var newText = document.createTextNode(10);
    //     newElement.appendChild(newText);

    //     // Put the new div on the page inside the existing element "d1".
    //     var destination = document.getElementById("d1");
    //     destination.appendChild(newElement);
    //   }




    //   for(i=1; i<=1; i++) {
    //     // Create a div, with class "bar", and set the width to 100px.
    //     var newElement = document.createElement("div");
    //     newElement.className = "bar";
    //     newElement.style.width = i*200 + "px";

    //     // Place a text label inside the new div.
    //     var newText = document.createTextNode("Bar #" + i);
    //     newElement.appendChild(newText);

    //     // Put the new div on the page inside the existing element "d1".
    //     var destination = document.getElementById("d1");
    //     destination.appendChild(newElement);
    //   }



