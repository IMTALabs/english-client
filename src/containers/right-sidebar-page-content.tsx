import { useAppSelector } from 'src/app/store';
import { Icon } from 'src/assets/icon';
import TitleCard from 'src/components/cards/title-card';

const RightSidebarPageContent = () => {
  const { user } = useAppSelector(state => state.user);
  const { history } = useAppSelector(state => state.history);



  const defaultAvataUrl =
    'https://1.bp.blogspot.com/-rt6mn1dJJ7M/XqZl2p-TboI/AAAAAAAAjO8/SzKdmwQAFhUH2CXgUH6kluj_G8Gig2-xgCLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%25281%2529.jpg';
  return (
    <div className='divide-y divide-dashed'>
      {/* Người dùng */}
      <TitleCard title="" topMargin="mb-4">
        <div className="flex justify-center items-center">
          <img
            src={
              user?.avatar
                ? `http://imta-chatbot.online${user.avatar}`
                : defaultAvataUrl
            }
            alt=""
            className="h-36 w-36 object-cover border rounded-full"
          />
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-col justify-between leading-normal pt-4">
            <div className="text-2xl font-bold flex justify-center truncate">
              {user?.username}
            </div>
            <div className="text-base flex justify-center">{user?.email}</div>
            <div className="badge badge-primary mx-auto mt-2">Student</div>
          </div>
        </div>
      </TitleCard>
      {/* {tiền} */}
      <TitleCard title="" topMargin="mt-4">
        <div className="max-w-sm w-full lg:max-w-full flex last:mb-0 items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-1.58-3.89l6.215-5.966a.2.2 0 0 0-.14-.344l-4.519.052a.2.2 0 0 1-.184-.283l1.654-3.64c.09-.2-.16-.378-.32-.227l-5.76 5.448a.2.2 0 0 0 .137.345h4.641a.2.2 0 0 1 .176.295l-2.215 4.08c-.11.2.15.397.314.24"
                clipRule="evenodd"></path>
            </svg>
            <div className="rounded-b lg:rounded-b-none lg:rounded-r pl-4 flex flex-col justify-between leading-normal">
              <div className="">
                <p className="text-xl">
                  {Math.round(user?.accounting_charge ?? 0)}{' '}
                  <strong className="text-sm">IMTA Point</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="text-gray-400"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"></path>
              </svg>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-56 !-translate-x-48 space-y-1">
              <div className="flex justify-between items-center">
                <p> Listening </p>
                <p>1</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Reading (Your article)</p>
                <p>1</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Reading ( Generate Article)</p>
                <p>2</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Writing</p> <p>8</p>
              </div>
            </div>
          </div>
        </div>
      </TitleCard>

      {history && (
        <TitleCard title="Generation History" topMargin="mt-4 text-center">
          <div className="max-w-sm w-full lg:max-w-full mb-6 last:mb-0 space-y-2">
            {history?.data?.map((item: any) => {
              return (
                <div className=" group" key={item.id}>
                  <div className=" py-2 px-4 leading-none flex items-center justify-between space-x-6 bg-gray-100 rounded-md">
                    <div className="flex items-center gap-2">
                      <span
                        dangerouslySetInnerHTML={{ __html: Icon(item.skill) }}
                      />
                      <div className="space-y-2">
                        <p className="text-sm">{item.skill}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 truncate">
                      {item.created_at}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TitleCard>
      )}
    </div>
  );
};

export default RightSidebarPageContent;
