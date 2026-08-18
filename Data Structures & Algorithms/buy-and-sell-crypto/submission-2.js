class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) { // Time: O(n), Space: O(1)
        let maxP = 0;
        let minBuy = prices[0];

        for (let sell of prices) {
            maxP = Math.max(sell - minBuy, maxP);
            minBuy = Math.min(sell, minBuy);
        }

        return maxP;
    }
}
