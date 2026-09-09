class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) { // Time: O(nlog(n)), Space: O(n)
        intervals.sort((a, b) => a[0] - b[0]);

        let count = 0;
        let prevEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            const [currStart, currEnd] = intervals[i];

            if (currStart < prevEnd) {
                count++;
                prevEnd = Math.min(prevEnd, currEnd);
            } else {
                prevEnd = currEnd;
            }
        }

        return count;
    }
}
