import React from 'react';
import { createStage } from '../gameHelpers';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// curly braces instead of implicit return b/c more logic in here and want to
// be more specific about what we're returning
const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()}/>
      {/* side bar element */}
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  )
}

export default Tetris;
