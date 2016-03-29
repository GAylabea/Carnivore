  "use strict"
// This is a function that is CB in the predator.js file
let list = document.getElementById("carnivores-list");
let list2 = document.getElementById("herbivores-list"); 

function showCarnivores (carnivores) {
   for (let i = 0; i < carnivores.length; i++) {
          let currentCarnivores = carnivores[i]; 
          // build the output: 
          let outputString = "";
          outputString += `<h1>${currentCarnivores.name}</h1><h5>${currentCarnivores.family}</h5>`; 
          list.innerHTML += outputString; 
  }
}

function showHerbivores (herbivores) {
for (let i = 0; i < herbivores.length; i++) {
          let currentHerbivores = herbivores[i]; 
          // build the output: 
          let outputString = "";
          outputString += `<h1>${currentHerbivores.name}</h1><h5>${currentHerbivores.family}</h5>`; 
          list2.innerHTML += outputString; 
}
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores); 
