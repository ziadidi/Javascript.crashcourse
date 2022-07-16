/* STRING */

/*console. log("Hello World"[10])
console. log("tiamota ntissimo".length)
let str = "diane" 
 console.log(str[str.length - 1])  this is the same 
 let str = "diane"
 console.log(str[5 - 1]) */

/*let fullName = "Diane Pucci"
 let isRaining = true
 let temperature = 20
 let planet = "Earth"
 temperature = temperature + 30
 console.log(temperature)*/

/*const isRaining = true
 const temperature = 20
 const let planet = "Earth"
 temperature = temperature + 30
 console.log(temperature) same as let but not reusable variable*/

/* CONVERTING TEMPERATURE 
 let celsius = 10;
 let fahrenheit = celsius * 1.8 + 32
 console.log(fahrenheit);*/

/* Equality
  "==" & "==="
  == only checks left and right side and returns true if they match (rarerly used)
  === compares values and type (better)

let bool = "1" === 1;
console.log(bool); "1" (string) 1 (number)*/

/*let bool = "1" !== 1 (this is the opposite of ===);
console.log(bool);

let bool = "1" != 1;
console.log(bool); ! tells you the opposite of a normal value*/

/* CONDITIONALS 

let loggedIn = true;
let subscribed = false;
 the order it's important 
if (subscribed === true) {  if thei are subscribed show the video 
    console.log("show the video");
}

else if (loggedIn === true) { if thei are logged in tell them to upgrade 
    console.log("tell the user to upgrade their subscription")
}

else {  if not sub. or log. tell them to do an account 
    console.log("tell user to log into account")
}
"if" can be used without "else" but "else" needs "if"*/

/*let cash = 30;
let price = 40;

 short way
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} dollars change`)
}

 else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
 }

 else {
    console.log(`not enough money - you still owe ${difference * -1} dollars`)
 } */

/* longer way 
if (cash > price) {
    console.log(`you paid extra - here's ${cash - price} dollars change`)
}

 else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
 }

 else {
    console.log(`not enough money - you still owe ${ price - cash } dollars`)
 }*/

/* LOGICAL OPERATORS
 && checks if the left and right side of the comparison is true
 True   &&   True --> True
True   &&   False --> False
False  &&    True --> False
False  &&    False --> False */

/*let cash = 50;
let price = 40;
let isStoreOpen = true;

 if (cash >= price (|| or &&) isStoreOpen === true) {
    console.log("print the receipt")
} || only one true, && both needs to be true 

same as 
let cash = 50;
let price = 40;
let isStoreOpen = false;

 if (cash >= price (|| or &&) !isStoreOpen) {
    console.log("print the receipt")
  } */

//    && formatting best practice

//    if (cash >= price && isStoreOpen === false) ---> same as doing below but "worse"

//    if (cash >= price && !isStoreOpen) ------------> best practice

//    AND

//   if (cash >= price && isStoreOpen === true) --> bad prectice, do below

//   if (cash >= price && isStoreOpen) -----------> best practice

//Falsy Values,  is considered as false when converted to a boolean most of these are:
/*
  -undefined
  -null
  -NaN
  - 0
  -"" 
 -false
 */

// TRUTHY VALUES (is considered as true when converted to a boolean)
/*10
 * 3.14
 * diancinios simplified
 * false
 * 0
 * []
 * {}
 */

/*let val = "Ancinio";

if (val) {
  console.log(!!val);
} else {
  console.log(!!val);
}*/

/* for the if statement to run it just needs to be a truthy value, 
   and for the else to run the statement (if ("") ) needs to be a falsy value
   no need to memorise this, just use !!0 to know if its a truthy or falsy 
*/

/* TERNARY OPERATORS
   a shortcut for an  if else condition 
   isObese ? 'unhealthy' : 'healthy'

   ex:
let hot = false

hot ? console.log("weather is hot outside") : console.log("weather is cold")
 */

//turnary operators (used for une line of code)
/*let subscribed = true
let loggedIn = true

let str = subscribed && loggedIn ? "show the video" : "hide the video"
console.log(str);
*/

//prova

/*let cash = 50;
let price = 40;
let isStoreOpen = true;

let str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt"
console.log(str)*/
// or
/*let cash = 50;
let price = 40;
let isStoreOpen = true;

cash >= price && isStoreOpen ? console.log("give receipt") : console.log("do not give receipt")*/

// LOOPS

//DRY (dont repeat your self)

//while loop
/*let count = 1;

while (count <= 100) {
   console.log(count)
   count = count + 1;
}*/

//for loop

/*for (let i = 0; i < 3; i = i + 1) {
console.log(i)
}*/
//same
/*for (let i = 0; i < 100; i ++) {
console.log(i + 1)
}*/
// or
/*for (let i = 1; i <= 100; i ++) {
   console.log(i)
   }*/

//TEST
/*for (let i = 1; i <= 100; i++) {

   if (i % 3 === 0 && i % 5 === 0) {
   console.log(`${i} -> Frontend Simplified`)
  }
  else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`);
  }
  else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  }
  else {
   console.log(`${i} -> ${i}`)
  }
  
}*/

/*for (let i = 1; i <=20; ++i) {

   if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} -> Frontend Simplified`)
   }

   else if (i % 3 === 0) {
      console.log(`${i} -> Frontend`)
   }

   else if (i % 5 === 0) {
      console.log(`${i} -> Simplified`)
   }

   else if (i % 2 === 0) {
      console.log(`${i} -> yaaaaaaas `)
   }

   else {
      console.log(`${i} -> ${i}`)
   }
}*/

