//Creating a function
function make_shirt (size: string = "Large" , printMessage: string = "I LOve Typescript"){
    console.log(`Creating a ${size} size shirt with a ${printMessage} print on it`)
}
//calling a function with by default values 
make_shirt();

//Calling afunction with different size but same messsage
make_shirt("Medium");

//Calling a function with  different size and different message
make_shirt("Extra Large" , "I Love Javascript")