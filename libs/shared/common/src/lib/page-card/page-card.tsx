import { ReactNode } from 'react';
import styles from './page-card.module.css';

export type PageCardProps = {
  title: string;
  message: string;
  children?: ReactNode;
};

export function PageCard({ title, message, children }: PageCardProps) {
  return (
    <div className={styles.contentCard}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <p className={styles.sectionText}>{message}</p>
      {children ? <div className={styles.actions}>{children}</div> : null}
    </div>
  );
}

export default PageCard;
