/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // while (prices) {
    //     let max = Math.max(...prices);
    //     let min = Math.min(...prices);
    //     if (prices.indexOf(min) > prices.indexOf(max)) {
    //         console.log(`max: ${max}`);
    //         prices.splice(prices.indexOf(min), 1);
    //     } else {
    //         return max - min;
    //     }
    // }
    // return 0;

    // let max = Infinity;
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i; j < prices.length; j++) {
    //         let diff = prices[i] - prices[j];
    //         if (diff < 0 && diff < max) max = diff;
    //     }
    // }
    // if (max > 0) return 0
    // return Math.abs(max)

    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;
};