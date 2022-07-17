export type ColorPlanNode = 'default' | 'red-main' | 'red-sub' | 'grey' | 'yellow' | 'blue';

export interface PlanData {
  [corePosition: number]: PlanMiddleNode;
}

export interface PlanMiddleNode {
  [middlePosition: number]: PlanNode;
}

export interface PlanNode {
  title: string;
  color?: ColorPlanNode;
}
