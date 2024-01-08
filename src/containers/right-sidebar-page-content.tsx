import React from 'react';
import TitleCard from 'src/components/cards/title-card';
import StyleImageItem from 'src/components/styleItem';

type Props = {};

const dataForm = [
  {
    image:
      'https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg',
    nameCard: 'Members only',
    title: 'Can coffee make you a better developer?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisihil.',
  },
  {
    image:
      'https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg',
    nameCard: 'Members only',
    title: 'Can coffee make you a better developer?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisihil.',
  },
];
const theme = localStorage.getItem('theme');

const RightSidebarPageContent = (props: Props) => {
  return (
    <nav
      className={`w-full ${
        theme == 'light' ? ' bg-[#f9f9f9]' : ' bg-base-100'
      } `}>
      <div className="flex justify-between items-center py-4 px-5">
        <div className="">
          <span className="text-[18px] font-bold text-[#fb992d] pr-2">
            Cài đặt
          </span>
          <span className="text-[18px] font-bold text-[#000] cursor-pointer">
            Lịch sử
          </span>
        </div>
        <span className="block text-2xl">
          <i className="fa-solid fa-square-caret-right "></i>
        </span>
      </div>
      <ul className="space-y-7 py-4 px-5">
        <li>
          <i className="fa-solid fa-angle-right mr-2"></i>
          <span className="text-sm">Người mẫu (SDXL V1.0) </span>
        </li>
        <li className="">
          <div className="mb-3  ">
            <i className="fa-solid fa-angle-right mr-2"></i>
            <span className="text-sm">Phong cách (Nghệ thuật Ảo ảnh)</span>
          </div>
          <div className="grid grid-cols-3 gap-4 h-[250px] overflow-y-auto">
            {Array(10)
              .fill(0)
              .map((item, index) => (
                <StyleImageItem key={index} />
              ))}
          </div>
        </li>
        <li>
          <div className="mb-3">
            <i className="fa-solid fa-angle-right mr-2"></i>
            <span className="text-sm">Hình ảnh để hình ảnh</span>
          </div>
          <div className="flex justify-center flex-col w-full h-[200px] items-center bg-white text-black rounded-lg">
            <label htmlFor="image" className="cursor-pointer">
              <i className="fa-solid fa-image text-3xl"></i>
            </label>
            <input type="file" id="image" hidden />
            <p className="text-sm">
              <span className="text-orange-500">Tải lên</span> một hình ảnh để
              tạo các biến thể
            </p>
          </div>
        </li>
        <li>
          <div className="mb-3  ">
            <i className="fa-solid fa-angle-right mr-2"></i>
            <span className="text-sm">Lời nhắc tiêu cực</span>
          </div>
        </li>
        <li>
          <div className="mb-3  ">
            <i className="fa-solid fa-angle-right mr-2"></i>
            <span className="text-sm">Đếm hình ảnh</span>
          </div>
          <ul className="flex space-x-4">
            {Array(3)
              .fill(0)
              .map((num, index) => (
                <span
                  className="block w-8 h-6 leading-6 bg-white rounded-full text-center"
                  key={index}>
                  {index + 1}
                </span>
              ))}
            <span className="block w-8 h-6 leading-6 bg-orange-500 text-white rounded-full text-center">
              4
            </span>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default RightSidebarPageContent;
