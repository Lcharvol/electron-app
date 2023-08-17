import { ReactNode, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { constantRoutes } from '@/constants';
import { Home, Projects, Login, Settings, ReviewApp, Accounts } from '@/pages';
import useAuth from '@/contexts/auth';
import { AppSidenav, AppHeader } from '@/containers';
import { fakeUser } from '@/faker';
import { Button, PageLayout } from '@/UI';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <PageLayout menu={<AppSidenav user={fakeUser} />} header={<AppHeader />}>
      {children}
    </PageLayout>
  );
};

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
          path={constantRoutes.SETTINGS}
          element={
            <ProtectedRoute>
              <Layout>
                <Settings />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path={constantRoutes.REVIEW_APP}
          element={
            <ProtectedRoute>
              <Layout>
                <ReviewApp />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path={constantRoutes.ACCOUNTS}
          element={
            <ProtectedRoute>
              <Layout>
                <Accounts />
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
