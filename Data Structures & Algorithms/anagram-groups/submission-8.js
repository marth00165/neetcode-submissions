class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();


        for (let word of strs) {
            let count = new Array(26).fill(0);

            for (let letter of word) {
                let letterCode = letter.charCodeAt(0) - 'a'.charCodeAt(0);
                count[letterCode] += 1; 
            }

            let countCode = count.join(",");

            if (!map.has(countCode)) {
                map.set(countCode, [])
            }

            map.get(countCode).push(word)
        }

        return [...map.values()];
        
    }
}
