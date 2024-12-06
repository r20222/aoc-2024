const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
    let lijst1 = [];
    let lijst2 = [];
    let split = input.split("\n");

    split.forEach(element => {
        let subsplit = element.split("   ");
        lijst1.push(subsplit[0]);
        lijst2.push(subsplit[1]);
    });

    lijst1.sort(function(a, b) {
        return a - b;
    });

    lijst2.sort(function(a, b) {
        return a - b;
    });

    let totaal = 0;


    lijst1.forEach(function callback(getal, key) {
        let getal1 = getal;
        let getal2 = lijst2[key];

        let distance = Math.abs(getal1 - getal2)
        console.log(distance);
        totaal = totaal + distance;

    });

    return totaal
}

const goB = (input) => {
    let lijst1 = [];
    let lijst2 = [];
    let split = input.split("\n");

    split.forEach(element => {
        let subsplit = element.split("   ");
        lijst1.push(subsplit[0]);
        lijst2.push(subsplit[1]);
    });


    lijst1.sort(function(a, b) {
        return a - b;
    });

    lijst2.sort(function(a, b) {
        return a - b;
    });

    let totaal = 0;


    lijst1.forEach(function callback(getal, key) {
        let getal1 = getal;

        let count = 0;
        lijst2.forEach(function (getal2,key) {
            if(getal1 ===  getal2) {
                ++count;
            }
        });

        totaal+= (getal1 * count);


    });

    return totaal;ß
}

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)