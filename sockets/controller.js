import TicketControl from "../models/ticket-control.js"


const ticketControl = new TicketControl()


const socketController = (socket) =>{

    socket.on('enviar-mensaje', (payload, callback)=>{
        const id= 123456
        callback({id, fecha: new Date().getTime()})
        
        socket.broadcast.emit('enviar-mensaje', payload) //broadcast manda un mensaje a todos los clientes
    })
}

export default socketController