import Button from "../Button/Index.module";

export default function ScoreChanger () {
  return (
    <section className="score-changer">
      <Button style={{ backgroundColor: "green" }} onClick={() => console.log("clicked")}>
        +
      </Button>
      <Button style={{ backgroundColor: "red" }} onClick={() => console.log("clicked")}>
        -
      </Button>
    </section>
  )
}