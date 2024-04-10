//O dotenv ele vai ler o arquivo variaveis.env
require('dotenv').config({path:'variaveis.env'});
const express = require('express');

/* 
O cors vai permitir o acesso a outros recursos 
de outros sites mesmo estando em outro dorminio
*/
const cors = require('cors');
/* 
O body-parser vai converte o body e uma r
equisição para outros formatos
*/
const bodyParser = require('body-parser');

const routes = require('./routes');

//const mysql = require('mysql');

//const routes = require('./routes');

const serve = express();

serve.use(cors());
serve.use(bodyParser.urlencoded({extended: false}));

serve.use('/api', routes);

serve.listen(process.env.PORT, ()=>{
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
});









/*
// Configuração do MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ingredientes',
    authPlugin: 'mysql_native_password' // Adicione esta linha
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL:', err);
    } else {
      console.log('Conectado ao MySQL');
    }
  });

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rota para obter dados da tabela 'carnes'
app.get('/carnes', (req, res) => {
  db.query('SELECT * FROM carnes', (err, result) => {
    if (err) {
      res.status(500).send('Erro ao obter dados das carnes');
    } else {
      res.json(result);
    }
  });
});

// Rota para obter dados da tabela 'opcionais'
app.get('/opcionais', (req, res) => {
  db.query('SELECT * FROM opcionais', (err, result) => {
    if (err) {
      res.status(500).send('Erro ao obter dados dos opcionais');
    } else {
      res.json(result);
    }
  });
});

// Rota para obter dados da tabela 'paes'
app.get('/paes', (req, res) => {
    db.query('SELECT * FROM paes', (err, result) => {
        if (err){
            res.status(500).send('Erro ao obter dados dos paes');
        } else {
            res.json(result);
        }
    });
});

// Rote para obter dados dos status
app.get('/status', (req, res) => {
    db.query('SELECT * FROM status', (err, result) => {
        if (err){
            res.status(500).send('Erro ao obter dados dos status');
        } else {
            res.json(result);
        }
    });
});

// Rota para criar um burger
app.post('/bugers', (req, res) => {
    const {nome, carne, pao, opcionais, status} = req.body;

});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});*/