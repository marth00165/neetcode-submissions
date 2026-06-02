class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = 1000;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i ++) {
            let price = prices[i];

            minPrice = Math.min(price, minPrice);

            maxProfit = Math.max(maxProfit, price - minPrice)
        }

        return maxProfit;
    }
}
