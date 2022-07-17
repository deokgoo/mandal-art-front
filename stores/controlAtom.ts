import { initialControlData } from './../utils/constant';
import { atom } from 'recoil';
import ControlData from 'types/control';

const controlAtom = atom<ControlData>({
  key: 'controlData',
  default: initialControlData,
});

export default controlAtom;

