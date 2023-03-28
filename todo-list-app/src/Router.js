import { React, BrowserRouter, Routes, Route } from "./utils/Imports";
import { Header, AddTask, ViewOrUpdateTask, List, About } from "./utils/Imports";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<List />}></Route>
        <Route path="/tasksList" element={<List />}></Route>
        <Route path="/addTask" element={<AddTask />}></Route>
        <Route path="/task/:isEditMode" element={<ViewOrUpdateTask />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
