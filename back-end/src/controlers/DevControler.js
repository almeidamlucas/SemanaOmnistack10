const axios = require('axios')
const Dev = require('../models/dev')
const { findConnections, sendMessage } = require('../websocket')

module.exports = {
    async index(req, res) {
        const result = await Dev.find();

        return res.json(result)
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`)
    
            const { name = login, avatar_url, bio } = apiResponse.data
        
            const techsArray = techs.split(',').map(tech => tech.trim());
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            const result = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

            const sendSocketMessageTo = findConnections(techsArray)

            sendMessage(sendSocketMessageTo, 'new-dev', result)

            return res.json(result);
        } 
    },
    async destroy (req, res) {
        const { id } = req.params

        const result = await Dev.deleteOne({
            _id: id
        })

        return res.json(result)
    }
}