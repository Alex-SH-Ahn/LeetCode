/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    nums.forEach(function (element) {
        obj[element] = (obj[element] || 0) + 1;
    });
    return Number(Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b));
};