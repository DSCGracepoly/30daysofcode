function numberSorter() {
    let numbers = [];

    for (i = 1; i < 51; i++){
      numbers[i-1] = i;
    }                                                              // created an array with numbers 1 to 51

    for (j =1; j <= numbers.length / 2; j++){                     // loop through elements in the array
        if (numbers[j] % 2 == 0){                                
            numbers.splice(numbers.length, 0, numbers[j])        //  if element is an even number splice to the end of the number
            numbers.splice(j, 1);                               // and delete from former postion
        }
    }
    console.log(numbers);
};

window.onload = numberSorter();