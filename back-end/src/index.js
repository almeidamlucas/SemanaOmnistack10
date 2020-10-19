const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app)
setupWebsocket(server)

const dbString = 'Linha do banco' //Insira aqui a linha com os dados do seu banco de dados

mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)


server.listen(3333, () => {
    console.log('App listening on port 3333!');
});