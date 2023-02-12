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
    console.log(nodeArray);

    const clickEvent = () => {
        // for (const node of nodeArray) {
        //     console.log(node);
        //     node.addEventListener('click', () => {
        //         currentPlayer = currentPlayer === player1 ? player2 : player1;
        //         console.log(currentPlayer.symbol);
        //     });
        // }

        nodeArray.forEach((node, index) => {
            node.addEventListener('click', (e) => {
                // console.log(e.currentTarget);
                const spanEl = e.currentTarget.querySelector('.symbol');

                // checks if spanEl is empty
                if (!spanEl.textContent) {
                    // if empty, sets currentPlayer to the other player
                    currentPlayer =
                        currentPlayer === player1 ? player2 : player1;

                    spanEl.textContent = `${currentPlayer.symbol}`;
                    console.log(currentPlayer);
                }
            });
        });
    };

    return {
        clickEvent,
    };
})();
Gamecontroller.clickEvent();

// Click on board. Should alternate between X and O.
// Make sure existing tiles are unclickable.
