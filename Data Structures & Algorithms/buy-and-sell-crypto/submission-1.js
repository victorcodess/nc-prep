class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) { // Time: O(n), Space: O(1)
        let i = 0;
        let j = 1;
        let maxP = 0;

        while (j < prices.length) {
            if (prices[j] > prices[i]) {
                const price = prices[j] - prices[i];
                maxP = Math.max(maxP, price);
            } else {
                i = j;
            }

            j++;
        }

        return maxP;
    }
}
