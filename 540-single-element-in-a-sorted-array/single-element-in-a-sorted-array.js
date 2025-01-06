/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

    let obj = {};
    for(let val of nums){
        obj[val] = (obj[val] || 0) + 1;
    }
    for(let val in obj){
        if(obj[val] == 1) return Number(val)
    }
    return 0
};