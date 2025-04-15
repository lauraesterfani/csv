const express = require('express');
const app = express();
const routes = require('./routes');  // Certifique-se de que o caminho está correto

app.use(express.json());  // Para lidar com requisições JSON
app.use(routes);  // Aqui você deve passar o router como middleware

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
