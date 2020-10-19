const socketio = require('socket.io');

let io;
const connections = []

exports.setupWebsocket = (server) => {
    io = socketio(server)

    io.on('connection', socket => {
        const { latitude, longitude, techs } = socket.handshake.query

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: techs.split(',').map(tech => tech.trim())

        })
    })

}

exports.findConnections = (techs) => {
    return connections.filter(connection => {
        return connection.techs.some(item => techs.includes(item))
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
         io.to(connection.id).emit(message, data)
    })
}