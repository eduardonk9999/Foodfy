const express = require('express')

// Chamando o Nunjucks
const nunjucks = require('nunjucks')

// Iniciando Server
const server = express()


// Configurando qual o template usado
server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

// Chmando JS E CSS
server.use(express.static('public'))

server.get('/', function(req, res){
    // res.send("Tó aqui com nodemon!!!")


    // retornando a home
    return res.render("home")
});

server.listen(5000, function(){
    console.log("Server is running")
})