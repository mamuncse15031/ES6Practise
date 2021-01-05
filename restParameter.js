//Rest parameter (...)
function calculation(a,b,c,...numbers){
    let sum = 0;

    for( let i of numbers){
        sum = sum+i+a+b+c;
    }
    console.log(sum);
}
calculation(23,456,1,2,3,4,5);
