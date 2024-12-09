/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let hash = {};

    for (let val of s) {
        hash[val] = (hash[val] || 0) + 1;
    }

    let sortedString = Object.keys(hash).sort(function (a, b) { return hash[b] - hash[a] })

    let result = "";
    for (let item of sortedString) {
        result = result + item.repeat(hash[item])
    }

    return result;

};