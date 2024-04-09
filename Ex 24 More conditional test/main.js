//defining variables
var mango = "mango";
var uppercaseMango = "MANGO";
var ten = 10;
var twenty = 20;
var fruits = ["Apple", "Banana", " Mango", "Grapes"];
//test for equality with string
console.log("Is equal to mango");
console.log(mango == "mango");
//test for inequality with string
console.log("\nIs mango is not equal to mango?");
console.log(mango != "mango");
//test for uppercase function
console.log("\nIs MANGO is equal to mango after converting to lowercase");
console.log(uppercaseMango.toLowerCase() == "mango");
console.log("\nIs MANGO is not equal to mango after converting to lowercase");
console.log(uppercaseMango.toLowerCase() != "mango");
//test for numericals using equality and inequality
console.log("\nIs ten equal to twenty?");
console.log(ten == twenty);
console.log("/nIs ten is not equal to twenty?");
console.log(ten != twenty);
console.log("/nIs ten is greater than Zero?");
console.log(ten > 0);
//Not Equal to
console.log("/nIs ten is not equal to twenty?");
console.log(ten != twenty);
//Greater than
console.log("/nIs ten is greater than Zero?");
console.log(ten > 0);
//less than
console.log("/nIs twenty is less than 10");
console.log(twenty < 10);
//Greater than or Equal to
console.log("/nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than oe Equal to
console.log("/nIs twenty is less than or equal to ten?");
console.log(twenty <= 10);
//Testof using "or" & "and"
//using && (and)
console.log("/ntwenty is not equal to 10 and twenty is greater than ten");
console.log(twenty != 10 && twenty > 10);
console.log("/ntwenty is not equal to 10 and twenty is greater than ten");
console.log(twenty != 10 && twenty > 30);
//using || (or)
console.log("/n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
//Test wheather an item is equal to another
console.log("/nIs Apple is include to in my fruits Array");
console.log(fruits.includes("Apple"));
