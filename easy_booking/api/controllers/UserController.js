const { success, error } = require("../trait")

module.exports = {
    get: async function (req, res) {
        try {
            const users = await User.find();
            if (!users || users.length == 0) throw 'No hay usuarios';
            res.json(success(users))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    detail: async function (req, res) {
        try {
            let id = req.param('id');
            const user = await User.find(id);
            if (!user || user.length == 0) throw 'No hay usuario con ID: ' + id;
            res.json(success(user[0]))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    create: async function (req, res) {
        try {
            await User.create(req.allParams());
            res.json(success())
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    update: async function (req, res) {
        try {
            await User.update(req.param('id'), req.allParams());
            res.json(success())
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    delete: async function (req, res) {
        try {
            await User.destroy(req.param('id'));
            res.json(success())
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    }
};