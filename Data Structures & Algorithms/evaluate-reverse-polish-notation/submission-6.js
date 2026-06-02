class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        if (!tokens) return 0
        if (tokens.length === 1) {
            return tokens[0]
        }
        let operationSet = new Set(['+', '-', '/', '*'])
        let stack = []
        let answer = undefined;
        for (let token of tokens) {
            if (operationSet.has(token)) {
                console.log(stack)
                let b = stack.pop();
                let a = stack.pop();

                if (token === '+') {
                    let math = a + b
                    stack.push(math)
                }

                if (token === '-') {
                    let math = a - b
                    stack.push(math)
                }

                if (token === '*') {
                    let math = a * b
                    stack.push(math)
                }

                if (token === '/') {
                    let math = Math.trunc(a/b)
                    stack.push(math)
                }
            } else {
                stack.push(parseInt(token));
            }
        }
        return stack.pop();
    }
}
