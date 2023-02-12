'use strict';

const Gameboard = (() => {
    let board = new Array(9).fill('');

    const playerConstructor = (name, symbol) => {
        return {
            name,
            symbol,
        };
    };

    const player1 = playerConstructor('Player 1', 'X');
    const player2 = playerConstructor('Player 2', 'O');

    const updateBoard = (index, symbol) => {
        board[index] = symbol;
        // console.table(board);
    };

    const winCheck = (board) => {
        // Check rows
        for (let i = 0; i < 9; i++) {
            if (
                board[i] === board[i + 1] &&
                board[i + 1] === board[i + 2] &&
                board[i] != ''
            ) {
                return `${
                    board[i] === 'O'
                        ? `${player2.name} wins!`
                        : `${player1.name} wins!`
                }`;
            }
        }
        // Check columns
        // Check diagonals
    };

    return {
        board,
        player1,
        player2,
        winCheck,
        updateBoard,
    };
})();

const Gamecontroller = (() => {
    let currentPlayer = Gameboard.player1;

    const nodeList = document.querySelectorAll('.cell');

    const nodeArray = Array.from(nodeList);

    const clickEvent = () => {
        nodeArray.forEach((node, index) => {
            // Click on board. Should alternate between X and O.
            node.addEventListener('click', (e) => {
                const spanEl = e.currentTarget.querySelector('.symbol');

                // Make sure existing tiles are unclickable.
                // checks if spanEl is empty
                if (!spanEl.textContent) {
                    // if empty, sets currentPlayer to the other player
                    currentPlayer =
                        currentPlayer === Gameboard.player1
                            ? Gameboard.player2
                            : Gameboard.player1;

                    spanEl.textContent = `${currentPlayer.symbol}`;

                    // updating and filling board array
                    Gameboard.updateBoard(index, currentPlayer.symbol);

                    console.log(Gameboard.winCheck(Gameboard.board));
                }
            });
        });
    };

    return {
        clickEvent,
    };
})();
Gamecontroller.clickEvent();
