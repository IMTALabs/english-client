import {useState} from 'react';
import { useAppDispatch } from 'src/app/store';
import InputText from 'src/components/input/input-text';
import ErrorText from 'src/components/typo/error';
import {showNotification} from "src/features/common/header-slice";
import {addNewLead} from 'src/features/common/lead-slice';

const INITIAL_LEAD_OBJ = {
  first_name: '',
  last_name: '',
  email: '',
};

interface AddLeadModalBodyProps { 
    closeModal: () => void;
}



function AddLeadModalBody({closeModal}: AddLeadModalBodyProps) {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ);

  const saveNewLead = () => {
    if (leadObj.first_name.trim() === '')
      return setErrorMessage('First Name is required!');
    else if (leadObj.email.trim() === '')
      return setErrorMessage('Email id is required!');
    else {
      let newLeadObj = {
        id: 7,
        email: leadObj.email,
        first_name: leadObj.first_name,
        last_name: leadObj.last_name,
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
      };
      dispatch(addNewLead({newLeadObj}));
      dispatch(showNotification({message: 'New Lead Added!', status: 1}));
      closeModal();
    }
  };

  const updateFormValue = ({updateType, value}: {
    updateType: string;
    value: any;
  }) => {
    setErrorMessage('');
    setLeadObj({...leadObj, [updateType]: value});
  };

  return (
    <>
      <InputText
        type="text"
        defaultValue={leadObj.first_name}
        updateType="first_name"
        containerStyle="mt-4"
        labelTitle="First Name"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={leadObj.last_name}
        updateType="last_name"
        containerStyle="mt-4"
        labelTitle="Last Name"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="email"
        defaultValue={leadObj.email}
        updateType="email"
        containerStyle="mt-4"
        labelTitle="Email Id"
        updateFormValue={updateFormValue}
      />

      <ErrorText className="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>
          Save
        </button>
      </div>
    </>
  );
}

export default AddLeadModalBody;
