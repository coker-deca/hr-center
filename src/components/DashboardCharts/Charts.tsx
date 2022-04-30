import { FunctionComponent } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import TreeChart from '../Org-Chart/OrgChart';
import { Column, Row } from '../templates/style';
import { StyledButton } from '../ui/Button';
import Card from '../ui/Card';

const data: any[] = [];

for (let x = 1; x <= 24; x++) {
  data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

export type Keys = {
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

const myData: Keys[] = JSON.parse(localStorage.getItem("data") || "[]");
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
const renderOrgChart = () => {
  newData.forEach((el) => {
    if (el.manager === null) {
      root = el;
      return;
    }
    const parentEl = newData[idMapping[el.manager]];
    parentEl.children = [...parentEl.children, el];
  });
  return <TreeChart data={root} />;
};

const Charts: FunctionComponent<{ buttonClick: () => void }> = ({
  buttonClick,
}) => {
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
        if (typeof value === "string" && props.includes(value)) {
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
        <StyledButton
          style={{ marginLeft: "auto" }}
          size="40%"
          type="submit"
          onClick={buttonClick}
        >
          Add Employee
        </StyledButton>
      </Row>
      <hr />
      <Row>
        <hr />
      </Row>
      <Row>{renderOrgChart()}</Row>
    </Column>
  );
};

export default Charts;
