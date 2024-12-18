/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];

    function a(start, current){
        res.push([...current]);
        for(let i = start; i < nums.length; i++){
            current.push(nums[i]);
            a(i+1, current);
            current.pop();
        }
    }

    a(0, []);
    return res;
};