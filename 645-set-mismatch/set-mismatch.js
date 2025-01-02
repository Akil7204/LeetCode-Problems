/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let first = 0;
    let second = 0;

    let count = new Array(nums.length + 1).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] += 1;
    }
    console.log(count);
    for (let j = 0; j < count.length; j++) {
        if (count[j] > 1) {
            first = j;
        }
        if (count[j] == 0) {
            second = j;
        }
    }

    return [first, second];
};