import "./App.css";
import Coloumn from "./components/Column";

function App() {
  return (
    <>
      <div className="App">
        <Coloumn state="PLANNED" />
        <Coloumn state="ONGOING" />
        <Coloumn state="DONE" />"
      </div>
    </>
  );
}

export default App;
