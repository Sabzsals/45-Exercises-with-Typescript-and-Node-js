//Creating the Array
var pizza = ["chicken Tikka", "Chicken Fajita", "Beef Mince"];
//Using for-loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
}
//Print a message outside of the loop
console.log("I love to eat pizza");
console.log("Pizza is love");
