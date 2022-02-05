import "./App.css";
import { Header, Chat } from "./Components";

function App() {
  return (
    <div className="App bg-light d-flex flex-column">
      <Header />
      <Chat />
    </div>
  );
}

export default App;
