class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: 9}, () => new Set());
        let columns = Array.from({length: 9}, () => new Set());
        let boxes = Array.from({length: 9}, () => new Set());


        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let val = board[r][c];
                if (val === ".") continue;
                let boxRow = Math.floor(r / 3);
                let boxColumn = Math.floor(c / 3);

                let b = boxRow * 3 + boxColumn

                if (rows[r].has(val) || columns[c].has(val) || boxes[b].has(val)) {
                    return false;
                }
                rows[r].add(val)
                columns[c].add(val)
                boxes[b].add(val)
            }
        }

        return true
    }
}
