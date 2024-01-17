import "../styles/header-styles.css";

export default function Header({ children }) {
  return (
    <header>
      <img className="header-img" src="game-logo.png" alt="" />
      {children}
    </header>
  );
}
