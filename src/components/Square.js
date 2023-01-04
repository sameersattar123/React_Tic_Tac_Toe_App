import React from 'react'

const Square = ({val , SquareClick}) => {
  return (
    <div className='square' onClick={SquareClick}>
      {val}
    </div>
  )
}

export default Square
