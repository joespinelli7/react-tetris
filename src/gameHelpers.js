// we're export(ing) all these so we can import them in our other components.
// the dimensions of the game (the stage):
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
const dimArr = [0, 'clear']

// here filling up the stage (20 cell's high and 12 cell's wide). Individual cell in a row
// fill up with [0, 'clear'], 0 representing a clean cell and 'clear' means no tetromino in the cell.
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
// line 11
// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
// Example:
// console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
// console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
// Array(STAGE_HEIGHT) creates empty array of 20 indexes

// My version: (breaking down the export const createStage above)
// const createStage = new Array(STAGE_HEIGHT);
// for (let i = 0; i < STAGE_HEIGHT; i++) {
//   createStage.push([]);
//   for (let j = 0; j < STAGE_WIDTH; j++) {
//     createStage.push(dimArr);
//   }
// }
