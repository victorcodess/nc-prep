class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) { // Time: O(v + e), Space: O(v + e)
        const graph = {};

        for (let [u, v, t] of times) {
            if (!(u in graph)) graph[u] = [];
            graph[u].push([v, t]);
        }

        const dist = new Array(n + 1).fill(Infinity);

        this.sendSignal(graph, dist, k, 0);

        const minTime = Math.max(...dist.slice(1));

        return minTime === Infinity ? -1 : minTime;
    }

    sendSignal(graph, dist, node, time) {
        if (time >= dist[node]) return;

        dist[node] = time;

        if (!graph[node]) return;

        for (let [next, weight] of graph[node]) {
            this.sendSignal(graph, dist, next, time + weight);
        }
    }
}
