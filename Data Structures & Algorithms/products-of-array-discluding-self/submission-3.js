class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) { // Time: O(n), Space: O(n)
        let totalProduct  = 1;
        let prodWOZero = 1;
        let numOfZeros = 0;
        const result = [];

        for (let num of nums) {
            totalProduct *= num;
            if (num !== 0) prodWOZero *= num;
            if (num === 0) numOfZeros++;
        }

        for (let num of nums) {
            if (numOfZeros === 0) {
                result.push(totalProduct / num);
            } else if (numOfZeros === 1 && num === 0) {
                result.push(prodWOZero);
            } else if (numOfZeros > 1 && num === 0) {
                result.push(0);
            } else {
                result.push(totalProduct / num);
            }
        }

        return result;
    }
}
