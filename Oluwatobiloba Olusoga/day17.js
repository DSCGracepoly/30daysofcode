function wordReverse(word, alertOrConsole) {
    wordArray = word.split("");                         //converts word to an array of characters
    wordArrayReversed = wordArray.reverse();              //reverse the order of characters in the array
    wordReversed = wordArrayReversed.join("");          //converts the reversed array to word
    if (alertOrConsole){
        alert('The reverse of \"' + word + '\" is \"' + wordReversed + '\"');
    }
    else{
        console.log('The reverse of \"' + word + '\" is \"' + wordReversed + '\"');
    }
};

const word = "a cat";
window.onload = wordReverse(word, false);
