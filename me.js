// function milesToKillo(miles){
//     const killometer = miles*1.609;
//     return killometer;
// }

function isEven(number){
    const remainder = number % 2;
    if (remainder === 0){
        return true;
    }
    else {
        return false;
    } 
}

const mynumber = isEven(303);
console.log(mynumber);
const mynumberr = isEven(1200);
console.log(mynumberr);


