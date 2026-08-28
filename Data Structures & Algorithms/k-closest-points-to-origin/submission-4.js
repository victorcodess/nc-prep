class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) { // Time: O(nlogk), Space: O(k)
        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

        for (const [x, y] of points) {
            const dist = x * x + y * y;

            maxHeap.push([dist, x, y]);

            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }

        const result = [];

        while (maxHeap.size()) {
            const [_, x, y] = maxHeap.pop()
            result.push([x, y]);
        }

        return result;
    }
}
