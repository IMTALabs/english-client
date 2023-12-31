
import {closeModal} from 'src/features/common/modal-slice';
import AddLeadModalBody from 'src/features/leads/components/add-lead-modal-body';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { MODAL_BODY_TYPES } from 'src/utils/global-constants';
import ConfirmationModalBody from 'src/features/common/components/confirmation-modal-body';

function ModalLayout() {
  const {isOpen, bodyType, size, extraObject, title} = useAppSelector(
    state => state.modal,
  );
  const dispatch = useAppDispatch();

  const close = (e:any) => {
    dispatch(closeModal(e));
  };

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
        <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={(e) => close(e)}>
            ✕
          </button>
          <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>

          {/* Loading modal body according to different modal type */}
          {
            {
              [MODAL_BODY_TYPES.LEAD_ADD_NEW]: (
                <AddLeadModalBody
                  closeModal={close}
                  extraObject={extraObject}
                />
              ),
              [MODAL_BODY_TYPES.CONFIRMATION]: (
                <ConfirmationModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
            }[bodyType]
          }
        </div>
      </div>
    </>
  );
}

export default ModalLayout;
