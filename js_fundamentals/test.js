
// strict mode
'use strict'

// determine test-data
let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

// ternary operation
bill1 >=50 && bill1 <= 300? console.log("the tip: "+bill1 * 0.15+" the bill: "+bill1+" bill + tip: "+bill1+(bill1 * 0.15)):
    console.log("the tip: "+bill1 * 0.20+", the bill: "+bill1+", bill + tip: "+bill1+(bill1 * 0.20));

// function
function logger (log1, log2){
    console.log(log1, log2);
    let logged = 12;
    return logged;
}

logger(2, 1);

// object
const aaron = {
    firstName: 'aaron',
    lastName: 'engelmann',
    age: 21,
    job: 'developer',
    friends: ['Dave', 'Yannick', 'Youssef'],

    // object method
    nameAdder: function () {
        let fullName = this.firstName+" "+this.lastName;
        return fullName;
    }
};

console.log(aaron.nameAdder());

const bills = [[22, 295, 176], [22, 33, 44]];

for(let i=0; i<bills.length; i++){
    for(let j=0; j<bills[i].length; j++){
        console.log(bills[i][j]);
    }
    console.log('\n');
}
