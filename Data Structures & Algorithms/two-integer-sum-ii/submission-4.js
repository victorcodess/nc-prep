class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) { // Time: O(n), Space: O(n)
        const seen = new Map();

        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            const complement = target - num;

            if (seen.has(complement)) return [seen.get(complement) + 1, i + 1];
            seen.set(num, i);
        }

        return [];
    }
}
