/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let value of grid){
        for(let val of value){
            if(val < 0){
                count++
            }
        }
    }
    return count
    
};