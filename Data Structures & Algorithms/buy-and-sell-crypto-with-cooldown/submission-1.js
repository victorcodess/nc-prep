class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices, i = 0, bought = null, memo = new Map()) { // Time: O(n), Space: O(n)
        if (i >= prices.length) return 0;

        const key = i + "," + bought;
        if (memo.has(key)) return memo.get(key);

        const curr = prices[i];

        if (bought === null) {
            const doBuy = this.maxProfit(prices, i + 1, curr, memo);
            const dontBuy = this.maxProfit(prices, i + 1, bought, memo);

            memo.set(key, Math.max(doBuy, dontBuy));
            return Math.max(doBuy, dontBuy);
        } else {
            const profit = curr - bought;

            const doSell = profit + this.maxProfit(prices, i + 2, null, memo);
            const dontSell = this.maxProfit(prices, i + 1, bought, memo);

            memo.set(key, Math.max(doSell, dontSell));
            return Math.max(doSell, dontSell);
        }
    }
}
