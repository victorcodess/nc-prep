class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) { // Time: O(nlogn), Space: O(n)
        const distToPoint = new Map();
        const distHeap = new MinPriorityQueue();
        const result = [];

        for (let [x, y] of points) {
            const dist = Math.sqrt((x * x) + (y * y));

            if (!distToPoint.has(dist)) distToPoint.set(dist, []);
            distToPoint.get(dist).push([x, y]);

            distHeap.enqueue(dist);
        }

        let i = 0;
        while (i !== k) {
            const smallestDist = distHeap.dequeue();
            const validPoints = distToPoint.get(smallestDist);
            const point = validPoints.pop();
            result.push(point);
            i++;
        }

        return result;
    }
}
