/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {

    if (nums.length == 1) return 0

    nums.sort((a, b) => a - b);

    let left = 0;
    let right = k - 1;
    let min = nums[nums.length-1];

    while (right < nums.length) {
        min = Math.min(nums[right] - nums[left], min)
        left++
        right++
    }
    
    return min
};