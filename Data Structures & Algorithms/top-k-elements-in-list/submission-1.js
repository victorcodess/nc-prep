class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        let bucket = [[]];
        let result = [];

        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
            bucket.push([]);
        }

        for (let [numKey, freqValue] of freq) {
            bucket[freqValue].push(numKey);
        }

        for (let i = bucket.length - 1; i > 0; i--) {
            for (let num of bucket[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }
    }
}
