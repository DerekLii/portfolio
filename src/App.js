import "./App.css";
import Projects from "./components/Projects";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";

function App() {
  return (
    <div id="home" className="App">
      <NavBar></NavBar>
      <Introduction></Introduction>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}

export default App;
