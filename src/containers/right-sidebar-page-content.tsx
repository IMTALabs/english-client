import { useAppSelector } from 'src/app/store';
import TitleCard from 'src/components/cards/title-card';


const RightSidebarPageContent = () => {

  const { user } = useAppSelector(state => state.user)


  return (
    <div>
      {/* Người dùng */}
      <TitleCard title="" topMargin="mb-4">
        <div className='flex justify-center items-center'>
          <img
            src='https://1.bp.blogspot.com/-rt6mn1dJJ7M/XqZl2p-TboI/AAAAAAAAjO8/SzKdmwQAFhUH2CXgUH6kluj_G8Gig2-xgCLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%25281%2529.jpg'
            alt=""
            className="h-36 w-36 object-cover border rounded-full"
          />
        </div>
        <div
          className="text-center">

          <div className="rounded-b lg:rounded-b-none lg:rounded-r pl-4 flex flex-col justify-between leading-normal pt-[16px]">
            <div className="">
              <div className="text-2xl font-bold">
                {user?.username}
              </div>
              <div className="text-2xl">
                {user?.email}
              </div>
              <p className="text-2xl ">{user?.phoneNumber}</p>
            </div>
          </div>
        </div>
      </TitleCard>
      {/* {tiền} */}
      <TitleCard title="" topMargin="0">
        <div
          className="max-w-sm w-full lg:max-w-full lg:flex mb-6 last:mb-0 lg:items-center"
        >
          <div className="rounded-b lg:rounded-b-none lg:rounded-r pl-4 flex flex-col justify-between leading-normal">
            <div className="">
              <div className="badge badge-primary text-xs">
                {user?.nameCard}
              </div>
              <div className="font-bold !text-lg my-2 !leading-5">
                {user?.title}
              </div>
              <p className="text-sm text-gray-500">{user?.description}</p>
            </div>
          </div>
        </div>
      </TitleCard>
    </div>

  );
};

export default RightSidebarPageContent;
