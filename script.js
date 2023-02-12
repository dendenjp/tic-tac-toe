const Gameboard = (() => {
    let board = new Array(9).fill('');

    return {
        board,
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

    const clickEvent = () => {
        for (const node of nodeArray) {
            node.addEventListener('click', () => {
                currentPlayer = currentPlayer === player1 ? player2 : player1;
                console.log(currentPlayer);
            });
        }
    };

    return {
        clickEvent,
    };
})();
Gamecontroller.clickEvent();

// Click on board. Should alternate between X and O.
// Make sure existing tiles are unclickable.
