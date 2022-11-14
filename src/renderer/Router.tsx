import React, { ReactNode, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { constantRoutes } from '@/constants';
import { Home, Projects, Login } from '@/pages';
import useAuth from '@/contexts/auth';
import { AppSidenav, TopMenu } from '@/containers';
import { fakeUser } from '@/faker';
import { mdiApps } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Button, PageLayout } from '@/UI';
import colors from '@/colors';

const AppTopMenu = () => {
  const { logout } = useAuth();
  return (
    <TopMenu
      left={<Icon path={mdiApps} size={1.5} color={colors.secondary.normal} />}
      right={<Button onClick={logout}>Logout</Button>}
    />
  );
};
const Layout = ({ children }: { children: ReactNode }) => (
  <PageLayout menu={<AppSidenav user={fakeUser} />} topMenu={<AppTopMenu />}>
    {children}
  </PageLayout>
);

// As the router is wrapped with the provider,
// we can use our hook to check for a logged in user.
const ProtectedRoute = ({ children }: { children: ReactNode }): JSX.Element => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

const Router = () => {
  const { logout } = useAuth();
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path={constantRoutes.LOGIN} element={<Login />} />
        <Route
          path={constantRoutes.PROJECTS}
          element={
            <ProtectedRoute>
              <Layout>
                <Projects />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path={constantRoutes.HOME}
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <>
              Not found<Button onClick={logout}>Logout</Button>
            </>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
