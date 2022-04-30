import styled from 'styled-components';

export const TableWrapper = styled.div`
  max-width: 60rem;
  margin: auto;
  font-family: DM Sans;
  padding: 10px;

  .pagination-button-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
  }

  .current-page {
    color: black;
  }

  .pagination-page-info {
    color: grey;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.005em;
    margin: 0px 15px;
  }

  button {
    font-size: 17px;
  }

  button:hover {
    background-color: #498fff;
    color: white;
  }

  button:disabled {
    cursor: not-allowed;
    background-color: grey;
    :hover {
      background: none;
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  background: white;
  width: 100%;
  min-width: 760px;
  overflow: scroll;
  padding: 1em;
  margin: 12px 0;
  border-collapse: collapse;
  border: 1px solid grey;
  box-sizing: border-box;
  border-radius: 5px;

  thead tr td {
    text-align: left;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.005em;
    padding: 16px;
  }

  tbody tr td {
    border-top: 1px solid #f1f1f1;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    text-align: left;
    padding: 15px;
  }
`;
