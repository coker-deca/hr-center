import React, { FunctionComponent } from 'react';

import { StyledTable, TableContainer, TableWrapper } from './Style';

type TableProps = {
  tableheaders: string[];
  tableRowData: any[];
  isLoading?: boolean;
  caption?: string;
};

const Table: FunctionComponent<TableProps> = ({
  tableheaders,
  tableRowData,
  isLoading,
  caption,
}) => {
  const tableRows = ({ item, index }: { item: any; index: number }) => {
    const columnData = tableheaders.map((keyD, i) => {
      let value = item[keyD.toLowerCase()];
      return value ? <td key={i}>{value}</td> : null;
    });
    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () =>
    tableRowData.map((item, index) => tableRows({ item, index }));

  const headRow = () =>
    tableheaders.map((title, index) => <td key={index}>{title}</td>);

  return (
    <TableWrapper>
      {!isLoading && (
        <TableContainer>
          <StyledTable>
            <caption>
              <h2>{caption}</h2>
            </caption>
            <thead>
              <tr>{headRow()}</tr>
            </thead>
            <tbody>{tableData()}</tbody>
          </StyledTable>
        </TableContainer>
      )}
      {isLoading && "Data loading"}
    </TableWrapper>
  );
};
export default Table;
