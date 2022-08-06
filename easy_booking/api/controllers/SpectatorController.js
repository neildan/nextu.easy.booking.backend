const { success, error } = require("../trait")

module.exports = {
    get: async function (req, res) {
        try {
            const spectators = await Spectator.find();
            if (!spectators || spectators.length == 0) throw 'No hay espectadores';
            res.json(success(spectators))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    detail: async function (req, res) {
        try {
            let id = req.param('id');
            const spectator = await Spectator.find(id);
            if (!spectator || spectator.length == 0) throw 'No hay espectador con ID: ' + id;
            res.json(success(spectator[0]))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    create: async function (req, res) {
        try {
            res.json(success(await Spectator.create(req.allParams()).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    update: async function (req, res) {
        try {
            res.json(success(await Spectator.update(req.param('id'), req.allParams()).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    delete: async function (req, res) {
        try {
            res.json(success(await Spectator.destroy(req.param('id')).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    }
};