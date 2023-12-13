import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </div>
  );
};
