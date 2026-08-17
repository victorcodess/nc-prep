class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) { // Time: O(n * n), Space: O(n)
        const result = [];
        const triplets = new Set();

        for (let i = 0; i < nums.length; i++) {
            const seen = new Map();
            const target = 0 - nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                const complement = target - nums[j];
                if (seen.has(complement)) {
                    const key = [nums[i], complement, nums[j]].sort().join(",");

                    if (!triplets.has(key)) {
                        triplets.add(key);
                        result.push([nums[i], complement, nums[j]]);
                    }
                }

                seen.set(nums[j], j);
            }
        }

        return result;
    }
}
