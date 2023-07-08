import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SignUpPage from '../pages/sign-up-page/sign-up-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<div>Root</div>} />
        <Route path=":partner" element={<div>Child</div>} />
      </Route>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<div>Page 404</div>} />
    </>
  )
);

export default router;
