// Creating the Array
var userNames = ["Samina", "Saba", "Siddiqua", "Admin", "Hiba"];
//Using forEach loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see status reports?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for Logging in again"));
    }
});
