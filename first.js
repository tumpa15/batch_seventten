

// for (let index = 1; index <= 10; index++) {

//    console.log (index);
// }

// for (let index = 1; index <= 10; index++) {

//    if (index%2==0)
//    {
//     console.log (index);
//    }
  
// }

// for (let index = 1; index <= 10; index++) {

//    if (index%2!=0)
//    {
//     console.log (index);
//    }
  
// }  


// prime or not


for (let pick_number = 1; pick_number <=10;pick_number++){
let count = 0;
    for (let compared_number = 1; compared_number <= pick_number; compared_number++) {
       
        if (pick_number%compared_number==0) {
           count++;
        }
    }

    if (count==2) {
        console.log ("The number is prime:" +pick_number);
    }

   else  {
        console.log ("The number is not prime:" +pick_number);
    }

}

