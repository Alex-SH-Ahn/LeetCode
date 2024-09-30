/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let prefix = [nums[0]]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === (nums[i-1] + 1)){
            prefix.push(nums[i])
        } else {
            break
        }
    }
    let res = prefix.reduce((a, b) => a + b, 0)
    while(nums.includes(res)){
        res++
    }
    return res
};