import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate !important;
  border-spacing: 0;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: ${(props) => props.theme.borderColor};

  th {
    padding: 0.8rem 0;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const TableRow = styled.tr``;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 0.8rem;
  border-top: 1px solid #ddd;
`;
