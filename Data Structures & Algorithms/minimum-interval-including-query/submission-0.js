class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) { // Time: O(nlog(n) + mlog(m)), Space: O(n + m)
        intervals.sort((a, b) => a[0] - b[0]);
        queries = queries.map((q, i) => [q, i]);
        queries.sort((a, b) => a[0] - b[0]);

        const result = new Array(queries.length).fill(0);
        const minHeap = new MinPriorityQueue((q) => q[0]);

        let i = 0;

        for (let [qry, idx] of queries) {
            while (i < intervals.length && intervals[i][0] <= qry) {
                const [l, r] = intervals[i];
                const length = r - l + 1;
                minHeap.enqueue([length, r]);

                i++;
            }

            while (!minHeap.isEmpty() && minHeap.front()[1] < qry) {
                minHeap.dequeue();
            }

            result[idx] = minHeap.isEmpty() ? -1 : minHeap.front()[0];
        }


        return result;
    }
}
