import Header from './header';
import { Route, Routes, useLocation } from 'react-router-dom';
import routes from 'src/routes/index';
import { Suspense, lazy } from 'react';
import SuspenseContent from './suspense-content';
import { useEffect, useRef } from 'react';
import { useAppSelector } from 'src/app/store';
import RightSidebarPageContent from '../containers/right-sidebar-page-content';


const Page404 = lazy(() => import('src/pages/protected/404'));

function PageContent() {
  const mainContentRef = useRef(null);
  const { pageTitle } = useAppSelector(state => state.header);
  const searchParams = useLocation()
  // side bar hide when screen is small
  const hideSidebar = searchParams.pathname.includes('quizz') || searchParams.pathname.includes('result')

  // Scroll back to top on new page load
  useEffect(() => {
    mainContentRef.current.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, [pageTitle]);



  return (
    <div className="drawer-content flex flex-col h-full">
      <Header />
      <main
        className={`grid grid-cols-6 gap-4 overflow-y-auto md:pt-4 pt-4 h-full p-2,
        ${hideSidebar && 'grid-cols-6'
          }
        `}
        ref={mainContentRef}>
        <div className={`col-span-full  ${hideSidebar ? `lg:col-span-6` : `lg:col-span-4`}`}>
          <Suspense fallback={<SuspenseContent />}>
            <Routes>
              {routes.map((route, key) => {
                return (
                  <Route
                    key={key}
                    exact={true}
                    path={`${route.path}`}
                    element={<route.component />}
                  />
                );
              })}

              {/* Redirecting unknown url to 404 page */}
              <Route path="*" element={<Page404 />} />
            </Routes>

          </Suspense>
        </div>
        {
          !hideSidebar && (<div className='col-span-full lg:col-span-2'>
            <RightSidebarPageContent />
          </div>)
        }


      </main>
    </div>
  );
}

export default PageContent;
