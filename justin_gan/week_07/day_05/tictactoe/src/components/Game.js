import React, { PureComponent } from 'react';
import Board from './Board.js';

class Game extends PureComponent {
  constructor( props ) {
    super( props );
    this.state = {
      history: [
        {
        squares: Array(9).fill( null ),
        squarePlayed: null,
        }
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  _handleClick(i) {
    const history = this.state.history.slice( 0, this.state.stepNumber + 1 );
    const current = history[ history.length - 1 ];
    const squares = current.squares.slice();
    const { winner } = calculateWinner( squares );
    if ( winner || squares[i] ) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState( {
      history: history.concat( [ {
        squares: squares,
        squarePlayed: i,
      } ] ),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    } );
  }

  _jumpTo( step ) {
    this.setState( {
      stepNumber: step,
      xIsNext: ( step % 2 ) === 0,
    } );
  }

  render() {
    const history = this.state.history
    const current = history[ this.state.stepNumber ];
    const { winner, winningSquares } = calculateWinner( current.squares );

    const moves = history.map( ( step, move ) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';

      const moveDesc = getSquareColRow( step.squarePlayed );

      return (
        <li key={ move }>
          <button onClick={ this._jumpTo.bind( this, move ) }>{ desc }</button>
          <span> { moveDesc }</span>
        </li>
      );
    } );

    let status;
    if ( winner ) {
      status = 'Winner: ' + winner;
    }
    else {
      status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' );
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares = { current.squares }
            onClick = { this._handleClick.bind( this ) }
            winningSquares = { winningSquares }
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }

}

const calculateWinner = function ( squares ) {
  const lines = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
  ];

  for ( let i = 0; i < lines.length; i++ ) {
    const [ a, b, c ] = lines[i];
    if ( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
      return { winner: squares[a], winningSquares: lines[i] };
    }
  }
  return { winner: null };
}

const getSquareColRow = function ( squarePlayed ) {
  const moveLocation = {};
  let moveDesc;
  if ( squarePlayed === null ) {
    moveDesc = '';
  }
  else {
    switch ( squarePlayed % 3 ) {
      case 0:
      moveLocation.col = 1;
      break;
      case 1:
      moveLocation.col = 2;
      break;
      case 2:
      moveLocation.col = 3;
      break;
    }

    if ( squarePlayed < 3 ) {
      moveLocation.row = 1;
    }
    else if ( squarePlayed < 6 ){
      moveLocation.row = 2;
    }
    else {
      moveLocation.row = 3;
    }

    moveDesc = 'Move played: Column - ' + moveLocation.col + ', Row - ' + moveLocation.row;
  }

  return moveDesc;
}

export default Game;
