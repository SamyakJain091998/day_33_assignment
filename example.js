// let origDogs = ["bulldog", "beagle", "labrador"];
// let cats = new Array("Americal curl", "bengal");
// let birds = new Array("falcons", "ducks", "flamingos");

// // console.log(origDogs);
// // console.log(cats.length);
// // console.log(birds);

// // let slicedDogs = origDogs.slice(1, 3);
// // console.log(slicedDogs);

// // let copyDogs = [...origDogs];
// // console.log(copyDogs);

// // console.log(origDogs.findIndex());

// let dogs = origDogs.slice(0);
// // console.log(dogs);

// let pushDog = dogs.push("Golden retriever");
// // console.log(typeof(pushDog));
// // console.log(pushDog);
// // console.log(dogs);

// let popDog = dogs.pop();
// // console.log(typeof(popDog));
// // console.log(popDog);
// // console.log(dogs);

// dogs[dogs.length] = "poodle";
// // console.log(dogs);

// let addFirst = dogs.unshift("Saint bernard");
// console.log(dogs);
// let removeFirst = dogs.shift();
// console.log(dogs);


// dogs.splice(2, 1, "pug", "husky");
// console.log(dogs);

// let animals = dogs.concat(cats, birds);
// console.log("PRINTING ANIMALS---->");
// console.log(animals);

// let newAnimal = [...dogs, ...cats, ...birds].toString();
// // console.log(newAnimal);
// console.log("-----------------------------");
// let sortAnimals = animals.slice(0).sort();
// console.log(sortAnimals);
// console.log("-----------------------------");

// function scanArray([first, second]){
//     console.log("Scan : " + first + " " + second);
// }

// function printAnimals(varArray){
//     console.log("Scan : " + varArray[0] + " " + varArray[1]);
// }

// printAnimals(animals);

// let joinedAnimals = animals.join("---");
// console.log("joined animals ----> " + joinedAnimals);   


let keyString = 'a string';
let keyObj = {};
let keyFunc = function () { };

let myMap = new Map();

myMap.set(keyString, "value associated with a string");
myMap.set(keyObj, "value associated with key obj");
myMap.set(keyFunc, "value associated with key function");

console.log(myMap.size);

console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));

for (let [key, value] of myMap) {
    console.log(key + "=" + value);
}

for (let [key, value] of myMap.entries()) {
    console.log(key + "=" + value);
}
console.log("-----------------------");
for(let key of myMap.keys()){
    console.log(key);
}
console.log("-----------------------");
for(let value of myMap.values()){
    console.log(value);
}

console.log("-----------------------");
let first = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
for(let [key, value] of first){
    console.log(key + "=" + value);
}
console.log("-----------------------");
let second = new Map([[1, 'uno'], [2, 'dos']]);
for(let [key, value] of second){
    console.log(key + "=" + value);
}

let hasKey = second.has(2)
console.log(hasKey);

let mergedMap = new Map([...first, ...second, [1, 'An Element']]);
for(let [key, value] of mergedMap){
    console.log(key + "=" + value);
}

hasKey = mergedMap.has(1)
// console.log(hasKey);
let delKey = mergedMap.delete(1);
if(mergedMap.has(1)) console.log("---->" + mergedMap.get(1));

mergedMap.clear();
console.log(mergedMap.size);