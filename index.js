//console.log("Hello Node.js 🚀");

// const fruit = ["apple" ,"banana", "orange", "olive", "ouefhu", "hjdbhsl", "wefkjfk"];

// for (let index = 0; index < fruit.length; index++) {
//     const element = fruit[index];
//     //console.log (element);

//     if (element.startsWith("o") || element.endsWith("e")) {
//           console.log (element);
//     }

    
// }

 const array = ["jdhsh", "jnf", 123, 9809,90.88, Boolean,"lk"];

 for (let index = 0; index < array.length; index++) {
    const element = array[index];
    switch (typeof element) {
        case "string":
            
            console.log (element + " is a string ");
            break;

            case "number":
            
            console.log (element + " is a number ");
            break;
    
        default:
            console.log ("unknown type");
            break;
    }
 }
