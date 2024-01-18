import "../styles/game-board.css";
import { useState } from "react";
import Player from "./Player";

export default function GameBoard() {
  return (
    <main className="game-board mx-auto d-flex justify-content-center p-5 mt-5 flex-column">
      <section className="d-flex justify-content-center">
        <Player className={"px-2"} name="Player 1" symbol="X" />
        <Player className={"px-2"} name="Player 2" symbol="O" />
      </section>
      <section className="d-flex justify-content-center">
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
      </section>
    </main>
  );
}
