import TitleCard from 'src/components/cards/title-card';
import {showNotification} from 'src/features/common/header-slice';
import InputText from 'src/components/input/input-text';
import TextAreaInput from 'src/components/input/text-area-input';
import ToogleInput from 'src/components/input/toggle-input';
import { useAppDispatch } from 'src/app/store';

function ProfileSettings() {
  const dispatch = useAppDispatch();

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({message: 'Profile Updated', status: 1}));
  };

  const updateFormValue = ({updateType, value}:{
    updateType: string,
    value: any
  }) => {
    console.log(updateType, value);
  }

  return (
    <>
      <TitleCard title="Profile Settings" topMargin="0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Name"
            defaultValue="Alex"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Email Id"
            defaultValue="alex@dashwind.com"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Title"
            defaultValue="UI/UX Designer"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Place"
            defaultValue="California"
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="About"
            defaultValue="Doing what I love, part time traveller"
            updateFormValue={updateFormValue}
          />
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Language"
            defaultValue="English"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Timezone"
            defaultValue="IST"
            updateFormValue={updateFormValue}
          />
          <ToogleInput
            updateType="syncData"
            labelTitle="Sync Data"
            defaultValue={true}
            updateFormValue={updateFormValue}
          />
        </div>

        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}>
            Update
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
