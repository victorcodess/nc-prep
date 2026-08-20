class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) { // Time: O(n), Space: O(n)
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "+") {
                const second = stack.pop();
                const first = stack.pop();

                stack.push(first + second);
            } else if (tokens[i] === "-") {
                const second = stack.pop();
                const first = stack.pop();

                stack.push(first - second);
            } else if (tokens[i] === "*") {
                const second = stack.pop();
                const first = stack.pop();

                stack.push(first * second);
            } else if (tokens[i] === "/") {
                const second = stack.pop();
                const first = stack.pop();

                stack.push(Math.trunc(first / second));
            } else {
                stack.push(Number(tokens[i]));
            }
        }

        return stack.pop();
    }
}
