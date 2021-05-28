import "./App.css";
import Sidebar from './components/UI/Sidebar'
import Games from './components/Games/Games'
const App = () => {
  const GameData = [
    { name: "Pong", releaseDate: Date(2021, 5, 26)},
    { name: "Connect4", releaseDate: Date(2021, 6, 26)},
  ];
  return (
    <div>
      <Sidebar>
        <Games games={GameData}/>
      </Sidebar>
      

    </div>
  );
};

export default App;
