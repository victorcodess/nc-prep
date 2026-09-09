class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins, i = 0, memo = new Map()) { // Time: O(n * a), Space: O(n * a)
        if (amount === 0) return 1;
        if (amount < 0 || i >= coins.length) return 0;

        const key = i + "," + amount
        if (memo.has(key)) return memo.get(key);

        const doTake = this.change(amount - coins[i], coins, i, memo);

        const dontTake = this.change(amount, coins, i + 1, memo);

        const result = doTake + dontTake;

        memo.set(key, result);
        return result;
    }
}
