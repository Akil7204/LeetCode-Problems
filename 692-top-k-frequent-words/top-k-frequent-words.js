/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {};

    for(let char of words){
        obj[char] = (obj[char] || 0) + 1;
    }

    let sorted = Object.keys(obj).sort((a,b) => {
        if(obj[a] == obj[b]) {
            return a > b ? 1 : -1
        } else {
            return obj[b] - obj[a];
        }
    });

    return sorted.slice(0, k);
};