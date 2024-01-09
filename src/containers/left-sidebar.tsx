import {Link, useLocation} from 'react-router-dom';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import SearchBar from 'src/components/input/search-bar';
import {useState} from 'react';

function LeftSidebar() {
  const location = useLocation();

  const close = () => {
    document.getElementById('left-sidebar-drawer')?.click();
  };
  const [searchText, setSearchText] = useState('');
  return (
    <div className="drawer-side z-30">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <div className="flex items-center gap-4 pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 512 512">
          <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z" />
        </svg>
        <div className="leading-4">
          <p className="font-bold text-2xl">Sider</p>
          <p>ChatGPT Sidebar</p>
        </div>
      </div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        styleClass="mt-2 mr-2"
        placeholderText="Tìm kiếm"
      />
      <div>
        <p className="opacity-50 mt-2">Chat with</p>
        <div>
          <ul className="menu pt-1 w-80 bg-base-100 max-h-full text-base-content mt-5 overflow-auto mr-2">
            <button
              className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
              onClick={e => close(e)}>
              <XMarkIcon className="h-5 inline-block w-5" />
            </button>

            <div className="h-[260px]">
              <li className="mb-2 font-semibold text-xl">
                <Link to={'/app/welcome'}>
                  <img
                    className="mask mask-squircle w-10"
                    src="https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg"
                    alt="Doraemon Logo"
                  />
                  Doraemon
                </Link>{' '}
              </li>
              <li className="mb-2 font-semibold text-xl">
                <Link to={'/app/welcome'}>
                  <img
                    className="mask mask-squircle w-10"
                    src="https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg"
                    alt="Doraemon Logo"
                  />
                  Doraemon
                </Link>{' '}
              </li>
              <li className="mb-2 font-semibold text-xl">
                <Link to={'/app/welcome'}>
                  <img
                    className="mask mask-squircle w-10"
                    src="https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg"
                    alt="Doraemon Logo"
                  />
                  Doraemon
                </Link>{' '}
              </li>
              <li className="mb-2 font-semibold text-xl">
                <Link to={'/app/welcome'}>
                  <img
                    className="mask mask-squircle w-10"
                    src="https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg"
                    alt="Doraemon Logo"
                  />
                  Doraemon
                </Link>{' '}
              </li>
            </div>
          </ul>
          <div className="bg-base-100 flex gap-4 justify-center items-center mt-5 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512">
              <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
            </svg>
            <p className="w-[50%] text-base font-normal">
              Mời truy vấn văn bản nâng cao
            </p>
          </div>
          <div className="mt-2">
            <p className="font-bold text-base">Truy vấn với hình ảnh</p>
            <div className="pr-8 pt-2">
              <div className="flex justify-between border-b-2 p-2">
                <p>Kế hoạch:</p>
                <p>
                  <strong>1</strong> còn lại
                </p>
              </div>
              <div className="flex justify-between border-b-2 p-2">
                <p>Thêm:</p>
                <p>
                  <strong>0</strong> còn lại
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <p className="w-[50%] text-center bg-base-200 rounded-full p-2">
              Chuyển sang phí bảo hiểm để nhận được nhiều hơn
            </p>
          </div>
          <div className="flex items-center justify-between mr-10 mt-5">
            <div className="flex items-center gap-4">
              <img
                className="mask mask-squircle rounded-full w-10"
                src="https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg"
                alt="Doraemon Logo"
              />
              <p>User_JDkCle</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512">
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
