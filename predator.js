"use strict"; 

// note that the variable carnivores is private - this is where the json will be called 
// Predator must load before the augment knows what it is
let Predator = (function () {
  let carnivores = [];
  let herbivores = []; 

// the loadCarnivores is a different request to OPEN and SEND; after send we call that the same way we do functions with ()
  return {
    loadCarnivores: function (CB) {
      let loader = new XMLHttpRequest(); 
      loader.open("GET", "carnivores.json");
      loader.send(); 
      loader.addEventListener("load", function () {
        // Set the value of the private array
        // this parse command is turning the JSON into js
      carnivores = JSON.parse(this.responseText).carnivores;
      CB(carnivores); 
      });
    },
     loadHerbivores: function (CB) {
      let loader = new XMLHttpRequest(); 
      loader.open("GET", "herbivores.json");
      loader.send(); 
      loader.addEventListener("load", function () {
        // Set the value of the private array
        // this parse command is turning the JSON into js
      herbivores = JSON.parse(this.responseText).herbivores;
      CB(herbivores); 
  });
  }
  } 
})();

// list carnivores in the DOM


