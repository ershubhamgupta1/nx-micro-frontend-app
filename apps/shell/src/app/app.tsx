import * as React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';

const DispatchMessages = React.lazy(() => import('dispatch_messages/Module'));

function HomePage() {
  return (
    <div className={styles.contentCard}>
      <h1 className={styles.sectionTitle}>Home</h1>
      <p className={styles.sectionText}>
        This is the host application home page.
      </p>
    </div>
  );
}

export function App() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>Micro Frontend Demo</div>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dispatch-messages"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Dispatch Messages
          </NavLink>
        </nav>
      </aside>
      <main className={styles.content}>
        <React.Suspense
          fallback={
            <div className={styles.contentCard}>
              <h1 className={styles.sectionTitle}>Loading</h1>
              <p className={styles.sectionText}>
                Loading Dispatch Messages...
              </p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dispatch-messages" element={<DispatchMessages />} />
          </Routes>
        </React.Suspense>
      </main>
    </div>
  );
}

export default App;
