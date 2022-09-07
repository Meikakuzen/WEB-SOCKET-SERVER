

const socketController = (socket) =>{
    console.log('cliente conectado')

    socket.on('disconnect', ()=>{
        console.log('cliente desconectado')
    })

    socket.on('enviar-mensaje', (payload, callback)=>{
        const id= 123456
        callback({id, fecha: new Date().getTime()})
        
        socket.broadcast.emit('enviar-mensaje', payload) //broadcast manda un mensaje a todos los clientes
    })
}

export default socketController