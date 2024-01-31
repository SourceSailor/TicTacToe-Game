import "../styles/game-board.css";

export default function Header({ children, image, ...props }) {
  return (
    <header>
      <img {...props} src={image} alt="" />
      {children}
    </header>
  );
}
