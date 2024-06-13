let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");

// Opgave 1
function fullName(firstName, lastName) {
  let greeting = "Welcome " + firstName + " " + lastName;
  let newH3 = document.createElement("h3");
  newH3.innerText = greeting;
  L1_1.appendChild(newH3);
}

// Function Calls
fullName("Ukendt", "Person");

// Opgave 2
function toggleVisibility(elementId, className) {
  var element = document.getElementById(elementId);
  if (element) {
      element.classList.toggle(className);
  }
}
//Kalder funktion
toggleVisibility('myElement', 'hidden');

//Opgave 3
function toggleColorAndMessage(elementId, colorClass, message) {
  var element = document.getElementById(elementId);
  element.classList.toggle('colored')
  if (element.classList.contains('colored')) {
     
          alert(message);
      }  {
          alert('Farven er fjernet');
      
  }
}

// Kalder function
document.getElementById('toggleButton').addEventListener('click', function() {
  toggleColorAndMessage('myElement1', 'colored', 'Farven er ændret!');
});

// Opgave 4 
//Click counter
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number (localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Button has been clicked  " + localStorage.clickcount + "time(s).";
  } else {
      document.getElementById("result").innerHTML  = "Sorry your search engine does not support web storage.";
     }
  }

  // Opgave 5
  // Word lengt counter
  let text = "I love cheese!";
  let lenght = text.length;
  document.getElementById("word").innerHTML = lenght + " is " + text;

  // Opgave 6
 // Function to remove vokals 
 function removeVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  // Filterer ud alle vokaler
  let cleanedWord = word.split('').filter(char => !vowels.includes(char)).join('');
  
  return cleanedWord;
}

let word = "Eksempel";
let cleanedWord = removeVowels(word);

// For at vise i DOMen
document.getElementById('output').textContent = cleanedWord;

//Lektion 2: Opgave 1
// Lav en funktion der kan tjekke om en værdi (argumentet) er en string eller et tal og vise det i DOM´en.
//    Det skal gerne ende ud i at der eks. står: 123 er af typen: number, i DOM´en.
function værdiType(argument) {
  let myType = typeof argument 
  document.getElementById('string').innerText = argument + ' Argument er af en type ' + myType

}

værdiType(5);

//Lektion 2: Opgave 2 
function emailChecker(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    document.getElementById('emails').innerText = 'This email works!'
  }
  else {
     document.getElementById('emails').innerText = 'Does not work' 
  }
};

emailChecker('test2@gmail.com')