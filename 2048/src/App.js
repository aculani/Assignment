import { useState } from 'react';
import './App.css';

function App() {
  const [puzzle, setPuzzle] = useState([
    [null, 2, 2, 4],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);
  const PuzzleRow = ({ row }) => {
    return row.map((col, index) => (
      <div key={`col-${index}`} className={`tile tile-${col}`}>
        {col}
      </div>
    ));
  };

  const moveLeft = () => {
    const newPuzzle = [];
    for (const row of puzzle) {
      const filteredCols = row.filter((col) => { return col !== null })
      const newRow = [];

      for (let i = 0; i < filteredCols.length; i++) {
        if (filteredCols[i] === filteredCols[i + 1]) {
          newRow.push(filteredCols[i] + filteredCols[i + 1]);
          i++;
        } else {
          newRow.push(filteredCols[i]);
        }
      }
      for (let i = 0; i < 4; i++) {
        if (!newRow[i]) newRow.push(null);
      }
      newPuzzle.push(newRow);

    }
    setPuzzle(newPuzzle);
  };

  const rotatePuzzle = (puzzle) => {
    const newPuzzle = [];
    for (let i = 0; i < puzzle.length; i++) {
      const newRow = [];
      for (let j = 0; j < puzzle[i].length; j++) {
        newRow.push(puzzle[i][j]);
      }
      newPuzzle.push(newRow);
    }
    return newPuzzle;
  };
  const unRotatePuzzle = (puzzle) => {
    const newPuzzle = [];
    for (let i = 0; i < puzzle.length; i++) {
      const newRow = [];
      for (let j = 0; j < puzzle[i].length; j++) {
        newRow.push(puzzle[i][j]);
      }
      newPuzzle.push(newRow);
    }
    return newPuzzle;
  };





  return (
    <div className='wrapper'>
      <button onClick={moveLeft}>Move Left</button>
      {/* <button onClick={moveRight}>Move Left</button>
      <button onClick={moveUp}>Move Left</button>
      <button onClick={moveDown}>Move Left</button> */}
      <h1>2048 game</h1>
      <div className='board'>
        {puzzle.map((row, index) => (
          <PuzzleRow row={row} key={`row-${index}`} />
        ))}
      </div>
    </div>
  );



}

export default App;
