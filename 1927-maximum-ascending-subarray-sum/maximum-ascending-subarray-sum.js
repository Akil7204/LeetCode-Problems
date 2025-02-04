/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let sum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {   
            maxSum = Math.max(maxSum, sum); 
            sum = 0;
        }
        sum += nums[i];
    }
    maxSum = Math.max(maxSum, sum);

    return maxSum;
};