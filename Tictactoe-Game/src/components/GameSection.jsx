import "../styles/game-board.css";
import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState, useEffect } from "react";
import PlayerTurns from "./PlayerTurns";

const initialData = [
  { id: 1, symbol: null, row: 1, col: 1 },
  { id: 2, symbol: null, row: 1, col: 2 },
  { id: 3, symbol: null, row: 1, col: 3 },
  { id: 4, symbol: null, row: 2, col: 1 },
  { id: 5, symbol: null, row: 2, col: 2 },
  { id: 6, symbol: null, row: 2, col: 3 },
  { id: 7, symbol: null, row: 3, col: 1 },
  { id: 8, symbol: null, row: 3, col: 2 },
  { id: 9, symbol: null, row: 3, col: 3 },
];

export default function GameSection() {
  const [boardTiles, setBoardTiles] = useState(initialData);
  const [activePlayer, setActivePlayer] = useState(true);
  const [gameTurns, setGameTurns] = useState([]);
  const [player, setPlayer] = useState([
    {
      name: "Player 1",
      symbol: "X",
      isEditing: false,
    },
    {
      name: "Player 2",
      symbol: "O",
      isEditing: false,
    },
  ]);

  function onTileClick(id) {
    {
      /* -------- Active Player -------- */
    }
    setActivePlayer((oldData) => !oldData);

    {
      /* -------- Board Tiles -------- */
    }

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

    {
      /* -------- Track Player Turns -------- */
    }

    setGameTurns((prevTurn) => [
      {
        row: boardTiles.find((tile) => tile.id === id).row,
        col: boardTiles.find((tile) => tile.id === id).col,
        player: player[activePlayer ? 0 : 1].name,
      },
      ...prevTurn,
    ]);
  }

  useEffect(() => {
    console.log(gameTurns);
  }, [gameTurns]);

  function resetGame() {
    setBoardTiles((oldData) =>
      oldData.map((tile) => ({ ...tile, symbol: null }))
    );
    setActivePlayer(true);
    setGameTurns([]);
  }

  function editPlayerName(index) {
    setPlayer((oldData) => {
      const updatedPlayers = [...oldData];
      updatedPlayers[index] = {
        ...updatedPlayers[index],
        isEditing: !updatedPlayers[index].isEditing,
      };
      return updatedPlayers;
    });
  }

  function savePlayerName(index, e) {
    setPlayer((oldData) => {
      const updatedPlayers = [...oldData];
      updatedPlayers[index] = {
        ...updatedPlayers[index],
        name: e.target.value,
      };
      return updatedPlayers;
    });
  }

  return (
    <>
      <main className="game-board mx-auto justify-content-center p-5 mt-5 flex-column col-9">
        <section className="d-flex justify-content-center">
          {/* -------- PLAYER 1 -------- */}
          <Player
            className={`px-5 player-select ${
              activePlayer ? "active-player" : undefined
            } `}
            player={player[0]}
            editPlayerName={() => editPlayerName(0)}
            savePlayerName={(e) => savePlayerName(0, e)}
          />

          {/* -------- PLAYER 2 -------- */}
          <Player
            className={`px-5 player-select ${
              !activePlayer ? "active-player" : undefined
            }`}
            player={player[1]}
            editPlayerName={() => editPlayerName(1)}
            savePlayerName={(e) => savePlayerName(1, e)}
          />
        </section>
        <section className="d-flex justify-content-center mt-5 ">
          <GameBoard boardTiles={boardTiles} onTileClick={onTileClick} />
        </section>
        <div className="mt-4">
          <button onClick={resetGame}>Rest Game</button>
        </div>
      </main>
      <div>
        <PlayerTurns gameTurns={gameTurns} />
      </div>
    </>
  );
}
