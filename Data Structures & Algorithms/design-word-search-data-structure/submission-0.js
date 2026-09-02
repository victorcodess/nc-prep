class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;

        for (let ch of word) {
            if (!current.children.has(ch)) {
                current.children.set(ch, new TrieNode());
            }
            current = current.children.get(ch);
        }

        current.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(j, root) {
            let current = root;

            for (let i = j; i < word.length; i++) {
                const ch = word[i];

                if (ch === ".") {
                    for (let child of current.children.values()) {
                        if (dfs(i + 1, child)) {
                            return true;
                        }
                    }

                    return false;

                } else { 
                    if (!current.children.has(ch)) {
                        return false;
                    }

                    current = current.children.get(ch);
                }
            }
            return current.endOfWord;
        }

        return dfs(0, this.root);
    }
}
