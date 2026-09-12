class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) { // Time: O(nlog(n)), Space: O(n)
        intervals.sort((a, b) => a[0] - b[0]);

        const stack = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const [prevS, prevE] = stack[stack.length - 1];
            const [currS, currE] = intervals[i];

            if (currS <= prevE) {
                const minS = Math.min(prevS, currS);
                const maxE = Math.max(prevE, currE);
                stack[stack.length - 1] = [minS, maxE];
            } else {
                stack.push(intervals[i]);
            }
        }

        return stack;
    }
}
