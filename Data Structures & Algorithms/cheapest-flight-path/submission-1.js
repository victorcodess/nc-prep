class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) { // Time: O(v + e(k)), Space: O(v)
        const inf = Infinity;
        let prices = new Array(n).fill(inf);
        prices[src] = 0;

        for (let i = 0; i <= k; i++) {
            const tempPrices = prices.slice();

            for (let flight of flights) {
                const s = flight[0];
                const d = flight[1];
                const p = flight[2];

                if (prices[s] === inf) continue;

                if (prices[s] + p < tempPrices[d]) {
                    tempPrices[d] = prices[s] + p;
                }
            }

            prices = tempPrices;
        }

        return prices[dst] === inf ? -1 : prices[dst];
    }
}
