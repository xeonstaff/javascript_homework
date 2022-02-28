let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function foodStuffs(person){
    for(i=0;i<person.length;i++){
        if(person[i].length = 1){
            return(person[i])
        } else {
            return('else!')
        }
    }
}

console.log(foodStuffs(person3))