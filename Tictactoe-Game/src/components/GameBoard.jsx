import "../styles/game-board.css";

export default function GameBoard({ boardTiles, onTileClick }) {
  return (
    <div className="d-flex row justify-content-center col-12">
      {boardTiles.map((tile) => (
        <button
          onClick={() => onTileClick(tile.id)}
          key={tile.id}
          className="tile-box col-3 me-3 mb-3"
          disabled={tile.symbol !== null}
        >
          {tile.symbol}
        </button>
      ))}
    </div>
  );
}
