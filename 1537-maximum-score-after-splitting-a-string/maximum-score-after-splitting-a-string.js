/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {

    let sumOne = 0;
    let sumZero = 0;
    let maxSum = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] == '1'){
            sumOne++;
        }
    }

    for(let i = 0; i < s.length-1; i++){
        if(s[i] == '0'){
            sumZero++;
        } else {
            sumOne--;
        }
        maxSum = Math.max(maxSum, (sumZero + sumOne));
    }

    return maxSum 
};