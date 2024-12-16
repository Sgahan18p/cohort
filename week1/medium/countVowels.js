/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str){
    let strn = str.split('')
    var count=0;
    for(var i=0;i<=strn.length;i++){
        if(strn[i] === 'a' || strn[i] === 'e' || strn[i] === 'i' || strn[i] === 'o' || strn[i] === 'u'){
            count++;
        }
    }
    console.log(count);
}

function countVowels(str){
    let vowels = "aeiouAEIOU"
    var count=0;
    for(const char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    console.log(count);
}
countVowels("aaa");