const router = require('express').Router();
const {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
} = require('../controllers/user.controller');
const { route } = require('./home.routes');

router.get('/user', getUsers);

router.get('/user/:idUser', getUser);

router.post('/user', postUser);

router.put('/user/:idUser', putUser);

router.delete('/user/:idUser', deleteUser);

module.exports = router;