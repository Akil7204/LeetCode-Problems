/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {

    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let res = [];
    res[0] = [...set1].filter(x => !set2.has(x));
    res[1] = [...set2].filter(x => !set1.has(x));
    
    return res
};