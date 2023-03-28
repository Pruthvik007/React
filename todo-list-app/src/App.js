import React, { useState } from "react";
import "./App.css";
import Router from "./Router";
export const ThemeContext = React.createContext();
function App() {

  const [isDarkTheme, setDarkTheme] = useState(true);

  return (
    <div className={"App " + (isDarkTheme ? "dark-theme" : "light-theme")}>
      <ThemeContext.Provider value={{ isDarkTheme, setDarkTheme }}>
        <Router />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
