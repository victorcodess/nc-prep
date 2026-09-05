class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) { // Time: O(E * K * log(V * K)), Space: O(V * K + E)
        const graph = new Map();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (let [f, t, p] of flights) {
            graph.get(f).push([t, p]);
        }

        const minHeap = new MinPriorityQueue((path) => path[1]);
        minHeap.enqueue([src, 0, 0]);
        const costs = new Map();

        while (!minHeap.isEmpty()) {
            const [airport, cost, stops] = minHeap.dequeue();

            if (airport === dst) return cost;

            if (stops > k) continue;
            
            const key = airport + "," + stops;
            if (costs.has(key) && costs.get(key) <= cost) continue;
            costs.set(key, cost);

            for (let [nextPort, nextCost] of graph.get(airport)) {
                minHeap.enqueue([nextPort, cost + nextCost, stops + 1]);
            }
        }

        return -1;
    }
}
