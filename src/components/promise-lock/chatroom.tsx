"use client";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

export default function ChatRoom() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 連線到獨立 socket server
    socket = io("http://localhost:8080");

    socket.on("chat message", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
      socket.disconnect();
    };
  }, []);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    socket.emit("chat message", input);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 20, border: "1px solid #ccc" }}>
      <h3>聊天室</h3>
      <div style={{ minHeight: 200, border: "1px solid #eee", marginBottom: 10, padding: 10 }}>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSend} style={{ display: "flex", gap: 8 }}>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="輸入訊息..."
          style={{ flex: 1 }}
        />
        <button type="submit">送出</button>
      </form>
    </div>
  );
}
