import { useEffect } from "react";
import "./App.css";

import { themeChange } from "theme-change";
import initializeApp from "./app/init";
import AppRouter from "./routes/AppRouter";
// Importing pages

// Initializing different libraries
initializeApp();
// Check for login and initialize axios

const App = () => {
  // const dispatch = useAppDispatch();
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);


  return <AppRouter />
}

export default App;
