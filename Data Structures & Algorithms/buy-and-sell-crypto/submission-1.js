class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = 1000;
        let maxProfit = 0;

        for (let i = 0; i< prices.length; i ++) {
            let currPrice = prices[i]
            let currProfit = currPrice - minPrice
            maxProfit = Math.max(currProfit, maxProfit)
            minPrice = Math.min(minPrice, currPrice)
        }

        return maxProfit
    }
}
