import ColorControl from './color-control';
import FontControl from './font-control';
import styles from './control.module.scss';
import TitleControl from './title-control';
import ShowCase from './showcase';
import { ReactNode } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

interface Props {
  children?: ReactNode
}

const Control = ({ children }: Props) => {
  return (
    <div className={styles.control}>
      {children}
    </div>
  )
}

Control.Color = ColorControl;
Control.Font = FontControl;
Control.Title = TitleControl;
Control.ShowCase = ShowCase;

export default Control;
