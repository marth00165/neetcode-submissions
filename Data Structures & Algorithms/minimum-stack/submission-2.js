class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // check the current min
        // compare prev min and curr val (smaller wins)

        let prevMin = this.minStack[this.minStack.length -1]
        let currMin = this.minStack.length > 0 ? Math.min(prevMin, val) : val;

        this.minStack.push(currMin)
        return this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
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
        return this.minStack[this.minStack.length -1]
    }
}
