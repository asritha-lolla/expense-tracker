import { BrowserRouter } from 'react-router';

import './assets/styles/global.css';
import AppRouter from './shared/components/routes/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
