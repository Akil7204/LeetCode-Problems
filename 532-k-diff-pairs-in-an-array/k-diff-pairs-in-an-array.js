/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {

    let obj = {};

    for(let value of nums){
        obj[value] = (obj[value] || 0) + 1
    }
    console.log(obj)
    let count = 0;
    Object.keys(obj).forEach((key) => {
        if(k === 0){
            if(obj[key] > 1) {
                count++;
            }
        } else if (obj[Number(key) + k]){
            count++
        }
    });

    return count
};