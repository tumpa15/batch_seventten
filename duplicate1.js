////  another logic 

const array = [1, 5, 8, 5, 3, 1, 2];
let unique_array = [];

for (let i = 0; i < array.length; i++) {
    let element = array[i];

    // যদি element আগে থেকেই থাকে → skip
    if (unique_array.includes(element)) {
        continue;
    }

    // না থাকলে → add
    unique_array.push(element);
}

console.log(unique_array);