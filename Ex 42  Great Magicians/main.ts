//Defining a function to show magicians name 
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}

//function to modify the Array
function create_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}
//Creating the Array to show magicians name
let show_magician = ["Harry Poter" , "George" , "Simon"];

//Calling the function to modify magician names
let great_magicians = create_great(show_magician);


show_magicians(great_magicians);