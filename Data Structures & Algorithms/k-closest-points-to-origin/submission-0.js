class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) { // Time: O(nlogn), Space: O(n)
        const result = [];

        points.sort((a,b) => {
            const distA = Math.sqrt((a[0] * a[0]) + (a[1] * a[1]));
            const distB = Math.sqrt((b[0] * b[0]) + (b[1] * b[1]));
            return distA - distB;
        })

        let i = 0
        while (i !== k) {
            result.push(points[i]);
            i++;
        }

        return result;
    }
}
