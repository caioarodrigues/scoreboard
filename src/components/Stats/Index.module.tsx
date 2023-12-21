import { useContext } from "react"
import PlayersContext from "../../context/PlayersContext"
import Card from "../Card/Index.module";

export default function Stats () {
  const { players } = useContext(PlayersContext);
  const sortedPlayers = players.sort((a, b) => b.score - a.score);
  
  return (
    <section className="stats" >
      <h2>Top scores</h2>
      <div className="sorted-players" style={{ display: 'flex', backgroundColor: 'red' }} >
        {sortedPlayers.map(({ name, score }, index) => {
          return (
            <Card playerName={name} score={score} key={index}/>
          )
        })}
      </div>
    </section>
  )
}