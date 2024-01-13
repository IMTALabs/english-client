import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";

import { openRightDrawer } from "src/features/common/right-drawer-slice";

import { RIGHT_DRAWER_TYPES } from "src/utils/global-constants";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  const { noOfNotifications, pageTitle } = useAppSelector(
    (state) => state.header
  );

  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
    // 👆 false parameter is required for react project
  }, []);

  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: "Notifications",
        bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
      })
    );
  };

  return (
    // navbar fixed  flex-none justify-between bg-base-300  z-10 shadow-md

    <>
      <div className="navbar sticky top-0 z-10 p-4 pb-0">
        <div className="bg-primary w-full rounded pr-2">
          {/* Menu toogle for mobile view or small screen */}
          <div className="flex-1">
            <label
              htmlFor="left-sidebar-drawer"
              className="btn btn-primary drawer-button lg:hidden border-none">
              <Bars3Icon className="h-5 inline-block w-5" />
            </label>
            <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
            <button className="rounded-l-none btn btn-xs pl-4 btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path>
              </svg>
            </button>
          </div>

          <div className="flex-none ">
            {/* Light and dark theme selection toogle **/}
            {/* <label className="swap ">
              <input type="checkbox" />
              <SunIcon
                data-set-theme="light"
                data-act-class="ACTIVECLASS"
                className={
                  'fill-current w-6 h-6 text-white' +
                  (currentTheme === 'dark' ? 'swap-on' : 'swap-off')
                }
              />
              <MoonIcon
                data-set-theme="dark"
                data-act-class="ACTIVECLASS"
                className={
                  'fill-current w-6 h-6 text-white' +
                  (currentTheme === 'light' ? 'swap-on' : 'swap-off')
                }
              />
            </label> */}

            {/* Notification icon */}
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => openNotification()}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512">
                  <mask id="circleFlagsUs0">
                    <circle cx="256" cy="256" r="256" fill="#fff"></circle>
                  </mask>
                  <g mask="url(#circleFlagsUs0)">
                    <path
                      fill="#eee"
                      d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"></path>
                    <path
                      fill="#d80027"
                      d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"></path>
                    <path fill="#0052b4" d="M0 0h256v256H0Z"></path>
                    <path
                      fill="#eee"
                      d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"></path>
                  </g>
                </svg>
              </div>
            </button>
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => openNotification()}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-white">
                  <path
                    fill="currentColor"
                    d="M5 19h2q.425 0 .713.288T8 20q0 .425-.288.713T7 21H4q-.425 0-.712-.288T3 20v-3q0-.425.288-.712T4 16q.425 0 .713.288T5 17zm14 0v-2q0-.425.288-.712T20 16q.425 0 .713.288T21 17v3q0 .425-.288.713T20 21h-3q-.425 0-.712-.288T16 20q0-.425.288-.712T17 19zM5 5v2q0 .425-.288.713T4 8q-.425 0-.712-.288T3 7V4q0-.425.288-.712T4 3h3q.425 0 .713.288T8 4q0 .425-.288.713T7 5zm14 0h-2q-.425 0-.712-.288T16 4q0-.425.288-.712T17 3h3q.425 0 .713.288T21 4v3q0 .425-.288.713T20 8q-.425 0-.712-.288T19 7z"></path>
                </svg>
              </div>
            </button>
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => openNotification()}>
              <div className="indicator">
                <BellIcon className="h-6 w-6 text-white" />
                {noOfNotifications > 0 ? (
                  <span className="indicator-item badge badge-secondary badge-sm px-1">
                    {noOfNotifications}
                  </span>
                ) : null}
              </div>
            </button>

            {/* Profile icon, opening menu on click */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
