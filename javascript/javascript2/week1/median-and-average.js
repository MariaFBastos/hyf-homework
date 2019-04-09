const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

let sumArr = 0;
let averageArr = 0;
function getAverage(arr){
    //sum the items of the array
    for (let i = 0; i < arr.length; i++){
        sumArr += arr[i];
    }
    averageArr = sumArr / arr.length;
    return averageArr
}
getAverage(housePrices);

let minNum = 0;
let maxNum = 0;
let medianResult = 0;
function getMedian(arr){
    //search for the smallest and the biggest number in the array
    //https://www.jstips.co/en/javascript/calculate-the-max-min-value-from-an-array/
    minNum = Math.min(...arr);
    maxNum = Math.max(...arr);
    medianResult = (minNum + maxNum)/2
    return medianResult
}

getMedian(housePrices)