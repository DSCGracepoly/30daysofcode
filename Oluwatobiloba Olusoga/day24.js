function permutateLetters(str){
    permutedLetters = [];
    for (i = 0; i < str.length; i++){
        for (j = 0; j < str.length; j++){
            let combo = '';
            if(j == 0){
                permutedLetters.push(str[i]);
            }
            else{
                for(k = 1; k <= j; k++){
                    combo += str[k];
                }
                permutedLetters.push(str[i] + combo);
            }
        } 
		console.log(permutedLetters)       
    }
}


permutateLetters('dog');
