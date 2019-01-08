const alphaCounter = speech =>{
    speech = speech.toLowerCase();
    let alphaObject = {};
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','u','v','w','x','y','z']
    for(let i = 0; i < speech.length; i++){
        let isAlphabet = false;

        let letter = speech.charAt(i);
        
        for (let x = 0; x < alphabets.length; x++) {
            const currAlpha = alphabets[x];

            if(letter === currAlpha){
                isAlphabet = true;
            }
            
        }
        
        if (isAlphabet === false){
            continue;
        }
        if(!alphaObject[letter]){
            alphaObject[letter] = 1;
            continue;
        }
        alphaObject[letter] += 1;

    }

    return alphaObject;
}

console.log(alphaCounter("This book?? is in 2108 and I'm good"));
