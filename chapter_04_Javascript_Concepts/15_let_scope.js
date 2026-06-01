let a=10; //Global Scope
console.log(a);

//Definition of the function

function printHello(){
    console.log("Hello The Testing Academy!");
    let a=20;  //Local Scope
    console.log(a);
        if(true){
    let a=30;
    console.log(a); //30
    }
    console.log("F->",a);
}
console.log("G->",a);

printHello();