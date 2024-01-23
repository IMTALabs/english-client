import {closeModal} from 'src/features/common/modal-slice';
import {useAppDispatch, useAppSelector} from 'src/app/store';
import {MODAL_BODY_TYPES} from 'src/utils/global-constants';
import Feedback from 'src/components/feedback';
import {useMemo} from 'react';
import LoadingModal from 'src/features/modal/loading-modal';

function ModalLayout() {
  const {isOpen, bodyType, size, title} = useAppSelector(
    state => state.modal,
  );
  const dispatch = useAppDispatch();

  const close = (e: any) => {
    dispatch(closeModal(e));
  };

  const renderModalBody = useMemo(() => {
    switch (bodyType) {
      case MODAL_BODY_TYPES.SEND_FEEDBACK:
        return <Feedback />;
      case MODAL_BODY_TYPES.LOADING:
        return <LoadingModal />;
      default:
        return null;
    }
  }, [bodyType]);

  return (
    <>
      {/* The button to open modal */}
      {/* Put this part before </body> tag */}
      <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
        <div className={`modal-box  ${size === 'lg' ? 'max-w-4xl' : ''}`}>
          {bodyType !== MODAL_BODY_TYPES.LOADING && (
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={e => close(e)}>
              ✕
            </button>
          )}

          <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>
          {renderModalBody}
        </div>
      </div>
    </>
  );
}

export default ModalLayout;
