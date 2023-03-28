import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './task-list-app/components/About';
import List from './task-list-app/components/List';
import ViewOrUpdateTask from './task-list-app/components/ViewOrUpdateTask';
import AddTask from './task-list-app/components/AddTask';
import Header from './task-list-app/components/common/Header';
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
  )
}

export default Router