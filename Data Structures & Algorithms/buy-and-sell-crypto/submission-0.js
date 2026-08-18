class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) { // Time: O(n * n), Space: O(1)
        let maxP = 0;

        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                if (prices[j] < prices[i]) continue;

                const profit = prices[j] - prices[i];
                maxP = Math.max(profit, maxP);
            }
        }

        return maxP;
    }
}
