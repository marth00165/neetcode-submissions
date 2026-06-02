class MinStack {
    constructor() {
        this.stack = []; // actual stack
        this.minStack = []; // minimumValue
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let prevMin = this.minStack[this.minStack.length - 1];
        let currMin = this.minStack.length > 0 ? Math.min(val, prevMin) : val
        this.minStack.push(currMin); // at this level this is the min
    
        return this.stack.push(val);
       }
    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop(); // because at this level this min is no longer needed
        let val = this.stack.pop()
        return val
    }
    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }
    /**
     * @return {number}
     */
    getMin() {
        let currMin = this.minStack[this.minStack.length - 1];
        return currMin
    }
}
