


// anonymous function 



// greet();

// var greet = function () {
//    console.log("function called");
// }



// console.log(findSquare(5));

// function findSquare(num) {
//   return num * num;
// }



// let sqr = (n)=> n*n;
// console.log(sqr(2));

// greet();

//  let a;
// console.log(a);

// let a = 20;



// setTimeout(() => {
//     console.log("helooooooo");
// }, 2000)





//    const response =  fetch("https://api.github.com/users/mudassir-jmi")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });

      
//       let  img = response.avatar_url;
//       console.log(img);




// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }


function addTwoNum(num1, num2) {
    return num1 + num2;
}


const result = addTwoNum(2,5);

// console.log("result:", result);



function issLoggedIn(username="testuser") {

    if(!username) {
        console.log("please enter username ");
    }
  return `${username} loggedIn`;     // template  litrals

}


const message = issLoggedIn();
// console.log(message);


// object 


let obj = {
    firstName: "mudassir",
    lastName: 'akhter',
    Age: 30,
    email: "test@gmail.com"
}


// console.log(obj);
// console.log("lastName :", obj.lastName);


// Array 


const myArray = [1,2,3,5];
myArray.push(10); // last index
myArray.pop(); // remove last index
myArray.unshift(6); // insert 0 index
myArray.shift() //  remove 0 index 
// console.log(...myArray);    // spread operator



// higher order fucntion

// map, filter, reduce


const res = myArray.map((arr)=>{
   return arr+1;
})

// console.log(res);

// higher order function.
// add two numbers
function sum(a, b) {
  return a + b
}

// multiply two numbers
function mul(a, b) {
  return a * b
}

//operate with a higher-order function
function calculate(operation, numsArray) {
  if (numsArray.length <= 2) {
    let a = numsArray[0]
    let b = numsArray[1]

    // return a function
    return operation(a, b)
  }
}

// calculate the sum of two numbers
// console.log(calculate(sum, [5, 6])) // output: 11

// calculate the multiplication of two numbers
// console.log(calculate(mul, [10, 3])) // output: 30

// let array= [1,2,3,4];

// let resu = array.map((e)=> e * 2);
// console.log(resu);

// let reduce = array.reduce((ele)=>{
//     return ele;
// })
// console.log(reduce);



// map 

const array = [1,2,3,4,5]

const value = array.map(arr=>arr * arr);

// console.log("value: ", value);
// console.log("array:", array);


// filter 


const filterData = array.filter((data)=> {
   return data < 5;
})

// console.log(filterData);


// reduce


const reduceData = array.reduce((acc, curr)=>{
    return acc + curr;
})

// console.log("reduceData :", reduceData);



// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// console.log(array1);




// const data = fetch('https://dummyjson.com/products/1')
// .then(response => response.json())
// .then(data => console.log(data.images[2]))
      

const imgCard = document.querySelector('.card')

// console.log(imgCard);


// Array , object, string, higher order, callback, closure, aync await, promises 

// typeof  , number, null, undefined, nan

// let , var, const


{
    let a = 10;
    // console.log(a);
}




// console.log(a);


console.log(b);

var b = 20;




console.log(a);
let a = 10;


