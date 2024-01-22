import { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { Icon } from "src/assets/icon"
import { showNotification } from "src/features/common/header-slice";
import userApi, { FeedbackProps } from "src/features/services/user/user-api";




const Feedback = () => {

    const { user } = useAppSelector((e) => e.user)

    const dispatch = useAppDispatch();
    const [feedbackInfo, setFeedbackInfo] = useState<FeedbackProps>({
        email: user.email,
        message: ''
    })


    const handleSubmit = async () => {
        try {
            await userApi.postFeedBack(feedbackInfo)
            dispatch(showNotification({ message: 'Success', status: 1 }));

        } catch (error) {
            console.log(error, "acsc");
        } finally {
            document?.getElementById('my_modal_3')?.close()
            setFeedbackInfo({
                email: '',
                message: ''
            })
        }
    }

    return (
        <div className="btn btn-ghost btn-circle " onClick={() => document?.getElementById('my_modal_3')?.showModal()}>
            <div className="tooltip tooltip-bottom" data-tip="Feedback">
                <span className="btn btn-ghost btn-circle text-white text-2xl" dangerouslySetInnerHTML={{ __html: Icon('feedback') }}></span>
            </div>
            <dialog id="my_modal_3" className="modal " >
                <div className="modal-box bg-gray-100">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
                    </form>

                    <div className="">
                        <h3 className="text-2xl text-primary font-bold">Feedback</h3>
                        <div className=''>
                            <input type="email" placeholder="Your email" className="input input-primary w-full my-2 border"
                                value={feedbackInfo.email}
                                disabled
                            />
                            <textarea
                                className="textarea textarea-accent w-full h-[150px] my-2"
                                placeholder="Write your feedback...."
                                onChange={(e) => setFeedbackInfo({ ...feedbackInfo, message: e.target.value })}
                                value={feedbackInfo.message} ></textarea>
                        </div>
                        <button
                            className="btn w-full bg-primary text-white hover:bg-[#2B2A30] mt-4"
                            onClick={handleSubmit}
                        >Submit</button>
                    </div>
                </div>
            </dialog>
        </div >
    )
}

export default Feedback