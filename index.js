const array = [442,123,135,643,234,765,23,7,908]

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    const arrLeft = mergeSort(arr.slice(0, Math.round(arr.length / 2)));
    const arrRight = mergeSort(arr.slice(Math.round(arr.length / 2), arr.length));
    const sortedArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!arrLeft[0]){
            sortedArr.push(arrRight.shift());
        }else if(!arrRight[0]){
            sortedArr.push(arrLeft.shift());
        }else if(arrLeft[0] < arrRight[0]){
            sortedArr.push(arrLeft.shift());
        }else{
            sortedArr.push(arrRight.shift());
        }
    }
    return sortedArr;

}

console.log(mergeSort(array));