// Creating the Array
let userNames = ["Samina" , "Saba" , "Siddiqua" , "Admin" , "Hiba"]

//Using forEach loop on Array
userNames.forEach(oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see status reports?`)
    }else {
        console.log(`Hello ${oneUser}, thankyou for Logging in again`)
    }
})