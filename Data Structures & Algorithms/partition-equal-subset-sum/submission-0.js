class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) { // Time: O(n * t), Space: O(n * t)
        if (!nums.length) return true;

        const sum = nums.reduce((acc, curr) => acc + curr, 0);

        if (sum % 2 !== 0) {
            return false;
        } else {
            const target = sum / 2;
            const memo = new Map();

            return this.findPartition(nums, 0, target, memo);
        }
    }

    findPartition(nums, i, target, memo) {
        if (target === 0) return true;
        if (target < 0) return false;
        if (i >= nums.length) return false;

        const key = i + "," + target;
        if (memo.has(key)) return memo.get(key);

        const take = this.findPartition(nums, i + 1, target - nums[i], memo);

        const dontTake = this.findPartition(nums, i + 1, target, memo);

        memo.set(key, take || dontTake);
        return memo.get(key);
    }
}
