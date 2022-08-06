const { success, error } = require("../trait")

module.exports = {
    get: async function (req, res) {
        try {
            const spectatorFunctions = await SpectatorFunction.find().populateAll();
            if (!spectatorFunctions || spectatorFunctions.length == 0) throw 'No hay relación alguna entre los espectadores y las funciones';
            res.json(success(spectatorFunctions))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    detail: async function (req, res) {
        try {
            let id = req.param('id');
            const spectatorFunction = await SpectatorFunction.find(id);
            if (!spectatorFunction || spectatorFunction.length == 0) throw 'No hay relación entre espectador y función con ID: ' + id;
            res.json(success(spectatorFunction[0]))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    create: async function (req, res) {
        try {
            res.json(success(await SpectatorFunction.create(req.allParams()).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    update: async function (req, res) {
        try {
            res.json(success(await SpectatorFunction.update(req.param('id'), req.allParams()).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    delete: async function (req, res) {
        try {
            res.json(success(await SpectatorFunction.destroy(req.param('id')).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    }
};