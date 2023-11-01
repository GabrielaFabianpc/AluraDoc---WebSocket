import { emitirTextoEditor } from "./socket-front-document.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor(textoEditor.value); //textoEditor.value de fato contém o valor que o usuário digitou no campo de texto no HTML.
});

function atualizaEditorTexto(texto) {
  textoEditor.value = texto; //textoEditor.value de fato contém o valor que o usuário digitou no campo de texto no HTML.
}

export { atualizaEditorTexto };
