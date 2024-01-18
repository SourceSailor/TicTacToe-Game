import { useState } from "react";

export default function Player({ name, symbol, ...props }) {
  const [player, setPlayer] = useState({
    name: name,
    symbol: symbol,
    isEditing: false,
  });

  function editButton() {
    setPlayer((oldData) => ({ ...oldData, isEditing: !oldData.isEditing }));
  }

  function updatePlayerName(e) {
    setPlayer((oldData) => ({ ...oldData, name: e.target.value }));
  }

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
          onChange={updatePlayerName}
        />
      )}

      <span>{player.symbol}</span>

      <button className="ms-2" onClick={editButton}>
        {!player.isEditing ? "Edit" : "Save"}
      </button>
    </div>
  );
}
