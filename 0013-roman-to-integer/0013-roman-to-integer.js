/**
 * @param {string} s
 * @return {number}
 */
const numbers =  {
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
        if (numbers[s[i+1]] > numbers[s[i]]) {
            sum+=(numbers[s[i+1]] - numbers[s[i]]);
            i++;
        } else {
            sum+=numbers[s[i]];
        }
    }
    return sum;
};