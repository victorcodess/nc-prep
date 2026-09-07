class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) { // Time: O(a * c), Space: O(a)
        const memo = new Map();

        function findChange(coins, amount) {
            if (memo.has(amount)) return memo.get(amount);
            if (amount < 0) return Infinity;
            if (amount === 0) return 0;

            let minCoins = Infinity;

            for (let j = 0; j < coins.length; j++) {
                const coin = coins[j];
                const change = amount - coin;
                minCoins = Math.min(minCoins, findChange(coins, change));
            }

            memo.set(amount, 1 + minCoins);
            return memo.get(amount);
        }

        const result = findChange(coins, amount);

        if (result === Infinity) {
            return -1;
        } else {
            return result;
        }
    }
}
