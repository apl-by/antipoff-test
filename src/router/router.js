import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SignUpPage from '../pages/sign-up-page/sign-up-page';
import MainLayout from '../layouts/main-layout/main-layout';
import MainPage from '../pages/main-page/main-page';
import PartnerPage from '../pages/partner-page/partner-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path=":partner" element={<PartnerPage />} />
      </Route>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<div>Page 404</div>} />
    </>
  )
);

export default router;
