class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target, start = 0) { // Time: O(2 ** (T / M)), Space: O(T / M)
        if (start === 0) candidates.sort();
        if (target === 0) return [[]];
        if (target < 0) return [];

        let result = [];

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            // if (candidates[i] > target) break;

            const subsets = this.combinationSum2(candidates, target - candidates[i], i + 1);

            for (let sub of subsets) {
                    result.push([candidates[i], ...sub]);
            }
        }

        return result;
    }
}
