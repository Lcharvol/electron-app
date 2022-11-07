import React, { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { constantRoutes } from '@/constants';
import { Home, Projects, Login } from '@/pages';
import { useAuth } from '@/hooks';
import { AppSidenav, TopMenu } from '@/containers';
import { fakeUser } from '@/faker';
import { mdiApps } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Button, PageLayout } from '@/UI';
import colors from '@/colors';

const AppTopMenu = () => {
  return (
    <TopMenu
      left={<Icon path={mdiApps} size={1.5} color={colors.secondary.normal} />}
      right={<Button href="/login">Login</Button>}
    />
  );
};
const Layout = ({ children }) => (
  <PageLayout menu={<AppSidenav user={fakeUser} />} topMenu={<AppTopMenu />}>
    {children}
  </PageLayout>
);

const ProtectedRoute = ({ element }) => {
  const { token } = useAuth();
  const location = useLocation();
  // if (!token) {
  //   return <Navigate to="/login" replace state={{ from: location }} />;
  // }

  return <Route element={element} />;
};

const Router = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path={constantRoutes.LOGIN} element={<Login />} />
        <Route
          path={constantRoutes.PROJECTS}
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path={constantRoutes.HOME}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </Suspense>
  );
};

export default Router;
