import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useAppDispatch} from 'src/app/store';
import {postWritingPoint} from 'src/features/common/writing-slice';

const QuizzWriting = () => {
  const data = useLocation()?.state?.quizz;
  const [paragraph, setParagraph] = useState('');
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formWriting = {
      instruction: data,
      submission: paragraph,
    };
    dispatch(postWritingPoint(formWriting));
  };
  return (
    <div className="sm:flex flex-1 gap-x-4 bg-white">
      <div className="w-full min-h-screen rounded-[24px] p-4">
        <p className="font-bold text-3xl pb-2">Writing Quizz</p>
        <p className="">You should spend 20 minutes on this task.</p>
        <p className="font-bold text-3xl py-2">Topic Rural Area</p>
        <p className="font-normal sm:text-2xl sm:leading-8 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          iste voluptas soluta veritatis nemo adipisci, aliquid est aperiam
          consequuntur commodi dolore possimus, optio, eaque dolor reiciendis
          assumenda! Id, ipsam saepe. Necessitatibus, nostrum quibusdam ducimus
          a soluta incidunt, voluptate consequatur culpa officia, hic fuga ab
          excepturi temporibus ipsum distinctio nemo modi.
        </p>
        <img
          className="mt-2"
          src="https://www.zohowebstatic.com/sites/zweb/images/analytics/bar.png"
          alt=""
        />
      </div>
      <section className="test-panel scroll pb-3 container sm:w-8/12 mr-5">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <p className="font-semibold py-2 sm:text-[24px] text-sm">
            Write Your Essay
          </p>
          <div className="mb-2">
            <textarea
              defaultValue={'paragraph'}
              onChange={e => setParagraph(e.target.value)}
              className="bg-gray-50 border resize-none border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-h-[100vh]  w-full p-2.5"
              placeholder="Type or patse the topic here... "
            />
            <button
              type="submit"
              className="text-white focus:ring-4 focus:outline-none w-full focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 bg-[#10B981] hover:bg-[#0D7E59]">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default QuizzWriting;
