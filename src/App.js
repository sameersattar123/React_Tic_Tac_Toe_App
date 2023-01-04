import React, { useEffect, useState } from "react";
import "./App.css";
import Square from "./components/Square";
import { Patterns } from "./Patterns";

const App = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkifTie();
    if (player === "X") {
        setPlayer("O");
      } else {
        setPlayer("X");
      }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game finished! Winning Player : ${result.winner}`);
      restartGame();
    }
  }, [result]);
  const ChooseSqaure = (Square) => {
    setBoard(
      board.map((val, index) => {
        if (index == Square && val == "") {
          return player;
        }
        return val;
      })
    );
    }

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
        const firstPlayer = board[currPattern[0]];
      if(firstPlayer == "") return
      let foundWinningPattern = true;
      currPattern.forEach((index) => {
        if (board[index] != firstPlayer) {
          foundWinningPattern = false;
        }
      });
      
      if (foundWinningPattern) {
          setResult({ winner: player, state: "Won" });
        }
    });
};

const checkifTie = () =>{
    let filled = true
    board.forEach((square)=>{
        if(square == ""){
            filled = false;
        }
    })
    if(filled){
        setResult({winner : "No One" , state : "Tie"})
    }
}

const restartGame = () =>{
  setBoard(["", "", "", "", "", "", "", "", ""])
  setPlayer("O")
}
return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            SquareClick={() => {
              ChooseSqaure(0);
            }}
          />
          <Square
            val={board[1]}
            SquareClick={() => {
              ChooseSqaure(1);
            }}
          />
          <Square
            val={board[2]}
            SquareClick={() => {
              ChooseSqaure(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            SquareClick={() => {
              ChooseSqaure(3);
            }}
          />
          <Square
            val={board[4]}
            SquareClick={() => {
              ChooseSqaure(4);
            }}
          />
          <Square
            val={board[5]}
            SquareClick={() => {
              ChooseSqaure(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            SquareClick={() => {
              ChooseSqaure(6);
            }}
          />
          <Square
            val={board[7]}
            SquareClick={() => {
              ChooseSqaure(7);
            }}
          />
          <Square
            val={board[8]}
            SquareClick={() => {
              ChooseSqaure(8);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
