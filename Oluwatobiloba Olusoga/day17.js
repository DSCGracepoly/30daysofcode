function findUniqueChars(str){
    let chars = [];
    for (i = 0; i < str.length; i++){
        if (str.lastIndexOf(str[i]) == str.indexOf(str[i])){
            chars.push(str[i]);
        }
    }
      console.log(chars);
}
const stringToBeSearched = "this is";
window.onload = findUniqueChars(stringToBeSearched);
