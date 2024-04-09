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

//Making the copy of original Array
let copy_magician_names = show_magician.slice()

//Modify the copied Array to include `the Great` with their names
let copy_great_magicians = create_great(copy_magician_names);

//Showing both arrays original or copied

//Original
console.log("Original Array\n")
show_magicians(show_magician);

//Copied
console.log("Copied Array\n")
show_magicians(copy_great_magicians);
