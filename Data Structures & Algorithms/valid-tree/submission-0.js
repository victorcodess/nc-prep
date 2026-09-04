class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) { // Time: O(v + e), Space: O(v + e);
        const graph = {};

        for (let i = 0; i < n; i++) {
            graph[i] = [];
        }
 
        for (let [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const visited = new Set();

        if (this.findCycle(graph, 0, null, visited)) {
            return false;
        }

        return visited.size === n;
    }

    findCycle(graph, node, prev, visited) {
        if (visited.has(node)) return true;

        visited.add(node);

        for (let next of graph[node]) {
            if (next === prev) continue;

            if (this.findCycle(graph, next, node, visited)) {
                return true;
            }
        }
        
        return false;
    }
}
