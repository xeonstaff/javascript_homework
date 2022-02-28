// first problem-- find if names are in string

//V1-- matches as-is: case sensitive 

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
const dog_names = ["Max","HAS","PuRple","dog"];

function findWords(dog_names, dog_string){
        for(var i=0; i<dog_names.length; i++){
                if (dog_string.includes(dog_names[i])){
                        console.log(`Matched ${dog_names[i]}`)
                } else {
                        console.log('no matches!')
                }
        }
}

// console.log(findWords(dog_names, dog_string))

//V2-- match regardless of case: case insensitive 

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
const dog_names = ["Max","HAS","PuRple","dog"];

function findWords(dog_names, dog_string){
        let dog_string2 = dog_string.toLowerCase()
        for(var i=0; i<dog_names.length; i++){
                if (dog_string2.includes(dog_names[i].toLowerCase())){
                        console.log(`Matched ${dog_names[i]}`)
                } else {
                        console.log('no matches!')
                }
        }
}

console.log(findWords(dog_names, dog_string))


// second problem-- function takes in an array and returns every 
//even (odd-indexed)element, using 'splice', replacing it with the string "even index"

let arry = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arry){
        let new_arry = new Array()
        for(var i=0; i<arry.length; i+=1){
                if(i % 2 != 0){
                        new_arry.push(arry[i])
                } else {
                        new_arry.push("even index")
                }
        }
        return (new_arry)
}

console.log(replaceEvens(arry))