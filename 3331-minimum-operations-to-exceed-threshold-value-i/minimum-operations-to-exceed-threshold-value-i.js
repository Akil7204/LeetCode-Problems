/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {

    let result = 0;

    for(let val of nums){
        if(val < k) result++
    }
    return result
};