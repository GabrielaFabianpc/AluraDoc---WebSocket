import { atualizaEditorTexto } from "./documento.js";

const socket = io(); //para usarmos as variaveis do socket

function emitirTextoEditor(texto) {
  socket.emit("texto_editor", texto);
} //evento de quando uma pessoa escreve no documento exportando para o back-end com o socket.emit sendo o primeiro parametro o nome do evento e o segundo o dado q eu quero levar para o back end (nesse caso oq foi escrito)

socket.on("texto_editor_clientes", (texto) => {
  atualizaEditorTexto(texto);
}); //para mostrar oq esta sendo escrito em tempo real no documento.

export { emitirTextoEditor };
