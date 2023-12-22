import { useContext } from "react"
import PlayersContext from "../../context/PlayersContext"
import Stat from "../Stat/Index.module";

export default function Stats () {
  const { players } = useContext(PlayersContext);
  const sortedPlayers = players.sort((a, b) => b.score - a.score);
  
  return (
    <section className="stats" >
      <h2>Top scores</h2>
      <ul className="sorted-players" style={{ backgroundColor: 'red' }} >
        {sortedPlayers.map(({ name, score }, index) => {
          return (
            <Stat key={index} name={name} score={score} />
          )
        })}
      </ul>
    </section>
  )
}