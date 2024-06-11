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

// Opgave 2
function toggleVisibility(elementId, className) {
  var element = document.getElementById(elementId);
  if (element) {
      element.classList.toggle(className);
  }
}
//Opgave 3
function toggleColor(elementId, className) {
  var element = document.getElementById(elementId)
  if (element) {
    element.classList.toggle(className);
}
}
//Call the function
colorChange('colorChange', 'color');

//Kalder funktion
toggleVisibility('myElement', 'hidden');

// Function Calls
fullName("Ukendt", "Person");
