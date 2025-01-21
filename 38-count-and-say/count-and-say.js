/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var str = '1';
    for (var i = 1; i < n; i++) {
        var strArray = str.split('');
        str = '';
        var count = 1;
        for (var j = 0; j < strArray.length; j++) {
            if (strArray[j] !== strArray[j + 1]) {
                str += count + strArray[j];
                count = 1;
            }
            else {
                count++;
            }
        }
    }
    return str;
};