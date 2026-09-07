class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) { // Time: O(n), Space: O(1)
        let maxP = nums[0];
        let minP = nums[0];
        let result = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const curr = nums[i];

            const prevMaxP = maxP;
            const prevMinP = minP;
            
            maxP = Math.max(curr, curr * prevMaxP, curr * prevMinP);
            minP = Math.min(curr, curr * prevMaxP, curr * prevMinP);

            result = Math.max(result, maxP);
        }

        return result;
    }
}
