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
            sum+=(numbers[s[i+1]] - numbers[s[i]]); // 다음 글자의 값이 더 크다면
            i++; // has to move on to i+2
        } else {
            sum+=numbers[s[i]];
        }
    }
    return sum;
};