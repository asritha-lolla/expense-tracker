import { Routes, Route } from 'react-router';
import HomePage from '../../../pages/HomePage';
import AppLayout from '../layouts/AppLayout';
import ExpensesPage from '../../../pages/ExpensesPage';
import AccountsPage from '../../../pages/AccountsPage';
import CardsPage from '../../../pages/CardsPage';
import InvestmentsPage from '../../../pages/InvestmentsPage';
import UserProfilePage from '../../../pages/UserProfilePage';
import LoansPage from '../../../pages/LoansPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/expenses" element={<ExpensesPage/>} />
        <Route path="/accounts" element={<AccountsPage/>} />
        <Route path="/cards" element={<CardsPage/>} />
        <Route path="/investments" element={<InvestmentsPage/>} />
        <Route path="/user-profile" element={<UserProfilePage/>} />
        <Route path="/loans" element={<LoansPage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
