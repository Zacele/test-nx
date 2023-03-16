import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from '@fsd-activation-2.0/auth-service'
import LoginPage from '../components/pages/Login';

const FsdActCustomerUi = React.lazy(() => import('fsd-act-customer-ui/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <AuthContextProvider>
      <Routes>
        <Route path="/fsd-act-customer-ui" element={<FsdActCustomerUi />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </AuthContextProvider>
    </React.Suspense>
  );
}

export default App;
