import express from 'express'
import cors from 'cors'
import {createServer} from 'http'
import {Server} from 'socket.io' 
import socketController from '../sockets/controller.js'



class Servidor{

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.server = createServer(this.app)
        this.io = new Server(this.server)
        this.path = {}
         

        //this.conectarDB()
        
        //Middlewares
        this.middlewares()        
        //Rutas
        
        this.sockets()
    }

    middlewares (){
        this.app.use(cors())
        this.app.use(express.static('public'))
    }

    sockets(){

        this.io.on('connection', socketController)
        
    }

    

    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }


}

export default Servidor