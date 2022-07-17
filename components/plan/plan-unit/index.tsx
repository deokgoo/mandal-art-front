import { Suspense } from 'react';
import styles from './plan-unit.module.scss';

const PlanUnit = ({ children }: any) => {
  return (
    <Suspense>
      <div className={styles.planNode}>
        {children}
      </div>
    </Suspense>
  );
}

export default PlanUnit;
