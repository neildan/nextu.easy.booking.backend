const { success, error } = require("../trait")

module.exports = {
    get: async function (req, res) {
        try {
            const theaterHalls = await TheaterHall.find();
            if (!theaterHalls || theaterHalls.length == 0) throw 'No hay teatros';
            res.json(success(theaterHalls))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    detail: async function (req, res) {
        try {
            let id = req.param('id');
            const theaterHall = await TheaterHall.find(id);
            if (!theaterHall || theaterHall.length == 0) throw 'No hay teatros con ID: ' + id;
            res.json(success(theaterHall[0]))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    create: async function (req, res) {
        try {
            res.json(success(await TheaterHall.create(req.allParams()).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    update: async function (req, res) {
        try {
            res.json(success(await TheaterHall.update(req.param('id'), req.allParams()).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    delete: async function (req, res) {
        try {
            res.json(success(await TheaterHall.destroy(req.param('id')).fetch()))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    }
};