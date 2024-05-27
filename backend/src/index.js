const express = require('express');


//conexão mongoose e mongo
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://VictorNoronha:root@clustersfn.o6zup3o.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSFN')

const userRoutes = require('../api/ocorrencias');

const app = express();

// Middleware para parsear JSON
app.use(express.json());


// Definir rotas da API
app.use('/api/ocorrencias', userRoutes);

// Exportar o aplicativo para ser usado pelo Vercel
module.exports = app;