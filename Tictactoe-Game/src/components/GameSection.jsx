import "../styles/game-board.css";
import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState } from "react";

const initialData = [
  { id: 1, symbol: null },
  { id: 2, symbol: null },
  { id: 3, symbol: null },
  { id: 4, symbol: null },
  { id: 5, symbol: null },
  { id: 6, symbol: null },
  { id: 7, symbol: null },
  { id: 8, symbol: null },
  { id: 9, symbol: null },
];

export default function GameSection() {
  const [boardTiles, setBoardTiles] = useState(initialData);
  const [activePlayer, setActivePlayer] = useState(true);

  function onTileClick(id) {
    setActivePlayer((oldData) => !oldData);
    setBoardTiles((oldData) =>
      oldData.map((tile, index) =>
        tile.id === id
          ? {
              ...tile,
              key: index,
              symbol: !tile.symbol ? (activePlayer ? "X" : "O") : tile.symbol,
            }
          : tile
      )
    );
  }

  function resetGame() {
    setBoardTiles((oldData) =>
      oldData.map((tile) => ({ ...tile, symbol: null }))
    );

    setActivePlayer(true);
  }

  return (
    <main className="game-board mx-auto justify-content-center p-5 mt-5 flex-column col-9">
      <section className="d-flex justify-content-center">
        <Player
          className={`px-5 player-select ${
            activePlayer ? "active-player" : undefined
          } `}
          name="Player 1"
          symbol="X"
        />
        <Player
          className={`px-5 player-select ${
            !activePlayer ? "active-player" : undefined
          }`}
          name="Player 2"
          symbol="O"
        />
      </section>
      <section className="d-flex justify-content-center mt-5 ">
        <GameBoard boardTiles={boardTiles} onTileClick={onTileClick} />
      </section>
      <div>
        <button onClick={resetGame}>Rest Game</button>
      </div>
    </main>
  );
}
