/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {

        if (!node) return null;

    const visited = new Map();
    const queue = [node];


    visited.set(node, new Node(node.val));


    while (queue.length) {
        let currNode = queue.shift();

        for (let nbr of currNode.neighbors) {
            if (!visited.has(nbr)) {
                visited.set(nbr, new Node(nbr.val))
                queue.push(nbr)
            }

            visited.get(currNode).neighbors.push(visited.get(nbr))
        }
    }

    return visited.get(node)
    }
}
