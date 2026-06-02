class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false


        let map = new Map();


        for (let i = 0; i < s.length; i++){
            let char = s[i]

            if (!map.has(char)) {
                map.set(char, 0)
            }
            let oldCount = map.get(char)
            map.set(char, oldCount + 1)
        }


        for (let i = 0; i < t.length; i++) {
            let char = t[i];
            if (!map.has(char)) {
                return false
            }
            let oldCount = map.get(char);
            if (oldCount === 0) {
                return false
            }
            map.set(char, oldCount - 1)
        }


        for (let [char, count] of map) {
            if (map.get(char) !== 0) {
                return false
            }
        }

        return true
    }
}
