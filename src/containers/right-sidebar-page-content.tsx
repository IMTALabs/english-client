import { useAppSelector } from 'src/app/store';
import TitleCard from 'src/components/cards/title-card';


const RightSidebarPageContent = () => {

  const { user } = useAppSelector(state => state.user)
  console.log(user);


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
              <div className="text-base">
                {user?.email}
              </div>
              <div className="badge badge-primary">Student</div>
            </div>
          </div>
        </div>
      </TitleCard>
      {/* {tiền} */}
      <TitleCard title="" topMargin="mt-4">
        <div
          className="max-w-sm w-full lg:max-w-full lg:flex last:mb-0 lg:items-center justify-between"
        >
          <div className='lg:flex lg:items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.64 1.54H3.36a1.07 1.07 0 0 0-.85.46L.69 4.52a1.05 1.05 0 0 0 .06 1.29l5.46 6.29a1 1 0 0 0 1.58 0l5.46-6.29a1.05 1.05 0 0 0 .06-1.29L11.49 2a1.07 1.07 0 0 0-.85-.46Z"></path><path d="M6.48 1.53L4.04 5.31L7 12.46m.55-10.93l2.43 3.78L7 12.46M.52 5.31h12.96"></path></g></svg>
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
          <div className=" group">
            <div className=" py-2 px-4  border rounded-lg leading-none flex items-center justify-between space-x-6">
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="m512 863.36l384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36"></path><path fill="currentColor" d="M480 192h64v704h-64z"></path></svg>
                <div className="space-y-2">
                  <p className="0">Reading Topic Test</p>
                </div>
              </div>
              <span className='text-xs text-gray-400'>1m ago</span>
            </div>
          </div>

          <div className=" group">
            <div className=" py-2 px-4  border rounded-lg leading-none flex items-center justify-between space-x-6">
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="m512 863.36l384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36"></path><path fill="currentColor" d="M480 192h64v704h-64z"></path></svg>
                <div className="space-y-2">
                  <p className="0">Reading Topic Test</p>
                </div>
              </div>
              <span className='text-xs text-gray-400'>1m ago</span>
            </div>
          </div>



          <div className=" group">
            <div className=" py-2 px-4  border rounded-lg leading-none flex items-center justify-between space-x-6">
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="m512 863.36l384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36"></path><path fill="currentColor" d="M480 192h64v704h-64z"></path></svg>
                <div className="space-y-2">
                  <p className="0">Reading Topic Test</p>
                </div>
              </div>
              <span className='text-xs text-gray-400'>1m ago</span>
            </div>
          </div>






        </div>
      </TitleCard>
    </div>

  );
};

export default RightSidebarPageContent;
