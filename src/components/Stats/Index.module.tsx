import { useContext } from "react"
import PlayersContext from "../../context/PlayersContext"
import Stat from "../Stat/Index.module";

const statsStyle: React.CSSProperties = {
  backgroundColor: "#ffed68",
  padding: "1rem",
}

const sortedPlayersStyle: React.CSSProperties = { 
  backgroundColor: '#a96824', 
  padding: '.5rem', 
  listStylePosition: 'inside',
  borderRadius: '.25rem',
  color: '#fff',
}

export default function Stats () {
  const { players } = useContext(PlayersContext);
  const sortedPlayers = players.sort((a, b) => b.score - a.score);
  
  return (
    <section className="stats" style={statsStyle}>
      <h2>Top scores</h2>
      <ol className="sorted-players" style={sortedPlayersStyle} >
        {sortedPlayers.map(({ name, score }, index) => {
          return (
            <>
              {index === 0 && <hr /> }
              <Stat key={index} name={name} score={score} />
              <hr />
            </>
          )
        })}
      </ol>
    </section>
  )
}