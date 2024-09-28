/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortest = strs.reduce((a, b) => a.length > b.length ? b : a);
    let prefix='';
    for (let i = 0; i < shortest.length; i++) { // 가장 짧은 문자열의 길이만큼 순회
        let char = strs[0][i];
        let tf = true;
        for (let j = 0; j < strs.length; j++) { // 배열 순회
            if (strs[j][i] !== char) {
                tf = false;
                return prefix;
            }
        }
        prefix += (tf === false) ? '' : char;
    }
    return prefix
};