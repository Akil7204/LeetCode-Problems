/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    let count = 0
    const arr=[];
    for(let i = 0;i<n;i++){
        arr.push(nums[i],nums[n+i]);
        count++
    }
    return arr
    

};