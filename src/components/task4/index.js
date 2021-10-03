import style from "./style.module.css";
import avatar from "../task4/assets/1.jpg";
function TaskFour({ animal, name }) {
  return (
    <>
      <header className={style.wrapper}>
        <div className={style.container}>
          <p style={{ textAlign: "center" }}>Task 4</p>
          <img
            style={{ width: "100%", height: "200px" }}
            src={avatar}
            alt="avatar"
          />
          <p style={{ textAlign: "center" }}>
            {animal} : {name}
          </p>
        </div>
      </header>
    </>
  );
}

export default TaskFour;
