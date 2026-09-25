class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) { // Time: O(n^3), Space: O(n^2)
        nums = [1, ...nums, 1];
        const memo = new Map();

        function dfs(l , r) {
            if (l > r) return 0;
            
            const key = l + "," + r;
            if (memo.has(key)) return memo.get(key);

            let maxCoins = 0;

            for (let k = l; k <= r; k++) {
                const coins = nums[l - 1] * nums[k] * nums[r + 1];

                const total = dfs(l, k - 1) + coins + dfs(k + 1, r);
                maxCoins = Math.max(maxCoins, total);
            }
            
            memo.set(key, maxCoins);
            return maxCoins;
        }


        return dfs(1, nums.length - 2);
    }
}
