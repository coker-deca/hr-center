import React, { FunctionComponent, useEffect, useState } from 'react';

import Pagination from './Pagination';
import { StyledTable, TableContainer, TableWrapper } from './Style';

type TableProps = {
  tableheaders: string[];
  tableRowData: any[];
  isLoading: boolean;
  caption?: string;
  paginate?: boolean;
};

const Table: FunctionComponent<TableProps> = ({
  tableheaders,
  paginate,
  tableRowData,
  isLoading,
  caption,
}) => {
  const [page, setPage] = useState(1);
  const [list, setlist] = useState(tableRowData.slice(0, 5));
  const totalPages =
    tableRowData.length / 5 + (tableRowData.length % 5 ? 1 : 0);
  const tableRows = ({ item, index }: { item: any; index: number }) => {
    const columnData = tableheaders.map((keyD, i) => {
      let value = item[keyD.toLowerCase()];
      return value ? <td key={i}>{value}</td> : null;
    });
    return <tr key={index}>{columnData}</tr>;
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    setlist(tableRowData.slice((page - 1) * 5, page * 5));
  }, [page, tableRowData]);

  const tableData = () => list.map((item, index) => tableRows({ item, index }));

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
      {paginate && (
        <Pagination
          currentPage={page}
          isLoading={isLoading}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          totalPages={totalPages}
        />
      )}
    </TableWrapper>
  );
};
export default Table;
