import {
  Navigate,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SignUpPage from '../pages/sign-up-page/sign-up-page';
import MainLayout from '../layouts/main-layout/main-layout';
import MainPage from '../pages/main-page/main-page';
import PartnerPage from '../pages/partner-page/partner-page';
import ProtectedRoute from './protected-route/protected-route';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute to={'/sign-up'}>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<MainPage />} />
        <Route path=":partnerId" element={<PartnerPage />} />
      </Route>
      <Route
        path="/sign-up"
        element={
          <ProtectedRoute to={'/'}>
            <SignUpPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<div>Page 404</div>} />
    </>
  )
);

export default router;
