/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let sum = 0;
    let result = []
    for(let i = 0; i < k; i++){
        let max = Math.max(...gifts);
        let index = gifts.indexOf(max);
        let value = Math.floor(Math.sqrt(max))
        gifts[index] = value
    }
    for(let i = 0; i < gifts.length; i++){
        sum += gifts[i]
    }
    return sum;
};