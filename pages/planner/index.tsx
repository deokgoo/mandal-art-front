import type { PlanData } from 'types/plan';
import { initialPlanData } from '@/utils/constant';
import Layout from '@/components/layout';
import Control from '@/components/control';
import Plan from '@/components/plan';

const Planner = () => {
  return (
    <Layout>
      <Layout.MainContent>
        <Plan />
      </Layout.MainContent>
      <Layout.SideContent>
        <Control>
          <Control.ShowCase />
          <Control.Title />
          <Control.Font />
          <Control.Color />
        </Control>
      </Layout.SideContent>
    </Layout>
  );
}

export const getServerSideProps = () => {
  const fetchedPlanData: PlanData|null = null;

  return {
    props: {
      fetchedPlanData: fetchedPlanData ?? initialPlanData,
    }
  }
}

export default Planner;
