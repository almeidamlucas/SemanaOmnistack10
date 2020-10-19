const Dev = require('../models/dev');

module.exports = {
    async index(req, res) {
        try{
        const { latitude, longitude, techs } = req.query

        const techsArray = techs.split(',').map(tech => tech.trim());


        const result = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    // $maxDistance: 10000,
                },
            },
        })
        return res.json({ result })
    } catch (err) {
    }
    }
}
