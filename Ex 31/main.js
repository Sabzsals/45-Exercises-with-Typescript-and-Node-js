var userNames = ["Samina", "Saba", "Sania", "Admin", "Hiba"];
if (userNames.length === 0) {
    console.log("Your Array is empty we need to find some users!");
}
//Using for Each loop on array
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see status reports?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thankyou for Logging in again"));
        }
    });
}
