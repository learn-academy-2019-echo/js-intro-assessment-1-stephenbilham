// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

var mantra = "be the dev"
console.log(mantra.includes("B"))


// 1b. Write the code that determines if there is an 'x' in mantra.

var mantra = "be the dev"
console.log(mantra.includes("x"))


// 1c. Write the code that determines if there is a 'v' in mantra.

var mantra = "be the dev"
console.log(mantra.includes("v"))


// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

var sentence = "hey dude, how you doing."

function findLetter(string, letter){
  if (string.includes(letter)) {
    return "the letter exists within the string."
  } else {
    return " the letter does not exists within the string."
  }
}
console.log(findLetter(sentence, "b"))
console.log(findLetter(sentence, "d"))

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

var myDog = "Snoopy"
var myCat = "Garfield"

longer = (str1, str2) => {
  if(str1.length > str2.length) {
    return str1
  } else {
    return str2
  }
}
console.log(longer(myDog, myCat))



// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

var myDog = "Snoopy"
var myCat = "Garfield"

returnArray = (str1, str2) => {
  let strArr = []
  strArr.push(str1,str2)
  return strArr
}
console.log(returnArray(myDog,myCat))


// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"

var myDog = "Snoopy"
var myCat = "Garfield"

originalStr = (str1, str2) => {
  const newStr = str1.concat(" " + str2)
  return newStr.toLowerCase()
}
console.log(originalStr(myDog, myCat))


// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.

for(let i = 0; i < myMessage.length; i++) {
  console.log(myMessage.charAt(i))


// 3b. Write the code that logs each letter of the message using map.

    var myMessage = "Learning is fun!".split("")
    .map(letters => console.log(letters))

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

var myMessage = "Learning is fun!"
var i = 0;

while (i < myMessage.length) {
  console.log(myMessage[i])
  i++
}

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

didnt get to it (couldnt figure out the first time around)


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

var testString = "thisisateststring"

var noVowels = function(string) {
  var vowels = ['a','e','i','o', 'u'];
  var newStr = "";
  for (var i=0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      newStr += string[i]
    }
  }
  return newStr
}
console.log(noVowels(testString))

OR

noVowels = (str) => {
  return str.replace(/[a,e,i,o,u]/ig, "")
}
console.log(noVowels(testString))


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

didnt figure out. 



// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonanimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]


returnCats = () => {
  return toonanimals.filter(value => value.animal === "cat")
}
console.log(returnCats(toonanimals))

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

var toonAnimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

returnNoCats = (array) => {
  var results = []
  var list = array.filter(value => value.animal !== "cat")
  list.forEach(printNotCats => results.push(printNotCats.name))
  return results
}
console.log(returnNoCats(toonAnimals))



//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

DIDNT HAVE TIME