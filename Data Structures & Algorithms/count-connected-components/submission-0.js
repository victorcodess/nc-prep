class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) { // Time: O(v + a), Space: O(v + a)
        const roots = [];
        const sizes = [];

        for (let i = 0; i < n; i++) {
            roots[i] = i;
            sizes[i] = 1;
        }

        let i = 0;

        while (i < edges.length) {
            const [a, b] = edges[i];

            const rootA = this.find(roots, a);
            const rootB = this.find(roots, b);

            this.union(roots, sizes, rootA, rootB);

            i++;
        }

        let count = 0;

        for (let i = 0; i < n; i++) {
            if (roots[i] === i) {
                count++;
            }
        }

        return count;
    }

    union(roots, sizes, nodeA, nodeB) {
        if (sizes[nodeB] > sizes[nodeA]) {
            [nodeA, nodeB] = [nodeB, nodeA];
        }

        roots[nodeB] = nodeA;
        sizes[nodeA] += sizes[nodeB];
    }

    find(roots, node) {
        let curr = node;

        while (roots[curr] !== curr) {
            curr = roots[curr];
        }

        return curr;
    }
}
