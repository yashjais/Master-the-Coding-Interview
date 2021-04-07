function reverseString(str) {
  if (!str) return ''
  let reverseWord = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseWord += str[i];
  }
  return reverseWord;
}

console.log(reverseString("you are Awesome"));