import WebSocket, { WebSocketServer } from "ws";

const PORT = 8080;

const wss = new WebSocketServer({ port: PORT });


wss.on('connection', function connection(ws) {
    let notification = 0;
    const timer = setInterval(() => {
        notification++;
        ws.send(notification);
    }, 1000);
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
    
    ws.off("close", () => {
        console.log("disconnected");
        clearInterval(timer);
    });
});
