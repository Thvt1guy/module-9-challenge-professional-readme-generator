// const myArray = ["Apples", "Oranges", "Pears"];

// const myFunction =  (arr) => {
//     if (Array.isArray(arr) && arr.length){
//         return arr[Math.floor(Math.random() * arr.length)];
//     }
//     return undefined
// }

// var name = "Alex"

const zoomers = [{
    firstName: "alex",
    lastName: "gonzaleZ",
    age: "25"
},
{
    firstName: "Derrick",
    lastName: "alcius",
    age: "22"
}
]

const helper = {
    formatName(str){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
}

//transfrom the firstName and last name of each element to be properly written (capitalize first Letter of each)
//for loop
for(let i=0; i< zoomers.length; i++){
    zoomers[i].firstName = helper.formatName(zoomers[i].firstName)
    zoomers[i].lastName = helper.formatName(zoomers[i].lastName)
    //after you transform, create a key in each object using ["notation"] with the key name = fullName
    zoomers[i]["fullName"] = zoomers[i].firstName + " " + zoomers[i].lastName
}


console.log(zoomers)





//if the student is over 22, please remove it from the array using the filterMethod of an array