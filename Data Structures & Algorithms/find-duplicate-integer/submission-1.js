class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) { // Time: O(n), Space: O(n)
        // meet fast and slow1
        let slow1 = 0, fast = 0;

        while (true) {
            slow1 = nums[slow1];
            fast = nums[nums[fast]];

            if (slow1 === fast) break;
        }

        // meet slow 2 and slow
        let slow2 = 0;

        while (true) {
            slow1 = nums[slow1];
            slow2 = nums[slow2];

            if (slow1 === slow2) break;
        }

        // return slow
        return slow1;
    }
}
