
const online= document.querySelector('#idOnline')
const offline= document.querySelector('#idOffline')

const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io()

socket.on('connect', ()=>{
    console.log('Servidor conectado')
    offline.style.display= 'none'
})

socket.on('disconnect', ()=>{
    console.log('Servidor desconectado')
    online.style.display= 'none'
})

socket.on('enviar-mensaje', (payload)=>{
    console.log(payload)
})


btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value

    const payload = {
        mensaje,
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id)=>{
            console.log("Dede el server", id)
    })
})

