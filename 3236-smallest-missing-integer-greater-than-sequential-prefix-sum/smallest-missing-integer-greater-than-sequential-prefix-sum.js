/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    let sum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + 1 === nums[i]) { 
            sum += nums[i] 
        } else {
            break;
        }
    }

    if (!nums.includes(sum)) return sum

    while (nums.includes(sum)) {
        sum += 1
    }

    return sum

};