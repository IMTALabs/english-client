import {useState} from 'react';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {showNotification} from 'src/features/common/header-slice';
import {closeModal} from 'src/features/common/modal-slice';
import userApi, {FeedbackProps} from 'src/features/services/user/user-api';
import TextAreaInput from 'src/components/text-input/text-area-input';

const Feedback = () => {
  const {user} = useAppSelector(e => e.user);

  const dispatch = useAppDispatch();
  const [feedbackInfo, setFeedbackInfo] = useState<FeedbackProps>({
    email: user.email,
    message: '',
  });

  const handleSubmit = async () => {
    try {
      await userApi.postFeedBack(feedbackInfo);
      dispatch(showNotification({message: 'Success', status: 1}));
    } catch (error) {
      console.log(error, 'acsc');
    } finally {
      dispatch(closeModal());
      setFeedbackInfo({
        email: '',
        message: '',
      });
    }
  };

  return (
    <div>
      <h3 className="text-2xl text-primary font-bold">Feedback</h3>
      <div>
        <input
          type="email"
          placeholder="Your email"
          className="input input-primary w-full my-2 border"
          value={feedbackInfo.email}
          disabled
        />

        <div className="relative w-full min-w-[200px] mt-4">
          <TextAreaInput
            value={feedbackInfo.message}
            onChange={e =>
              setFeedbackInfo({...feedbackInfo, message: e.target.value})
            }
            label="Write your feedback"
          />
        </div>
      </div>
      <button
        className="btn w-full bg-primary text-white hover:bg-[#2B2A30] mt-4"
        onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Feedback;
