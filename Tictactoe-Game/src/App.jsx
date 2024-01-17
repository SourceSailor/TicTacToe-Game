import "./App.css";
import Header from "./components/Header";
import HeaderContent from "./components/HeaderContent";
import GameBoard from "./components/GameBoard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header>
        <HeaderContent>
          <h1>Tic-Tac-Toe</h1>
        </HeaderContent>
      </Header>
      <div>
        <GameBoard />
      </div>
    </>
  );
}

export default App;
