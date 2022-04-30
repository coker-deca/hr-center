import { memo, useCallback, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import TreeChart from '../components/Org-Chart/OrgChart';
import { Column, Row } from '../components/templates/style';
import Card from '../components/ui/Card';
import myData from '../resources/data/data.json';

const data: any[] = [];

for (let x = 1; x <= 24; x++) {
  data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

type Keys = {
  sickLeaveDays: number;
  leaveAvailable: number;
  department: string;
  management: string;
  office: string;
  away: string;
  title: string;
  manager: string;
  name: string;
};
export type OrgChartType = {
  manager: string | null;
  name: string;
  children: OrgChartType[];
};
const newData = myData.map((datum) => ({
  manager: datum.manager,
  name: datum.name,
  children: new Array<OrgChartType>(0),
}));

const initObj: any = {};
const idMapping = newData.reduce((acc, el, i) => {
  acc[el.name] = i;
  return acc;
}, initObj);

let root: OrgChartType;
let i = 0;

const renderOrgChart = () => {
  newData.forEach((el) => {
    console.log(i);
    i += 1;
    if (el.manager === null) {
      root = el;
      return;
    }
    const parentEl = newData[idMapping[el.manager]];
    parentEl.children = [...parentEl.children, el];
  });
  return <TreeChart data={root} />;
};

const Charts = () => {
  useEffect(() => {}, []);
  console.log("MyData", myData);
  const renderPie = (list: string[], division: string) => {
    return (
      <Column>
        <Row>
          <Column>{renderLegend(division)}</Column>
        </Row>
        <hr />
        <Column>
          <PieChart
            animate
            label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
            style={{ height: "200px" }}
            labelStyle={{
              ...defaultLabelStyle,
            }}
            radius={42}
            labelPosition={108}
            data={chartValues(list)}
          />
        </Column>
      </Column>
    );
  };
  const renderLegend = (title: string) => {
    return (
      <Row>
        <div style={{ color: "#513B56", border: "1px dotted grey" }}>
          <span>{title}</span>
        </div>
      </Row>
    );
  };

  const defaultLabelStyle = {
    fontSize: "5px",
    fontFamily: "sans-serif",
  };

  const renderStat = (title: keyof Keys, value: string) => {
    const x = myData.filter(
      (item) =>
        item[title] === title ||
        item[title] === "true" ||
        (title === "away" && item[title] !== "false")
    ).length;
    const y = myData.length - x;
    return (
      <Card
        className="stat"
        title={title.toUpperCase()}
        value={[
          { name: title.charAt(0).toUpperCase() + title.slice(1), number: x },
          { name: value.charAt(0).toUpperCase() + value.slice(1), number: y },
        ]}
      />
    );
  };

  const chartValues = (props: string[]) => {
    const data = myData.reduce((accumulator: any, obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        if (props.includes(value)) {
          if (!accumulator[value]) accumulator[value] = [];
          accumulator[value].push(obj);
        }
      });
      return accumulator;
    }, {});
    return props.map((value) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const hex = "#" + randomColor;
      const obj = {
        title: value === "false" ? "Available" : value,
        value: data[value].length,
        color: hex,
      };
      return obj;
    });
  };
  const memoizedChart = useCallback(() => renderOrgChart(), []);
  return (
    <Column>
      <Row>
        {renderStat("management", "non-management")}
        {renderStat("office", "remote")}
        {renderStat("away", "in-office")}
      </Row>
      <Row>
        <hr />
      </Row>
      <Row>
        <p>People Division</p>
      </Row>
      <Row>
        {renderPie(
          [
            "Engineering",
            "People/Process",
            "Marketing",
            "Finance",
            "Operations",
          ],
          "By Departments"
        )}
        {renderPie(["Sick", "Leave", "false"], "By Leave Status")}
      </Row>
      <Row>
        <hr />
      </Row>
      <Row>{memoizedChart()}</Row>
    </Column>
  );
};

export default memo(Charts);
