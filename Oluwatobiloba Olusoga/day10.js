let binaryString = '';

function convertToBinary(num){
  console.log('first ' + binaryString);
  binaryString = num % 2 + binaryString;
  if (num > 1){
    convertToBinary(Math.trunc(num/2));
  }
  console.log(binaryString);
  
}

function resetBinaryString(num){
  binaryString = '';           
  convertToBinary(num);
}

const numToBeConverted = 4;
window.onload = convertToBinary(numToBeConverted);
