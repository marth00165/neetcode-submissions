class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return t;

        let freqMap = new Map();

        let left = 0;
        let right = 0;
        let bestLen = Infinity;
        let bestStart = 0;

        // PT 1 - create a frequency Map
        for (let c of t) {
            if (!freqMap.has(c)) {
                freqMap.set(c, 0);
            }
            freqMap.set(c, freqMap.get(c) + 1);
        }

        // PT 2 - Size the initial Window
        let unmet = freqMap.size;
        while (right < s.length) {
            let rightChar = s[right]
            if (freqMap.has(rightChar)) {
                freqMap.set(rightChar, freqMap.get(rightChar) - 1);

                if (freqMap.get(rightChar) === 0) {
                    unmet = unmet - 1;
                }
            }
            right++;
            // PT 3 - Detect Valid Window
            if (unmet === 0) {
                while (unmet === 0) {
                    let currLen = right - left;
                    if (currLen < bestLen) {
                        bestLen = currLen
                        bestStart = left
                    }
                    // PT 4 - Shrink Window from left
                    let leftChar = s[left];
                    if (freqMap.has(leftChar)) {
                        freqMap.set(leftChar, freqMap.get(leftChar) + 1)
                        if (freqMap.get(leftChar) === 1) {
                            unmet = unmet + 1;
                        }
                    }
                    left++;
                }
            }
        }

        if (bestLen === Infinity) {
            return ""
        } else {
            let end = bestStart + bestLen 
            return s.substring(bestStart, end);
        }
    }
}
