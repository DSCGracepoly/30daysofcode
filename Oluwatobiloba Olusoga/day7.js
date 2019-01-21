function objectToArray(obj) {
    
    let twoDArray = Object.entries(obj);
    
    console.log(twoDArray);
};

const obj = { a: 1, b: 2, c: 3, d: 4 };
window.onload = objectToArray(obj);