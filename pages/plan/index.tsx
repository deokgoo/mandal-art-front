import { useEffect, useMemo, useState } from 'react';
import PlanNode from '@/components/plan/plan-node';
import type { PlanData } from 'types/plan';
import { initialPlanData } from '@/utils/constant';

interface Props {
  fetchedPlanData: PlanData;
}

const Plan = ({ fetchedPlanData }: Props) => {
  const [planData, setPlanData] = useState<PlanData>(fetchedPlanData);

  useEffect(() => {
    console.log(fetchedPlanData);
  }, [fetchedPlanData]);

  useEffect(()=> {

  }, []);

  const createSmallNode = useMemo(() => {
    const smallNodes: JSX.Element[] = [];

    Object.keys(planData).forEach((_, idx) => {
      smallNodes.push(<PlanNode.small pos={idx} />);
    });

    return smallNodes;
  }, [planData]);

  const createMiddleNode = useMemo(() => {
    const middleNodes: JSX.Element[] = [];

    Object.keys(planData).forEach((_, idx) => {
      middleNodes.push(
        <PlanNode.middle pos={idx}>
          {createSmallNode}
        </PlanNode.middle>
      );
    });

    return middleNodes;
  }, [createSmallNode, planData]);

  return <>
    <PlanNode planData={planData}>
      {createMiddleNode}
    </PlanNode>
  </>
}

export const getServerSideProps = () => {
  // TODO: getData from localstorage or server
  const fetchedPlanData: PlanData|null = null;

  return {
    props: {
      fetchedPlanData: fetchedPlanData ?? initialPlanData,
    }
  }
}

export default Plan;