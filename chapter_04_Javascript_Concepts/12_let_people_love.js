//let - Block Scoped
var a =10;

let retryCount=0;
retryCount=retryCount+1;
retryCount=retryCount+1;

//console.log("Retry attempt:",retryCount);


//let retryCount=5;   
//console.log(retryCount);

//let retryCount=5; SyntaxError: Identifier 'retryCount' has already been declared

//❌ SyntaxError : redeclaration not allowed

let testStatus="Pending";

if (testStatus==="Pending");{
    let executionTime=1200;
  console.log("Inside Block",executionTime);  //1200
}
//console.log("Inside Block",executionTime); //ReferenceError: executionTime is not defined

//{}-Block
//if(){}
//function name(){}

//let=loyal
//var=variable/triator