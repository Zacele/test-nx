import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const FsdActCustomerUi = React.lazy(() => import('fsd-act-customer-ui/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/fsd-act-customer-ui">FsdActCustomerUi</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="fsd-act-host" />} />

        <Route path="/fsd-act-customer-ui" element={<FsdActCustomerUi />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
