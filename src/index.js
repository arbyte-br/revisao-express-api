// Importação do Express.js
const express = require('express');
const routes = require('./routes');

// Inicializa a aplicação Express.js
const app = express();
const port = 3000;

app.use(express.json()) // Utilizarei o JSON do Express para enviar arquivos em formato JSON para a aplicação.
app.use(routes) // Utiliarei as rotas criadas no arquivo routes.js

// Cria uma rota usando o método GET para a rota principal.
app.get('/', (req, res) => {
    res.send('O pai ta on!');
});

// A aplicação Express.js irá ouvir a porta 3000.
app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}!`);
    console.log(`Acesse: http://localhost:${port}`);
});
