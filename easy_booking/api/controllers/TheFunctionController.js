const { success, error } = require("../trait")

module.exports = {
    get: async function (req, res) {
        try {
            const functions = await TheFunction.find().populateAll();
            if (!functions || functions.length == 0) throw 'No hay funciones';
            res.json(success(functions))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    detail: async function (req, res) {
        try {
            let id = req.param('id');
            const theFunction = await TheFunction.find(id);
            if (!theFunction || theFunction.length == 0) throw 'No hay función con ID: ' + id;
            res.json(success(theFunction[0]))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    create: async function (req, res) {
        try {
            res.json(success(await TheFunction.create(req.allParams()).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    update: async function (req, res) {
        try {
            res.json(success(await TheFunction.update(req.param('id'), req.allParams()).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    delete: async function (req, res) {
        try {
            res.json(success(await TheFunction.destroy(req.param('id')).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    }
};