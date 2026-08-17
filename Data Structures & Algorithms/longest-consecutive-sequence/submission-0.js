class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) { // Time: O(n), Space: O(n)
        const seen = new Set(nums);
        let count = 0;
        let i = 0;

        while (i < nums.length) {
            if (!seen.has(nums[i] - 1)) {
                let num = nums[i] + 1;
                let currCount = 1;

                while (seen.has(num)) {
                    currCount++;
                    num++;
                }
                
                count = Math.max(count, currCount);
            }

            i++;
        }

        return count
    }
}
