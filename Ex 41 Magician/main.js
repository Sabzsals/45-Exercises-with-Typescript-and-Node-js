//Defining a function to print each magician names from a Array
function show_magicians(magician_names) {
    magician_names.forEach(function (name) { return console.log(name); });
}
//Defining a Array containing magicians name
var magician_names = ["Harry Poter", "George", "Simon"];
//Calling the function to print each magician name
show_magicians(magician_names);
