import { useEffect } from 'react';
import { setPageTitle } from 'src/features/common/header-slice';

import { useAppDispatch } from 'src/app/store';

function InternalPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: '' }));
  }, []);

  return (
    <div className="hero h-4/5 my-4">
      <div className="hero-content text-accent text-center">
        <div className="max-w-md">
          <div className='text-center'>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 50 }}></span>
                </span>
                sec
              </div>
            </div>
          </div>


          <h1 className="text-5xl  font-bold text-primary my-4">Coming soon</h1>
        </div>
      </div>
    </div>
  );
}

export default InternalPage;
