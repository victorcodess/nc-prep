class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) { // Time: O(v + e), Space: O(v + e)
        const graph = this.createGraph(numCourses, prerequisites);
        const taking = new Set();
        const taken = new Set();

        for (let course in graph) {
            if (this.findCycle(graph, course, taking, taken)) {
                return false;
            }
        }

        return taken.size === numCourses;
    }

    findCycle(graph, course, taking, taken) {
        if (taken.has(String(course))) return false;
        if (taking.has(String(course))) return true;
        taking.add(String(course));

        for (let nextCourse of graph[String(course)]) {
            if (this.findCycle(graph, nextCourse, taking, taken)) {
                return true;
            }
        }

        taking.delete(String(course));
        taken.add(String(course));
        return false;
    }

    createGraph(num, prereq) {
        const graph = {};

        for (let i = 0; i < num; i++) {
            graph[i] = [];
        }

        for (let [a, b] of prereq) {
            graph[String(a)].push(String(b));
        }

        return graph;
    }
}
