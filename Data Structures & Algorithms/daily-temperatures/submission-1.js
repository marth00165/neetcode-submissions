class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(T) {
        let answer = new Array(T.length).fill(0);
        let stack = [];
        

        for (let i = 0; i < T.length; i ++) {
            let temp = T[i]
            while (stack.length > 0 && temp > T[stack[stack.length - 1]]) {
                let prevIdx = stack.pop()
                answer[prevIdx] =  i - prevIdx;
            }

            stack.push(i)
        }
        return answer
    }
}
