class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        let groups = hand.length / groupSize; 

        const cards = new Map();

        for (let card of hand) {
            cards.set(card, (cards.get(card) || 0) + 1);
        }

        while (groups > 0) {
            let k = groupSize;
            let min = Math.min(...cards.keys());

            while (k > 0) {                
                if (cards.has(min)) {
                    cards.set(min, cards.get(min) - 1);
                    if (cards.get(min) === 0) cards.delete(min);

                } else {
                    return false;
                }

                min = min + 1;
                k--;
            }

            groups--;
        }

        return true;
    }
}
