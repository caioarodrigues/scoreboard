type CardProps = {
  playerName: string;
  score: number;
  children?: React.ReactNode;
}

export default function Card({ playerName, score, children }: CardProps) {
  return (
    <article className="card" style={{ border: 'solid 1px black', width: '10em', height: '10em' }}>
      <div className="stats">
        <h3>{playerName}</h3>
        <p>{score}</p>

        {children ? <div>
          {children}
        </div> : null}
      </div>
    </article>
  )
}