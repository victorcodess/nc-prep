class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) { // Time: O(v + e), Space: O(v + e)
        const graph = {};

        for (let i = 0; i < numCourses; i++) {
            graph[i] = [];
        }

        for (let [a, b] of prerequisites) {
            graph[b].push(a);
        }

        const inDegrees = new Array(numCourses).fill(0);

        for (let i = 0; i < numCourses; i++) {
            for (let next of graph[i]) {
                inDegrees[next] += 1;
            }
        }

        const queue = [];
        let head = 0;

        for (let i = 0; i < inDegrees.length; i++) {
            if (inDegrees[i] === 0) {
                queue.push(i);
            }
        }

        const order = [];

        while (head < queue.length) {
            const curr = queue[head++];

            for (let next of graph[curr]) {
                inDegrees[next] -= 1;
                if (inDegrees[next] === 0) {
                    queue.push(next);
                }
            }

            order.push(curr);
        }

        return order.length === numCourses ? order : [];
    }
}
