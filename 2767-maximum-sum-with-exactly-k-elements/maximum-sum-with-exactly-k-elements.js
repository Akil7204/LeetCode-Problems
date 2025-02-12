/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums.sort((a, b) => b-a);
    let sum = 0;
    for(let i = 0; i < k; i++){
        sum += nums[0];
        nums[0] = nums[0] + 1;
    }
    return sum
};