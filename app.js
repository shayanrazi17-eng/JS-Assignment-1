// Chapter 1

//1) alert("Welcome");
//2) alert("Error! Please enter a vaild password");
//3) alert(" Welcome to JS Land... \n Happy !");

// -------------------------------------------------------

// Chapter 2
//1) var userName = "Akshay";
// document.writeln(userName);

//2) var message = "Hello World";
// alert(message)


//3) var name = " Akshay \n";
// var age = " " + 15 + "\n";
// var bloodGroup = " B+ ";
// var khuBhaiKaiseHo = name + age + bloodGroup;
// alert(khuBhaiKaiseHo)


//4) var one = "Pizza \n";
// var two = "Pizz \n";
// var three = "Piz \n";
// var four = "Pi \n";
// var five = "P";
// var all = one + two + three + four + five;
// alert(all)


//5) var email = "My Email is" + " " + "mhaskahy17@gmail.com";
// alert(email)


//6) var book = "A smarter way to learn JavaScript";
// alert(book)

//7) document.writeln("Yah! I can write HTML content through JavaScript")


//8) var falak = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(falak);
// document.writeln(falak);

// -------------------------------------------------------

// Chapter 3


//1) var age = "I am 15 Years old";
// alert(age);


//2) var track = "You have visited this site 2 times";
// document.writeln(track);

//3) var birthYear = "2006";
// document.writeln(birthYear);


//4) var store = "a. Visitor’s name <br>" + "b. Product title <br>" + "c. Quantity i.e. how many products a visitor wants to order <br>"
// ;
// document.writeln(store);


// var ill = ("<b> John Doe </b> ordered <b> 5 T-shirt </b>(s) on XYZ Clothing store");
// document.writeln(ill);


// -------------------------------------------------------

// Chapter 4

//1) var hi = 1;
// var jp = 2;
// var jz = 3;
// var all = hi + jp + jz;


//2) legal,
// i) name
// ii) userName
// iii) $user
// iv) _job
// v) nationality

// Illegal,
// i) 1stName 
// ii) User
// iii) var 
// iv) if 
// v) username


// -------------------------------------------------------

// Chapter 5


//1) var num1 = 2;
// var num2 = 1;


// var sum = num1 + num2;
// var difference = num1 - num2;
// var Product = num1 * num2;
// var divsion = num1 / num2;
// var modulus = num1 % num2;


// document.writeln(
//     `
//     The Sum of ${num1} and ${num2} = ${sum} <br>
//     The difference of ${num1} and ${num2} = ${difference} <br>
//     The Product of ${num1} and ${num2} = ${Product} <br>
//     The divsion of ${num1} and ${num2} = ${divsion} <br>
//     The modulus of ${num1} and ${num2} = ${modulus}
//     `
// )


//3) var one = "Value after variable declaration is undefined <br>" ;
// document.writeln(one);

// var num = 5;
// var two = `Value after variable declaration is: ${num} <br> `;
// document.writeln(two);

// var three = `Value after increment is: ${++num} <br> `;
// document.writeln(three);

// num = num + 7;
// var four = `Value after addition is: ${num} <br> `;
// document.writeln(four);

// var five = `Value after decrement is: ${--num} <br> `;
// document.writeln(five);

// var Six = `The remainder is: ${num / 3} <br> `;
// document.writeln(Six);


//4) var costOfOneTicket = 600;
// document.writeln(
//     `
//     The cost to buy 5 tickets = ${costOfOneTicket * 5}
//     `
// )



//5) var num = 4;
// document.writeln(
//     `
//     Table of ${num} <br>
//     ${num} x 1 = ${num * 1} <br>
//     ${num} x 2 = ${num * 2} <br>
//     ${num} x 3 = ${num * 3} <br>
//     ${num} x 4 = ${num * 4} <br>
//     ${num} x 5 = ${num * 5} <br>
//     ${num} x 6 = ${num * 6} <br>
//     ${num} x 7 = ${num * 7} <br>
//     ${num} x 8 = ${num * 8} <br>
//     ${num} x 9 = ${num * 9} <br>
//     ${num} x 10 = ${num * 10} <br>
//     ${num} x 11 = ${num * 11} <br>
//     ${num} x 12 = ${num * 12} 
//     `
// )



//6) var celsius1 = 25;
// var fehrenheit1 = (celsius1 * 9 / 5) + 32;

// document.writeln(
// `
// ${celsius1}°C is ${fehrenheit1}°F <br>
// `
// )


// var fehrenheit2 = 70 ;
// var celsius2 = (fehrenheit2 - 32) * 5 / 9 ;
// document.writeln(
// `
// ${fehrenheit2}°F is ${celsius2}°C
// `

// )


//7) var one = "Price of item is 50";
// var two = "Price of item 2 is 100";
// var oneQuantity = "Ordered quantity of item 1 is 4";
// var twoQuantity = "Ordered quantity of item 2 is 10";
// var char = "Shipping charges 100";
// var total = "Total cost is 1300"

// document.writeln(
//   ` 
//    ${one} <br>
//    ${two} <br>
//    ${oneQuantity} <br>
//    ${twoQuantity} <br>
//    ${char} <br>
//    ${total} <br>

//   `
// )


//8) var one = 980;
// var two = 804;
// document.writeln(
// `
// Total Marks = ${980} <br>
// Marks Obtained = ${two} <br>
// Percentage = ${two / one * 100}%

// `

