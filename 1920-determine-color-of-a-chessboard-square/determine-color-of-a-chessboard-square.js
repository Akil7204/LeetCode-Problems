/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    let row = coordinates.charCodeAt(0) - 96;
    let column = coordinates[1];
    if (row % 2 == 0) {
        return column % 2 != 0;
    } else {
        return column % 2 == 0;
    }
};