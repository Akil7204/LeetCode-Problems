/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let answer = 0;
    for (let row of grid) {
        row.sort((a, b) => b - a);
    }
   
    while (grid[0].length > 0) {
        let max = 0;
        for (let row of grid) {
             console.log(row)
            max = Math.max(max, row.shift());
        }
        answer = answer + max;
    }
    return answer;
};