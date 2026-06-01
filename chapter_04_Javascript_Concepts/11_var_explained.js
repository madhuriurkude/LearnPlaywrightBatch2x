var a=10;  //Global Scope

//var is function scoped

console.log(a); 

function printHello(){
    console.log("Hello The Testing Academy!");
    var a=20; //Local Scope
    console.log(a);
    if (true){
        var a=30;
        console.log(a);  //30
    }
}

printHello();   

var a=50;
console.log(a);

//var==trump,flipper,dual faced,not trust worthy