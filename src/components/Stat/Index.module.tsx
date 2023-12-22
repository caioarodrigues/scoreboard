type statProps = {
  name: string;
  score: number;
}

export default function Stat ({ name, score }: statProps) {
  return (
    <li className="stat">
      <span className="stat-name">{name}: </span>
      <span className="stat-score">{score}</span>
    </li>
  )
}