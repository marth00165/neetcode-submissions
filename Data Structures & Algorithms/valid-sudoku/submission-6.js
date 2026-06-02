class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = 9;
        let columns = 9;

        const checkSubSudoku = (row, column) => {
            let sudokuSet = new Set();
            for (let subR = 0 + row; subR < 3 + row; subR ++) {
                for (let subC = 0 + column; subC < 3 + column; subC ++ ) {
                    let val = board[subR][subC]
                    if (val === ".") {
                        continue
                    }
                    if (sudokuSet.has(val)) {
                        return false
                    } else {
                        sudokuSet.add(val);
                    }
                }
            }
            return true
        }

        const checkSet = new Set([0, 3, 6]);

        const checkRows = (column) => {
            let sudokuSet = new Set();
            for (let r = 0; r < rows; r++) {
                let val = board[r][column]
                if (val === ".") {
                    continue;
                }
                if (sudokuSet.has(val)) {
                    return false
                }
                sudokuSet.add(val);
            }
            return true
        }

        const checkColumns = (row) => {
            let sudokuSet = new Set();
            for (let c = 0; c < columns; c++) {
                let val = board[row][c]
                if (val === ".") {
                    continue;
                }
                if (sudokuSet.has(val)) {
                    return false;
                }
                sudokuSet.add(val);
            }

            return true;
        }

        for (let r = 0; r < rows; r ++) {
            let validColumns = checkColumns(r);

            if (!validColumns) {
                return false;
            }
        }

        for (let c = 0; c < columns; c ++) {
            let validRows = checkRows(c);

            if (!validRows) {
                return false;
            }
        }

        for (let r = 0; r < rows; r += 3){
            for (let c = 0; c < columns; c += 3){
                const checkSudoku = checkSubSudoku(r, c);
                if (!checkSudoku) {
                    return false
                }  
            }
        }

        return true
    }
}
