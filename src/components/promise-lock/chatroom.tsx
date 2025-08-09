'use client';

import SendIcon from '@mui/icons-material/Send';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Socket, io } from 'socket.io-client';

import { envConfig } from '@/constants/env';

let socket: Socket;

export default function ChatRoom() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    socket = io(envConfig.socketUrl);

    socket.on('chat message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('chat message');
      socket.disconnect();
    };
  }, []);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    socket.emit('chat message', input);
    setInput('');
    inputRef.current?.focus();
  };

  return (
    <Box mt={6} mx="auto" px={2}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography align="center" gutterBottom variant="h5">
          聊天室
        </Typography>
        <Paper
          sx={{
            minHeight: 260,
            maxHeight: 340,
            mb: 2,
            p: 1,
            overflowY: 'auto',
            bgcolor: '#f9f9f9',
          }}
          variant="outlined"
        >
          <List dense>
            {messages.map((msg, i) => (
              <ListItem disablePadding key={i}>
                <ListItemText primary={msg} />
              </ListItem>
            ))}
          </List>
        </Paper>
        <form onSubmit={handleSend}>
          <Stack direction="row" spacing={1}>
            <TextField
              autoFocus
              fullWidth
              inputRef={inputRef}
              onChange={(e) => setInput(e.target.value)}
              placeholder="輸入訊息..."
              size="small"
              value={input}
            />
            <Button
              color="primary"
              disabled={!input.trim()}
              endIcon={<SendIcon />}
              type="submit"
              variant="contained"
            >
              送出
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
