/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shrt = strs[0];

    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shrt.length) {
            shrt = strs[i];
        }
    }

    let res='';
    for (let i = 0; i < shrt.length; i++) {
        let char = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return res;
            }
        }
        res += char;
    }
    
    return res
};