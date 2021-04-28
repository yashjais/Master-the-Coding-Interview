//Implement a function that reverses a string using iteration...and then recursion!
// function reverseString(str) {
//   let answer = '';
//   for (let i = str.length - 1; i >= 0 ; i--) {
//     answer += str[i];
//   }
//   return answer;
// }

// a base case
// a recursive case
function reverseString(str) {
   if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'