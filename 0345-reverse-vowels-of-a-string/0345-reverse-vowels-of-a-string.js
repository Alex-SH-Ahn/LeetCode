// /**
//  * @param {string} s
//  * @return {string}
//  */
var reverseVowels = function(s) {
    let chars=s.split('');
    let j=s.length-1;
    let vowels='aeiouAEIOU'
    for(let i=0;i<j;i++){
        if (vowels.includes(chars[i])) {
            while(!vowels.includes(chars[j])) j--;
            [chars[i], chars[j]] = [chars[j], chars[i]];
            j--;
        }
    }
    return chars.join('');
};