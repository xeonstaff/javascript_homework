// JS comment

/* JS comment 2
it's several
whole lines
all by
itself
*/

var first_name = 'Melody';

console.log(first_name)

var some_number = 32;

console.log(some_number)

//show all attributes of a document
console.dir(document)

var some_float = 3.14155
console.log(some_float)

var some_array = [1,2,3,4]
console.log(some_array)

var some_object = {'Yee':'haw'}
console.log(some_object)

//JS hoisting 

a_num = 10;
console.log(a_num);


let b = 88
console.log(b)
b = 3
console.log(b)

const c = 69
console.log(c)

function addNums() {
    let var1 = 15;
    let var2=20;
    return var1 + var2
}

console.log(addNums())

let addNum2 = function(num, num2){
    return num+num2
}

console.log(addNum2(8,9))

// arrow function in JS

let cubed = num=>{
    return num**3
}

console.log(cubed(4))

//with parentheses
let cubed2 = (num) => {
    return num**4
}

console.log(cubed2(64))

let toThePowEr = (num,power) => {
    return num ** power;
}

console.log(toThePowEr(4,3))


console.log((function(name){
    let hello = 'Hello ' + name;
    return hello
})('Joel'))

//control flow
//if statements

function determineAge(age){
    if (age<18){
        return 'Minor'
    } else if (age >= 18 && age <65){
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(45))
console.log(determineAge(100))

//Ternary operators

function findtheAge(age){
    return (age<18) ? 'minor': (age >= 18 && age <= 65) ? 'Adult not retired':'Elderly person';
}

console.log(findtheAge(14))
console.log(findtheAge(192))

function countByOne(){
    for(let i = 0; i<20; i++){
        console.log(i)
    }
    return 'we done here bish'
} 

countByOne()

function decreaseByOne(){
    for(let i=20;i>0;i--){
        console.log(i)
    }
    return 'Counting has stopped'
}

decreaseByOne()

function count_with_while(){
    let i = 0;
    let text = '';
    while(i<10){
        text += `this number is... ${i} \n`
        i++
    }
    return text;
}

console.log(count_with_while())

function countWithDoWhile(){
    let i= 0;
    let text = '';

    do{
        text+=`this number is..${i} \n`;
        i++;
    }

    while(i>10)
    return text
}

countWithDoWhile()

let group_of_names = ['jerry','ben','bAsh','Brock','Misty']

console.log(group_of_names[0])
console.log(group_of_names[1])
console.log(group_of_names)

let terry,ben,misty;
[terry,misty,ben] = group_of_names
console.log(terry,ben,misty)

function showAllNames(){
    for(let i=0; i<group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'done'
}

showAllNames()

console.log(group_of_names.forEach(element => console.log(element + " happy birthday to uuu")))

console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))

//.map()
let b_names = group_of_names.map(i => {
    if (i[0] == 'B'){
        return i;
    } else {
        return false;
    }
})

console.log(b_names)

//long form of .map()
let b_names_test = function() {
    let test_array = [];
    for(let i=0; i<group_of_names.length;i++){
        if(group_of_names[i][0] == 'B');
            test_array.push(group_of_names[i])
    }
    return test_array
}

console.log(b_names_test())

// .filter()

let long_names = group_of_names.filter( element=> element.length>4)
console.log(long_names)

//.reduce()
const nums = [2,4,6,8,10]
let nums_reduced = nums.reduce((accumulator, current_num)=>{
    return accumulator + current_num
})
console.log(nums_reduced)

//.join, .slice, .search, .splice