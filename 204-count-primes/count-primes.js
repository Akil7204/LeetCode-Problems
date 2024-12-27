/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let array = [], upperLimit = Math.sqrt(n), output = [];

    for (let i = 0; i < n; i++) {
        array.push(true);
    }

    for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (array[i]) {
            output.push(i);
        }
    }
    return output.length;
};