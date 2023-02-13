// Importamos las dependencias
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

// Creamos una aplicación de express
const app = express();

// Configuramos el servidor HTTP para ejecutar nuestra aplicación de express
const server = http.createServer(app);

// Inicializamos WebSockets en nuestro servidor HTTP
const wss = new WebSocket.Server({ server });

// Definimos una función que se ejecutará cuando un cliente se conecte al servidor
wss.on('connection', (ws) => {
  // Cuando el cliente envía un mensaje, lo enviamos a todos los demás clientes
  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

// Escuchamos en un puerto específico
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});