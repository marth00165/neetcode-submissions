class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let answer = [];

        if (points.length === k) return points;

        let formula = (x, y) => {
            let distance = Math.sqrt((0 - x) ** 2 + (0 - y)**2)
            return distance
        };



        for (let i = 0; i < points.length; i++) {
            let [x, y] = points[i];

            let distance = formula(x, y);

            answer.push([distance, [x, y]]);
        }
        let finalAnswer = []


        answer.sort((a, b) => b[0] - a[0])

        for (let i = 0; i < k; i ++) {
            let [distance, coordinates] = answer.pop();
            finalAnswer.push(coordinates);
        }
        return finalAnswer

    }
}
