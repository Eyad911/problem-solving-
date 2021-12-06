// function maxElement(arr) {
//     // write your code here
//     let x= -500;
//     // console.log(x);
//     let newA= arr.map(item=>{
//     if(item>x) x=item;


//     })
//     console.log(x);
//     return x
//   }


// maxElement([2 , 4 , 9 , 23 , 435]);
// maxElement([-99 , -314 , 0 , -200 , -23]);



function lastElm(arr) {
    // write your code here
    // let x= arr.find(item=>item[item.length-1])
    // console.log(x);
    let y= arr.length;
    return arr[y-1];
    // console.log(y);
    // console.log(arr[y-1]);

  }

  lastElm([-99 , -314 , 0 , -200 , -23])


//   function findElement(array, element) {
//     // write your code here
//    let x =  array.find(item=>item=== element)
// console.log(x);
// if(x===element) {return true
// }else return false
    
//   }
 
//   findElement([2, 4, 1 ,9, 42,44,55,6,44,], 44);
//   findElement([43, 56, 3,78, 20], 78);