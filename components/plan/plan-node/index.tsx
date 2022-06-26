import * as React from 'react';
import { PlanData } from 'types/plan';
import styles from './plan-node.module.scss';

const PlanContext = React.createContext<{ planData: PlanData|null }>({
  planData: null,
});

function useEffectAfterMount(cb: any, dependencies: any[]) {
  const justMounted = React.useRef(true)
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb()
    }
    justMounted.current = false
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cb, ...dependencies])
}

const PlanNode = ({ planData, children }: { planData: PlanData, children: JSX.Element|JSX.Element[] }) => {
  return (
    <PlanContext.Provider value={{planData}}>
      <div className={styles.planNode}>
        {children}
      </div>
    </PlanContext.Provider>
  )
}

const usePlanNodeContext = (): { planData: PlanData|null } => {
  const context = React.useContext(PlanContext);

  if (!context) {
    throw new Error(
      `compound components cannot be rendered outside the PlanNode`,
    )
  }

  return context
}

function Middle({pos, children}: {pos: number, children: JSX.Element|JSX.Element[]}) {
  const planNodeContext = usePlanNodeContext();

  return <div className={styles.middleNode}>
    {children}
  </div>
}

function Small({pos}: {pos: number}) {
  const planNodeContext = usePlanNodeContext();

  return <div className={styles.smallNode}>
    <div className={styles.insertBox} contentEditable="true" />
  </div>
}

PlanNode.middle = Middle
PlanNode.small = Small

export default PlanNode;
