const { success, error } = require("../trait")
const bcrypt = require('bcryptjs')
const jwt = require('jwt-simple')
const moment = require('moment')

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
            let data = req.allParams();
            data.password = bcrypt.hashSync(data.password, 10);
            await User.create(data);
            res.json(success())
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    },
    update: async function (req, res) {
        try {
            let data = req.allParams();
            if (data.password) {
                data.password = bcrypt.hashSync(data.password, 10);
            }
            await User.update(req.param('id'), data);
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
    },
    auth: async function (req, res) {
        try {
            let data = req.allParams();
            let user = await User.find({
                where: { username: data.username }
            });
            if(
                !user ||
                parseInt(user.length) === 0 ||
                !user[0] ||
                user[0] == undefined
            ) throw 'El username es incorrecto'
            user = user[0];
            if (!bcrypt.compareSync(data.password, user.password)) throw 'Contraseña incorrecta'
            let token = jwt.encode({
                userId: user.id,
                createAt: moment().unix(),
                expireAt: moment().add(8, 'hours').unix()
            }, 'nextusecret')
            res.json(success(token))
        } catch (err) {
            sails.log.debug(err)
            res.json(error(null, err))
        }
    }
};