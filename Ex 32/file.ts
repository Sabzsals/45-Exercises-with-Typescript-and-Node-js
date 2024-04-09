//Array of Current_Users
let current_users = ["Saima" , "Nasreen" , "Batool" , "Sana" , "Asma"]

//Array of new_Users
let new_users = ["Samra" , "Asma" ,"Saba" , "Tunjeena" , "Batool" ,]

//Loop through the new users list
new_users.forEach(new_one_user => {
    let our_condition = current_users.some{current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()}
    
    //Printing a message using if and else conditions
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
 } else {
    console.log(`This username ${new_one_user} is available.`)
 }
})