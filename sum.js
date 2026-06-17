const ary = [5,3,9,5,8,3,3,3];
const a1 = 5;
const a2 = 3;
const a3 = 9;
const a4 = 8;
let c1=0;
let c2=0;
let c3=0;
let c4=0;


for (let index = 0; index < ary.length; index++) {
    const element = ary[index];
   
    if (element==a1) {
        c1++;
    }

    else if (element==a2) {
        c2++;
    }

    else if (element==a3) {
        c3++;
    }
    else if (element==a4) {
        c4++;
    }
    
}


    console.log(c1, c2, c3, c4);
    // console.log(c2);
    // console.log(c3);
    // console.log(c4);
