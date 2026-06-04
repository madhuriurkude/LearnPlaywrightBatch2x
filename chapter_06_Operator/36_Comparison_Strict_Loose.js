// // number==string

// console.log(42=="42"); // ==  ->loose comparison
// console.log(42==="42"); // data type and converted value
// console.log(45==="45"); // value different

// console.log(5===5);
// console.log(5==="5");

// console.log(5==5);
// console.log(5=="5");

// console.log(0=="");
// console.log(0==="");

// console.log(true==1);
// console.log(false==0);
// console.log(true=="1");
// console.log(true==2);

console.log(5!="5");  // false , 5 int , "5" string , both of them are not equal?- loose couple
console.log(5!=="5"); // true (value and data type)
//console.log(5!==="5"); // This does not exist

// === Strict Check we will check for both the data type and value
// == Loose Check we will check eithere value or data type