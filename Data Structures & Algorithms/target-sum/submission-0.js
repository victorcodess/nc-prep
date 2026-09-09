class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target, sum = 0, i = 0, memo = new Map()) { // Time: O(n * t), Space: O(n * t)
        if (i === nums.length) return Number(sum === target);

        const key = i + "," + sum;
        if (memo.has(key)) return memo.get(key);

        const addCurr = this.findTargetSumWays(nums, target, sum + nums[i], i + 1, memo);
        const subCurr = this.findTargetSumWays(nums, target, sum - nums[i], i + 1, memo);

        const result = addCurr + subCurr;

        memo.set(key, result);
        return result;

    }
}
