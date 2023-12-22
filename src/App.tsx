import "./App.css";
import Button from "./components/Button/Index.module";
import Header from "./components/Header/Index.module";
import Input from "./components/Input/Index.module";
import Stats from "./components/Stats/Index.module";
import PlayersContext from "./context/PlayersContext";
import { useRef, useState } from "react";
import { Player } from "./types/Player";
import PlayersList from "./components/PlayersList/Index.module";

const bodyStyle: React.CSSProperties = {
  backgroundColor: "#ffed68",
  height: "100vh",
};

const addPlayerButtonStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  color: "black",
  marginInlineStart: ".25em",
  padding: ".5em",
  borderRadius: ".25rem",
  border: "none",
  cursor: "pointer",
};

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [players, setPlayers] = useState<Player[]>([
    {
      name: "teste",
      score: 0,
      id: 1,
    },
    {
      name: "teste2",
      score: 0,
      id: 2,
    },
  ]);

  return (
    <body style={bodyStyle}>
      <PlayersContext.Provider value={{ players, setPlayers }}>
        <Header>
          <Input
            style={{}}
            type="text"
            ref={inputRef}
            placeholder="new player"
          />
          <Button
            onClick={() => {
              const newPlayerName = inputRef.current?.value;
              if (inputRef.current?.value === "")
                return alert("Please, enter a name");

              if (newPlayerName) {
                const playerExists = players.find(
                  (player) => player.name === newPlayerName
                );

                if (playerExists) return alert("This player already exists");

                setPlayers((state) => [
                  ...state,
                  { id: state.length + 1, name: newPlayerName, score: 0 },
                ]);
                inputRef.current.value = "";
                inputRef.current.focus();
              }
            }}
            style={addPlayerButtonStyle}
          >
            add
          </Button>
        </Header>
        <Stats />
        <PlayersList />
      </PlayersContext.Provider>
    </body>
  );
}

export default App;
