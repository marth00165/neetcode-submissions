class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let graph = new Map();
        let visited = new Set();

        for (let course = 0; course < numCourses; course++) {
            graph.set(course, [])
        }


        for (let [course, preq] of prerequisites) {
            graph.get(course).push(preq);
        }

        const DFS = (course) => {
            if (visited.has(course)) return false;
            if (graph.get(course).length === 0) return true;
            visited.add(course)
            for (let preq of graph.get(course)) {
                if (!DFS(preq)) return false
            }

            visited.delete(course);
            graph.set(course, [])
            return true;
        }


        for (let course = 0; course < numCourses; course ++){
            if (!DFS(course)) {
                return false
            }
        }
        return true
    }
}
