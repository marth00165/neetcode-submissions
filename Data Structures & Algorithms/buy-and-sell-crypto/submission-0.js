class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = 1000;
        let maxProfit = 0;

        for (let day = 0; day < prices.length; day++) {
            let price = prices[day];
            minPrice = Math.min(price, minPrice);
            if (minPrice !== price) {
                let profit = price - minPrice;
                maxProfit = Math.max(profit, maxProfit)
            }
        }

        return maxProfit
    }
}
