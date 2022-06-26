export type ColorPlanNode = 'default' | 'red' | 'grey' | 'yellow' | 'blue' | 'pink' | 'pink1';

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
