/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr=candies.map((e)=>e+extraCandies);
    console.log(`new arr:${arr}`);
    const max = Math.max(...candies);
    console.log(`max: ${max}`);
    let res = arr.map((num, i)=>{
        if (num >= max) return true;
        else return false;
    });
    console.log(res);
    return res;
};