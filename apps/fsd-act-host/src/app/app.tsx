import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from '@fsd-activation-2.0/auth-service';
import LoginPage from './pages/Login';
import AuthenticatePage from './pages/Authenticate';

const FsdActCustomerUi = React.lazy(() => import('fsd-act-customer-ui/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <AuthContextProvider>
        <Routes>
          <Route path="/fsd-act-customer-ui" element={<FsdActCustomerUi />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/authenticated" element={<AuthenticatePage />} />
        </Routes>
      </AuthContextProvider>
    </React.Suspense>
  );
}

export default App;
