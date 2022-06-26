import { initialPlanData } from '@/utils/constant';
import { atom } from 'recoil';
import { PlanData } from 'types/plan';

const planAtom = atom<PlanData>({
  key: 'planData',
  default: initialPlanData,
});

export default planAtom;

