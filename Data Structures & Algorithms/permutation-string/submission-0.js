class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    compareArrays(a, b) {
        for (let i = 0; i < 26; i ++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true
    }

    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const windowCount = new Array(26).fill(0);

        // Fill s1Count with frequencies from s1
        for (let char of s1) {
            s1Count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const windowSize = s1.length;

        for (let i = 0; i< s2.length; i++) {
            let char = s2[i];
            windowCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;


            if (i >= windowSize) {
                windowCount[s2[i - windowSize].charCodeAt(0) - 'a'.charCodeAt(0)]-- ;

            }


            if (this.compareArrays(s1Count, windowCount)) {
                return true
            }
        }
        return false
    }


}
