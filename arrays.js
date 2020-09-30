// --------------------------
// Opdracht 1
// --------------------------

const names = ["Henk", "Piet", "Fred", "Joop"];

// Zorg ervoor dat er -"je" achter iedere naam wordt geplakt
// geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

for (let i = 0; i < names.length; i++){
    names[i] = names[i]+"je";
}

console.log(names);

// --------------------------
// Opdracht 2
// --------------------------

const numbers = [2, 4, 5, 29, 38];

// Vermenigvuldig iedere waarde in de array met 3
// geeft: [ 6, 12, 15, 87, 114 ];

for (let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i]*3;
}
console.log(numbers);
// --------------------------
// Opdracht 3
// --------------------------

const figures = [4, 6, 12, 34, 1, 5, 8];

for (let i=0; i < figures.length; i++){
    figures[i] = figures[i]+3;
}

console.log(figures);

// Tel 3 op bij ieder item in de array
// geeft: [ 7, 9, 15, 37, 4 ]


