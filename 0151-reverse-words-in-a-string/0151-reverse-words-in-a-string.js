/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.trim().split(/\s+/); // trim blank spaces & split them into words
    let tmp=s.length-1;
    for(let i=0;i<s.length/2;i++){
        [s[i], s[tmp]] = [s[tmp], s[i]];
        tmp--;
        console.log(s);
    }
    return s.join(' ')
};