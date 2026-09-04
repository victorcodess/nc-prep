class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) { // Time: O(e * log(v)), Space: O(v + e)
        const graph = new Map();

        for (let i = 1; i <= n; i++) {
            graph.set(i, []);
        }

        for (let [u, v, t] of times) {
            graph.get(u).push([v, t]);
        }

        const minHeap = new MinPriorityQueue((path) => path[1]);
        minHeap.enqueue([k, 0]);
        let t = 0;
        const visited = new Set();

        while (!minHeap.isEmpty()) {
            const [n1, w1] = minHeap.dequeue();
            if (visited.has(n1)) continue;
            visited.add(n1);

            t = w1;

            for (let [n2, w2] of graph.get(n1)) {
                if (!visited.has(n2)) {
                    minHeap.enqueue([n2, w1 + w2]);
                }
            }
        }

        return visited.size === n ? t : -1;
    }
}
