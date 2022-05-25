let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

i = 0;
var typeS1Count = 0;

//1
while (i < 6) {
    console.log(newInventoryCarModels[i]);
    if (newInventoryCarModels[i] === "S1") {
        typeS1Count++;
    }
    i++;
}

//2
console.log("Number of S1 Cars is: " + typeS1Count);

let lorrieCount = 0;
for (let k = 0; k < 6; k++) {
    if (newInventoryCarTypes[k] === "Lorrie") {
        lorrieCount++;
    }
}
console.log("Number of Lorrie is: " + lorrieCount);

let averageAge;
let age;
for (let a = 0; a < 6; a++) {
    age = 2022 - newInventoryYearBuilt[a];
}
averageAge = age / 6;
console.log("Average age is " + averageAge)
