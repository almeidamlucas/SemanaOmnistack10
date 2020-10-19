const express = require('express');
const routes = express.Router()
const DevControler = require('./controlers/DevControler')
const SearchControler = require('./controlers/SearchControler')

routes.get('/devs', DevControler.index)
routes.post('/devs', DevControler.store);
routes.delete('/devs/:id', DevControler.destroy)

routes.get('/search', SearchControler.index);

module.exports = routes