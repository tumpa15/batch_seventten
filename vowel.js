const text = "Hello BAngladesh";
const vowel = ["a", "e", "i", "o", "u", "A", "E","I","O","U"];
let vcount = 0;
let ccount = 0;

for (let index = 0; index < text.length; index++) {
    const element = text[index];
    if (vowel.includes(element)) {
        vcount ++;
    }

    if (!vowel.includes(element)) {
        ccount ++;
    }
}

console.log("Vowel = " +vcount);
console.log("Consonent = " +ccount);


