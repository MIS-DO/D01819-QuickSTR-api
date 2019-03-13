const quickSort = require('quick-srt');

var cant = 15;
var max = 1000;
var numsArr = [];
for (let index = 0; index < cant; index++) {
    numsArr.push(
        Math.ceil(
            (Math.random() * max + 1) - 1
        ));

}
//let numsArr = [46, 24, 33, 10, 2, 81, 50];
console.log(quickSort(numsArr));
// => [ 2, 10, 24, 33, 46, 50, 81 ]



function qsProblem(arr, number, size) {
    var numsArr = [];
    for (let index = 0; index < number; index++) {
        numsArr.push(
            Math.ceil(
                (Math.random() * size + 1) - 1
            ));
    }
    if (number < 0) {
        numsArr = arr;
    } 
        return (quickSort(numsArr));
}


//let lettersArr = ['d', 'h', 'z', 'a', 'r', 'b', 'i'];
//console.log(quickSort(lettersArr));
// => [ 'a', 'b', 'd', 'h', 'i', 'r', 'z' ]

//let wordsArr = ['happy', 'auto', 'energy', 'zoo', 'trigonometry', 'dog', 'foo'];
//console.log(quickSort(wordsArr));
// => [ 'auto', 'dog', 'energy', 'foo', 'happy', 'trigonometry', 'zoo' ]
