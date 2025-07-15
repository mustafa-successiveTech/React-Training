"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Dialog, DialogTitle, Typography } from "@mui/material";

type Props = {
  board: (string | null)[];
  handleClick: (index: number) => void;
};

export default function TicTacToe() {
  const [userSymbol, setUserSymbol] = useState<string | null>(null);
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [dialogOpen, setDialogOpen] = useState<boolean>(true);
  const [isUserTurn, setIsUserTurn] = useState<boolean>(true);

  const aiSymbol = userSymbol === "X" ? "O" : "X";

  const handleSymbolChoice = (symbol: string) => {
    setUserSymbol(symbol);
    setDialogOpen(false);
  };

  const checkForWin = (boardToCheck: string[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return userSymbol === boardToCheck[a] ? "User " : "AI ";
      }
    }

    return null;
  };

  const checkForDraw = (boardToCheck: string[]) => {
    return boardToCheck.every((cell) => cell !== null);
  };

  const handleClick = (index: number) => {
    if (!isUserTurn || board[index]) return;

    const updatedBoard = [...board];
    updatedBoard[index] = userSymbol;
    setBoard(updatedBoard);

    const winner = checkForWin(updatedBoard);

    if (winner) {
      alert(`${winner} wins!`);
      return;
    }

    if (checkForDraw(updatedBoard)) {
      alert("Draw!");
      return;
    }

    setIsUserTurn(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setDialogOpen(true);
    setUserSymbol(null);
    setIsUserTurn(true);
  };

  const aiMove = (updatedBoard: string[]) => {
    const emptyIndices = updatedBoard
      .map((cell, idx) => (cell === null ? idx : null))
      .filter((idx) => idx !== null) as number[];

    if (emptyIndices.length === 0) return;

    let index: number;
    do {
      index = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    } while (updatedBoard[index] !== null);

    updatedBoard[index] = aiSymbol;
    setBoard([...updatedBoard]);

    const winner = checkForWin(updatedBoard);

    if (winner) {
      alert(`AI (${winner}) wins!`);
      resetGame();
      return;
    }

    if (checkForDraw(updatedBoard)) {
      alert("Draw!");
      resetGame();
      return;
    }

    setIsUserTurn(true);
  };

  useEffect(() => {
    if (!isUserTurn && userSymbol !== null) {
      const updatedBoard = [...board];
      setTimeout(() => aiMove(updatedBoard), 500);
    }
  }, [isUserTurn]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <Typography variant="h3">Tic Tac Toe</Typography>

      <Dialog open={dialogOpen}>
        <DialogTitle>Choose your symbol</DialogTitle>
        <div style={{ padding: 20 }}>
          <Button
            variant="contained"
            onClick={() => handleSymbolChoice("X")}
            style={{ marginRight: 10 }}
          >
            X
          </Button>
          <Button variant="contained" onClick={() => handleSymbolChoice("O")}>
            O
          </Button>
        </div>
      </Dialog>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 60px)',
          gap: '10px',
          justifyContent: 'center',
          maxWidth: 250,
          margin: 'auto',
          marginTop: 20
        }}
      >
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            style={{ height: 60, width: 60, fontSize: 24 }}
          >
            {cell ?? ""}
          </button>
        ))}
      </div>
    </div>
  );
}
