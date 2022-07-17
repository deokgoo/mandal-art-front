import { useRecoilState } from "recoil";
import planAtom from "stores/planAtom";
import PlanUnit from "./plan-unit";
import MiddlePlanUnit, { Props as MiddleProps } from '@/components/plan/plan-unit/middle-plan-unit';


const Plan = () => {
  const [plan, setPlan] = useRecoilState(planAtom);

  const getMiddlePlanData = (pos: number): MiddleProps => {
    return {
      planData: plan[pos],
      pos,
    };
  };

  const renderMiddlePlan = () => {
    return <>
      {Object.keys(plan).map((x) => {
        const pos = Number(x);
        const middlePlanData = getMiddlePlanData(pos);

        return (
          <MiddlePlanUnit key={`${x}-${middlePlanData.isVisible}`} {...middlePlanData} isVisible={true} />
        );
      })}
    </>
  }
  return (
    <PlanUnit>
      {renderMiddlePlan()}
    </PlanUnit>
  )
}

export default Plan;
