import "./App.css";
import List from "./task-list-app/components/List";
import Task from "./task-list-app/components/Task";
import Home from "./Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import CountDown from "./CountDown";
function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/countdown" element={<CountDown />}></Route>
          <Route path="/tasksList" element={<List />}></Route>
          <Route path="/task/:isEditMode" element={<Task />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
