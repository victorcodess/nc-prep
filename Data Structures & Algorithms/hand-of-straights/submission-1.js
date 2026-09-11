class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) { // Time: O(nlog(n)), Space: O(n);
        if (hand.length % groupSize !== 0) return false;

        const cards = new Map();

        for (let card of hand) {
            cards.set(card, (cards.get(card) || 0) + 1);
        }

        hand.sort((a, b) => a - b);

        for (let card of hand) {
            if (!cards.has(card)) continue;

            for (let i = 0; i < groupSize; i++) {
                const curr = card + i;;

                if (cards.has(curr)) {
                    cards.set(curr, cards.get(curr) - 1);

                    if (cards.get(curr) === 0) cards.delete(curr);
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}
