import { useRecoilState } from 'recoil';
import planAtom from 'stores/planAtom';
import { ColorPlanNode, PlanNode } from 'types/plan';
import styles from '../plan-unit.module.scss';
import SmallPlanUnit from '../small-plan-unit';
import { Props as SmallPlanProps } from '../small-plan-unit';

export interface Props {
  planData: {
    [key: number]: PlanNode;
  }
  pos: number;
  isVisible?: boolean;
}

const MiddlePlanUnit = ({ planData, pos, isVisible = true }: Props) => {
  const [plan, setPlanAtom] = useRecoilState(planAtom);

  const onChangeHandler = (childPos: number, title: string, color: ColorPlanNode) => {
    if(pos === 4 && childPos !== 4) {
      if(plan[4][childPos].title === title) return;
      setPlanAtom({
        ...plan,
        [pos]: {
          ...planData,
          [childPos]: {
            title,
            color,
          }
        },
        [childPos]: {
          ...plan[childPos],
          4: {
            title,
            color,
          }
        }
      });
    } else if ( childPos === 4 && pos !== 4) {
      setPlanAtom({
        ...plan,
        [pos]: {
          ...plan[pos],
          4: {
            title,
            color,
          },
        },
        4: {
          ...plan[4],
          [pos]: {
            title,
            color,
          },
        },
      });
    } else {
      setPlanAtom({
        ...plan,
        [pos]: {
          ...planData,
          [childPos]: {
            title,
            color,
          },
        },
      });
    }
  };

  const unitProps = (pos: number): SmallPlanProps => {
    return {
      pos,
      title: planData[pos].title,
      color: planData[pos].color ?? 'default',
      handleOnChange: onChangeHandler,
    }
  };

  return <div className={`${styles.middleNode} ${isVisible?'':styles.unVisibile}`}>
    <SmallPlanUnit {...unitProps(0)} />
    <SmallPlanUnit {...unitProps(1)} />
    <SmallPlanUnit {...unitProps(2)} />
    <SmallPlanUnit {...unitProps(3)} />
    <SmallPlanUnit {...unitProps(4)} />
    <SmallPlanUnit {...unitProps(5)} />
    <SmallPlanUnit {...unitProps(6)} />
    <SmallPlanUnit {...unitProps(7)} />
    <SmallPlanUnit {...unitProps(8)} />
  </div>
}

export default MiddlePlanUnit;
