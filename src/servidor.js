import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url); //caminho atual q estamos, caminho absoluto do computador ate servidor.js
const diretorioPublico = path.join(caminhoAtual, "../..", "public"); //navegar ate a pasta public
app.use(express.static(diretorioPublico)); //utilize o diretorio publico de forma statica, ou seja, todos os arquivos html, css, javascript que estão lá vão ser lidos de forma estatica e assim poderemos usar disponibilizar no navegador.

const servidorHttp = http.createServer(app);

servidorHttp.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}!`);
});

const io = new Server(servidorHttp); //io disponibiliza metodos do socket pra utilizarmos no desenvolvimento

export default io;
