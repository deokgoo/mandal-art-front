import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import type { PlanData } from 'types/plan';
import { initialPlanData } from '@/utils/constant';
import { useRecoilState } from 'recoil';
import MiddlePlanUnit, { Props as MiddleProps } from '@/components/plan/plan-unit/middle-plan-unit';
import planAtom from 'stores/planAtom';
import styles from '@/components/plan/plan-unit/plan-unit.module.scss';

const Plan = () => {
  const [plan, setPlan] = useRecoilState(planAtom);

  const planData = (pos: number): MiddleProps => {
    return {
      planData: plan[pos],
      pos,
    };
  };
  
  return (
    <div className="plan">
      <div className="showcase">
        <Suspense>
          <div className={styles.planNode}>
            <MiddlePlanUnit {...planData(0)} isVisible={true}/>
            <MiddlePlanUnit {...planData(1)}/>
            <MiddlePlanUnit {...planData(2)}/>
            <MiddlePlanUnit {...planData(3)}/>
            <MiddlePlanUnit {...planData(4)}/>
            <MiddlePlanUnit {...planData(5)}/>
            <MiddlePlanUnit {...planData(6)}/>
            <MiddlePlanUnit {...planData(7)}/>
            <MiddlePlanUnit {...planData(8)}/>
          </div>
        </Suspense>
      </div>
      <div className="controlBox">
        
      </div>
    </div>
  )
}

export const getServerSideProps = () => {
  // TODO: getData from localstorage or server
  const fetchedPlanData: PlanData|null = null;

  return {
    props: {
      fetchedPlanData: fetchedPlanData ?? initialPlanData,
    }
  }
}

export default Plan;
