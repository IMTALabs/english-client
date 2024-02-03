import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from 'src/features/common/header-slice';
import image from 'assets/bannerhero.jpg'
import IntroCard from 'src/components/intro-card';

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: '' }));
  }, []);

  const data = [
    {
      title: 'Listening',
      paragraph: 'Transform your video-watching experience into a fun learning opportunity! Imta generates quizzes from your favorite YouTube videos, turning passive watching into active engagement.',
      image: 'https://img.icons8.com/external-justicon-flat-justicon/48/external-headphone-rock-and-roll-justicon-flat-justicon.png'
    },
    {
      title: 'Reading',
      paragraph: 'Elevate your comprehension skills! Paste any content - news articles, papers, blogs - into Imta Bot and receive a personalized quiz in just 10-30 seconds. Share it with friends or students. No content? No problem! Imta Bot can create quizzes for you based on your chosen topic.',
      image: 'https://img.icons8.com/parakeet/48/open-book.png'
    },
    {
      title: 'Writing',
      paragraph: 'Refine your writing skills effortlessly! Imta Bot meticulously identifies errors and evaluates your submissions against IELTS writing criteria, empowering you to enhance your writing proficiency.',
      image: 'https://img.icons8.com/fluency/48/signing-a-document.png'
    },
    {
      title: 'Speaking',
      paragraph: "Exciting developments await! We're currently working on a virtual speaking room, set to be released in the near future.Stay tuned for an immersive speaking experience that will take your language skills to new heights!",
      image: 'https://img.icons8.com/external-others-zufarizal-robiyanto/48/external-podcast-podcast-flat-others-zufarizal-robiyanto-16.png'
    },
  ]



  return (
    <div>
      <h1 className='text-center my-10'>What's New ?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10">
        {
          data.map((item) => {
            return <IntroCard title={item.title} paragraph={item.paragraph} image={item.image} />
          })
        }
      </div>
    </div>
  );
}

export default InternalPage;
