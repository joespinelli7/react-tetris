import React from 'react';

// implicit return b/c you want to return everything inside the arrow function here
const Display = ({ gameOver, text }) => (
  <div>{text}</div>
);

export default Display;
