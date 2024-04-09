//defining a function with the rest parameter that accept items argument representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich\n");
}
//Calling the function 3 times with 3 different number of arguments
makeSandwich("Cheese", "Chicken", "Ketchup");
makeSandwich("Cucumber", "Butter");
makeSandwich("Chicken", "Mayo", "Egg", "Tomato");
