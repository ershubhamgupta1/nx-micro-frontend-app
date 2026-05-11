// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { Button, PageCard } from '@nx-mfe-poc/shared/common';

export function App() {
  return (
    <PageCard
      title="Dispatch Messages"
      message="This is the Dispatch Messages remote page3."
    >
      <Button label="Remote Button" variant="secondary" />
    </PageCard>
  );
}

export default App;
