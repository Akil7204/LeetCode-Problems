/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    costs = costs.sort((a, b) => (b[0] - b[1]) - (a[0] - a[1]));
    let minCost = 0;
    for (let i = 0; i < costs.length / 2; i++) {
        minCost += costs[i][1];
    }
    for (let i = costs.length / 2; i < costs.length; i++) {
        minCost += costs[i][0];
    }
    return minCost;

};