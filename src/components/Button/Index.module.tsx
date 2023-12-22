type buttonProps = {
  style: React.CSSProperties;
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button ({ style, children, onClick }: buttonProps) {
  return (
    <button style={style} onClick={onClick} className="button">
      {children}
    </button>
  )
}