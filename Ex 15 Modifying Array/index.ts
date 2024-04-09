let guestlist = ["Saba" , "Areeba" , "Mahreen" , "Sania"];

let dontcome = guestlist[0];

console.log(dontcome, "nahi aa skti");

guestlist.splice(0, 1, "Zubi");

guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to have dinner with me?`));