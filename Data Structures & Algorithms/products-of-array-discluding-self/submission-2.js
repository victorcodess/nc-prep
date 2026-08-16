class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) { // Time: O(n), Space: O(n)
        const result = new Array(nums.length).fill(1);
        let prefixProd = 1;
        let postfixProd = 1;

        for (let i = 0; i < nums.length; i++) {
            result[i] *= prefixProd;
            prefixProd *= nums[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= postfixProd;
            postfixProd *= nums[i];
        }

        return result;
    }
}
