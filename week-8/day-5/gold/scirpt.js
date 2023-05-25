let board = [];

function makeRow() {
    let row = [];
    for (let i = 0; i < 3; i++) {
        row.push('-');
    }
    board.push(row);
    return row;
}

let row1 = makeRow();
let row2 = makeRow();
let row3 = makeRow();

function showBoard() {
    console.log(row1);
    console.log(row2);
    console.log(row3);
}

function checkWin() {
    if (
        (row1[0] === row2[0] === row3[0] && row1[0] !== '-') ||
        (row1[1] === row2[1] === row3[1] && row1[1] !== '-') ||
        (row1[2] === row2[2] === row3[2] && row1[2] !== '-') ||
        (row1[0] === row1[1] === row1[2] && row1[0] !== '-') ||
        (row2[0] === row2[1] === row2[2] && row2[0] !== '-') ||
        (row3[0] === row3[1] === row3[2] && row3[0] !== '-') ||
        (row1[0] === row2[1] === row3[2] && row1[0] !== '-') ||
        (row1[2] === row2[1] === row3[0] && row1[2] !== '-')
    ) {
        return true;
    } else if (!row1.includes('-') && !row2.includes('-') && !row3.includes('-')) {
        return 'draw';
    } else {
        return false;
    }
}

function playerInput() {
    let playerCounter = 0;
    let player = '';

    for (let gameRound = 0; gameRound < 100; gameRound++) {
        if (playerCounter % 2 === 0) {
            player = 'X';
        } else {
            player = 'O';
        }

        let userInColumn = prompt(`player ${player}, enter column (1-3): `);
        let userInRow = prompt(`player ${player}, enter row (1-3): `);

        if (
            !['1', '2', '3'].includes(userInColumn) ||
            !['1', '2', '3'].includes(userInRow)
        ) {
            console.log('Invalid piece');
            playerCounter += 1;
        } else if (
            board[parseInt(userInColumn) - 1][parseInt(userInRow) - 1] === '-'
        ) {
            board[parseInt(userInColumn) - 1][parseInt(userInRow) - 1] = player;
        } else {
            console.log('Piece already there');
        }

        showBoard();
        if (checkWin() === true) {
            console.log(`Player ${player} wins!`);
            break;
        } else if (checkWin() === 'draw') {
            console.log(`It's a draw!`);
            break;
        }
        playerCounter += 1;
    }
}

playerInput();
