class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphanumericChars = new Set();

        // Add lowercase letters (a-z)
        for (let i = 0; i < 26; i++) {
            alphanumericChars.add(String.fromCharCode(97 + i)); // 97 is ASCII for 'a'
        }

        // Add uppercase letters (A-Z)
        for (let i = 0; i < 26; i++) {
          alphanumericChars.add(String.fromCharCode(65 + i)); // 65 is ASCII for 'A'
        }

        // Add digits (0-9)
        for (let i = 0; i < 10; i++) {
          alphanumericChars.add(String.fromCharCode(48 + i)); // 48 is ASCII for '0'
        }

        let newStr = ''

        for (let c of s) {
            if (alphanumericChars.has(c)) {
                newStr = newStr+c
            }
        }
        newStr = newStr.trim().toLowerCase();
        let left = 0;
        let right = newStr.length -1;
        while (left <= right) {
            if (newStr[left] !== newStr[right]){
                return false
            }

            left++
            right--
        }

        return true   
    }
}
