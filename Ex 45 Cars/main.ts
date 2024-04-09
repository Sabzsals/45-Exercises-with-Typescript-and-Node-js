//Defining a function to create a car objects with optional options...
function car_Objects(manufacturer , model , ...options){
    //initialize a car objects with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    
    //Add additional options to the car object
    options.forEach(option => {
        let [key , value] = option.split(":");
        car[key.trim()] = value.trim();

    });
    return car
}

// Call the function to create a car object
let my_car = car_Objects("Toyota" , "Corolla" , "color: Black" , "Sunroof: True" , "year: 2024");

//Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
