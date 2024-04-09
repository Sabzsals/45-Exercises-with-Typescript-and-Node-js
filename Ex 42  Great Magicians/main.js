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
//Calling the function to modify magician names
var great_magicians = create_great(show_magician);
show_magicians(great_magicians);
