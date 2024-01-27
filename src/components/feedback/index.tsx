import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { showNotification } from 'src/features/common/header-slice';
import { closeModal, openModal } from 'src/features/common/modal-slice';
import userApi, { FeedbackProps } from 'src/features/services/user/user-api';
import TextAreaInput from 'src/components/text-input/text-area-input';
import { MODAL_BODY_TYPES } from 'src/utils/global-constants';
import Button from '../button';

const Feedback = () => {
  const { user } = useAppSelector(e => e.user);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const [feedbackInfo, setFeedbackInfo] = useState<FeedbackProps>({
    email: user.email,
    message: '',
  });

  const handleSubmit = async () => {
    setIsDisabled(true)
    try {
      await userApi.postFeedBack(feedbackInfo);
      dispatch(showNotification({ message: 'Success', status: 1 }));

    } catch (error) {
      console.log(error);
    } finally {
      dispatch(closeModal());
      setFeedbackInfo({
        email: '',
        message: '',
      });
      setIsDisabled(false)
    }
  };

  return (
    <div>
      <h3 className="text-2xl text-primary font-bold mb-4">Feedback</h3>
      <div>
        <input
          type="email"
          placeholder="Your email"
          className="input input-primary w-full my-4 border"
          value={feedbackInfo.email}
          disabled
        />

        <div className="relative w-full min-w-[200px]">
          <TextAreaInput
            value={feedbackInfo.message}
            onChange={e =>
              setFeedbackInfo({ ...feedbackInfo, message: e.target.value })
            }
            label="Write your feedback"
          />
        </div>
      </div>
      <Button
        text=" Submit"
        onClick={handleSubmit}
        disabled={isDisabled}
        containerStyle="mt-4"
      />
    </div>
  );
};

export default Feedback;
