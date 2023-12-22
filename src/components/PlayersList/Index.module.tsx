import { useContext } from "react";
import PlayersContext from "../../context/PlayersContext"
import Card from "../Card/Index.module";
import ScoreChanger from "../ScoreChanger/Index.module";

export default function PlayersList () {
  const { players } = useContext(PlayersContext);
  const ulStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "0",
  };
  const liStyle: React.CSSProperties = {
    margin: '.25em'
  };

  return (
    <ul style={ulStyle}>
      {players.map(({ name, score }, index) => {
        return (
          <li key={index} style={liStyle}>
            <Card playerName={name} score={score}>
              <ScoreChanger playerName={name}/>
            </Card>
          </li>
        )
      })}
    </ul>
  )
}