import { useState } from "react";
import "../styles/game-board.css";

const initialData = [
  { id: 1, symbol: "X" },
  { id: 2, symbol: "X" },
  { id: 3, symbol: "X" },
  { id: 4, symbol: "X" },
  { id: 5, symbol: "X" },
  { id: 6, symbol: "X" },
  { id: 7, symbol: "X" },
  { id: 8, symbol: "X" },
  { id: 9, symbol: "X" },
];

export default function GameBoard() {
  const [boardTiles, setBoardTiles] = useState(initialData);

  function onTileClick(id) {
    setBoardTiles((oldData) =>
      oldData.map((tile) => (tile.id === id ? { ...tile, symbol: 0 } : tile))
    );
  }
  return (
    <div className="d-flex row justify-content-center col-12">
      {boardTiles.map((tile) => (
        <button
          onClick={() => onTileClick(tile.id)}
          key={tile.id}
          className="tile-box col-3 me-3 mb-3"
        >
          {tile.symbol}
        </button>
      ))}
    </div>
  );
}
