const http = require('http');
const WebSocket = require('socket.io');

const server = http.createServer();
const io = WebSocket(server);

let currentIndex = 0;

io.on('connection', (socket) => {
  console.log('Client connected');

  // Send initial data to client
  socket.emit('update', { currentIndex });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('next', () => {
    // Update data
    currentIndex = (currentIndex + 1) % people.length;

    // Broadcast updated data to all clients
    io.emit('update', { currentIndex });
  });
});

server.listen(3001, () => {
  console.log('WebSocket server listening on port 3001');
});
