import { Routes, Route } from 'react-router';
import HomePage from '../../../pages/HomePage';
import AppLayout from '../layouts/AppLayout';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/layout" element={<h1>LAYOUT</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
