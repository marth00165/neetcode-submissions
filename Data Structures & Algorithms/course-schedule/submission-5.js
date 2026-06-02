class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
   
    canFinish(numCourses, prerequisites) {
        let adjGraph = new Map();

        let visited = new Set();

        for (let i = 0; i < numCourses; i++) {
            adjGraph.set(i, []);
        }

        for (let [course, reqs] of prerequisites) {
            adjGraph.get(course).push(reqs);
        }


        function detectCycle(course){
            if (visited.has(course)) return true

            if (adjGraph.get(course).length === 0) return false;

            visited.add(course);

            for (let req of adjGraph.get(course)) {
                if (detectCycle(req)) {
                    return true
                }
            }

            visited.delete(course);
            adjGraph.set(course, []);

            return false;
        }


        for (let i = 0; i < numCourses; i++) {
            if (detectCycle(i)) {
                return false
            }
        } 

        return true
    }
}
