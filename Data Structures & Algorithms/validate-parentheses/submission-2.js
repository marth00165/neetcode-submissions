class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isValid(s) {
        const openMap = {
            '(': ')',
            '{': '}',
            '[': ']'
        };

        const stack = [];

        for (let char of s) {
            if (openMap[char]) {
                stack.push(openMap[char]);
            } else {
                if (stack.pop() !== char) return false;
            }
        }

        return stack.length === 0;
    }
}
