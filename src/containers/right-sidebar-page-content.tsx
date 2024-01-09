import React from 'react';
import TitleCard from 'src/components/cards/title-card';

type Props = {};

const dataForm = [
  {
    image:
      'https://img.freepik.com/premium-vector/languages-concept-with-flat-design_23-2147862541.jpg?w=826',
    nameCard: 'Members only',
    title: 'Can coffee make you a better developer?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisihil.',
  },
  {
    image:
      'https://img.freepik.com/premium-vector/languages-concept-with-flat-design_23-2147862541.jpg?w=826',
    nameCard: 'Members only',
    title: 'Can coffee make you a better developer?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisihil.',
  },
];
const RightSidebarPageContent = (props: Props) => {
  return (
    <TitleCard title="" topMargin="0">
      {dataForm?.map((item, index) => {
        return (
          <div
            className="max-w-sm w-full lg:max-w-full lg:flex mb-6 last:mb-0 lg:items-center"
            key={index}>
            <img
              src={item.image}
              alt=""
              className="h-32 w-20 object-cover border rounded"
            />
            <div className="rounded-b lg:rounded-b-none lg:rounded-r pl-4 flex flex-col justify-between leading-normal">
              <div className="">
                <div className="badge badge-primary text-xs">
                  {item.nameCard}
                </div>
                <div className="font-bold !text-lg my-2 !leading-5">
                  {item.title}
                </div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </TitleCard>
  );
};

export default RightSidebarPageContent;
