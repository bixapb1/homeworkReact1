import style from "./style.module.css";
import avatar from "../task2/assets/1.jpg";
function TaskTwo({ name, surname, year, city, email }) {
  return (
    <>
      <header className={style.wrapper}>
        <div className={style.container}>
          <p style={{ textAlign: "center" }}>Task 2</p>
          <img
            style={{ width: "100%", height: "200px" }}
            src={avatar}
            alt="avatar"
          />
          <p>
            {name} {surname}
          </p>
          <p>{year} </p>
          <p>{city}</p>
          <p>{email}</p>
        </div>
      </header>
    </>
  );
}

export default TaskTwo;
