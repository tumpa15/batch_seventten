const array = [1,5,8,5,3,1,2];
let unique_array = [];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!unique_array.includes(element)) {   // element কি unique_array-এ নাই?” like 1 
        unique_array.push(element);      //iteration1= na nai tahole element=1 ke unique_array te push koro
    }                                   // jei iteration a 1 pabe take push na kore skip korbe
}
console.log(unique_array);

//push() aifunction dite element theke data unique_array te jacche.

//unique_array.includes(element) = এটা শুধু check করে: “element কি আগে থেকেই আছে?”
//!unique_array.includes(element) = “element কি unique_array-এ নাই?”
//যদি element আগেই না থাকে → true → ভিতরে যাবে push(), যদি element আগে থেকেই থাকে → false → skip
//  includes = inly check, push = add


// | Condition            | Meaning             |
// | -------------------- | ------------------- |
// | `includes(element)`  | already exists      |
// | `!includes(element)` | not exists → add it |


// | element | includes? | action          |
// | ------- | --------- | --------------- |
// | 1       | ❌         | add → [1]       |
// | 5       | ❌         | add → [1,5]     |
// | 8       | ❌         | add → [1,5,8]   |
// | 5       | ✅         | skip            |
// | 3       | ❌         | add → [1,5,8,3] |


