class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) { // Time: O(nlogn), Space: O(n)
        const stoneHeap = new MaxPriorityQueue();

        for (const stone of stones) {
            stoneHeap.enqueue(stone);
        }

        while (stoneHeap.size() > 1) {
            const x = stoneHeap.dequeue();
            const y = stoneHeap.dequeue();
            const diff = Math.abs(x - y);

            if (diff > 0) {
                stoneHeap.enqueue(diff);
            }
        }

        return stoneHeap.front() ?? 0;
    }
}
