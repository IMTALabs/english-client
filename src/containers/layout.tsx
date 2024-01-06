import PageContent from "./page-content";
import LeftSidebar from "./left-sidebar";
import RightSidebar from "./right-sidebar";
import { useEffect } from "react";
import { removeNotificationMessage } from "src/features/common/header-slice";
import ModalLayout from "./modal-layout";
import { useAppSelector, useAppDispatch } from "src/app/store";

function Layout() {
  const dispatch = useAppDispatch();
  const { newNotificationMessage, newNotificationStatus } = useAppSelector(
    (state) => state.header
  );

    useEffect(() => {
        if (newNotificationStatus) {
        dispatch(removeNotificationMessage('aha'));
        }
    }, [newNotificationStatus]);



  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent />
        <LeftSidebar />
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />


      {/* Modal layout container */}
      <ModalLayout />
    </>
  );
}

export default Layout;
