export default function calculateWinner(squares) {
  let winner = null;

  for (let i = 0; i < 3; i += 1) {
    const startingLine = i * 3;
    const line = squares.slice(startingLine, startingLine + 3);
    winner = getPlayerThatFilledTheLine(line) || winner;

    const row = squares.filter((value, index) => index % 3 === i);
    winner = getPlayerThatFilledTheLine(row) || winner;
  }

  const diagonal = [squares[0], squares[4], squares[8]];
  winner = getPlayerThatFilledTheLine(diagonal) || winner;

  const reverseDiagonal = [squares[2], squares[4], squares[6]];
  winner = getPlayerThatFilledTheLine(reverseDiagonal) || winner;

  return winner;
}

function getPlayerThatFilledTheLine(line) {
  if (line.every(value => value === 'X')) {
    return 'X';
  }
  if (line.every(value => value === 'O')) {
    return 'O';
  }

  return null;
}
