//importa dependencia de la biblioteca express
const express = require('express')

//crea la aplicacion 
const app = express()

//lee el body en formato json
app.use(express.json())

//define un puerto en que va a escuchar pedidos
const port = 3000
let usuarios = [
    { email: "pablo@mail.com", "usuario": "pablo", contrasenia: "1234" }]
