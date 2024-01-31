import "../styles/game-board.css";
import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState } from "react";
import PlayerTurns from "./PlayerTurns";
import GameOver from "./GameOver";
import { winningCombinations } from "../utils";

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

// const initialData = new Array(10).fill({});

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
    setActivePlayer((oldData) => !oldData);

    setBoardTiles((oldData) =>
      oldData.map((tile) =>
        tile.id === id
          ? {
              ...tile,
              key: tile.id,
              symbol: !tile.symbol ? (activePlayer ? "X" : "O") : tile.symbol,
            }
          : tile
      )
    );

    setGameTurns((prevTurn) => [
      {
        row: boardTiles.find((tile) => tile.id === id).row,
        col: boardTiles.find((tile) => tile.id === id).col,
        symbol: player[activePlayer ? 0 : 1].symbol,
        player: player[activePlayer ? 0 : 1].name,
      },
      ...prevTurn,
    ]);
  }

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

  let winner;

  for (let combination of winningCombinations) {
    const firstSquare = boardTiles.find(
      (tile) =>
        tile.row === combination[0].row && tile.col === combination[0].col
    )?.symbol;
    const secondSquare = boardTiles.find(
      (tile) =>
        tile.row === combination[1].row && tile.col === combination[1].col
    )?.symbol;
    const thirdSquare = boardTiles.find(
      (tile) =>
        tile.row === combination[2].row && tile.col === combination[2].col
    )?.symbol;

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
      break;
    }
  }

  return (
    <>
      <main className="game-board mx-auto justify-content-center p-5 mt-5 flex-column col-9">
        <section className="d-flex justify-content-center">
          {/* -------- GAME OVER -------- */}
          <GameOver player={player} gameOver={winner} />

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
          {/* -------- GAME BOARD -------- */}
          <GameBoard boardTiles={boardTiles} onTileClick={onTileClick} />
        </section>
        <div className="mt-4">
          <button onClick={resetGame}>Reset Game</button>
        </div>
      </main>

      {/* -------- PLAYER TURNS -------- */}
      <PlayerTurns gameTurns={gameTurns} />
    </>
  );
}
