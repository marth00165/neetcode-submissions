class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let left = 0;
        let windowLength = 0;
        let result = 0;
        let maxFreq = 0;

        for (let right = 0; right < s.length; right ++) {
            if (!count.has(s[right])) {
                count.set(s[right], 0)
            }
            count.set(s[right], count.get(s[right]) + 1)
            windowLength = right - left + 1;

            maxFreq = Math.max(maxFreq, count.get(s[right]))

            while(windowLength - maxFreq > k) {
                count.set(s[left], count.get(s[left]) - 1);
                left++
                windowLength = right - left + 1;
            }

            result = Math.max(result, windowLength)
        }

        return result
    }
}
