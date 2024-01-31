import "../styles/game-board.css";

export default function GameOver({ gameOver, player }) {
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
          <h1>
            {winningPlayer} - {gameOver}
          </h1>
        </div>
      ) : undefined}
    </>
  );
}