/*for (let i = 1; i <= 250; ++i) {
    if (i % 7 === 0 && i % 4 === 0) {
      console.log(`${i} -> scoregge`)
    }

    else if (i % 4 === 0) {
      console.log(`${i} -> caghetto`)
    }

    else if (i % 7 === 0) {
      console.log(`${i} -> mestruo`)
    }

    else {
      console.log(`${i} -> ${i}`)
    }
}*/

// quiz (print out every character from the string)
//`const` is better practice in this case bur let is fine
/*let str = "Frontend Simplifid"
   for (let i = 0; i < str.length; i++) {
     console.log(str[i]);
   }*/

// FUNCTIONS
/*(it is a block of code designed to perform a particular task)

   //Function definition
   function welcomePersonToFES (name) {
      console.log(`Welcome to FES, ${name}`)
   }

   //Call the Function
   welcomePersonToFES (`Anto`);                    
   welcomePersonToFES (`Diane`);

   function welcomePersonToFES(firstName, lastName) {
      console.log(`Welcome to FES, ${firstName} ${lastName}`)
   }

   welcomePersonToFES (`Anto`, `Pucci`);
   welcomePersonToFES (`Diane`, `Spada`);

   function fn() {
      return 5
     console.log('my function')
   }

   console.log(fn());
   

   function sumOfTwoNumbers(num1, num2) { //parameter
      return num1 + num2 /* +, *, -, / 
   }

   console.log(sumOfTwoNumbers(10, 10)); //argument 
   */

/* create a function that converts Celsius to Fahrenheit 
   formula:
   F = C x 1.8 + 32
   */
/*function celsiusFahrenheit(cel) {
   return cel * 1.8 + 32
  }

  console.log(celsiusFahrenheit(0));
  console.log(celsiusFahrenheit(10));
  console.log(celsiusFahrenheit(30));  

  // or
  const celsiusFahrenheit = (cel) => {
   return cel * 1.8 + 32
  }

  console.log(celsiusFahrenheit(0))
  */

// ARRAYS
/*let item1 = 20
  let item2 = 30
  let item3 = 40
  let item4 = 50
  let item5 = 100
 
  same as above */
/* 
 let arr = [20, 30, 40, 50, 100  you can put a string, boolean,... ]
  
  // first element of array:
  console.log(arr[0])

  // last element of array:
  console.log(arr[arr.length - 1])

  // add an element with the .push method at the end
  arr.push(200)

  console.log(arr);*/

// js executes line by line

/*let arr = [20, 30, 40, 50, 100]

// call back function syntax
  let newArr = arr.filter((element) => {
   console.log(element)
   if (element < 50) {
      return true;
   }
  })

  console.log(newArr)


  // short way
  let arr = [20, 30, 40, 50, 100]

  let newArr = arr.filter(element => element < 50) 

  console.log(newArr)
//if we have only have 1 variable we can erase ()
*/

// Filter out all the 'FAIL' elements in an array

/*let grades = ['A+', 'A', 'FAIL']
let goodGrades = grades.filter((element) => {
  console.log(element)
  if (element !== 'FAIL') {
   return true;
  }
})

console.log(goodGrades)

//short way

let grades = ['A+', 'A', 'FAIL']

let goodGrades = grades.filter(element => element !== 'FAIL')

console.log(goodGrades)

// dont use the array.filter
let grades = ['A+', 'A', 'FAIL']

let goodGrades = []

for (let i = 0; i < grades.length; ++i) {
   if (grades [i] !== 'FAIL') {
     goodGrades.push(grades[i]);
   }
}
console.log(goodGrades);
*/

// new array method (.map) it loops over every element and turn them into return

/*let arr = [1, 4, 9, 16]
//long way
let newArr = arr.map((element) => {
console.log(element)
return undefined;
})

console.log(newArr)
*/
//short way
/*let arr = [1, 4, 9, 16]

let newArr = arr.map(element => 'dog')

console.log(newArr)


// practice

//long way
let dollars = [1, 5, 10, 3];

let cents = dollars.map(element => {
   return * 100;
})

console.log(cents)

// short way
let dollars = [0, 10, 20];

let cents = dollars.map(element => element * 100)

console.log(cents)


// now without the .map method

let dollars = [1, 5, 10, 3];

let cents = [];

for (let i = 0; i < dollars.length; ++i) {
   cents.push(dollars[i] * 100);
}
console.log(cents);
*/

//OBJECTS (used to store multiple propeties in one  variable)

/* dont do this
let userFirstName = 'Antonio'
let userLastName = 'Pucci'
let userDiscordId = 'Antonio Pucci#1608'
let userSubscriptionStatus = 'VIP'
*/

// do this
let users = [
  {
    username: "Anto",
    email: "dianepucci18@tuasorella.it",
    password: 'cacacucu',
    subscriptionStatus: "Rubato",
    discordId: "anche no#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Diane",
    email: "antocanto13@tuasorella.it",
    password: 'cucucaca',
    subscriptionStatus: "mio",
    discordId: "anche mai#0001",
    lessonsCompleted: [0, 1, 2, 5],
  },
  {
    username: "zioPippo",
    email: " doccia@tuasorella.it",
    password: 'grattini',
    subscriptionStatus: "colpipo",
    discordId: "crocchette#0001",
    lessonsCompleted: 'tutte',
  },
];

function login(email, password) {
   for (let i = 0; i < users.length; ++i) {
      console.log(users[i]);
   }
}

login('dianepucci18@tuasorella.it', 'cacacucu');
//console.log(users[0].lessonsCompleted.map(elem => elem * 2));
//console.log(users[0]