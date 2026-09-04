class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) { // Time: O(n^2 * log(n)), Space: O(n^2)
        const N = points.length;
        const conns = new Map();

        for (let i = 0; i < N; i++) {
            conns.set(i, []);
        }

        for (let i = 0; i < N; i++) {
            for (let j = i + 1; j < N; j++) {
                const x1 = points[i][0], x2 = points[j][0];
                const y1 = points[i][1], y2 = points[j][1];

                const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);

                conns.get(i).push([dist, j]);
                conns.get(j).push([dist, i]);
            }
        }

        let minCost = 0;
        const minHeap = new MinPriorityQueue((path) => path[0]);
        const visited = new Set();
        minHeap.enqueue([0, 0]);

        while (visited.size < N) {
            const [cost, i] = minHeap.dequeue();
            if (visited.has(i)) continue;
            visited.add(i);

            minCost += cost;

            for (let [nextCost, next] of conns.get(i)) {
                if (!visited.has(next)) {
                    minHeap.enqueue([nextCost, next]);
                }
            }
        }

        return minCost;
    }
}
