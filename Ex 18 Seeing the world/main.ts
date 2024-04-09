//Storing locations in a array and print in its original form 
let countriesToVisit: string[]= ["China" , "Argentina" , "Brazil" , "Denmark"];
console.log("Original Order" , countriesToVisit);

//Printing the Array in Alphabetical order without modifying the actual Array List 
console.log("Alphabetical Order:" , [...countriesToVisit].sort());

//Showing that the Array is still in its original form
console.log("Still in Original Order;" , countriesToVisit);

//Printing the Array in Reverse Alphabetical Order without modifying the Actual Array
console.log("Reverse Alphabetical Order:" ,[...countriesToVisit].reverse());

//Showing that the Array is still in its original form
console.log("Still in Original Order:" , countriesToVisit);

//Printing the Actual Array in Reverse Order
console.log("Reverse Original Array:" , countriesToVisit.reverse());

//printing the Array Back to it's Original Order 
console.log("Back to Original Order:" , countriesToVisit.reverse());

//Printing the Array that it's order has been changed in Alphabetical order
console.log("Sorted in Alphabetical Order:" , countriesToVisit.sort());

//Printing the Array that it's order has been changed in Reverse Alphabetical Order
console.log("Reverse Original Array in Alphabetical Order Again:" , countriesToVisit.reverse());