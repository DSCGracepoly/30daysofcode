function validateString(str){
    str.trim();
    noOfCurlyOpeners = (str.match(/{/g)||[]).length;
    noOfCurlyClosers = (str.match(/}/g)||[]).length;
    noOfSquareOpeners = str.split('[').length - 1;
    noOfSquareClosers = str.split(']').length - 1;
    noOfRoundOpeners = str.split('[').length - 1;
    noOfRoundClosers = str.split(']').length - 1;
    str = str.replace(/[^{}()\]\[]/g, '');

    if (noOfCurlyOpeners != noOfCurlyClosers  ){
      console.log(false);
      return;
    }
    if (noOfSquareOpeners != noOfSquareClosers  ){
        console.log(false);
        return;
    }
    if (noOfRoundOpeners != noOfRoundClosers  ){
        console.log(false);
        return;
    }
    stringLent = str.length;
    validateCode(str);
}
    
let noOfTimes = 0;
let stringLent = 0;
function validateCode(str){
    let stack = [];
    let closerIndex;
    if (noOfTimes == stringLent / 2  && str == ''){
        console.log(true);
        return;
    }
    else if(noOfTimes == stringLent / 2  && str.length >= 1){
        console.log(false);
        return;
    }

    for(i = 0; i < str.length; i++){
        if (str[i] == ']'){
            stack[0] = ']';
            stack[1] = '[';
            closerIndex = str.indexOf(']');
            break;
        }
        else if (str[i] == ')'){
            stack[0] = ')';
            stack[1] = '(';
            closerIndex = str.indexOf(')');
            break;
        }
        else if (str[i] == '}'){
            stack[0] = '}';
            stack[1] = '{';
            closerIndex = str.indexOf('}');
            break;
        }
    }

    if (str[str.indexOf(stack[0]) - 1] == stack[1]){
        str = str.slice(0, closerIndex - 1) + str.slice(closerIndex + 1, str.length);
      }
    else{
        console.log(false);
        return;
    }
    noOfTimes += 1;
    validateCode(str);
}

function validate(str){
    noOfTimes = 0;
    stringLent = 0;
    validateString(str);
}

const stringToBeValidated = '[ ] ( ) ';
window.onload = validateString(stringToBeValidated);
