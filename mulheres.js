const express = require("express")
const router = express.Router()

const app = express()
const porta = 3334

const mulheres = [
    {
        nome: 'Barbara Brito',
        imagem:'C:\Users\brito\AppData\Local\Temp\f14b253d-a53d-4bcb-8d62-983346ec1b61_Fotos do iCloud.zip.b61\Fotos do iCloud\IMG_8427.JPG',
        minibio: 'Estudande de analise e desenvolvimento de softwere e amante de techno'
    },
    {
        nome: 'barbara ariola',
        imagem: 'C:\Users\brito\Downloads\Fotos do iCloud(1)\Fotos do iCloud\IMG_8460.JPG', 
        minibio: 'astrologue e namorada'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)