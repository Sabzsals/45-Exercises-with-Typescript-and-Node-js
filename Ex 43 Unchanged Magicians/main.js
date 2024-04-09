//Defining a function to show magicians name 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to modify the Array
function create_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Creating the Array to show magicians name
var show_magician = ["Harry Poter", "George", "Simon"];
//Making the copy of original Array
var copy_magician_names = show_magician.slice();
//Modify the copied Array to include `the Great` with their names
var copy_great_magicians = create_great(copy_magician_names);
//Showing both arrays original or copied
//Original
console.log("Original Array\n");
show_magicians(show_magician);
//Copied
console.log("Copied Array\n");
show_magicians(copy_great_magicians);
