const BASE_URL="https://thetestingacademy.com";
//const BASE_URL="https://thetestingacademy.com";
//BASE_URL="https://thetestingacademy.com";

//TypeError: Assignment to constant variable.

//console.log("print:",BASE_URL);

let name="pending";
//let name="pending"; // SyntaxError: Identifier 'name' has already been declared
name="done";

//console.log(name);

{
    name="Dutta";
}
function say(){
    let name="Dutta";
}
say();



