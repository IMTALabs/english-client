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
          <h1 className="text-5xl font-bold">What's New?</h1>
          <div className="w-full flex">
            <div >
              <div className='border border-gray-300  shadow-lg p-2  border-l-[10px] border-l-green-400 rounded-md my-2'>
                <div>
                  <p className='text-[20px] font-medium mb-2'>Listening</p>
                  <div >
                    Transform your video-watching experience into a fun learning opportunity! Imta generates quizzes from your favorite YouTube videos, turning passive watching into active engagement.
                  </div>
                </div>
              </div>
              <div className='border border-gray-300  shadow-lg p-2  border-l-[10px] border-l-green-400 rounded-md my-4'>
                <div>
                  <p className='text-[20px] font-medium mb-2'>Reading</p>
                  <div >
                    Elevate your comprehension skills! Paste any content - news articles, papers, blogs - into Imta Bot and receive a personalized quiz in just 10-30 seconds. Share it with friends or students. No content? No problem! Imta Bot can create quizzes for you based on your chosen topic.
                  </div>
                </div>
              </div>
              <div className='border border-gray-300  shadow-lg p-2  border-l-[10px] border-l-green-400 rounded-md my-4'>
                <div>
                  <p className='text-[20px] font-medium mb-2'>Writing</p>
                  <div >
                    Refine your writing skills effortlessly! Imta Bot meticulously identifies errors and evaluates your submissions against IELTS writing criteria, empowering you to enhance your writing proficiency.
                  </div>
                </div>
              </div>
              <div className='border border-gray-300  shadow-lg p-2  border-l-[10px] border-l-green-400 rounded-md my-4'>
                <div>
                  <p className='text-[20px] font-medium mb-2'>Speaking</p>
                  <div >
                    Exciting developments await! We're currently working on a virtual speaking room, set to be released in the near future. Stay tuned for an immersive speaking experience that will take your language skills to new heights!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={image} alt="" className='w-full rounded-xl' />
        </div>
      </div>
    </div>
  );
}

export default InternalPage;
