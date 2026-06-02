class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         let encoded = '';
        for (let str of strs) {
            encoded += str.length + '#' + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0; 

        while(i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++
                
            }
            let length = parseInt(str.slice(i, j));
            let word = str.slice(j + 1, j + 1 + length);
            res.push(word);

        

        // Move i to the next word start
        i = j + 1 + length;
        }
     
     return res
    }
}
