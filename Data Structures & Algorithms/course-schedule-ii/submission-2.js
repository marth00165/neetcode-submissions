class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
       let order = [];
       let inDegree = Array.from({length: numCourses}).fill(0);
       let preqMap = new Map(); // graph
       let queue = [];
       let queueStart = 0;

        let completed = 0;
       for (const [course, preq] of prerequisites) {
        if (!preqMap.has(preq)) {
            preqMap.set(preq, [])
        }
            preqMap.get(preq).push(course);
            inDegree[course]++;
       }

       for (let i = 0; i < numCourses; i ++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
       }

       while (queueStart < queue.length) {
        let currCourse = queue[queueStart];
        queueStart++;

        order.push(currCourse);
        completed++;

        for (let neighbor of preqMap.get(currCourse) || []) {
            inDegree[neighbor]--; // removed one preq for that course;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
       }

       return completed === numCourses ? order : [];
    }
}
