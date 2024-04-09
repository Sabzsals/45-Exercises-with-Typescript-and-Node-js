//describing function
function describe_City(city: string , country: string = "Pakistan"){
    console.log(`${city} is in ${country}`)
}

//Calling a function
describe_City("Karachi" , " Pakistan");

describe_City("Islamabad");

describe_City("Luckhnow" , "India");