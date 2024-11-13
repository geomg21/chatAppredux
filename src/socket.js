import { io } from 'socket.io-client';

const socket = io('http://localhost:3001', {
  autoConnect: false,
});

// Simulate a real WebSocket by handling connections locally
socket.on('connect', () => {
  console.log('Connected to the socket server!');
});

socket.on('disconnect', () => {
  console.log('Disconnected from the socket server!');
});

export default socket;
