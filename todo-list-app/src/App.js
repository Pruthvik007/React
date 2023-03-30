import { React, useState } from "./utils/Imports";
import "./App.css";
import Router from "./Router";
export const ThemeContext = React.createContext();
function App() {

  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <div className={"App " + (isDarkTheme ? "dark-theme" : "light-theme")}>
      <ThemeContext.Provider value={{ isDarkTheme, setDarkTheme }}>
        <Router />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
