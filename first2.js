//largest number


// const a=100;
// const b=20;
// const c= 500;
 
// if (a>b && a>c){
//     console.log(a); 
// }

// else if (b>a && b>c) {
//     console.log(b); 
// } else {
//     console.log(c); 
// }



const data = [5, 10, 2, 9, 4, 1];
let max_num = data[0];
for (let index = 0; index < data.length; index++) {
    const element = data[index];  
    if (element>max_num) {
        max_num=element
    }
}
      console.log(max_num);