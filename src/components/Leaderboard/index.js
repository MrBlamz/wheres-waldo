import React from 'react';
import { Table, TableBody, TableData, TableHeader, TableRow } from './styles';

const Leaderboard = ({ data, headerData }) => {
  const headerContent = headerData.map((data, index) => (
    <th key={index}>{data}</th>
  ));

  const content = data.map((doc) => {
    const { username, score, id } = doc;
    return (
      <TableRow key={id}>
        <TableData>{username}</TableData>
        <TableData>{score}</TableData>
      </TableRow>
    );
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>{headerContent}</TableRow>
      </TableHeader>
      <TableBody>{content}</TableBody>
    </Table>
  );
};

export default Leaderboard;
