import Projects from "./components/Projects/Projects";
import style from "./main.module.scss";

function App() {
  return (
    <div className={style.App}>
      <header>
        <h1>A collection of small projects</h1>
      </header>
      <Projects />
      <footer>
        <a href="https://github.com/hamiat">by: Hamiat</a>
      </footer>
    </div>
  );
}

export default App;
