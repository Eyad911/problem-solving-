// function primes(start, end){
// //Your code here
// let x=[];
// if(start==1){

//   start=start+1;
//   x.push(2)
//   start=start+1;
//   for (start; start<=end;start++){

//     for(let x = 2; x < start; x++)
//     {
//       if(start % x !== 0)
//       {
//          x.push(start)
//       }
//     }

//   }
// }else if(start==2){
//   x.push(2)
//   start=start+1;
// for (start; start<=end;start++){

//   for(let x = 2; x < start; x++)
//   {
//     if(start % x !== 0)  (x.push(start));

//   }

// }}
// console.log(x);
// return x;
// }

function primes(start, end) {
  //Your code here
  let x = [];

  for (start; start <= end; start++) {
    x.push(start);
  }
  // console.log(x);

  x = x.filter((prim) => {
    if (prim !== 1) {
      for (let i = 2; i <= Math.sqrt(prim); i++) {
        console.log(Math.sqrt(prim));
        if (prim % i === 0) return null;
      }
      return true;
    }
  });

  console.log(x);

  return x;
}

primes(1, 10);
primes(100, 200);
primes(5, 7);