// )


//9) var usdToPkr = 10 * 104.80;
// var sarToPkr = 25 * 28;
// var sum = usdToPkr + sarToPkr;

// document.writeln(
// `
// Total currency in PKR = ${sum}
// `

// )


//10) var nice = (5 * 10) / 2;


//11) var currentYear = 2025;
// var yearBorn = 2006;
// var age = currentYear - yearBorn;
// document.writeln(
// `
// Your age is : ${age}
// `

// )



//12) var radius = 20;
// var circumference = 2 * 3.14 * radius;
// var area = 3.14 * (radius * radius);
// document.writeln(
// `
// Radius of a circle: ${radius} <br>
// The circumferece is: ${circumference} <br>
// The area is: ${area}
// `

// )


//13) var favouriteSnack = "Chocolate chip";
// var currentAge = 15;
// var maximumAge = 65;
// var estimatedTotalAge = maximumAge - currentAge;
// var snackPerDay = 3;
// var totalSnackNeeded = ((snackPerDay * 30) * 12 ) * estimatedTotalAge;

// document.writeln(
// `
// Favorite snack: ${favouriteSnack} <br>
// Current age: ${currentAge} <br>
// Maximum age: ${maximumAge} <br>
// Estimated Total age: ${estimatedTotalAge} <br>
// Snack per day: ${snackPerDay} <br>
// You will need ${totalSnackNeeded} ${favouriteSnack} to last you until the ripe old age of ${maximumAge}.
// `

// )



// -------------------------------------------------------

// Chapter 6-9


//1) var a = 10;

// document.writeln(
// `
// Result: <br>
// The of a is: ${a} <br> <br>

// -------------------------------------------- <br> <br>

// The value of ++a is: ${++a} <br>
// Now the value of a is: ${a} <br> <br>

// The value of a++ is: ${a++} <br>
// Now the value of a is: ${a} <br> <br>

// The value of --a is: ${--a} <br>
// Now the value of a is: ${a} <br> <br>

// The value of a-- is: ${a--} <br>
// Now the value of a is: ${a} 

// `

// )


//2) var a = 2;
// var b = 1; 
// var result = --a - --b + ++b + b--;

// /*
// Output at each stage,
// --a; // Pre decrement of a

// --a - --b; // Pre decrement of a - pre decrement of b 

// --a - --b + ++b; // Pre decrement of a - pre decrement of b + pre increment of b

// --a - --b + ++b + b-- // Pre decrement of a - pre decrement of b + pre increment of b + post decrement of b
// */


// document.writeln(
// `
// a is: ${a} <br>
// b is: ${b} <br>
// Result: ${result}

// `

// )

//3 var user = prompt("Enter Name");
// user = `Welcome User`;
// document.writeln(user)




//5) var num = +prompt("Enter number", 5);
// document.writeln(
//     `
//     <ul>
// <li> ${num} x 1 = ${num * 1} </li>
// <li> ${num} x 2 = ${num * 2} </li>
// <li> ${num} x 3 = ${num * 3} </li>
// <li> ${num} x 4 = ${num * 4} </li>
// <li> ${num} x 5 = ${num * 5} </li>
// <li> ${num} x 6 = ${num * 6} </li>
// <li> ${num} x 7 = ${num * 7} </li>
// <li> ${num} x 8 = ${num * 8} </li>
// <li> ${num} x 9 = ${num * 9} </li>
// <li> ${num} x 10 = ${num * 10} </li>
// <li> ${num} x 11 = ${num * 11} </li>
// <li> ${num} x 12 = ${num * 12} </li>
//     </ul>
//     `
// )




//6) var marksInEng = +prompt("Marks Obtained in English");
// var marksInMaths = +prompt("Marks Obtained in Maths");
// var marksInUrdu = +prompt("Marks Obtained in Urdu");

// var totalMarks = 100;
// var percentageOfEng = (marksInEng / totalMarks) * 100;
// var percentageOfMaths = (marksInMaths / totalMarks) * 100;
// var percentageOfUrdu = (marksInUrdu / totalMarks) * 100;

// var averagePercentage = (percentageOfEng + percentageOfMaths + percentageOfUrdu) / 3;
// var totalObtainedMarks = marksInEng + marksInMaths + marksInUrdu;
// var subTotalMarks = totalMarks * 3;

// document.writeln(
// `
// <table border='2px' width='60%' height='200px' align='center'>
// <tr> 
// <th> Subject </th>
// <th> Total Marks </th>
// <th> Marks Obtained </th>
// <th> Percentage </th>
// </tr>

// <tr> 
// <td> English </td>
// <td> ${totalMarks} </td>
// <td> ${marksInEng} </td>
// <td> ${percentageOfEng.toFixed(3)}% </td>
// </tr>

// <tr> 
// <td> Maths </td>
// <td> ${totalMarks} </td>
// <td> ${marksInMaths} </td>
// <td> ${percentageOfMaths.toFixed(3)}% </td>
// </tr>

// <tr> 
// <td> Urdu </td>
// <td> ${totalMarks} </td>
// <td> ${marksInUrdu} </td>
// <td> ${percentageOfUrdu.toFixed(3)}% </td>
// </tr>


// <tr> 
// <th> </th>
// <th> ${subTotalMarks} </th>
// <th> ${totalObtainedMarks} </th>
// <th> ${averagePercentage.toFixed(3)}% </th>
// </tr>

// </table>


// `

// )


















