// Given an array of integers, find the largest product yielded from three of the integers

const unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

function sortIntegers( a, b) {
    return a - b;
}

function computeProduct( unsorted ){
    let sortedArray = unsorted.sort( sortIntegers ),
        product1 = 1,
        product2 = 1,
        array_n_element = sortedArray.length - 1;
    
    for(let x = array_n_element; x > array_n_element - 3; x--){
        product1 = product1 * sortedArray[x];
    }

    product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element]

    if( product1 > product2) { return product1 }
    return product2
}

console.log(computeProduct(unsortedArray));


//Being told that an unsorted array contains (n - 1) of n consecutive numbers
//(where the bounds are defined), find the missing number in O(n) time.

let arrayOfIntegers = [2, 5, 4, 8, 9, 6, 3, 7];
let upperBound = 9;
let lowerBound = 1;

function findMissingNumber( arrayOfIntegers, upperBound, LowerBound ) {
    let sumOfInts = 0;
    for(i=0; i<arrayOfIntegers.length; i++){
        sumOfInts += arrayOfIntegers[i];
    }
    upperLimitSum = (upperBound * (upperBound + 1) / 2)
    lowerLimitSum = (lowerBound * (lowerBound - 1) / 2)
    theoreticalSum = upperLimitSum - lowerLimitSum
    return theoreticalSum - sumOfInts
}

console.log(findMissingNumber(arrayOfIntegers, 9, 1));


// Removing duplicates of an array and returning an array of only unique elements

let dupedArr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

function uniqueArray( array ){
    let hashmap = {};
    let unique = [];
    array.forEach( (item, ind) => {
        if(!hashmap[item]){
            hashmap[item] = 1;
            unique.push(item);
        }
    })
    return unique
}

console.log(uniqueArray( dupedArr ));

//Given an array of integers, find the largest difference between two elements
//such that the element of lesser value must come before the greater element

let diffArr = [7, 8, 4, 9, 9, 15, 3, 1, 10];

function findLargestDifference( array ){
    if (array.length <= 1) return -1;

    let currentMin = array[0];
    let currentMaxDifference = 0;
}