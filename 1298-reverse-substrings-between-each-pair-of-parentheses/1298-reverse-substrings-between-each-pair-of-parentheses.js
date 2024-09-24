/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(answer);
            answer = '';
        }

        else if (s[i] === ')') {
            answer = stack.pop() + answer.split('').reverse().join('');
        }

        else {
            answer += s[i];
        }
        
    }

    return answer;
};