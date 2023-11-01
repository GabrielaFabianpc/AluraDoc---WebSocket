import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id); //socket.id parar retornar o id do cliente q logou na pagina

  socket.on("texto_editor", (texto) => {
    //primeiro paramentro é o nome do evento q esta sendo emitido no lado do front
    socket.broadcast.emit("texto_editor_clientes", texto);
  }); // para mostrar o que o cliente esta escrevendo no documento no f12, exceto o que está conectado nesse socket
  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`); //o motivo de desconexão também pode ser obtido como parâmetro da função callback do evento.
  });
});
