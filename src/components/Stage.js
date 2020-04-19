import React from 'react';
import Cell from './Cell';

const Stage = ({ stage }) => (
  <div>
    {/* mapping through stage array where each row is also an array of cells. For each sell we want
      to render out a cell component with given arguments.  */}
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
  </div>
);

// can verify props with propTypes
export default Stage;
