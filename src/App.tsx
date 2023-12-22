import './App.css'
import Button from './components/Button/Index.module'
import Card from './components/Card/Index.module'
import Header from './components/Header/Index.module'
import Input from './components/Input/Index.module'
import ScoreChanger from './components/ScoreChanger/Index.module'
import Stats from './components/Stats/Index.module'
import PlayersContext from './context/PlayersContext'
import { useRef, useState } from 'react'
import { Player } from './types/Player'

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [players, setPlayers] = useState<Player[]>([
    {
      name: 'teste',
      score: 0,
      id: 1
    },
    {
      name: 'teste2',
      score: 0,
      id: 2
    }
  ]);

  return (
    <>
      <PlayersContext.Provider value={{ players, setPlayers }}>
        <Header>
          <Input style={{}} type='text' ref={inputRef} placeholder='new player'/>
          <Button onClick={() => {
            const newPlayerName = inputRef.current?.value;
            if (inputRef.current?.value === '') 
              return alert('Please, enter a name');
          
            if(newPlayerName) {
              setPlayers(state => [...state, { id: state.length + 1, name: newPlayerName, score: 0  }]);
              inputRef.current.value = '';
              inputRef.current.focus();
            }
          }}
          style={{}}>
            add
          </Button>
        </Header>
        <Stats />
        <Card playerName='teste' score={2}>
          <ScoreChanger />
        </Card>
      </PlayersContext.Provider>
    </>
  )
}

export default App