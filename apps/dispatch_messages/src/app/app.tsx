// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.contentCard}>
      <h1 className={styles.sectionTitle}>Dispatch Messages</h1>
      <p className={styles.sectionText}>
        This is the Dispatch Messages remote page3.
      </p>
    </div>
  );
}

export default App;
