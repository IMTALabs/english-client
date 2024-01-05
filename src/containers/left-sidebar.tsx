import routes from "../routes/sidebar";
import { NavLink, Link, useLocation } from "react-router-dom";
import SidebarSubmenu from "./sidebar-submenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";

import { useState } from "react";

function LeftSidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(true)

  const close = () => {
    document.getElementById("left-sidebar-drawer")?.click();
  };

  // Thay đổi sidebar khi ở khích thước màn hình là lg
  // Giãn chiều rộng khi ở lg là từ 30-72
  // Co chiều rộng khi ở lg là từ 72-30
  const modifyWidthSideBar = () => {
    setOpen(!open)
  };

  // Mở rộng sidebar khi ở khích thước màn hình là lg
  // Giãn chiều rộng khi ở lg là từ 30-72
  const expandSideBar = () => {
    setOpen(true)
  };

  return (
    <div className="drawer-side z-30 shadow-lg ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay "></label>
      {/* "" */}
      <ul className={`${(open) ? "lg:w-72" : "lg:w-30" } transition-all ease-in-out duration-300 menu pt-2 bg-base-100 min-h-screen text-base-content`}>
        <button
          className="btn hidden lg:flex items-center transition-all w-20 mb-2 "
          onClick={e =>modifyWidthSideBar(e)}>
          <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
        <button
            className="btn btn-ghost bg-base-300 btn-circle lg:hidden mt-2 ml-3"
            onClick={e => close(e)}>
            <XMarkIcon className="h-5 inline-block w-5" />
        </button>
        <li className="font-semibold text-xl flex">
          <Link to={'/app/welcome'}>
            <img
              className="mask mask-squircle w-10"
              src="https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg"
              alt="Doraemon Logo"
            />
            <span className={`${open ? 'lg:inline-block' : 'lg:hidden'}`}>Doraemon</span>
          </Link>{' '}
        </li>
        {routes.map((route, k) => {
          return (
            <li className="text-xl pt-2" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    `${(isActive)
                      ? 'font-semibold text-white border-green-500 bg-green-500'
                      : 'font-normal'
                    } hover:font-semibold hover:text-white hover:border-green-500 hover:bg-green-500`
                  }
                  onClick={()=>{
                    expandSideBar()
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: `<img src=${route.icon} alt="Description of the image" />` }}></span> 
                  <span className={`${open ? "lg:inline-block": "lg:hidden"} mb-2 ml-2 font-semibold text-xl`}>
                    {route.name}
                    {location.pathname === route.path ? (
                      <span
                        className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-green-500"
                        aria-hidden="true"
                      ></span>
                    ) : null}
                  </span>

                </NavLink>
              )}
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default LeftSidebar;
