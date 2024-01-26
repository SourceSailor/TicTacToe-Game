export default function PlayerTurns({ gameTurns }) {
  return (
    <>
      <ul>
        <h3>
          {gameTurns.map((turn, index) => (
            <li className="my-3" key={index}>
              {turn.player} - Row {turn.row} Col {turn.col}
            </li>
          ))}
        </h3>
      </ul>
    </>
  );
}
