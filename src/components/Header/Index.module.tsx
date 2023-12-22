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
    <header style={headerStyle}>
      <h1 style={h1Style}>Scores Manager</h1>

      <section>
        {children}
      </section>
    </header>
  )
}