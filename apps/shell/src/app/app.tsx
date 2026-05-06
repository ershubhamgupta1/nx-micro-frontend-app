import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const DispatchMessages = React.lazy(() => import('dispatch_messages/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dispatch-messages">DispatchMessages</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/dispatch-messages" element={<DispatchMessages />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
