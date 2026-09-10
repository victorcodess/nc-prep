class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) { // Time: O(n), Space: O(n)
        const n = nums.length;
        let l = 0;
        let r = 0;
        let minJumps = 0;

        while (r < n - 1) {
            let maxJump = 0;
            
            for (let i = l; i <= r; i++) {
                maxJump = Math.max(maxJump, i + nums[i]);
            }

            l = r + 1;
            r = maxJump;
            minJumps++;
        }
        
        return minJumps;
    }
}
