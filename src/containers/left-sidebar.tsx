import routes from '../routes/sidebar';
import { NavLink, Link, useLocation } from 'react-router-dom';
import SidebarSubmenu from './sidebar-submenu';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';

function LeftSidebar() {
  const location = useLocation();

  const close = () => {
    document.getElementById('left-sidebar-drawer')?.click();
  };


  const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className=" z-30 border-r flex flex-col justify-between h-screen">
      <ul className="menu pt-2 w-80 bg-base-100 text-base-content flex-grow">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={e => close(e)}>
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link to={'/app/welcome'}>
            <img
              className="mask mask-squircle w-10"
              src="https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg"
              alt="Doraemon Logo"
            />
            English
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
                    `${isActive ? 'font-semibold bg-gray' : 'font-normal'
                    } hover:font-semibold`
                  }>
                  <span dangerouslySetInnerHTML={{ __html: route.icon }}></span>{' '}
                  {route.name}
                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"></span>
                  ) : null}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
      <div className="haha">
        <ul
          tabIndex={0}
          className="menu pt-2 w-80 bg-base-100 text-base-content">
          <li>
            <a onClick={logoutUser}><img src="http://cdn.onlinewebfonts.com/svg/img_98453.png" alt="" className='w-10 h-10'/> Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
