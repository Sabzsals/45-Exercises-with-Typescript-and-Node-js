//Creating a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I LOve Typescript"; }
    console.log("Creating a ".concat(size, " size shirt with a ").concat(printMessage, " print on it"));
}
//calling a function with by default values 
make_shirt();
//Calling afunction with different size but same messsage
make_shirt("Medium");
//Calling a function with  different size and different message
make_shirt("Extra Large", "I Love Javascript");
