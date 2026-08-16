class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();

        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const numPairs = [...freq.entries()];

        numPairs.sort((pairA, pairB) => pairB[1] - pairA[1]);

        return numPairs.slice(0, k).map(pair => pair[0]);
    }
}
