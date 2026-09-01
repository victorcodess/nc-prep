class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n, openN = 0, closeN = 0) { // Time: O((C ** n) * n), Space: O(n)
        if (openN === closeN && openN === n) {
            return [""];
        }

        const result = [];

        if (openN < n) {
            const withOpen = this.generateParenthesis(n, openN + 1, closeN);

            for (let pair of withOpen) {
                result.push(["(" + pair]);
            }
        }

        if (closeN < openN) {
            const withClose = this.generateParenthesis(n, openN, closeN + 1);

            for (let pair of withClose) {
                result.push([")" + pair]);
            }
        }

        return result;
    }
}
