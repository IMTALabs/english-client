import PageContent from "./page-content";
import LeftSidebar from "./left-sidebar";
import RightSidebar from "./right-sidebar";
import ModalLayout from "./modal-layout";
import { useLocation } from "react-router-dom";
import Header from "./header";


function Layout() {
  const searchParams = useLocation()

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
