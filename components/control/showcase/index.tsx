import { useRecoilState, useRecoilValue } from 'recoil';
import controlAtom from 'stores/controlAtom';
import planAtom from 'stores/planAtom';
import styles from '../control.module.scss';
import colors from '@/styles/color.module.scss';
import { FormEvent, useCallback } from 'react';

const ShowCase = () => {
  const controlState = useRecoilValue(controlAtom);
  const [planData, setPlanData] = useRecoilState(planAtom);

  const selectedColor = useCallback(() => {
    const { selectedMiddlePos, selectedSmallPos } = controlState;
    const { color } = planData[selectedMiddlePos][selectedSmallPos];

    if(color === 'red-main') {
      return colors.bgRedMain;
    }
    if(color === 'red-sub') {
      return colors.bgRedSub;
    }

    return colors.bgDefault;
  }, [controlState, planData]);

  const getTitle = () => {
    const { selectedMiddlePos, selectedSmallPos } = controlState;
    const { title } = planData[selectedMiddlePos][selectedSmallPos];

    return title;
  }
  
  return (
    <div className={styles.showCase}>
      <h1 className={styles.title}>Setting</h1>
      <textarea
        className={`${styles.box}  ${selectedColor()}`}
        value={getTitle()}
        contentEditable={false}
        readOnly={true}
      />
    </div>
  );
}

export default ShowCase;
