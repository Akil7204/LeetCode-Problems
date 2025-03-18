/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    str = title.split(' ');
    let output = ' ';
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 2) {
            output += str[i][0].toUpperCase() + str[i].slice(1).toLowerCase() + " "
        } else {
            output += str[i].toLowerCase() + " "
        }

    }
    return output.trim();
};