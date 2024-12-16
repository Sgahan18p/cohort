
//.sort() only works for array so thye string first conveerted to array by .split('') and then sorted

function isAnagram(str1,str2){
let Sort1=str1.split('').sort().join();
let Sort2=str2.split('').sort().join();
if (Sort1===Sort2){
    console.log("Yes it is an Anagram")
}else{
    console.log("Noo it is not an Anagram")
}
}

isAnagram("abcd" , "dcba");