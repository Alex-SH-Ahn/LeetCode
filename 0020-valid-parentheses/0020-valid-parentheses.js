var isValid = function(s) {
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (brackets.hasOwnProperty(s[i])) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0 || brackets[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};


