import { FunctionComponent } from 'react';

import { Keys } from '../components/DashboardCharts/Charts';
import Table from '../components/Table/Table';
import HomeTemplate from '../components/templates/HomeTemplate';

const myData: Keys[] = JSON.parse(localStorage.getItem("data") || "[]");

export const AllEmployeeList: FunctionComponent = () => (
  <HomeTemplate>
    <Table
      tableheaders={["Name", "Title", "Department", "Manager"]}
      tableRowData={myData}
      caption="Employee List"
      isLoading={myData.length ? false : true}
    />
  </HomeTemplate>
);
