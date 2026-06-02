class MinStack {
    constructor() {
        this.stack = [] // actual stack

        this.minimumStack = [] // minStack
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let prevMin = this.minimumStack[this.minimumStack.length - 1];
        let currMin = this.minimumStack.length > 0 ? Math.min(prevMin, val) : val;
        this.minimumStack.push(currMin);
        return this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.minimumStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length -1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minimumStack[this.minimumStack.length - 1]
    }
}
