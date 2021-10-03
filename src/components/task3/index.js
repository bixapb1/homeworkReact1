import style from "./style.module.css";
import React from "react";

function TaskThree() {
  const [state, setState] = React.useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setState(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <header className={style.wrapper}>
        <div className={style.container}>
          <p style={{ textAlign: "center" }}>Task 3</p>
          <p>{state}</p>
        </div>
      </header>
    </>
  );
}

export default TaskThree;
