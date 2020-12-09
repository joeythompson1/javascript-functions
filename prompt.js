console.log("Prompt 1: ")
function greeting () {
    return('hey there')
}
console.log(greeting())

console.log("Prompt 2: ")
function reverse(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse(23))



console.log("Prompt 3: ")
function isPalindromic(str) {
    return str == str.split('').reverse().join('');
}
console.log(isPalindromic('racecar'))



console.log("Prompt 4: ")
function alphaOrder(str) {
}



console.log("Prompt 5: ")
function changeToLowerCase(str) {
   return str.toLowerCase()
}
console.log(changeToLowerCase('SaLly SeLls SeA ShelLs'))



        console.log("Prompt 6: ")
        function changeToUpperCase(str) {
            return(str.toUpperCase())
        }
        console.log(changeToUpperCase('sally sells sea shells'))

        

    console.log("Prompt 7: ")
        function longestWordInString(str) {
            var strSplit = str.split(' ');
            var longestWordLength = 0;
                for(var i = 0; i < strSplit.length; i++){
                    if(strSplit[i].length > longestWordLength){
                        longestWordLength = strSplit[i].length;
                        longestWord = strSplit[i]
                    }
                }
            return longestWord;
        }
    console.log(longestWordInString('Welcome to the developmental shop provided by Code Differently'))

    
console.log("Prompt 8: ")
function multiply(a, b) {
    return  a * b
}
console.log(multiply(4, 5))


console.log("Prompt 9: ")
var elements = ['Code', 'Differently']
function array(arr) {
    return arr
}
console.log(array(elements))


console.log("Prompt 10: ")
function repeatedChar(str) {
    const result = [];
  const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
  if (strArr != null) {
    strArr.forEach((elem) => {
      result.push(elem[0]);
    });
  }
  return result;
}     
console.log(repeatedChar('Happy Birthday'))


console.log("Prompt 11: ")
function calculateDogAge(age) {
    return (`Your doggie is ${age * 7} years old in dog years!`)
}
console.log(calculateDogAge(8))
console.log(calculateDogAge(3))
console.log(calculateDogAge(11))