class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) { // Time: O(nlog(n)), Space: O(n)
        const maxHeap = new MaxPriorityQueue(num => num[0]);
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            maxHeap.enqueue([nums[i], i]);

            if (i >= k - 1) {
                while (maxHeap.front()[1] <= i - k) {
                    maxHeap.dequeue();
                }

                result.push(maxHeap.front()[0]);
            }  
        }

        return result;
    }
}
