const Gameboard = (() => {
    let board = new Array(9).fill('');

    const updateBoard = (index, symbol) => {
        board[index] = symbol;
        console.log(board);
    };

    return {
        // board,
        updateBoard,
    };
})();

const Player = (name, symbol) => {
    return {
        name,
        symbol,
    };
};

const Gamecontroller = (() => {
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');

    let currentPlayer = player1;

    const nodeList = document.querySelectorAll('.cell');

    const nodeArray = Array.from(nodeList);
    console.log(nodeArray);

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
                        currentPlayer === player1 ? player2 : player1;

                    spanEl.textContent = `${currentPlayer.symbol}`;

                    // updating and filling board array
                    Gameboard.updateBoard(index, currentPlayer.symbol);
                }
            });
        });
    };

    return {
        clickEvent,
    };
})();
Gamecontroller.clickEvent();
