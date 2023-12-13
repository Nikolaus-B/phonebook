import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
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
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
