import { FunctionComponent } from 'react';

import HomeTemplate from '../components/templates/HomeTemplate';
import Charts from '../DashboardCharts/Charts';

const Home: FunctionComponent = () => {
  return (
    <HomeTemplate>
      <Charts />
    </HomeTemplate>
  );
};

export default Home;
