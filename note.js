//                  (CHAPTER 6 TO 9 : "MATH EXPRESSION")
//                         Question # 1:
// document.write("Results:" + "<br/>")
// var a = 10;
// var preIncr = ++a;
// var postIncr = a++;
// var preDicr = --a;
// var postDecr = a--;
// document.write("The value of a is " + " " + a + "<br/>" + "<br/>" + "The value of ++a is:" + " " + preIncr  + "<br/>"
//  + "Now the value of a is:" + " " + preIncr + "<br/>" + "<br/>" + "The value of a++ is:" + " " + postIncr + "<br/>" 
//  + "Now the value of a is:" + " " + a + "<br/>" + "<br/>" + "The value of --a is:" + " " + preDicr + "<br/>" 
//  + "Now the value of a is:" + " " + preDicr + "<br/>" + "<br/>" + "The value of a-- is:" + " " + postDecr + "<br/>"
//  + "Now the value of a is:" + " " + a)

//                         Question # 2:
// var a = 2;
// var b = 1;
// // var f = --a;
// // var s = --a - --b;
// // var m = --a - --b + ++b;
// var result = --a - --b + ++b + b--;
// document.write("a is " + " " + a +"<br/>" + "b is" + " :" + b + "<br/>" + "Result is" + " " + result);

//                         Question # 3:
// var userName = prompt("What is your name?");
// alert("Welcome" +  " " + userName)

//                          Question # 5:
// var num = prompt("Enter a number" , "5 ");
// var i = 1;
// for (i = 1; i <= 10; i++) {
   
//       document.write(num + " " + "x" + " " +  i + " " + "=" + " " + num*i + "<br/>");
// }

//                           Question # 6:
//  var sub1 = prompt("Enter subject 1" , "English");
//  var sub2 = prompt("Enter subject 2" , "Urdu");
//  var sub3 = prompt("Enter subject 3" , "Math");
//  var totalMarks = 100;
//  var obtMarkofSub1 = Number(prompt("Enter obtained marks of " + sub1));
//  var obtMarkofSub2 = Number(prompt("Enter obtained marks of " + sub2));
//  var obtMarkofSub3 = Number(prompt("Enter obtained marks of " + sub3));
//  var perOfSub1 = obtMarkofSub1/totalMarks*100;
// var perOfSub2 = obtMarkofSub2/totalMarks*100;
//  var perOfSub3 = obtMarkofSub3/totalMarks*100;
// var totMarkOfAllSub = totalMarks + totalMarks + totalMarks;
//  var obtMarkOfAllSub = obtMarkofSub1 + obtMarkofSub2 + obtMarkofSub3;
//  var perOfAllSub = obtMarkOfAllSub/totMarkOfAllSub*100;
//  document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + obtMarkofSub1 + "</td><td>" + perOfSub1 + "%" + "</td></tr><tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + obtMarkofSub2 + "</td><td>" + perOfSub2  + "%" + "</td></tr><tr><td>"  + sub3 + "</td><td> "+ totalMarks + "</td><td>" + obtMarkofSub3 + "</td><td>" + perOfSub3 + "%" + "</td></tr><tr><th></th><th>" + totMarkOfAllSub + "</th><th>" + obtMarkOfAllSub + "</th><th>" + perOfAllSub + "%" + "</th></tr></table>");


