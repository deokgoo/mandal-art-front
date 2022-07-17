import { FormEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import controlAtom from 'stores/controlAtom';
import planAtom from 'stores/planAtom';
import styles from '../control.module.scss';

const TitleControl = () => {
  const controlState = useRecoilValue(controlAtom);
  const [planData, setPlanData] = useRecoilState(planAtom);

  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    const { selectedMiddlePos, selectedSmallPos } = controlState;
    const title = e.currentTarget.value;
    const planMiddle = planData[selectedMiddlePos];
    const planSmall = planData[selectedMiddlePos][selectedSmallPos];

    if(selectedMiddlePos === 4 && selectedSmallPos !== 4) {
      setPlanData({
        ...planData,
        [selectedMiddlePos]: {
          ...planMiddle,
          [selectedSmallPos]: {
            ...planSmall,
            title,
          }
        },
        [selectedSmallPos]: {
          ...planData[selectedSmallPos],
          4: {
            ...planSmall,
            title,
          }
        }
      });
    } else if ( selectedSmallPos === 4 && selectedMiddlePos !== 4) {
      setPlanData({
        ...planData,
        [selectedMiddlePos]: {
          ...planMiddle,
          4: {
            ...planSmall,
            title,
          },
        },
        4: {
          ...planData[4],
          [selectedSmallPos]: {
            ...planData[4][selectedSmallPos],
            title,
          },
        },
      });
    } else {
      console.log('test', title);
      setPlanData({
        ...planData,
        [selectedMiddlePos]: {
          ...planData[selectedMiddlePos],
          [selectedSmallPos]: {
            ...planSmall,
            title,
          },
        },
      });
    }
  };

  const getTitle = () => {
    const { selectedMiddlePos, selectedSmallPos } = controlState;
    const { title } = planData[selectedMiddlePos][selectedSmallPos];

    return title;
  }
  
  return (
    <div className={styles.titleControl}>
      <label className={styles.label} form='title'>Title:</label>
      <input id="title" className={styles.insert} type="text" value={getTitle()} onChange={onChangeHandler}/>
    </div>
  )
}

export default TitleControl;
