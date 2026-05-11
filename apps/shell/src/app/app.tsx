import * as React from 'react';
import { Button, PageCard } from 'mx-shared-component';
import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';

const DispatchMessages = React.lazy(() => import('dispatch_messages/Module'));
const brandTitle = 'Micro Frontend Demo';
const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Dispatch Messages', path: '/dispatch-messages' },
];

function HomePage() {
  return (
    <PageCard
      title="Home"
      message="This is the host application home page."
    >
      <Button label="Host Button" />
    </PageCard>
  );
}

export function App() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>{brandTitle}</div>
        <nav className={styles.nav}>
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className={styles.content}>
        <React.Suspense
          fallback={
            <PageCard
              title="Loading"
              message="Loading Dispatch Messages..."
            />
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
