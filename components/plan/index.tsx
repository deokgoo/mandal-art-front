import PlanNode from "./plan-node";

interface Props {
  planData: any;
}

const Plan = ({}: Props) => {
  return <>
    <PlanNode>
      <PlanNode.middle no={1}>
        <PlanNode.small no={0}/>
      </PlanNode.middle>
    </PlanNode>
  </>
}


export default Plan;