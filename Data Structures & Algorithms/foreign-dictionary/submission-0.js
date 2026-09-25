class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) { // Time: O(v + e + N), Space: O(v + e)
        // create adj list
        const graph = {};
        
        for (let word of words) {
            for (let ch of word) {
                graph[ch] = new Set();
            }
        }

        // compare lex order and update adj list
        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];
            const minL = Math.min(w1.length, w2.length);

            if (w1.length > w2.length && w1.slice(0, minL) === w2.slice(0, minL)) return "";

            for (let j = 0; j < minL; j++) {
                if (w1[j] !== w2[j]) {
                    graph[w1[j]].add(w2[j]);
                    break;
                }
            }
        }

        // find cycle in graph while printing nodes
        const result = [];
        const visiting = new Map();

        function findCycle(char) {
            if (visiting.has(char)) return visiting.get(char);
            visiting.set(char, true);

            for (let nextCh of graph[char]) {
                if (findCycle(nextCh)) return true;
            }

            visiting.set(char, false);
            result.push(char);
            return false;
        }

        for (let ch in graph) {
            if (findCycle(ch)) return "";
        }

        // return result
        result.reverse();
        return result.join("");
    }
}
