import "../styles/game-board.css";
import Player from "./Player";
import GameBoard from "./GameBoard";

export default function GameSection() {
  return (
    <main className="game-board mx-auto justify-content-center p-5 mt-5 flex-column col-9">
      <section className="d-flex justify-content-center">
        <Player className={"px-2"} name="Player 1" symbol="X" />
        <Player className={"px-2"} name="Player 2" symbol="O" />
      </section>
      <section className="d-flex justify-content-center mt-5 ">
        <GameBoard />
      </section>
    </main>
  );
}
