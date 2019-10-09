var movieArray = ["ThePrestige", "TheMatrix", "Gladiator"];
console.log(movieArray[0]); // "The Prestige" "The Matrix" "Gladiator"
console.log(movieArray[1]);
console.log(movieArray[2]);

var weather1 ={
    temperature: 80,
    conditions: "rain",
    sunriseTime: "6:30 AM",
    sunsetTime: "7:45 PM",
    highTemperatures: [82,85,91,80,94,87],
    lowTemperatures: [60,65,67,52,66,63],


}

var nicholasObject = {
    firstName: "Nicholas",
    lastName: "Ashe",
    age:26,
    hobbies: ["gaming", "watching movies","movies"],
    likesToTravel: true }

console.log(nicholasObject.firstName); // "Nicholas"
console.log(nicholasObject.age); // 26  
console.log(nicholasObject.likesToTravel) // "travel"
console.log(nicholasObject.hobbies[0]) // "gaming"
console.log(nicholasObject.hobbies[1]) // "watching movies"
console.log(nicholasObject.hobbies[2]) // "movies"
console.log(`the sun rise today is at ${weather1.sunriseTime} and the sunset time is at ${weather1.sunsetTime}`)
console.log (`the high tempture this week is ${weather1.highTemperatures[4]}`)
console.log (`the low temperature this week is ${weather1.lowTemperatures[3]}`)



var i = 1;

while(i < 100){
  console.log("Tweet Tweet");
  i++;
}

var FavoriteFoodsArray =["Chinese","Pizza", "Ramen","Seafood","Donuts",];

var i = 0;

for(var i = 0; i < FavoriteFoodsArray.length; i++){
    console.log(FavoriteFoodsArray[i]);
    i++
}



var interestsArray = ["One of my interests is Movies", "One of my interests is Gaming", "One of my interests is Traveling", "One of my interests is Studying", "One of my interests is Cooking"];

var i = 0; 

while(i < interestsArray.length){
    console.log(interestsArray[i]);
    i++;
}   





var cohortOneStudentsArray = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

var i = 0; 

while(i < cohortOneStudentsArray.length){
    console.log(cohortOneStudentsArray[i]);
    i++;
}


var interestsArray = ["One of my interests is Movies", "My absolute favorite interest is Gaming", "One of my interests is Traveling", "One of my interests is Studying", "One of my interests is Cooking"];

var i = 0; 

while(i < interestsArray.length){
    console.log(interestsArray[i]);
    i++;
}   

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

for (i = 0; i < grades.length; i++) {

    if (grades[i] >= 70 && grades[i] <= 76) {
        console.log(grades[i], "You got a D")
    }
    if (grades[i] >= 77 && grades[i] <= 84) {
        console.log(grades[i], "You got a C")
    }
    if (grades[i] >= 85 && grades[i] <= 92) {
        console.log(grades[i], "You got a B")
    }
    if (grades[i] >= 93 && grades[i] <= 100) {
        console.log(grades[i], "You got an A")
    }

    }




function makeAPizza(crustType, size, toppingsArray){
    var finishedPizza = `A ${size} pizza with ${crustType} crust and ${toppingsArray.join(", ")} on top.`
    return finishedPizza;
  }

  var myPizza = makeAPizza("wheat", "large", ["green peppers", "onions", "pepperoni"]);
  
  var yourPizza = makeAPizza("white", "medium", ["anchovies", "feta", "pineapple"]);

  console.log(myPizza); 
  // Expected output: "A large pizza with wheat crust and green peppers, onions, pepperoni on top."
  
  console.log(yourPizza);
  // Expected output: "A medium pizza with white crust and green anchovies, feta, pineapple on 

  var classPizza = makeAPizza("thin", "xxxxl" , ["pep", "pineapples", "bannana peppers"]);
  
  console.log(classPizza);

