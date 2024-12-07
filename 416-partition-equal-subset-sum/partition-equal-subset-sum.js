/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    if (sum % 2 == 1) {
        return false;
    }

    target = sum / 2;
    const dp = Array(target + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        for (let j = target; j >= num; j--) {
            if (dp[j - num]) {
                dp[j] = true;
            }
        }
    }

    return dp[target];


};