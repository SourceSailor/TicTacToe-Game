export default function PlayerTurns({ gameTurns }) {
  return (
    gameTurns.length > 0 && (
      <div className="player-turns-section col-6 mx-auto">
        <h2 className="text-center text-decoration-underline">Game Turns</h2>
        <ul>
          <h3>
            {gameTurns.map((turn, index) => (
              <li className="my-3" key={index}>
                {turn.symbol} - Row {turn.row} Column {turn.col}
              </li>
            ))}
          </h3>
        </ul>
      </div>
    )
  );
}
