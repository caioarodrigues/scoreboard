import "./style.css";

type headerProps = { 
  children?: React.ReactNode;
}

const headerStyle: React.CSSProperties = { 
  backgroundColor: "#a96824",
}

const h1Style: React.CSSProperties = {
  color: "#fff"
}

export default function Header ({ children }: headerProps) {
  return (
    <header className="header" style={headerStyle}>
      <h1 style={h1Style}>Scores Manager</h1>

      {children && <section className="header-children">{children}</section>}
    </header>
  )
}