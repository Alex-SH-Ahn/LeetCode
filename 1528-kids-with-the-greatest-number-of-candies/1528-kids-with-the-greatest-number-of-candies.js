/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr=candies.map((e)=>e+extraCandies);
    const max = Math.max(...candies);
    let res = arr.map((num, i)=>{
        if (num >= max) return true;
        else return false;
    });
    return res;
};