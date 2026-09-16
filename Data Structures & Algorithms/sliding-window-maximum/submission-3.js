class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) { // Time: O(n), Space: O(n)
        const result = [];
        const deque = [];

        for (let right = 0; right < nums.length; right++) {
            while (deque.length && nums[deque[deque.length - 1]] <= nums[right]) {
                deque.pop();
            }

            deque.push(right);

            while (deque[0] <= right - k) {
                deque.shift();
            }

            if (right >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }
        
        return result;
    }
}
