class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) { // Time: O(v + e), Space: O(v + e)
        const graph = {};
        for (let [f, t] of tickets) {
            if (!(f in graph)) graph[f] = [];
            if (!(t in graph)) graph[t] = [];
            graph[f].push(t);
        }

        for (let f in graph) {
            graph[f].sort((a, b) => b.localeCompare(a));
        }

        const path = [];

        function dfs(f) {
            while (graph[f]?.length) {
                const t = graph[f].pop();
                dfs(t);
            }

            path.push(f);
        }

        dfs("JFK");

        return path.reverse();
    }
}
