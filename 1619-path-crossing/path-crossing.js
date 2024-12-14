/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {

    let x = 0;
    let y = 0;
    let isVisited = new Set()
    isVisited.add(`${x},${y}`);

    for(let char of path){
        if(char == 'N'){
            x++;
        } else if (char == 'S'){
            x--;
        } else if (char == 'E'){
            y++;
        } else if(char == 'W'){
            y--;
        }
        const curr = `${x},${y}`
        if(isVisited.has(curr)){
            return true
        }

        isVisited.add(curr);
    }

    return false;
    
};