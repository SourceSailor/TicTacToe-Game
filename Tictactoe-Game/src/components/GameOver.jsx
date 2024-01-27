import "../styles/game-board.css";

export default function GameOver({ gameOver }) {
  return (
    <>
      {gameOver ? (
        <div>
          <h1>YOU WIN</h1>
        </div>
      ) : undefined}
    </>
  );
}
