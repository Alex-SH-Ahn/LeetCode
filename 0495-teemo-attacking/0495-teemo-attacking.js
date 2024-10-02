/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let sum=0;
    let prev=0;
    for (let i=0;i<timeSeries.length;i++) {
        let currentStart=timeSeries[i];
        let currentEnd=currentStart+duration;
        if (currentStart<prev){
            sum+=currentEnd-prev;
        } else {
            sum+=duration;
        }
        prev=currentEnd;
    }
    return sum;
};