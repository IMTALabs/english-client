import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setPageTitle} from 'src/features/common/header-slice';
import ProfileSettings from 'src/features/setting/profile-setting';

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({title: 'Settings'}));
  }, []);

  return <ProfileSettings />;
}

export default InternalPage;
