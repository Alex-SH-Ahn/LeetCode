/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let sub=s.slice(0,k);
    const vowels='aeiou';
    let maxNum=0;
    for(let i=0;i<sub.length;i++){
        if(vowels.includes(sub[i])) maxNum++;
    }
    console.log('1: ',maxNum);
    let num=maxNum

    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])) num--;
        if(vowels.includes(s[k+i])) num++;
        maxNum=Math.max(num, maxNum);
        if(maxNum===k) break;
    }
    return maxNum;
};