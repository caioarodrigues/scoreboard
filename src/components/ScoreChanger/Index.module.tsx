import Button from "../Button/Index.module";
import PlayersContext from "../../context/PlayersContext";
import { useContext } from "react";

type ScoreChangerProps = {
  playerName: string;
}

export default function ScoreChanger ({ playerName }: ScoreChangerProps) {
  const { players, setPlayers } = useContext(PlayersContext);

  return (
    <section className={`score-changer ${playerName}`}>
      <Button style={{ backgroundColor: "green" }} onClick={() => {
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
      <Button style={{ backgroundColor: "red" }} onClick={() => {
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