function checkDuplicates(str){
    let uniqueStr = [... new Set (str.split(''))].join('');
    console.log(uniqueStr);
}
