// programs in arrow functions.

//Print odd numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8,9,10];

const oddNumber=(arr)=>{
    const oddNumbers = [];
for (  number of arr) {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
}
return oddNumbers
}
console.log(oddNumber(arr))

// ans:[ 1, 3, 5, 7, 9 ]

//Convert all the strings to title caps in a string array

const stringCaps = ()=>{
    const myMsg = `converting all the strings to title caps in a string array`
 capsFirstLetter= myMsg.split(` `).map(word=>word.charAt(0).toUpperCase()+word.substr(1)).join(` `)
 console.log(capsFirstLetter)
 }
 stringCaps();

 //ans :Converting All The Strings To Title Caps In A String Array

 //Sum of all numbers in an array
 let a= [1,2,3,4,5,6]
 let sumArr= (g)=>{
   let sum =0
   for(i=1;i<=g.length;i++){
     sum = sum+i
   }
   return sum
  }
  console.log(sumArr(a))

 //ans:21

//Return all the prime numbers in an array
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15];
  
     isPrime=(num)=> {
      if (num < 2) {
        return false; 
      }
      for (let i = 2; i<num; i++) {
        if (num % i === 0 ) {
          return false; 
        }
      }
      return true;
    }
  
    const primeNumbers = numbers.filter(isPrime);
  
    console.log('Prime numbers:', primeNumbers);

    //ans: [ 2, 3, 5, 7, 11, 13 ]
  
//Return all the palindromes in an array
 palindrome=(str)=>{
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr
}
function palindromeInArray(arr){
  const palindromes = [];
  for(let i=0;i<arr.length;i++){
    if(palindrome(arr[i])){
      palindromes.push(arr[i])
    }
  }
  return palindromes
}
const palindromeArray = ["malayalam","ramukumar","railWay","target","level","Cry","madam"]
const palindromesInArray = palindromeInArray(palindromeArray);
console.log(palindromesInArray)
 
//ans:[ 'malayalam', 'ramukumar', 'level', 'madam' ]