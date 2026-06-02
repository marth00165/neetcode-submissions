class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 1) return 1;
        let seen = new Map();
        let left = 0;
        let maxLen = 0;


        for (let right = 0; right < s.length; right++) {
            let letter = s[right];
            if (seen.has(letter) && seen.get(letter) >= left) {
                left = seen.get(letter) + 1;
            }

            let strLen = right - left + 1;
            maxLen = Math.max(strLen, maxLen);
            seen.set(letter, right);
        }
        return maxLen;
    }
}
