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

      

        let stack = []

        function _popTwo(){
            let b = stack.pop()
            let a = stack.pop()
            return [a,b]
        }
        
        for (let token of tokens) {
            switch (token) {
                case '+': {
                    const [a, b] = _popTwo();
                    stack.push(a + b);
                    break;
                }
                case '-': {
                    const [a, b] = _popTwo();
                    stack.push(a - b);
                    break;
                }
                case '*': {
                    const [a, b] = _popTwo();
                    stack.push(a * b);
                    break;
                }
                case '/': {
                    const [a, b] = _popTwo();
                    stack.push(Math.trunc(a / b));
                    break;
                }
            default:
                stack.push(parseInt(token));
            }
        }    
        return stack.pop();
    }
}
