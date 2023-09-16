// //programs in anonymous function & IIFE


// //Print odd numbers in an array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8,9,10];

// (()=>{
//     const oddNumbers = [];
// for (  number of arr) {
//   if (number % 2 !== 0) {
//     oddNumbers.push(number);
//   }
// }
// console.log(oddNumbers)
// })();
// // ans:[ 1, 3, 5, 7, 9 ]

// (()=>{
//    const myMsg = `converting all the strings to title caps in a string array`
// capsFirstLetter= myMsg.split(` `).map(word=>word.charAt(0).toUpperCase()+word.substr(1)).join(` `)
// console.log(capsFirstLetter)
// })();

// // Converting All The Strings To Title Caps In A String Array

// let a= [1,2,3,4,5,6]
// let sumArr=(function sum(g){
//   let sum =0
//   for(i=1;i<=g.length;i++){
//     sum = sum+i
//   }
//   return sum
//  })(a);
//  console.log(sumArr)

// // ans :21

// //Return all the prime numbers in an array
// (function () {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15];

//   function isPrime(num) {
//     if (num < 2) {
//       return false; 
//     }
//     for (let i = 2; i<num; i++) {
//       if (num % i === 0 ) {
//         return false; 
//       }
//     }
//     return true;
//   }

//   const primeNumbers = numbers.filter(isPrime);

//   console.log('Prime numbers:', primeNumbers);
// })();
// //Prime numbers: [ 2, 3, 5, 7, 11, 13 ]

// //Return all the palindromes in an array
// (function()
// {function  palindrome(str){
//   const reverseStr = str.split('').reverse().join('');
//   return str === reverseStr
// }
// //str.split("").reverse().join("");
// function palindromeInArray(arr){
//   const palindromes = [];
//   for(let i=0;i<arr.length;i++){
//     if(palindrome(arr[i])){
//       palindromes.push(arr[i])
//     }
//   }
//   return palindromes
// }
// const palindromeArray = ["malayalam","ramukumar","railWay","target","level","Cry","madam"]
// const palindromesInArray = palindromeInArray(palindromeArray);
// console.log(palindromesInArray)
//  })();

//  // ans:[ 'malayalam', 'ramukumar', 'level', 'madam' ]

// //Return median of two sorted arrays of the same size.


// (
//   function(){
// function findMedianSortedArrays(nums1, nums2) {
//   const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
//   const length = mergedArray.length;
  
//   if (length % 2 === 0) {
//       const mid = length / 2;
//       return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
//   } else {
//       return mergedArray[Math.floor(length / 2)];
//   }
// }
// const nums1 = [1, 3, 5];
// const nums2 = [2, 4, 6];
// const median = findMedianSortedArrays(nums1, nums2);
// console.log('Median:', median); 

// })();
// // ans :3.5
// (
//   function(){
// function removeDuplicates(arr) {
//   const uniqueArr = [];

//   for (let i = 0; i < arr.length; i++) {
//       if (!uniqueArr.includes(arr[i])) {
//           uniqueArr.push(arr[i]);
//       }
//   }

//   return uniqueArr;
// }

// const arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5,5,6,7,6,7,];
// const arrWithoutDuplicates = removeDuplicates(arrWithDuplicates);
// console.log(arrWithoutDuplicates); 
//   })();
// // ans:[1, 2, 3, 4, 5, 6, 7]

// Rotate an array by k times

 (
  function(){
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;  

  if (k === 0) {
      return arr;  
  }

  const rotatedArray = arr.slice(-k).concat(arr.slice(0, n - k));
  return rotatedArray;
}

const arr = [1, 2, 3, 4, 5];
const k = 3;
const rotatedArray = rotateArray(arr, k);
console.log(rotatedArray); 
})();

// // ans:[ 3, 4, 5, 1, 2 ]


