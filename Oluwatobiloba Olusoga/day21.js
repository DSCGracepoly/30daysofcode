const multiplyNums = firstOp => secondOp => console.log(firstOp + ' * ' + secondOp + ' = ' + firstOp * secondOp);

window.onload = multiplyNums(5)(6);
