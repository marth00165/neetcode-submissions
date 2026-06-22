class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = 1000;

        for (let i = 0; i < prices.length; i++) {
            let currentPrice = prices[i];
            minPrice = Math.min(minPrice, currentPrice);
            maxProfit = Math.max(maxProfit, currentPrice - minPrice);
        }


        return maxProfit


    }
}
