function arraySearch(arrayToBeSearched, searchText) {

    if (!Array.isArray(arrayToBeSearched)){
        arrayToBeSearched = arrayToBeSearched.split(",");
    }

    arrayToBeSearched.forEach(searchFunc);

    function searchFunc(element, index){
        if (element.indexOf(searchText) != -1){
            console.log("'" + element + "'" + ', ', index);
            alert("'" + element + "'" + ', ' + index);
        }
    }  
};

const arrayToBeSearched = ['a', 'the boy', 'cat'];
const searchText = 'boy';
window.onload = arraySearch(arrayToBeSearched, searchText);