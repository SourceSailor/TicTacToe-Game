import "./App.css";
import Header from "./components/Header";
import HeaderContent from "./components/HeaderContent";
import GameSection from "./components/GameSection";
import "bootstrap/dist/css/bootstrap.min.css";
import gameLogo from "./assets/game-logo.png";
import "./styles/game-board.css";

function App() {
  return (
    <>
      <Header className="header-img" image={gameLogo}>
        <HeaderContent>
          <h1 className="header-title">Tic-Tac-Toe</h1>
        </HeaderContent>
      </Header>
      <div>
        <GameSection />
      </div>
    </>
  );
}

export default App;
