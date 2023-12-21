type headerProps = { 
  children?: React.ReactNode;
}

export default function Header ({ children }: headerProps) {
  return (
    <header>
      <h1>Scores Manager</h1>

      <section>
        {children}
      </section>
    </header>
  )
}