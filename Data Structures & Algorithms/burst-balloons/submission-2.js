class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums, i = 0, memo = new Map()) { // Time: O(n * m), Space: O(n * m)
        if (nums.length === 0) return 0;
        if (i >= nums.length) return -Infinity;

        const key = nums.join("") + "," + i;
        if (memo.has(key)) return memo.get(key);

        const prev = nums[i - 1] ?? 1;
        const next = nums[i + 1] ?? 1;
        const coins = prev * nums[i] * next;
        const newNums = [...nums.slice(0, i), ...nums.slice(i + 1)];

        const burst = coins + this.maxCoins(newNums, 0, memo);
        const skip = this.maxCoins(nums, i + 1, memo);

        memo.set(key, Math.max(burst, skip));
        return Math.max(burst, skip);
    }
}
