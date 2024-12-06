const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
    let split = input.split("\n");

    console.log(split);

    let totaal = 0;
    split.forEach(element => {
        let subsplit = element.split(" ");
        // alle nummers in subsplit OF oplopend zijn
        //                          OF aflopend zijn

        // dat de distane tussen de nummers niet groter is dan 3, maar niet kleiner is dan 1
        let kopieOrigineel = [...subsplit].join('');
        let kopieOplopend = [...subsplit];
        let kopieAflopend = [...subsplit];

        kopieOplopend.sort(function(a, b) {
            return a - b;
        });

        kopieAflopend.sort(function(a,b) {
            return b - a ;
        })

        if(
            kopieOrigineel == kopieOplopend.join('') ||
            kopieOrigineel == kopieAflopend.join('')
        ) {
            // check of de distance tussen elk getal in de array subsplit niet groter is dan 3, maar op zijn minst 1

            let valid = true;
            subsplit.forEach(function (getal,key)
            {
                let volgendeWaarde = subsplit[key+1];
                if(!volgendeWaarde){
                    return
                }

                let distance = Math.abs(getal - volgendeWaarde)

                if(distance <1 || distance >3){
                    valid = false;
                }
            });

            if(valid){
                ++totaal;
            }
        }
    });

    return totaal
}
const goB = (input) => {
    return
}

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)

