//defining a function with the rest parameter that accept items argument representing our sandwich

function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich\n")
}

//Calling the function 3 times with 3 different number of arguments

makeSandwich("Cheese", "Chicken", "Ketchup");

makeSandwich("Cucumber" , "Butter");

makeSandwich("Chicken" , "Mayo" , "Egg" , "Tomato");