console.log(score);//ReferenceError: Cannot access 'score' before initialization
let score=100;

{
    //----TDZ for "score" starts here----
    //console.log(score); //ReferenceError!
    //let score=100;      //ReferenceError!
    //type of score;      //ReferenceError!
    //----TDZ for "score" ends here----

    let score=100; //eclaration reached,TDZ-ends
    console.log(score); //100(safe to access now)
}