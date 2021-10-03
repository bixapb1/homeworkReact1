import "./App.css";
import TaskOne from "./components/task1/index.js";
import TaskTwo from "./components/task2/index.js";
import TaskThree from "./components/task3/index.js";
import TaskFour from "./components/task4/index.js";

function App() {
  return (
    <>
      <TaskOne
        nameFilm="The Matrix"
        nameProducer="Wachowski brothers"
        year="1999"
        company="Warner Bros."
      />
      <TaskTwo
        name="Maxim"
        surname="Vikharev"
        year="1990"
        city="Kiev"
        email="bixapb@gmail.com"
      />
      <TaskThree />
      <TaskFour animal="Cat" name="Joe" />
    </>
  );
}

export default App;
