import { useEffect, useState } from 'react';
import fakedata from './fakedata/data.json'
import Players from './components/Players/Players';
import Team from './components/Team/Team';
import './App.css'
function App() {
  const [players,setPlayer] = useState([]);
  const [singlePlayers,setSinglePlayer] = useState([]);
  useEffect(() => {
    setPlayer(fakedata);
  },[])

  const handleAddClick = (player)=> {
      const newPlayer = [...singlePlayers,player];
      setSinglePlayer(newPlayer)
  }
  const totalSalary = singlePlayers.reduce((sum,player) => sum + player.salary ,0);
  console.log(totalSalary)
  return (
    <div className="container">
      <div className = "row g-5">
          <div className = "col-md-8">
                {
                  players.map(player => <Players handleAddClick = {handleAddClick} player = {player} key={player.id} /> )
                }
        </div>
          <div className = "col-md-3">
            <div className = "mt-5">
              <h4>Player added: {singlePlayers.length}</h4>
              <h4>Total salary: {totalSalary}</h4>
              <h5 className='text-center mt-5'>Player list</h5>
            </div>
            {
              singlePlayers.map(singlePlayer => <Team singlePlayer = {singlePlayer} key={singlePlayer.id} /> )
            }
          </div>
      </div>
    </div>
  );
}

export default App;
