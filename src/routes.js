const express = require('express');
const controller = require('./controllers/UserController');
const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        let users = await controller.getUsers();

        res.json(users);
    } catch (err) {
        res.json({
            error: "Houve algum problema ao buscar os usuários."
        })
    }
});

module.exports = router;