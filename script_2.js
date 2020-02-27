let myNumber = prompt("Quelle factorielle veux-tu ?");


function factorielle(myNumber) {
    let fact = 1;
    for (let index = myNumber; index > 1; index--) {
        fact = fact * index;
    }
    return fact;
}

console.log(`Le résultat est : ${factorielle(myNumber)}`);