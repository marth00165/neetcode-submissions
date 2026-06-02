class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
validTree(n, edges) {
    // 1. Quick fail: must have exactly n - 1 edges
    if (edges.length !== n - 1) return false;

    // 2. Build adjacency list
    const graph = new Map();
    for (let i = 0; i < n; i++) graph.set(i, []);
    for (let [u, v] of edges) {
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    // 3. DFS to check for cycles and connectivity
    const visited = new Set();

    function dfs(node, parent) {
        if (visited.has(node)) return false;
        visited.add(node);

        for (let neighbor of graph.get(node)) {
            if (neighbor === parent) continue;
            if (!dfs(neighbor, node)) return false;
        }

        return true;
    }

    // 4. Start DFS from node 0
    if (!dfs(0, -1)) return false;

    // 5. Check full connectivity (all nodes visited)
    return visited.size === n;
}

}
