// Problem statement 1
let myMap = new Map();

for(let i=1; i<=6; i++){
    myMap.set(i, 0);
}
console.log("------------INITIAL MAP------------");

for (let value of myMap.values()) {
    console.log(value);
}

let index = true;

while (1) {
    let randomRoll = Math.floor(Math.random() * 10) % 6 + 1;
    let increment = myMap.get(randomRoll);
    increment++;
    myMap.set(randomRoll, increment);

    for (let value of myMap.values()) {
        if (value == 10) {
            index = false;
        }
    }
    if (index == false) {
        break;
    }
}

console.log("---------UPDATED MAP---------");

for (let [key, value] of myMap) {
    console.log(key + " ===> " + value);
}

console.log("--------The number on dice that got rolled for the maximum times---------")

for (let [key, value] of myMap) {
    if (value == 10) {
        console.log(key + " ===> " + value);
    }
}

console.log("--------The number on dice that got rolled for the minimum times---------")

let minValue = 11;
let minimumValueKey;
for (let [key, value] of myMap) {
    if (value < minValue) {
        minValue = value;
        minimumValueKey = key;
    }
}
console.log(minimumValueKey + " ===> " + minValue);

//Problem statement 2

let myPersonMap = new Map();
let myMonthMap = new Map();
let monthArray = new Array();

monthArray.push("January");
monthArray.push("February");
monthArray.push("March");
monthArray.push("April");
monthArray.push("May");
monthArray.push("June");
monthArray.push("July");
monthArray.push("August");
monthArray.push("September");
monthArray.push("October");
monthArray.push("November");
monthArray.push("December");

for (let i = 1; i <= 12; i++) {
    myMonthMap.set(i, monthArray[i]);
}

for(let i = 1; i<=12; i++){
    myPersonMap.set(i, new Array());
}

for (let i = 0; i < 50; i++) {
    let randomNumber = Math.floor(Math.random() * 100) % 12 + 1;
    let returnedArray = myPersonMap.get(randomNumber);
    returnedArray.push("name" + (i + 1));
}

for(let [key, value] of myPersonMap){
    console.log(monthArray[key-1] + " ===> " + value);
}
