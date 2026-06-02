class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();


        for (let word of strs) {
            let key = word.split('').sort().join('');
            if (!map.has(key)) {
                map.set(key, [word])
            } else {
                map.get(key).push(word)
            }
        }


        let answerArr = []

        for (let [key, words] of map) {
            answerArr.push(words)
        }

        return answerArr
    }
}
