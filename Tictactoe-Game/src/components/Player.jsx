import "../styles/game-board.css";

export default function Player({
  editPlayerName,
  player,
  savePlayerName,
  ...props
}) {
  return (
    <div {...props}>
      {!player.isEditing ? (
        <span className="px-3">{player.name}</span>
      ) : (
        <input
          className="me-3"
          type="text"
          name="name"
          id="name"
          value={player.name}
          onChange={savePlayerName}
        />
      )}

      <span>{player.symbol}</span>

      <button className="ms-2 player-select-button" onClick={editPlayerName}>
        {!player.isEditing ? "Edit" : "Save"}
      </button>
    </div>
  );
}
