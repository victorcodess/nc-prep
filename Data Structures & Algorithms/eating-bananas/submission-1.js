class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) { // Time: O(nlogm), Space: O(1)
        const maxPile = Math.max(...piles);
        let minK = Infinity;
        let l = 1, r = maxPile;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            
            const totalHrs = findHours(piles, mid);

            if (totalHrs > h) {
                l = mid + 1;
            } else {
                minK = Math.min(minK, mid);
                r = mid - 1;
            }
        }

        return minK
    }
}

function findHours(piles, i) {
    let hours = 0;

    for (let j = 0; j < piles.length; j++) {
        hours += Math.ceil(piles[j] / i)
    }

    return hours;
}
