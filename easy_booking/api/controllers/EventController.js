const { success, error } = require("../trait")

module.exports = {
    get: async function (req, res) {
        try {
            const events = await TheEvent.find().populateAll();
            if (!events || events.length == 0) throw 'No hay eventos';
            res.json(success(events))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    detail: async function (req, res) {
        try {
            let id = req.param('id');
            const event = await TheEvent.find(id).populateAll();
            if (!event || event.length == 0) throw 'No hay evento con ID: ' + id;
            res.json(success(event[0]))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    create: async function (req, res) {
        try {
            let data = req.allParams();
            await TheEvent.create(data);
            res.json(success())
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    update: async function (req, res) {
        try {
            let data = req.allParams();
            await TheEvent.update(req.param('id'), data);
            res.json(success())
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    delete: async function (req, res) {
        try {
            await TheEvent.destroy(req.param('id'));
            res.json(success())
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    }
};