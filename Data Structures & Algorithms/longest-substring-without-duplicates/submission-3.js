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

        for (let right = 0; right < s.length; right ++) {
            if (seen.has(s[right]) && seen.get(s[right]) >= left) {
                left = seen.get(s[right]) + 1
            }
            maxLen = Math.max(maxLen, right - left + 1)
            seen.set(s[right], right)
        }

        return maxLen    
    }
}
