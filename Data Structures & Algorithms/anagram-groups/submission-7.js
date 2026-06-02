class Solution {
    /**
     * @param {string[]} s
     * @return {string[][]}
     */
    groupAnagrams(s) {
        let map = new Map();
        for (let word of s) {

            let count = new Array(26).fill(0);

            for (let letter of word) {
                let letterCode = letter.charCodeAt(0) - 'a'.charCodeAt(0);

                count[letterCode] += 1;
            }
                const key = count.join(',');
                if (!map.has(key)) {
                    map.set(key, [])
                }
                map.get(key).push(word)
        }


        let answerArr = [];

        for (let [key, words] of map) {
            answerArr.push(words)
        }

        return answerArr
           
    }
}
