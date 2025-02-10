/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {

    let first = Infinity;
    let second = Infinity;

    for(let val of nums){
        if(val <= first){
            first = val;
        } else if (val <= second){
            second = val;
        } else {
            return true;
        }
    }
    return false;
    
};