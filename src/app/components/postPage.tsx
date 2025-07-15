export const dynamic = 'force-dynamic'; 

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="parent" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Posts (SSR)</h1>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

'use client';
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, Grid, Typography } from '@mui/material';

export default function TicTacToe() {
  const [userSymbol, setUserSymbol] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(true);

  const handleSymbolChoice = (symbol) => {
    setUserSymbol(symbol);
    setDialogOpen(false);
  };

  const handleClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isUserTurn ? userSymbol : (userSymbol === 'X' ? 'O' : 'X');
    setBoard(newBoard);
    setIsUserTurn(!isUserTurn);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Typography variant="h4">Tic Tac Toe</Typography>

      <Dialog open={dialogOpen}>
        <DialogTitle>Choose your symbol</DialogTitle>
        <div style={{ padding: 20 }}>
          <Button variant="contained" onClick={() => handleSymbolChoice('X')} style={{ marginRight: 10 }}>X</Button>
          <Button variant="contained" onClick={() => handleSymbolChoice('O')}>O</Button>
        </div>
      </Dialog>

      <Grid container spacing={1} justifyContent="center" style={{ maxWidth: 200, margin: 'auto', marginTop: 20 }}>
        {board.map((cell, idx) => (
          <Grid item xs={4} key={idx}>
            <Button
              variant="outlined"
              onClick={() => handleClick(idx)}
              style={{ height: 60, width: 60, fontSize: 24 }}
            >
              {cell}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
