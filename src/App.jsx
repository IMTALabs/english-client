import { useEffect } from "react";
import "./App.css";

import { themeChange } from "theme-change";
import initializeApp from "./app/init";
import AppRouter from "./routes/AppRouter";
import { useAppDispatch, useAppSelector } from 'src/app/store';


import { removeNotificationMessage } from 'src/features/common/header-slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Importing pages


// Initializing different libraries
initializeApp();
// Check for login and initialize axios

const App = () => {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  const dispatch = useAppDispatch();

  const { newNotificationMessage, newNotificationStatus } = useAppSelector(
    (state) => state.header
  );

  useEffect(() => {
    if (newNotificationMessage !== "") {
      if (newNotificationStatus === 1) {
        toast.success(newNotificationMessage)
      }
      if (newNotificationStatus === 0) {
        toast.error(newNotificationMessage)
      }
      dispatch(removeNotificationMessage())
    }
  }, [dispatch, newNotificationMessage, newNotificationStatus])


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AppRouter />
    </>
  );
}

export default App;
