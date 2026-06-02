class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const directions = [[0, 1], [1,0], [-1, 0], [0, -1]];
        const ROWS = grid.length;
        const COLUMNS = grid[0].length;

        let islands = 0;


        function _dfs(node){
            let [r, c] = node;
            // if its 0 return or out of bounds
            if ( r < 0 ||  c < 0 || r > ROWS - 1 || c > COLUMNS -1 || grid[r][c] === "0") {
                return; 
            }

            grid[r][c] = "0";

            for (let [dr, dc] of directions) {
                let nr = dr + r;
                let nc = dc + c;
                _dfs([nr, nc])
            }
        }


        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLUMNS; c++) {
                if (grid[r][c] === '1') {
                    _dfs([r,c])
                    islands++
                }
            }
        }

        return islands
    }
}
