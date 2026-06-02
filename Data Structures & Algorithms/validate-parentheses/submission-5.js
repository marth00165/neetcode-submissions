class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openMap = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }


        let stack = [];

        for (let letter of s) {
            if (openMap[letter]) {
                let parethesis = stack.pop();
                if (openMap[letter] !== parethesis)
                return false
            } else {
                stack.push(letter)
            }
        }
        
        return stack.length === 0;
    }
}
