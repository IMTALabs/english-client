import routes from "../routes/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import SidebarSubmenu from "./sidebar-submenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import authenticationApi from "src/features/services/authentication/authentication-api";
import { useAppDispatch } from "src/app/store";
import { showNotification } from "src/features/common/header-slice";

function LeftSidebar() {
  const location = useLocation();

  const dispatch = useAppDispatch()

  const close = () => {
    document.getElementById("left-sidebar-drawer")?.click();
  };

  const logoutUser = async () => {
    try {
      await authenticationApi.postLogout()
      dispatch(showNotification({ message: "Logout success", status: 1 }))
    }
    catch (err: any) {
      dispatch(showNotification({ message: err.message, status: 0 }))
    }
    finally {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  return (
    <div className="drawer-side z-30 h-[calc(100vh-80px)] top-14 ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-primary min-h-full text-accent  border-dashed border-r">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={e => close(e)}>
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>

        <div className="flex flex-1 flex-col justify-between text-black px-6 ">

          <div className="">
            <div className="flex items-center bg-gray-100  p-5 gap-x-4 rounded-md mb-12">
              <img src="https://criptic.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.661cd724.jpg&w=256&q=75" alt="" className="h-10 w-10 rounded-full" />
              <div>
                <p className="font-bold">CAMERON WILLIAMSON</p>
                <span>
                  admin
                </span>
              </div>
            </div>
            {routes.map((route, k) => {
              return (
                <li className="text-base pt-2" key={k}>
                  {route.submenu ? (
                    <SidebarSubmenu {...route} />
                  ) : (
                    <NavLink
                      end
                      to={route.path}
                      className={({ isActive }) =>
                        `${(isActive) ? 'font-semibold text-white bg-[#14161a]' : 'font-normal'
                        } hover:font-semibold hover:bg-[#14161a] item-link hover:text-white transition-all text-gray-500`
                      }
                    >
                      <span dangerouslySetInnerHTML={{ __html: route.icon }}></span> {route.name}
                      {location.pathname === route.path ? (
                        <span
                          className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                          aria-hidden="true"
                        ></span>
                      ) : null}
                    </NavLink>
                  )}
                </li>
              );
            })}
            <div className="relative mt-20 hidden flex-col rounded-lg bg-gray-200 p-6 lg:flex">
              <div className="-mt-12">
                <img alt="Shape image" loading="lazy" width="200" height="144" decoding="async" data-nimg="1" src="https://criptic.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsidebar-shape.47682628.png&w=256&q=75" />
              </div>
              <h2 className="mb-7 mt-5 text-center text-[20px] font-semibold leading-8 text-light-dark ">Explore the new Blockchain System</h2>
              <button className="h-12 rounded-lg bg-secondary text-white">Try Now </button>
            </div>
          </div>

          <button onClick={logoutUser} className="btn btn-ghost flex justify-start items-center px-4 py-2 gap-x-2 hover:bg-[#14161a] font-semibold hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.47 12.53a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72H15a.75.75 0 0 1 0 1.5H7.81l.72.72a.75.75 0 1 1-1.06 1.06z"></path><path fill="currentColor" fillRule="evenodd" d="M13.945 1.25h1.11c1.368 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.121.9-.38 1.658-.982 2.26c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-1.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982c-.398-.4-.647-.868-.805-1.402c-.951-.001-1.744-.012-2.386-.098c-.764-.103-1.426-.325-1.955-.854c-.529-.529-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79V9.447c0-1.133 0-2.058.098-2.79c.103-.763.325-1.425.854-1.954c.529-.529 1.19-.751 1.955-.854c.642-.086 1.435-.097 2.386-.098c.158-.534.407-1.003.806-1.402c.601-.602 1.36-.86 2.26-.981c.866-.117 1.969-.117 3.336-.117M7.252 17.004c.004.645.014 1.225.05 1.745c-.834-.003-1.454-.018-1.945-.084c-.598-.08-.89-.224-1.094-.428c-.204-.203-.348-.496-.428-1.094c-.083-.619-.085-1.443-.085-2.643v-5c0-1.2.002-2.024.085-2.643c.08-.598.224-.89.428-1.094c.203-.204.496-.348 1.094-.428c.491-.066 1.111-.08 1.946-.084c-.037.52-.047 1.1-.051 1.745a.75.75 0 0 0 1.5.008c.006-1.093.034-1.868.142-2.457c.105-.566.272-.895.515-1.138c.277-.277.666-.457 1.4-.556c.755-.101 1.756-.103 3.191-.103h1c1.436 0 2.437.002 3.192.103c.734.099 1.122.28 1.4.556c.276.277.456.665.555 1.4c.102.754.103 1.756.103 3.191v8c0 1.435-.001 2.436-.103 3.192c-.099.734-.279 1.122-.556 1.399c-.277.277-.665.457-1.399.556c-.755.101-1.756.103-3.192.103h-1c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.243-.244-.41-.572-.515-1.138c-.108-.589-.136-1.364-.142-2.457a.75.75 0 1 0-1.5.008" clipRule="evenodd"></path></svg>

            <p className="text-base">Sign out</p>
          </button>
        </div>
      </ul>
    </div>
  );
}

export default LeftSidebar;
