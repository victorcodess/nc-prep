class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) { // Time: O((C ** n) * n), Space: O(n)
        const stack = [];
        const result = [];

        function backtrack(openN, closeN) {
            if (openN === closeN && openN === n) {
                result.push(stack.join(""));
                return;
            }

            if (openN < n) {
                stack.push("(");
                backtrack(openN + 1, closeN);
                stack.pop();
            }

            if (closeN < openN) {
                stack.push(")");
                backtrack(openN, closeN + 1);
                stack.pop();
            }
        }

        backtrack(0, 0);

        return result;
    }
}
