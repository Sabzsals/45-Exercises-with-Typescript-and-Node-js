var guestlist = ["Saba", "Areeba", "Mahreen", "Sania"];
var dontcome = guestlist[0];
console.log(dontcome, "nahi aa skti");
guestlist.splice(0, 1, "Zubi");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to have dinner with me?")); });
