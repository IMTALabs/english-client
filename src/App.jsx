import { lazy, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";
// Importing pages
const Layout = lazy(() => import("./containers/layout"));
const Login = lazy(() => import("./pages/public/login"));
const ForgotPassword = lazy(() => import("./pages/public/forgot-password"));
const Register = lazy(() => import("./pages/public/register"));

// Initializing different libraries
initializeApp();

// Check for login and initialize axios
const token = checkAuth();

const App = () => {



  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />

          <Route
            path="*"
            element={
              <Navigate to={token ? '/app/welcome' : '/login'} replace />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
