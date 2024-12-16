/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str){

    var reversed = str.split('').reverse().join('');
    if (str===reversed){
        console.log("yes it is palindrome");
    }else{
        console.log("no it is not palindrome");
    }
}

isPalindrome("aabaa");