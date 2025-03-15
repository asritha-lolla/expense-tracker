import { IRoutes } from "../types/IRoutes";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';

export const routes: IRoutes[] = [
  {
    path: '/',
    name: 'Dashboard',
    icon: <DashboardIcon />
  },
  {
    path: '/expenses',
    name: 'Expenses',
    icon: <AttachMoneyIcon />
  },
  {
    path: '/accounts',
    name: 'Accounts',
    icon: <AccountBalanceIcon />
  },
  {
    path: '/cards',
    name: 'Cards',
    icon: <CreditCardIcon />
  },
  {
    path: '/loans',
    name: 'Loans',
    icon: <AccountBalanceWalletIcon />
  },
  {
    path: '/investments',
    name: 'Investments',
    icon: <TrendingUpIcon />
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: <PersonIcon />
  },
];
