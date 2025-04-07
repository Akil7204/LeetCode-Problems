/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {

    let count = 0;
    let p = false
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(allowed.includes(words[i][j])){
                p = true;
            } else {
                p = false;
                break;
            }
           
        }
        if(p){
            count++
            p = false
        }
    }
    return count
};