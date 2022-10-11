import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="display">
      <div className="stack">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
