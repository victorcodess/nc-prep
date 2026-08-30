class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target, start = 0) { // Time: O(n ** (t / m)), Space: O(t / m)
        if (target < 0) return [];
        if (target === 0) return [[]];

        const result = [];
        for (let i = start; i < nums.length; i++) {
            const withNum = this.combinationSum(nums, target - nums[i], i);

            for (let sub of withNum) {
                result.push([nums[i], ...sub]);
            }
        }

        return result;
    }
}
