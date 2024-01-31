import "./App.css";
import Header from "./components/Header";
import HeaderContent from "./components/HeaderContent";
import GameSection from "./components/GameSection";
import "bootstrap/dist/css/bootstrap.min.css";
import gameLogo from "./assets/game-logo.png";

function App() {
  return (
    <>
      <Header className="header-img" image={gameLogo}>
        <HeaderContent>
          <h1 className="text-white">Tic-Tac-Toe</h1>
        </HeaderContent>
      </Header>
      <div>
        <GameSection />
      </div>
    </>
  );
}

export default App;
