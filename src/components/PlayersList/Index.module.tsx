import { useContext } from "react";
import PlayersContext from "../../context/PlayersContext"
import Card from "../Card/Index.module";
import ScoreChanger from "../ScoreChanger/Index.module";

export default function PlayersList () {
  const { players } = useContext(PlayersContext);
  return (
    <ul>
      {players.map(({ name, score }, index) => {
        return (
          <li key={index}>
            <Card playerName={name} score={score}>
              <ScoreChanger />
            </Card>
          </li>
        )
      })}
    </ul>
  )
}