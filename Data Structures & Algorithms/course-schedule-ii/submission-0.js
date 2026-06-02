class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let visited = new Set();
        let cycle = new Set();
        const output = []


        let graph = new Map();

        for (let i = 0; i < numCourses; i ++) {
            graph.set(i, []);
        }

        for (let [course, pre] of prerequisites) {
            graph.get(course).push(pre)
        }



        const DFS = (course) => {
            if (cycle.has(course)) return false;

            if (visited.has(course)) return true;



            cycle.add(course);
            for (let preCourse of graph.get(course)) {
                if (!DFS(preCourse)) {
                    return false
                }
            }

            cycle.delete(course);
            visited.add(course);
            output.push(course);
            return true
        }



        for (let i = 0; i < numCourses; i ++) {
            if (!DFS(i)) {
                return []
            }
        }

        return output

    }
}
