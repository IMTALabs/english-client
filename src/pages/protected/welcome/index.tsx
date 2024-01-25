import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from 'src/features/common/header-slice';
import image from 'assets/bannerhero.jpg'

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: '' }));
  }, []);

  return (
    <div className="hero h-full">
      <div className="hero-content flex-col lg:flex-row">
        <div >
          <h1 className="text-5xl font-bold">Start Your Journey Today!</h1>
          <div className="w-full flex">
            <div >
              <div className='border border-gray-300  shadow-lg p-2  border-l-[10px] border-l-green-400 rounded-md my-2'>
                <div>
                  <p className='text-[20px] font-medium mb-2'>Problem</p>
                  <div >
                    Embark on a journey of growth and success with our IELTS practice platform. Join thousands of learners who have achieved their target scores and secured their future opportunities. Your success story begins here!
                  </div>
                </div>
              </div>
              <div className='border border-gray-300  shadow-lg p-2  border-l-[10px] border-l-green-400 rounded-md my-4'>
                <div>
                  <p className='text-[20px] font-medium mb-2'>Problem</p>
                  <div >
                    Embark on a journey of growth and success with our IELTS practice platform. Join thousands of learners who have achieved their target scores and secured their future opportunities. Your success story begins here!
                  </div>
                </div>
              </div>
              <div className='border border-gray-300  shadow-lg p-2  border-l-[10px] border-l-green-400 rounded-md my-4'>
                <div>
                  <p className='text-[20px] font-medium mb-2'>Problem</p>
                  <div >
                    Embark on a journey of growth and success with our IELTS practice platform. Join thousands of learners who have achieved their target scores and secured their future opportunities. Your success story begins here!
                  </div>
                </div>
              </div>
              <div className='border border-gray-300  shadow-lg p-2  border-l-[10px] border-l-green-400 rounded-md my-4'>
                <div>
                  <p className='text-[20px] font-medium mb-2'>Problem</p>
                  <div >
                    Embark on a journey of growth and success with our IELTS practice platform. Join thousands of learners who have achieved their target scores and secured their future opportunities. Your success story begins here!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={image} alt="" className='w-full'/>
        </div>
      </div>
    </div>
  );
}

export default InternalPage;
