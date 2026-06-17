const array = [5,3,9,5,8,3,3,3];
let max_array = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element>max_array) {
        max_array = element;
    }
}
console.log(max_array);
