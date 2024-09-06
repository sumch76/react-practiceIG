import React ,{useState} from 'react'

const TicTacToe = () => {
   const[board,setBoard]=useState(Array(9).fill(null));
   const[Xvalue,setXvalue]=useState(true);
   const[winner,setWinner]=useState(null);

  //render square function
  //pass index as argument to renderSquare function
  const renderSquare=(index)=>
  {
    return(
      <button className='square' onClick={()=>handleClick(index)}>{board[index]}</button>
    )
  }

  //handdleclick function
  // pass index as argument to handleClick function
  const handleClick = (index)=>
  {
    if(board[index]!=null)
      return;
    console.log(index,"Click"); 
    //copy of board in newBoard
    const newBoard=[...board];
    newBoard[index]=Xvalue ? 'X':'O';
    setBoard(newBoard);
    setXvalue(!Xvalue);

    const winningCombo=winnerCheck(newBoard);
    if(winningCombo){
      setWinner(newBoard[winningCombo[0]]);
    }
    //draw condition
    if(newBoard.every((square)=>square!==null))
      {
        setWinner('NoOne');
      }
  }

 
  //winnercheck condtions
  const winnerCheck=(newBoard)=>
  {
    const combinations=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let i=0;i<combinations.length;i++)
    {
      const [a,b,c]=combinations[i];
      if(board[a]  && board[a]===board[b] && board[b]===board[c])
      {
        return combinations[i];
      }
    }
    return null;
  }

  const handleReset=()=>
  {
    setBoard(Array(9).fill(null));
    setWinner(null);
  }
  //
  return (
    <>
     <div className='board'>
      <div className='board-row'> 
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      </div>
      <div className='board-row'> 
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className='board-row'> 
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
    </div>
    <button onClick={handleReset}>Reset</button>
    {/* {winner && <h1>Winner is {winner}</h1>} */}
    {winner && winner === 'NoOne' ? <h1>It's a Draw!</h1> : winner ? <h1>Winner is {winner}</h1> : null}
   
    </>
   
  )
};

export default TicTacToe;
