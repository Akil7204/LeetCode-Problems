/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {

    const result = [];

    for (let i = 0; i < nums.length - 1; i += 2) {
        const freq = nums[i]
        const val = nums[i + 1]
        for (let j = 0; j < freq; j++) {
            result.push(val)
        }
    }
    return result;

};