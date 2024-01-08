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
const QuizzListening = lazy(() => import('src/pages/protected/listening/quizz'))
const QuizzReading = lazy(() => import('src/pages/protected/reading/quizz/index'))
const ResultReading = lazy(() => import('src/pages/protected/reading/result/index'))
const ResultListening = lazy(() => import('src/pages/protected/listening/result'))
const QuizzWriting = lazy(() => import("src/pages/protected/writing/quizz"))
const ResultWriting = lazy(() => import("src/pages/protected/writing/result"))


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
          <Route path="/app/listening/quizz" element={<QuizzListening />} />
          <Route path="/app/reading/quizz" element={<QuizzReading />} />
          <Route path="/app/reading/result" element={<ResultReading />} />
          <Route path="/app/listening/result" element={<ResultListening />} />
          <Route path="/app/writing/quizz" element={<QuizzWriting />} />
          <Route path="/app/writing/result" element={<ResultWriting />} />






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
