/**
 * @param {string} s
 * @return {number}
 */
const num =  {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}
var romanToInt = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (num[s[i+1]] > num[s[i]]) {
            sum+=(num[s[i+1]] - num[s[i]]);
            i++;
        } else {
            sum+=num[s[i]];
        }
    }
    return sum;
};