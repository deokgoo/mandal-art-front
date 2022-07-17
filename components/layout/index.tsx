import { ReactNode } from 'react';
import styles from './layout.module.scss';

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}

const MainContent = ({ children }: Props) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

const SideContent = ({ children }: Props) => {
  return (
    <div className={styles.sideContent}>
      {children}
    </div>
  );
}

Layout.MainContent = MainContent;
Layout.SideContent = SideContent;

export default Layout;
