/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr.sort((a,b) => a - b);
    let res = arr[0] - arr[1];
    for (let i = 0; i < arr.length-1; i++) {
        if( res != (arr[i] - arr[i + 1]) ){
            return false;
        }
    }
    return true

};