/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let obj = {};

    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if(target - num in obj){
            return [i, obj[target-num]]
        }
        obj[num] = i
    }
    
};