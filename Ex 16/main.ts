//creating a guestlist Array
let guestlist = ["Saba" , "Areeba" , "Mahreen" , "Sania"];

//making variable for those guest who can`t come
let dontcome =guestlist[0];

//printing the name of guest who can`t come
console.log(dontcome, "dont come");

//add or remove values from Guest Array
guestlist.splice(0 , 1, "sabzsals");

//message print for bigger Table
console.log("GoodNews! we have arrange a bigger Table for a dinner");

//Adding a new value at starting index of Array
guestlist.unshift("Saleha");

//Adding a new value at ending index of Array
guestlist.push("Irum"); 

//Get a middle index of our guest list Array
let middleIndex: number = Math.floor(guestlist.length / 2);

//Adding a new guest to middle index of Array
guestlist.splice(middleIndex, 0, "Habiba");

//Printing Message of updated list
console.log("Updated List of our Guests ");

//Sending an invitation message to our guests one by one with thier names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to have dinner with me`));