type CardProps = {
  playerName: string;
  score: number;
  children?: React.ReactNode;
};

const cardStyle: React.CSSProperties = {
  border: "solid 1px black",
  width: "10em",
  height: "10em",
  backgroundColor: "#f1a53b",
  borderRadius: ".25em",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const statsStyle: React.CSSProperties = {
  marginLeft: ".5em",
  marginTop: ".5em",
}

const childrenStyle: React.CSSProperties = {
  marginLeft: ".5em",
  marginBottom: ".5em",
}

export default function Card({ playerName, score, children }: CardProps) {
  return (
    <article className="card" style={cardStyle}>
      <div className="stats" style={statsStyle}>
        <h3>{playerName}</h3>
        <p>{score}</p>
      </div>

      {children && <div style={childrenStyle}> {children} </div>}
    </article>
  );
}
