import style from "./style.module.css";
import poster from "../task1/assets/1.jpeg";
function TaskOne({ nameFilm, nameProducer, year, company }) {
  return (
    <>
      <header className={style.wrapper}>
        <div className={style.container}>
          <p style={{ textAlign: "center" }}>Task 1</p>
          <img
            style={{ width: "100%", height: "200px" }}
            src={poster}
            alt="poster"
          />
          <p style={{ textAlign: "center" }}>{nameFilm}</p>
          <p>Director: {nameProducer}</p>
          <p>Year: {year}</p>
          <p>Film company: {company} </p>
        </div>
      </header>
    </>
  );
}

export default TaskOne;
