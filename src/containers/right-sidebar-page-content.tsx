import { useAppSelector } from 'src/app/store';
import { Icon } from 'src/assets/icon';
import TitleCard from 'src/components/cards/title-card';


const RightSidebarPageContent = () => {

  const { user } = useAppSelector(state => state.user)

  const { history } = useAppSelector(state => state.history)

  const defaultAvataUrl = "https://1.bp.blogspot.com/-rt6mn1dJJ7M/XqZl2p-TboI/AAAAAAAAjO8/SzKdmwQAFhUH2CXgUH6kluj_G8Gig2-xgCLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%25281%2529.jpg"
  return (
    <div>
      {/* Người dùng */}
      <TitleCard title="" topMargin="mb-4">
        <div className='flex justify-center items-center'>


          <img
            src={user?.avatar ? `https://imtalabs.tech/${user.avatar}` : defaultAvataUrl}
            alt=""
            className="h-36 w-36 object-cover border rounded-full"
          />
        </div>
        <div className="flex justify-center ">
          <div className="rounded-b lg:rounded-b-none lg:rounded-r pl-4 flex flex-col justify-between leading-normal pt-[16px]">
            <div className="text-2xl font-bold flex justify-center truncate">
              {user?.username}
            </div>
            <div className="text-base flex justify-center">
              {user?.email}
            </div>
            <div className="badge badge-primary mx-auto">Student</div>
          </div>
        </div>
      </TitleCard>
      {/* {tiền} */}
      <TitleCard title="" topMargin="mt-4">
        <div
          className="max-w-sm w-full lg:max-w-full flex last:mb-0 items-center justify-between"
        >
          <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M10.64 1.54H3.36a1.07 1.07 0 0 0-.85.46L.69 4.52a1.05 1.05 0 0 0 .06 1.29l5.46 6.29a1 1 0 0 0 1.58 0l5.46-6.29a1.05 1.05 0 0 0 .06-1.29L11.49 2a1.07 1.07 0 0 0-.85-.46Z"></path><path d="M6.48 1.53L4.04 5.31L7 12.46m.55-10.93l2.43 3.78L7 12.46M.52 5.31h12.96"></path></g></svg>
            <div className="rounded-b lg:rounded-b-none lg:rounded-r pl-4 flex flex-col justify-between leading-normal">
              <div className="">
                <p className="text-xl font-bold ">{Math.round(user?.accounting_charge ?? 0)} point</p>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='text-gray-400' viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"></path></svg>
        </div>
      </TitleCard>

      <TitleCard title="History" topMargin="mt-4">
        <div
          className="max-w-sm w-full lg:max-w-full mb-6 last:mb-0 space-y-2"
        >


          {
            history?.map((item: any) => {
              return <div className=" group" key={item.id}>
                <div className=" py-2 px-4  border rounded-lg leading-none flex items-center justify-between space-x-6">
                  <div className='flex items-center gap-2'>
                    <span dangerouslySetInnerHTML={{ __html: Icon(item.skill) }} />
                    <div className="space-y-2">
                      <p className="0">{item.skill}</p>
                    </div>
                  </div>
                  <span className='text-xs text-gray-400'>{item.updated_at}</span>
                </div>
              </div>
            })
          }



        </div>
      </TitleCard>
    </div>

  );
};

export default RightSidebarPageContent;
