//configurando express
const express = require ('express')
const app = express();

app.use(express.json());

//conexão mongoose e mongo
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://VictorNoronha:root@clustersfn.o6zup3o.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSFN')




//criando um model
const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    senha: String
})

const Ocorrencias = mongoose.model('Ocorrencias', {
    nome: String,
    data: String,
    descricao: String,
    endereco: String
})



//porta definida
app.listen(8000);


//get padrao

app.get('/', (request, response) => {
    return response.json({
        nome : "Victor Noronha",
        idade : "18"
    });
});
//primeira request
app.get('/usuario', async (req, res) => {
    const usuario = await Usuario.find()
    res.send(usuario);
})

//criando um post
app.post('/usuario', async (req, res) => {
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    })
    await usuario.save();
    res.send(usuario);
})




//primeira request
app.get('/ocorrencias', async (req, res) => {
    const ocorrencias = await Ocorrencias.find()
    res.send(ocorrencias);
})

//criando um post ocorrencia
app.post('/ocorrencias', async (req, res) => {
    const ocorrencias = new Ocorrencias({
        nome: req.body.nome,
        data: req.body.data,
        descricao: req.body.descricao,
        endereco: req.body.endereco
    })
    await ocorrencias.save();
    res.send(ocorrencias);
})