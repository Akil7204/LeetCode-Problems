/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {

    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let sub = [];
        let temp = 0;
        for(let j = i; j < arr.length; j++){
            sub.push(arr[j]);
            temp += arr[j];
            if(sub.length % 2 == 1){
                sum += temp;
            }
        }
    }
    return sum

};