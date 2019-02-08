function validateString(str){
    
    str.trim();
    noOfCurlyOpeners = (str.match(/{/g)||[]).length;
    noOfCurlyClosers = (str.match(/}/g)||[]).length;
    noOfSquareOpeners = str.split('[').length - 1;
    noOfSquareClosers = str.split(']').length - 1;
    noOfRoundOpeners = str.split('[').length - 1;
    noOfRoundClosers = str.split(']').length - 1;
    
    let stack = [];
    
    str = str.replace(/[^{}()\]\[]/g, '');
    // console.log(str);
    if (noOfCurlyOpeners != noOfCurlyClosers  ){
      return 'false';
    }
    if (noOfSquareOpeners != noOfSquareClosers  ){
      return 'false';
    }
    if (noOfRoundOpeners != noOfRoundClosers  ){
      return 'false';
    }
  
    
//     if (str[1] == ']' || str[1] == ')' ){
//         return false;
//       }

    
    let closers = {
      '{': '}',
      '[': ']',
      '(': ')',
    };
    
    str.split('').forEach(function(character, i){
      
      let position = i + 1;
      
      if(!~'({[)}]'.indexOf(character)){
        
       
        return;
        
      } else if(~'({['.indexOf(character)){
        
        stack.push(character);
        
      } else if(!stack.length){
        
        return false;
        
      } else if(~')}]'.indexOf(character)){
        
        let characterToClose = stack.pop();
        let expectedCloser = closers[characterToClose];
        
        if(character !== expectedCloser){
            return false;
        }
      }
    });
    
   
    if(stack.length){
        return false;
    }
    
    return true;
    
  }
  // console.log(validateString("{ [ ( ] ) }" ));
 
function validateCode(stringToBeValidated){
  console.log(validateString(stringToBeValidated));
}

const stringToBeValidated = '{ [ ( ] ) }';
window.onload = console.log(validateString(stringToBeValidated));
