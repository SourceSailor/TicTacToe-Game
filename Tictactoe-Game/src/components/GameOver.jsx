import "../styles/game-board.css";

export default function GameOver({ gameOver, player, gameTurns, resetGame }) {
  let winningPlayer;
  if (gameOver === player[0].symbol) {
    winningPlayer = player[0].name;
  } else if (gameOver === player[1].symbol) {
    winningPlayer = player[1].name;
  }

  return (
    <>
      {gameOver ? (
        <div className="game-over col-7">
          <h1>Game Over!</h1>
          <h4 className="mt-5">
            {winningPlayer} - {gameOver}
          </h4>
          <div className="mt-4">
            <button className="mt-4" onClick={resetGame}>
              Reset Game
            </button>
          </div>
        </div>
      ) : undefined}

      {!gameOver && gameTurns.length === 9 ? (
        <div className="game-over col-7">
          <h1>It's A Draw</h1>
          <div className="mt-4">
            <button className="mt-4" onClick={resetGame}>
              Rematch
            </button>
          </div>
        </div>
      ) : undefined}
    </>
  );
}
