/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortest = strs[0];

    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i];
        }
    }

    let prefix='';
    for (let i = 0; i < shortest.length; i++) {
        let char = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix
};