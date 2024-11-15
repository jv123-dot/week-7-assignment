const ages = [3, 9, 23, 64, 2, 8, 28, 93]
// const ages2 = [5, 5, 5]
// const ages3 = [24, 23, 36, 12, 5]
console.log(ages)

console.log(ages[ages.length - 1] - ages[0])
ages.push(24)
console.log(ages[ages.length - 1] - ages[3])
console.log(ages)

function average(arr) { // ------ a function that finds the average number of the passed in numbers array
    let sum = 0; 
    for (let i = 0; i < arr.length; ++i){
        sum += arr[i];
    } return sum / arr.length;
}

const answer = average(ages);
console.log(answer)

// -----------

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] // loop that calculates average length of the strings
// names.push("Billy", "Jimmy")
console.log(names)
let nameAverage = 0;
for (let i = 0; i < names.length; ++i) {
   nameAverage += names[i].length
}

let result = nameAverage / names.length;
console.log(result);


let concatNames = "";
for (let i = 0; i < names.length; ++i) {
    concatNames = concatNames.concat(names[i] + " ");
    console.log(concatNames)
}




// -----------------

// Questions 3 and 4

// How do you access the last element of any array?
// A: .length - 1

// How do you access the first element of any array?
// A: [0]


// -------------------
// TEST
// const nameLengths = names.map(word => word.length)
// console.log(nameLengths)



// ----- Question 5

let nameLengths = [];
for (let i = 0; i < names.length; ++i) {
    nameLengths = names.map(word => word.length)
}
console.log(nameLengths);



// ----- Question 6

let sum = 0
for (let i = 0; i < nameLengths.length; ++i) {
    sum += nameLengths[i];
    // console.log(sum)
} 
console.log(sum);



//------- Question 7 ---- an arrow function that takes 2 parameters. It repeats the 1st argument passed in as many times as 2nd argument specifies. No spaces inbetween repeats
let myFunction = (x, y) => {
    let result = '';
    for (let i = 0; i < y; i++) {
        result += x;
    } 
    return result;
}

console.log(myFunction("test", 7))




// -------- Question 8 --- an arrow function that combines the two arguments into a single string with a space between

let functionTwo = (firstName, lastName) => {
    return firstName + " " + lastName;
}
console.log(functionTwo("bob","barker"));




// ------- Question 9

let mathArray = [5, 12, 55, 17, 45];

function functionThree(array) {
    let total = 0;

    for (let i = 0; i < array.length; ++i){
        total += array[i];
        console.log(total);
    }

    if (total > 100) {
        console.log(total);
        return true; 
    } else {
        console.log(total);
        return false;
    }
}

console.log(functionThree(mathArray))



// // ------ Question 10
// let testArray = [10, 10, 10, 10, 10]

function functionFour(array) {
    let sum = 0;
    for (let i = 0; i < array.length; ++i){
        sum += array[i];
    } return sum / array.length;

} console.log(functionFour(mathArray))




// ------- Question 11 ------ Couldn't get this to work properly for a while. Tried many things, deleted and tried again. Got it to work the way I wanted eventually


let arrayCompare1 = [5, 6, 12, 33]; 
let arrayCompare2 = [1, 5, 1, 5]; 
console.log(arrayCompare1);
console.log(arrayCompare2);

// function functionFive(array1, array2) { // // One of the many tries at getting it to work. This one seemingly mostly worked except variable "average2" was returning the total of array "arrayCompare2" rather than the avg. Not sure why
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < array1.length; ++i) {
//         sum1 += array1[i]; 
//         for (let j = 0; j < array2.length; ++j) {
//             sum2 += array2[j];
//         }
//     }

function functionSix(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array1.length; ++i)
        sum1 += array1[i];

    for (let j = 0; j <array2.length; ++j) 
        sum2 += array2[j];


let average1 = sum1 / array1.length;
let average2 = sum2 / array2.length; 

console.log(average1);
console.log(average2);

if (average1 > average2) {
    console.log("true");
    return true;
} else if (average2 > average1) {
    console.log("false");
    return false;
    } else {
        console.log("numbers are equal");
    }
}
// console.log(functionFive(arrayCompare1, arrayCompare2));
console.log(functionSix(arrayCompare1, arrayCompare2));
    


// ------------- Question 11 pt. 2 ----- Solution from video. Couldn't figure out above, did this and went back afterwards to try again


// let newArray = [5, 7, 5, 35];
// let newArray2 = [26, 10, 33, 50];
// console.log(newArray)
// console.log(newArray2)

// function newFunction(array3, array4) {
//     // //console.log("Test")
//     let total3 = 0;
//     let total4 = 0;
//     for (const number of array3){
//         total3 += number;
//         console.log("Total1:", total3)
//     }


//     for (const number of array4) {
//         total4 += number;
//         console.log("total2", total4)
//     }

// let average3 = total3 / array3.length;
// let average4 = total4 / array4.length;

// if (average3 > average4) {
//     console.log("true")
//     return true;
// } else if (average3 < average4) {
//     console.log("false")
//     return false; 
// }  else {
//     console.log("Numbers are Equal")
// }

// }

// newFunction(newArray, newArray2);


// ------------ Question 12 ---- A function that decides whether or not to buy a drink. Dependent upon 2 factors being true at the same time

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        console.log("Time to get something to drink")
        return true; 
    } else if (isHotOutside === false && moneyInPocket < 10.50) {
        console.log("It's cold out and I don't have enough money anyway")
        return false; 
    } else if (isHotOutside === true && moneyInPocket < 10.50) {
        console.log("I don't have enough money")
        return false;
    } else if (isHotOutside === false && moneyInPocket > 10.50) {
        console.log("It's too cold out")
        return false;
    } else {
        console.log("I'm gonna head home")
        return false;
    }
}
willBuyDrink(true, 15);



// ------- Question 13 ---- Below is 2 arrays full of cities across the globe. The function combines
// both arrays and sorts them alphabetically, but in reverse i.e. Z-A


let foreignCities = ["Paris", "Rome", "Guangzhou", "Moscow", "Brussels", "Berlin", "Stockholm"];
let domesticCities = ["Houston", "Seattle", "Miami", "New York City", "Denver"];

function cityNames(a, b) {
    let citiesTest = a.concat(b);
    let combinedCities = citiesTest.sort().reverse();
    return combinedCities;
}
console.log(cityNames(foreignCities, domesticCities));


domesticCities.push("Omaha"); // ---- trying out a few different methods on the arrays, ensuring that it works then calling function
console.log(domesticCities);
console.log(cityNames(foreignCities, domesticCities));

foreignCities.pop();
console.log(foreignCities);
console.log(cityNames(foreignCities, domesticCities));

foreignCities.splice(0, 1);
console.log(foreignCities);
console.log(cityNames(foreignCities, domesticCities));

const sliceTest = domesticCities.slice(3).sort();
console.log(sliceTest);