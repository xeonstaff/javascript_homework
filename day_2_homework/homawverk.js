//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
// */

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }

// //can't currently get access to dictionary

// function foodStuffs(person){
//     for(i=0;i<Object.values(person).length;i++){
//         if (Array.isArray(Object.values(person)[i])){
//             for(j=0;j<Object.values(person)[i].length;j++){
//                 console.log(Object.values(person)[i][j])
//             } 
//         } else if (typeof Object.values(person)[i] === "object"){
//             console.log('what is up')
//             for(k=0;k<Object.values(person).length;k++)
//                 console.log(Object.values(person[i]))
//         } else{
//         console.log(Object.values(person)[i])
//         }
//     }
// }

// foodStuffs(person3)

// //typeof Object.values(person)[i] === "Object"

// //=======Exercise #2=========//
// /*
// Write an object prototype for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the persons age by 1 each time the method is called.
// Create two people using the 'new' keyword, and print 
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods
// */

// // current methods aren't arrow functions

class Person{
    constructor(name, age, gender,emotion){
        this.age = age;
        this.name=name;
        this.gender=gender;
        this.emotion=emotion;

    }
    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender:${this.gender} \nemotion:${this.emotion} \n`
    }

    printInfo(){
        return ${this.name}
    }

    upAge(){
        this.age+=1

        if(this.age>1) {
            this.emotion="existential pain!"
            console.log("Meeseeks aren't supposed to live this long! \n")
        }
    }
}

let AKBrandon = new Person('Brandon',25,'Male');
let Mr = new Person('Meeseeks',0,'Andro','happy');


console.log(AKBrandon.printInfo())
console.log(Mr.printInfo())
Mr.upAge()
Mr.upAge()
Mr.upAge()
console.log(Mr.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

//very unsure if this is correct 

var stringy = "the house sat on the mouse atop the louse"
var stringy2= "the"

let strlength = new Promise(function(resolve, reject){
    if(stringy.length > 10){
        resolve("big word!");
    } else {
        reject(new Error("small word!"));
    }
}) 

console.log(strlength)
