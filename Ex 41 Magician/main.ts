//Defining a function to print each magician names from a Array
function show_magicians(magician_names: string[]){
    magician_names.forEach(name => console.log(name));

}

//Defining a Array containing magicians name
let magician_names = ["Harry Poter" , "George" , "Simon"]

//Calling the function to print each magician name
show_magicians(magician_names);