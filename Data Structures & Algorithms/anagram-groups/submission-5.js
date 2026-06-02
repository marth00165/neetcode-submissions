class Solution {
    /**
     * @param {string[]} s
     * @return {string[][]}
     */
    groupAnagrams(s) {
        let map = new Map();


        for (let word of s) {
            // let key = word.split('').sort().join('');
            // old way O(n × k log k)

            // New way to do key O(N)

            const count = new Array(26).fill(0);
            for (let c of word) {
                // this will give us each letter's char code b - a === 1, c - a === 2 etc
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            } 


            const key = count.join(',');


            if (!map.has(key)) {
                map.set(key, [])
            } 

            map.get(key).push(word)
        }


        let answerArr = []

        for (let [key, words] of map) {
            answerArr.push(words)
        }

        return answerArr
    }
}
