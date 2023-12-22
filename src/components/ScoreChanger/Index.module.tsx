import Button from "../Button/Index.module";
import PlayersContext from "../../context/PlayersContext";
import { useContext } from "react";
import "./style.css";

type ScoreChangerProps = {
  playerName: string;
}

const buttonStyle: React.CSSProperties = {
  width: "1.75em",
  height: "1.75em",
  borderRadius: ".25em",
  color: "black",
  fontSize: "1.5em",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
}

const addScoreButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: "green"
}

const subtractScoreButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: "red"
}

export default function ScoreChanger ({ playerName }: ScoreChangerProps) {
  const { players, setPlayers } = useContext(PlayersContext);

  return (
    <section className={`score-changer ${playerName}`}>
      <Button style={addScoreButtonStyle} onClick={() => {
        const newPlayers = players.map(player => {
          if (player.name === playerName) {
            return {
              ...player,
              score: player.score + 1
            }
          }
          return player;
        });
        setPlayers(newPlayers);
      }}>
        +
      </Button>
      <Button style={subtractScoreButtonStyle} onClick={() => {
        const newPlayers = players.map(player => {
          if (player.name === playerName) {
            if (player.score === 0) return player;

            return {
              ...player,
              score: player.score - 1
            }
          }
          return player;
        });
        setPlayers(newPlayers);
      }}>
        -
      </Button>
    </section>
  )
}