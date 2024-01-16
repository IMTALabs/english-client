import PageContent from "./page-content";
import LeftSidebar from "./left-sidebar";
import RightSidebar from "./right-sidebar";
import { useEffect } from "react";
import { removeNotificationMessage } from "src/features/common/header-slice";
import ModalLayout from "./modal-layout";
import { useAppSelector, useAppDispatch } from "src/app/store";
import { useLocation } from "react-router-dom";
import Header from "./header";

function Layout() {
  const dispatch = useAppDispatch();
  const searchParams = useLocation()
  const { newNotificationMessage, newNotificationStatus } = useAppSelector(
    (state) => state.header
  );

  useEffect(() => {
    if (newNotificationStatus) {
      dispatch(removeNotificationMessage('aha'));
    }
  }, [newNotificationStatus]);

  const hideSidebar = searchParams.pathname.includes('quizz') || searchParams.pathname.includes('result')


  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <Header />
      <div className="drawer lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent />
        {!hideSidebar && <LeftSidebar />}
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />


      {/* Modal layout container */}
      <ModalLayout />
    </>
  );
}

export default Layout;
