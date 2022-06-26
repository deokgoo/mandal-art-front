import { ColorTheme } from "@/utils/constant";
import { FormEvent, FormEventHandler, useEffect } from "react";
import { ColorPlanNode } from "types/plan";
import styles from '../plan-unit.module.scss';

export interface Props {
  pos: number;
  title: string; 
  color: ColorPlanNode;
  handleOnChange: (pos: number, title: string, color: ColorPlanNode) => void;
}

const SmallPlanUnit = ({ pos, title, color, handleOnChange }: Props) => {

  useEffect(() => {
    console.log('change block', Math.random())
  }, [color, pos, title])

  const onChnageHandler = (e: FormEvent<HTMLTextAreaElement>) => {
    handleOnChange(pos, e.currentTarget.value, color)
  }

  return <div className={styles.smallNode}>
    <textarea 
      className={styles.insertBox}
      value={title}
      onChange={onChnageHandler}
      style={{backgroundColor: color === 'default' ? 'white' : ColorTheme[color ?? 'default']}}
    />
  </div>
}

export default SmallPlanUnit;
