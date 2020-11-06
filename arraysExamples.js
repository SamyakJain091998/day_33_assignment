//Problem statement 1

let myArray = new Array();
for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 1000) % 900 + 100;
    myArray.push(randomNumber);
}

for (let i of myArray) {
    console.log(i);
}

let firstMin = 1000;
let firstMax = 99;
for (let i of myArray) {
    if (i < firstMin) {
        firstMin = i;
    }
    if (i > firstMax) {
        firstMax = i;
    }
}
console.log("-------------------");

let secondMin = 1000;
let secondMax = 99;
for (let i of myArray) {
    if (i < secondMin && i != firstMin) {
        secondMin = i;
    }
    if (i > secondMax && i!=firstMax) {
        secondMax = i;
    }
}

console.log("Second Minimum----> " + secondMin);
console.log("Second Maximum----> " + secondMax);

//Problem statement 2
console.log("\n");
console.log("---Printing sorted array---");
myArray = myArray.sort();
for (let i of myArray) {
    console.log(i);
}

console.log("Second smallest element using sorted array-----> " + myArray[1]);
console.log("Second largest element using sorted array-----> " + myArray[myArray.length - 2]);

//Problem statement 3
let n = 10;

function isPrimeNumber(var1) {
    if (var1 == 1) {
        return true;
    } else if (var1 == 2) {
        return true;
    } else {
        for (let j = 2; j < var1; j++) {
            if (var1 % j == 0) {
                return false;
            }
        }
        return true;
    }
}

let myArray = new Array();

if (n == 1) {
    console.log("1 is neither prime nor composite");
} else if (n == 2) {
    myArray.push(2);
} else {
    for (let i = 2; i <= parseInt(n / 2); i++) {
        if (isPrimeNumber(i)) {
            if (n % i == 0) {
                myArray.push(i);
            }
        }
    }
}

for (let i of myArray) {
    console.log(i);
}

//Problem statement 4

let myArray = new Array();
myArray.push(-2);
myArray.push(1);
myArray.push(1);
let sumOfArrayElements = sumOfArray(myArray);
console.log(sumOfArrayElements);

function sumOfArray(localArray){
    let localSum = 0;
    for(let i of localArray){
        localSum+=i;
    }
    return localSum;
}

// Problem statement 5

console.log("-----------");
let myArray = new Array();

for (let i = 1; i < 101; i++) {
    let index = i;
    if (parseInt(index / 10) > 0 && parseInt(index / 10) < 10) {
        let remainder1 = index % 10;
        index = parseInt(index / 10);
        let remainder2 = index % 10;
        if (remainder1 == remainder2) {
            myArray.push(i);
        }
    }
}

for (let i of myArray) {
    console.log(i);
}
