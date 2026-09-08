class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) { // Time: O(n^2), Space: O(n)
        if (!nums.length) return 0;

        let maxSeq = 1;
        const memo = new Map();

        for (let i = 0; i < nums.length; i++) {
            const currSeq = this.findSeq(nums, i, memo);
            maxSeq = Math.max(maxSeq, currSeq);
        }

        return maxSeq;
    }

    findSeq(nums, i, memo) {
        if (memo.has(i)) return memo.get(i);
        if (i >= nums.length) return 0;

        let maxSeq = 1;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] <= nums[i]) continue;

            const candSeq = 1 + this.findSeq(nums, j, memo);
            maxSeq = Math.max(maxSeq, candSeq);
        }

        memo.set(i, maxSeq);
        return memo.get(i);
    }
}
