// the dimensions of the game (the stage):
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// here filling up the stage with cell's, each new row (20) fill with a cell. Individual cell in a row
// fill up with [0, 'clear'], 0 representing a clean cell and 'clear' means no tetromino in the cell.
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
